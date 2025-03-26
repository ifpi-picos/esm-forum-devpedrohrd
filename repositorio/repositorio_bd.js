const bd = require('../bd/bd_utils.js');

const recuperar_todas_perguntas = () => 
  bd.queryAll('SELECT * FROM perguntas', []);

const recuperar_num_respostas = (id_pergunta) => {
  const resultado = bd.query('SELECT count(*) AS total FROM respostas WHERE id_pergunta = ?', [id_pergunta]);
  return resultado.total;
};

const recuperar_pergunta = (id_pergunta) => 
  bd.query('SELECT * FROM perguntas WHERE id_pergunta = ?', [id_pergunta]);

const recuperar_todas_respostas = (id_pergunta) => 
  bd.queryAll('SELECT * FROM respostas WHERE id_pergunta = ?', [id_pergunta]);

const criar_pergunta = (texto, id_usuario) => 
  bd.exec('INSERT INTO perguntas (texto, id_usuario) VALUES(?, ?)', [texto, id_usuario]);

const criar_resposta = (id_pergunta, texto) => 
  bd.exec('INSERT INTO respostas (id_pergunta, texto) VALUES(?, ?)', [id_pergunta, texto]);

module.exports = {
  recuperar_todas_perguntas,
  recuperar_num_respostas,
  recuperar_pergunta,
  recuperar_todas_respostas,
  criar_pergunta,
  criar_resposta
};
