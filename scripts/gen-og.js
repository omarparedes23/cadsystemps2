const sharp = require('sharp');

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#111111;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="glow1" cx="70%" cy="20%" r="50%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.12" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0" />
    </radialGradient>
    <radialGradient id="glow2" cx="30%" cy="80%" r="50%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:0.06" />
      <stop offset="100%" style="stop-color:#2563eb;stop-opacity:0" />
    </radialGradient>
  </defs>
  
  <rect width="1200" height="630" fill="url(#bg)" />
  <rect width="1200" height="630" fill="url(#glow1)" />
  <rect width="1200" height="630" fill="url(#glow2)" />
  
  <g stroke="rgba(255,255,255,0.02)" stroke-width="1">
    ${Array.from({length: 20}, (_, i) => `<line x1="${i*64}" y1="0" x2="${i*64}" y2="630" />`).join('')}
    ${Array.from({length: 11}, (_, i) => `<line x1="0" y1="${i*64}" x2="1200" y2="${i*64}" />`).join('')}
  </g>
  
  <rect x="80" y="80" width="80" height="80" rx="16" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)" stroke-width="2" />
  <text x="120" y="145" font-family="Georgia, serif" font-size="56" font-weight="bold" fill="#3b82f6" text-anchor="middle">C</text>
  
  <text x="190" y="135" font-family="Georgia, serif" font-size="48" font-weight="bold" fill="#f5f0e8">CAD SYSTEMPS</text>
  
  <text x="80" y="240" font-family="Arial, sans-serif" font-size="30" fill="#a1a1aa">Consultoría Informática y Desarrollo de Software</text>
  <text x="80" y="285" font-family="Arial, sans-serif" font-size="30" fill="#a1a1aa">en Lima, Perú</text>
  
  <text x="80" y="380" font-family="Arial, sans-serif" font-size="22" fill="#71717a">Desarrollo a medida • Capacitación TI • Consultoría Estratégica</text>
  
  <text x="80" y="530" font-family="Arial, sans-serif" font-size="30" fill="#3b82f6">cadsystemps.com.pe</text>
  <text x="80" y="575" font-family="Arial, sans-serif" font-size="22" fill="#71717a">+51 982 057 635  |  caddsystemps@gmail.com</text>
  
  <rect x="780" y="140" width="360" height="350" rx="24" fill="rgba(17,17,17,0.8)" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
  
  <text x="820" y="260" font-family="Georgia, serif" font-size="64" font-weight="bold" fill="#f5f0e8">40+</text>
  <text x="820" y="300" font-family="Arial, sans-serif" font-size="20" fill="#a1a1aa">Proyectos entregados</text>
  
  <text x="820" y="400" font-family="Georgia, serif" font-size="64" font-weight="bold" fill="#f5f0e8">99.9%</text>
  <text x="820" y="440" font-family="Arial, sans-serif" font-size="20" fill="#a1a1aa">Uptime garantizado</text>
</svg>
`;

sharp(Buffer.from(svg))
  .jpeg({ quality: 95 })
  .toFile('public/og-image.jpg')
  .then(() => console.log('OG image created: public/og-image.jpg'))
  .catch(err => console.error('Error:', err));
