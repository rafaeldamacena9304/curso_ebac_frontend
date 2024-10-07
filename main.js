function Filme(nome, duracao, genero){
    this.nome = nome;
    this.duracao = duracao;
    this.genero = genero;
}

function FilmeFiccao(nome, duracao){
    Filme.call(this, nome, duracao, 'Ficção Científica');
}

function FilmeComedia(nome, duracao){
    Filme.call(this, nome, duracao, 'Comédia')
}

function FilmeAcao(nome, duracao){
    Filme.call(this, nome, duracao, 'Ação' )
}

const senhorDosAneis = new FilmeFiccao('Senhor dos Anéis', '150 Minutos');
const niceGuys = new FilmeComedia('Nice Guys', '120 Minutos');
const cidadeSemLei = new FilmeAcao('Uma cidade sem lei', '90 Minutos')

console.log(niceGuys);
console.log(senhorDosAneis);
console.log(cidadeSemLei);