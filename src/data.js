import _ from 'lodash';

export const CANDIDATOS = [{
  name: "G. Boulos",
  nick: "boulos",
  responses: {
    trab: -1,
    prev: -1,
    teto: -1,
    fortunas: 1,
    desenvolvimentismo: 1,
    controle_gastos: -1,
    combustivel: -1,
    partilha: -1,
    isencao_fiscal: -1,
    privatizacao_eletrobras: -1,
    sus: 1,
    universidades: 1,
    pl_veneno: -1,
    aborto: 1,
    desarmamento: 1,
    intervencao: -1,
    maioridade: -1,
    maconha: 1,
    escola_sem_partido: -1,
    familia: -1,
    agraria: 1,
    venezuela: -1,
  }
}, {
  name: "Manuela D'avila",
  nick: "manuela",
  responses: {
    trab: -1,
    prev: -1,
    teto: -1,
    fortunas: 1,
    desenvolvimentismo: 1,
    controle_gastos: -1,
    combustivel: -1,
    partilha: -1,
    isencao_fiscal: -1,
    privatizacao_eletrobras: -1,
    sus: 1,
    universidades: 1,
    pl_veneno: -1,
    aborto: 1,
    desarmamento: 1,
    intervencao: -1,
    maioridade: -1,
    maconha: 1,
    escola_sem_partido: -1,
    familia: -1,
    agraria: 1,
    venezuela: -1,
  }
}, {
  name: "Lula",
  nick: "lula",
  responses: {
    trab: -1,
    prev: -1,
    teto: -1,
    fortunas: 1,
    desenvolvimentismo: 1,
    controle_gastos: null,
    combustivel: -1,
    partilha: -1,
    isencao_fiscal: -1,
    privatizacao_eletrobras: -1,
    sus: 1,
    universidades: 1,
    pl_veneno: -1,
    aborto: 0,
    desarmamento: 1,
    intervencao: -1,
    maioridade: -1,
    maconha: 1,
    escola_sem_partido: -1,
    familia: -1,
    agraria: 1,
    venezuela: -1,
  }
}, {
  name: "Ciro Gomes",
  nick: "ciro",
  responses: {
    trab: -1,
    prev: 0,
    teto: -1,
    fortunas: 1,
    desenvolvimentismo: 1,
    controle_gastos: 0,
    combustivel: -1,
    partilha: -1,
    isencao_fiscal: -1,
    privatizacao_eletrobras: -1,
    sus: 1,
    universidades: 1,
    pl_veneno: -1,
    aborto: 1,
    desarmamento: 1,
    intervencao: 1,
    maioridade: -1,
    maconha: 1,
    escola_sem_partido: -1,
    familia: -1,
    agraria: 0,
    venezuela: -1,
  }
}, {
  name: "Marina Silva",
  nick: "marina",
  responses: {
    trab: -1,
    prev: 0,
    teto: -1,
    fortunas: -1,
    desenvolvimentismo: 0,
    controle_gastos: 0,
    combustivel: -1,
    partilha: -1,
    isencao_fiscal: -1,
    privatizacao_eletrobras: 0,
    sus: 0,
    universidades: 1,
    pl_veneno: -1,
    aborto: 1,
    desarmamento: 1,
    intervencao: 1,
    maioridade: -1,
    maconha: 0,
    escola_sem_partido: 0,
    familia: -1,
    agraria: 1,
    venezuela: 1,
  }
}, {
  name: "Álvaro Dias",
  nick: "alvaro",
  responses: {
    trab: 0,
    prev: 1,
    teto: 1,
    fortunas: -1,
    desenvolvimentismo: -1,
    controle_gastos: 1,
    combustivel: -1,
    partilha: 1,
    isencao_fiscal: 1,
    privatizacao_eletrobras: 1,
    sus: null,
    universidades: -1,
    pl_veneno: 0,
    aborto: 0,
    desarmamento: -1,
    intervencao: 1,
    maioridade: 1,
    maconha: -1,
    escola_sem_partido: 0,
    familia: 0,
    agraria: -1,
    venezuela: 1,
  }
}, {
  name: "Geraldo Alckmin",
  nick: "alckmin",
  responses: {
    trab: 1,
    prev: 1,
    teto: 1,
    fortunas: -1,
    desenvolvimentismo: -1,
    controle_gastos: 1,
    combustivel: 1,
    partilha: 1,
    isencao_fiscal: 1,
    privatizacao_eletrobras: 1,
    sus: 0,
    universidades: -1,
    pl_veneno: 1,
    aborto: 0,
    desarmamento: 1,
    intervencao: 1,
    maioridade: 1,
    maconha: -1,
    escola_sem_partido: null,
    familia: 0,
    agraria: 0,
    venezuela: 1,
  }
}, {
  name: "J. Amoedo",
  nick: "amoedo",
  responses: {
    trab: 1,
    prev: 1,
    teto: 1,
    fortunas: -1,
    desenvolvimentismo: -1,
    controle_gastos: 1,
    combustivel: 1,
    partilha: 1,
    isencao_fiscal: null,
    privatizacao_eletrobras: 1,
    sus: -1,
    universidades: -1,
    pl_veneno: 1,
    aborto: -1,
    desarmamento: -1,
    intervencao: 1,
    maioridade: 1,
    maconha: 0,
    escola_sem_partido: -1,
    familia: 0,
    agraria: -1,
    venezuela: 1,
  }
}, {
  name: "Jair Bolsonaro",
  nick: "bolsonaro",
  responses: {
    trab: 1,
    prev: 1,
    teto: 1,
    fortunas: -1,
    desenvolvimentismo: 0,
    controle_gastos: 1,
    combustivel: 1,
    partilha: 1,
    isencao_fiscal: 1,
    privatizacao_eletrobras: 1,
    sus: 0,
    universidades: -1,
    pl_veneno: 1,
    aborto: -1,
    desarmamento: -1,
    intervencao: 1,
    maioridade: 1,
    maconha: -1,
    escola_sem_partido: 1,
    familia: 1,
    agraria: -1,
    venezuela: 1,
  }
}]

export const QUESTIONS = [
  {
    name: "Reforma Trabalhista (terceirização e CLT alterada)",
    key: "trab",
  },
  {
    name: "Reforma da Previdência (maior contribuição dos trabalhadores)",
    key: "prev",
  },
  {
    name: "PEC do Teto (congelamento dos gastos serviços públicos)",
    key: "teto",
  },
  {
    name: "Taxação de grandes heranças e fortunas",
    key: "fortunas",
  },
  {
    name: "Desenvolvimento (investimento direto Estatal na economia)",
    key: "desenvolvimentismo",
  },
  {
    name: "Prioridade ao controle de gastos (ajuste fiscal)",
    key: "controle_gastos",
  },
  {
    name: "Preços combustível segundo mercado (flutuação internacional)",
    key: "combustivel",
  },
  {
    name: "Fim do regime de partilha (Petrobrás sem prioridade no Pré-sal)",
    key: "partilha",
  },
  {
    name: "Isenção fiscal a petroleiras estrangeiras (MP do trilhão)",
    key: "isencao_fiscal",
  },
  {
    name: "Privatização da Eletrobras (distribuidoras de energia)",
    key: "privatizacao_eletrobras",
  },
  {
    name: "Maior Investimento no SUS (público e gratuito)",
    key: "sus",
  },
  {
    name: "Maior Investimento em escolas e universidades públicas",
    key: "universidades",
  },
  {
    name: "Redução do controle atual sobre Agrotóxicos (PL do Veneno)",
    key: "pl_veneno",
  },
  {
    name: "Descriminalização do Aborto (impedir prisões de quem aborta)",
    key: "aborto",
  },
  {
    name: "Desarmamento (restrições atuais para acesso a armas de fogo)",
    key: "desarmamento",
  },
  {
    name: "Intervenção militar Rio (exército chefiando Segurança Pública)",
    key: "intervencao",
  },
  {
    name: "Reduçnao da maioridade penal (para 16 anos)",
    key: "maioridade",
  },
  {
    name: "Descriminalização da maconha (legalização do consumo)",
    key: "maconha",
  },
  {
    name: "Escola sem partido (priobição de professores opinarem em sala)",
    key: "escola_sem_partido",
  },
  {
    name: "Estatuto da Família (não reconhecimento de famílias LGBT)",
    key: "familia",
  },
  {
    name: "Reforma agrária e prioridade à agricultura familiar",
    key: "agraria",
  },
  {
    name: "Ação diplomática contra Venezuela (e outros países)",
    key: "venezuela",
  }
]

export const getResult = userData => {
  return CANDIDATOS.reduce((memo, candidato) => {
    memo[candidato.nick] = _.mapValues(candidato.responses, (candidatoValue, questionKey) => {
      if (candidatoValue == null) {
        return 0
      } else {
        return candidatoValue == userData[questionKey] ? 1 : 0
      }
    });

    return memo;
  }, {});
}

export const getPercentResult = userData => {

  return _.mapValues(getResult(userData), data => {
    return _.sum(_.values(data)) / QUESTIONS.length;
  });

}
