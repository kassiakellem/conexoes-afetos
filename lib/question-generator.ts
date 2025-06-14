

// Tipagens para maior segurança e clareza
type CategoryContent = {
  [key: string]: string[];
};

type TemplatesContent = {
  [key: string]: string[];
};

type FillInsContent = {
  [key: string]: string[];
};

// Seed questions for each category
const seedQuestions: CategoryContent = {
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
};

// Seed challenges for the challenge category
const seedChallenges: CategoryContent = {
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
};

// Templates for generating questions
const templates: TemplatesContent = {
  casual: [
    "Se você pudesse ter um jantar com qualquer {pessoa} da história, quem seria?",
    "Qual {atividade} você gostaria de experimentar pelo menos uma vez na vida?",
    "Se você pudesse morar em qualquer {lugar}, onde seria?",
    "Qual {objeto} você não consegue viver sem?",
    "Se você pudesse dominar qualquer {habilidade} instantaneamente, qual seria?",
    "Qual é o seu {evento_casual} favorito do ano?", // Renomeado
    "Se você pudesse mudar uma coisa sobre {assunto} de seu passado, o que seria?", // Adicionado "de seu passado" para mais contexto e para evitar duplicação do placeholder 'assunto'
    "Qual {comida} você poderia comer todos os dias?",
    "Qual foi a melhor {experiência_pessoal} que você já teve?", // Renomeado
    "Se você pudesse visitar qualquer {período_historico} da história, qual seria?", // Renomeado
  ],
  fun: [
    "Se você fosse um {animal_imaginario}, qual seria e por quê?", // Renomeado
    "Qual é a {situação_engracada} mais engraçada que já aconteceu com você?", // Renomeado
    "Se você pudesse ter qualquer {objeto_magico}, o que seria?", // Renomeado
    "Qual {superpoder_inusitado} incomum você gostaria de ter?", // Renomeado
    "Se sua vida fosse um {genero_filme} de filme, quem interpretaria você?", // Renomeado
    "Qual é a {atividade_maluca} mais maluca da sua lista de desejos?", // Renomeado
    "Se você pudesse trocar de vida com um {personagem_ficticio} por um dia, quem seria?", // Renomeado
    "Qual {habilidade_estranha} estranha você tem que poucas pessoas sabem?", // Renomeado
    "Se você pudesse inventar um novo {item_inovador}, o que seria?", // Renomeado
    "Qual é a {teoria_bizarra} mais estranha em que você secretamente acredita?", // Renomeado
  ],
  deep: [
    "Como você acha que {evento_vida} moldou quem você é hoje?", // Renomeado
    "Qual {decisão_dificil} você tomaria diferente se pudesse voltar no tempo?", // Renomeado
    "O que você acha que as pessoas {percepcao_sobre_voce} sobre você?", // Renomeado
    "Como você define {conceito_vida} em sua própria vida?", // Renomeado
    "Qual {experiencia_transformadora} mudou fundamentalmente sua visão de mundo?", // Renomeado
    "O que você acha que é mais importante: {opcao_profunda1} ou {opcao_profunda2}?", // Renomeado
    "Como você lida com {emocao_desafiadora} em sua vida?", // Renomeado
    "Qual {valor_fundamental} você nunca comprometeria?", // Renomeado
    "O que você acha que as pessoas deveriam {acao_recomendada} mais em suas vidas?", // Renomeado
    "Como você imagina que será {futuro_pessoal} a partir de agora?", // Renomeado
  ],
  romantic: [
    "O que você considera o aspecto mais importante de {relacionamento_tipo}?", // Renomeado
    "Como você expressa {sentimento_amoroso} em um relacionamento?", // Renomeado
    "Qual é o seu {gesto_romantico_favorito}?", // Renomeado
    "O que você acha sobre {conceito_relacionamento} em relacionamentos?", // Renomeado
    "Como você sabe quando está {acao_amorosa} alguém?", // Renomeado
    "Qual é a sua opinião sobre {assunto_relacionamento} em um relacionamento?", // Renomeado
    "O que você acha que é essencial para {tipo_relacionamento_saudavel} relacionamento?", // Renomeado
    "Como você lida com {problema_relacionamento} em um relacionamento?", // Renomeado
    "O que você valoriza mais: {qualidade_parceiro1} ou {qualidade_parceiro2} em um parceiro?", // Renomeado
    "Qual {experiencia_romantica_sonho} você gostaria de viver?", // Renomeado
  ],
  erotic: [
    "O que você acha sobre {atividade_intima_erotica}?", // Renomeado
    "Você já experimentou {experiencia_ousada} antes?", // Renomeado
    "Qual é sua opinião sobre {tema_adulto_erotico}?", // Renomeado
    "O que você acha mais excitante: {preferencia_erotica1} ou {preferencia_erotica2}?", // Renomeado
    "Você prefere {preferencia_prazer1} ou {preferencia_prazer2}?", // Renomeado
    "Qual é a coisa mais {adjetivo_atrevido} que você já fez?", // Renomeado
    "Se pudesse realizar qualquer {fantasia_secreta}, qual seria?", // Renomeado
    "O que você acha de {pratica_sexual} com um parceiro?", // Renomeado
    "Qual {parte_corpo_sensual} você acha mais atraente?", // Renomeado
    "Você já teve alguma experiência com {situacao_intima}?", // Renomeado
  ],
};

// Templates for generating challenges
const challengeTemplates: TemplatesContent = {
  casual: [
    "Desafio: Conte uma história sobre {tema_casual} sem usar a palavra '{palavra_proibida}'.",
    "Desafio: Imite {celebridade_imitacao} por 30 segundos.", // Renomeado
    "Desafio: Mostre a {tipo_foto_celular} mais recente no seu celular.", // Renomeado
    "Desafio: Fale sobre {assunto_aleatorio_casual} por 1 minuto sem parar.", // Renomeado
    "Desafio: Faça uma ligação rápida para {contato_ligacao} e diga '{mensagem_aleatoria_ligacao}'.", // Renomeado
    "Desafio: Troque de lugar com a pessoa à sua {direcao_troca} até a próxima rodada.", // Renomeado
    "Desafio: Faça uma selfie com {pose_engracada_selfie} e mostre para o grupo.", // Renomeado
    "Desafio: Deixe a pessoa à sua direita escolher sua {midia_social_post} e postar algo (apropriado).", // Renomeado
    "Desafio: Fale com sotaque de {regiao_sotaque} até seu próximo turno.", // Renomeado
    "Desafio: Desenhe {objeto_desenho} de olhos fechados e mostre para todos.", // Renomeado
  ],
  fun: [
    "Desafio: Dance como se estivesse em um {tipo_danca_exotica} por 30 segundos.", // Renomeado
    "Desafio: Faça sua melhor imitação de {animal_imitacao}.", // Renomeado
    "Desafio: Cante o refrão de {musica_popular_cantar} com toda emoção.", // Renomeado
    "Desafio: Faça uma mímica de {atividade_cotidiana_mimica} e deixe os outros adivinharem.", // Renomeado
    "Desafio: Conte uma piada de {tema_piada_tipo} na hora.", // Renomeado
    "Desafio: Faça uma careta que represente {emocao_careta} e tire uma foto.", // Renomeado
    "Desafio: Invente um comercial de TV para {produto_comum_comercial}.", // Renomeado
    "Desafio: Faça uma pose de {esporte_pose} como se fosse para uma foto profissional.", // Renomeado
    "Desafio: Crie um slogan para {marca_ficticia_slogan} em 30 segundos.", // Renomeado
    "Desafio: Faça uma rima com o nome de cada pessoa do grupo.",
  ],
  deep: [
    "Desafio: Compartilhe uma verdade sobre {tema_pessoal_profundo} que ninguém aqui sabe.", // Renomeado
    "Desafio: Descreva um momento em que você sentiu {emocao_intensa_sentida}.", // Renomeado
    "Desafio: Revele algo que você {acao_nao_admitida} mas nunca admitiu antes.", // Renomeado
    "Desafio: Compartilhe um objetivo de vida relacionado a {area_vida_objetivo} que você ainda não realizou.", // Renomeado
    "Desafio: Diga uma coisa sobre {aspecto_pessoal_melhoria} que você gostaria de mudar em si mesmo.", // Renomeado
    "Desafio: Conte sobre uma vez que você {situacao_dificil_superada} e como superou.", // Renomeado
    "Desafio: Compartilhe uma lição de vida que você aprendeu com {experiencia_aprendizado}.", // Renomeado
    "Desafio: Descreva seu maior {tipo_medo_profundo} e por que ele te assusta.", // Renomeado
    "Desafio: Conte sobre uma decisão difícil relacionada a {tema_decisao_dificil} que você teve que tomar.", // Renomeado
    "Desafio: Compartilhe um sonho ou aspiração relacionado a {sonho_aspiracao} que você nunca contou a ninguém.", // Renomeado
  ],
  romantic: [
    "Desafio: Dê um elogio sincero sobre {caracteristica_elogio} para cada pessoa do grupo.", // Renomeado
    "Desafio: Demonstre como você flertaria com alguém em {cenario_flerte}.", // Renomeado
    "Desafio: Faça uma declaração romântica para {objeto_sala_romantico} como se fosse uma pessoa.", // Renomeado
    "Desafio: Conte sobre seu {experiencia_romantica_memoravel} mais memorável.", // Renomeado
    "Desafio: Descreva seu encontro perfeito em {local_romantico_detalhado}.", // Renomeado
    "Desafio: Demonstre como você reagiria se alguém te pedisse em {compromisso_romantico}.", // Renomeado
    "Desafio: Escreva uma mensagem romântica curta para {pessoa_imaginaria_mensagem}.", // Renomeado
    "Desafio: Faça uma serenata improvisada sobre {tema_amor_serenata} para o grupo.", // Renomeado
    "Desafio: Conte como seria seu {evento_romantico_ideal}.", // Renomeado
    "Desafio: Demonstre como você daria um {gesto_romantico_dar} a alguém especial.", // Renomeado
  ],
  erotic: [
    "Desafio: Faça sua expressão mais sedutora enquanto {acao_comum_sedutora}.", // Renomeado
    "Desafio: Demonstre como você dançaria para seduzir alguém (mantenha apropriado).",
    "Desafio: Conte sobre uma fantasia envolvendo {cenario_fantasia_erotica}.", // Renomeado
    "Desafio: Faça uma massagem de 30 segundos nos ombros de alguém (com consentimento).",
    "Desafio: Descreva o que você considera o {adjetivo_sensual_parceiro} em um parceiro.", // Renomeado
    "Desafio: Sussurre algo provocante sobre {tema_provocante_sussurro} no ouvido de alguém (com consentimento).", // Renomeado
    "Desafio: Demonstre como você reagiria se alguém te {acao_sedutora_inesperada} inesperadamente.", // Renomeado
    "Desafio: Conte sobre uma vez que você se sentiu {emocao_sensual_inesperada} com alguém inesperado.", // Renomeado
    "Desafio: Descreva o que você faria se tivesse uma noite inteira em {local_intimo_sonho} com alguém especial.", // Renomeado
    "Desafio: Demonstre sua técnica de {acao_romantica_sensual} (mantenha apropriado).", // Renomeado
  ],
};

// Fill-in options for templates
const fillIns: FillInsContent = {
  pessoa: ["celebridade", "figura histórica", "líder mundial", "cientista", "artista", "filósofo", "atleta"],
  atividade: ["esporte radical", "hobby", "viagem", "experiência cultural", "atividade artística", "desafio físico"],
  lugar: ["país", "cidade", "tipo de casa", "ambiente", "paisagem", "clima", "continente"],
  objeto: ["dispositivo tecnológico", "item do dia a dia", "luxo", "ferramenta", "acessório", "item vintage"],
  habilidade: ["idioma", "instrumento musical", "esporte", "arte", "habilidade técnica", "talento", "ofício"],
  // Renomeado para evitar conflito com 'evento_vida'
  evento_casual: ["feriado", "celebração", "festival", "temporada", "ocasião especial", "tradição"],
  assunto: ["sua rotina", "sua casa", "seu trabalho", "sua cidade", "o mundo", "a tecnologia"],
  comida: ["sobremesa", "prato principal", "lanche", "comida de rua", "culinária", "refeição caseira"],
  // Renomeado
  experiencia_pessoal: ["viagem", "aventura", "conquista", "surpresa", "presente", "momento"],
  // Renomeado
  período_historico: ["década", "era", "século", "momento histórico", "ano", "época"],
  // Renomeado
  animal_imaginario: ["animal selvagem", "animal doméstico", "criatura mitológica", "inseto", "ave", "mamífero"],
  // Renomeado
  situação_engracada: ["situação embaraçosa", "coincidência", "mal-entendido", "surpresa", "acidente engraçado"],
  // Renomeado
  objeto_magico: ["anel de invisibilidade", "varinha mágica", "lâmpada do gênio", "capa de levitação", "amuleto da sorte"],
  // Renomeado
  superpoder_inusitado: ["ler mentes", "teletransporte", "controlar o tempo", "falar com animais", "curar doenças", "voar"],
  // Renomeado
  genero_filme: ["comédia", "drama", "ação", "romance", "ficção científica", "fantasia", "terror"],
  // Renomeado
  personagem_ficticio: ["personagem de filme", "celebridade", "figura histórica", "personagem de livro"],
  // Renomeado
  item_inovador: ["gadget", "aplicativo", "serviço", "produto", "invenção", "dispositivo"],
  // Renomeado
  habilidade_estranha: ["dobrar a língua", "fazer malabarismo", "andar de monociclo", "imitar sons de animais", "resolver cubo mágico rapidamente"],
  // Renomeado
  teoria_bizarra: ["teoria da conspiração", "ideia filosófica", "conceito científico", "crença popular"],
  // Renomeado para evitar conflito com 'evento_casual'
  evento_vida: ["desafio", "sucesso", "fracasso", "relacionamento", "viagem", "decisão importante"],
  // Renomeado
  decisão_dificil: ["escolha de carreira", "decisão financeira", "escolha de relacionamento", "mudança de vida"],
  // Renomeado
  percepcao_sobre_voce: ["não entendem", "apreciam", "criticam", "admiram", "subestimam", "superestimam"],
  // Renomeado
  conceito_vida: ["felicidade", "sucesso", "amor", "liberdade", "segurança", "realização"],
  // Renomeado
  experiencia_transformadora: ["viagem", "aventura", "conquista", "perda", "encontro", "desafio"],
  // Renomeado
  opcao_profunda1: ["dinheiro", "tempo", "saúde", "conhecimento", "conexões", "experiências"],
  // Renomeado
  opcao_profunda2: ["fama", "segurança", "aventura", "estabilidade", "paixão", "tranquilidade"],
  // Renomeado
  emocao_desafiadora: ["medo", "raiva", "tristeza", "ansiedade", "estresse", "incerteza", "decepção"],
  // Renomeado
  valor_fundamental: ["honestidade", "lealdade", "integridade", "respeito", "compaixão", "coragem"],
  // Renomeado
  acao_recomendada: ["refletir", "meditar", "se expressar", "ouvir os outros", "ser mais gentil", "perdoar"],
  // Renomeado
  futuro_pessoal: ["5 anos", "10 anos", "20 anos", "sua velhice", "o próximo capítulo da sua vida"],
  // Renomeado
  relacionamento_tipo: ["um relacionamento longo", "um primeiro encontro", "uma amizade romântica", "um casamento"],
  // Renomeado
  sentimento_amoroso: ["amor", "carinho", "admiração", "gratidão", "desejo", "compromisso"],
  // Renomeado
  gesto_romantico_favorito: ["presente", "surpresa", "declaração", "ritual", "tradição", "demonstração pública"],
  // Renomeado
  conceito_relacionamento: ["monogamia", "compromisso", "espaço pessoal", "comunicação aberta", "romance"],
  // Renomeado
  acao_amorosa: ["está apaixonado por", "está interessado em", "se importa com"],
  // Renomeado
  assunto_relacionamento: ["ciúmes", "expectativas", "planos futuros", "finanças", "família", "comunicação"],
  // Renomeado
  tipo_relacionamento_saudavel: ["saudável", "duradouro", "apaixonado", "equilibrado", "feliz", "significativo"],
  // Renomeado
  problema_relacionamento: ["discordâncias", "diferenças de opinião", "expectativas diferentes", "pressão externa"],
  // Renomeado
  qualidade_parceiro1: ["senso de humor", "inteligência", "aparência", "ambição", "gentileza", "criatividade"],
  // Renomeado
  qualidade_parceiro2: ["estabilidade", "espontaneidade", "paixão", "compatibilidade", "comunicação", "valores compartilhados"],
  // Renomeado
  experiencia_romantica_sonho: ["viagem romântica", "jantar à luz de velas", "escapada de fim de semana", "pedido de casamento surpresa"],
  // Renomeado
  atividade_intima_erotica: [
    "sexting",
    "jogos de sedução",
    "massagens sensuais",
    "vendas nos olhos",
    "amarrações leves",
    "banho a dois",
    "strip-tease",
  ],
  // Renomeado
  experiencia_ousada: [
    "um encontro às cegas",
    "sexo ao ar livre",
    "uma noite de três",
    "uma fantasia específica",
    "uma experiência BDSM leve",
    "uma massagem tântrica",
  ],
  // Renomeado
  tema_adulto_erotico: [
    "brinquedos adultos",
    "lingeries sensuais",
    "jogos eróticos",
    "fotos íntimas",
    "vídeos caseiros",
    "sexo por telefone",
  ],
  // Renomeado
  preferencia_erotica1: ["preliminares longas", "encontros rápidos", "luzes acesas", "ambientes românticos", "manhãs", "noites"],
  // Renomeado
  preferencia_erotica2: ["ir direto ao ponto", "sessões longas", "escuridão total", "ambientes selvagens", "tardes", "madrugadas"],
  // Renomeado
  preferencia_prazer1: ["ser dominante", "receber oral", "posições clássicas", "ambientes silenciosos", "sexo espontâneo"],
  // Renomeado
  preferencia_prazer2: ["ser submisso(a)", "fazer oral", "posições mais ousadas", "gemidos altos", "sexo planejado"],
  // Renomeado
  adjetivo_atrevido: ["ousada", "excitante", "arriscada", "intensa", "selvagem", "sensual", "provocante"],
  // Renomeado
  fantasia_secreta: ["fantasia sexual", "experiência a três", "roleplay", "cenário", "fetiche"],
  // Renomeado
  pratica_sexual: [
    "sexo oral",
    "sexo anal",
    "uso de brinquedos",
    "roleplay",
    "dirty talk",
    "massagem erótica",
    "sexo em lugares públicos",
  ],
  // Renomeado
  parte_corpo_sensual: ["parte do corpo", "característica física", "atributo físico", "traço físico"],
  // Renomeado
  situacao_intima: ["sexo casual", "amizade colorida", "sexo em grupo", "swing", "voyeurismo", "exibicionismo"],

  // Challenge-specific fill-ins
  tema_casual: ["sua infância", "sua primeira viagem", "seu trabalho", "sua família", "seu hobby favorito"],
  palavra_proibida: ["eu", "mas", "tipo", "como", "então", "muito", "legal"],
  // Renomeado
  celebridade_imitacao: ["um político famoso", "um cantor pop", "um ator de Hollywood", "um apresentador de TV"],
  // Renomeado
  tipo_foto_celular: ["selfie", "foto de comida", "foto de paisagem", "foto com amigos", "foto de animal de estimação"],
  // Renomeado
  assunto_aleatorio_casual: ["seu filme favorito", "sua comida preferida", "seu último final de semana", "suas férias ideais"],
  // Renomeado
  contato_ligacao: ["um amigo próximo", "um familiar", "a última pessoa que você conversou"],
  // Renomeado
  mensagem_aleatoria_ligacao: ["estou pensando em você", "adivinha onde estou?", "você não vai acreditar no que aconteceu"],
  // Renomeado
  direcao_troca: ["direita", "esquerda"],
  // Renomeado
  pose_engracada_selfie: ["cara de peixe", "sobrancelhas levantadas", "bochecha inflada", "olhos cruzados"],
  // Renomeado
  midia_social_post: ["status do WhatsApp", "story do Instagram", "tweet", "bio do perfil"],
  // Renomeado
  regiao_sotaque: ["carioca", "nordestino", "mineiro", "gaúcho", "paulistano"],
  // Renomeado
  objeto_desenho: ["um elefante", "uma casa", "um carro", "uma árvore", "um smartphone"],

  // Renomeado
  tipo_danca_exotica: ["balé", "funk", "tango", "hip hop", "dança do ventre", "forró"],
  // Renomeado
  animal_imitacao: ["macaco", "gato", "cachorro", "leão", "galinha", "pato"],
  // Renomeado
  musica_popular_cantar: ["uma música sertaneja", "um funk", "um pagode", "um rock clássico", "um pop atual"],
  // Renomeado
  atividade_cotidiana_mimica: ["escovar os dentes", "dirigir", "cozinhar", "fazer exercícios", "tomar banho"],
  // Renomeado
  tema_piada_tipo: ["sogra", "político", "médico", "professor", "bar"],
  // Renomeado
  emocao_careta: ["felicidade", "tristeza", "surpresa", "medo", "nojo", "raiva"],
  // Renomeado
  produto_comum_comercial: ["pasta de dente", "sabonete", "refrigerante", "cereal matinal", "detergente"],
  // Renomeado
  esporte_pose: ["futebol", "natação", "yoga", "levantamento de peso", "corrida"],
  // Renomeado
  marca_ficticia_slogan: ["um novo energético", "um aplicativo revolucionário", "um serviço de streaming", "um restaurante"],

  // Renomeado
  tema_pessoal_profundo: ["seus medos", "seus sonhos", "sua infância", "seus relacionamentos", "sua carreira"],
  // Renomeado
  emocao_intensa_sentida: ["extremamente vulnerável", "completamente realizado", "profundamente triste", "intensamente feliz"],
  // Renomeado
  acao_nao_admitida: ["sempre quis fazer", "secretamente gosta", "tem vergonha de admitir", "se arrepende de ter feito"],
  // Renomeado
  area_vida_objetivo: ["carreira", "relacionamentos", "saúde", "aventuras", "aprendizado", "família"],
  // Renomeado
  aspecto_pessoal_melhoria: ["sua personalidade", "seus hábitos", "sua aparência", "suas habilidades sociais"],
  // Renomeado
  situacao_dificil_superada: ["falhou miseravelmente", "foi rejeitado", "perdeu algo importante", "enfrentou um grande medo"],
  // Renomeado
  experiencia_aprendizado: ["um fracasso", "uma perda", "uma vitória inesperada", "um relacionamento", "uma viagem"],
  // Renomeado
  tipo_medo_profundo: ["medo irracional", "medo da infância", "medo existencial", "medo social"],
  // Renomeado
  tema_decisao_dificil: ["carreira", "amor", "amizade", "família", "mudança de vida"],
  // Renomeado
  sonho_aspiracao: ["viagem", "carreira", "relacionamento", "habilidade", "conquista pessoal"],

  // Renomeado
  caracteristica_elogio: ["inteligência", "senso de humor", "gentileza", "aparência", "criatividade"],
  // Renomeado
  cenario_flerte: ["um bar", "uma festa", "um aplicativo de namoro", "uma livraria", "uma academia"],
  // Renomeado
  objeto_sala_romantico: ["uma cadeira", "uma mesa", "um copo", "uma planta", "um quadro"],
  // Renomeado
  experiencia_romantica_memoravel: ["primeiro beijo", "encontro", "declaração de amor", "término"],
  // Renomeado
  local_romantico_detalhado: ["Paris", "uma praia deserta", "um restaurante elegante", "um chalé na montanha"],
  // Renomeado
  compromisso_romantico: ["namoro", "noivado", "casamento"],
  // Renomeado
  pessoa_imaginaria_mensagem: ["sua celebridade crush", "seu tipo ideal", "seu amor platônico"],
  // Renomeado
  tema_amor_serenata: ["amor à primeira vista", "amor não correspondido", "amor eterno", "paixão ardente"],
  // Renomeado
  evento_romantico_ideal: ["casamento", "lua de mel", "aniversário de namoro", "pedido de casamento"],
  // Renomeado
  gesto_romantico_dar: ["beijo", "abraço", "presente surpresa", "declaração de amor"],

  // Renomeado
  acao_comum_sedutora: ["tomando água", "checando o celular", "amarrando o sapato", "bocejando"],
  // Renomeado
  cenario_fantasia_erotica: ["uma viagem", "um encontro às cegas", "uma festa", "um escritório"],
  // Renomeado
  adjetivo_sensual_parceiro: ["mais atraente", "mais sexy", "mais sedutor", "mais excitante"],
  // Renomeado
  tema_provocante_sussurro: ["um segredo", "um desejo", "um elogio", "um convite"],
  // Renomeado
  acao_sedutora_inesperada: ["beijasse", "abraçasse", "fizesse um elogio ousado", "convidasse para sair"],
  // Renomeado
  emocao_sensual_inesperada: ["atraído", "excitado", "seduzido", "desejado"],
  // Renomeado
  local_intimo_sonho: ["um hotel de luxo", "uma cabana isolada", "uma praia deserta", "um spa privativo"],
  // Renomeado
  acao_romantica_sensual: ["beijo", "massagem", "dança lenta", "abraço"],
};

// Function to randomly select an item from an array
// Adicionado verificação de array vazio para evitar 'undefined'
const randomItem = <T>(array: T[]): T | undefined => {
  if (array.length === 0) {
    return undefined;
  }
  return array[Math.floor(Math.random() * array.length)];
};

// Fisher-Yates shuffle algorithm for more efficient and truly random shuffling
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Function to fill in a template with random options
const fillTemplate = (template: string): string => {
  let filledTemplate = template;

  const placeholders = template.match(/\{([^}]+)\}/g) || [];

  placeholders.forEach((placeholder) => {
    const key = placeholder.replace(/[{}]/g, "");
    const options = fillIns[key];
    if (options && options.length > 0) {
      const replacement = randomItem(options);
      // Garantir que a substituição ocorra apenas se um item válido for retornado
      if (replacement !== undefined) {
        filledTemplate = filledTemplate.replace(placeholder, replacement);
      } else {
        // Fallback para caso não haja opção para o placeholder
        filledTemplate = filledTemplate.replace(placeholder, `[${key} desconhecido]`);
      }
    } else {
      filledTemplate = filledTemplate.replace(placeholder, `[${key} sem opções]`);
    }
  });

  return filledTemplate;
};

// Main function to generate questions
export const generateQuestions = (category: string, count: number): string[] => {
  const result: Set<string> = new Set(); // Usar Set para garantir unicidade automaticamente
  const categoryTemplates = templates[category as keyof typeof templates] || [];
  const categorySeedQuestions = seedQuestions[category as keyof typeof seedQuestions] || [];

  // Adicionar todas as perguntas iniciais
  categorySeedQuestions.forEach(q => result.add(q));

  let attempts = 0;
  const maxAttempts = count * 5; // Limite de tentativas para evitar loop infinito

  // Gerar perguntas adicionais usando templates
  while (result.size < count && attempts < maxAttempts) {
    const template = randomItem(categoryTemplates);
    if (template === undefined) {
      // Se não há templates, saia do loop
      console.warn(`No templates found for category: ${category}`);
      break;
    }
    const question = fillTemplate(template);
    result.add(question);
    attempts++;
  }

  return shuffleArray(Array.from(result)).slice(0, count); // Converter para array, embaralhar e limitar
};

// Function to generate challenges from all categories or a specific category
export const generateChallenges = (count: number, subcategory = "all"): string[] => {
  const result: Set<string> = new Set(); // Usar Set para garantir unicidade automaticamente

  if (subcategory === "all") {
    // Adicionar desafios iniciais de todas as categorias
    Object.values(seedChallenges).forEach((challengesArray) => {
      challengesArray.forEach(c => result.add(c));
    });

    let attempts = 0;
    const maxAttempts = count * 5;

    // Gerar desafios adicionais usando templates de todas as categorias
    const allChallengeTemplates: string[] = Object.values(challengeTemplates).flat(); // Achatar todos os templates
    while (result.size < count && attempts < maxAttempts) {
      const template = randomItem(allChallengeTemplates);
      if (template === undefined) {
        console.warn("No challenge templates available for generation.");
        break;
      }
      const challenge = fillTemplate(template);
      result.add(challenge);
      attempts++;
    }
  } else {
    // Adicionar desafios iniciais da subcategoria específica
    const categoryChallenges = seedChallenges[subcategory as keyof typeof seedChallenges] || [];
    categoryChallenges.forEach(c => result.add(c));

    let attempts = 0;
    const maxAttempts = count * 5;

    // Gerar desafios adicionais usando templates da subcategoria específica
    const categoryTemplatesForChallenge = challengeTemplates[subcategory as keyof typeof challengeTemplates] || [];
    while (result.size < count && attempts < maxAttempts) {
      const template = randomItem(categoryTemplatesForChallenge);
      if (template === undefined) {
        console.warn(`No challenge templates found for subcategory: ${subcategory}`);
        break;
      }
      const challenge = fillTemplate(template);
      result.add(challenge);
      attempts++;
    }
  }

  return shuffleArray(Array.from(result)).slice(0, count); // Converter para array, embaralhar e limitar
};