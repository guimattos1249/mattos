import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'file:///C:/Users/Guilherme%20Mattos/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs';

const root = 'C:/www/mattos';
const out = path.join(root, 'brand-kit/posts/carrossel-apresentacao');
const vectors = path.join(out, 'vetores');
await fs.mkdir(out, { recursive: true });
await fs.mkdir(vectors, { recursive: true });

const logoLight = await fs.readFile(path.join(root, 'assets/logo-secundaria-clara.svg'));
const logoDark = await fs.readFile(path.join(root, 'assets/logo-secundaria.svg'));
const mono = await fs.readFile(path.join(root, 'assets/monograma.svg'));
const lightUri = `data:image/svg+xml;base64,${logoLight.toString('base64')}`;
const darkUri = `data:image/svg+xml;base64,${logoDark.toString('base64')}`;
const monoUri = `data:image/svg+xml;base64,${mono.toString('base64')}`;

const NAVY = '#071a3a';
const DEEP = '#020b1d';
const INK = '#0f172a';
const BLUE = '#2563eb';
const TEAL = '#14b8a6';
const SLATE = '#64748b';
const WHITE = '#ffffff';
const OFF = '#f8fafc';

const defs = `<defs>
  <linearGradient id="darkBg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${DEEP}"/><stop offset=".62" stop-color="${NAVY}"/><stop offset="1" stop-color="#0d3550"/></linearGradient>
  <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0"><stop stop-color="${BLUE}"/><stop offset="1" stop-color="${TEAL}"/></linearGradient>
  <linearGradient id="blueBg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#1148c8"/><stop offset=".55" stop-color="${BLUE}"/><stop offset="1" stop-color="#0d8f9b"/></linearGradient>
  <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#020b1d" flood-opacity=".18"/></filter>
</defs>`;

const base = (content, bg = `fill="url(#darkBg)"`) => `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">${defs}<rect width="1080" height="1350" ${bg}/>${content}</svg>`;
const t = (x, y, text, size, color, weight = 400, anchor = 'start', spacing = 0) => `<text x="${x}" y="${y}" fill="${color}" font-family="Arial,Helvetica,sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" letter-spacing="${spacing}">${text}</text>`;
const line = (x1, y1, x2, y2, color, width = 3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/>`;
const progress = (page, dark = true) => {
  const baseColor = dark ? '#ffffff' : INK;
  return `<g opacity=".85">${t(90, 1278, `0${page} / 06`, 24, baseColor, 700, 'start', 3)}${line(775, 1270, 990, 1270, baseColor, 3)}<rect x="775" y="1267" width="${(215 / 6) * page}" height="6" rx="3" fill="${TEAL}"/></g>`;
};

const slides = [];

slides.push(base(`
  <circle cx="1020" cy="40" r="410" fill="${BLUE}" opacity=".08"/><circle cx="20" cy="1330" r="360" fill="${TEAL}" opacity=".08"/>
  <image href="${lightUri}" x="85" y="80" width="650" height="158"/>
  <rect x="88" y="330" width="118" height="9" rx="4" fill="url(#accent)"/>
  ${t(88, 445, 'CONHEÇA A', 36, '#93c5fd', 700, 'start', 7)}
  ${t(88, 565, 'MATTOS', 112, WHITE, 800, 'start', 3)}
  ${t(88, 650, 'SOLUÇÕES DIGITAIS', 49, TEAL, 700, 'start', 6)}
  ${t(88, 780, 'Presença digital que', 53, WHITE, 600)}
  ${t(88, 845, 'gera negócios.', 53, WHITE, 800)}
  <rect x="88" y="965" width="300" height="76" rx="38" fill="${BLUE}"/>
  ${t(238, 1014, 'DESLIZE  →', 24, WHITE, 700, 'middle', 4)}
  ${progress(1, true)}
`));

slides.push(base(`
  <circle cx="1010" cy="160" r="310" fill="${BLUE}" opacity=".07"/><circle cx="40" cy="1260" r="260" fill="${TEAL}" opacity=".08"/>
  <image href="${darkUri}" x="88" y="72" width="455" height="110"/>
  ${t(88, 290, 'POR QUE EXISTIMOS', 24, BLUE, 700, 'start', 5)}
  ${t(88, 400, 'Sua presença digital', 58, INK, 800)}
  ${t(88, 470, 'precisa trabalhar', 58, INK, 800)}
  ${t(88, 540, 'por você.', 58, BLUE, 800)}
  ${t(88, 640, 'Mais do que aparecer, sua marca precisa', 31, SLATE, 400)}
  ${t(88, 685, 'ser encontrada, transmitir confiança e', 31, SLATE, 400)}
  ${t(88, 730, 'transformar atenção em oportunidades.', 31, SLATE, 400)}
  <g filter="url(#shadow)"><rect x="88" y="825" width="904" height="250" rx="34" fill="${WHITE}"/></g>
  ${t(215, 920, 'VISIBILIDADE', 24, INK, 800, 'middle', 1.5)}${t(385, 920, '→', 32, BLUE, 700, 'middle')}
  ${t(545, 920, 'CONFIANÇA', 24, INK, 800, 'middle', 1.5)}${t(710, 920, '→', 32, TEAL, 700, 'middle')}
  ${t(865, 920, 'NEGÓCIOS', 24, INK, 800, 'middle', 1.5)}
  <rect x="152" y="975" width="776" height="9" rx="4" fill="url(#accent)"/>
  ${t(540, 1035, 'Estratégia clara. Execução consistente. Resultado real.', 24, SLATE, 600, 'middle')}
  ${progress(2, false)}
`, `fill="${OFF}"`));

const serviceCard = (x, y, number, title, subtitle, accent) => `<g filter="url(#shadow)"><rect x="${x}" y="${y}" width="430" height="285" rx="32" fill="#0d2245" stroke="#31507e" stroke-width="2"/></g><circle cx="${x + 62}" cy="${y + 65}" r="34" fill="${accent}"/>${t(x + 62, y + 75, number, 24, WHITE, 800, 'middle')}${t(x + 35, y + 145, title, 29, WHITE, 800)}${t(x + 35, y + 195, subtitle[0], 22, '#cbd5e1', 400)}${t(x + 35, y + 230, subtitle[1], 22, '#cbd5e1', 400)}`;
slides.push(base(`
  <image href="${lightUri}" x="88" y="62" width="455" height="110"/>
  ${t(88, 260, 'O QUE FAZEMOS', 24, TEAL, 700, 'start', 5)}
  ${t(88, 345, 'Soluções para sua marca', 53, WHITE, 800)}
  ${t(88, 408, 'ser vista e escolhida.', 53, WHITE, 800)}
  ${serviceCard(88, 485, '01', 'SEO LOCAL', ['Mais visibilidade nas', 'buscas da sua região.'], BLUE)}
  ${serviceCard(562, 485, '02', 'GOOGLE BUSINESS', ['Perfil otimizado para', 'atrair mais clientes.'], TEAL)}
  ${serviceCard(88, 810, '03', 'CRIAÇÃO DE SITES', ['Sites modernos, rápidos', 'e orientados à conversão.'], TEAL)}
  ${serviceCard(562, 810, '04', 'ESTRATÉGIA DIGITAL', ['Presença integrada para', 'crescimento consistente.'], BLUE)}
  ${progress(3, true)}
`));

const step = (y, n, title, body, color) => `<circle cx="145" cy="${y}" r="46" fill="${color}"/>${t(145, y + 11, n, 28, WHITE, 800, 'middle')}${t(225, y - 10, title, 31, INK, 800)}${t(225, y + 34, body, 24, SLATE, 400)}`;
slides.push(base(`
  <image href="${darkUri}" x="88" y="62" width="455" height="110"/>
  ${t(88, 260, 'COMO TRABALHAMOS', 24, BLUE, 700, 'start', 5)}
  ${t(88, 345, 'Do diagnóstico ao', 54, INK, 800)}
  ${t(88, 410, 'crescimento.', 54, BLUE, 800)}
  ${line(145, 535, 145, 1035, '#dbe4f0', 5)}
  ${step(555, '01', 'DIAGNÓSTICO', 'Entendemos o negócio, o público e os objetivos.', BLUE)}
  ${step(710, '02', 'POSICIONAMENTO', 'Organizamos a presença e tornamos a mensagem clara.', TEAL)}
  ${step(865, '03', 'EXECUÇÃO', 'Colocamos sites, perfis e estratégias para funcionar.', BLUE)}
  ${step(1020, '04', 'EVOLUÇÃO', 'Acompanhamos resultados e identificamos oportunidades.', TEAL)}
  ${progress(4, false)}
`, `fill="${OFF}"`));

const chip = (x, y, w, text) => `<rect x="${x}" y="${y}" width="${w}" height="76" rx="38" fill="#ffffff" opacity=".15" stroke="#ffffff" stroke-opacity=".28" stroke-width="2"/>${t(x + w / 2, y + 48, text, 25, WHITE, 700, 'middle')}`;
slides.push(base(`
  <rect x="68" y="38" width="505" height="148" rx="28" fill="${NAVY}" opacity=".3"/>
  <image href="${lightUri}" x="88" y="62" width="455" height="110"/>
  ${t(88, 270, 'PARA QUEM É', 24, WHITE, 700, 'start', 5)}
  ${t(88, 365, 'Para negócios que', 58, WHITE, 800)}
  ${t(88, 435, 'querem crescer com', 58, WHITE, 800)}
  ${t(88, 505, 'mais estratégia.', 58, WHITE, 800)}
  ${chip(88, 625, 390, 'EMPRESAS LOCAIS')}${chip(505, 625, 487, 'PRESTADORES DE SERVIÇO')}
  ${chip(88, 730, 450, 'PROFISSIONAIS LIBERAIS')}${chip(565, 730, 427, 'NEGÓCIOS EM EXPANSÃO')}
  <rect x="88" y="885" width="904" height="225" rx="34" fill="#ffffff" opacity=".96"/>
  ${t(130, 960, 'Você cuida do seu negócio.', 34, INK, 800)}
  ${t(130, 1010, 'A Mattos transforma sua presença digital', 27, SLATE, 400)}
  ${t(130, 1050, 'em um ativo para gerar novas oportunidades.', 27, SLATE, 400)}
  ${progress(5, true)}
`, `fill="url(#blueBg)"`));

slides.push(base(`
  <circle cx="540" cy="650" r="420" fill="${BLUE}" opacity=".07"/>
  <image href="${monoUri}" x="400" y="88" width="280" height="280"/>
  ${t(540, 500, 'VAMOS GERAR', 28, TEAL, 700, 'middle', 7)}
  ${t(540, 595, 'NEGÓCIOS', 78, WHITE, 800, 'middle', 3)}
  ${t(540, 680, 'JUNTOS?', 78, WHITE, 800, 'middle', 3)}
  ${t(540, 795, 'Sua marca pode ser mais visível,', 31, '#cbd5e1', 400, 'middle')}
  ${t(540, 840, 'mais confiável e mais preparada para crescer.', 31, '#cbd5e1', 400, 'middle')}
  <rect x="245" y="940" width="590" height="82" rx="41" fill="url(#accent)"/>
  ${t(540, 993, 'FALE COM A MATTOS', 25, WHITE, 800, 'middle', 4)}
  ${t(540, 1125, '@mattos_solucoesdigitais', 27, WHITE, 700, 'middle')}
  ${progress(6, true)}
`));

for (let i = 0; i < slides.length; i++) {
  const num = String(i + 1).padStart(2, '0');
  const svgPath = path.join(vectors, `${num}-slide.svg`);
  const pngPath = path.join(out, `${num}-slide.png`);
  await fs.writeFile(svgPath, slides[i], 'utf8');
  await sharp(Buffer.from(slides[i]), { density: 144 }).png({ compressionLevel: 9 }).toFile(pngPath);
}

const caption = `Tem empresa que apenas está online. E tem empresa que usa o digital para gerar negócios.\n\nA MATTOS Soluções Digitais ajuda empresas, profissionais e negócios locais a construírem uma presença mais clara, confiável e preparada para crescer.\n\nNossas soluções:\n• SEO Local\n• Otimização do Google Business Profile\n• Criação de sites\n• Estratégia e presença digital\n\nDa visibilidade à conversão, conectamos estratégia, execução e resultado.\n\nQuer transformar sua presença digital em novas oportunidades? Fale com a Mattos.\n\n@mattos_solucoesdigitais\n\n#MattosSolucoesDigitais #MarketingDigital #PresencaDigital #SEOLocal #GoogleBusinessProfile #CriacaoDeSites #NegociosLocais #EstrategiaDigital`;
await fs.writeFile(path.join(out, 'legenda-pronta.txt'), caption, 'utf8');

const alt = `01 — Capa apresentando a Mattos Soluções Digitais e o conceito “Presença digital que gera negócios”.\n02 — Explica que uma presença digital deve gerar visibilidade, confiança e negócios.\n03 — Apresenta SEO Local, Google Business Profile, criação de sites e estratégia digital.\n04 — Mostra o processo: diagnóstico, posicionamento, execução e evolução.\n05 — Indica os públicos atendidos: empresas locais, prestadores, profissionais e negócios em expansão.\n06 — Chamada final para falar com a Mattos.`;
await fs.writeFile(path.join(out, 'textos-alternativos.txt'), alt, 'utf8');

console.log(`Carrossel criado em ${out}`);
