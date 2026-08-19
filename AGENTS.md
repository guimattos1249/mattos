# AGENTS.md — Identidade visual da Mattos Soluções Digitais

## Escopo e objetivo

Estas regras valem para todo o repositório. Toda alteração no site, landing page, componente, imagem, post ou material comercial deve preservar a identidade descrita aqui. Não introduza uma nova linguagem visual por conveniência.

Em caso de dúvida, siga esta ordem de precedência:

1. Este `AGENTS.md` para decisões de implementação.
2. `brand-kit/Guia_de_Marca_Mattos_Solucoes_Digitais.docx` para fundamentos da marca.
3. Os SVGs em `assets/` como matrizes oficiais dos logos usados no site.
4. O site atual (`index.html` e `style.css`) como referência de composição e comportamento.

Se uma solicitação exigir quebrar alguma regra abaixo, explique o conflito antes de implementar e peça confirmação explícita.

## Essência da marca

- Nome: **Mattos**.
- Descritor oficial: **Soluções digitais**.
- Conceito institucional: **Presença digital que gera negócios.**
- Posicionamento: tecnologia e marketing digital voltados a visibilidade, crescimento e resultado comercial.
- Personalidade: profissional, segura, contemporânea, direta, acessível e organizada.
- A marca deve parecer tecnológica sem ser fria, e comercial sem ser agressiva.
- Nunca voltar a usar o descritor antigo “Digital Solutions” em peças novas.

## Paleta oficial

Use variáveis/tokens; evite hexadecimais avulsos em componentes. A base recomendada é:

```css
:root {
  --brand-navy: #071a3a;
  --brand-deep: #020b1d;
  --brand-ink: #0f172a;
  --brand-blue: #2563eb;
  --brand-teal: #14b8a6;
  --brand-slate: #64748b;
  --brand-off-white: #f8fafc;
  --brand-white: #ffffff;
}
```

Papéis das cores:

- `#071A3A` — navy institucional; fundos escuros, blocos de alto contraste e base da marca.
- `#020B1D` — fundo profundo; header, footer, hero e gradientes escuros.
- `#0F172A` — tinta; títulos e textos fortes sobre fundo claro.
- `#2563EB` — azul elétrico; ação, tecnologia, links, ícones e destaques principais.
- `#14B8A6` — teal; crescimento, resultado, progresso e acentos seletivos.
- `#64748B` — slate; textos secundários e informação de apoio.
- `#F8FAFC` e `#FFFFFF` — respiro, superfícies e fundos claros.

Proporção visual de referência: 60% fundos claros/off-white, 25% navy, 10% azul e 5% teal. Não é uma conta rígida por tela, mas azul e teal devem continuar sendo acentos, não grandes massas concorrentes.

Tons auxiliares podem ser derivados dessa paleta para bordas, estados e gradientes. Não adicione outra cor de marca. Cores de terceiros ou cores semânticas (erro, alerta, sucesso) só podem aparecer quando o contexto realmente exigir e não devem dominar a composição.

## Gradientes, luz e profundidade

- Fundos escuros podem combinar `#020B1D`, `#071A3A` e variações navy/azul discretas.
- Gradientes de ação devem partir do azul elétrico; teal pode aparecer como chegada ou brilho secundário.
- Glows azuis e teals devem ser sutis, com baixa opacidade.
- Sombras são suaves, frias e difusas. Evite sombras pretas pesadas, bevel, glassmorphism excessivo, neon ou efeitos 3D decorativos.
- Em fundos claros, use bordas azul-acinzentadas muito claras e sombras quase imperceptíveis para separar cartões.

## Tipografia

- **Poppins** é a fonte de títulos, números de destaque e chamadas. Use pesos 600 ou 700.
- **Inter** é a fonte de corpo, navegação, botões, legendas e interface. Use pesos 400 a 700 conforme a hierarquia.
- Fallback web: `Poppins, Arial, sans-serif` para títulos e `Inter, Arial, sans-serif` para o restante.
- Não introduza uma terceira família tipográfica sem aprovação.
- Títulos são compactos, fortes e com entrelinha curta; texto corrido deve ter entrelinha confortável.
- Eyebrows e rótulos podem usar caixa alta, peso 700 e tracking amplo.
- Evite caixa alta em parágrafos e chamadas longas.
- A hierarquia deve ser evidente por tamanho, peso, cor e espaço — não por efeitos tipográficos.

## Logos e assinatura

Use sempre um arquivo oficial; nunca redesenhe a marca em HTML/CSS nem recrie o lettering com texto.

- `assets/logo-principal.svg` — assinatura institucional completa, com conceito; preferencial em apresentações e áreas com bastante espaço. Largura digital mínima recomendada: 240 px.
- `assets/logo-secundaria.svg` — assinatura horizontal escura para fundos brancos ou muito claros. Largura mínima recomendada: 180 px.
- `assets/logo-secundaria-clara.svg` — assinatura horizontal clara para fundos navy/escuros; é a versão padrão do header e do footer.
- `assets/monograma.svg` — avatar, favicon, selo e espaços compactos. Tamanho mínimo recomendado: 32 px.

Regras obrigatórias:

- Preserve proporção, cores, gradientes, espaçamentos internos e posição do descritor.
- Mantenha ao redor do logo uma área livre mínima equivalente à largura do pilar teal do monograma.
- Não estique, incline, recorte, rotacione, redesenhe ou anime partes do logo.
- Não aplique contorno, sombra pesada, textura, máscara, transparência ou recoloração no logo.
- Não coloque a versão escura sobre fundo escuro nem a clara sobre fundo claro.
- Não use o logo sobre fotografia ou textura que prejudique contraste e leitura.
- Em links de marca, mantenha `alt` ou `aria-label` com “Mattos Soluções Digitais”.

As matrizes editáveis e variações para peças ficam em `brand-kit/vetores/`. Não altere os SVGs oficiais apenas para acomodar um layout; ajuste o layout.

## Composição e layout do site

- Direção visual: blocos limpos, bastante respiro, hierarquia objetiva e contraste entre seções claras e escuras.
- Conteúdo principal deve respeitar o container atual de até 1160 px e gutters responsivos.
- Prefira grids consistentes, alinhamentos fortes e espaçamento regular. Evite elementos “soltos” sem eixo comum.
- Heroes e seções de resultados podem usar fundo navy profundo, glow/gradiente discreto e texto branco.
- Seções de serviços e conteúdo devem priorizar branco/off-white, cartões claros e títulos em ink/navy.
- Cards: cantos moderadamente arredondados, normalmente entre 9 e 12 px no site; borda leve e sombra sutil. Raios maiores só em elementos cuja forma exija isso, como mockups de dispositivo, avatares e chips.
- Botão primário: fundo/gradiente azul, texto branco, peso 600 e raio moderado. Hover pode elevar até 2 px e ganhar brilho discreto.
- Links secundários usam azul e seta simples. Teal não substitui o azul como CTA principal.
- Ícones da interface devem ser simples e lineares, preferencialmente sem preenchimento, com stroke azul e espessura consistente. Não misture famílias de ícones com estilos incompatíveis.
- Elementos decorativos devem reforçar movimento, ascensão, localização, conexão ou crescimento. Evite ilustrações genéricas sem relação com o posicionamento.

## Imagens, mockups e peças gráficas

- Prefira visuais que comuniquem presença digital, busca local, sites, métricas, mapas, descoberta e crescimento.
- Mockups de produto devem parecer plausíveis, legíveis e integrados à paleta.
- Não use fotos de banco genéricas como decoração quando um visual de produto, resultado ou contexto local comunicar melhor.
- Sobre imagens complexas, crie uma superfície ou faixa de contraste antes de aplicar texto/logo.
- Para redes sociais, preserve uma zona de respiro ampla; use o logo claro em fundo escuro e o escuro em fundo claro.
- Use PNG para entrega raster e mantenha SVG como matriz sempre que existir.

## Linguagem e conteúdo

- Idioma padrão: português do Brasil.
- Tom: claro, confiante, útil, direto e orientado a benefícios concretos.
- Priorize verbos e resultados: ser encontrado, atrair clientes, gerar oportunidades, crescer, converter.
- Evite jargão sem explicação, exageros, promessas absolutas e texto excessivamente publicitário.
- “Mattos Soluções Digitais” leva iniciais maiúsculas em texto corrido.
- O descritor isolado é “Soluções digitais”; caixa alta é permitida em rótulos e peças: “SOLUÇÕES DIGITAIS”.
- Dados e percentuais apresentados como resultados devem ter fonte real ou ser claramente tratados como exemplo/mockup.

## Responsividade, acessibilidade e movimento

- Toda mudança visual deve funcionar, no mínimo, em larguras de 360 px, 768 px e 1440 px.
- Preserve como referências os breakpoints existentes de 900 px e 560 px, salvo necessidade técnica justificada.
- Não esconda conteúdo essencial no mobile. Reordene, empilhe ou simplifique sem perder a mensagem e o CTA.
- Mantenha contraste de texto e controles em nível WCAG AA sempre que possível.
- Estados de hover nunca podem ser a única indicação de interação; forneça foco visível para teclado.
- Imagens informativas precisam de texto alternativo. Imagens decorativas devem ser ignoradas por tecnologias assistivas.
- Alvos interativos devem ter área confortável para toque.
- Respeite `prefers-reduced-motion`; movimento é curto, funcional e discreto.
- Evite mudanças de layout durante o carregamento reservando espaço para imagens, embeds e mockups.

## Regras de implementação

- Antes de criar um componente, procure um padrão existente em `style.css` e reutilize sua linguagem.
- Centralize novos valores recorrentes em custom properties. Não espalhe variações quase idênticas da mesma cor, raio ou sombra.
- Não altere arquivos de logo para corrigir alinhamento, tamanho ou contraste; corrija o container e escolha a variante apropriada.
- Preserve a semântica HTML, navegação por teclado, `aria-*` existente e suporte a redução de movimento.
- Não copie cores de marcas externas para o sistema Mattos. Exceção: uma reprodução identificável de interface de terceiro, como o mockup do Google, pode usar as cores desse produto apenas dentro do mockup.
- Ao criar nova página, reutilize header, footer, container, botões, cabeçalhos de seção e ritmos do site antes de criar variantes.
- Se uma nova necessidade não estiver coberta, derive a solução dos princípios deste documento e registre aqui qualquer novo padrão recorrente aprovado.

## Checklist antes de concluir uma alteração visual

- [ ] Usei somente logos oficiais e a variante correta para o fundo?
- [ ] Mantive a área de proteção e os tamanhos mínimos?
- [ ] Usei Poppins em títulos e Inter no restante?
- [ ] Cores novas são tokens/derivações justificadas da paleta oficial?
- [ ] Azul continua sendo a ação principal e teal um acento seletivo?
- [ ] A composição mantém respiro, alinhamento, contraste e hierarquia?
- [ ] O texto está em pt-BR e preserva nome, descritor e tom da marca?
- [ ] Testei desktop, tablet e mobile, incluindo 360 px?
- [ ] Verifiquei contraste, foco de teclado, alt text e redução de movimento?
- [ ] Evitei regressões no header, footer, CTAs e componentes reutilizados?

