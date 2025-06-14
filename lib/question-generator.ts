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
    "Se você pudesse ter qualquer animal de estimação, qual seria?",
    "Qual é seu maior medo?",
    "Qual é a coisa mais estranha que você já comeu?",
    "Se você pudesse voltar no tempo, qual época escolheria?",
    "Qual é seu maior sonho?",
    "O que você mais valoriza em uma amizade?",
    "Qual é a sua lembrança mais engraçada?",
    "Se você pudesse aprender qualquer idioma, qual seria?",
    "Qual é a sua tradição familiar favorita?",
    "Qual é o seu maior orgulho?",
    "Se você pudesse mudar uma coisa no mundo, o que seria?",
    "Qual é a sua citação favorita?",
    "Qual é o seu maior talento?",
    "Qual é a coisa mais louca que você já fez?",
    "Se você pudesse viver em qualquer lugar do mundo, onde seria?",
    "Qual é a sua atividade favorita para fazer no tempo livre?",
    "Qual é o seu maior arrependimento?",
    "Qual é a sua forma favorita de passar o tempo com amigos?",
    "Qual é o seu maior desafio atualmente?",
    "Qual é a sua memória mais feliz?",
    "Qual é o seu maior desejo?",
    "Qual é a sua maior conquista até agora?",
    "Qual foi a melhor coisa que te aconteceu hoje?",
    "Se você pudesse comer apenas uma comida pelo resto da vida, qual seria?",
    "Qual foi a última música que você ouviu e não conseguiu tirar da cabeça?",
    "Você é uma pessoa mais diurna ou noturna?",
    "Qual é o seu lugar favorito na nossa cidade?",
    "Se você tivesse uma hora livre agora, o que faria?",
    "Qual série você está maratonando no momento?",
    "Você prefere café ou chá? Como você gosta de tomar?",
    "Qual foi a compra mais recente que você fez e adorou?",
    "Se o dinheiro não fosse um problema, qual hobby você começaria?",
    "Qual é o seu talento inútil?",
    "Qual o seu animal favorito e por quê?",
    "Você prefere praia ou campo para relaxar?",
    "Qual foi o último filme que você assistiu no cinema?",
    "Qual é o aplicativo que você mais usa no celular?",
    "Qual a sua estação do ano preferida?",
    "Se você pudesse ter qualquer carro, qual seria?",
    "Qual é a sua pizza favorita?",
    "O que você costuma tomar no café da manhã?",
    "Qual foi a viagem mais legal que você já fez?",
    "Você coleciona alguma coisa?",
    "Qual o seu super-herói preferido?",
    "Qual era a sua matéria favorita na escola?",
    "Qual o seu esporte favorito para assistir ou praticar?",
    "Se você pudesse morar em qualquer lugar do mundo, onde seria?",
    "Qual o seu livro favorito?",
    "Qual o sabor de sorvete que você sempre pede?",
    "Qual o seu maior 'guilty pleasure' (prazer culposo)?",
    "Você prefere cães ou gatos?",
    "O que você fez no último fim de semana?",
    "Qual é a primeira coisa que você faz quando acorda?",
    "Você sabe cozinhar? Qual é a sua especialidade?",
    "Qual é o seu programa de TV favorito da infância?",
    "Qual a sua cor favorita?",
    "Você prefere doce ou salgado?",
    "Qual foi o último vídeo engraçado que você viu?",
    "Qual o seu jogo de tabuleiro ou de cartas preferido?",
    "Se você pudesse aprender uma nova habilidade instantaneamente, qual seria?",
    "Qual foi o melhor show ou concerto que você já foi?",
    "Qual o seu cheiro favorito (ex: chuva, café, livro novo)?",
    "Qual o seu personagem de ficção preferido?",
    "Como você relaxa depois de um dia estressante?",
    "Qual o seu podcast favorito do momento?",
    "Qual o seu restaurante favorito?",
    "Qual foi a coisa mais interessante que você aprendeu esta semana?",
    "Você é bom em guardar segredos?",
    "Qual o seu estilo musical preferido?",
    "Qual foi o presente mais legal que você já ganhou?",
    "Qual é o seu feriado favorito?",
    "Se você encontrasse R$100 na rua, o que faria?",
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
    "Qual é a sua teoria mais louca sobre a vida?",
    "Se você pudesse trocar de vida com alguém por um dia, quem seria?",
    "Qual é a sua lembrança mais engraçada da escola?",
    "Se você pudesse criar uma nova regra para o mundo, qual seria?",
    "Qual é a coisa mais estranha que você já colecionou?",
    "Se você pudesse ser um personagem de desenho animado, quem seria? E por quê?",
    "Qual é a sua música mais vergonhosa que você adora?",
    "Se você pudesse ter qualquer trabalho no mundo, mesmo que fosse estranho, qual seria?",
    "Qual é a coisa mais aleatória que você sabe fazer?",
    "Se você pudesse viver em qualquer época da história, qual seria? E por quê?",
    "Qual é a sua teoria favorita sobre alienígenas?",
    "Se você pudesse ter um clone, o que você faria com ele?",
    "Qual é a coisa mais estranha que você já viu em público?",
    "Se você pudesse inventar um novo esporte, como seria?",
    "Se você pudesse ter um superpoder inútil, qual seria?",
    "Se os animais pudessem falar, qual seria o mais grosso e mal-educado?",
    "Qual é a coisa mais estranha que você já comeu?",
    "Se você fosse um sabor de sorvete, qual seria e por quê?",
    "Qual é a sua piada favorita que é tão ruim que chega a ser boa?",
    "Se você tivesse que substituir suas mãos por objetos que já estão em sua casa, o que escolheria?",
    "Qual é a coisa mais embaraçosa que já aconteceu com você em público?",
    "Se você fosse preso(a) sem nenhuma explicação, o que seus amigos e família achariam que você fez?",
    "Qual personagem de desenho animado você seria?",
    "Se você pudesse falar com um tipo de animal, qual escolheria?",
    "Qual seria o título da sua autobiografia?",
    "Qual é a combinação de comida mais estranha que você secretamente adora?",
    "Se você fosse um fantasma, como você assombraria as pessoas?",
    "Qual música você canta no chuveiro?",
    "Se você estivesse em um apocalipse zumbi, qual seria sua arma de escolha?",
    "Qual foi a moda mais ridícula que você já seguiu?",
    "Se você pudesse trocar de vida com qualquer pessoa por um dia, quem seria?",
    "Qual é o seu 'spirit animal' (animal espiritual)?",
    "Qual filme você sabe as falas de cor?",
    "Qual é a coisa mais boba pela qual você já chorou?",
    "Se você pudesse comer em qualquer restaurante do mundo esta noite, onde iria?",
    "Qual é a teoria da conspiração mais maluca em que você acredita um pouquinho?",
    "Se você pudesse eliminar uma tarefa doméstica para sempre, qual seria?",
    "Qual é o seu emoji mais usado?",
    "Se você pudesse ter qualquer criatura mítica como animal de estimação, qual seria?",
    "Qual foi o seu apelido mais estranho?",
    "Qual é a coisa mais idiota que você já fez por dinheiro?",
    "Se você fosse um vegetal, qual seria?",
    "Qual é a sua desculpa mais usada para evitar fazer algo?",
    "Qual palavra você sempre escreve ou pronuncia errado?",
    "Se você fizesse parte de um circo, qual seria o seu número?",
    "Qual é a coisa mais infantil que você ainda faz?",
    "Se você pudesse criar uma lei boba que todos tivessem que seguir, qual seria?",
    "Qual é o seu prazer culposo na TV ou no YouTube?",
    "Qual foi o sonho mais bizarro que você já teve?",
    "Se você pudesse ser um expert em qualquer assunto aleatório, qual seria?",
    "Qual é a sua forma favorita de batata (frita, purê, assada, etc.)?",
    "Se você fosse um personagem em um videogame, qual seria seu ataque especial?",
    "Qual foi a pior mentira que você já contou e foi pego(a)?",
    "Qual o objeto mais estranho que você tem no seu quarto?",
    "Se você pudesse jantar com dois personagens de ficção, quem escolheria?",
    "Qual a coisa mais estúpida que já te deu medo?",
    "Se você fosse um diretor de cinema, que tipo de filme faria?",
    "Qual a sua forma de dançar quando ninguém está olhando?",
    "Se você pudesse ter um jingle pessoal, como seria?",
    "Qual seria o pior super-herói para se ter em uma emergência?",
    "Qual o cheiro que te traz a melhor nostalgia?",
    "Se você pudesse adicionar uma palavra ao dicionário, qual seria e o que significaria?",
    "Qual é a coisa mais estranha que você já pesquisou no Google?",
    "Se sua vida fosse um reality show, qual seria o nome?",
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
    "Qual é a sua teoria mais estranha sobre o universo?",
    "O que você faria se soubesse que só tem mais um ano de vida?",
    "Qual é a sua maior paixão na vida?",
    "O que você gostaria de mudar no mundo?",
    "Qual é a sua maior fonte de inspiração?",
    "O que você acha que é mais importante: amor ou amizade?",
    "Como você define felicidade?",
    "Qual é a sua maior insegurança?",
    "O que você gostaria de realizar antes de morrer?",
    "O que você mais valoriza em um relacionamento?",
    "Qual é a sua maior conquista até agora?",
    "O que você acha que é necessário para alcançar a paz interior?",
    "Como você lida com a solidão?",
    "O que você gostaria de aprender mais sobre si mesmo?",
    "Qual é a sua maior esperança para o futuro?",
    "O que você acha que é o maior desafio na sua vida?",
    "O que você gostaria de deixar como legado?",
    "Como você lida com a mudança?",
    "O que você acha que é a chave para um relacionamento duradouro?",
    "Qual é a sua maior motivação na vida?",
    "O que você gostaria de dizer ao seu 'eu' mais jovem?",
    "O que você acha que é mais importante: ser feliz ou ter sucesso?",
    "O que você gostaria de fazer se não tivesse medo de falhar?",
    "Qual é a sua definição de liberdade?",
    "O que você acha que é a coisa mais importante a se aprender na vida?",
    "Como você define amor?",
    "O que você gostaria de mudar em si mesmo?",
    "Qual é a sua maior paixão?",
    "O que faz você enxergar alguem? (pode ser fisicamente ou emocionalmente)",
    "O que te chama a atenção em alguém?",
    "O que você acha que é mais importante: ser amado ou amar?",
    "O que você gostaria de fazer se soubesse que não poderia falhar?",
    "Pelo que você gostaria de ser lembrado(a) quando não estiver mais aqui?",
    "Qual foi a lição mais difícil que a vida já te ensinou?",
    "O que é felicidade para você, de verdade?",
    "Se você pudesse dar um conselho ao seu eu mais jovem, o que diria?",
    "Qual é o seu maior medo e o que você acha que está por trás dele?",
    "Qual foi o momento em que você se sentiu mais vivo(a)?",
    "O que significa 'ter sucesso' na sua opinião?",
    "Qual é a coisa sobre a natureza humana que mais te intriga ou te confunde?",
    "De que maneira você mudou como pessoa nos últimos cinco anos?",
    "Qual é a crença ou valor mais importante que guia suas decisões?",
    "O que é uma coisa que a maioria das pessoas não sabe sobre você?",
    "Qual foi o maior sacrifício que você já fez por alguém?",
    "O que o amor significa para você?",
    "Qual é o seu maior arrependimento e o que você faria diferente?",
    "Como você define 'alma gêmea'?",
    "Qual é o livro ou filme que mais impactou sua visão de mundo?",
    "Se você não tivesse medo do fracasso, o que você tentaria fazer?",
    "O que te faz sentir verdadeiramente conectado(a) com outra pessoa?",
    "Qual é a sua definição de uma vida bem vivida?",
    "O que você aprendeu sobre si mesmo(a) em seus relacionamentos passados?",
    "O que é perdão para você? Existe algo que você acha imperdoável?",
    "Qual é a sua opinião sobre destino versus livre-arbítrio?",
    "Qual a pergunta que você mais gostaria de ter a resposta?",
    "O que é 'lar' para você? É um lugar, uma pessoa ou um sentimento?",
    "Qual foi a vez em que você se sentiu mais incompreendido(a)?",
    "Qual é a coisa mais corajosa que você já fez?",
    "Como você lida com a solidão?",
    "Qual qualidade você mais admira nos outros?",
    "Qual o propósito da sua vida, ou você acredita que estamos aqui para criar um?",
    "O que te deixa vulnerável?",
    "Qual é a sua maior paixão e por que você a ama tanto?",
    "Como um momento de grande dificuldade te fortaleceu?",
    "Se você pudesse mudar uma coisa na sociedade, o que seria?",
    "Qual a sua relação com a espiritualidade ou religião?",
    "Qual a maior mentira que você já contou para si mesmo(a)?",
    "O que te inspira a ser uma pessoa melhor?",
    "Qual a importância da arte na sua vida?",
    "Como você lida com a passagem do tempo e o envelhecimento?",
    "O que te faz perder a noção do tempo?",
    "Qual a coisa mais gentil que um estranho já fez por você?",
    "Qual é o legado que seus pais ou sua família deixaram para você?",
    "Se você pudesse ter uma conversa de uma hora com qualquer pessoa (viva ou morta), quem seria?",
    "Como você equilibra a busca pela felicidade pessoal com as responsabilidades com os outros?",
    "O que a amizade verdadeira significa para você?",
    "Qual é a sua maior fonte de força interior?",
    "Qual é a memória que te define?",
    "O que a palavra 'liberdade' significa para você?",
    "Como você espera que o mundo seja diferente para a próxima geração?",
    "Qual é a coisa mais importante que você quer alcançar antes de morrer?",
    "Depois de tudo que você já viveu, qual é a verdade mais fundamental que você aprendeu?",
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
    "Qual é a sua lembrança mais romântica?",
    "O que você acha que é mais importante: comunicação ou confiança?",
    "Como você expressa seu amor sem palavras?",
    "O que você acha que é a chave para manter a chama acesa em um relacionamento?",
    "Qual é a sua visão de um relacionamento ideal?",
    "O que você mais aprecia no em um(a) parceiro(a)?",
    "Como você lida com a vulnerabilidade em um relacionamento?",
    "O que você acha que é mais importante: compatibilidade ou atração física?",
    "Qual é a sua memória mais especial com alguem?",
    "O que você acha que é o maior desafio em um relacionamento?",
    "Como você demonstra carinho no dia a dia?",
    "O que você acha que é mais importante: respeito ou admiração?",
    "Qual é a sua ideia de um gesto romântico inesperado?",
    "O que você acha que é mais importante: paixão ou amizade em um relacionamento?",
    "Como você lida com a saudade em um relacionamento à distância?",
    "Se a pessoa do seu date fosse sua namorada(o) como ela(e) seria tratada?",
    "Qual é a sua ideia de um presente romântico perfeito?",
    "Quando você percebeu que estava se apaixonando por mim?",
    "Qual é a sua memória favorita de nós dois juntos?",
    "O que eu faço que te faz sentir mais amado(a)?",
    "Se você pudesse descrever nosso relacionamento em uma palavra, qual seria?",
    "Qual foi o primeiro pensamento que você teve quando me viu pela primeira vez?",
    "Qual música sempre te lembra de mim ou de nós?",
    "Qual é a sua coisa favorita na minha personalidade?",
    "De que maneira eu mudei sua vida para melhor?",
    "Qual é o seu sonho para seu futuro a dois?",
    "Qual foi o elogio que eu te fiz ou alguem que você nunca esqueceu?",
    "Qual é a sua forma favorita de demonstrar amor?",
    "Qual é o encontro perfeito para você, não importa quão simples seja?",
    "O que te faz sentir mais conectado(a) a mim?",
    "Se tivéssemos um 'dia perfeito' juntos, como ele seria do início ao fim?",
    "Qual é a coisa mais romântica que já fizeram por você?",
    "Qual parte do meu rosto você mais gosta de olhar?",
    "Qual é a sua lembrança favorita do nosso primeiro beijo?",
    "Em que momento você se sentiu mais orgulhoso(a) de mim?",
    "Qual é a sua maior aventura que gostaria de viver com alguém?",
    "O que significa 'lar' para você e como eu faço parte disso?",
    "Qual é a sua linguagem do amor principal (palavras, atos, presentes, tempo ou toque)?",
    "Existe um pequeno gesto meu que faz seu coração derreter?",
    "Como você descreveria o sentimento de estar nos meus braços?",
    "O que você mais admira na forma como lidamos com os desafios juntos?",
    "Se amor fosse um filme, qual seria o título?",
    "Qual é a lição mais importante que relacionamento te ensinou sobre o amor?",
    "O que eu poderia fazer mais para te mostrar o quanto eu te amo?",
    "Qual é a sua foto favorita de nós dois?",
    "Qual foi o momento em que você riu mais forte comigo?",
    "Se você pudesse reviver um dia da nossa história, qual seria?",
    "O que faz você sentir saudades de mim quando não estamos juntos?",
    "Como você soube que podia confiar em mim ou alguem está se relacionado?",
    "Qual é a sua tradição ou rotina favorita que temos juntos?",
    "O que você acha que é a maior força do relacionamento?",
    "Qual é a sua memória favorita de uma viagem que fizemos juntos?",
    "Como eu te inspiro a ser uma pessoa melhor?",
    "Qual foi a melhor surpresa que já te fiz?",
    "Que cheiro ou sabor te lembra de mim?",
    "O que você ama em nossa intimidade, além do sexo?",
    "Qual é a sua coisa favorita para fazermos juntos em um dia chuvoso?",
    "O que você diria para mim se esta fosse nossa última conversa?",
    "Qual promessa você gostaria que fizéssemos um ao outro hoje?",
    "O que em nosso relacionamento te faz sentir seguro(a)?",
    "Como você imagina nossa vida quando formos velhinhos?",
    "O que te fez querer um segundo encontro comigo?",
    "O que você mais gosta no meu sorriso?",
    "Qual é a sua coisa favorita sobre acordar ao meu lado?",
    "Se você pudesse me dar qualquer presente (não material), o que seria?",
    "De todas as pessoas no mundo, por que você me escolheu?",
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
    "Você já teve uma experiência que mudou sua visão sobre sexo?",
    "Qual é a sua opinião sobre sexo casual?",
    "O que você acha mais sexy em alguém?",
    "Qual é a sua maior insegurança quando se trata de intimidade?",
    "Você já teve uma experiência que te deixou envergonhado(a)?",
    "Qual é a sua opinião sobre pornografia?",
    "O que você acha de surpresas na cama?",
    "Qual é a sua maior fantasia envolvendo outra pessoa?",
    "Você já teve uma experiência que te surpreendeu positivamente?",
    "Qual é a sua opinião sobre sexo virtual?",
    "O que você acha de experimentar coisas novas na cama?",
    "Qual é a sua maior curiosidade sobre o corpo humano?",
    "Você já teve uma experiência que te deixou mais confiante sexualmente?",
    "O que você acha de massagens sensuais?",
    "Qual é a sua opinião sobre fetiches?",
    "O que você acha de usar fantasias ou roupas íntimas especiais?",
    "Qual é a sua maior fantasia envolvendo mais de uma pessoa?",
    "Você já teve uma experiência que te deixou mais aberto(a) a novas ideias?",
    "O que você acha de explorar novas áreas do prazer?",
    "Qual é a sua opinião sobre sexo em lugares públicos?",
    "O que você acha de usar acessórios ou brinquedos durante o sexo?",
    "Qual é a sua maior fantasia envolvendo um cenário específico?",
    "Você já teve uma experiência que te fez repensar suas preferências?",
    "O que você acha de explorar os limites do prazer?",
    "Qual é a sua opinião sobre sexo tântrico ou espiritual?",
    "O que você acha de criar um ambiente especial para momentos íntimos?",
    "Qual é a sua maior fantasia envolvendo um papel específico?",
    "Você já teve uma experiência que te fez querer explorar mais?",
    "Qual é a sua fantasia mais secreta?",
    "Qual parte do meu corpo você mais gosta de olhar?",
    "O que te deixa mais excitado(a) só de pensar?",
    "Qual foi o sonho mais erótico que você já teve comigo?",
    "Se você pudesse me amarrar, o que faria?",
    "Qual é o lugar mais ousado onde você já pensou em fazer sexo?",
    "Você prefere dominar ou ser dominado(a)?",
    "Qual é a sua opinião sobre brinquedos sexuais?",
    "Que tipo de filme ou história erótica te excita mais?",
    "Qual foi a melhor experiência de sexo oral que você já teve?",
    "Existe algo que você sempre quis tentar na cama, mas nunca pediu?",
    "O que você acha de 'dirty talk' (falar sacanagem) durante o sexo?",
    "Qual é a sensação que você mais gosta durante o sexo?",
    "Você gosta mais de sexo rápido e intenso ou lento e sensual?",
    "Onde você mais gosta de ser beijado(a), além da boca?",
    "Qual é o seu maior 'fetiche' ou 'tesão secreto'?",
    "Qual peça de roupa minha você mais gosta de me ver tirar?",
    "Você já se masturbou pensando em mim? O que você imaginou?",
    "Se pudéssemos fazer sexo em qualquer lugar do mundo, onde seria?",
    "Qual é a sua posição sexual favorita e por quê?",
    "Você se excita mais com estímulos visuais, auditivos ou táteis?",
    "O que eu faço que te deixa louco(a) de desejo?",
    "Você já experimentou ou tem curiosidade sobre sexo a três?",
    "Qual é o som mais excitante que você pode ouvir de um(a) parceiro(a)?",
    "Como seria a sua noite erótica perfeita?",
    "Você prefere luzes acesas, apagadas ou à meia-luz?",
    "Qual a sua opinião sobre experimentar BDSM (Bondage, Disciplina, Dominação, Submissão, Sadismo e Masoquismo) de forma leve?",
    "O que você acha de assistir pornografia juntos?",
    "Qual é a memória mais quente que você tem de nós dois?",
    "Se você pudesse me dar uma ordem sexual agora, qual seria?",
    "Qual é a intensidade ideal de uma mordida ou um arranhão para você?",
    "Você gosta de massagens sensuais antes ou depois do sexo?",
    "Qual a sua opinião sobre 'roleplaying' (interpretação de papéis)? Que personagem você seria?",
    "Existe uma parte do seu próprio corpo que te excita quando é tocada?",
    "O que é mais excitante: a antecipação ou o ato em si?",
    "Você já gozou apenas com estímulos nos mamilos ou em outra parte do corpo?",
    "Qual o seu lubrificante favorito? Com sabor, efeito de calor ou normal?",
    "Você gosta quando eu tomo a iniciativa?",
    "Qual seria a trilha sonora ideal para uma noite de sexo?",
    "Se você pudesse descrever nosso sexo em três palavras, quais seriam?",
    "Qual o nível de importância do orgasmo para você em uma relação sexual?",
    "Você prefere sexo pela manhã, à tarde ou à noite?",
    "O que você pensa sobre sexo anal (dar ou receber)?",
    "Qual a sua opinião sobre o uso de vendas ou algemas?",
    "Qual o cheiro que mais te excita (perfume, pele, etc.)?",
    "Qual a melhor forma de te provocar durante o dia para uma noite quente?",
    "Você já teve um orgasmo múltiplo? Ou gostaria de tentar?",
    "Quão importante é a conexão emocional para você durante o sexo?",
    "Existe algum tabu sexual que você gostaria de quebrar comigo?",
    "Depois do sexo, você prefere conversar, dormir ou tomar um banho juntos?",
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
    "Desafio: Faça uma ligação para um amigo e diga algo engraçado.",
    "Desafio: Diga 'bom dia' para um estranho.",
    "Desafio: Experimente um novo sabor de café ou chá.",
    "Desafio: Faça um caminho diferente para o trabalho ou para casa.",
    "Desafio: Elogie sinceramente a primeira pessoa com quem falar hoje.",
    "Desafio: Ouça uma playlist de um gênero musical que você não conhece.",
    "Desafio: Arrume uma gaveta bagunçada.",
    "Desafio: Beba 2 litros de água hoje.",
    "Desafio: Leia o primeiro capítulo de um livro.",
    "Desafio: Assista a um documentário sobre um tema aleatório.",
    "Desafio: Escreva três coisas pelas quais você é grato(a).",
    "Desafio: Passe 15 minutos ao sol.",
    "Desafio: Visite uma loja ou um café local que nunca tenha visitado.",
    "Desafio: Faça um alongamento de 10 minutos.",
    "Desafio: Aprenda a dizer 'olá' e 'obrigado' em um novo idioma.",
    "Desafio: Deixe um comentário positivo em um post ou vídeo online.",
    "Desafio: Coma algo verde em cada refeição hoje.",
    "Desafio: Sorria para si mesmo(a) no espelho por 10 segundos.",
    "Desafio: Mande uma mensagem para um amigo com quem não fala há algum tempo.",
    "Desafio: Tente identificar 5 tipos diferentes de nuvens.",
    "Desafio: Suba um lance de escadas em vez de usar o elevador.",
    "Desafio: Coloque seu celular no modo silencioso por uma hora.",
    "Desafio: Faça uma pequena doação para uma causa em que acredita.",
    "Desafio: Desenhe ou rabisque algo sem se preocupar com o resultado.",
    "Desafio: Tente uma receita nova e simples.",
    "Desafio: Observe as pessoas ao seu redor e imagine suas histórias.",
    "Desafio: Reorganize os aplicativos na tela inicial do seu celular.",
    "Desafio: Escreva uma ideia de negócio, por mais boba que pareça.",
    "Desafio: Sente-se em um banco de praça por 10 minutos sem mexer no celular.",
    "Desafio: Faça uma lista de 5 coisas que você gostaria de fazer antes de morrer.",
    "Desafio: Envie uma foto de algo bonito que você vê hoje para alguem.",
    "Desafio: Compartilhe com alguém um fato interessante.",
    "Desafio: Cumprimente o motorista do ônibus ou o porteiro pelo nome.",
    "Desafio: Faça uma pausa de 5 minutos para respirar profundamente.",
    "Desafio: Tente escrever com a mão não dominante por 5 minutos.",
    "Desafio: Experimente um filtro diferente em sua próxima foto.",
    "Desafio: Deixe um bilhete gentil para um membro da família ou colega de casa.",
    "Desafio: Resolva um quebra-cabeça (Sudoku, palavras-cruzadas).",
    "Desafio: Ande descalço(a) na grama ou na areia.",
    "Desafio: Faça uma lista de 5 coisas que você gostaria de aprender.",
    "Desafio: Envie uma mensagem de voz para um amigo contando uma piada.",
    "Desafio: Dê um 'match' em alguém em um app de relacionamento e comece a conversa.",
    "Desafio: Assista ao nascer ou ao pôr do sol.",
    "Desafio: Organize sua área de trabalho digital.",
    "Desafio: Faça uma lista de filmes que deseja assistir.",
    "Desafio: Procure o significado do seu nome.",
    "Desafio: Tente comer com a mão não dominante.",
    "Desafio: Deixe uma gorjeta um pouco maior do que o habitual.",
    "Desafio: Inicie uma conversa com o caixa da loja ou o atendente.",
    "Desafio: Tire uma foto de algo que achou bonito hoje.",
    "Desafio: Envie uma mensagem de agradecimento a alguém que te ajudou recentemente.",
    "Desafio: Troque o toque do seu celular.",
    "Desafio: Planeje seu próximo fim de semana, mesmo que seja algo simples.",
  ],
  fun: [
    "Desafio: Dance como se ninguém estivesse olhando por 30 segundos.",
    "Desafio: Faça sua melhor cara de 'blue steel' como no Zoolander.",
    "Desafio: Invente uma piada na hora.",
    "Desafio: Cante o refrão da sua música favorita.",
    "Desafio: Faça uma mímica e deixe os outros adivinharem.",
    "Desafio: Crie um novo movimento de dança e ensine aos outros.",
    "Desafio: Fale com um sotaque diferente por 1 minuto.",
    "Desafio: Faça uma lista de 5 coisas que você faria se fosse invisível por um dia.",
    "Desafio: Envie uma mensagem engraçada para um amigo sem contexto.",
    "Desafio: Crie uma história de terror curta e conte para o grupo.",
    "Desafio: Faça uma careta engraçada e mantenha por 10 segundos.",
    "Desafio: Tente equilibrar um objeto na cabeça por 30 segundos.",
    "Desafio: Faça um desenho de algo com os olhos vendados.",
    "Desafio: Crie um novo sabor de sorvete e descreva-o.",
    "Desafio: Façam uma guerra de travesseiros ou de papel amassado.",
    "Desafio: Tentem recriar uma foto da infância de um de vocês. (usa a criatividade)",
    "Desafio: Criem um aperto de mão secreto e complicado.",
    "Desafio: Falem usando apenas sotaques engraçados por 15 minutos.",
    "Desafio: Construam um forte de cobertores e lençóis na sala.",
    "Desafio: Façam uma competição para ver quem consegue empilhar mais coisas.",
    "Desafio: Preparem uma refeição usando apenas ingredientes que comecem com a mesma letra.",
    "Desafio: Dublem uma cena de um filme famoso de forma cômica.",
    "Desafio: Façam uma sessão de fotos temáticas em casa com roupas improvisadas.",
    "Desafio: Joguem 'o chão é lava'.",
    "Desafio: Inventem uma dança maluca para a sua música favorita.",
    "Desafio: Tentem desenhar um ao outro sem olhar para o papel.",
    "Desafio: Façam uma caça ao tesouro em casa com pistas engraçadas.",
    "Desafio: Componham uma música boba sobre o seu dia.",
    "Desafio: Desafiem-se em um jogo de videogame da sua infância.",
    "Desafio: Tentem fazer um truque de mágica que viram na internet.",
    "Desafio: Finjam ser turistas na sua própria cidade por um dia.",
    "Desafio: Façam uma competição de caretas e tirem fotos.",
    "Desafio: Vistam-se com as roupas um do outro.",
    "Desafio: Tenham uma conversa usando apenas emojis.",
    "Desafio: Joguem mímica ou 'Imagem & Ação'.",
    "Desafio: Tentem equilibrar uma colher no nariz pelo maior tempo possível.",
    "Desafio: Façam um desfile de moda com as roupas mais bizarras que encontrarem no armário.",
    "Desafio: Finjam ser super-heróis e criem seus poderes e nomes.",
    "Desafio: Grave um vídeo de 'lip sync' (sincronia labial) de uma música pop.",
    "Desafio: Façam uma corrida de saco (ou com fronhas de travesseiro).",
    "Desafio: Preparem 'junk food' caseira, como pizza ou hambúrguer, do zero.",
    "Desafio: Joguem esconde-esconde dentro de casa.",
    "Desafio: Contem piadas ruins um para o outro até alguém não aguentar e rir.",
    "Desafio: Façam uma chamada de vídeo com um amigo e finjam estar em uma situação absurda.",
    "Desafio: Criem um 'idioma secreto' e tentem conversar com ele.",
    "Desafio: Façam uma 'Olimpíada de Casa' com modalidades como arremesso de meia no cesto.",
    "Desafio: Tentem adivinhar o sabor de alimentos de olhos vendados.",
    "Desafio: Façam penteados malucos um no outro.",
    "Desafio: Finjam que são críticos de comida e descrevam o jantar de forma exagerada.",
    "Desafio: Montem um quebra-cabeça juntos.",
    "Desafio: Façam uma maratona de desenhos animados antigos.",
    "Desafio: Escrevam uma história juntos, cada um escrevendo uma frase de cada vez.",
    "Desafio: Joguem 'duas verdades e uma mentira'.",
    "Desafio: Tentem imitar o jeito de andar de pessoas famosas ou personagens.",
    "Desafio: Façam uma guerra de bexigas d'água no quintal ou no banheiro.",
    "Desafio: Criem um programa de culinária fake enquanto preparam o almoço.",
    "Desafio: Façam uma competição de quem consegue ficar sério por mais tempo.",
    "Desafio: Tentem aprender um passo de dança do TikTok.",
    "Desafio: Joguem pedra, papel e tesoura.",
    "Desafio: Façam um piquenique noturno com lanternas.",
    "Desafio: Criem um clube secreto com apenas vocês como membros.",
    "Desafio: Leiam em voz alta uma crítica ruim de um filme que vocês amam.",
    "Desafio: Façam um campeonato de aviãozinho de papel.",
    "Desafio: Finjam ser seus animais de estimação por 10 minutos.",
  ],
  deep: [
    "Desafio: Compartilhe uma verdade sobre você que ninguém aqui sabe.",
    "Desafio: Conte sobre um momento que mudou sua vida.",
    "Desafio: Revele seu maior medo e por que ele te assusta.",
    "Desafio: Compartilhe um objetivo de vida que você ainda não realizou.",
    "Desafio: Diga uma coisa que você gostaria de mudar em si mesmo.",
    "Desafio: Conte sobre uma vez que você superou um desafio difícil.",
    "Desafio: Compartilhe uma lição de vida que você aprendeu recentemente.",
    "Desafio: Descreva seu maior arrependimento e o que aprendeu com ele.",
    "Desafio: Fale sobre uma decisão difícil que você teve que tomar.",
    "Desafio: Compartilhe seu maior medo e por que você acha que o tem.",
    "Desafio: Fale sobre um momento que mudou completamente sua perspectiva de vida.",
    "Desafio: Descreva onde você se vê daqui a 5 anos e quais passos dará para chegar lá.",
    "Desafio: Compartilhe uma memória de infância que te moldou como pessoa.",
    "Desafio: Fale sobre uma insegurança sua e como seu parceiro(a) pode te ajudar a lidar com ela.",
    "Desafio: Discutam o que 'sucesso' significa para cada um de vocês, além de dinheiro.",
    "Desafio: Escreva uma carta para o seu 'eu' de 10 anos atrás.",
    "Desafio: Compartilhe algo que você nunca contou para mais ninguém.",
    "Desafio: Fale sobre a pessoa que mais te inspirou na vida.",
    "Desafio: Descreva um sonho ou pesadelo recorrente que você tem.",
    "Desafio: Responda: 'O que você mais admira em mim e o que mais admira em você mesmo(a)?'",
    "Desafio: Fiquem em silêncio juntos por 10 minutos, apenas sentindo a presença um do outro.",
    "Desafio: Fale sobre um erro do passado do qual você se arrepende e o que aprendeu com ele.",
    "Desafio: Discutam suas crenças espirituais ou filosóficas, sem julgamento.",
    "Desafio: Planejem um ato de bondade para fazer por um estranho juntos.",
    "Desafio: Responda: 'Se você pudesse ter qualquer resposta para uma pergunta, qual seria a pergunta?'",
    "Desafio: Leia um poema ou um trecho de livro que te emocionou e explique o porquê.",
    "Desafio: Fale sobre como seus pais influenciaram sua forma de amar.",
    "Desafio: Compartilhe uma coisa que você gostaria de mudar em si mesmo(a).",
    "Desafio: Discutam qual legado vocês gostariam de deixar no mundo.",
    "Desafio: Crie um 'mapa dos sonhos' com imagens e metas para o futuro de vocês.",
    "Desafio: Fale sobre a primeira vez que você sentiu o coração partido.",
    "Desafio: Descreva um momento em que você se sentiu verdadeiramente vivo(a).",
    "Desafio: Compartilhe uma qualidade sua que você demorou a reconhecer e a amar.",
    "Desafio: Respondam juntos: 'Qual é a nossa maior força como casal?'",
    "Desafio: Fale sobre um desafio que vocês superaram juntos e como isso os fortaleceu.",
    "Desafio: Meditem juntos por 5 minutos.",
    "Desafio: Pergunte ao seu parceiro(a): 'Como posso ser um(a) parceiro(a) melhor para você?'",
    "Desafio: Discutam o que é 'amor incondicional' para vocês.",
    "Desafio: Compartilhe um momento em que você se sentiu extremamente vulnerável.",
    "Desafio: Fale sobre como você lida com a tristeza ou o estresse.",
    "Desafio: Escolha uma palavra que defina sua intenção para o próximo mês e explique o porquê.",
    "Desafio: Discutam seus 'limites' e o que é inegociável em um relacionamento para vocês.",
    "Desafio: Revele um sonho de infância que você abandonou.",
    "Desafio: Faça uma lista de 5 coisas que você ama na vida que não são coisas.",
    "Desafio: Pergunte: 'Qual é a memória mais feliz que você tem de nós dois?'",
    "Desafio: Fale sobre uma vez em que você se sentiu orgulhoso(a) do seu parceiro(a).",
    "Desafio: Discutam como vocês podem apoiar melhor os sonhos individuais um do outro.",
    "Desafio: Responda: 'Se sua casa estivesse pegando fogo, o que você salvaria depois das pessoas e animais?'",
    "Desafio: Compartilhe uma lição de vida que foi difícil de aprender.",
    "Desafio: Definam juntos 3 valores fundamentais para o relacionamento de vocês.",
    "Desafio: Fale sobre como você se sentiu na primeira vez que disse 'Eu te amo'.",
    "Desafio: Discutam o que a 'felicidade' realmente significa para cada um.",
    "Desafio: Escreva uma lista de coisas que você perdoa em si mesmo(a).",
    "Desafio: Compartilhe algo que você admira na família do seu parceiro(a).",
    "Desafio: Fale sobre o que te faz sentir seguro(a) e amado(a) no relacionamento.",
    "Desafio: Responda: 'Se você pudesse jantar com três pessoas (vivas ou mortas), quem seriam?'",
    "Desafio: Compartilhe como você gostaria de ser lembrado(a).",
    "Desafio: Fale sobre uma música que traduz seus sentimentos mais profundos.",
    "Desafio: Agradeça ao seu parceiro(a) por algo específico que ele(a) trouxe para a sua vida.",
  ],
  romantic: [
    "Desafio: Dê um elogio sincero para cada pessoa do grupo.",
    "Desafio: Conte sobre seu primeiro beijo.",
    "Desafio: Demonstre como você flerta com alguém.",
    "Desafio: Descreva seu encontro perfeito em detalhes.",
    "Desafio: Faça uma declaração romântica para um objeto na sala.",
    "Desafio: Escreva uma mensagem romântica curta para alguém especial.",
    "Desafio: Faça uma serenata improvisada para o grupo.",
    "Desafio: Escreva uma carta de amor à mão e a esconda para que seu amor a encontre.",
    "Desafio: Recriem o primeiro encontro de vocês.",
    "Desafio: Prepare um café da manhã na cama surpresa.",
    "Desafio: Crie uma playlist com músicas que definem o relacionamento de vocês.",
    "Desafio: Faça uma massagem relaxante no seu parceiro(a) sem esperar nada em troca.",
    "Desafio: Diga 'Eu te amo' em um momento completamente inesperado do dia.",
    "Desafio: Planeje um piquenique, mesmo que seja na sala de casa.",
    "Desafio: Cozinhem juntos um prato que nunca fizeram antes.",
    "Desafio: Dancem uma música lenta na sala de estar.",
    "Desafio: Encha o espelho do banheiro com bilhetes de amor usando post-its.",
    "Desafio: Compre a sobremesa ou o doce favorito do seu parceiro(a) sem motivo.",
    "Desafio: Dê um beijo de 'boa noite' na testa.",
    "Desafio: Passe um dia inteiro sem reclamar de nada, apenas elogiando um ao outro.",
    "Desafio: Enquadre uma foto favorita de vocês.",
    "Desafio: Assista ao filme romântico favorito do seu parceiro(a) com ele(a).",
    "Desafio: Deixe um bilhete apaixonado na lancheira ou na carteira dele(a).",
    "Desafio: Olhem-se nos olhos por 2 minutos sem dizer nada.",
    "Desafio: Faça uma lista de '10 coisas que eu amo em você' e leia em voz alta.",
    "Desafio: Tome um banho de banheira ou de chuveiro juntos.",
    "Desafio: Ande de mãos dadas em público.",
    "Desafio: Dê um beijo apaixonado de pelo menos 20 segundos.",
    "Desafio: Crie um pote de 'memórias felizes' e escreva a primeira memória.",
    "Desafio: Faça um elogio sincero sobre a personalidade do seu parceiro(a).",
    "Desafio: Desliguem os celulares por uma noite inteira e apenas conversem.",
    "Desafio: Compre uma flor (ou um ramo) sem uma data especial.",
    "Desafio: Aprenda a fazer a bebida favorita dele(a) e sirva.",
    "Desafio: Escreva 'Eu te amo' com vapor no espelho do banheiro após o banho.",
    "Desafio: Façam planos para uma viagem romântica, mesmo que seja hipotética.",
    "Desafio: Dê um abraço apertado que dure mais de 10 segundos.",
    "Desafio: Deixe que seu parceiro(a) escolha o filme ou a série da noite.",
    "Desafio: Sussurre um segredo carinhoso no ouvido dele(a).",
    "Desafio: Ajude com uma tarefa que seu parceiro(a) odeia fazer.",
    "Desafio: Façam uma cápsula do tempo do relacionamento de vocês.",
    "Desafio: Relembrem a história de como se conheceram, cada um contando sua versão.",
    "Desafio: Visitem o lugar onde deram o primeiro beijo.",
    "Desafio: Envie uma mensagem durante o dia dizendo o quanto está com saudade.",
    "Desafio: Use uma peça de roupa ou um perfume que você sabe que ele(a) adora.",
    "Desafio: Crie um apelido carinhoso novo e exclusivo para ele(a).",
    "Desafio: Deixe-o(a) dormir um pouco mais enquanto você prepara tudo pela manhã.",
    "Desafio: Façam um brinde ao relacionamento de vocês durante o jantar.",
    "Desafio: Segure o rosto dele(a) com as duas mãos enquanto o beija.",
    "Desafio: Agradeça por algo pequeno que seu parceiro(a) fez por você recentemente.",
    "Desafio: Façam uma fogueira (ou acendam velas) e conversem sob a luz.",
    "Desafio: Escreva um poema, mesmo que seja simples, para ele(a).",
    "Desafio: Faça uma lista de sonhos que vocês querem realizar juntos.",
    "Desafio: Deixe um rastro de pétalas de rosa até o quarto.",
    "Desafio: Defina um 'dia oficial do casal' uma vez por mês.",
    "Desafio: Beije cada um dos dedos da mão do seu parceiro(a).",
    "Desafio: Compartilhe um fone de ouvido para ouvir uma música juntos.",
    "Desafio: Termine o dia dizendo o melhor momento que passaram juntos.",
  ],
  erotic: [
    "Desafio: Faça sua expressão mais sedutora.",
    "Desafio: Sussurre algo provocante no ouvido de alguém (com consentimento).",
    "Desafio: Mostre seu movimento de dança mais sensual.",
    "Desafio: Conte sobre uma fantasia que você tem.",
    "Desafio: Faça uma massagem de 30 segundos nos ombros de alguém (com consentimento).",
    "Desafio: Tire uma peça de roupa usando apenas os dentes.",
    "Desafio: Descreva em detalhes o que você gostaria de fazer com seu/sua parceiro(a) esta noite.",
    "Desafio: Beije o pescoço de seu/sua parceiro(a) lentamente.",
    "Desafio: Envie uma mensagem de texto picante para seu/sua parceiro(a) enquanto estiverem no mesmo cômodo.",
    "Desafio: Vende os olhos de seu/sua parceiro(a) e o alimente com algo doce (como morango ou chocolate).",
    "Desafio: Deixe uma marca de mordida suave em um lugar inesperado.",
    "Desafio: Use um cubo de gelo para percorrer o corpo de seu/sua parceiro(a).",
    "Desafio: Escolha uma palavra de segurança para a noite.",
    "Desafio: Pratique um beijo de 1 minuto sem usar as mãos.",
    "Desafio: Dance uma música lenta colado(a) no seu/sua parceiro(a).",
    "Desafio: Escreva uma palavra erótica na pele de seu/sua parceiro(a) com a ponta da língua.",
    "Desafio: Faça um strip-tease lento de uma peça de roupa.",
    "Desafio: Experimente uma nova posição sexual que nunca tentaram antes.",
    "Desafio: Deixe seu/sua parceiro(a) te amarrar com uma gravata ou lenço.",
    "Desafio: Faça sexo oral em seu/sua parceiro(a) até o orgasmo.",
    "Desafio: grave um áudio gemendo e envie para o seu parceiro(a).",
    "Desafio: Assista a um filme erótico juntos e narre suas intenções.",
    "Desafio: Dê um tapa firme (mas consensual) no bumbum de seu/sua parceiro(a).",
    "Desafio: Fique nu(a) e pose de forma sedutora para seu/sua parceiro(a).",
    "Desafio: Brinque com os mamilos de seu/sua parceiro(a) usando a boca.",
    "Desafio: Deixe seu/sua parceiro(a) no controle total por 15 minutos.",
    "Desafio: Tente alcançar o orgasmo ao mesmo tempo.",
    "Desafio: Use uma venda e tente adivinhar que parte do corpo seu/sua parceiro(a) está beijando.",
    "Desafio: Faça sexo em um lugar inusitado da casa.",
    "Desafio: Incorpore um brinquedo sexual na brincadeira.",
    "Desafio: Diga a seu/sua parceiro(a) exatamente como você quer ser tocado(a).",
    "Desafio: Experimente o 'teasing and denial' (provocação e negação), chegando perto do orgasmo e parando.",
    "Desafio: Faça sexo em frente a um espelho.",
    "Desafio: Use chantilly ou chocolate líquido no corpo de seu/sua parceiro(a) e lamba.",
    "Desafio: Troque de papel: quem costuma ser dominante se torna submisso(a) e vice-versa.",
    "Desafio: Proíba o uso das mãos durante o sexo por 5 minutos.",
    "Desafio: Use linguagem suja ('dirty talk') para descrever o que está fazendo e sentindo.",
    "Desafio: Faça uma 'rapidinha' cheia de adrenalina.",
    "Desafio: Experimente o sexo anal (com muito lubrificante e comunicação).",
    "Desafio: Grave um vídeo curto e sensual para seu/sua parceiro(a).",
    "Desafio: Deixe seu/sua parceiro(a) te fotografar nu(a) em poses artísticas/eróticas.",
    "Desafio: Faça uma massagem tântrica um no outro.",
    "Desafio: Use uma pena ou um tecido de seda para provocar sensações no corpo de seu/sua parceiro(a).",
    "Desafio: Tente conter os gemidos o máximo que puder.",
    "Desafio: Introduza o 'pegging' na relação (se aplicável e consensual).",
    "Desafio: Realize uma fantasia específica de seu/sua parceiro(a).",
    "Desafio: Pratique o 'edging': controle múltiplos orgasmos antes do clímax final.",
    "Desafio: Faça sexo com as luzes totalmente acesas, sem desviar o olhar.",
    "Desafio: Brinquem de 'verdade ou consequência' com perguntas e desafios exclusivamente eróticos.",
    "Desafio: Deixe seu/sua parceiro(a) te dar banho, explorando cada parte do seu corpo.",
    "Desafio: Use um brinquedo sexual enquanto fazem sexo oral.",
    "Desafio: Façam um jogo de sedução onde cada um tenta seduzir o outro sem tocar.",
    "Desafio: Façam uma lista de fantasias sexuais que vocês gostariam de realizar.",
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
  pessoa: [
    "celebridade",
    "figura histórica",
    "líder mundial",
    "cientista",
    "artista",
    "filósofo",
    "atleta",
  ],
  atividade: [
    "esporte radical",
    "hobby",
    "viagem",
    "experiência cultural",
    "atividade artística",
    "desafio físico",
  ],
  lugar: [
    "país",
    "cidade",
    "tipo de casa",
    "ambiente",
    "paisagem",
    "clima",
    "continente",
  ],
  objeto: [
    "dispositivo tecnológico",
    "item do dia a dia",
    "luxo",
    "ferramenta",
    "acessório",
    "item vintage",
  ],
  habilidade: [
    "idioma",
    "instrumento musical",
    "esporte",
    "arte",
    "habilidade técnica",
    "talento",
    "ofício",
  ],
  // Renomeado para evitar conflito com 'evento_vida'
  evento_casual: [
    "feriado",
    "celebração",
    "festival",
    "temporada",
    "ocasião especial",
    "tradição",
  ],
  assunto: [
    "sua rotina",
    "sua casa",
    "seu trabalho",
    "sua cidade",
    "o mundo",
    "a tecnologia",
  ],
  comida: [
    "sobremesa",
    "prato principal",
    "lanche",
    "comida de rua",
    "culinária",
    "refeição caseira",
  ],
  // Renomeado
  experiencia_pessoal: [
    "viagem",
    "aventura",
    "conquista",
    "surpresa",
    "presente",
    "momento",
  ],
  // Renomeado
  período_historico: [
    "década",
    "era",
    "século",
    "momento histórico",
    "ano",
    "época",
  ],
  // Renomeado
  animal_imaginario: [
    "animal selvagem",
    "animal doméstico",
    "criatura mitológica",
    "inseto",
    "ave",
    "mamífero",
  ],
  // Renomeado
  situação_engracada: [
    "situação embaraçosa",
    "coincidência",
    "mal-entendido",
    "surpresa",
    "acidente engraçado",
  ],
  // Renomeado
  objeto_magico: [
    "anel de invisibilidade",
    "varinha mágica",
    "lâmpada do gênio",
    "capa de levitação",
    "amuleto da sorte",
  ],
  // Renomeado
  superpoder_inusitado: [
    "ler mentes",
    "teletransporte",
    "controlar o tempo",
    "falar com animais",
    "curar doenças",
    "voar",
  ],
  // Renomeado
  genero_filme: [
    "comédia",
    "drama",
    "ação",
    "romance",
    "ficção científica",
    "fantasia",
    "terror",
  ],
  // Renomeado
  personagem_ficticio: [
    "personagem de filme",
    "celebridade",
    "figura histórica",
    "personagem de livro",
  ],
  // Renomeado
  item_inovador: [
    "gadget",
    "aplicativo",
    "serviço",
    "produto",
    "invenção",
    "dispositivo",
  ],
  // Renomeado
  habilidade_estranha: [
    "dobrar a língua",
    "fazer malabarismo",
    "andar de monociclo",
    "imitar sons de animais",
    "resolver cubo mágico rapidamente",
  ],
  // Renomeado
  teoria_bizarra: [
    "teoria da conspiração",
    "ideia filosófica",
    "conceito científico",
    "crença popular",
  ],
  // Renomeado para evitar conflito com 'evento_casual'
  evento_vida: [
    "desafio",
    "sucesso",
    "fracasso",
    "relacionamento",
    "viagem",
    "decisão importante",
  ],
  // Renomeado
  decisão_dificil: [
    "escolha de carreira",
    "decisão financeira",
    "escolha de relacionamento",
    "mudança de vida",
  ],
  // Renomeado
  percepcao_sobre_voce: [
    "não entendem",
    "apreciam",
    "criticam",
    "admiram",
    "subestimam",
    "superestimam",
  ],
  // Renomeado
  conceito_vida: [
    "felicidade",
    "sucesso",
    "amor",
    "liberdade",
    "segurança",
    "realização",
  ],
  // Renomeado
  experiencia_transformadora: [
    "viagem",
    "aventura",
    "conquista",
    "perda",
    "encontro",
    "desafio",
  ],
  // Renomeado
  opcao_profunda1: [
    "dinheiro",
    "tempo",
    "saúde",
    "conhecimento",
    "conexões",
    "experiências",
  ],
  // Renomeado
  opcao_profunda2: [
    "fama",
    "segurança",
    "aventura",
    "estabilidade",
    "paixão",
    "tranquilidade",
  ],
  // Renomeado
  emocao_desafiadora: [
    "medo",
    "raiva",
    "tristeza",
    "ansiedade",
    "estresse",
    "incerteza",
    "decepção",
  ],
  // Renomeado
  valor_fundamental: [
    "honestidade",
    "lealdade",
    "integridade",
    "respeito",
    "compaixão",
    "coragem",
  ],
  // Renomeado
  acao_recomendada: [
    "refletir",
    "meditar",
    "se expressar",
    "ouvir os outros",
    "ser mais gentil",
    "perdoar",
  ],
  // Renomeado
  futuro_pessoal: [
    "5 anos",
    "10 anos",
    "20 anos",
    "sua velhice",
    "o próximo capítulo da sua vida",
  ],
  // Renomeado
  relacionamento_tipo: [
    "um relacionamento longo",
    "um primeiro encontro",
    "uma amizade romântica",
    "um casamento",
  ],
  // Renomeado
  sentimento_amoroso: [
    "amor",
    "carinho",
    "admiração",
    "gratidão",
    "desejo",
    "compromisso",
  ],
  // Renomeado
  gesto_romantico_favorito: [
    "presente",
    "surpresa",
    "declaração",
    "ritual",
    "tradição",
    "demonstração pública",
  ],
  // Renomeado
  conceito_relacionamento: [
    "monogamia",
    "compromisso",
    "espaço pessoal",
    "comunicação aberta",
    "romance",
  ],
  // Renomeado
  acao_amorosa: [
    "está apaixonado por",
    "está interessado em",
    "se importa com",
  ],
  // Renomeado
  assunto_relacionamento: [
    "ciúmes",
    "expectativas",
    "planos futuros",
    "finanças",
    "família",
    "comunicação",
  ],
  // Renomeado
  tipo_relacionamento_saudavel: [
    "saudável",
    "duradouro",
    "apaixonado",
    "equilibrado",
    "feliz",
    "significativo",
  ],
  // Renomeado
  problema_relacionamento: [
    "discordâncias",
    "diferenças de opinião",
    "expectativas diferentes",
    "pressão externa",
  ],
  // Renomeado
  qualidade_parceiro1: [
    "senso de humor",
    "inteligência",
    "aparência",
    "ambição",
    "gentileza",
    "criatividade",
  ],
  // Renomeado
  qualidade_parceiro2: [
    "estabilidade",
    "espontaneidade",
    "paixão",
    "compatibilidade",
    "comunicação",
    "valores compartilhados",
  ],
  // Renomeado
  experiencia_romantica_sonho: [
    "viagem romântica",
    "jantar à luz de velas",
    "escapada de fim de semana",
    "pedido de casamento surpresa",
  ],
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
  preferencia_erotica1: [
    "preliminares longas",
    "encontros rápidos",
    "luzes acesas",
    "ambientes românticos",
    "manhãs",
    "noites",
  ],
  // Renomeado
  preferencia_erotica2: [
    "ir direto ao ponto",
    "sessões longas",
    "escuridão total",
    "ambientes selvagens",
    "tardes",
    "madrugadas",
  ],
  // Renomeado
  preferencia_prazer1: [
    "ser dominante",
    "receber oral",
    "posições clássicas",
    "ambientes silenciosos",
    "sexo espontâneo",
  ],
  // Renomeado
  preferencia_prazer2: [
    "ser submisso(a)",
    "fazer oral",
    "posições mais ousadas",
    "gemidos altos",
    "sexo planejado",
  ],
  // Renomeado
  adjetivo_atrevido: [
    "ousada",
    "excitante",
    "arriscada",
    "intensa",
    "selvagem",
    "sensual",
    "provocante",
  ],
  // Renomeado
  fantasia_secreta: [
    "fantasia sexual",
    "experiência a três",
    "roleplay",
    "cenário",
    "fetiche",
  ],
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
  parte_corpo_sensual: [
    "parte do corpo",
    "característica física",
    "atributo físico",
    "traço físico",
  ],
  // Renomeado
  situacao_intima: [
    "sexo casual",
    "amizade colorida",
    "sexo em grupo",
    "swing",
    "voyeurismo",
    "exibicionismo",
  ],

  // Challenge-specific fill-ins
  tema_casual: [
    "sua infância",
    "sua primeira viagem",
    "seu trabalho",
    "sua família",
    "seu hobby favorito",
  ],
  palavra_proibida: ["eu", "mas", "tipo", "como", "então", "muito", "legal"],
  // Renomeado
  celebridade_imitacao: [
    "um político famoso",
    "um cantor pop",
    "um ator de Hollywood",
    "um apresentador de TV",
  ],
  // Renomeado
  tipo_foto_celular: [
    "selfie",
    "foto de comida",
    "foto de paisagem",
    "foto com amigos",
    "foto de animal de estimação",
  ],
  // Renomeado
  assunto_aleatorio_casual: [
    "seu filme favorito",
    "sua comida preferida",
    "seu último final de semana",
    "suas férias ideais",
  ],
  // Renomeado
  contato_ligacao: [
    "um amigo próximo",
    "um familiar",
    "a última pessoa que você conversou",
  ],
  // Renomeado
  mensagem_aleatoria_ligacao: [
    "estou pensando em você",
    "adivinha onde estou?",
    "você não vai acreditar no que aconteceu",
  ],
  // Renomeado
  direcao_troca: ["direita", "esquerda"],
  // Renomeado
  pose_engracada_selfie: [
    "cara de peixe",
    "sobrancelhas levantadas",
    "bochecha inflada",
    "olhos cruzados",
  ],
  // Renomeado
  midia_social_post: [
    "status do WhatsApp",
    "story do Instagram",
    "tweet",
    "bio do perfil",
  ],
  // Renomeado
  regiao_sotaque: ["carioca", "nordestino", "mineiro", "gaúcho", "paulistano"],
  // Renomeado
  objeto_desenho: [
    "um elefante",
    "uma casa",
    "um carro",
    "uma árvore",
    "um smartphone",
  ],

  // Renomeado
  tipo_danca_exotica: [
    "balé",
    "funk",
    "tango",
    "hip hop",
    "dança do ventre",
    "forró",
  ],
  // Renomeado
  animal_imitacao: ["macaco", "gato", "cachorro", "leão", "galinha", "pato"],
  // Renomeado
  musica_popular_cantar: [
    "uma música sertaneja",
    "um funk",
    "um pagode",
    "um rock clássico",
    "um pop atual",
  ],
  // Renomeado
  atividade_cotidiana_mimica: [
    "escovar os dentes",
    "dirigir",
    "cozinhar",
    "fazer exercícios",
    "tomar banho",
  ],
  // Renomeado
  tema_piada_tipo: ["sogra", "político", "médico", "professor", "bar"],
  // Renomeado
  emocao_careta: [
    "felicidade",
    "tristeza",
    "surpresa",
    "medo",
    "nojo",
    "raiva",
  ],
  // Renomeado
  produto_comum_comercial: [
    "pasta de dente",
    "sabonete",
    "refrigerante",
    "cereal matinal",
    "detergente",
  ],
  // Renomeado
  esporte_pose: [
    "futebol",
    "natação",
    "yoga",
    "levantamento de peso",
    "corrida",
  ],
  // Renomeado
  marca_ficticia_slogan: [
    "um novo energético",
    "um aplicativo revolucionário",
    "um serviço de streaming",
    "um restaurante",
  ],

  // Renomeado
  tema_pessoal_profundo: [
    "seus medos",
    "seus sonhos",
    "sua infância",
    "seus relacionamentos",
    "sua carreira",
  ],
  // Renomeado
  emocao_intensa_sentida: [
    "extremamente vulnerável",
    "completamente realizado",
    "profundamente triste",
    "intensamente feliz",
  ],
  // Renomeado
  acao_nao_admitida: [
    "sempre quis fazer",
    "secretamente gosta",
    "tem vergonha de admitir",
    "se arrepende de ter feito",
  ],
  // Renomeado
  area_vida_objetivo: [
    "carreira",
    "relacionamentos",
    "saúde",
    "aventuras",
    "aprendizado",
    "família",
  ],
  // Renomeado
  aspecto_pessoal_melhoria: [
    "sua personalidade",
    "seus hábitos",
    "sua aparência",
    "suas habilidades sociais",
  ],
  // Renomeado
  situacao_dificil_superada: [
    "falhou miseravelmente",
    "foi rejeitado",
    "perdeu algo importante",
    "enfrentou um grande medo",
  ],
  // Renomeado
  experiencia_aprendizado: [
    "um fracasso",
    "uma perda",
    "uma vitória inesperada",
    "um relacionamento",
    "uma viagem",
  ],
  // Renomeado
  tipo_medo_profundo: [
    "medo irracional",
    "medo da infância",
    "medo existencial",
    "medo social",
  ],
  // Renomeado
  tema_decisao_dificil: [
    "carreira",
    "amor",
    "amizade",
    "família",
    "mudança de vida",
  ],
  // Renomeado
  sonho_aspiracao: [
    "viagem",
    "carreira",
    "relacionamento",
    "habilidade",
    "conquista pessoal",
  ],

  // Renomeado
  caracteristica_elogio: [
    "inteligência",
    "senso de humor",
    "gentileza",
    "aparência",
    "criatividade",
  ],
  // Renomeado
  cenario_flerte: [
    "um bar",
    "uma festa",
    "um aplicativo de namoro",
    "uma livraria",
    "uma academia",
  ],
  // Renomeado
  objeto_sala_romantico: [
    "uma cadeira",
    "uma mesa",
    "um copo",
    "uma planta",
    "um quadro",
  ],
  // Renomeado
  experiencia_romantica_memoravel: [
    "primeiro beijo",
    "encontro",
    "declaração de amor",
    "término",
  ],
  // Renomeado
  local_romantico_detalhado: [
    "Paris",
    "uma praia deserta",
    "um restaurante elegante",
    "um chalé na montanha",
  ],
  // Renomeado
  compromisso_romantico: ["namoro", "noivado", "casamento"],
  // Renomeado
  pessoa_imaginaria_mensagem: [
    "sua celebridade crush",
    "seu tipo ideal",
    "seu amor platônico",
  ],
  // Renomeado
  tema_amor_serenata: [
    "amor à primeira vista",
    "amor não correspondido",
    "amor eterno",
    "paixão ardente",
  ],
  // Renomeado
  evento_romantico_ideal: [
    "casamento",
    "lua de mel",
    "aniversário de namoro",
    "pedido de casamento",
  ],
  // Renomeado
  gesto_romantico_dar: [
    "beijo",
    "abraço",
    "presente surpresa",
    "declaração de amor",
  ],

  // Renomeado
  acao_comum_sedutora: [
    "tomando água",
    "checando o celular",
    "amarrando o sapato",
    "bocejando",
  ],
  // Renomeado
  cenario_fantasia_erotica: [
    "uma viagem",
    "um encontro às cegas",
    "uma festa",
    "um escritório",
  ],
  // Renomeado
  adjetivo_sensual_parceiro: [
    "mais atraente",
    "mais sexy",
    "mais sedutor",
    "mais excitante",
  ],
  // Renomeado
  tema_provocante_sussurro: [
    "um segredo",
    "um desejo",
    "um elogio",
    "um convite",
  ],
  // Renomeado
  acao_sedutora_inesperada: [
    "beijasse",
    "abraçasse",
    "fizesse um elogio ousado",
    "convidasse para sair",
  ],
  // Renomeado
  emocao_sensual_inesperada: ["atraído", "excitado", "seduzido", "desejado"],
  // Renomeado
  local_intimo_sonho: [
    "um hotel de luxo",
    "uma cabana isolada",
    "uma praia deserta",
    "um spa privativo",
  ],
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
        filledTemplate = filledTemplate.replace(
          placeholder,
          `[${key} desconhecido]`
        );
      }
    } else {
      filledTemplate = filledTemplate.replace(
        placeholder,
        `[${key} sem opções]`
      );
    }
  });

  return filledTemplate;
};

// Main function to generate questions
export const generateQuestions = (
  category: string,
  count: number
): string[] => {
  const result: Set<string> = new Set(); // Usar Set para garantir unicidade automaticamente
  const categoryTemplates = templates[category as keyof typeof templates] || [];
  const categorySeedQuestions =
    seedQuestions[category as keyof typeof seedQuestions] || [];

  // Adicionar todas as perguntas iniciais
  categorySeedQuestions.forEach((q) => result.add(q));

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
export const generateChallenges = (
  count: number,
  subcategory = "all"
): string[] => {
  const result: Set<string> = new Set(); // Usar Set para garantir unicidade automaticamente

  if (subcategory === "all") {
    // Adicionar desafios iniciais de todas as categorias
    Object.values(seedChallenges).forEach((challengesArray) => {
      challengesArray.forEach((c) => result.add(c));
    });

    let attempts = 0;
    const maxAttempts = count * 5;

    // Gerar desafios adicionais usando templates de todas as categorias
    const allChallengeTemplates: string[] =
      Object.values(challengeTemplates).flat(); // Achatar todos os templates
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
    const categoryChallenges =
      seedChallenges[subcategory as keyof typeof seedChallenges] || [];
    categoryChallenges.forEach((c) => result.add(c));

    let attempts = 0;
    const maxAttempts = count * 5;

    // Gerar desafios adicionais usando templates da subcategoria específica
    const categoryTemplatesForChallenge =
      challengeTemplates[subcategory as keyof typeof challengeTemplates] || [];
    while (result.size < count && attempts < maxAttempts) {
      const template = randomItem(categoryTemplatesForChallenge);
      if (template === undefined) {
        console.warn(
          `No challenge templates found for subcategory: ${subcategory}`
        );
        break;
      }
      const challenge = fillTemplate(template);
      result.add(challenge);
      attempts++;
    }
  }

  return shuffleArray(Array.from(result)).slice(0, count); // Converter para array, embaralhar e limitar
};
