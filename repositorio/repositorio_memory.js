const perguntas = [
  { id_pergunta: 1, texto: 'Qual a capital de MG?', id_usuario: 1 },
  { id_pergunta: 2, texto: 'Qual a capital de RJ?', id_usuario: 1 },
  { id_pergunta: 3, texto: 'Qual a capital de SP?', id_usuario: 1 }
];

const respostas = {
  1: ['Belo Horizonte', 'BH'],
  2: ['Rio de Janeiro'],
  3: ['São Paulo', 'Sampa', 'SP']
};

const recuperar_todas_perguntas = () => perguntas.map(({ id_pergunta, texto, id_usuario }) => ({ id_pergunta, texto, id_usuario }));

const recuperar_num_respostas = (id_pergunta) => respostas[id_pergunta]?.length || 0;

const recuperar_todas_respostas = (id_pergunta) => respostas[id_pergunta] || [];

const recuperar_pergunta = (id_pergunta) => perguntas.find(({ id_pergunta: id }) => id === id_pergunta);

module.exports = {
  recuperar_todas_perguntas,
  recuperar_num_respostas,
  recuperar_todas_respostas,
  recuperar_pergunta
};
