// Seed questions for each category
const seedQuestions = {
  casual: [
    "Qual é sua comida favorita e por quê?",
    "Se você pudesse viajar para qualquer lugar, onde seria?",
    "Qual hobby você gostaria de começar?",
    "Qual foi o melhor conselho que você já recebeu?",
    "O que você faz para relaxar depois de um dia difícil?",
    "Qual é sua estação do ano favorita?",
    "Qual foi o último livro que você leu e gostou?",
    "Qual é sua memória mais antiga?",
    "O que você gostaria de aprender a fazer?",
    "Qual é seu filme favorito de todos os tempos?",
    "Qual é sua música favorita para ouvir quando está feliz?",
    "Qual é o seu lugar favorito na sua cidade?",
    "Se você pudesse jantar com qualquer pessoa viva, quem seria?",
    "Qual é sua bebida favorita?",
    "Qual foi a última série que você assistiu?",
  ],
  fun: [
    "Se você fosse um super-herói, qual seria seu poder?",
    "Qual é a coisa mais estranha que você já comeu?",
    "Se você pudesse ter um animal exótico como pet, qual seria?",
    "Qual é sua teoria da conspiração favorita (mesmo que você não acredite nela)?",
    "Se você pudesse ter uma conversa com qualquer personagem fictício, quem seria?",
    "Qual habilidade inútil você domina?",
    "Se sua vida fosse um gênero de filme, qual seria?",
    "Qual é a coisa mais embaraçosa que você já fez?",
    "Se você pudesse inventar um feriado, como seria?",
    "Qual é a pior moda que você já seguiu?",
    "Se você pudesse ter um botão que fizesse uma coisa específica, o que seria?",
    "Qual é a piada mais engraçada que você conhece?",
    "Se você fosse um sabor de sorvete, qual seria?",
    "Qual é o apelido mais estranho que você já teve?",
    "Se você pudesse ser famoso por uma coisa, o que seria?",
  ],
  deep: [
    "O que você acha que é o sentido da vida?",
    "Qual experiência mudou completamente sua perspectiva?",
    "Do que você tem mais medo?",
    "Qual é o seu maior arrependimento?",
    "O que você gostaria que mais pessoas soubessem sobre você?",
    "Qual valor é mais importante para você?",
    "Como você define sucesso para si mesmo?",
    "Qual foi o momento mais definidor da sua vida até agora?",
    "O que você espera que as pessoas lembrem de você?",
    "Qual parte de si mesmo você está tentando melhorar atualmente?",
    "Qual foi a decisão mais difícil que você já tomou?",
    "O que você acha que acontece após a morte?",
    "Qual é a coisa mais importante que você aprendeu na vida?",
    "Como você lida com o fracasso?",
    "O que você acha que o mundo mais precisa agora?",
  ],
  romantic: [
    "Qual é sua ideia de um encontro perfeito?",
    "O que você valoriza mais em um relacionamento?",
    "Como você demonstra amor aos outros?",
    "Qual é sua linguagem de amor principal?",
    "Qual foi o gesto romântico mais significativo que alguém já fez por você?",
    "O que você acha que é mais importante: paixão ou companheirismo?",
    "Qual é seu maior medo em um relacionamento?",
    "O que você aprendeu com relacionamentos passados?",
    "Como você lida com conflitos em um relacionamento?",
    "O que você considera um 'divisor de águas' em um relacionamento?",
    "Qual é a coisa mais romântica que você já fez por alguém?",
    "O que você acha sobre amor à primeira vista?",
    "Qual é a sua definição de intimidade?",
    "Como você sabe quando está apaixonado?",
    "O que você acha que mantém um relacionamento saudável a longo prazo?",
  ],
  erotic: [
    "Qual é a sua fantasia que você nunca contou a ninguém?",
    "Qual lugar inusitado você gostaria de ter um momento íntimo?",
    "O que você acha mais atraente em outra pessoa?",
    "Qual parte do seu corpo você mais gosta que toquem?",
    "Qual foi a experiência mais ousada que você já teve?",
    "O que te deixa mais excitado(a)?",
    "Qual é a sua posição favorita?",
    "Você já teve algum sonho erótico com alguém presente aqui?",
    "Qual é o seu maior desejo não realizado?",
    "O que você acha de brinquedos adultos?",
    "Qual é a sua maior zona erógena?",
    "Você prefere dominar ou ser dominado(a)?",
    "Qual é a coisa mais ousada que você já fez em público?",
    "O que você acha de roleplay ou fantasias?",
    "Qual é a sua maior curiosidade que nunca experimentou?",
  ],
}

// Seed challenges for the challenge category
const seedChallenges = {
  casual: [
    "Desafio: Conte uma história engraçada sobre sua infância.",
    "Desafio: Faça uma imitação de alguém famoso.",
    "Desafio: Mostre a foto mais embaraçosa no seu celular.",
    "Desafio: Fale por 30 segundos sobre seu hobby favorito sem parar.",
    "Desafio: Desenhe um retrato rápido de alguém do grupo.",
  ],
  fun: [
    "Desafio: Dance como se ninguém estivesse olhando por 30 segundos.",
    "Desafio: Faça sua melhor cara de 'blue steel' como no Zoolander.",
    "Desafio: Invente uma piada na hora.",
    "Desafio: Cante o refrão da sua música favorita.",
    "Desafio: Faça uma mímica e deixe os outros adivinharem.",
  ],
  deep: [
    "Desafio: Compartilhe uma verdade sobre você que ninguém aqui sabe.",
    "Desafio: Conte sobre um momento que mudou sua vida.",
    "Desafio: Revele seu maior medo e por que ele te assusta.",
    "Desafio: Compartilhe um objetivo de vida que você ainda não realizou.",
    "Desafio: Diga uma coisa que você gostaria de mudar em si mesmo.",
  ],
  romantic: [
    "Desafio: Dê um elogio sincero para cada pessoa do grupo.",
    "Desafio: Conte sobre seu primeiro beijo.",
    "Desafio: Demonstre como você flerta com alguém.",
    "Desafio: Descreva seu encontro perfeito em detalhes.",
    "Desafio: Faça uma declaração romântica para um objeto na sala.",
  ],
  erotic: [
    "Desafio: Faça sua expressão mais sedutora.",
    "Desafio: Sussurre algo provocante no ouvido de alguém (com consentimento).",
    "Desafio: Mostre seu movimento de dança mais sensual.",
    "Desafio: Conte sobre uma fantasia que você tem.",
    "Desafio: Faça uma massagem de 30 segundos nos ombros de alguém (com consentimento).",
  ],
}

// Templates for generating questions
const templates = {
  casual: [
    "Se você pudesse ter um jantar com qualquer {pessoa} da história, quem seria?",
    "Qual {atividade} você gostaria de experimentar pelo menos uma vez na vida?",
    "Se você pudesse morar em qualquer {lugar}, onde seria?",
    "Qual {objeto} você não consegue viver sem?",
    "Se você pudesse dominar qualquer {habilidade} instantaneamente, qual seria?",
    "Qual é o seu {evento} favorito do ano?",
    "Se você pudesse mudar uma coisa sobre {assunto}, o que seria?",
    "Qual {comida} você poderia comer todos os dias?",
    "Qual foi a melhor {experiência} que você já teve?",
    "Se você pudesse visitar qualquer {período} da história, qual seria?",
  ],
  fun: [
    "Se você fosse um {animal}, qual seria e por quê?",
    "Qual é a {situação} mais engraçada que já aconteceu com você?",
    "Se você pudesse ter qualquer {objeto} mágico, o que seria?",
    "Qual {superpoder} incomum você gostaria de ter?",
    "Se sua vida fosse um {gênero} de filme, quem interpretaria você?",
    "Qual é a {atividade} mais maluca da sua lista de desejos?",
    "Se você pudesse trocar de vida com um {personagem} por um dia, quem seria?",
    "Qual {habilidade} estranha você tem que poucas pessoas sabem?",
    "Se você pudesse inventar um novo {item}, o que seria?",
    "Qual é a {teoria} mais estranha em que você secretamente acredita?",
  ],
  deep: [
    "Como você acha que {evento} moldou quem você é hoje?",
    "Qual {decisão} você tomaria diferente se pudesse voltar no tempo?",
    "O que você acha que as pessoas {ação} sobre você?",
    "Como você define {conceito} em sua própria vida?",
    "Qual {experiência} mudou fundamentalmente sua visão de mundo?",
    "O que você acha que é mais importante: {opção1} ou {opção2}?",
    "Como você lida com {emoção} em sua vida?",
    "Qual {valor} você nunca comprometeria?",
    "O que você acha que as pessoas deveriam {ação} mais em suas vidas?",
    "Como você imagina que será {período} a partir de agora?",
  ],
  romantic: [
    "O que você considera o aspecto mais importante de {relacionamento}?",
    "Como você expressa {sentimento} em um relacionamento?",
    "Qual é o seu {gesto} romântico favorito?",
    "O que você acha sobre {conceito} em relacionamentos?",
    "Como você sabe quando {ação} alguém?",
    "Qual é a sua opinião sobre {assunto} em um relacionamento?",
    "O que você acha que é essencial para {tipo} relacionamento?",
    "Como você lida com {problema} em um relacionamento?",
    "O que você valoriza mais: {opção1} ou {opção2} em um parceiro?",
    "Qual {experiência} romântica você gostaria de viver?",
  ],
  erotic: [
    "O que você acha sobre {atividade_intima}?",
    "Você já experimentou {experiencia} antes?",
    "Qual é sua opinião sobre {tema_adulto}?",
    "O que você acha mais excitante: {opcao1} ou {opcao2}?",
    "Você prefere {preferencia1} ou {preferencia2}?",
    "Qual é a coisa mais {adjetivo} que você já fez?",
    "Se pudesse realizar qualquer {fantasia}, qual seria?",
    "O que você acha de {pratica} com um parceiro?",
    "Qual {parte_corpo} você acha mais atraente?",
    "Você já teve alguma experiência com {situacao}?",
  ],
}

// Templates for generating challenges
const challengeTemplates = {
  casual: [
    "Desafio: Conte uma história sobre {tema_casual} sem usar a palavra '{palavra_proibida}'.",
    "Desafio: Imite {celebridade} por 30 segundos.",
    "Desafio: Mostre a {tipo_foto} mais recente no seu celular.",
    "Desafio: Fale sobre {assunto_casual} por 1 minuto sem parar.",
    "Desafio: Faça uma ligação rápida para {contato} e diga '{mensagem_aleatória}'.",
    "Desafio: Troque de lugar com a pessoa à sua {direção} até a próxima rodada.",
    "Desafio: Faça uma selfie com {pose_engraçada} e mostre para o grupo.",
    "Desafio: Deixe a pessoa à sua direita escolher sua {mídia_social} e postar algo (apropriado).",
    "Desafio: Fale com sotaque de {região} até seu próximo turno.",
    "Desafio: Desenhe {objeto} de olhos fechados e mostre para todos.",
  ],
  fun: [
    "Desafio: Dance como se estivesse em um {tipo_dança} por 30 segundos.",
    "Desafio: Faça sua melhor imitação de {animal}.",
    "Desafio: Cante o refrão de {música_popular} com toda emoção.",
    "Desafio: Faça uma mímica de {atividade_cotidiana} e deixe os outros adivinharem.",
    "Desafio: Conte uma piada de {tema_piada} na hora.",
    "Desafio: Faça uma careta que represente {emoção} e tire uma foto.",
    "Desafio: Invente um comercial de TV para {produto_comum}.",
    "Desafio: Faça uma pose de {esporte} como se fosse para uma foto profissional.",
    "Desafio: Crie um slogan para {marca_fictícia} em 30 segundos.",
    "Desafio: Faça uma rima com o nome de cada pessoa do grupo.",
  ],
  deep: [
    "Desafio: Compartilhe uma verdade sobre {tema_pessoal} que ninguém aqui sabe.",
    "Desafio: Descreva um momento em que você sentiu {emoção_intensa}.",
    "Desafio: Revele algo que você {ação} mas nunca admitiu antes.",
    "Desafio: Compartilhe um objetivo de vida relacionado a {área_vida} que você ainda não realizou.",
    "Desafio: Diga uma coisa sobre {aspecto_pessoal} que você gostaria de mudar em si mesmo.",
    "Desafio: Conte sobre uma vez que você {situação_difícil} e como superou.",
    "Desafio: Compartilhe uma lição de vida que você aprendeu com {experiência}.",
    "Desafio: Descreva seu maior {tipo_medo} e por que ele te assusta.",
    "Desafio: Conte sobre uma decisão difícil relacionada a {tema_decisão} que você teve que tomar.",
    "Desafio: Compartilhe um sonho ou aspiração relacionado a {sonho} que você nunca contou a ninguém.",
  ],
  romantic: [
    "Desafio: Dê um elogio sincero sobre {característica} para cada pessoa do grupo.",
    "Desafio: Demonstre como você flertaria com alguém em {cenário}.",
    "Desafio: Faça uma declaração romântica para {objeto_sala} como se fosse uma pessoa.",
    "Desafio: Conte sobre seu {experiência_romântica} mais memorável.",
    "Desafio: Descreva seu encontro perfeito em {local_romântico}.",
    "Desafio: Demonstre como você reagiria se alguém te pedisse em {compromisso}.",
    "Desafio: Escreva uma mensagem romântica curta para {pessoa_imaginária}.",
    "Desafio: Faça uma serenata improvisada sobre {tema_amor} para o grupo.",
    "Desafio: Conte como seria seu {evento_romântico} ideal.",
    "Desafio: Demonstre como você daria um {gesto_romântico} a alguém especial.",
  ],
  erotic: [
    "Desafio: Faça sua expressão mais sedutora enquanto {ação_comum}.",
    "Desafio: Demonstre como você dançaria para seduzir alguém (mantenha apropriado).",
    "Desafio: Conte sobre uma fantasia envolvendo {cenário_fantasia}.",
    "Desafio: Faça uma massagem de 30 segundos nos ombros de alguém (com consentimento).",
    "Desafio: Descreva o que você considera o {adjetivo_sensual} em um parceiro.",
    "Desafio: Sussurre algo provocante sobre {tema_provocante} no ouvido de alguém (com consentimento).",
    "Desafio: Demonstre como você reagiria se alguém te {ação_sedutora} inesperadamente.",
    "Desafio: Conte sobre uma vez que você se sentiu {emoção_sensual} com alguém inesperado.",
    "Desafio: Descreva o que você faria se tivesse uma noite inteira em {local_íntimo} com alguém especial.",
    "Desafio: Demonstre sua técnica de {ação_romântica} (mantenha apropriado).",
  ],
}

// Fill-in options for templates
const fillIns = {
  pessoa: ["celebridade", "figura histórica", "líder mundial", "cientista", "artista", "filósofo", "atleta"],
  atividade: ["esporte radical", "hobby", "viagem", "experiência cultural", "atividade artística", "desafio físico"],
  lugar: ["país", "cidade", "tipo de casa", "ambiente", "paisagem", "clima", "continente"],
  objeto: ["dispositivo tecnológico", "item do dia a dia", "luxo", "ferramenta", "acessório", "item vintage"],
  habilidade: ["idioma", "instrumento musical", "esporte", "arte", "habilidade técnica", "talento", "ofício"],
  evento: ["feriado", "celebração", "festival", "temporada", "ocasião especial", "tradição"],
  assunto: ["sua rotina", "sua casa", "seu trabalho", "sua cidade", "o mundo", "a tecnologia"],
  comida: ["sobremesa", "prato principal", "lanche", "comida de rua", "culinária", "refeição caseira"],
  experiência: ["viagem", "aventura", "conquista", "surpresa", "presente", "momento"],
  período: ["década", "era", "século", "momento histórico", "ano", "época"],
  animal: ["animal selvagem", "animal doméstico", "criatura mitológica", "inseto", "ave", "mamífero"],
  situação: ["situação embaraçosa", "coincidência", "mal-entendido", "surpresa", "acidente engraçado"],
  superpoder: ["habilidade mental", "poder físico", "capacidade sobrenatural", "talento extraordinário"],
  gênero: ["comédia", "drama", "ação", "romance", "ficção científica", "fantasia", "terror"],
  personagem: ["personagem de filme", "celebridade", "figura histórica", "personagem de livro"],
  item: ["gadget", "aplicativo", "serviço", "produto", "invenção", "dispositivo"],
  teoria: ["teoria da conspiração", "ideia filosófica", "conceito científico", "crença popular"],
  evento: ["desafio", "sucesso", "fracasso", "relacionamento", "viagem", "decisão importante"],
  decisão: ["escolha de carreira", "decisão financeira", "escolha de relacionamento", "mudança de vida"],
  ação: ["não entendem", "apreciam", "criticam", "admiram", "subestimam", "superestimam"],
  conceito: ["felicidade", "sucesso", "amor", "liberdade", "segurança", "realização"],
  opção1: ["dinheiro", "tempo", "saúde", "conhecimento", "conexões", "experiências"],
  opção2: ["fama", "segurança", "aventura", "estabilidade", "paixão", "tranquilidade"],
  emoção: ["medo", "raiva", "tristeza", "ansiedade", "estresse", "incerteza", "decepção"],
  valor: ["honestidade", "lealdade", "integridade", "respeito", "compaixão", "coragem"],
  período: ["5 anos", "10 anos", "20 anos", "sua velhice", "o próximo capítulo da sua vida"],
  relacionamento: ["um relacionamento longo", "um primeiro encontro", "uma amizade romântica", "um casamento"],
  sentimento: ["amor", "carinho", "admiração", "gratidão", "desejo", "compromisso"],
  gesto: ["presente", "surpresa", "declaração", "ritual", "tradição", "demonstração pública"],
  conceito: ["monogamia", "compromisso", "espaço pessoal", "comunicação aberta", "romance"],
  assunto: ["ciúmes", "expectativas", "planos futuros", "finanças", "família", "comunicação"],
  tipo: ["saudável", "duradouro", "apaixonado", "equilibrado", "feliz", "significativo"],
  problema: ["discordâncias", "diferenças de opinião", "expectativas diferentes", "pressão externa"],
  opção1: ["senso de humor", "inteligência", "aparência", "ambição", "gentileza", "criatividade"],
  opção2: ["estabilidade", "espontaneidade", "paixão", "compatibilidade", "comunicação", "valores compartilhados"],
  atividade_intima: [
    "sexting",
    "jogos de sedução",
    "massagens sensuais",
    "vendas nos olhos",
    "amarrações leves",
    "banho a dois",
    "strip-tease",
  ],
  experiencia: [
    "um encontro às cegas",
    "sexo ao ar livre",
    "uma noite de três",
    "uma fantasia específica",
    "uma experiência BDSM leve",
    "uma massagem tântrica",
  ],
  tema_adulto: [
    "brinquedos adultos",
    "lingeries sensuais",
    "jogos eróticos",
    "fotos íntimas",
    "vídeos caseiros",
    "sexo por telefone",
  ],
  opcao1: ["preliminares longas", "encontros rápidos", "luzes acesas", "ambientes românticos", "manhãs", "noites"],
  opcao2: ["ir direto ao ponto", "sessões longas", "escuridão total", "ambientes selvagens", "tardes", "madrugadas"],
  preferencia1: ["ser dominante", "receber oral", "posições clássicas", "ambientes silenciosos", "sexo espontâneo"],
  preferencia2: ["ser submisso(a)", "fazer oral", "posições mais ousadas", "gemidos altos", "sexo planejado"],
  adjetivo: ["ousada", "excitante", "arriscada", "intensa", "selvagem", "sensual", "provocante"],
  fantasia: ["fantasia sexual", "experiência a três", "roleplay", "cenário", "fetiche"],
  pratica: [
    "sexo oral",
    "sexo anal",
    "uso de brinquedos",
    "roleplay",
    "dirty talk",
    "massagem erótica",
    "sexo em lugares públicos",
  ],
  parte_corpo: ["parte do corpo", "característica física", "atributo físico", "traço físico"],
  situacao: ["sexo casual", "amizade colorida", "sexo em grupo", "swing", "voyeurismo", "exibicionismo"],

  // Challenge-specific fill-ins
  tema_casual: ["sua infância", "sua primeira viagem", "seu trabalho", "sua família", "seu hobby favorito"],
  palavra_proibida: ["eu", "mas", "tipo", "como", "então", "muito", "legal"],
  celebridade: ["um político famoso", "um cantor pop", "um ator de Hollywood", "um apresentador de TV"],
  tipo_foto: ["selfie", "foto de comida", "foto de paisagem", "foto com amigos", "foto de animal de estimação"],
  assunto_casual: ["seu filme favorito", "sua comida preferida", "seu último final de semana", "suas férias ideais"],
  contato: ["um amigo próximo", "um familiar", "a última pessoa que você conversou"],
  mensagem_aleatória: ["estou pensando em você", "adivinha onde estou?", "você não vai acreditar no que aconteceu"],
  direção: ["direita", "esquerda"],
  pose_engraçada: ["cara de peixe", "sobrancelhas levantadas", "bochecha inflada", "olhos cruzados"],
  mídia_social: ["status do WhatsApp", "story do Instagram", "tweet", "bio do perfil"],
  região: ["carioca", "nordestino", "mineiro", "gaúcho", "paulistano"],
  objeto: ["um elefante", "uma casa", "um carro", "uma árvore", "um smartphone"],

  tipo_dança: ["balé", "funk", "tango", "hip hop", "dança do ventre", "forró"],
  animal: ["macaco", "gato", "cachorro", "leão", "galinha", "pato"],
  música_popular: ["uma música sertaneja", "um funk", "um pagode", "um rock clássico", "um pop atual"],
  atividade_cotidiana: ["escovar os dentes", "dirigir", "cozinhar", "fazer exercícios", "tomar banho"],
  tema_piada: ["sogra", "político", "médico", "professor", "bar"],
  emoção: ["felicidade", "tristeza", "surpresa", "medo", "nojo", "raiva"],
  produto_comum: ["pasta de dente", "sabonete", "refrigerante", "cereal matinal", "detergente"],
  esporte: ["futebol", "natação", "yoga", "levantamento de peso", "corrida"],
  marca_fictícia: ["um novo energético", "um aplicativo revolucionário", "um serviço de streaming", "um restaurante"],

  tema_pessoal: ["seus medos", "seus sonhos", "sua infância", "seus relacionamentos", "sua carreira"],
  emoção_intensa: ["extremamente vulnerável", "completamente realizado", "profundamente triste", "intensamente feliz"],
  ação: ["sempre quis fazer", "secretamente gosta", "tem vergonha de admitir", "se arrepende de ter feito"],
  área_vida: ["carreira", "relacionamentos", "saúde", "aventuras", "aprendizado", "família"],
  aspecto_pessoal: ["sua personalidade", "seus hábitos", "sua aparência", "suas habilidades sociais"],
  situação_difícil: ["falhou miseravelmente", "foi rejeitado", "perdeu algo importante", "enfrentou um grande medo"],
  experiência: ["um fracasso", "uma perda", "uma vitória inesperada", "um relacionamento", "uma viagem"],
  tipo_medo: ["medo irracional", "medo da infância", "medo existencial", "medo social"],
  tema_decisão: ["carreira", "amor", "amizade", "família", "mudança de vida"],
  sonho: ["viagem", "carreira", "relacionamento", "habilidade", "conquista pessoal"],

  característica: ["inteligência", "senso de humor", "gentileza", "aparência", "criatividade"],
  cenário: ["um bar", "uma festa", "um aplicativo de namoro", "uma livraria", "uma academia"],
  objeto_sala: ["uma cadeira", "uma mesa", "um copo", "uma planta", "um quadro"],
  experiência_romântica: ["primeiro beijo", "encontro", "declaração de amor", "término"],
  local_romântico: ["Paris", "uma praia deserta", "um restaurante elegante", "um chalé na montanha"],
  compromisso: ["namoro", "noivado", "casamento"],
  pessoa_imaginária: ["sua celebridade crush", "seu tipo ideal", "seu amor platônico"],
  tema_amor: ["amor à primeira vista", "amor não correspondido", "amor eterno", "paixão ardente"],
  evento_romântico: ["casamento", "lua de mel", "aniversário de namoro", "pedido de casamento"],
  gesto_romântico: ["beijo", "abraço", "presente surpresa", "declaração de amor"],

  ação_comum: ["tomando água", "checando o celular", "amarrando o sapato", "bocejando"],
  cenário_fantasia: ["uma viagem", "um encontro às cegas", "uma festa", "um escritório"],
  adjetivo_sensual: ["mais atraente", "mais sexy", "mais sedutor", "mais excitante"],
  tema_provocante: ["um segredo", "um desejo", "um elogio", "um convite"],
  ação_sedutora: ["beijasse", "abraçasse", "fizesse um elogio ousado", "convidasse para sair"],
  emoção_sensual: ["atraído", "excitado", "seduzido", "desejado"],
  local_íntimo: ["um hotel de luxo", "uma cabana isolada", "uma praia deserta", "um spa privativo"],
  ação_romântica: ["beijo", "massagem", "dança lenta", "abraço"],
}

// Function to randomly select an item from an array
const randomItem = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)]
}

// Function to fill in a template with random options
const fillTemplate = (template: string): string => {
  let filledTemplate = template

  // Find all placeholders in the format {placeholder}
  const placeholders = template.match(/\{([^}]+)\}/g) || []

  // Replace each placeholder with a random option
  placeholders.forEach((placeholder) => {
    const key = placeholder.replace(/[{}]/g, "")
    if (fillIns[key as keyof typeof fillIns]) {
      const replacement = randomItem(fillIns[key as keyof typeof fillIns])
      filledTemplate = filledTemplate.replace(placeholder, replacement)
    }
  })

  return filledTemplate
}

// Main function to generate questions
export const generateQuestions = (category: string, count: number): string[] => {
  const result: string[] = []
  const categoryTemplates = templates[category as keyof typeof templates] || []
  const categorySeedQuestions = seedQuestions[category as keyof typeof seedQuestions] || []

  // First add all seed questions
  result.push(...categorySeedQuestions)

  // Then generate additional questions using templates
  while (result.length < count) {
    const template = randomItem(categoryTemplates)
    const question = fillTemplate(template)

    // Only add if it's not a duplicate
    if (!result.includes(question)) {
      result.push(question)
    }
  }

  // Shuffle the array to mix seed and generated questions
  return result.sort(() => Math.random() - 0.5)
}

// Function to generate challenges from all categories or a specific category
export const generateChallenges = (count: number, subcategory = "all"): string[] => {
  const result: string[] = []

  if (subcategory === "all") {
    // Add seed challenges from all categories
    Object.values(seedChallenges).forEach((challenges) => {
      result.push(...challenges)
    })

    // Generate additional challenges using templates from all categories
    while (result.length < count) {
      // Randomly select a category
      const categories = Object.keys(challengeTemplates)
      const randomCategory = randomItem(categories)

      // Get templates for that category
      const categoryTemplates = challengeTemplates[randomCategory as keyof typeof challengeTemplates]

      // Generate a challenge using a random template
      const template = randomItem(categoryTemplates)
      const challenge = fillTemplate(template)

      // Only add if it's not a duplicate
      if (!result.includes(challenge)) {
        result.push(challenge)
      }
    }
  } else {
    // Add seed challenges from specific category
    const categoryChallenges = seedChallenges[subcategory as keyof typeof seedChallenges] || []
    result.push(...categoryChallenges)

    // Generate additional challenges using templates from specific category
    const categoryTemplates = challengeTemplates[subcategory as keyof typeof challengeTemplates] || []

    while (result.length < count) {
      // Generate a challenge using a random template
      const template = randomItem(categoryTemplates)
      const challenge = fillTemplate(template)

      // Only add if it's not a duplicate
      if (!result.includes(challenge)) {
        result.push(challenge)
      }
    }
  }

  // Shuffle the array to mix seed and generated challenges
  return result.sort(() => Math.random() - 0.5)
}
