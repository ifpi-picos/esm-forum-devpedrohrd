// Começa importando o repositório padrão (Banco de Dados real)
var repositorio = require('./repositorio/repositorio_bd.js');

// usada pelos testes para trocar o repositório padrão pelo de memória
const reconfig_repositorio = (novo_repositorio) => {
  repositorio = novo_repositorio;
};

// listar_perguntas retorna um array de objetos com os seguintes campos:
// { id_pergunta: int
//   texto: int
//   id_usuario: int
//   num_respostas: int 
// }
const listar_perguntas = () => {
  const perguntas = repositorio.recuperar_todas_perguntas();
  perguntas.forEach(pergunta => {
    pergunta['num_respostas'] = repositorio.recuperar_num_respostas(pergunta.id_pergunta);
  });
  return perguntas;
};

const cadastrar_pergunta = (texto) => {
  repositorio.criar_pergunta(texto, 1);
};

const cadastrar_resposta = (id_pergunta, texto) => {
  repositorio.criar_resposta(id_pergunta, texto);
};

const get_pergunta = (id_pergunta) => repositorio.recuperar_pergunta(id_pergunta);

const get_respostas = (id_pergunta) => repositorio.recuperar_todas_respostas(id_pergunta);

const get_num_respostas = (id_pergunta) => repositorio.recuperar_num_respostas(id_pergunta);

// Exportando todas as funções
exports.reconfig_repositorio = reconfig_repositorio;
exports.listar_perguntas = listar_perguntas;
exports.cadastrar_pergunta = cadastrar_pergunta;
exports.cadastrar_resposta = cadastrar_resposta;
exports.get_pergunta = get_pergunta;
exports.get_respostas = get_respostas;
exports.get_num_respostas = get_num_respostas;
