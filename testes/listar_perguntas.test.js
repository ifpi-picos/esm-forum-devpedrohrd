const modelo = require('../modelo.js');
const repositorio_memoria = require('../repositorio/repositorio_memory.js');

modelo.reconfig_repositorio(repositorio_memoria);

test('Testando listar três perguntas com seus respectivos números de respostas', () => {
  const perguntas = modelo.listar_perguntas();

  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('Qual a capital de MG?');
  expect(perguntas[1].texto).toBe('Qual a capital de RJ?');
  expect(perguntas[2].texto).toBe('Qual a capital de SP?');

  expect(perguntas[0].num_respostas).toBe(2);
  expect(perguntas[1].num_respostas).toBe(1);
  expect(perguntas[2].num_respostas).toBe(3);
});