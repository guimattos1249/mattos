import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'file:///C:/Users/Guilherme%20Mattos/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs';

const root = 'C:/www/mattos';
const out = path.join(root, 'brand-kit');
const png = path.join(out, 'imagens');
const svg = path.join(out, 'vetores');

await fs.mkdir(png, { recursive: true });
await fs.mkdir(svg, { recursive: true });

const files = {
  principal: path.join(root, 'assets/logo-principal.svg'),
  horizontal: path.join(root, 'assets/logo-secundaria.svg'),
  light: path.join(root, 'assets/logo-secundaria-clara.svg'),
  mono: path.join(root, 'assets/monograma.svg'),
};

for (const [name, src] of Object.entries(files)) {
  await fs.copyFile(src, path.join(svg, `${name}.svg`));
}

const principal = await fs.readFile(files.principal);
const horizontal = await fs.readFile(files.horizontal);
const light = await fs.readFile(files.light);
const mono = await fs.readFile(files.mono);

async function render(input, filename, width, height, background) {
  let image = sharp(input, { density: 300 }).resize(width, height, { fit: 'contain' });
  if (background) image = image.flatten({ background });
  await image.png({ compressionLevel: 9 }).toFile(path.join(png, filename));
}

await render(principal, '01-logo-principal-fundo-claro.png', 3000, 900, '#ffffff');
await render(principal, '02-logo-principal-transparente.png', 3000, 900);
await render(horizontal, '03-logo-horizontal-fundo-claro.png', 2480, 600, '#ffffff');
await render(light, '04-logo-horizontal-fundo-escuro.png', 2480, 600, '#071a3a');
// O arquivo principal passa a ser opaco para não exibir quinas brancas em visualizadores.
await render(mono, '05-monograma.png', 1080, 1080, '#071a3a');

const monoUri = `data:image/svg+xml;base64,${mono.toString('base64')}`;
const lightUri = `data:image/svg+xml;base64,${light.toString('base64')}`;
const horizontalUri = `data:image/svg+xml;base64,${horizontal.toString('base64')}`;

const monogramRounded = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
  <rect width="1080" height="1080" fill="#0f172a"/>
  <rect x="42" y="42" width="996" height="996" rx="210" fill="#071a3a"/>
  <image href="${monoUri}" x="18" y="18" width="1044" height="1044"/>
</svg>`;
await render(Buffer.from(monogramRounded), '05a-monograma-quinas-arredondadas.png', 1080, 1080, '#0f172a');
await render(mono, '05b-monograma-fundo-totalmente-preenchido.png', 1080, 1080, '#071a3a');

const avatar = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071a3a"/><stop offset="1" stop-color="#0f172a"/></linearGradient><radialGradient id="glow"><stop stop-color="#2563eb" stop-opacity=".28"/><stop offset="1" stop-color="#071a3a" stop-opacity="0"/></radialGradient></defs>
  <rect width="1080" height="1080" fill="url(#bg)"/><circle cx="750" cy="280" r="430" fill="url(#glow)"/>
  <image href="${monoUri}" x="150" y="150" width="780" height="780"/>
</svg>`;
await render(Buffer.from(avatar), '06-avatar-instagram.png', 1080, 1080, '#071a3a');

const avatarRounded = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071a3a"/><stop offset="1" stop-color="#0f172a"/></linearGradient><radialGradient id="glow"><stop stop-color="#2563eb" stop-opacity=".28"/><stop offset="1" stop-color="#071a3a" stop-opacity="0"/></radialGradient></defs>
  <rect width="1080" height="1080" fill="#0f172a"/>
  <rect x="36" y="36" width="1008" height="1008" rx="205" fill="url(#bg)"/>
  <circle cx="750" cy="280" r="430" fill="url(#glow)"/>
  <image href="${monoUri}" x="150" y="150" width="780" height="780"/>
</svg>`;
await render(Buffer.from(avatarRounded), '06a-avatar-instagram-quinas-arredondadas.png', 1080, 1080, '#0f172a');
await render(Buffer.from(avatar), '06b-avatar-instagram-fundo-totalmente-preenchido.png', 1080, 1080, '#071a3a');

const post = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#020b1d"/><stop offset=".6" stop-color="#071a3a"/><stop offset="1" stop-color="#0d3550"/></linearGradient><linearGradient id="line"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#14b8a6"/></linearGradient></defs>
  <rect width="1080" height="1350" fill="url(#bg)"/><circle cx="1010" cy="40" r="390" fill="#2563eb" opacity=".08"/><circle cx="20" cy="1320" r="360" fill="#14b8a6" opacity=".08"/>
  <image href="${lightUri}" x="120" y="425" width="840" height="205"/>
  <rect x="435" y="700" width="210" height="8" rx="4" fill="url(#line)"/>
  <text x="540" y="790" text-anchor="middle" fill="#ffffff" font-family="Arial,Helvetica,sans-serif" font-size="39" font-weight="600" letter-spacing="8">PRESENÇA DIGITAL</text>
  <text x="540" y="852" text-anchor="middle" fill="#14b8a6" font-family="Arial,Helvetica,sans-serif" font-size="39" font-weight="700" letter-spacing="8">QUE GERA NEGÓCIOS</text>
  <text x="540" y="1210" text-anchor="middle" fill="#94a3b8" font-family="Arial,Helvetica,sans-serif" font-size="25" letter-spacing="3">ASSINATURA INSTITUCIONAL • 1080 × 1350</text>
</svg>`;
await render(Buffer.from(post), '07-assinatura-post-instagram.png', 1080, 1350);

const cardFront = `<svg xmlns="http://www.w3.org/2000/svg" width="1050" height="600">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#020b1d"/><stop offset=".62" stop-color="#071a3a"/><stop offset="1" stop-color="#0d3550"/></linearGradient><linearGradient id="accent"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#14b8a6"/></linearGradient></defs>
  <rect width="1050" height="600" fill="url(#bg)"/><path d="M0 600V470l135 130z" fill="#2563eb"/><path d="M0 600V525l78 75z" fill="#14b8a6"/><circle cx="1020" cy="-20" r="280" fill="#2563eb" opacity=".08"/>
  <image href="${lightUri}" x="132" y="178" width="786" height="190"/>
  <rect x="455" y="405" width="140" height="6" rx="3" fill="url(#accent)"/>
  <text x="525" y="462" text-anchor="middle" fill="#cbd5e1" font-family="Arial,Helvetica,sans-serif" font-size="24" font-weight="600" letter-spacing="6">PRESENÇA DIGITAL QUE GERA NEGÓCIOS</text>
</svg>`;
await render(Buffer.from(cardFront), '08-cartao-visita-frente.png', 1050, 600);

const cardBack = `<svg xmlns="http://www.w3.org/2000/svg" width="1050" height="600">
  <rect width="1050" height="600" fill="#ffffff"/><rect width="26" height="600" fill="#071a3a"/><rect x="26" width="12" height="600" fill="#2563eb"/><rect x="38" width="8" height="600" fill="#14b8a6"/>
  <image href="${monoUri}" x="90" y="140" width="300" height="300"/>
  <line x1="430" y1="105" x2="430" y2="495" stroke="#e2e8f0" stroke-width="3"/>
  <text x="490" y="165" fill="#0f172a" font-family="Arial,Helvetica,sans-serif" font-size="49" font-weight="800" letter-spacing="2">SEU NOME</text>
  <text x="492" y="210" fill="#2563eb" font-family="Arial,Helvetica,sans-serif" font-size="23" font-weight="700" letter-spacing="4">CARGO / ESPECIALIDADE</text>
  <g fill="#475569" font-family="Arial,Helvetica,sans-serif" font-size="25"><text x="492" y="340">(00) 00000-0000</text><text x="492" y="410">@mattos_solucoesdigitais</text></g>
  <circle cx="465" cy="332" r="6" fill="#14b8a6"/><circle cx="465" cy="402" r="6" fill="#14b8a6"/>
</svg>`;
await render(Buffer.from(cardBack), '09-cartao-visita-verso-editavel.png', 1050, 600);

await fs.writeFile(path.join(svg, 'cartao-visita-frente.svg'), cardFront, 'utf8');
await fs.writeFile(path.join(svg, 'cartao-visita-verso-editavel.svg'), cardBack, 'utf8');
await fs.writeFile(path.join(svg, 'assinatura-post-instagram.svg'), post, 'utf8');

console.log(`Kit exportado para ${out}`);
