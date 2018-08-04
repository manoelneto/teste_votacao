import { getPercentResult } from 'data';

it('returns correctly', () => {
  expect(
    getPercentResult({
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
    })
  ).toEqual(
    {
      "alckmin": 0.045454545454545456,
      "alvaro": 0.045454545454545456,
      "amoedo": 0.045454545454545456,
      "bolsonaro": 0,
      "boulos": 1,
      "ciro": 0.8181818181818182,
      "lula": 0.9090909090909091,
      "manuela": 1,
      "marina": 0.5454545454545454,
    }
  );
});
