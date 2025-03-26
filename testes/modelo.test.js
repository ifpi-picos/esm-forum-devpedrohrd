const bd = require('../bd/bd_utils.js');
const modelo = require('../modelo.js');

beforeEach(() => {
  bd.reconfig('./bd/esmforum-teste.db');
  bd.exec('delete from perguntas', []);
  bd.exec('delete from respostas', []);
});

test('Testando banco de dados vazio', () => {
  expect(modelo.listar_perguntas().length).toBe(0);
});

test('Testando cadastro de três perguntas', () => {
  modelo.cadastrar_pergunta('1 + 1 = ?');
  modelo.cadastrar_pergunta('2 + 2 = ?');
  modelo.cadastrar_pergunta('3 + 3 = ?');
  const perguntas = modelo.listar_perguntas(); 
  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('1 + 1 = ?');
  expect(perguntas[1].texto).toBe('2 + 2 = ?');
  expect(perguntas[2].num_respostas).toBe(0);
  expect(perguntas[1].id_pergunta).toBe(perguntas[2].id_pergunta - 1);
});

test('Testando cadastro de resposta e recuperação de respostas', () => {
  modelo.cadastrar_pergunta('Qual a capital da França?');
  const pergunta = modelo.listar_perguntas()[0];

  modelo.cadastrar_resposta(pergunta.id_pergunta, 'Paris');
  const respostas = modelo.get_respostas(pergunta.id_pergunta);

  expect(respostas.length).toBe(1);
  expect(respostas[0].texto).toBe('Paris');
});

test('Testando get_pergunta', () => {
  modelo.cadastrar_pergunta('Quem descobriu o Brasil?');
  const pergunta = modelo.listar_perguntas()[0];

  const perguntaEncontrada = modelo.get_pergunta(pergunta.id_pergunta);

  expect(perguntaEncontrada.texto).toBe('Quem descobriu o Brasil?');
});

test('Testando get_num_respostas', () => {
  modelo.cadastrar_pergunta('Qual é a fórmula da água?');
  const pergunta = modelo.listar_perguntas()[0];

  modelo.cadastrar_resposta(pergunta.id_pergunta, 'H2O');
  modelo.cadastrar_resposta(pergunta.id_pergunta, 'Dihidrogênio Monóxido');

  const num = modelo.get_num_respostas(pergunta.id_pergunta);
  expect(num).toBe(2);
});