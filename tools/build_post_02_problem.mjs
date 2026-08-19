import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'file:///C:/Users/Guilherme%20Mattos/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs';

const root = 'C:/www/mattos';
const out = path.join(root, 'brand-kit/posts/02-o-problema');
const vectors = path.join(out, 'vetores');
await fs.mkdir(vectors, { recursive: true });

const light = await fs.readFile(path.join(root, 'assets/logo-secundaria-clara.svg'));
const dark = await fs.readFile(path.join(root, 'assets/logo-secundaria.svg'));
const mono = await fs.readFile(path.join(root, 'assets/monograma.svg'));
const lightUri = `data:image/svg+xml;base64,${light.toString('base64')}`;
const darkUri = `data:image/svg+xml;base64,${dark.toString('base64')}`;
const monoUri = `data:image/svg+xml;base64,${mono.toString('base64')}`;

const NAVY = '#071a3a', DEEP = '#020b1d', INK = '#0f172a', BLUE = '#2563eb';
const TEAL = '#14b8a6', SLATE = '#64748b', WHITE = '#ffffff', OFF = '#f8fafc';
const defs = `<defs>
  <linearGradient id="dark" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${DEEP}"/><stop offset=".62" stop-color="${NAVY}"/><stop offset="1" stop-color="#0d3550"/></linearGradient>
  <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0"><stop stop-color="${BLUE}"/><stop offset="1" stop-color="${TEAL}"/></linearGradient>
  <linearGradient id="blue" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#174ecf"/><stop offset=".58" stop-color="${BLUE}"/><stop offset="1" stop-color="#128d9a"/></linearGradient>
  <filter id="shadow"><feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#020b1d" flood-opacity=".18"/></filter>
</defs>`;
const t = (x,y,text,size,color,weight=400,anchor='start',spacing=0) => `<text x="${x}" y="${y}" fill="${color}" font-family="Arial,Helvetica,sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" letter-spacing="${spacing}">${text}</text>`;
const base = (content,bg='url(#dark)') => `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">${defs}<rect width="1080" height="1350" fill="${bg}"/>${content}</svg>`;
const header = darkMode => `<image href="${darkMode ? lightUri : darkUri}" x="78" y="52" width="430" height="104"/>`;
const progress = (n,darkMode=true) => `${t(82,1295,`0${n} / 09`,21,darkMode?WHITE:INK,700,'start',3)}<line x1="790" y1="1288" x2="995" y2="1288" stroke="${darkMode?'#dbeafe':'#334155'}" stroke-width="4" stroke-linecap="round"/><rect x="790" y="1284" width="${205*n/9}" height="8" rx="4" fill="${TEAL}"/>`;
const slides = [];

slides.push(base(`
  <circle cx="1030" cy="30" r="400" fill="${BLUE}" opacity=".09"/><circle cx="20" cy="1320" r="330" fill="${TEAL}" opacity=".08"/>
  ${header(true)}<rect x="82" y="290" width="115" height="9" rx="4" fill="url(#accent)"/>
  ${t(82,430,'SEU CLIENTE',42,'#93c5fd',700,'start',6)}
  ${t(82,560,'PROCURA.',104,WHITE,800)}
  ${t(82,720,'MAS ELE',66,WHITE,700)}
  ${t(82,825,'ENCONTRA',91,TEAL,800)}
  ${t(82,930,'VOCÊ?',91,TEAL,800)}
  <rect x="82" y="1050" width="305" height="76" rx="38" fill="${BLUE}"/>${t(234,1099,'DESLIZE  →',23,WHITE,700,'middle',4)}
  ${progress(1,true)}
`));

slides.push(base(`
  ${header(false)}${t(82,275,'TODOS OS DIAS',24,BLUE,700,'start',5)}
  ${t(82,370,'Pessoas pesquisam no',53,INK,800)}${t(82,435,'Google pelo que precisam.',53,BLUE,800)}
  <g filter="url(#shadow)"><rect x="82" y="555" width="916" height="145" rx="72" fill="${WHITE}"/></g>
  <circle cx="155" cy="627" r="31" fill="none" stroke="${SLATE}" stroke-width="8"/><line x1="178" y1="650" x2="203" y2="675" stroke="${SLATE}" stroke-width="8" stroke-linecap="round"/>
  ${t(235,645,'serviço perto de mim',35,SLATE,400)}<rect x="838" y="581" width="120" height="92" rx="46" fill="${BLUE}"/>${t(898,642,'→',42,WHITE,700,'middle')}
  <g><circle cx="205" cy="870" r="72" fill="#dbeafe"/><path d="M205 815c-31 0-56 24-56 55 0 45 56 102 56 102s56-57 56-102c0-31-25-55-56-55zm0 76a22 22 0 1 1 0-44 22 22 0 0 1 0 44z" fill="${BLUE}"/>
  ${t(315,850,'produtos e serviços',34,INK,800)}${t(315,900,'na própria região.',34,INK,800)}</g>
  ${t(82,1080,'A intenção já existe.',32,SLATE,400)}${t(82,1130,'A oportunidade também.',32,INK,700)}
  ${progress(2,false)}
`,OFF));

slides.push(base(`
  ${header(true)}${t(82,300,'E QUANDO SUA EMPRESA',24,TEAL,700,'start',5)}
  ${t(82,405,'NÃO APARECE...',66,WHITE,800)}
  <g filter="url(#shadow)"><rect x="82" y="530" width="916" height="365" rx="34" fill="#ffffff"/></g>
  ${t(130,610,'Resultados próximos',26,SLATE,600)}
  <rect x="130" y="655" width="820" height="74" rx="16" fill="#eef2f7"/><circle cx="175" cy="692" r="20" fill="${BLUE}"/>${t(220,701,'Empresa concorrente',27,INK,700)}${t(850,701,'★★★★★',22,'#f59e0b',700,'middle')}
  <rect x="130" y="755" width="820" height="74" rx="16" fill="#eef2f7"/><circle cx="175" cy="792" r="20" fill="${TEAL}"/>${t(220,801,'Outra opção na região',27,INK,700)}${t(850,801,'★★★★★',22,'#f59e0b',700,'middle')}
  ${t(540,1010,'O CLIENTE ENCONTRA OUTRA.',45,WHITE,800,'middle',2)}
  ${t(540,1080,'E a oportunidade pode nem chegar até você.',27,'#cbd5e1',400,'middle')}
  ${progress(3,true)}
`));

slides.push(base(`
  ${header(false)}${t(82,290,'NEM SEMPRE O PROBLEMA',24,BLUE,700,'start',5)}
  ${t(82,395,'É A SUA EMPRESA.',61,INK,800)}
  <rect x="82" y="500" width="916" height="10" rx="5" fill="url(#accent)"/>
  ${t(82,640,'Pode ser a forma como ela',51,INK,700)}${t(82,705,'está posicionada',59,BLUE,800)}${t(82,775,'digitalmente.',59,BLUE,800)}
  <g filter="url(#shadow)"><rect x="82" y="900" width="916" height="205" rx="32" fill="${WHITE}"/></g>
  <circle cx="170" cy="1002" r="55" fill="#dbeafe"/><path d="M140 1002h60M170 972v60" stroke="${BLUE}" stroke-width="9" stroke-linecap="round"/>
  ${t(260,980,'Qualidade sem visibilidade',31,INK,800)}${t(260,1030,'continua sendo invisibilidade.',31,SLATE,400)}
  ${progress(4,false)}
`,OFF));

const issue = (y,n,title,body,color) => `<circle cx="145" cy="${y}" r="35" fill="${color}"/>${t(145,y+9,n,22,WHITE,800,'middle')}${t(205,y-5,title,29,WHITE,800)}${t(205,y+34,body,22,'#cbd5e1',400)}`;
slides.push(base(`
  ${header(true)}${t(82,280,'O QUE PODE ESTAR',24,TEAL,700,'start',5)}${t(82,365,'LIMITANDO SUA PRESENÇA?',51,WHITE,800)}
  <line x1="145" y1="500" x2="145" y2="1085" stroke="#31507e" stroke-width="5"/>
  ${issue(510,'01','GOOGLE DESATUALIZADO','Informações antigas reduzem confiança.',BLUE)}
  ${issue(645,'02','POUCAS INFORMAÇÕES','O cliente não encontra respostas.',TEAL)}
  ${issue(780,'03','SITE FRACO OU INEXISTENTE','A decisão perde força e clareza.',BLUE)}
  ${issue(915,'04','BAIXA RELEVÂNCIA LOCAL','Sua empresa aparece menos nas buscas.',TEAL)}
  ${issue(1050,'05','CONCORRENTES À FRENTE','Outras marcas ocupam o espaço.',BLUE)}
  ${progress(5,true)}
`));

slides.push(base(`
  <circle cx="540" cy="650" r="480" fill="${BLUE}" opacity=".09"/>
  <image href="${monoUri}" x="340" y="150" width="400" height="400"/>
  ${t(540,700,'É AÍ QUE ENTRA',31,TEAL,700,'middle',7)}
  ${t(540,835,'A MATTOS.',82,WHITE,800,'middle',3)}
  ${t(540,945,'Estratégia para fortalecer sua presença',30,'#cbd5e1',400,'middle')}
  ${t(540,990,'e transformar buscas em oportunidades.',30,'#cbd5e1',400,'middle')}
  ${progress(6,true)}
`));

const pillar = (x,n,title,body,color) => `<rect x="${x}" y="550" width="280" height="390" rx="34" fill="${WHITE}" filter="url(#shadow)"/><circle cx="${x+140}" cy="635" r="43" fill="${color}"/>${t(x+140,646,n,25,WHITE,800,'middle')}${t(x+140,735,title,28,INK,800,'middle')}${t(x+140,795,body[0],21,SLATE,400,'middle')}${t(x+140,830,body[1],21,SLATE,400,'middle')}`;
slides.push(base(`
  ${header(false)}${t(82,285,'TRÊS PILARES',24,BLUE,700,'start',5)}
  ${t(82,375,'Uma presença digital',53,INK,800)}${t(82,440,'mais forte e conectada.',53,BLUE,800)}
  ${pillar(82,'01','GOOGLE',['Sua vitrine nas','buscas locais.'],BLUE)}
  ${pillar(400,'02','SEO LOCAL',['Mais relevância','na sua região.'],TEAL)}
  ${pillar(718,'03','SITE',['Confiança para','a decisão.'],BLUE)}
  ${t(540,1055,'GOOGLE + SEO LOCAL + SITE',30,INK,800,'middle',3)}${t(540,1105,'trabalhando com o mesmo objetivo.',26,SLATE,400,'middle')}
  ${progress(7,false)}
`,OFF));

slides.push(base(`
  ${header(true)}${t(82,285,'PARA AJUDAR SUA EMPRESA A',24,TEAL,700,'start',5)}
  <rect x="82" y="390" width="916" height="165" rx="34" fill="#0d2245" stroke="#31507e" stroke-width="2"/>${t(145,462,'01',24,WHITE,800,'middle')}<circle cx="145" cy="453" r="39" fill="${BLUE}"/>${t(145,462,'01',24,WHITE,800,'middle')}${t(220,475,'SER ENCONTRADA',39,WHITE,800)}
  <rect x="82" y="590" width="916" height="165" rx="34" fill="#0d2245" stroke="#31507e" stroke-width="2"/><circle cx="145" cy="673" r="39" fill="${TEAL}"/>${t(145,682,'02',24,WHITE,800,'middle')}${t(220,695,'SER ESCOLHIDA',39,WHITE,800)}
  <rect x="82" y="790" width="916" height="165" rx="34" fill="#0d2245" stroke="#31507e" stroke-width="2"/><circle cx="145" cy="873" r="39" fill="${BLUE}"/>${t(145,882,'03',24,WHITE,800,'middle')}${t(220,895,'SER CONTATADA',39,WHITE,800)}
  <rect x="82" y="1050" width="916" height="9" rx="4" fill="url(#accent)"/>
  ${t(540,1120,'ENCONTRAR  →  ESCOLHER  →  CONTATAR',25,WHITE,800,'middle',2)}
  ${progress(8,true)}
`));

slides.push(base(`
  <circle cx="540" cy="630" r="470" fill="${BLUE}" opacity=".08"/><image href="${monoUri}" x="405" y="90" width="270" height="270"/>
  ${t(540,500,'QUER SABER COMO SUA EMPRESA',25,TEAL,700,'middle',4)}
  ${t(540,595,'ESTÁ POSICIONADA',62,WHITE,800,'middle')}${t(540,670,'NO GOOGLE?',62,WHITE,800,'middle')}
  ${t(540,790,'Uma análise começa mostrando',29,'#cbd5e1',400,'middle')}${t(540,832,'onde estão as oportunidades.',29,'#cbd5e1',400,'middle')}
  <rect x="235" y="930" width="610" height="88" rx="44" fill="url(#accent)"/>${t(540,987,'FALE COM A MATTOS',27,WHITE,800,'middle',4)}
  ${t(540,1125,'@mattos_solucoesdigitais',27,WHITE,700,'middle')}
  ${progress(9,true)}
`));

for (let i=0;i<slides.length;i++) {
  const n=String(i+1).padStart(2,'0');
  await fs.writeFile(path.join(vectors,`${n}-slide.svg`),slides[i],'utf8');
  await sharp(Buffer.from(slides[i]),{density:144}).png({compressionLevel:9}).toFile(path.join(out,`${n}-slide.png`));
}

const caption = `Seu cliente já está procurando. A pergunta é: ele encontra a sua empresa?\n\nTodos os dias, pessoas usam o Google para buscar produtos e serviços na própria região. Quando uma empresa não aparece — ou aparece com informações incompletas — a oportunidade pode acabar chegando ao concorrente.\n\nNem sempre o problema está na qualidade do negócio. Muitas vezes, está na forma como ele está posicionado digitalmente.\n\nA MATTOS trabalha Google Business Profile, SEO Local e criação de sites de forma integrada para ajudar sua empresa a ser encontrada, escolhida e contatada.\n\nQuer entender como sua empresa está posicionada no Google? Fale com a gente.\n\n@mattos_solucoesdigitais\n\n#MattosSolucoesDigitais #SEOLocal #GoogleBusinessProfile #PresencaDigital #MarketingDigital #NegociosLocais #EmpresasLocais #CriacaoDeSites`;
await fs.writeFile(path.join(out,'legenda-pronta.txt'),caption,'utf8');
const alt = `01 — Pergunta: “Seu cliente procura. Mas ele encontra você?”.\n02 — Explica que pessoas pesquisam diariamente por serviços próximos.\n03 — Mostra que, quando uma empresa não aparece, o cliente encontra concorrentes.\n04 — Explica que o problema pode estar no posicionamento digital.\n05 — Lista cinco causas de baixa visibilidade digital.\n06 — Apresenta a Mattos como solução.\n07 — Mostra os pilares Google, SEO Local e site.\n08 — Objetivos: ser encontrada, escolhida e contatada.\n09 — CTA para conversar com a Mattos pelo Instagram.`;
await fs.writeFile(path.join(out,'textos-alternativos.txt'),alt,'utf8');
console.log(`Post 02 criado em ${out}`);
