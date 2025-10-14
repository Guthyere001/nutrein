// Data
const professionals = [
  {
    name: "Dra. Ana Silva",
    specialty: "Nutricionista",
    experience: "8 anos",
    rating: 4.9,
    description:
      "Especialista em nutrição esportiva e emagrecimento saudável com foco em resultados sustentáveis e saúde integral.",
    email: "ana.silva@nutrein.com",
    phone: "(11) 98765-4321",
    location: "São Paulo, SP",
    certifications: [
      "CRN 12345 - Conselho Regional de Nutricionistas",
      "Pós-graduação em Nutrição Esportiva - USP",
      "Certificação em Nutrição Funcional",
      "Especialização em Emagrecimento Saudável",
    ],
    specialties: [
      "Nutrição Esportiva",
      "Emagrecimento",
      "Ganho de Massa",
      "Nutrição Funcional",
      "Dietas Personalizadas",
    ],
    portfolio: [
      { title: "Plano Nutricional Personalizado", description: "Mais de 500 planos criados" },
      { title: "Acompanhamento de Atletas", description: "20+ atletas profissionais" },
      { title: "Workshops de Nutrição", description: "Palestras e eventos educativos" },
    ],
    reviews: [
      {
        author: "Maria Santos",
        rating: 5,
        text: "Excelente profissional! Perdi 15kg de forma saudável e aprendi a me alimentar melhor.",
        date: "Há 2 meses",
      },
      {
        author: "João Pedro",
        rating: 5,
        text: "Muito atenciosa e competente. Meus resultados no treino melhoraram muito!",
        date: "Há 3 meses",
      },
      {
        author: "Carla Lima",
        rating: 4,
        text: "Ótima nutricionista, recomendo! Plano alimentar muito bem elaborado.",
        date: "Há 1 mês",
      },
    ],
  },
  {
    name: "Dra. Anna Jorgia",
    specialty: "Fisioterapeuta",
    experience: "4 anos",
    rating: 4.8,
    description: "Especialista em reabilitação física e prevenção de lesões com técnicas modernas e personalizadas.",
    email: "anna.jorgia@nutrein.com",
    phone: "(11) 98765-4322",
    location: "São Paulo, SP",
    certifications: [
      "CREFITO 54321 - Conselho Regional de Fisioterapia",
      "Especialização em Fisioterapia Esportiva",
      "Certificação em RPG - Reeducação Postural Global",
      "Curso de Dry Needling",
    ],
    specialties: ["Reabilitação Física", "Prevenção de Lesões", "Fisioterapia Esportiva", "RPG", "Pilates Terapêutico"],
    portfolio: [
      { title: "Reabilitação Pós-Cirúrgica", description: "100+ pacientes recuperados" },
      { title: "Tratamento de Lesões Esportivas", description: "Especialista em atletas" },
      { title: "Programas de Prevenção", description: "Avaliação e correção postural" },
    ],
    reviews: [
      {
        author: "Roberto Silva",
        rating: 5,
        text: "Me recuperei de uma lesão no joelho muito mais rápido do que esperava!",
        date: "Há 1 mês",
      },
      {
        author: "Ana Paula",
        rating: 5,
        text: "Profissional excepcional! Muito atenciosa e competente.",
        date: "Há 2 meses",
      },
      { author: "Carlos Eduardo", rating: 4, text: "Ótimo atendimento e resultados visíveis.", date: "Há 3 semanas" },
    ],
  },
  {
    name: "Dr. Rafael Monteiro",
    specialty: "Masoterapeuta",
    experience: "6 anos",
    rating: 4.9,
    description:
      "Especialista em técnicas de relaxamento e alívio muscular, promovendo equilíbrio e bem-estar físico através de massagens terapêuticas.",
    email: "rafael.monteiro@nutrein.com",
    phone: "(11) 98765-4323",
    location: "São Paulo, SP",
    certifications: [
      "Certificação em Massoterapia Clínica",
      "Curso de Massagem Desportiva",
      "Especialização em Shiatsu",
      "Certificação em Drenagem Linfática",
    ],
    specialties: ["Massagem Relaxante", "Massagem Desportiva", "Shiatsu", "Drenagem Linfática", "Quick Massage"],
    portfolio: [
      { title: "Massagens Terapêuticas", description: "Mais de 1000 sessões realizadas" },
      { title: "Atendimento Corporativo", description: "Quick massage em empresas" },
      { title: "Tratamento de Atletas", description: "Recuperação muscular pós-treino" },
    ],
    reviews: [
      { author: "Fernanda Costa", rating: 5, text: "Melhor massagem que já fiz! Saí renovada.", date: "Há 1 semana" },
      {
        author: "Paulo Henrique",
        rating: 5,
        text: "Excelente profissional, muito técnico e atencioso.",
        date: "Há 2 semanas",
      },
      {
        author: "Juliana Alves",
        rating: 5,
        text: "Recomendo demais! Aliviou todas as minhas tensões.",
        date: "Há 1 mês",
      },
    ],
  },
  {
    name: "Dra. Camila Nogueira",
    specialty: "Psicóloga",
    experience: "5 anos",
    rating: 4.8,
    description:
      "Especialista em saúde emocional e autocuidado, ajudando pacientes a alcançarem equilíbrio mental e qualidade de vida.",
    email: "camila.nogueira@nutrein.com",
    phone: "(11) 98765-4324",
    location: "São Paulo, SP",
    certifications: [
      "CRP 06/123456 - Conselho Regional de Psicologia",
      "Especialização em Terapia Cognitivo-Comportamental",
      "Formação em Mindfulness",
      "Certificação em Psicologia do Esporte",
    ],
    specialties: ["Ansiedade", "Depressão", "Autoestima", "Psicologia do Esporte", "Mindfulness"],
    portfolio: [
      { title: "Terapia Individual", description: "Atendimento personalizado" },
      { title: "Grupos de Apoio", description: "Workshops de saúde mental" },
      { title: "Psicologia Esportiva", description: "Preparação mental de atletas" },
    ],
    reviews: [
      {
        author: "Beatriz Santos",
        rating: 5,
        text: "Profissional incrível! Me ajudou muito a superar minha ansiedade.",
        date: "Há 1 mês",
      },
      {
        author: "Ricardo Oliveira",
        rating: 5,
        text: "Excelente psicóloga, muito empática e profissional.",
        date: "Há 2 meses",
      },
      { author: "Mariana Silva", rating: 4, text: "Ótima experiência, recomendo!", date: "Há 3 semanas" },
    ],
  },
  {
    name: "Dr. Lucas Almeida",
    specialty: "Ortopedista",
    experience: "8 anos",
    rating: 4.9,
    description:
      "Especialista em diagnóstico e tratamento de lesões musculoesqueléticas, focado na recuperação funcional e no movimento sem dor.",
    email: "lucas.almeida@nutrein.com",
    phone: "(11) 98765-4325",
    location: "São Paulo, SP",
    certifications: [
      "CRM 123456 - Conselho Regional de Medicina",
      "Residência em Ortopedia e Traumatologia",
      "Especialização em Medicina Esportiva",
      "Fellowship em Cirurgia do Joelho",
    ],
    specialties: [
      "Lesões Esportivas",
      "Cirurgia de Joelho",
      "Tratamento de Ombro",
      "Medicina Esportiva",
      "Traumatologia",
    ],
    portfolio: [
      { title: "Cirurgias Ortopédicas", description: "200+ cirurgias realizadas" },
      { title: "Tratamento Conservador", description: "Evitando cirurgias desnecessárias" },
      { title: "Acompanhamento de Atletas", description: "Medicina esportiva de alto nível" },
    ],
    reviews: [
      {
        author: "André Luiz",
        rating: 5,
        text: "Excelente médico! Resolveu meu problema no joelho.",
        date: "Há 2 meses",
      },
      { author: "Patrícia Rocha", rating: 5, text: "Muito competente e atencioso. Recomendo!", date: "Há 1 mês" },
      { author: "Felipe Costa", rating: 5, text: "Melhor ortopedista que já consultei!", date: "Há 3 semanas" },
    ],
  },
  {
    name: "Dra. Marina Torres",
    specialty: "Masoterapeuta",
    experience: "3 anos",
    rating: 4.7,
    description:
      "Especialista em massagens terapêuticas e esportivas, unindo técnica e sensibilidade para restaurar o bem-estar corporal.",
    email: "marina.torres@nutrein.com",
    phone: "(11) 98765-4326",
    location: "São Paulo, SP",
    certifications: [
      "Certificação em Massoterapia",
      "Curso de Massagem Esportiva",
      "Formação em Reflexologia",
      "Certificação em Aromaterapia",
    ],
    specialties: ["Massagem Terapêutica", "Massagem Esportiva", "Reflexologia", "Aromaterapia", "Massagem Relaxante"],
    portfolio: [
      { title: "Massagens Personalizadas", description: "Técnicas adaptadas para cada cliente" },
      { title: "Recuperação Muscular", description: "Especialista em atletas" },
      { title: "Bem-estar Integral", description: "Corpo e mente em harmonia" },
    ],
    reviews: [
      { author: "Luciana Martins", rating: 5, text: "Massagem maravilhosa! Super recomendo.", date: "Há 2 semanas" },
      { author: "Gabriel Santos", rating: 4, text: "Muito boa profissional, voltarei com certeza.", date: "Há 1 mês" },
      { author: "Renata Lima", rating: 5, text: "Excelente! Aliviou todas as minhas dores.", date: "Há 3 dias" },
    ],
  },
  {
    name: "Marcus David",
    specialty: "Treinador de Futebol/Futsal",
    experience: "12 anos",
    rating: 5.0,
    description:
      "Ex-jogador profissional, especialista em técnica e tática com vasta experiência em formação de atletas.",
    email: "marcus.david@nutrein.com",
    phone: "(11) 98765-4327",
    location: "São Paulo, SP",
    certifications: [
      "Licença UEFA B",
      "CBF - Certificação de Treinador",
      "Curso de Preparação Física",
      "Especialização em Análise Tática",
    ],
    specialties: ["Técnica Individual", "Tática Coletiva", "Preparação Física", "Formação de Base", "Análise de Jogo"],
    portfolio: [
      { title: "Formação de Atletas", description: "50+ jogadores profissionalizados" },
      { title: "Títulos Conquistados", description: "3 campeonatos estaduais" },
      { title: "Clínicas de Futebol", description: "Eventos e treinamentos especiais" },
    ],
    reviews: [
      { author: "Pedro Augusto", rating: 5, text: "Melhor treinador que já tive! Aprendi muito.", date: "Há 1 mês" },
      { author: "Lucas Ferreira", rating: 5, text: "Excelente profissional, muito técnico.", date: "Há 2 meses" },
      { author: "Rafael Souza", rating: 5, text: "Transformou meu jogo completamente!", date: "Há 3 semanas" },
    ],
  },
  {
    name: "Romulo Jardel",
    specialty: "Treinador de Vôlei",
    experience: "6 anos",
    rating: 4.7,
    description: "Campeão estadual, foco em fundamentos e estratégia para desenvolvimento completo dos atletas.",
    email: "romulo.jardel@nutrein.com",
    phone: "(11) 98765-4328",
    location: "São Paulo, SP",
    certifications: [
      "CBV - Certificação de Treinador Nível 2",
      "Curso de Preparação Física para Vôlei",
      "Especialização em Fundamentos",
      "Certificação em Análise de Jogo",
    ],
    specialties: ["Fundamentos", "Tática", "Preparação Física", "Levantamento", "Defesa"],
    portfolio: [
      { title: "Títulos Conquistados", description: "Campeão estadual sub-19" },
      { title: "Formação de Atletas", description: "Base sólida de fundamentos" },
      { title: "Clínicas de Vôlei", description: "Treinamentos especializados" },
    ],
    reviews: [
      { author: "Amanda Silva", rating: 5, text: "Excelente treinador! Evoluí muito tecnicamente.", date: "Há 1 mês" },
      { author: "Thiago Costa", rating: 4, text: "Muito bom, aprendi bastante.", date: "Há 2 semanas" },
      { author: "Isabela Santos", rating: 5, text: "Melhor treinadora que já tive!", date: "Há 3 dias" },
    ],
  },
  {
    name: "Roberto Lima",
    specialty: "Treinador de Basquete",
    experience: "10 anos",
    rating: 4.9,
    description: "Especialista em desenvolvimento de jovens talentos com metodologia moderna e eficaz.",
    email: "roberto.lima@nutrein.com",
    phone: "(11) 98765-4329",
    location: "São Paulo, SP",
    certifications: [
      "CBB - Certificação de Treinador",
      "Curso de Preparação Física",
      "Especialização em Formação de Base",
      "Certificação em Análise Tática",
    ],
    specialties: [
      "Formação de Base",
      "Técnica Individual",
      "Tática Coletiva",
      "Preparação Física",
      "Desenvolvimento de Jovens",
    ],
    portfolio: [
      { title: "Jovens Talentos", description: "30+ atletas em clubes profissionais" },
      { title: "Títulos", description: "2 campeonatos estaduais de base" },
      { title: "Clínicas de Basquete", description: "Eventos de desenvolvimento" },
    ],
    reviews: [
      { author: "Matheus Oliveira", rating: 5, text: "Treinador excepcional! Mudou minha carreira.", date: "Há 1 mês" },
      { author: "Bruno Henrique", rating: 5, text: "Muito competente e dedicado.", date: "Há 2 meses" },
      { author: "Vinicius Santos", rating: 4, text: "Ótimo treinador, recomendo!", date: "Há 1 semana" },
    ],
  },
  {
    name: "Nyck Johnson",
    specialty: "Treinador de Handebol",
    experience: "7 anos",
    rating: 5.0,
    description: "Técnico certificado, focado na formação de futuros atletas com excelência técnica e tática.",
    email: "nyck.johnson@nutrein.com",
    phone: "(11) 98765-4330",
    location: "São Paulo, SP",
    certifications: [
      "CBHb - Certificação de Treinador",
      "Curso de Preparação Física",
      "Especialização em Tática de Handebol",
      "Certificação Internacional",
    ],
    specialties: ["Formação de Atletas", "Tática", "Preparação Física", "Técnica Individual", "Defesa"],
    portfolio: [
      { title: "Formação de Base", description: "Atletas em seleções estaduais" },
      { title: "Títulos", description: "Campeão regional" },
      { title: "Desenvolvimento Técnico", description: "Metodologia moderna" },
    ],
    reviews: [
      { author: "Gustavo Alves", rating: 5, text: "Melhor treinador! Aprendi muito.", date: "Há 2 semanas" },
      { author: "Leonardo Silva", rating: 5, text: "Excelente profissional e pessoa.", date: "Há 1 mês" },
      { author: "Diego Costa", rating: 5, text: "Transformou meu jogo completamente!", date: "Há 3 dias" },
    ],
  },
  {
    name: "Rafael Star",
    specialty: "Professor de Boxe",
    experience: "9 anos",
    rating: 4.8,
    description: "Ex-lutador profissional, especialista em técnica, condicionamento e preparação para competições.",
    email: "rafael.star@nutrein.com",
    phone: "(11) 98765-4331",
    location: "São Paulo, SP",
    certifications: [
      "Certificação de Treinador de Boxe",
      "Curso de Preparação Física para Lutas",
      "Especialização em Técnica de Boxe",
      "Certificação em Nutrição Esportiva",
    ],
    specialties: ["Técnica de Boxe", "Condicionamento", "Preparação para Lutas", "Defesa Pessoal", "Fitness Boxing"],
    portfolio: [
      { title: "Atletas Formados", description: "10+ lutadores profissionais" },
      { title: "Fitness Boxing", description: "Aulas para condicionamento" },
      { title: "Preparação para Competições", description: "Resultados comprovados" },
    ],
    reviews: [
      { author: "Rodrigo Martins", rating: 5, text: "Excelente professor! Muito técnico.", date: "Há 1 mês" },
      { author: "Marcelo Santos", rating: 5, text: "Melhor treino de boxe que já fiz!", date: "Há 2 semanas" },
      { author: "Anderson Lima", rating: 4, text: "Muito bom, recomendo!", date: "Há 3 dias" },
    ],
  },
]

const exercises = {
  Bíceps: ["Rosca Direta com Barra", "Rosca Scott", "Rosca Martelo", "Rosca Concentrada", "Rosca 21"],
  Tríceps: ["Tríceps Pulley", "Tríceps Testa", "Mergulho em Paralelas", "Tríceps Coice", "Rosca Francesa"],
  Peito: ["Supino Reto", "Supino Inclinado", "Crucifixo", "Flexão de Braço", "Peck Deck"],
  Costas: ["Puxada Frontal", "Remada Curvada", "Pullover", "Remada Unilateral", "Levantamento Terra"],
  Pernas: ["Agachamento", "Leg Press", "Extensão de Pernas", "Flexão de Pernas", "Panturrilha em Pé"],
  Ombros: ["Desenvolvimento com Halteres", "Elevação Lateral", "Elevação Frontal", "Remada Alta", "Encolhimento"],
}

const exercisesDatabase = {
  // BÍCEPS
  "rosca direta com barra": {
    nome: "Rosca Direta com Barra",
    grupo: "Bíceps",
    equipamento: "Barra",
    dificuldade: "Iniciante",
    descricao: "Exercício fundamental para desenvolvimento dos bíceps",
    execucao: [
      "Fique em pé com os pés na largura dos ombros",
      "Segure a barra com pegada supinada (palmas para cima) na largura dos ombros",
      "Mantenha os cotovelos fixos ao lado do corpo",
      "Flexione os cotovelos levantando a barra até o peito, contraindo os bíceps",
      "Pause no topo do movimento por 1 segundo",
      "Desça a barra de forma controlada até a posição inicial",
      "Mantenha os cotovelos estáticos durante todo o movimento",
    ],
    dicas: [
      "Não balance o corpo para gerar impulso",
      "Mantenha a postura ereta com o core contraído",
      "Foco total na contração do bíceps",
      "Controle a descida (fase excêntrica) por 2-3 segundos",
      "Não estenda completamente os cotovelos na posição inicial para manter tensão",
    ],
    erros_comuns: [
      "Balançar o tronco para ajudar no movimento",
      "Afastar os cotovelos do corpo",
      "Usar carga excessiva comprometendo a forma",
      "Não controlar a descida da barra",
    ],
  },
  "rosca scott": {
    nome: "Rosca Scott",
    grupo: "Bíceps",
    equipamento: "Banco Scott e Barra/Halteres",
    dificuldade: "Intermediário",
    descricao: "Exercício isolado para bíceps com suporte que elimina impulso",
    execucao: [
      "Sente-se no banco Scott e ajuste a altura do apoio",
      "Apoie a parte de trás dos braços no suporte acolchoado",
      "Segure a barra com pegada supinada na largura dos ombros",
      "Flexione os cotovelos levantando a barra até o topo",
      "Contraia os bíceps no topo do movimento",
      "Desça lentamente até quase estender completamente os braços",
    ],
    dicas: [
      "Mantenha os braços totalmente apoiados no suporte",
      "Não levante os cotovelos do apoio durante o movimento",
      "Use amplitude completa de movimento",
      "Controle total na fase excêntrica",
    ],
    erros_comuns: ["Levantar os cotovelos do apoio", "Usar impulso do corpo", "Não estender suficientemente os braços"],
  },
  "rosca martelo": {
    nome: "Rosca Martelo",
    grupo: "Bíceps",
    equipamento: "Halteres",
    dificuldade: "Iniciante",
    descricao: "Trabalha bíceps e antebraços com pegada neutra",
    execucao: [
      "Fique em pé com halteres nas mãos, palmas voltadas para o corpo",
      "Mantenha os cotovelos fixos ao lado do tronco",
      "Flexione os cotovelos levantando os halteres simultaneamente",
      "Mantenha as palmas voltadas uma para a outra durante todo movimento",
      "Contraia no topo e desça controladamente",
    ],
    dicas: [
      "Pegada neutra reduz estresse nos punhos",
      "Trabalha mais o braquial e braquiorradial",
      "Pode alternar os braços para maior controle",
      "Mantenha postura ereta",
    ],
    erros_comuns: ["Rotar os punhos durante o movimento", "Balançar o corpo", "Usar carga excessiva"],
  },
  "rosca concentrada": {
    nome: "Rosca Concentrada",
    grupo: "Bíceps",
    equipamento: "Halter",
    dificuldade: "Iniciante",
    descricao: "Exercício de isolamento máximo para o pico do bíceps",
    execucao: [
      "Sente-se em um banco com as pernas abertas",
      "Segure um halter com uma mão",
      "Apoie o cotovelo na parte interna da coxa",
      "Deixe o braço totalmente estendido para baixo",
      "Flexione o cotovelo levantando o halter até o ombro",
      "Contraia intensamente o bíceps no topo",
      "Desça controladamente até a extensão completa",
    ],
    dicas: [
      "Foco total na contração do bíceps",
      "Movimento lento e controlado",
      "Não movimente o tronco",
      "Cotovelo sempre apoiado na coxa",
      "Excelente para trabalhar o pico do bíceps",
    ],
    erros_comuns: [
      "Usar impulso do corpo",
      "Não estender completamente o braço",
      "Tirar o cotovelo da coxa",
      "Usar carga muito pesada",
    ],
  },
  "rosca 21": {
    nome: "Rosca 21",
    grupo: "Bíceps",
    equipamento: "Barra ou Halteres",
    dificuldade: "Intermediário",
    descricao: "Técnica avançada que trabalha o bíceps em três amplitudes diferentes",
    execucao: [
      "Fique em pé segurando a barra com pegada supinada",
      "Faça 7 repetições da posição inicial até meio do movimento (90 graus)",
      "Sem descanso, faça 7 repetições de meio do movimento até o topo",
      "Sem descanso, faça 7 repetições completas (amplitude total)",
      "Total de 21 repetições sem pausa",
    ],
    dicas: [
      "Técnica muito intensa, use carga moderada",
      "Mantenha forma perfeita durante todas as 21 reps",
      "Não descanse entre as fases",
      "Excelente para quebrar platôs de treino",
      "Controle total do movimento em todas as fases",
    ],
    erros_comuns: [
      "Usar carga muito pesada",
      "Perder a forma nas últimas repetições",
      "Fazer pausas entre as fases",
      "Balançar o corpo para ajudar",
    ],
  },

  // TRÍCEPS
  "triceps pulley": {
    nome: "Tríceps Pulley",
    grupo: "Tríceps",
    equipamento: "Polia Alta",
    dificuldade: "Iniciante",
    descricao: "Exercício de isolamento para tríceps usando polia",
    execucao: [
      "Fique de frente para a polia alta",
      "Segure a barra ou corda com pegada pronada",
      "Mantenha os cotovelos fixos ao lado do corpo",
      "Empurre a barra para baixo até extensão completa dos braços",
      "Contraia os tríceps no final do movimento",
      "Retorne controladamente até os cotovelos formarem 90 graus",
    ],
    dicas: [
      "Cotovelos sempre fixos ao lado do corpo",
      "Não incline o tronco para frente",
      "Extensão completa é essencial",
      "Controle total na volta",
    ],
    erros_comuns: [
      "Movimentar os cotovelos durante execução",
      "Usar impulso do corpo",
      "Não estender completamente os braços",
    ],
  },
  "triceps testa": {
    nome: "Tríceps Testa",
    grupo: "Tríceps",
    equipamento: "Barra ou Halteres",
    dificuldade: "Intermediário",
    descricao: "Exercício intenso para desenvolvimento da cabeça longa do tríceps",
    execucao: [
      "Deite-se em um banco reto segurando a barra acima do peito",
      "Mantenha os braços perpendiculares ao chão",
      "Flexione apenas os cotovelos, baixando a barra em direção à testa",
      "Mantenha os cotovelos fixos e apontando para cima",
      "Estenda os braços retornando à posição inicial",
      "Contraia os tríceps no topo",
    ],
    dicas: [
      "Cotovelos sempre apontando para cima, não para os lados",
      "Movimento apenas dos antebraços",
      "Desça até a barra quase tocar a testa",
      "Use carga moderada para manter forma correta",
    ],
    erros_comuns: ["Abrir os cotovelos para os lados", "Movimentar os ombros", "Usar carga excessiva"],
  },
  "mergulho em paralelas": {
    nome: "Mergulho em Paralelas",
    grupo: "Tríceps",
    equipamento: "Barras Paralelas",
    dificuldade: "Intermediário",
    descricao: "Exercício composto excelente para tríceps e peito",
    execucao: [
      "Segure as barras paralelas e suspenda o corpo",
      "Mantenha o corpo na vertical para focar nos tríceps",
      "Flexione os cotovelos descendo o corpo controladamente",
      "Desça até os cotovelos formarem 90 graus",
      "Empurre o corpo para cima até extensão completa dos braços",
      "Mantenha o core contraído durante todo movimento",
    ],
    dicas: [
      "Corpo mais vertical = mais tríceps",
      "Corpo inclinado para frente = mais peito",
      "Não desça muito para não sobrecarregar os ombros",
      "Se for muito difícil, use máquina assistida",
      "Cotovelos próximos ao corpo",
    ],
    erros_comuns: [
      "Descer muito além de 90 graus (perigoso para ombros)",
      "Abrir muito os cotovelos",
      "Não estender completamente os braços",
      "Balançar o corpo",
    ],
  },
  "triceps coice": {
    nome: "Tríceps Coice",
    grupo: "Tríceps",
    equipamento: "Halteres",
    dificuldade: "Iniciante",
    descricao: "Exercício de isolamento para tríceps com halteres",
    execucao: [
      "Apoie um joelho e uma mão em um banco",
      "Segure um halter com a outra mão",
      "Mantenha o cotovelo fixo ao lado do corpo, braço paralelo ao chão",
      "Estenda o antebraço para trás até o braço ficar reto",
      "Contraia o tríceps no topo do movimento",
      "Retorne controladamente à posição inicial",
    ],
    dicas: [
      "Cotovelo sempre fixo e alto",
      "Movimento apenas do antebraço",
      "Contraia intensamente no topo",
      "Mantenha as costas retas",
      "Pode fazer com os dois braços simultaneamente",
    ],
    erros_comuns: [
      "Movimentar o cotovelo durante execução",
      "Usar impulso do corpo",
      "Não estender completamente o braço",
      "Deixar o cotovelo cair",
    ],
  },
  "rosca francesa": {
    nome: "Rosca Francesa",
    grupo: "Tríceps",
    equipamento: "Barra ou Halteres",
    dificuldade: "Intermediário",
    descricao: "Exercício para alongamento máximo da cabeça longa do tríceps",
    execucao: [
      "Deite-se em um banco ou fique em pé",
      "Segure a barra acima da cabeça com braços estendidos",
      "Flexione apenas os cotovelos, baixando a barra atrás da cabeça",
      "Mantenha os cotovelos apontando para cima e fixos",
      "Desça até sentir alongamento nos tríceps",
      "Estenda os braços retornando à posição inicial",
    ],
    dicas: [
      "Cotovelos sempre apontando para cima",
      "Movimento lento e controlado",
      "Sinta o alongamento na descida",
      "Não arqueie as costas se fizer em pé",
      "Excelente para a cabeça longa do tríceps",
    ],
    erros_comuns: [
      "Abrir os cotovelos para os lados",
      "Usar carga excessiva",
      "Movimentar os ombros",
      "Não controlar a descida",
    ],
  },

  // PEITO
  "supino reto": {
    nome: "Supino Reto",
    grupo: "Peito",
    equipamento: "Barra e Banco",
    dificuldade: "Intermediário",
    descricao: "Exercício fundamental para desenvolvimento do peitoral",
    execucao: [
      "Deite-se no banco com os pés firmes no chão",
      "Segure a barra com pegada um pouco mais larga que os ombros",
      "Retire a barra do suporte e posicione sobre o peito",
      "Desça a barra controladamente até tocar o meio do peito",
      "Empurre a barra para cima até extensão completa dos braços",
      "Mantenha as escápulas retraídas durante todo movimento",
    ],
    dicas: [
      "Mantenha os pés firmes no chão",
      "Escápulas sempre retraídas (ombros para trás)",
      "Barra deve descer no meio do peito",
      "Não tire o quadril do banco",
      "Controle total na descida",
    ],
    erros_comuns: [
      "Barra descer muito alta (próximo ao pescoço)",
      "Não retrair as escápulas",
      "Tirar o quadril do banco",
      "Quicar a barra no peito",
    ],
  },
  "supino inclinado": {
    nome: "Supino Inclinado",
    grupo: "Peito",
    equipamento: "Barra/Halteres e Banco Inclinado",
    dificuldade: "Intermediário",
    descricao: "Foca na porção superior do peitoral",
    execucao: [
      "Ajuste o banco entre 30-45 graus de inclinação",
      "Deite-se com os pés firmes no chão",
      "Segure a barra com pegada ligeiramente mais larga que os ombros",
      "Desça a barra até a parte superior do peito",
      "Empurre para cima até extensão completa",
      "Mantenha escápulas retraídas",
    ],
    dicas: [
      "Inclinação ideal: 30-45 graus",
      "Foco na contração do peitoral superior",
      "Não arqueie excessivamente as costas",
      "Controle na descida",
    ],
    erros_comuns: ["Inclinação muito alta (vira ombro)", "Não controlar a descida", "Usar carga excessiva"],
  },
  crucifixo: {
    nome: "Crucifixo",
    grupo: "Peito",
    equipamento: "Halteres",
    dificuldade: "Intermediário",
    descricao: "Exercício de isolamento para alongamento e contração do peitoral",
    execucao: [
      "Deite-se em um banco com halteres acima do peito",
      "Mantenha cotovelos levemente flexionados",
      "Abra os braços lateralmente em movimento de arco",
      "Desça até sentir alongamento no peito",
      "Não desça além da linha dos ombros",
      "Retorne à posição inicial contraindo o peito",
      "Halteres devem se encontrar no topo",
    ],
    dicas: [
      "Cotovelos sempre levemente flexionados, nunca retos",
      "Movimento de abraço ao subir",
      "Foco no alongamento e contração",
      "Não desça muito para não lesionar ombros",
      "Use carga moderada",
    ],
    erros_comuns: [
      "Estender completamente os cotovelos (perigoso)",
      "Descer muito além da linha dos ombros",
      "Usar carga excessiva",
      "Transformar em supino (flexionar cotovelos demais)",
    ],
  },
  "flexao de braco": {
    nome: "Flexão de Braço",
    grupo: "Peito",
    equipamento: "Peso Corporal",
    dificuldade: "Iniciante",
    descricao: "Exercício funcional usando peso corporal",
    execucao: [
      "Posicione-se em prancha com mãos na largura dos ombros",
      "Corpo deve formar linha reta da cabeça aos pés",
      "Desça o corpo flexionando os cotovelos até o peito quase tocar o chão",
      "Mantenha cotovelos a 45 graus do corpo",
      "Empurre para cima até extensão completa dos braços",
      "Mantenha core contraído durante todo movimento",
    ],
    dicas: [
      "Corpo sempre alinhado",
      "Não deixe o quadril cair",
      "Cotovelos a 45 graus, não 90",
      "Amplitude completa de movimento",
      "Respire: inspire na descida, expire na subida",
    ],
    erros_comuns: [
      "Quadril caído ou elevado",
      "Cotovelos muito abertos",
      "Não descer suficientemente",
      "Perder alinhamento corporal",
    ],
  },
  "peck deck": {
    nome: "Peck Deck",
    grupo: "Peito",
    equipamento: "Máquina Peck Deck",
    dificuldade: "Iniciante",
    descricao: "Exercício de isolamento em máquina para o peitoral",
    execucao: [
      "Sente-se na máquina com as costas totalmente apoiadas",
      "Ajuste a altura do assento para que os braços fiquem na altura do peito",
      "Segure as alças ou apoie os antebraços nos suportes",
      "Junte os braços à frente contraindo o peito",
      "Pause e contraia intensamente no centro",
      "Retorne controladamente à posição inicial",
    ],
    dicas: [
      "Costas sempre apoiadas no encosto",
      "Foco total na contração do peito",
      "Movimento lento e controlado",
      "Não use impulso",
      "Excelente para iniciantes aprenderem a contrair o peito",
    ],
    erros_comuns: [
      "Tirar as costas do encosto",
      "Usar impulso para juntar os braços",
      "Não contrair o peito no centro",
      "Abrir muito além da linha dos ombros",
    ],
  },

  // COSTAS
  "puxada frontal": {
    nome: "Puxada Frontal",
    grupo: "Costas",
    equipamento: "Polia Alta",
    dificuldade: "Iniciante",
    descricao: "Exercício fundamental para desenvolvimento das costas",
    execucao: [
      "Sente-se na máquina e ajuste o apoio das coxas",
      "Segure a barra com pegada pronada mais larga que os ombros",
      "Incline ligeiramente o tronco para trás (10-15 graus)",
      "Puxe a barra em direção ao peito superior",
      "Contraia as escápulas no final do movimento",
      "Retorne controladamente até extensão completa dos braços",
    ],
    dicas: [
      "Puxe com as costas, não com os braços",
      "Foco em juntar as escápulas",
      "Peito para fora durante o movimento",
      "Não balance o corpo",
      "Controle na fase excêntrica",
    ],
    erros_comuns: [
      "Puxar com os braços ao invés das costas",
      "Balançar o corpo para gerar impulso",
      "Não contrair as escápulas",
      "Puxar a barra atrás da cabeça (perigoso)",
    ],
  },
  "remada curvada": {
    nome: "Remada Curvada",
    grupo: "Costas",
    equipamento: "Barra",
    dificuldade: "Intermediário",
    descricao: "Exercício composto para espessura das costas",
    execucao: [
      "Fique em pé segurando a barra com pegada pronada",
      "Flexione os joelhos levemente e incline o tronco 45 graus",
      "Mantenha as costas retas e core contraído",
      "Puxe a barra em direção ao abdômen inferior",
      "Contraia as escápulas no topo do movimento",
      "Desça controladamente até extensão dos braços",
    ],
    dicas: [
      "Costas sempre retas, nunca arredondadas",
      "Puxe em direção ao umbigo",
      "Cotovelos próximos ao corpo",
      "Não use impulso das pernas",
      "Foco na contração das escápulas",
    ],
    erros_comuns: [
      "Arredondar as costas",
      "Ficar muito ereto (perde tensão)",
      "Usar impulso do corpo",
      "Não contrair as escápulas",
    ],
  },
  pullover: {
    nome: "Pullover",
    grupo: "Costas",
    equipamento: "Halter ou Barra",
    dificuldade: "Intermediário",
    descricao: "Exercício que trabalha costas e expande a caixa torácica",
    execucao: [
      "Deite-se perpendicular em um banco (apenas as costas superiores apoiadas)",
      "Segure um halter com as duas mãos acima do peito",
      "Mantenha os cotovelos levemente flexionados",
      "Desça o halter em arco atrás da cabeça",
      "Desça até sentir alongamento nas costas e peito",
      "Retorne à posição inicial contraindo as costas",
    ],
    dicas: [
      "Quadril deve ficar baixo para maior alongamento",
      "Cotovelos sempre levemente flexionados",
      "Movimento lento e controlado",
      "Respire profundamente durante o movimento",
      "Excelente para expansão da caixa torácica",
    ],
    erros_comuns: [
      "Estender completamente os cotovelos",
      "Elevar o quadril",
      "Usar carga excessiva",
      "Não controlar o movimento",
    ],
  },
  "remada unilateral": {
    nome: "Remada Unilateral",
    grupo: "Costas",
    equipamento: "Halter",
    dificuldade: "Iniciante",
    descricao: "Exercício unilateral para desenvolvimento equilibrado das costas",
    execucao: [
      "Apoie um joelho e uma mão em um banco",
      "Segure um halter com a outra mão, braço estendido",
      "Mantenha as costas retas e paralelas ao chão",
      "Puxe o halter em direção ao quadril",
      "Cotovelo deve passar próximo ao corpo",
      "Contraia a escápula no topo do movimento",
      "Desça controladamente até extensão completa",
    ],
    dicas: [
      "Costas sempre retas e paralelas ao chão",
      "Puxe o cotovelo para trás, não para cima",
      "Foco em contrair a escápula",
      "Não rotacione o tronco",
      "Trabalha cada lado independentemente",
    ],
    erros_comuns: [
      "Rotacionar o tronco durante o movimento",
      "Puxar com o braço ao invés das costas",
      "Arredondar as costas",
      "Não contrair a escápula",
    ],
  },
  "levantamento terra": {
    nome: "Levantamento Terra",
    grupo: "Costas",
    equipamento: "Barra",
    dificuldade: "Avançado",
    descricao: "Exercício composto que trabalha corpo inteiro",
    execucao: [
      "Posicione-se com pés na largura dos ombros, barra sobre o meio dos pés",
      "Agache e segure a barra com pegada pronada na largura dos ombros",
      "Mantenha costas retas, peito para fora, olhar para frente",
      "Empurre o chão com os pés, levantando a barra",
      "Estenda quadril e joelhos simultaneamente",
      "Finalize em pé com ombros para trás",
      "Desça controladamente invertendo o movimento",
    ],
    dicas: [
      "Costas SEMPRE retas - essencial para segurança",
      "Barra deve subir próxima às pernas",
      "Empurre com as pernas, não puxe com as costas",
      "Core fortemente contraído",
      "Não arredonde a lombar em hipótese alguma",
    ],
    erros_comuns: [
      "Arredondar a lombar (PERIGOSO)",
      "Barra longe do corpo",
      "Puxar com os braços",
      "Não estender completamente o quadril",
      "Hiperextender as costas no topo",
    ],
  },

  // PERNAS
  agachamento: {
    nome: "Agachamento",
    grupo: "Pernas",
    equipamento: "Barra",
    dificuldade: "Intermediário",
    descricao: "Rei dos exercícios para pernas e glúteos",
    execucao: [
      "Posicione a barra nas costas (trapézio superior)",
      "Pés na largura dos ombros, pontas levemente para fora",
      "Mantenha peito para cima e core contraído",
      "Desça flexionando quadril e joelhos simultaneamente",
      "Desça até coxas paralelas ao chão (ou mais se tiver mobilidade)",
      "Joelhos alinhados com os pés",
      "Empurre o chão com os pés para subir",
    ],
    dicas: [
      "Joelhos sempre alinhados com os pés",
      "Não deixe os joelhos ultrapassarem muito os pés",
      "Mantenha o peso nos calcanhares",
      "Costas retas durante todo movimento",
      "Olhar para frente, não para baixo",
    ],
    erros_comuns: [
      "Joelhos caindo para dentro",
      "Não descer suficientemente",
      "Arredondar as costas",
      "Levantar os calcanhares do chão",
      "Inclinar muito para frente",
    ],
  },
  "leg press": {
    nome: "Leg Press",
    grupo: "Pernas",
    equipamento: "Máquina Leg Press",
    dificuldade: "Iniciante",
    descricao: "Exercício seguro para desenvolvimento das pernas",
    execucao: [
      "Sente-se na máquina com costas totalmente apoiadas",
      "Posicione os pés na plataforma na largura dos ombros",
      "Destrave a máquina e flexione os joelhos",
      "Desça até os joelhos formarem 90 graus",
      "Empurre a plataforma até quase extensão completa",
      "Não trave os joelhos no topo",
    ],
    dicas: [
      "Costas sempre apoiadas no encosto",
      "Não tire o quadril do assento",
      "Amplitude controlada",
      "Não trave os joelhos completamente",
      "Pés mais altos = mais glúteos, mais baixos = mais quadríceps",
    ],
    erros_comuns: [
      "Tirar o quadril do assento na descida",
      "Travar os joelhos no topo",
      "Usar carga excessiva",
      "Amplitude muito curta",
    ],
  },
  "extensao de pernas": {
    nome: "Extensão de Pernas",
    grupo: "Pernas",
    equipamento: "Máquina Extensora",
    dificuldade: "Iniciante",
    descricao: "Exercício de isolamento para o quadríceps",
    execucao: [
      "Sente-se na máquina com as costas apoiadas",
      "Ajuste o apoio dos pés na altura dos tornozelos",
      "Segure as alças laterais para estabilidade",
      "Estenda as pernas até ficarem completamente retas",
      "Contraia o quadríceps no topo por 1 segundo",
      "Desça controladamente até 90 graus",
    ],
    dicas: [
      "Extensão completa é essencial",
      "Contraia intensamente o quadríceps no topo",
      "Movimento controlado na descida",
      "Não use impulso",
      "Excelente para pré-exaustão ou finalização",
    ],
    erros_comuns: [
      "Não estender completamente as pernas",
      "Usar impulso para levantar",
      "Tirar as costas do encosto",
      "Descer muito rápido",
    ],
  },
  "flexao de pernas": {
    nome: "Flexão de Pernas",
    grupo: "Pernas",
    equipamento: "Máquina Flexora",
    dificuldade: "Iniciante",
    descricao: "Exercício de isolamento para os posteriores de coxa",
    execucao: [
      "Deite-se de bruços na máquina",
      "Ajuste o apoio na altura dos calcanhares",
      "Segure as alças para estabilidade",
      "Flexione os joelhos trazendo os calcanhares em direção aos glúteos",
      "Contraia os posteriores no topo do movimento",
      "Desça controladamente até quase extensão completa",
    ],
    dicas: [
      "Quadril sempre apoiado no banco",
      "Contraia intensamente no topo",
      "Movimento lento e controlado",
      "Não arqueie as costas",
      "Essencial para equilíbrio muscular das pernas",
    ],
    erros_comuns: ["Levantar o quadril do banco", "Usar impulso", "Não contrair no topo", "Amplitude incompleta"],
  },
  "panturrilha em pe": {
    nome: "Panturrilha em Pé",
    grupo: "Pernas",
    equipamento: "Máquina de Panturrilha",
    dificuldade: "Iniciante",
    descricao: "Exercício para desenvolvimento das panturrilhas (gastrocnêmio)",
    execucao: [
      "Posicione-se na máquina com os ombros sob os apoios",
      "Coloque a ponta dos pés na plataforma, calcanhares para fora",
      "Mantenha as pernas estendidas (joelhos levemente flexionados)",
      "Desça os calcanhares o máximo possível para alongar",
      "Suba na ponta dos pés o mais alto possível",
      "Contraia as panturrilhas no topo por 1 segundo",
      "Desça controladamente",
    ],
    dicas: [
      "Amplitude completa é essencial",
      "Pause e contraia no topo",
      "Desça bem para alongar completamente",
      "Movimento lento e controlado",
      "Panturrilhas respondem bem a altas repetições",
    ],
    erros_comuns: [
      "Amplitude muito curta",
      "Não pausar no topo",
      "Usar impulso",
      "Flexionar muito os joelhos (tira tensão)",
    ],
  },

  // OMBROS
  "desenvolvimento com halteres": {
    nome: "Desenvolvimento com Halteres",
    grupo: "Ombros",
    equipamento: "Halteres",
    dificuldade: "Intermediário",
    descricao: "Exercício fundamental para ombros",
    execucao: [
      "Sente-se em banco com encosto a 90 graus",
      "Segure halteres na altura dos ombros, palmas para frente",
      "Empurre os halteres para cima até quase extensão completa",
      "Halteres devem se aproximar no topo mas não se tocar",
      "Desça controladamente até a posição inicial",
      "Mantenha core contraído",
    ],
    dicas: [
      "Não arqueie as costas",
      "Movimento vertical, não para frente",
      "Controle total na descida",
      "Não trave os cotovelos no topo",
    ],
    erros_comuns: [
      "Arquear excessivamente as costas",
      "Empurrar para frente ao invés de cima",
      "Usar impulso das pernas",
      "Descer muito pouco",
    ],
  },
  "elevacao lateral": {
    nome: "Elevação Lateral",
    grupo: "Ombros",
    equipamento: "Halteres",
    dificuldade: "Iniciante",
    descricao: "Isolamento para deltóide lateral",
    execucao: [
      "Fique em pé com halteres ao lado do corpo",
      "Cotovelos levemente flexionados",
      "Eleve os braços lateralmente até a altura dos ombros",
      "Palmas voltadas para baixo no topo",
      "Pause brevemente no topo",
      "Desça controladamente",
    ],
    dicas: [
      "Não use impulso",
      "Cotovelos sempre levemente flexionados",
      "Não eleve acima da linha dos ombros",
      "Foco no deltóide lateral",
      "Use carga moderada para manter forma",
    ],
    erros_comuns: [
      "Balançar o corpo",
      "Elevar muito acima dos ombros",
      "Usar carga excessiva",
      "Não controlar a descida",
    ],
  },
  "elevacao frontal": {
    nome: "Elevação Frontal",
    grupo: "Ombros",
    equipamento: "Halteres ou Barra",
    dificuldade: "Iniciante",
    descricao: "Isolamento para deltóide anterior",
    execucao: [
      "Fique em pé com halteres à frente das coxas",
      "Mantenha os cotovelos levemente flexionados",
      "Eleve os halteres à frente até a altura dos ombros",
      "Palmas voltadas para baixo",
      "Pause no topo do movimento",
      "Desça controladamente à posição inicial",
    ],
    dicas: [
      "Não balance o corpo",
      "Movimento controlado e lento",
      "Não eleve acima da linha dos ombros",
      "Pode alternar os braços",
      "Use carga moderada",
    ],
    erros_comuns: [
      "Usar impulso do corpo",
      "Elevar muito acima dos ombros",
      "Arquear as costas",
      "Usar carga excessiva",
    ],
  },
  "remada alta": {
    nome: "Remada Alta",
    grupo: "Ombros",
    equipamento: "Barra ou Halteres",
    dificuldade: "Intermediário",
    descricao: "Exercício para deltóides e trapézio",
    execucao: [
      "Fique em pé segurando a barra com pegada pronada",
      "Mãos mais próximas que a largura dos ombros",
      "Puxe a barra verticalmente ao longo do corpo",
      "Cotovelos devem subir mais alto que as mãos",
      "Puxe até a barra chegar na altura do peito",
      "Desça controladamente",
    ],
    dicas: [
      "Cotovelos sempre mais altos que as mãos",
      "Movimento vertical próximo ao corpo",
      "Não use impulso",
      "Foco nos deltóides laterais e trapézio",
      "Pegada muito fechada pode causar desconforto nos ombros",
    ],
    erros_comuns: [
      "Pegada muito fechada (pode lesionar ombros)",
      "Usar impulso do corpo",
      "Não elevar os cotovelos suficientemente",
      "Afastar a barra do corpo",
    ],
  },
  encolhimento: {
    nome: "Encolhimento",
    grupo: "Ombros",
    equipamento: "Halteres ou Barra",
    dificuldade: "Iniciante",
    descricao: "Exercício de isolamento para o trapézio",
    execucao: [
      "Fique em pé com halteres ao lado do corpo ou barra à frente",
      "Braços estendidos, pegada pronada",
      "Eleve os ombros em direção às orelhas",
      "Contraia o trapézio no topo por 1 segundo",
      "Não flexione os cotovelos",
      "Desça controladamente à posição inicial",
    ],
    dicas: [
      "Movimento apenas dos ombros, braços não participam",
      "Contraia intensamente no topo",
      "Não rotacione os ombros",
      "Mantenha a postura ereta",
      "Foco total no trapézio",
    ],
    erros_comuns: ["Flexionar os cotovelos", "Rotacionar os ombros (perigoso)", "Não contrair no topo", "Usar impulso"],
  },
}

function findExercise(query) {
  const normalizedQuery = query
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .trim()

  // Busca exata primeiro
  if (exercisesDatabase[normalizedQuery]) {
    return exercisesDatabase[normalizedQuery]
  }

  // Busca por palavras-chave no nome
  for (const [key, exercise] of Object.entries(exercisesDatabase)) {
    const normalizedName = exercise.nome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

    // Verifica se a query contém palavras do nome do exercício
    const queryWords = normalizedQuery.split(" ")
    const nameWords = normalizedName.split(" ")

    const matchCount = queryWords.filter((word) =>
      nameWords.some((nameWord) => nameWord.includes(word) || word.includes(nameWord)),
    ).length

    // Se mais de 50% das palavras coincidem, considera um match
    if (matchCount >= Math.ceil(queryWords.length * 0.5)) {
      return exercise
    }
  }

  return null
}

function formatExerciseResponse(exercise) {
  let response = `📋 **${exercise.nome}**\n\n`
  response += `🎯 Grupo Muscular: ${exercise.grupo}\n`
  response += `⚙️ Equipamento: ${exercise.equipamento}\n`
  response += `📊 Dificuldade: ${exercise.dificuldade}\n\n`
  response += `📝 ${exercise.descricao}\n\n`

  response += `✅ **EXECUÇÃO CORRETA:**\n`
  exercise.execucao.forEach((passo, index) => {
    response += `${index + 1}. ${passo}\n`
  })

  response += `\n💡 **DICAS IMPORTANTES:**\n`
  exercise.dicas.forEach((dica) => {
    response += `• ${dica}\n`
  })

  response += `\n⚠️ **ERROS COMUNS A EVITAR:**\n`
  exercise.erros_comuns.forEach((erro) => {
    response += `• ${erro}\n`
  })

  return response
}

const aiResponses = {
  exercicio: [
    "Para exercícios eficazes, recomendo começar com 3 séries de 8-12 repetições. Sempre mantenha a forma correta e progrida gradualmente! 💪",
    "Ótima pergunta sobre exercícios! O ideal é focar na execução perfeita antes de aumentar a carga. Comece com pesos moderados e aumente progressivamente.",
    "Para ter resultados consistentes, combine exercícios compostos (como agachamento e supino) com isolados. Não esqueça do descanso entre as séries!",
  ],
  nutricao: [
    "Uma alimentação balanceada deve incluir proteínas magras, carboidratos complexos e gorduras saudáveis. Beba pelo menos 2L de água por dia! 🥗",
    "Nutrição é fundamental! Priorize alimentos naturais, evite ultraprocessados e faça refeições a cada 3-4 horas para manter o metabolismo ativo.",
    "Para uma dieta equilibrada: 40% carboidratos, 30% proteínas e 30% gorduras boas. Inclua frutas, verduras e legumes em todas as refeições!",
  ],
  treino: [
    "Um bom treino deve incluir: aquecimento (5-10min), exercícios principais (40-50min) e alongamento (10min). Descanse 48h entre treinos do mesmo grupo muscular! 🏋️",
    "Para resultados ótimos, varie seu treino a cada 6-8 semanas. Combine treinos de força, resistência e flexibilidade para desenvolvimento completo.",
    "Estruture seu treino: Segunda/Quarta/Sexta para musculação e Terça/Quinta para cardio. Fins de semana são para recuperação ativa!",
  ],
  peso: [
    "Para ganhar massa muscular: treino de força + superávit calórico + 1.8-2g de proteína por kg. Para perder peso: déficit calórico moderado + treino misto! ⚖️",
    "Quer emagrecer? Combine treino de força com cardio moderado e reduza 300-500 calorias da sua dieta. Seja consistente e os resultados virão!",
    "Para hipertrofia: foque em exercícios compostos, aumente progressivamente a carga e consuma proteína em todas as refeições. Paciência é chave!",
  ],
  musculacao: [
    "Para começar na musculação, é essencial avaliar sua condição física atual. Consulte um profissional para verificar possíveis restrições como hérnias, lesões ou problemas articulares! 🏥",
    "Antes de iniciar o treino de musculação, faça uma avaliação completa. Histórico de lesões, condicionamento físico e objetivos devem ser considerados para um treino seguro e eficaz.",
    "Musculação requer preparação! Avalie sua postura, flexibilidade e força base. Um profissional pode identificar desequilíbrios musculares e prevenir lesões futuras.",
  ],
  motivacao: [
    "Você está no caminho certo! Lembre-se: consistência é mais importante que perfeição. Cada treino é um passo em direção aos seus objetivos! 🌟",
    "Continue firme! Os resultados não aparecem da noite para o dia, mas cada esforço conta. Você é mais forte do que imagina!",
    "Acredite no processo! Transformação leva tempo, mas com dedicação e disciplina, você vai alcançar seus objetivos. Estou aqui para te apoiar!",
  ],
  saudacao: [
    "Olá! 👋 Sou seu assistente de fitness e estou aqui para te ajudar com treinos, nutrição e motivação. Como posso te auxiliar hoje?",
    "Oi! Que bom te ver por aqui! Estou pronto para responder suas dúvidas sobre exercícios, alimentação e saúde. O que você gostaria de saber?",
    "Bem-vindo! 😊 Estou aqui para te guiar na sua jornada fitness. Pode me perguntar sobre treinos, dieta, ou qualquer dúvida relacionada à saúde!",
  ],
  default: [
    "Interessante! Posso te ajudar com dicas sobre exercícios, nutrição, treinos personalizados ou motivação. Sobre qual tema você gostaria de conversar? 🤔",
    "Ótima pergunta! Estou aqui para te auxiliar com informações sobre fitness, alimentação saudável e bem-estar. Como posso te ajudar especificamente?",
    "Entendo sua dúvida! Para te dar a melhor resposta, me conte mais sobre seu objetivo: ganhar massa, perder peso, melhorar condicionamento ou outro?",
  ],
  // Adicionando respostas para tópicos específicos de exercício
  exercicio_especifico: [
    "Claro! Fico feliz em detalhar a execução desse exercício. Vamos lá!",
    "Entendido! Detalhes sobre a execução desse exercício a seguir:",
    "Com certeza! Vamos aprender a melhor forma de realizar este exercício.",
  ],
}

class AIContext {
  constructor() {
    this.conversationHistory = []
    this.userPreferences = {}
    this.lastTopic = null
  }

  addMessage(message, sender) {
    this.conversationHistory.push({
      message,
      sender,
      timestamp: Date.now(),
    })

    // Keep only last 10 messages for context
    if (this.conversationHistory.length > 10) {
      this.conversationHistory.shift()
    }
  }

  getContext() {
    return {
      history: this.conversationHistory,
      lastTopic: this.lastTopic,
      preferences: this.userPreferences,
    }
  }

  setTopic(topic) {
    this.lastTopic = topic
  }

  clear() {
    this.conversationHistory = []
    this.lastTopic = null
  }
}

const aiContext = new AIContext()

// Auth state management
let currentUser = null

// Enhanced Data Management System
class NutreimDatabase {
  constructor() {
    this.init()
  }

  init() {
    // Initialize database structure if not exists
    if (!this.getUsers()) {
      this.setUsers([])
    }
    if (!this.getProfiles()) {
      this.setProfiles({})
    }
    if (!this.getChatHistory()) {
      this.setChatHistory({})
    }

    // Create backup on initialization
    this.createBackup()
  }

  // User Management
  getUsers() {
    try {
      return JSON.parse(localStorage.getItem("nutreimUsers") || "[]")
    } catch (error) {
      console.error("Erro ao carregar usuários:", error)
      return []
    }
  }

  setUsers(users) {
    try {
      localStorage.setItem("nutreimUsers", JSON.stringify(users))
      return true
    } catch (error) {
      console.error("Erro ao salvar usuários:", error)
      return false
    }
  }

  // User Profiles (extended data)
  getProfiles() {
    try {
      return JSON.parse(localStorage.getItem("nutreimProfiles") || "{}")
    } catch (error) {
      console.error("Erro ao carregar perfis:", error)
      return {}
    }
  }

  setProfiles(profiles) {
    try {
      localStorage.setItem("nutreimProfiles", JSON.stringify(profiles))
      return true
    } catch (error) {
      console.error("Erro ao salvar perfis:", error)
      return false
    }
  }

  // Chat History
  getChatHistory() {
    try {
      return JSON.parse(localStorage.getItem("nutreimChatHistory") || "{}")
    } catch (error) {
      console.error("Erro ao carregar histórico de chat:", error)
      return {}
    }
  }

  setChatHistory(history) {
    try {
      localStorage.setItem("nutreimChatHistory", JSON.stringify(history))
      return true
    } catch (error) {
      console.error("Erro ao salvar histórico de chat:", error)
      return false
    }
  }

  // User Operations
  createUser(userData) {
    const users = this.getUsers()

    // Validate user data
    if (!this.validateUserData(userData)) {
      return { success: false, error: "Dados inválidos" }
    }

    // Check if user already exists
    if (users.find((u) => u.email === userData.email)) {
      return { success: false, error: "Email já cadastrado" }
    }

    // Create user with enhanced structure
    const newUser = {
      id: this.generateUserId(),
      name: this.sanitizeInput(userData.name.trim()),
      email: userData.email.toLowerCase().trim(),
      password: userData.password, // In production, this should be hashed
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true,
      loginCount: 0,
      lastLogin: null,
    }

    users.push(newUser)

    if (this.setUsers(users)) {
      // Create user profile
      this.createUserProfile(newUser.id)
      return { success: true, user: newUser }
    }

    return { success: false, error: "Erro ao salvar usuário" }
  }

  createUserProfile(userId) {
    const profiles = this.getProfiles()
    profiles[userId] = {
      userId,
      preferences: {
        theme: "light",
        notifications: true,
      },
      fitness: {
        goals: [],
        currentLevel: "beginner",
        favoriteExercises: [],
      },
      createdAt: new Date().toISOString(),
    }
    this.setProfiles(profiles)
  }

  authenticateUser(email, password) {
    const users = this.getUsers()
    const user = users.find((u) => u.email === email.toLowerCase().trim() && u.password === password && u.isActive)

    if (user) {
      // Update login stats
      user.loginCount = (user.loginCount || 0) + 1
      user.lastLogin = new Date().toISOString()
      user.updatedAt = new Date().toISOString()
      this.setUsers(users)

      return { success: true, user }
    }

    return { success: false, error: "Credenciais inválidas" }
  }

  validateUserData(userData) {
    if (!userData.name || userData.name.trim().length < 2) return false
    if (!userData.email || !this.isValidEmail(userData.email)) return false
    if (!userData.password || userData.password.length < 6) return false
    return true
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  sanitizeInput(input) {
    return input.replace(/[<>]/g, "").trim()
  }

  generateUserId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  // Chat Operations
  saveChatMessage(userId, message, sender) {
    const chatHistory = this.getChatHistory()
    if (!chatHistory[userId]) {
      chatHistory[userId] = []
    }

    chatHistory[userId].push({
      id: this.generateUserId(),
      message: this.sanitizeInput(message),
      sender, // 'user' or 'ai'
      timestamp: new Date().toISOString(),
    })

    // Keep only last 50 messages per user
    if (chatHistory[userId].length > 50) {
      chatHistory[userId] = chatHistory[userId].slice(-50)
    }

    this.setChatHistory(chatHistory)
  }

  getUserChatHistory(userId) {
    const chatHistory = this.getChatHistory()
    return chatHistory[userId] || []
  }

  // Backup and Recovery
  createBackup() {
    try {
      const backup = {
        users: this.getUsers(),
        profiles: this.getProfiles(),
        chatHistory: this.getChatHistory(),
        timestamp: new Date().toISOString(),
        version: "1.0",
      }
      localStorage.setItem("nutreimBackup", JSON.stringify(backup))
    } catch (error) {
      console.error("Erro ao criar backup:", error)
    }
  }

  restoreFromBackup() {
    try {
      const backup = JSON.parse(localStorage.getItem("nutreimBackup") || "{}")
      if (backup.users) {
        this.setUsers(backup.users)
        this.setProfiles(backup.profiles || {})
        this.setChatHistory(backup.chatHistory || {})
        return true
      }
    } catch (error) {
      console.error("Erro ao restaurar backup:", error)
    }
    return false
  }

  // Statistics
  getStats() {
    const users = this.getUsers()
    const profiles = this.getProfiles()
    const chatHistory = this.getChatHistory()

    return {
      totalUsers: users.length,
      activeUsers: users.filter((u) => u.isActive).length,
      totalProfiles: Object.keys(profiles).length,
      totalChatMessages: Object.values(chatHistory).reduce((total, msgs) => total + msgs.length, 0),
      lastBackup: localStorage.getItem("nutreimBackup")
        ? JSON.parse(localStorage.getItem("nutreimBackup")).timestamp
        : null,
    }
  }
}

// Initialize database
const nutreimDB = new NutreimDatabase()

function loadMuscleGroups() {
  const grid = document.getElementById("muscleGroupsGrid")

  const muscleGroups = {
    Bíceps: { icon: "💪", count: 5 },
    Tríceps: { icon: "💪", count: 5 },
    Peito: { icon: "🦾", count: 5 },
    Costas: { icon: "🏋️", count: 5 },
    Pernas: { icon: "🦵", count: 5 },
    Ombros: { icon: "🤸", count: 5 },
  }

  Object.entries(muscleGroups).forEach(([muscle, data]) => {
    const card = document.createElement("div")
    card.className = "muscle-group-card"
    card.onclick = () => showExercisesList(muscle)

    card.innerHTML = `
      <div class="muscle-group-header">
        <span class="muscle-group-icon">${data.icon}</span>
        <h3>${muscle}</h3>
        <span class="muscle-group-count">${data.count} exercícios</span>
      </div>
    `

    grid.appendChild(card)
  })
}

function showExercisesList(muscleGroup) {
  const muscleGroupsGrid = document.getElementById("muscleGroupsGrid")
  const exercisesListContainer = document.getElementById("exercisesListContainer")
  const selectedMuscleGroupTitle = document.getElementById("selectedMuscleGroup")
  const exercisesListGrid = document.getElementById("exercisesListGrid")

  // Esconde grid de grupos musculares
  muscleGroupsGrid.style.display = "none"

  // Mostra container de lista de exercícios
  exercisesListContainer.style.display = "block"
  selectedMuscleGroupTitle.textContent = muscleGroup

  // Limpa lista anterior
  exercisesListGrid.innerHTML = ""

  // Busca exercícios do grupo
  const exercisesList = exercises[muscleGroup] || []

  exercisesList.forEach((exerciseName) => {
    const exerciseKey = exerciseName
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

    const exerciseData = exercisesDatabase[exerciseKey]

    const item = document.createElement("div")
    item.className = "exercise-list-item"
    item.onclick = () => openExerciseModal(exerciseData || { nome: exerciseName, grupo: muscleGroup })

    item.innerHTML = `
      <div class="exercise-list-icon">
        <i class="fas fa-dumbbell"></i>
      </div>
      <div class="exercise-list-info">
        <h4>${exerciseName}</h4>
        <div class="exercise-list-meta">
          ${
            exerciseData
              ? `
            <span><i class="fas fa-signal"></i> ${exerciseData.dificuldade}</span>
            <span><i class="fas fa-tools"></i> ${exerciseData.equipamento}</span>
          `
              : ""
          }
        </div>
      </div>
    `

    exercisesListGrid.appendChild(item)
  })
}

document.getElementById("backToMuscleGroups")?.addEventListener("click", () => {
  const muscleGroupsGrid = document.getElementById("muscleGroupsGrid")
  const exercisesListContainer = document.getElementById("exercisesListContainer")

  muscleGroupsGrid.style.display = "grid"
  exercisesListContainer.style.display = "none"
})

function openExerciseModal(exercise) {
  const modal = document.getElementById("exerciseModal")

  // Preenche informações do modal
  document.getElementById("exerciseModalName").textContent = exercise.nome || "Exercício"
  document.getElementById("exerciseModalGroup").textContent = exercise.grupo || ""
  document.getElementById("exerciseModalDifficulty").textContent = exercise.dificuldade || "N/A"
  document.getElementById("exerciseModalEquipment").textContent = exercise.equipamento || "N/A"
  document.getElementById("exerciseModalDescription").textContent = exercise.descricao || "Descrição não disponível"

  // Preenche execução
  const executionList = document.getElementById("exerciseModalExecution")
  executionList.innerHTML = ""
  if (exercise.execucao && exercise.execucao.length > 0) {
    exercise.execucao.forEach((step) => {
      const li = document.createElement("li")
      li.textContent = step
      executionList.appendChild(li)
    })
  } else {
    executionList.innerHTML = "<li>Instruções não disponíveis</li>"
  }

  // Preenche dicas
  const tipsList = document.getElementById("exerciseModalTips")
  tipsList.innerHTML = ""
  if (exercise.dicas && exercise.dicas.length > 0) {
    exercise.dicas.forEach((tip) => {
      const li = document.createElement("li")
      li.textContent = tip
      tipsList.appendChild(li)
    })
  } else {
    tipsList.innerHTML = "<li>Dicas não disponíveis</li>"
  }

  // Preenche erros comuns
  const errorsList = document.getElementById("exerciseModalErrors")
  errorsList.innerHTML = ""
  if (exercise.erros_comuns && exercise.erros_comuns.length > 0) {
    exercise.erros_comuns.forEach((error) => {
      const li = document.createElement("li")
      li.textContent = error
      errorsList.appendChild(li)
    })
  } else {
    errorsList.innerHTML = "<li>Erros comuns não disponíveis</li>"
  }

  // Mostra modal
  modal.classList.add("active")
}

document.getElementById("closeExerciseModal")?.addEventListener("click", () => {
  document.getElementById("exerciseModal").classList.remove("active")
})

// Fechar modal ao clicar fora
document.getElementById("exerciseModal")?.addEventListener("click", (e) => {
  if (e.target.id === "exerciseModal") {
    document.getElementById("exerciseModal").classList.remove("active")
  }
})

// Navigation functionality
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section")
  const navButtons = document.querySelectorAll(".nav-btn")
  sections.forEach((section) => section.classList.remove("active"))
  navButtons.forEach((btn) => btn.classList.remove("active"))

  document.getElementById(sectionId).classList.add("active")
  const navButton = document.querySelector(`[data-section="${sectionId}"]`)
  if (navButton && navButton.classList.contains("nav-btn")) {
    navButton.classList.add("active")
  }

  // Load section-specific data
  handleSectionChange(sectionId)
}

function handleSectionChange(sectionId) {
  switch (sectionId) {
    case "chat":
      if (currentUser) {
        loadChatHistory()
      }
      break
    case "professionals":
      // Could load personalized recommendations here
      break
    case "exercises":
      // Could load user's favorite exercises here
      break
  }
}

// Setup navigation listeners once
function setupNavigation() {
  const navButtons = document.querySelectorAll(".nav-btn")
  const sections = document.querySelectorAll(".section")
  const heroButtons = document.querySelectorAll("[data-section]")

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const sectionId = button.getAttribute("data-section")
      showSection(sectionId)
    })
  })

  heroButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const sectionId = button.getAttribute("data-section")
      showSection(sectionId)
    })
  })
}

// Check authentication state and update UI
function checkAuth() {
  checkUserSession()
  updateUIForLoggedUser()
}

// Load content
document.addEventListener("DOMContentLoaded", () => {
  loadMuscleGroups() // Nova função
  loadProfessionals()
  setupChat()
  setupAuth()
  setupNavigation()
  checkAuth() // Renamed from checkUserSession to be more general
})

// Load Professionals
function loadProfessionals() {
  const grid = document.getElementById("professionalsGrid")

  professionals.forEach((professional, index) => {
    const card = document.createElement("div")
    card.className = "professional-card"
    card.style.cursor = "pointer"

    card.innerHTML = `
            <div class="professional-header">
                <div>
                    <div class="professional-name">${professional.name}</div>
                    <div class="specialty-badge">${professional.specialty}</div>
                </div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${professional.rating}</span>
                </div>
            </div>
            <div class="professional-description">${professional.description}</div>
            <div class="experience">
                <i class="fas fa-trophy"></i>
                ${professional.experience} de experiência
            </div>
            <button class="btn contact-btn">Ver Perfil Completo</button>
        `

    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("contact-btn")) {
        openProfileModal(professional)
      }
    })

    const contactBtn = card.querySelector(".contact-btn")
    contactBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      openProfileModal(professional)
    })

    grid.appendChild(card)
  })
}

// Load Exercises - Modified to integrate with muscle group selection
function loadExercises() {
  // This function might be redundant now with loadMuscleGroups and showExercisesList
  // Keeping it for now, but it should ideally call loadMuscleGroups
  const grid = document.getElementById("exercisesGrid") // Assuming this refers to the older structure

  // If the old grid exists, we might want to remove it or adapt it
  if (grid) {
    grid.innerHTML = "" // Clear old content if any
    // Optionally, could populate the muscle groups grid here if the DOM structure is changed
    loadMuscleGroups()
  }
}

function openProfileModal(professional) {
  const modal = document.getElementById("profileModal")

  // Populate header
  document.getElementById("profileName").textContent = professional.name
  document.getElementById("profileSpecialty").textContent = professional.specialty
  document.getElementById("profileRating").textContent = professional.rating
  document.getElementById("profileExperience").textContent = professional.experience + " de experiência"

  // Populate about tab
  document.getElementById("profileDescription").textContent = professional.description

  // Populate certifications
  const certificationsContainer = document.getElementById("profileCertifications")
  certificationsContainer.innerHTML =
    '<div class="certifications-list">' +
    professional.certifications
      .map(
        (cert) => `
      <div class="certification-item">
        <i class="fas fa-certificate"></i>
        <span>${cert}</span>
      </div>
    `,
      )
      .join("") +
    "</div>"

  // Populate specialties
  const specialtiesContainer = document.getElementById("profileSpecialties")
  specialtiesContainer.innerHTML = professional.specialties
    .map(
      (spec) => `
    <div class="specialty-tag">
      <i class="fas fa-check"></i>
      <span>${spec}</span>
    </div>
  `,
    )
    .join("")

  // Populate portfolio
  const portfolioContainer = document.getElementById("profilePortfolio")
  portfolioContainer.innerHTML = professional.portfolio
    .map(
      (item) => `
    <div class="portfolio-item">
      <div class="portfolio-image">
        <i class="fas fa-briefcase"></i>
      </div>
      <div class="portfolio-info">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    </div>
  `,
    )
    .join("")

  // Populate reviews
  document.getElementById("reviewsRating").textContent = professional.rating
  document.getElementById("reviewsStars").innerHTML =
    "★".repeat(Math.floor(professional.rating)) + (professional.rating % 1 >= 0.5 ? "½" : "")
  document.getElementById("reviewsCount").textContent = `Baseado em ${professional.reviews.length} avaliações`

  const reviewsContainer = document.getElementById("profileReviews")
  reviewsContainer.innerHTML = professional.reviews
    .map(
      (review) => `
    <div class="review-item">
      <div class="review-header">
        <div class="review-author">
          <div class="review-avatar">
            <i class="fas fa-user"></i>
          </div>
          <div class="review-author-info">
            <h4>${review.author}</h4>
            <div class="review-date">${review.date}</div>
          </div>
        </div>
        <div class="review-rating">
          ${"★".repeat(review.rating)}
        </div>
      </div>
      <div class="review-text">${review.text}</div>
    </div>
  `,
    )
    .join("")

  // Populate contact info
  document.getElementById("profileEmail").textContent = professional.email
  document.getElementById("profilePhone").textContent = professional.phone
  document.getElementById("profileLocation").textContent = professional.location

  // Show modal
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeProfileModal() {
  const modal = document.getElementById("profileModal")
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

document.getElementById("closeProfileModal").addEventListener("click", closeProfileModal)

document.getElementById("profileModal").addEventListener("click", (e) => {
  if (e.target.id === "profileModal") {
    closeProfileModal()
  }
})

document.querySelectorAll(".profile-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.tab

    // Remove active class from all tabs and contents
    document.querySelectorAll(".profile-tab").forEach((t) => t.classList.remove("active"))
    document.querySelectorAll(".profile-tab-content").forEach((c) => c.classList.remove("active"))

    // Add active class to clicked tab and corresponding content
    tab.classList.add("active")
    document.getElementById(tabName + "Tab").classList.add("active")
  })
})

document.getElementById("contactProfessionalForm").addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Mensagem enviada com sucesso! O profissional entrará em contato em breve.")
  e.target.reset()
})

function setupChat() {
  const chatInput = document.getElementById("chatInput")
  const sendBtn = document.getElementById("sendBtn")
  const chatMessages = document.getElementById("chatMessages")

  function sendMessage() {
    const message = chatInput.value.trim()
    if (!message) return

    // Add user message
    addMessage(message, "user")

    // Save user message to database if logged in
    if (currentUser) {
      nutreimDB.saveChatMessage(currentUser.id, message, "user")
    }

    // Add to AI context
    aiContext.addMessage(message, "user")

    chatInput.value = ""

    // Show typing indicator
    showTypingIndicator()

    // Simulate AI response with realistic delay
    setTimeout(
      () => {
        hideTypingIndicator()
        const response = getEnhancedAIResponse(message)
        addMessage(response, "ai")

        // Save AI response to database if logged in
        if (currentUser) {
          nutreimDB.saveChatMessage(currentUser.id, response, "ai")
        }

        // Add to AI context
        aiContext.addMessage(response, "ai")
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  function addMessage(text, sender) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${sender}`

    const contentDiv = document.createElement("div")
    contentDiv.className = "message-content"

    contentDiv.innerHTML = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Negrito
      .replace(/\n/g, "<br>") // Quebras de linha

    messageDiv.appendChild(contentDiv)
    chatMessages.appendChild(messageDiv)

    // Remove welcome message if it exists
    const welcome = chatMessages.querySelector(".chat-welcome")
    if (welcome) {
      welcome.remove()
    }

    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement("div")
    typingDiv.className = "message ai typing-message"
    typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `
    chatMessages.appendChild(typingDiv)
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  function hideTypingIndicator() {
    const typingMessage = chatMessages.querySelector(".typing-message")
    if (typingMessage) {
      typingMessage.remove()
    }
  }

  function getEnhancedAIResponse(message) {
    const lowerMessage = message.toLowerCase()

    const exerciseQuestionKeywords = [
      "como fazer",
      "como executar",
      "forma correta",
      "execução",
      "executar",
      "técnica",
      "postura",
      "movimento",
      "jeito certo",
      "maneira correta",
      "passo a passo",
      "instrução",
      "ensina",
      "tutorial",
    ]

    const isExerciseQuestion = exerciseQuestionKeywords.some((keyword) => lowerMessage.includes(keyword))

    if (isExerciseQuestion) {
      // Tenta encontrar o exercício mencionado na mensagem
      const exercise = findExercise(lowerMessage)

      if (exercise) {
        aiContext.setTopic("exercicio_especifico")
        return formatExerciseResponse(exercise)
      } else {
        // Se não encontrou exercício específico, tenta identificar pelo menos o grupo muscular
        const grupoMuscular = Object.keys(exercises).find((grupo) => lowerMessage.includes(grupo.toLowerCase()))

        if (grupoMuscular) {
          const exerciciosDoGrupo = exercises[grupoMuscular].slice(0, 3).join(", ")
          return `Posso te ajudar com exercícios de ${grupoMuscular}! Temos: ${exerciciosDoGrupo}. Sobre qual deles você quer saber a forma correta de executar? 💪`
        }

        return `Posso te ensinar a forma correta de executar vários exercícios! Me diga qual exercício você quer aprender (por exemplo: "como fazer supino reto" ou "forma correta do agachamento"). 🏋️`
      }
    }

    const mentionedExercise = findExercise(lowerMessage)
    if (mentionedExercise && lowerMessage.split(" ").length <= 5) {
      aiContext.setTopic("exercicio_especifico")
      return formatExerciseResponse(mentionedExercise)
    }

    // Greeting detection
    const greetings = ["oi", "olá", "ola", "hey", "bom dia", "boa tarde", "boa noite", "e ai", "eai"]
    if (greetings.some((greeting) => lowerMessage === greeting || lowerMessage.startsWith(greeting + " "))) {
      return getRandomResponse("saudacao")
    }

    // Musculação/Academia - highest priority for safety
    const musculacaoKeywords = [
      "musculacao",
      "musculação",
      "academia",
      "começar a treinar",
      "iniciar treino",
      "primeira vez",
      "nunca treinei",
    ]
    if (musculacaoKeywords.some((keyword) => lowerMessage.includes(keyword))) {
      aiContext.setTopic("musculacao")
      return getRandomResponse("musculacao")
    }

    // Exercise specific
    const exerciseKeywords = [
      "exercicio",
      "exercício",
      "serie",
      "série",
      "repeticao",
      "repetição",
      "execucao",
      "execução",
      "forma correta",
      "como fazer",
    ]
    if (exerciseKeywords.some((keyword) => lowerMessage.includes(keyword))) {
      aiContext.setTopic("exercicio")
      return getRandomResponse("exercicio")
    }

    // Nutrition
    const nutritionKeywords = [
      "nutricao",
      "nutrição",
      "dieta",
      "alimentacao",
      "alimentação",
      "comida",
      "comer",
      "proteina",
      "proteína",
      "carboidrato",
      "gordura",
    ]
    if (nutritionKeywords.some((keyword) => lowerMessage.includes(keyword))) {
      aiContext.setTopic("nutricao")
      return getRandomResponse("nutricao")
    }

    // Training routine
    const trainingKeywords = [
      "treino",
      "rotina",
      "programa",
      "periodizacao",
      "periodização",
      "divisao",
      "divisão",
      "frequencia",
      "frequência",
    ]
    if (trainingKeywords.some((keyword) => lowerMessage.includes(keyword))) {
      aiContext.setTopic("treino")
      return getRandomResponse("treino")
    }

    // Weight goals
    const weightKeywords = [
      "peso",
      "emagrecer",
      "engordar",
      "massa",
      "hipertrofia",
      "definicao",
      "definição",
      "secar",
      "bulking",
      "cutting",
    ]
    if (weightKeywords.some((keyword) => lowerMessage.includes(keyword))) {
      aiContext.setTopic("peso")
      return getRandomResponse("peso")
    }

    // Motivation
    const motivationKeywords = [
      "motivacao",
      "motivação",
      "desanimo",
      "desânimo",
      "cansado",
      "difícil",
      "dificil",
      "desistir",
      "resultado",
    ]
    if (motivationKeywords.some((keyword) => lowerMessage.includes(keyword))) {
      aiContext.setTopic("motivacao")
      return getRandomResponse("motivacao")
    }

    // Context-aware follow-up
    if (aiContext.lastTopic && lowerMessage.length < 30) {
      const followUpWords = ["mais", "como", "quanto", "quando", "onde", "qual", "explica", "detalhe"]
      if (followUpWords.some((word) => lowerMessage.includes(word))) {
        // If the last topic was 'exercicio_especifico', continue with it.
        // Otherwise, use the general topic.
        return getRandomResponse(
          aiContext.lastTopic === "exercicio_especifico" ? aiContext.lastTopic : aiContext.lastTopic || "default",
        )
      }
    }

    // Default response
    return getRandomResponse("default")
  }

  function getRandomResponse(category) {
    const responses = aiResponses[category]
    if (Array.isArray(responses)) {
      return responses[Math.floor(Math.random() * responses.length)]
    }
    return responses
  }

  sendBtn.addEventListener("click", sendMessage)

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  })
}

function loadChatHistory() {
  if (!currentUser) return

  const chatMessages = document.getElementById("chatMessages")
  const history = nutreimDB.getUserChatHistory(currentUser.id)

  // Clear current messages except welcome
  const existingMessages = chatMessages.querySelectorAll(".message")
  existingMessages.forEach((msg) => msg.remove())

  // Load history messages
  history.forEach((msg) => {
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${msg.sender}`
    const contentDiv = document.createElement("div")
    contentDiv.className = "message-content"
    // Ensure history messages are also rendered with HTML formatting
    contentDiv.innerHTML = msg.message
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Negrito
      .replace(/\n/g, "<br>") // Quebras de linha
    messageDiv.appendChild(contentDiv)
    chatMessages.appendChild(messageDiv)
  })

  // If no history, show welcome message
  if (history.length === 0) {
    const welcome = chatMessages.querySelector(".chat-welcome")
    if (!welcome) {
      const welcomeDiv = document.createElement("div")
      welcomeDiv.className = "chat-welcome"
      welcomeDiv.innerHTML = `
        <i class="fas fa-heart"></i>
        <p>Olá ${currentUser.name.split(" ")[0]}! Sou seu assistente de fitness. Como posso te ajudar hoje?</p>
      `
      chatMessages.appendChild(welcomeDiv)
    }
  }

  chatMessages.scrollTop = chatMessages.scrollHeight
}

// Contact button functionality
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("contact-btn")) {
    const professionalCard = e.target.closest(".professional-card")
    const professionalName = professionalCard?.querySelector(".professional-name")?.textContent

    if (currentUser) {
      showMessage(
        `Olá ${currentUser.name.split(" ")[0]}! Em breve você poderá entrar em contato com ${professionalName || "este profissional"}.`,
        "success",
      )
    } else {
      showMessage("Faça login para entrar em contato com profissionais!", "error")
      // Automatically switch to auth section
      setTimeout(() => {
        document.querySelectorAll(".section").forEach((section) => section.classList.remove("active"))
        document.getElementById("auth").classList.add("active")
        document.querySelectorAll(".nav-btn").forEach((btn) => btn.classList.remove("active"))
        document.querySelector('[data-section="auth"]').classList.add("active")
      }, 1500)
    }
  }
})

// Authentication functions
function checkUserSession() {
  const savedUser = localStorage.getItem("nutreimUser")
  if (savedUser) {
    try {
      const userData = JSON.parse(savedUser)

      // Validate if user still exists in database
      const users = nutreimDB.getUsers()
      const existingUser = users.find((u) => u.id === userData.id && u.isActive)

      if (existingUser) {
        currentUser = existingUser
        // updateUIForLoggedUser() // Call this in checkAuth after all setup

        // Update stored user data if needed
        if (JSON.stringify(userData) !== JSON.stringify(existingUser)) {
          localStorage.setItem("nutreimUser", JSON.stringify(existingUser))
        }
      } else {
        // User no longer exists or is inactive, clear session
        localStorage.removeItem("nutreimUser")
        currentUser = null
      }
    } catch (error) {
      console.error("Erro ao verificar sessão:", error)
      localStorage.removeItem("nutreimUser")
      currentUser = null
    }
  }
}

function updateUIForLoggedUser() {
  const navMenu = document.querySelector(".nav-menu")
  const userSection = document.getElementById("userSection")
  const userName = document.getElementById("userName")
  const authButton = document.querySelector('[data-section="auth"]')

  if (currentUser) {
    // Manter navegação visível mas esconder botão "Conta"
    navMenu.style.display = "flex"
    if (authButton) {
      authButton.style.display = "none"
    }
    userSection.style.display = "flex"
    userName.textContent = currentUser.name.split(" ")[0]

    // Carregar histórico de chat se estiver na seção de chat
    const chatSection = document.getElementById("chat")
    if (chatSection && chatSection.classList.contains("active")) {
      loadChatHistory()
    }
  } else {
    navMenu.style.display = "flex"
    if (authButton) {
      authButton.style.display = "flex"
    }
    userSection.style.display = "none"
  }
}

function logout() {
  currentUser = null
  localStorage.removeItem("nutreimUser")
  aiContext.clear() // Clear AI context on logout
  updateUIForLoggedUser()

  // Reset to home section
  document.querySelectorAll(".section").forEach((section) => section.classList.remove("active"))
  document.getElementById("home").classList.add("active")
  document.querySelectorAll(".nav-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelector('[data-section="home"]').classList.add("active")

  showMessage("Logout realizado com sucesso!", "success")
}

function setupAuth() {
  const authTabs = document.querySelectorAll(".auth-tab")
  const loginForm = document.getElementById("loginForm")
  const registerForm = document.getElementById("registerForm")
  const loginFormElement = document.getElementById("loginFormElement")
  const registerFormElement = document.getElementById("registerFormElement")
  const logoutBtn = document.getElementById("logoutBtn")

  // Tab switching
  authTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabType = tab.getAttribute("data-tab")

      authTabs.forEach((t) => t.classList.remove("active"))
      tab.classList.add("active")

      if (tabType === "login") {
        loginForm.classList.remove("hidden")
        registerForm.classList.add("hidden")
      } else {
        loginForm.classList.add("hidden")
        registerForm.classList.remove("hidden")
      }

      clearMessages()
    })
  })

  // Login form submission
  loginFormElement.addEventListener("submit", (e) => {
    e.preventDefault()
    handleLogin()
  })

  // Register form submission
  registerFormElement.addEventListener("submit", (e) => {
    e.preventDefault()
    handleRegister()
  })

  // Logout functionality
  logoutBtn.addEventListener("click", logout)

  // Real-time validation
  setupRealTimeValidation()
}

function handleLogin() {
  const email = document.getElementById("loginEmail").value
  const password = document.getElementById("loginPassword").value
  const rememberMe = document.getElementById("rememberMe").checked
  const submitBtn = document.querySelector('#loginFormElement button[type="submit"]')

  clearErrors()
  addLoadingState(submitBtn)

  // Basic validation using new system
  if (!nutreimDB.isValidEmail(email)) {
    showFieldError("loginEmailError", "Por favor, insira um e-mail válido")
    removeLoadingState(submitBtn)
    return
  }

  if (password.length < 6) {
    showFieldError("loginPasswordError", "A senha deve ter pelo menos 6 caracteres")
    removeLoadingState(submitBtn)
    return
  }

  // Simulate network delay for better UX
  setTimeout(() => {
    // Use enhanced authentication
    const result = nutreimDB.authenticateUser(email, password)

    removeLoadingState(submitBtn)

    if (result.success) {
      currentUser = result.user
      if (rememberMe) {
        localStorage.setItem("nutreimUser", JSON.stringify(result.user))
      }
      updateUIForLoggedUser()

      // Show personalized welcome message
      const firstName = result.user.name.split(" ")[0]
      const loginCount = result.user.loginCount
      let welcomeMsg = `Bem-vindo de volta, ${firstName}! 🎉`

      if (loginCount === 1) {
        welcomeMsg = `Bem-vindo pela primeira vez, ${firstName}! 🌟`
      } else if (loginCount > 10) {
        welcomeMsg = `Ótimo te ver novamente, ${firstName}! 💪 (${loginCount}º acesso)`
      }

      showMessage(welcomeMsg, "success")

      // Switch to home section with navigation reset
      setTimeout(() => {
        document.querySelectorAll(".section").forEach((section) => section.classList.remove("active"))
        document.getElementById("home").classList.add("active")
        document.querySelectorAll(".nav-btn").forEach((btn) => btn.classList.remove("active"))
        document.querySelector('[data-section="home"]').classList.add("active")
      }, 1500)
    } else {
      showMessage(result.error || "E-mail ou senha incorretos!", "error")
    }
  }, 800)
}

function handleRegister() {
  const name = document.getElementById("registerName").value
  const email = document.getElementById("registerEmail").value
  const password = document.getElementById("registerPassword").value
  const confirmPassword = document.getElementById("registerConfirmPassword").value
  const agreeTerms = document.getElementById("agreeTerms").checked
  const submitBtn = document.querySelector('#registerFormElement button[type="submit"]')

  clearErrors()
  addLoadingState(submitBtn)

  // Validation
  let isValid = true

  if (name.length < 2) {
    showFieldError("registerNameError", "Nome deve ter pelo menos 2 caracteres")
    isValid = false
  }

  if (!nutreimDB.isValidEmail(email)) {
    showFieldError("registerEmailError", "Por favor, insira um e-mail válido")
    isValid = false
  }

  if (password.length < 6) {
    showFieldError("registerPasswordError", "A senha deve ter pelo menos 6 caracteres")
    isValid = false
  }

  if (password !== confirmPassword) {
    showFieldError("registerConfirmPasswordError", "As senhas não coincidem")
    isValid = false
  }

  if (!agreeTerms) {
    showMessage("Você deve concordar com os termos de uso", "error")
    isValid = false
  }

  if (!isValid) {
    removeLoadingState(submitBtn)
    return
  }

  // Simulate network delay
  setTimeout(() => {
    // Use enhanced user creation system
    const result = nutreimDB.createUser({
      name,
      email,
      password,
    })

    removeLoadingState(submitBtn)

    if (result.success) {
      currentUser = result.user
      localStorage.setItem("nutreimUser", JSON.stringify(result.user))
      updateUIForLoggedUser()

      const firstName = name.split(" ")[0]
      showMessage(`🎉 Conta criada com sucesso! Bem-vindo ao Nutrein, ${firstName}!`, "success")

      // Switch to home section with navigation reset
      setTimeout(() => {
        document.querySelectorAll(".section").forEach((section) => section.classList.remove("active"))
        document.getElementById("home").classList.add("active")
        document.querySelectorAll(".nav-btn").forEach((btn) => btn.classList.remove("active"))
        document.querySelector('[data-section="home"]').classList.add("active")
      }, 1500)
    } else {
      if (result.error === "Email já cadastrado") {
        showFieldError("registerEmailError", "Este e-mail já está cadastrado")
      } else {
        showMessage(result.error || "Erro ao criar conta", "error")
      }
    }
  }, 1000)
}

function setupRealTimeValidation() {
  const inputs = document.querySelectorAll(".form-group input")

  inputs.forEach((input) => {
    input.addEventListener("blur", () => validateField(input))
    input.addEventListener("input", () => {
      if (input.classList.contains("error")) {
        validateField(input)
      }
    })
  })
}

function validateField(input) {
  const value = input.value
  let isValid = true
  let errorMessage = ""

  switch (input.id) {
    case "loginEmail":
    case "registerEmail":
      isValid = nutreimDB.isValidEmail(value)
      errorMessage = "E-mail inválido"
      break
    case "loginPassword":
    case "registerPassword":
      isValid = value.length >= 6
      errorMessage = "Senha deve ter pelo menos 6 caracteres"
      break
    case "registerName":
      isValid = value.length >= 2
      errorMessage = "Nome deve ter pelo menos 2 caracteres"
      break
    case "registerConfirmPassword":
      const password = document.getElementById("registerPassword").value
      isValid = value === password
      errorMessage = "Senhas não coincidem"
      break
  }

  if (isValid) {
    input.classList.remove("error")
    input.classList.add("success")
    hideFieldError(input.id + "Error")
  } else {
    input.classList.remove("success")
    input.classList.add("error")
    if (value.length > 0) {
      showFieldError(input.id + "Error", errorMessage)
    }
  }
}

function showFieldError(fieldId, message) {
  const errorElement = document.getElementById(fieldId)
  if (errorElement) {
    errorElement.textContent = message
    errorElement.classList.add("show")
  }
}

function hideFieldError(fieldId) {
  const errorElement = document.getElementById(fieldId)
  if (errorElement) {
    errorElement.classList.remove("show")
  }
}

function clearErrors() {
  document.querySelectorAll(".form-error").forEach((error) => {
    error.classList.remove("show")
  })
  document.querySelectorAll(".form-group input").forEach((input) => {
    input.classList.remove("error", "success")
  })
}

function showMessage(message, type) {
  // Create toast notification
  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <i class="fas fa-${type === "success" ? "check-circle" : "exclamation-circle"}"></i>
      ${message}
    </div>
  `

  document.body.appendChild(toast)

  // Show toast
  setTimeout(() => toast.classList.add("show"), 100)

  // Hide and remove toast
  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast)
      }
    }, 300)
  }, 3000)

  // Also update auth message for mobile users
  const messageElement = document.getElementById("authMessage")
  if (messageElement) {
    messageElement.textContent = message
    messageElement.className = `auth-message ${type}`

    setTimeout(() => {
      messageElement.textContent = ""
      messageElement.className = "auth-message"
    }, 3000)
  }
}

function clearMessages() {
  const messageElement = document.getElementById("authMessage")
  if (messageElement) {
    messageElement.textContent = ""
    messageElement.className = "auth-message"
  }

  // Remove any existing toasts
  document.querySelectorAll(".toast").forEach((toast) => {
    toast.classList.remove("show")
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast)
      }
    }, 300)
  })
}

// Add loading states to forms
function addLoadingState(button) {
  if (button) {
    button.classList.add("loading")
    button.disabled = true
  }
}

function removeLoadingState(button) {
  if (button) {
    button.classList.remove("loading")
    button.disabled = false
  }
}
