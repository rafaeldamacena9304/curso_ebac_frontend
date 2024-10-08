const alunos = [
    {nome: 'João', nota: 9},
    {nome: 'Flávia', nota: 4},
    {nome: 'Karine', nota: 10},
    {nome: 'Hana', nota: 10},
    {nome: 'Pedro', nota: 3},
    {nome: 'Felipe', nota: 5}    
]

const alunosAprovados = () => alunos.filter(item => item.nota >= 6)
const aprovados = alunosAprovados()


for (let itemIterado = 0; itemIterado < aprovados.length; itemIterado++){
    const aluno = aprovados[itemIterado];
    console.log(`${aluno.nome} foi aprovado com a nota ${aluno.nota}`)
}