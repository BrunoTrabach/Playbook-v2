// ========================================
// AIWA PLAYBOOK MATRIX V2
// DATABASE CENTRAL — V2.3 CORRIGIDO
// ========================================

const PRODUCTS = {
  boombox_aiwa: {
    nome: "Boombox AIWA",
    categoria: "audio",
    potencia: "200W RMS",
    bluetooth: "5.3",
    ip: "IP66",
    tws: true,
    app: true,
    usb: true,
    bateria: "Até 30 horas",
    garantia: "12 meses",
    som: "3 vias",
    graves: "Bass Boost",
    equalizador: true,
    resistencia_agua: true,
    resistencia_areia: true,
    descricao: "Boombox portátil AIWA com 200W RMS, Bluetooth 5.3, proteção IP66 e aplicativo AIWA Áudio BR."
  },
  ar_aiwa_9000: {
    nome: "Ar Condicionado AIWA 9000 BTUs",
    categoria: "ar",
    btus: "9000",
    inverter: true,
    gas: "R32",
    wifi: true,
    garantia: "12 meses",
    descricao: "Ar Condicionado AIWA Inverter com Wi-Fi e gás R32 ecológico."
  }
};

const PILARES = {
  qualidade: {
    titulo: "Qualidade",
    icone: "✦",
    cor: "var(--accent-cyan)",
    topicos: [
      "Potência real de 200W RMS — sem quedas na bateria",
      "Sistema acústico de 3 vias reais — vozes nunca abafadas",
      "Materiais premium e acabamento robusto",
      "Experiência sonora limpa, sem distorção"
    ],
    script_abordagem: "A AIWA entrega potência real, sem quedas. Nosso sistema de 3 vias garante que as vozes nunca fiquem abafadas pelos graves."
  },
  confianca: {
    titulo: "Confiança",
    icone: "✦",
    cor: "var(--accent-magenta)",
    topicos: [
      "AIWA — Japanese Technology Since 1951",
      "Grupo MK — suporte nacional robusto",
      "Garantia de 12 meses com rede de atendimento",
      "Pós-venda presente e acessível"
    ],
    script_abordagem: "A AIWA existe desde 1951. Hoje, com o Grupo MK no Brasil, você tem garantia nacional e suporte local de verdade."
  },
  inovacao: {
    titulo: "Inovação",
    icone: "✦",
    cor: "var(--accent-yellow)",
    topicos: [
      "Bluetooth 5.3 — alcance e estabilidade superiores",
      "App AIWA Áudio BR — controle total do som",
      "TWS — dobre a potência conectando duas caixas",
      "IP66 — proteção contra poeira e jatos de água",
      "Bass Boost — graves intensos sob demanda"
    ],
    script_abordagem: "Tecnologia de ponta: Bluetooth 5.3, app próprio, TWS, IP66 e Bass Boost. Tudo para o cliente ter a melhor experiência."
  }
};

const COMPARATIVOS = {
  audio: {
    titulo: "Comparativos de Áudio",
    modelo_aiwa: "Boombox AIWA AWS-BBS-01",
    concorrentes: [
      { nome: "JBL Partybox Club 120", potencia: "160W (queda na bateria)", preco: "Mais caro", bluetooth: "5.3", ip: "IPX4", bateria: "12h", app: true, usb: true, tws: true },
      { nome: "Philco PBS220BT", potencia: "100W", preco: "Barato", bluetooth: "5.0", ip: "Não", bateria: "8h", app: false, usb: true, tws: false },
      { nome: "LG Xboom", potencia: "130W", preco: "Médio", bluetooth: "5.0", ip: "IPX5", bateria: "10h", app: true, usb: true, tws: true },
      { nome: "Mondial CM-550", potencia: "80W", preco: "Barato", bluetooth: "5.0", ip: "Não", bateria: "6h", app: false, usb: true, tws: false }
    ],
    argumentos: [
      "A AIWA mantém 200W RMS reais mesmo na bateria — concorrentes caem até 30%",
      "IP66 protege contra poeira e jatos de água — superior ao IPX4/IPX5",
      "Até 30 horas de bateria — o dobro da maioria",
      "Preço 20-40% menor com mais recursos"
    ],
    objecoes: [
      { objecao: "A JBL é mais conhecida", resposta: "A AIWA comprou a fábrica da Sony em Manaus. Mesma qualidade, preço melhor." },
      { objecao: "Nunca ouvi falar da AIWA em caixas", resposta: "A AIWA é referência desde 1951. O Grupo MK trouxe a linha completa para o Brasil." },
      { objecao: "O preço está muito baixo, deve ser inferior", resposta: "O preço é competitivo porque fabricamos localmente em Manaus, sem taxas de importação." }
    ]
  },
  arcondicionado: {
    titulo: "Comparativos de Ar Condicionado",
    modelo_aiwa: "AIWA 9000 BTUs Inverter",
    concorrentes: [
      { nome: "LG Dual Inverter 9000", btus: "9000", inverter: true, gas: "R32", wifi: true, preco: "Mais caro", garantia: "12 meses" },
      { nome: "Samsung Wind Free 9000", btus: "9000", inverter: true, gas: "R410A", wifi: true, preco: "Caro", garantia: "12 meses" },
      { nome: "Electrolux Inverter 9000", btus: "9000", inverter: true, gas: "R32", wifi: false, preco: "Médio", garantia: "12 meses" },
      { nome: "Midea Inverter 9000", btus: "9000", inverter: true, gas: "R32", wifi: true, preco: "Médio", garantia: "12 meses" }
    ],
    argumentos: [
      "Gás R32 ecológico — mesmo das premium",
      "Wi-Fi integrado — controle pelo celular",
      "Inverter verdadeiro — economia de até 60%",
      "Preço abaixo das concorrentes com mesma tecnologia"
    ],
    objecoes: [
      { objecao: "LG é mais confiável", resposta: "A AIWA usa o mesmo gás R32 e tecnologia inverter. A diferença é o preço e o suporte local do Grupo MK." },
      { objecao: "Samsung tem mais recursos", resposta: "A AIWA entrega Wi-Fi, inverter e R32. Tudo o que o cliente precisa, sem pagar marca." }
    ]
  }
};

const CONCLUSOES = {
  completa: {
    titulo: "Conclusão Completa",
    secoes: [
      {
        titulo: "Por que escolher AIWA?",
        texto: "A AIWA une tradição japonesa desde 1951 com tecnologia atual. Nossos produtos entregam potência real, durabilidade e preço justo."
      },
      {
        titulo: "Diferenciais que vendem",
        texto: "200W RMS reais na bateria, IP66, 30 horas de autonomia, Bluetooth 5.3, App próprio, TWS e Bass Boost. Nenhuma concorrente entrega tudo isso pelo mesmo preço."
      },
      {
        titulo: "Experiência do cliente",
        texto: "Do churrasco à praia, do quarto à piscina, a AIWA acompanha o cliente em todos os momentos com qualidade e resistência."
      },
      {
        titulo: "Pós-venda e relacionamento",
        texto: "Garantia nacional, rede de suporte do Grupo MK e promotores presentes no PDV. O cliente não fica sozinho depois da compra."
      },
      {
        titulo: "Relação custo-benefício",
        texto: "Tecnologia premium, preço intermediário. O cliente leva mais por menos, e você vende com mais margem e menos objeção."
      }
    ]
  },
  resumida: {
    titulo: "Conclusão Resumida",
    pontos: [
      "✔ Potência real: 200W RMS sem quedas",
      "✔ Proteção IP66: poeira e água",
      "✔ 30h de bateria + powerbank",
      "✔ Bluetooth 5.3 + TWS + App",
      "✔ Preço 20-40% abaixo das concorrentes",
      "✔ Garantia nacional Grupo MK"
    ]
  }
};

// ========================================
// ASSISTENTE AIWA — V2.3 CORRIGIDO
// Algoritmo de matching melhorado
// ========================================
const AI_ASSISTANT = {
  nome: "Assistente AIWA",
  descricao: "Tire dúvidas rápidas sobre produtos, tecnologias e argumentos de venda.",

  // Palavras ignoradas (artigos, preposições, pronomes, verbos comuns)
  stopWords: new Set([
    "o", "a", "os", "as", "um", "uma", "uns", "umas",
    "de", "do", "da", "dos", "das", "em", "no", "na", "nos", "nas",
    "por", "para", "com", "sem", "sob", "sobre", "entre", "até", "desde",
    "e", "ou", "mas", "que", "se", "como", "quando", "onde", "porque", "porquê",
    "qual", "quais", "quem", "cujo", "cuja", "cujos", "cujas",
    "é", "são", "foi", "foram", "ser", "estar", "ter", "haver",
    "este", "esta", "estes", "estas", "esse", "essa", "esses", "essas",
    "aquele", "aquela", "aqueles", "aquelas", "isto", "isso", "aquilo",
    "meu", "minha", "meus", "minhas", "seu", "sua", "seus", "suas",
    "nosso", "nossa", "nossos", "nossas", "dela", "dele", "delas", "deles",
    "muito", "mais", "menos", "muito", "pouco", "tanto", "tão", "tão",
    "já", "ainda", "também", "só", "apenas", "bem", "mal", "assim",
    "aqui", "ali", "lá", "hoje", "agora", "antes", "depois", "logo",
    "todo", "toda", "todos", "todas", "cada", "outro", "outra", "outros", "outras",
    "mesmo", "mesma", "mesmos", "mesmas", "próprio", "própria", "próprios", "próprias",
    "tal", "tais", "certo", "certa", "certos", "certas", "vários", "várias",
    "tudo", "nada", "algo", "alguém", "ninguém", "todos", "todas",
    "pode", "poder", "fazer", "dar", "ver", "saber", "querer", "ir", "vir",
    "dizer", "falar", "perguntar", "responder", "mostrar", "usar", "funcionar"
  ]),

  respostas: [
    {
      id: "preco",
      keywords: ["preço", "caro", "barato", "custa", "valor", "dinheiro", "paga", "pago", "paguei", "custo", "investimento"],
      peso: 10,
      resposta: "💰 <b>Argumento de Preço</b><br><br>A AIWA é R$600-900 mais barata que a JBL Partybox Club 120, entregando 200W RMS reais na bateria (a JBL cai para 136W). Além disso, temos IP66, 30h de bateria e app próprio. O cliente leva mais tecnologia por menos."
    },
    {
      id: "grave",
      keywords: ["grave", "bass", "funk", "pesado", "subwoofer", "vibrar", "vibração", "grave", "graves", "baixo", "baixos", "sub"],
      peso: 10,
      resposta: "🔊 <b>Graves</b><br><br>A AIWA tem resposta de frequência 20Hz-20KHz, com grave 2x mais profundo que a JBL. Acima de 70% de volume, o Bass Boost exclusivo entrega ainda mais impacto. Peça ao cliente para colocar a mão no lado da caixa e sentir a vibração."
    },
    {
      id: "ip66",
      keywords: ["ip66", "ip67", "ip68", "água", "praia", "piscina", "chuva", "molhar", "proteção", "poeira", "areia", "respingo", "jato", "imersão", "mergulhar"],
      peso: 10,
      resposta: "💧 <b>IP66</b><br><br>Totalmente vedada contra poeira e jatos de água. Pode levar para a praia, deixar perto da piscina e até lavar com jato leve. O compartimento traseiro deve ficar fechado. <b>NÃO pode mergulhar.</b> Concorrentes oferecem apenas IPX4 (respingos)."
    },
    {
      id: "tws",
      keywords: ["tws", "true wireless", "estéreo", "duas caixas", "parear", "conectar duas", "pareamento", "sincronizar caixas", "dobrar potência"],
      peso: 10,
      resposta: "📡 <b>TWS (True Wireless Stereo)</b><br><br>Conecte duas Boombox AIWA sem fios. Você dobra a potência para 400W RMS e cria um sistema estéreo verdadeiro. Ideal para ambientes grandes e festas."
    },
    {
      id: "bluetooth",
      keywords: ["bluetooth", "5.3", "conexão", "alcance", "estabilidade", "parear", "sincronizar", "pareamento", "sinal", "distância"],
      peso: 10,
      resposta: "📶 <b>Bluetooth 5.3</b><br><br>Alcance de até 30 metros em ambiente aberto, conexão estável sem quedas e baixa latência. Superior ao Bluetooth 5.0 das concorrentes. Conecta rapidamente e não desconecta no meio da música."
    },
    {
      id: "bateria",
      keywords: ["bateria", "autonomia", "dura", "horas", "carregar", "powerbank", "energia", "tomada", "carregamento", "duração"],
      peso: 10,
      resposta: "🔋 <b>Bateria</b><br><br>Até 30 horas em volume médio. Em uso intenso, segura o dia todo. A AIWA mantém os 200W RMS reais mesmo na bateria — diferente das concorrentes que caem a potência para economizar energia. Ainda funciona como powerbank para carregar o celular."
    },
    {
      id: "app",
      keywords: ["app", "aplicativo", "aiwa áudio", "equalizador", "preset", "controle", "celular", "smartphone", "app aiwa"],
      peso: 10,
      resposta: "📱 <b>App AIWA Áudio BR</b><br><br>Controle total da caixa pelo celular. Reforço de grave, equalizadores pré-definidos (Rock, Pop, Jazz, etc.), ajuste de balanço e atualizações de firmware. Disponível para Android e iOS."
    },
    {
      id: "bass_boost",
      keywords: ["bass boost", "boost", "reforço grave", "grave extra", "bassboost", "reforço de grave"],
      peso: 10,
      resposta: "🎵 <b>Bass Boost</b><br><br>Tecnologia exclusiva AIWA que ativa um reforço adicional de graves acima de 70% do volume. Ideal para funk, eletrônica e reggaeton. O cliente sente a diferença imediatamente na demonstração."
    },
    {
      id: "garantia",
      keywords: ["garantia", "suporte", "assistência", "defeito", "quebrou", "conserto", "reparo", "troca", "garantir"],
      peso: 10,
      resposta: "🛡️ <b>Garantia</b><br><br>12 meses de garantia nacional com rede de suporte do Grupo MK. Peças e assistência em todo o Brasil. O cliente não fica desamparado."
    },
    {
      id: "qualidade",
      keywords: ["qualidade", "som", "áudio", "limpo", "distorção", "volume", "potência real", "3 vias", "tweeter", "woofer", "subwoofer"],
      peso: 8,
      resposta: "🎚️ <b>Qualidade de Som</b><br><br>Sistema acústico de 3 vias reais. Tweeter para agudos, woofer para médios e subwoofer para graves. As vozes nunca ficam abafadas. Som limpo mesmo no volume máximo, sem distorção."
    },
    {
      id: "historia",
      keywords: ["sony", "fábrica", "manaus", "história", "1951", "japão", "tradição", "origem", "marca"],
      peso: 10,
      resposta: "🇯🇵 <b>História AIWA</b><br><br>Fundada no Japão em 1951. Referência em áudio e vídeo por décadas. Hoje, o Grupo MK comprou a fábrica que era da Sony em Manaus, mantendo a mesma qualidade com preço acessível."
    },
    {
      id: "comparativo",
      keywords: ["jbl", "concorrente", "comparar", "diferença", "partybox", "lg", "philco", "mondial", "vs", "versus", "concorrentes"],
      peso: 10,
      resposta: "⚖️ <b>Comparativo</b><br><br><b>AIWA vs JBL</b> — AIWA tem mais potência real na bateria, IP66 vs IPX4, 30h vs 12h, app completo e preço 20-40% menor.<br><br><b>AIWA vs LG/Philco</b> — AIWA entrega tecnologia premium (Bluetooth 5.3, TWS, App) que as outras não têm."
    },
    {
      id: "demonstracao",
      keywords: ["demonstração", "demo", "mostrar", "testar", "música", "experimentar", "vender", "venda", "abordagem", "atender", "cliente"],
      peso: 8,
      resposta: "🎯 <b>Demonstração</b><br><br>1) Ligue a caixa na bateria (mostre que não precisa de tomada).<br>2) Toque uma música com grave (Fuego, Animals).<br>3) Peça para o cliente colocar a mão na caixa e sentir a vibração.<br>4) Mostre o app com equalizadores.<br>5) Molhe levemente a caixa para provar o IP66."
    },
    {
      id: "pendrive",
      keywords: ["pendrive", "usb", "entrada", "tocar", "mp3", "música", "arquivo", "pen drive", "pendrive"],
      peso: 10,
      resposta: "💾 <b>USB/Pendrive</b><br><br>A Boombox AIWA possui entrada USB. O cliente pode colocar um pendrive com músicas em MP3 e tocar direto, sem depender de celular ou internet."
    },
    {
      id: "3vias",
      keywords: ["3 vias", "vias", "tweeter", "woofer", "subwoofer", "driver", "falante", "alto-falante"],
      peso: 10,
      resposta: "🔊 <b>Sistema 3 Vias</b><br><br>Tweeter dedicado para agudos cristalinos, woofer para médios claros e subwoofer para graves profundos. Cada frequência tem seu próprio driver. Resultado: som equilibrado, sem vozes abafadas."
    }
  ],

  responder: function(pergunta) {
    // Limpa a pergunta
    const limpa = pergunta.toLowerCase()
      .replace(/[?¿!¡.,;]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const palavras = limpa.split(" ");

    // Filtra apenas palavras significativas (>= 3 caracteres e não stop words)
    const palavrasSignificativas = palavras.filter(p => 
      p.length >= 3 && !this.stopWords.has(p)
    );

    // Se não houver palavras significativas, usa todas as palavras >= 2 chars
    const termos = palavrasSignificativas.length > 0 
      ? palavrasSignificativas 
      : palavras.filter(p => p.length >= 2);

    let melhorMatch = null;
    let melhorScore = 0;

    for (let item of this.respostas) {
      let score = 0;
      let matchesExatos = 0;

      for (let k of item.keywords) {
        const kLower = k.toLowerCase();

        for (let p of termos) {
          // Match exato vale mais
          if (p === kLower) {
            score += item.peso;
            matchesExatos++;
          }
          // Match parcial (contém) vale menos
          else if (p.includes(kLower) || kLower.includes(p)) {
            score += item.peso * 0.5;
          }
        }
      }

      // Bônus para matches exatos múltiplos
      if (matchesExatos >= 2) {
        score += 20;
      }

      if (score > melhorScore) {
        melhorScore = score;
        melhorMatch = item;
      }
    }

    // Só responde se tiver score mínimo
    if (melhorMatch && melhorScore >= 5) {
      return melhorMatch.resposta;
    }

    return "🤖 Não encontrei uma resposta exata para isso. Tente perguntar sobre: <b>preço, potência, IP66, bateria, Bluetooth, TWS, app, graves, garantia</b> ou <b>demonstração</b>.";
  }
};

const HISTORIAS = [
  { id: "hist1", titulo: "1ª Abordagem — Promotor e Cliente", personagens: ["Bruno", "Cristiane", "Edy"], objetivo: "Abordagem, demonstração e fechamento" },
  { id: "hist2", titulo: "Pós-venda — Cliente Retorna", personagens: ["Cristiane", "Edy", "Bruno"], objetivo: "Suporte, app, IP66, TWS e indicação" },
  { id: "hist3", titulo: "Indicação — Cristiane e Fernanda", personagens: ["Bruno", "Cristiane", "Fernanda", "Edy"], objetivo: "Prova social, indicação e nova venda" },
  { id: "hist4", titulo: "Treinamento — Bruno e Edy", personagens: ["Bruno", "Edy"], objetivo: "Treinamento técnico e replicação" },
  { id: "hist_expandida", titulo: "História Expandida — A Indicação", personagens: ["Bruno", "Cristiane", "Fernanda", "Edy"], objetivo: "Narrativa completa de retorno e indicação" }
];

const TECNOLOGIAS = [
  { id: "bluetooth", titulo: "Bluetooth 5.3", icone: "📶", resumo: "Alcance de 30m, estabilidade superior, baixa latência." },
  { id: "tws", titulo: "True Wireless Stereo", icone: "📡", resumo: "Conecte duas caixas e dobre a potência com estéreo real." },
  { id: "ip66", titulo: "Proteção IP66", icone: "💧", resumo: "Totalmente vedada contra poeira e jatos de água." },
  { id: "app_aiwa", titulo: "App AIWA Áudio BR", icone: "📱", resumo: "Equalizador, presets, reforço de grave e controle total." },
  { id: "bass_boost", titulo: "Bass Boost", icone: "🎵", resumo: "Reforço exclusivo de graves acima de 70% volume." },
  { id: "bateria", titulo: "Autonomia & Powerbank", icone: "🔋", resumo: "Até 30 horas e carregamento de celular via USB." }
];
