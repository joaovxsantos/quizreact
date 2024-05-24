export const BUTTONS_INFOS = [
    {
        title: 'HTML',
        bgColor: '#dd4b25',
    },
    {
        title: 'CSS',
        bgColor: '#254bdd',
    },
    {
        title: 'JAVASCRIPT',
        bgColor: '#efd81d',
    },
    {
        title: 'REACT',
        bgColor: '#5ed3f3',
    }
]


export const QUESTIONS_DATA = {
    HTML: [{
        question: 'O que significa HTML?',
        options: ['HypnoToad Multiple Loop', 'HardText Markup Language', 'HyperTable Max Language', 'HyperText Markup Language'],
        correct: 3
    },
    {
        question: 'Qual a Tag de Paragráfo?',
        options: ['<i>', '<p>', '<text>', '<bold>'],
        correct: 1
    },
    {
        question: 'Qual Tag define o maior Título?',
        options: ['<h1>', '<h2>', '<h3>', '<h4>'],
        correct: 0
    },
    {
        question: 'Qual atributo é utilizado em um link para que quando clicado ele abra em outra página?',
        options: ['target="_blank"', 'target="self"', 'target="_top"', 'open="next"'],
        correct: 0
    },
    ],
    CSS: [{
        question: 'Qual a Propriedade do CSS que altera a cor do texto?',
        options: ['position', 'color', 'background-color', 'color-scheme'],
        correct: 1
    }, {
        question: 'Propriedade que faz com que cada elemento ocupe uma linha própria',
        options: ['display:flex', 'display:inline', 'display:inline-flex', 'display:block'],
        correct: 3
    },
    {
        question: 'O que significa CSS?',
        options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
        correct: 0
    },
    {
        question: 'Como inserar um comentário em CSS?',
        options: ['// Comentário', '/* Comentário */', "'Comentário", '//Comentário//'],
        correct: 1
    },],
    JAVASCRIPT: [{
        question: 'Quais são os tipos de dados em JavaScript?',
        options: ['Verdadeiro, Falso, Nulo, Vazio', 'Inteiro, Ponto Flutuante, String, Vetor', 'Função, Objeto, Evento, Método', 'Number, String, Boolean, Undefined'],
        correct: 3
    }, {
        question: 'O que é uma const?',
        options: ['Const é uma variável que terá seu valor alterado', 'Const é uma matriz', 'Const é uma variável que não terá seu valor alterado', 'Const é um objeto'],
        correct: 2
    },
    {
        question: 'Como transformar uma string em número?',
        options: ['parseInt(string)', 'toNumber(string)', 'string === number', 'string = number'],
        correct: 0
    },
    {
        question: 'Como iniciar uma matriz em JavaScript?',
        options: ['let matriz = Matriz', 'let matriz = matriz', 'let matriz = []', 'let matriz = {}'],
        correct: 2
    },],
    REACT: [{
        question: 'O que significa JSX?',
        options: ['JavaScript', 'Extensão de Sintaxe para JavaScript', 'JavaScriptExtra Developer', 'React'],
        correct: 1
    }, {
        question: 'O que são components?',
        options: ['São elementos de construção do projeto, que potencialmente podem ser reutilizados', 'São elementos utilizados para iniciar um projeto React', 'São elementos utilizados apenas para soma de valores', 'São elementos utilizados para a declaração de variáveis'],
        correct: 0
    },
    {
        question: 'Como se inicia um projeto React com Vite?',
        options: ['npx create vite@latest nomedoprojeto', 'npm create vite@latest nomedoprojeto', 'npm create-react-app vite@latest', 'npm vite create-react-app @latest'],
        correct: 1
    },
    {
        question: 'O que são HOOKS?',
        options: ['São variáveis que permitem atualização de valores', 'São funções que criam um array e o atualizam', 'São objetos que criam funções de componentes', 'São funções que permitem ligação aos recursos de state e ciclo de vida do React.'],
        correct: 3
    },]
}