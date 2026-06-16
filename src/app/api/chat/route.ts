import { NextResponse } from "next/server";
import OpenAI from "openai";
import { readFileSync, appendFileSync, mkdirSync } from "fs";
import { join } from "path";

const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: "https://api.deepseek.com",
});

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function logConversation(messages: ChatMessage[], response: string) {
  try {
    const logsDir = join(process.cwd(), "logs");
    mkdirSync(logsDir, { recursive: true });

    const entry = {
      timestamp: new Date().toISOString(),
      messages,
      response,
    };

    appendFileSync(
      join(logsDir, "conversations.jsonl"),
      JSON.stringify(entry) + "\n",
      "utf-8"
    );
  } catch {
    // Logging failure never breaks the chat
  }
}

export async function POST(request: Request) {
  const { messages }: { messages: ChatMessage[] } = await request.json();

  const systemPrompt = readFileSync(
    join(process.cwd(), "data", "chatbot-context.md"),
    "utf-8"
  );

  const stream = await client.chat.completions.create({
    model: "deepseek-chat",
    messages: [{ role: "system", content: systemPrompt }, ...messages],
    stream: true,
    max_tokens: 500,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      let fullResponse = "";

      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content ?? "";
        if (text) {
          fullResponse += text;
          controller.enqueue(encoder.encode(text));
        }
      }

      controller.close();
      logConversation(messages, fullResponse);
    },
  });

  return new NextResponse(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
