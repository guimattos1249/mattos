import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'file:///C:/Users/Guilherme%20Mattos/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs';

const root = 'C:/www/mattos';
const out = path.join(root, 'brand-kit/posts/03-google-business-profile');
const vectors = path.join(out, 'vetores');
await fs.mkdir(vectors, { recursive: true });

const light = await fs.readFile(path.join(root, 'assets/logo-secundaria-clara.svg'));
const dark = await fs.readFile(path.join(root, 'assets/logo-secundaria.svg'));
const mono = await fs.readFile(path.join(root, 'assets/monograma.svg'));
const lightUri = `data:image/svg+xml;base64,${light.toString('base64')}`;
const darkUri = `data:image/svg+xml;base64,${dark.toString('base64')}`;
const monoUri = `data:image/svg+xml;base64,${mono.toString('base64')}`;

const NAVY = '#071a3a';
const DEEP = '#020b1d';
const INK = '#0f172a';
const BLUE = '#2563eb';
const TEAL = '#14b8a6';
const SLATE = '#64748b';
const OFF = '#f8fafc';
const WHITE = '#ffffff';
const LINE = '#dbe5f2';

const defs = `<defs>
  <linearGradient id="dark" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${DEEP}"/><stop offset=".62" stop-color="${NAVY}"/><stop offset="1" stop-color="#0b314c"/></linearGradient>
  <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0"><stop stop-color="${BLUE}"/><stop offset="1" stop-color="${TEAL}"/></linearGradient>
  <linearGradient id="soft" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#dbeafe"/><stop offset="1" stop-color="#ccfbf1"/></linearGradient>
  <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="22" flood-color="#020b1d" flood-opacity=".16"/></filter>
  <filter id="smallShadow"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#020b1d" flood-opacity=".11"/></filter>
</defs>`;

const tx = (x, y, text, size, color, weight = 400, anchor = 'start', spacing = 0, family = 'Inter') =>
  `<text x="${x}" y="${y}" fill="${color}" font-family="${family},Arial,sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" letter-spacing="${spacing}">${text}</text>`;
const base = (content, bg = 'url(#dark)') => `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">${defs}<rect width="1080" height="1350" fill="${bg}"/>${content}</svg>`;
const header = darkMode => `<image href="${darkMode ? lightUri : darkUri}" x="78" y="52" width="430" height="104"/>`;
const progress = (n, darkMode = true) => `${tx(82,1295,`0${n} / 09`,21,darkMode ? WHITE : INK,700,'start',3)}<line x1="790" y1="1288" x2="995" y2="1288" stroke="${darkMode ? '#dbeafe' : '#334155'}" stroke-width="4" stroke-linecap="round"/><rect x="790" y="1284" width="${205*n/9}" height="8" rx="4" fill="${TEAL}"/>`;
const eyebrow = (label, darkMode = true) => tx(82, 280, label, 24, darkMode ? TEAL : BLUE, 700, 'start', 5);

const pinIcon = (x,y,s=1,color=BLUE) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0-34c-24 0-43 19-43 43 0 34 43 79 43 79S43 43 43 9C43-15 24-34 0-34z" fill="none" stroke="${color}" stroke-width="8"/><circle cx="0" cy="9" r="14" fill="none" stroke="${color}" stroke-width="8"/></g>`;
const check = (x,y,color=TEAL) => `<circle cx="${x}" cy="${y}" r="24" fill="${color}"/><path d="M${x-10} ${y}l7 8 15-18" fill="none" stroke="${WHITE}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`;
const search = (x,y,color=SLATE) => `<circle cx="${x}" cy="${y}" r="23" fill="none" stroke="${color}" stroke-width="7"/><line x1="${x+17}" y1="${y+17}" x2="${x+37}" y2="${y+37}" stroke="${color}" stroke-width="7" stroke-linecap="round"/>`;
const tinyGoogle = (x,y,size=27) => `<text x="${x}" y="${y}" font-family="Inter,Arial,sans-serif" font-size="${size}" font-weight="700"><tspan fill="#4285f4">G</tspan><tspan fill="#ea4335">o</tspan><tspan fill="#fbbc05">o</tspan><tspan fill="#4285f4">g</tspan><tspan fill="#34a853">l</tspan><tspan fill="#ea4335">e</tspan></text>`;

const slides = [];

// 01 — capa
slides.push(base(`
  <circle cx="1005" cy="120" r="420" fill="${BLUE}" opacity=".09"/><circle cx="75" cy="1320" r="330" fill="${TEAL}" opacity=".07"/>
  ${header(true)}<rect x="82" y="278" width="120" height="9" rx="4" fill="url(#accent)"/>
  ${tx(82,405,'SEU PERFIL NO GOOGLE',38,'#93c5fd',700,'start',5,'Poppins')}
  ${tx(82,535,'É MUITO MAIS',82,WHITE,700,'start',-2,'Poppins')}
  ${tx(82,640,'DO QUE ENDEREÇO',65,WHITE,700,'start',-2,'Poppins')}
  ${tx(82,728,'E TELEFONE.',75,TEAL,700,'start',-2,'Poppins')}
  <g filter="url(#shadow)"><rect x="645" y="790" width="353" height="320" rx="34" fill="${WHITE}"/></g>
  ${tinyGoogle(688,845,24)}${tx(688,902,'Mattos Soluções Digitais',23,INK,700)}${tx(688,936,'Soluções digitais · Bauru',17,SLATE,500)}
  <circle cx="705" cy="993" r="24" fill="#dbeafe"/>${pinIcon(705,987,.27,BLUE)}
  <circle cx="781" cy="993" r="24" fill="#ccfbf1"/><path d="M771 990h20M781 980v20" stroke="${TEAL}" stroke-width="4" stroke-linecap="round"/>
  <circle cx="857" cy="993" r="24" fill="#dbeafe"/><path d="M846 997h22M850 987h14" stroke="${BLUE}" stroke-width="4" stroke-linecap="round"/>
  <circle cx="933" cy="993" r="24" fill="#ccfbf1"/><path d="M922 988h22v17h-22z" fill="none" stroke="${TEAL}" stroke-width="3"/>
  <rect x="688" y="1048" width="267" height="18" rx="9" fill="#e2e8f0"/><rect x="688" y="1078" width="180" height="12" rx="6" fill="#edf2f7"/>
  <rect x="82" y="1034" width="292" height="76" rx="38" fill="${BLUE}"/>${tx(228,1083,'DESLIZE  →',23,WHITE,700,'middle',4)}
  ${progress(1,true)}
`));

// 02 — vitrine
slides.push(base(`
  ${header(false)}${eyebrow('QUANDO A BUSCA JÁ COMEÇOU',false)}
  ${tx(82,375,'Seu perfil funciona como',51,INK,700,'start',-1,'Poppins')}${tx(82,440,'uma vitrine da empresa.',55,BLUE,700,'start',-1,'Poppins')}
  <g filter="url(#shadow)"><rect x="82" y="525" width="916" height="458" rx="38" fill="${WHITE}"/></g>
  ${tinyGoogle(130,585,28)}
  <rect x="130" y="620" width="820" height="82" rx="41" fill="#f8fafc" stroke="${LINE}" stroke-width="2"/>${search(173,656,SLATE)}${tx(225,670,'soluções digitais perto de mim',27,INK,500)}
  <rect x="130" y="748" width="500" height="188" rx="24" fill="#eef5ff"/>
  ${pinIcon(205,804,.55,BLUE)}${tx(282,802,'Sua empresa',28,INK,700)}${tx(282,842,'Categoria · avaliações · horário',20,SLATE,500)}${tx(282,879,'site  ·  telefone  ·  rota',20,BLUE,700)}
  <rect x="663" y="748" width="287" height="188" rx="24" fill="url(#soft)"/><path d="M710 881l58-67 43 43 38-51 59 75z" fill="${BLUE}" opacity=".25"/><circle cx="865" cy="797" r="22" fill="${TEAL}" opacity=".55"/>
  ${tx(82,1080,'Quem pesquisa já tem intenção.',31,SLATE,500)}${tx(82,1130,'Seu perfil ajuda a transformar intenção em ação.',31,INK,700)}
  ${progress(2,false)}
`,OFF));

// 03 — categoria e serviços
slides.push(base(`
  ${header(true)}${eyebrow('01  ·  CLAREZA',true)}
  ${tx(82,380,'CATEGORIA E SERVIÇOS',53,WHITE,700,'start',-1,'Poppins')}
  ${tx(82,435,'dizem ao Google — e ao cliente — o que você faz.',28,'#cbd5e1',500)}
  <g filter="url(#smallShadow)"><rect x="82" y="535" width="436" height="445" rx="34" fill="#0d2245" stroke="#31507e" stroke-width="2"/></g>
  <circle cx="160" cy="625" r="45" fill="${BLUE}"/><path d="M139 612h42v29h-42zM149 600h22v12" fill="none" stroke="${WHITE}" stroke-width="6" stroke-linejoin="round"/>
  ${tx(130,730,'CATEGORIA',29,TEAL,700,'start',3)}${tx(130,790,'Define a atividade',31,WHITE,700)}${tx(130,834,'principal da empresa.',31,WHITE,700)}
  ${check(153,914,BLUE)}${tx(195,923,'Mais contexto para a busca',21,'#cbd5e1',500)}
  <g filter="url(#smallShadow)"><rect x="562" y="535" width="436" height="445" rx="34" fill="${WHITE}"/></g>
  <circle cx="640" cy="625" r="45" fill="${TEAL}"/><path d="M619 609h42M619 625h42M619 641h27" stroke="${WHITE}" stroke-width="6" stroke-linecap="round"/>
  ${tx(610,730,'SERVIÇOS',29,BLUE,700,'start',3)}${tx(610,790,'Mostram o que',31,INK,700)}${tx(610,834,'o cliente pode contratar.',31,INK,700)}
  ${check(633,914,TEAL)}${tx(675,923,'Respostas antes do contato',21,SLATE,500)}
  <rect x="82" y="1055" width="916" height="9" rx="4" fill="url(#accent)"/>${tx(540,1120,'QUANTO MAIS CLARO, MAIS FÁCIL DECIDIR.',26,WHITE,700,'middle',2)}
  ${progress(3,true)}
`));

// 04 — fotos e avaliações
slides.push(base(`
  ${header(false)}${eyebrow('02  ·  CONFIANÇA',false)}
  ${tx(82,375,'FOTOS E AVALIAÇÕES',57,INK,700,'start',-1,'Poppins')}${tx(82,438,'ajudam o cliente a sentir segurança.',32,SLATE,500)}
  <g filter="url(#smallShadow)"><rect x="82" y="530" width="535" height="470" rx="34" fill="${WHITE}"/></g>
  ${tx(130,592,'FOTOS',25,BLUE,700,'start',4)}
  <rect x="130" y="630" width="439" height="238" rx="22" fill="url(#soft)"/><path d="M130 868l130-135 92 90 70-82 147 127z" fill="${BLUE}" opacity=".28"/><circle cx="480" cy="688" r="32" fill="${TEAL}" opacity=".65"/>
  ${tx(130,925,'Ambiente, produtos, equipe',24,INK,700)}${tx(130,962,'e resultados reais.',24,SLATE,500)}
  <g filter="url(#smallShadow)"><rect x="657" y="530" width="341" height="470" rx="34" fill="${WHITE}"/></g>
  ${tx(705,592,'AVALIAÇÕES',25,TEAL,700,'start',3)}${tx(705,674,'★★★★★',38,'#fbbc05',700)}${tx(705,728,'4,9',58,INK,700,'start',-1,'Poppins')}${tx(797,725,'de 5',23,SLATE,500)}${tx(705,760,'EXEMPLO ILUSTRATIVO',11,SLATE,700,'start',2)}
  <rect x="705" y="777" width="245" height="14" rx="7" fill="#e2e8f0"/><rect x="705" y="807" width="210" height="14" rx="7" fill="#edf2f7"/><rect x="705" y="837" width="230" height="14" rx="7" fill="#edf2f7"/>
  ${tx(705,918,'Prova social para',23,INK,700)}${tx(705,952,'reduzir dúvidas.',23,SLATE,500)}
  ${tx(82,1098,'ANTES DE FALAR COM VOCÊ,',26,BLUE,700,'start',3)}${tx(82,1148,'o cliente já está formando uma impressão.',32,INK,700)}
  ${progress(4,false)}
`,OFF));

// 05 — publicações e produtos
slides.push(base(`
  ${header(true)}${eyebrow('03  ·  ATIVIDADE',true)}
  ${tx(82,375,'PUBLICAÇÕES E PRODUTOS',52,WHITE,700,'start',-1,'Poppins')}${tx(82,435,'mantêm o perfil útil, atual e comercial.',30,'#cbd5e1',500)}
  <g filter="url(#smallShadow)"><rect x="82" y="530" width="436" height="492" rx="34" fill="${WHITE}"/></g>
  <rect x="130" y="580" width="340" height="190" rx="22" fill="#dbeafe"/><path d="M130 770l90-95 61 58 54-72 135 109z" fill="${BLUE}" opacity=".3"/><circle cx="409" cy="625" r="27" fill="${TEAL}" opacity=".6"/>
  ${tx(130,830,'PUBLICAÇÕES',27,BLUE,700,'start',3)}${tx(130,883,'Novidades, ofertas e',25,INK,700)}${tx(130,920,'informações relevantes.',25,SLATE,500)}
  <rect x="130" y="956" width="152" height="42" rx="21" fill="#dbeafe"/>${tx(206,984,'SAIBA MAIS',15,BLUE,700,'middle',2)}
  <g filter="url(#smallShadow)"><rect x="562" y="530" width="436" height="492" rx="34" fill="#0d2245" stroke="#31507e" stroke-width="2"/></g>
  <rect x="610" y="580" width="340" height="190" rx="22" fill="#0b3151"/><path d="M735 662h90v82h-90zM752 636h56l17 26h-90z" fill="none" stroke="${TEAL}" stroke-width="8" stroke-linejoin="round"/>
  ${tx(610,830,'PRODUTOS',27,TEAL,700,'start',3)}${tx(610,883,'Itens, soluções e',25,WHITE,700)}${tx(610,920,'detalhes para comparar.',25,'#cbd5e1',500)}
  <rect x="610" y="956" width="150" height="42" rx="21" fill="${TEAL}"/>${tx(685,984,'VER MAIS',15,DEEP,700,'middle',2)}
  ${tx(540,1112,'PERFIL PARADO PARECE NEGÓCIO PARADO.',26,WHITE,700,'middle',2)}
  ${progress(5,true)}
`));

// 06 — informações, site e WhatsApp
const contactCard = (y, n, title, body, accent) => `<rect x="82" y="${y}" width="916" height="170" rx="30" fill="${WHITE}" filter="url(#smallShadow)"/><circle cx="158" cy="${y+85}" r="42" fill="${accent}"/>${tx(158,y+94,n,23,WHITE,700,'middle')}${tx(230,y+72,title,29,INK,700)}${tx(230,y+112,body,23,SLATE,500)}${tx(938,y+98,'→',35,accent,700,'middle')}`;
slides.push(base(`
  ${header(false)}${eyebrow('04  ·  CAMINHO PARA O CONTATO',false)}
  ${tx(82,365,'INFORMAÇÕES COMPLETAS',52,INK,700,'start',-1,'Poppins')}${tx(82,425,'tornam o próximo passo mais simples.',31,BLUE,700)}
  ${contactCard(505,'01','INFORMAÇÕES','Horários, endereço e formas de atendimento.',BLUE)}
  ${contactCard(705,'02','SITE','Mais detalhes, autoridade e contexto.',TEAL)}
  ${contactCard(905,'03','WHATSAPP','Contato rápido para tirar dúvidas e avançar.',BLUE)}
  ${tx(82,1160,'MENOS ATRITO. MAIS CHANCE DE CONTATO.',25,INK,700,'start',2)}
  ${progress(6,false)}
`,OFF));

// 07 — visão completa
const feature = (x,y,label,color=BLUE) => `<rect x="${x}" y="${y}" width="210" height="112" rx="24" fill="#0d2245" stroke="#31507e" stroke-width="2"/><circle cx="${x+34}" cy="${y+34}" r="10" fill="${color}"/>${tx(x+28,y+76,label,20,WHITE,700)}`;
slides.push(base(`
  ${header(true)}${eyebrow('UM PERFIL COMPLETO REÚNE',true)}
  ${tx(82,370,'TUDO O QUE AJUDA',60,WHITE,700,'start',-1,'Poppins')}${tx(82,442,'O CLIENTE A DECIDIR.',60,TEAL,700,'start',-1,'Poppins')}
  ${feature(82,540,'CATEGORIA',BLUE)}${feature(316,540,'SERVIÇOS',TEAL)}${feature(550,540,'FOTOS',BLUE)}${feature(784,540,'AVALIAÇÕES',TEAL)}
  ${feature(82,680,'PUBLICAÇÕES',TEAL)}${feature(316,680,'PRODUTOS',BLUE)}${feature(550,680,'INFORMAÇÕES',TEAL)}${feature(784,680,'SITE',BLUE)}
  <rect x="82" y="842" width="916" height="150" rx="30" fill="url(#accent)"/>${tx(150,910,'+',41,WHITE,700)}${tx(220,905,'WHATSAPP',33,WHITE,700,'start',2,'Poppins')}${tx(220,947,'para facilitar o contato no momento certo.',23,WHITE,500)}
  <line x1="82" y1="1060" x2="998" y2="1060" stroke="#31507e" stroke-width="2"/>${tx(540,1126,'NÃO É SÓ CADASTRO. É PRESENÇA DIGITAL.',27,WHITE,700,'middle',2)}
  ${progress(7,true)}
`));

// 08 — jornada
const step = (x,n,title,body,color) => `<circle cx="${x}" cy="690" r="64" fill="${color}"/>${tx(x,702,n,31,WHITE,700,'middle')}${tx(x,815,title,27,INK,700,'middle',2)}${tx(x,857,body,21,SLATE,500,'middle')}`;
slides.push(base(`
  ${header(false)}${eyebrow('O PERFIL TRABALHA NA JORNADA',false)}
  ${tx(82,372,'DA BUSCA À AÇÃO.',64,INK,700,'start',-1,'Poppins')}${tx(82,435,'Cada informação ajuda o cliente a avançar.',31,BLUE,700)}
  <line x1="215" y1="690" x2="865" y2="690" stroke="#c7d7ea" stroke-width="10" stroke-linecap="round"/>
  ${step(205,'01','ENCONTRAR','Aparecer na busca',BLUE)}${step(540,'02','COMPARAR','Entender e confiar',TEAL)}${step(875,'03','AGIR','Ligar, visitar ou chamar',BLUE)}
  <g filter="url(#smallShadow)"><rect x="82" y="960" width="916" height="170" rx="30" fill="${WHITE}"/></g>${pinIcon(160,1031,.5,BLUE)}${tx(235,1028,'Seu Google Business Profile pode ser',28,INK,700)}${tx(235,1072,'o primeiro contato com a sua empresa.',28,BLUE,700)}
  ${progress(8,false)}
`,OFF));

// 09 — fechamento
slides.push(base(`
  <circle cx="540" cy="640" r="490" fill="${BLUE}" opacity=".09"/><circle cx="960" cy="130" r="280" fill="${TEAL}" opacity=".05"/>
  <image href="${monoUri}" x="405" y="80" width="270" height="270"/>
  ${tx(540,465,'SEU CLIENTE JÁ ESTÁ PESQUISANDO.',24,TEAL,700,'middle',4)}
  ${tx(540,575,'A PERGUNTA É:',57,WHITE,700,'middle',-1,'Poppins')}
  ${tx(540,680,'ELE ENCONTRA VOCÊ',63,WHITE,700,'middle',-1,'Poppins')}${tx(540,760,'OU SEU CONCORRENTE?',59,TEAL,700,'middle',-1,'Poppins')}
  ${tx(540,855,'Fortaleça sua vitrine no Google.',29,'#cbd5e1',500,'middle')}
  <rect x="235" y="925" width="610" height="88" rx="44" fill="url(#accent)"/>${tx(540,982,'FALE COM A MATTOS',27,WHITE,700,'middle',4)}
  ${tx(540,1110,'@mattos_solucoesdigitais',27,WHITE,700,'middle')}
  ${progress(9,true)}
`));

for (let i = 0; i < slides.length; i++) {
  const n = String(i + 1).padStart(2, '0');
  const svgPath = path.join(vectors, `${n}-slide.svg`);
  const pngPath = path.join(out, `${n}-slide.png`);
  await fs.writeFile(svgPath, slides[i], 'utf8');
  await sharp(Buffer.from(slides[i]), { density: 144 }).png({ compressionLevel: 9 }).toFile(pngPath);
}

const caption = `Seu perfil no Google é muito mais do que endereço e telefone.\n\nEle funciona como uma vitrine para pessoas que já estão procurando por um produto ou serviço como o seu. Categoria, serviços, fotos, avaliações, publicações, produtos e informações atualizadas ajudam o cliente a entender, comparar e confiar.\n\nSite e WhatsApp completam o caminho, deixando o próximo passo mais simples.\n\nQuando esses elementos trabalham juntos, o Google Business Profile deixa de ser apenas um cadastro e passa a fortalecer a presença digital da empresa.\n\nSeu cliente já está pesquisando. Ele encontra você ou seu concorrente?\n\nFale com a MATTOS.\n\n@mattos_solucoesdigitais\n\n#MattosSolucoesDigitais #GoogleBusinessProfile #PerfilDaEmpresaNoGoogle #SEOLocal #PresencaDigital #NegociosLocais #MarketingDigital #EmpresasLocais`;
await fs.writeFile(path.join(out, 'legenda-pronta.txt'), caption, 'utf8');

const alt = `01 — Capa: “Seu perfil no Google é muito mais do que endereço e telefone”, com uma simulação de perfil comercial.\n02 — Explica que o perfil funciona como vitrine para quem já está pesquisando, com uma simulação de busca local.\n03 — Mostra que categoria e serviços dão clareza sobre o que a empresa faz e oferece.\n04 — Explica como fotos e avaliações ajudam a transmitir confiança antes do contato.\n05 — Mostra que publicações e produtos mantêm o perfil útil, atual e comercial.\n06 — Destaca informações, site e WhatsApp como caminhos que facilitam o próximo passo do cliente.\n07 — Reúne categoria, serviços, fotos, avaliações, publicações, produtos, informações, site e WhatsApp em um perfil completo.\n08 — Apresenta a jornada encontrar, comparar e agir, da busca ao contato.\n09 — Pergunta se o cliente encontra a empresa ou o concorrente e convida a falar com a Mattos.`;
await fs.writeFile(path.join(out, 'textos-alternativos.txt'), alt, 'utf8');

console.log(`Post 03 criado em ${out}`);
