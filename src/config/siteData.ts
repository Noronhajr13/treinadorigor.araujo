import { SiteData } from '../types';

export const siteData: SiteData = {
  company: {
    name: "Treinador Igor Araújo",
    logo: "/logo.png",
    tagline: "Transforme seu corpo, transforme sua vida",
    description: "Personal Trainer e Consultor especializado em treinos personalizados e orientação nutricional para alcançar seus objetivos.",
  },
  hero: {
    title: "Consultoria online",
    subtitle: "Atendimento personalizado para cada cliente, treinamento e nutrição sob medida.",
    cta: "Começar agora",
  },
  services: [
    {
      id: "service-1",
      title: "Treino Completo",
      description: "Treino personalizado com acompanhamento completo",
      icon: "💪",
      features: [
        "Treino personalizado",
        "Avaliação física completa",
        "Ajustes semanais",
        "Resultados garantidos"
      ]
    },
    {
      id: "service-2",
      title: "Dieta personalizada",
      description: "Plano alimentar adaptado às suas necessidades e objetivos",
      icon: "🍎",
      features: [
        "Avaliação nutricional completa",
        "Plano alimentar personalizado",
        "Acompanhamento nutricional",
        "Garantia de resultados"
      ]
    },
    {
      id: "service-3",
      title: "Acompanhamento Online",
      description: "Acesso ao app com treinos personalizados e acompanhamento",
      icon: "📱",
      features: [
        "App exclusivo com treinos",
        "Vídeos explicativos",
        "Progressão automática",
        "Suporte via whatsapp"
      ]
    }
  ],
  products: [
    {
      id: "product-1",
      title: "SUPER TREINO 90D",
      description: "O Super Treino 90D será uma jornada transformadora para fortalecer seu corpo, elevar sua autoconfiança e alcançar um nível de condicionamento físico que você nunca imaginou ser possível. Então, prepare-se para suar, se desafiar e se surpreender com os resultados que você pode conquistar. Ah, e o melhor: você irá pagar aproximadamente 1 REAL POR DIA. Quer oportunidade melhor do que essa?",
      image: "/supertreino.png",
      url: "https://pay.kiwify.com.br/I901axS"
    },
    {
      id: "product-2",
      title: "XCELERATE: DESAFIO TRIMESTRAL",
      description: "Transforme completamente seu corpo em apenas 3 meses com o Programa Intensivo XCELERATE. Treinos avançados, estratégias eficazes e suporte para alcançar resultados impressionantes. Adquira agora e alcance o corpo dos seus sonhos! E mais uma vez, por um preço super acessível.",
      image: "/xcelerate.png",
      url: "https://pay.kiwify.com.br/iDgjAr0"
    },
    {
      id: "product-3",
      title: "TRANSFORMAÇÃO 24",
      description: "Transformação 24: Desafio de emagrecimento saudável. Programa online de 24 dias para perda de peso sustentável e saudável.",
      image: "/transformacao.png",
      url: "https://pay.kiwify.com.br/VYsmZcb"
    },
    {
      id: "product-4",
      title: "EBOOK: Comendo Saudável: Coma bem, Esteja bem",
      description: "Por que comer de forma saudável? Quais os perigos das “dietas da moda”? Quais os benefícios de comer frutas e vegetais? Quais os perigos dos ultraprocessados? Você irá entender sua relação com a comida e tirar várias dúvidas sobre os alimentos e a alimentação. Tudo isso em somente 40 páginas. Tá preparado?",
      image: "/ebook.png",
      url: "https://pay.kiwify.com.br/9YSQRro"
    }
  ],
  about: {
    title: "Sobre o Igor",
    description: "Personal Trainer certificado com experiência em transformações corporais. Especialista em emagrecimento, ganho de massa muscular e performance esportiva. Minha missão é ajudar você a alcançar seus objetivos de forma sustentável e saudável.",
    image: "/igor.png",
    highlights: [
      "Certificado CREF ativo",
      "Mais de 500 alunos transformados",
      "Especialização em Nutrição Esportiva",
      "Método comprovado de resultados"
    ]
  },
  testimonials: [
    {
      id: "test-1",
      name: "Maria Silva",
      role: "Emagreceu 15kg",
      content: "Com o Igor consegui perder 15kg em 4 meses! Além do peso, ganhei disposição e autoestima. Treinos desafiadores mas sempre respeitando meus limites.",
      rating: 5
    },
    {
      id: "test-2",
      name: "Carlos Mendes",
      role: "Ganhou 8kg de músculo",
      content: "Estava há anos tentando ganhar massa muscular sem sucesso. Com o plano do Igor, ganhei 8kg de músculo limpo em 6 meses. Profissional excepcional!",
      rating: 5
    },
    {
      id: "test-3",
      name: "Ana Beatriz",
      role: "Conquistou seu primeiro shape",
      content: "Nunca pensei que conseguiria ter um corpo definido. O Igor me guiou em cada passo e hoje tenho o shape dos meus sonhos. Gratidão eterna!",
      rating: 5
    }
  ],
  contact: {
    title: "Vamos Começar sua Transformação?",
    description: "Entre em contato comigo e dê o primeiro passo para conquistar o corpo dos seus sonhos!",
    phone: "(34) 99970-4771",
    email: "igor@personaltrainer.com.br",
    address: "Uberlândia, MG - Atendimento Presencial e Online",
    social: {
      instagram: "https://www.instagram.com/igoraraujo.consultoria/",
      whatsapp: "https://wa.me/5534999704771"
    }
  }
};