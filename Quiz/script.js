const questions = [
        {
            "question": "Qual é o nome da conjectura matemática que propõe que todo número par maior que 2 pode ser expresso como a soma de dois números primos?",
            "options": ["Conjectura de Goldbach", "Conjectura de Riemann", "Conjectura de Poincaré", "Conjectura de Hardy-Weinberg"],
            "answer": "Conjectura de Goldbach"
        },
        {
            "question": "Qual é o nome do teorema fundamental que afirma que em qualquer espaço topológico, existe uma base para a topologia formada por conjuntos abertos?",
            "options": ["Teorema de Urysohn", "Teorema de Tychonoff", "Teorema de Stone-Weierstrass", "Teorema de Zorn"],
            "answer": "Teorema de Tychonoff"
        },
        {
            "question": "Quem desenvolveu a teoria das catástrofes, que estuda descontinuidades e transições abruptas em sistemas dinâmicos?",
            "options": ["Jean-Pierre Serre", "René Thom", "Michael Atiyah", "Andrew Wiles"],
            "answer": "René Thom"
        },
        {
            "question": "Qual é o nome do teorema em teoria dos grafos que afirma que em qualquer grafo conexo não direcionado, existe um ciclo Hamiltoniano se e somente se o número de vértices for maior ou igual a 3 e o grau de cada vértice for maior ou igual a n/2?",
            "options": ["Teorema de Dirac", "Teorema de Euler", "Teorema de Hamilton", "Teorema de Kuratowski"],
            "answer": "Teorema de Dirac"
        },
        {
            "question": "Qual é o nome do princípio da física que afirma que não é possível medir simultaneamente com precisão arbitrária duas propriedades conjugadas de uma partícula?",
            "options": ["Princípio de Pauli", "Princípio de Heisenberg", "Princípio de Uncertainty", "Princípio de Born"],
            "answer": "Princípio de Heisenberg"
        },
        {
            "question": "Qual é a constante universal que define a relação entre a massa e a energia em sistemas relativísticos, conhecida como constante de proporcionalidade na famosa equação E=mc²?",
            "options": ["Constante de Boltzmann", "Constante de Avogadro", "Constante de Planck", "Constante de Einstein"],
            "answer": "Constante de Einstein"
        },
        {
            "question": "Qual é o nome do fenômeno na mecânica quântica que descreve o entrelaçamento instantâneo de partículas separadas por grandes distâncias?",
            "options": ["Entrelaçamento Quântico", "Efeito Casimir", "Decoerência Quântica", "Tunelamento Quântico"],
            "answer": "Entrelaçamento Quântico"
        },
        {
            "question": "Qual é o conceito matemático que descreve a construção de uma nova estrutura a partir de uma estrutura dada, preservando certas propriedades enquanto altera outras?",
            "options": ["Função Homeomórfica", "Função Linear", "Função Aberta", "Função Contínua"],
            "answer": "Função Homeomórfica"
        },
        {
            "question": "Qual é o teorema da física que descreve a forma como a luz é desviada pela gravidade de um corpo massivo, como um buraco negro?",
            "options": ["Teorema de Einstein", "Teorema de Hawking", "Lente Gravitacional", "Teorema de Schwarzschild"],
            "answer": "Lente Gravitacional"
        },
        {
            "question": "Qual é o nome da teoria matemática que generaliza o conceito de funções analíticas para espaços topológicos não necessariamente métricos?",
            "options": ["Teoria de Gelfand", "Teoria de Banach-Alaoglu", "Teoria de Riesz", "Teoria de Baire"],
            "answer": "Teoria de Banach-Alaoglu"
        },
        {
            "question": "Quem é o matemático que formulou o teorema fundamental da álgebra, que afirma que todo polinômio não constante com coeficientes complexos tem pelo menos uma raiz complexa?",
            "options": ["Carl Friedrich Gauss", "Isaac Newton", "Leonhard Euler", "Joseph Fourier"],
            "answer": "Carl Friedrich Gauss"
        },
        {
            "question": "Qual é o conceito fundamental em física que descreve a quantização da energia dos sistemas físicos, como os átomos, em múltiplos de uma unidade básica?",
            "options": ["Quantização de Energia", "Princípio de Heisenberg", "Dualidade Onda-Partícula", "Teoria Quântica de Campos"],
            "answer": "Quantização de Energia"
        },
        {
            "question": "Qual é o nome do fenômeno físico que descreve a tendência dos corpos a se moverem em linhas retas a menos que sejam forçados a mudar sua trajetória?",
            "options": ["Lei da Inércia", "Lei da Gravitação Universal", "Lei de Newton", "Princípio de Conservação da Energia"],
            "answer": "Lei da Inércia"
        },
        {
            "question": "Qual é a fórmula matemática que descreve a distribuição de probabilidade para a posição de uma partícula em um sistema quântico, conhecida como função de onda?",
            "options": ["Função de Bessel", "Função de Laguerre", "Função de Dirac", "Função de Schrödinger"],
            "answer": "Função de Schrödinger"
        },
        {
            "question": "Qual é o nome da constante fundamental na teoria das cordas que representa a unidade de comprimento fundamental na qual todas as escalas são unificadas?",
            "options": ["Constante de Planck", "Constante de Hubble", "Constante de Boltzmann", "Constante de Einstein"],
            "answer": "Constante de Planck"
        },
        {
            "question": "Qual é o nome da lei matemática que descreve a distribuição de energia radiante emitida por um corpo negro em equilíbrio térmico?",
            "options": ["Lei de Planck", "Lei de Stefan-Boltzmann", "Lei de Wien", "Lei de Boltzmann"],
            "answer": "Lei de Planck"
        },
        {
            "question": "Qual é o conceito matemático que descreve um espaço onde cada sequência de Cauchy converge para um limite dentro do espaço?",
            "options": ["Espaço Métrico", "Espaço de Hilbert", "Espaço de Banach", "Espaço Euclidiano"],
            "answer": "Espaço de Banach"
        },
        {
            "question": "Qual é a teoria matemática que estuda a estrutura dos espaços topológicos por meio de invariantes topológicos e é conhecida por seu estudo de objetos contínuos?",
            "options": ["Teoria dos Conjuntos", "Teoria da Topologia Geral", "Teoria da Álgebra Abstracta", "Teoria das Categorias"],
            "answer": "Teoria da Topologia Geral"
        },
        {
            "question": "Qual é o conceito físico que descreve a transição abrupta de um sistema de um estado para outro, como no caso de uma mudança de fase?",
            "options": ["Transição de Fase", "Efeito Térmico", "Processo Adiabático", "Equilíbrio Termodinâmico"],
            "answer": "Transição de Fase"
        },
        {
            "question": "Qual é o nome da hipótese que propõe que a complexidade da vida pode ser explicada por um princípio universal aplicável a todos os sistemas biológicos?",
            "options": ["Teoria da Evolução", "Teoria da Biogênese", "Teoria da Autopoiese", "Teoria da Complexidade"],
            "answer": "Teoria da Autopoiese"
        },
        {
            "question": "Qual é o conceito em física de partículas que descreve a interação fundamental mediada por partículas chamadas bósons?",
            "options": ["Interação Eletromagnética", "Interação Fraca", "Interação Forte", "Interação Gravitacional"],
            "answer": "Interação Eletromagnética"
        },
        {
            "question": "Qual é o conceito matemático que descreve um conjunto de todos os estados possíveis de um sistema quântico, conhecido por seu uso na mecânica quântica?",
            "options": ["Espaço de Hilbert", "Espaço de Banach", "Espaço Euclidiano", "Espaço Métrico"],
            "answer": "Espaço de Hilbert"
        },
        {
            "question": "Qual é o nome da constante fundamental na física que relaciona a energia de um fóton com sua frequência?",
            "options": ["Constante de Boltzmann", "Constante de Planck", "Constante de Avogadro", "Constante de Faraday"],
            "answer": "Constante de Planck"
        },{
            "question": "Qual é o conceito matemático que descreve a continuidade e a estrutura dos espaços topológicos em termos de funções e mapeamentos entre esses espaços?",
            "options": ["Função Homeomórfica", "Função Linear", "Função Contínua", "Função Aberta"],
            "answer": "Função Homeomórfica"
        },
        {
            "question": "Qual é o conceito fundamental da teoria da relatividade que descreve a variação da percepção do tempo e do espaço para observadores em diferentes estados de movimento?",
            "options": ["Dilatação do Tempo", "Contração do Espaço", "Curvatura do Espaço-Tempo", "Principio da Invariância"],
            "answer": "Curvatura do Espaço-Tempo"
        },
        {
            "question": "Qual é o nome do fenômeno físico que descreve a capacidade dos sistemas quânticos de ocupar múltiplos estados simultaneamente?",
            "options": ["Superposição Quântica", "Entrelaçamento Quântico", "Decoerência Quântica", "Efeito Casimir"],
            "answer": "Superposição Quântica"
        },
        {
            "question": "Qual é o nome da teoria que propõe que a força gravitacional não é uma força em si, mas uma curvatura do espaço-tempo causada pela presença de massa?",
            "options": ["Teoria da Relatividade Restrita", "Teoria da Relatividade Geral", "Teoria das Cordas", "Teoria da Gravitação Newtoniana"],
            "answer": "Teoria da Relatividade Geral"
        },
        {
            "question": "Qual é o conceito fundamental em teoria das categorias que descreve uma estrutura matemática que associa a cada objeto um conjunto de morfismos?",
            "options": ["Categoria", "Morfismo", "Função", "Objeto Terminal"],
            "answer": "Categoria"
        },
        {
            "question": "Qual é o nome da constante fundamental na teoria das cordas que define o comprimento de escala fundamental onde as teorias de gravidade e mecânica quântica se encontram?",
            "options": ["Constante de Hubble", "Constante de Planck", "Constante de Avogadro", "Constante de Boltzmann"],
            "answer": "Constante de Planck"
        },
        {
            "question": "Qual é o conceito fundamental em mecânica quântica que descreve a natureza probabilística das medições de estados quânticos?",
            "options": ["Princípio de Incerteza", "Princípio de Pauli", "Princípio de Heisenberg", "Princípio de Born"],
            "answer": "Princípio de Born"
        },
        {
            "question": "Qual é a constante universal que define a quantidade de energia necessária para remover um elétron de um átomo no estado fundamental?",
            "options": ["Energia de Ligação", "Energia de Ionização", "Energia de Dissociação", "Potencial de Ionização"],
            "answer": "Energia de Ionização"
        },
        {
            "question": "Qual é o conceito matemático que descreve a probabilidade de encontrar uma partícula em uma determinada região do espaço ao observar seu estado quântico?",
            "options": ["Função de Onda", "Função de Partícula", "Função de Probabilidade", "Função de Densidade"],
            "answer": "Função de Onda"
        },
        {
            "question": "Qual é o nome do teorema que afirma que qualquer número natural é a soma de no máximo três números quadrados inteiros?",
            "options": ["Teorema dos Três Quadrados", "Teorema dos Quatro Quadrados", "Teorema dos Números Primos", "Teorema de Fermat"],
            "answer": "Teorema dos Três Quadrados"
        },
        {
            "question": "Qual é o nome da teoria matemática que estuda a distribuição de primos e os padrões formados por eles, e é uma extensão da teoria dos números?",
            "options": ["Teoria das Séries", "Teoria Analítica dos Números", "Teoria dos Conjuntos", "Teoria da Probabilidade"],
            "answer": "Teoria Analítica dos Números"
        },
        {
            "question": "Qual é o nome do fenômeno físico que descreve a emissão ou absorção de radiação por um corpo negro em equilíbrio térmico, conforme a lei de Planck?",
            "options": ["Efeito fotoelétrico", "Radiação de Corpo Negro", "Efeito Compton", "Efeito Doppler"],
            "answer": "Radiação de Corpo Negro"
        },
        {
            "question": "Qual é o conceito fundamental na teoria das probabilidades que descreve a distribuição esperada de valores para uma variável aleatória contínua?",
            "options": ["Função de Distribuição", "Função de Probabilidade", "Função de Densidade", "Função de Massa"],
            "answer": "Função de Densidade"
        },
        {
            "question": "Qual é o nome do teorema que afirma que qualquer função contínua em um intervalo fechado e limitado pode ser aproximada uniformemente por uma função polinomial?",
            "options": ["Teorema de Stone-Weierstrass", "Teorema de Weierstrass", "Teorema de Bolzano-Weierstrass", "Teorema de Riemann"],
            "answer": "Teorema de Stone-Weierstrass"
        },
        {
            "question": "Qual é o nome da teoria que descreve a quantização do campo eletromagnético, incluindo a interação de fótons com átomos?",
            "options": ["Teoria Quântica de Campos", "Teoria da Relatividade Geral", "Teoria das Cordas", "Teoria do Modelo Padrão"],
            "answer": "Teoria Quântica de Campos"
        },
        {
            "question": "Qual é o nome do conceito matemático que descreve uma função que transforma uma topologia em outra, preservando a estrutura do espaço?",
            "options": ["Função Linear", "Função Contínua", "Função Homeomórfica", "Função Sobretiva"],
            "answer": "Função Homeomórfica"
        },
        {
            "question": "Qual é o nome da teoria que estuda a relação entre medidas e integração, e é uma extensão da teoria da medida?",
            "options": ["Teoria da Medida", "Teoria da Integração", "Teoria da Probabilidade", "Teoria da Álgebra"],
            "answer": "Teoria da Medida"
        },
        {
            "question": "Qual é o nome do fenômeno físico que descreve a absorção ou emissão de radiação por um corpo quando ele está em movimento relativo a um observador?",
            "options": ["Efeito Doppler", "Efeito Compton", "Efeito de Redshift", "Efeito Einstein"],
            "answer": "Efeito Doppler"
        },
        {
            "question": "Qual é o nome do teorema em física quântica que afirma que a interação entre partículas pode ser descrita por uma teoria de campos com operadores de criação e aniquilação?",
            "options": ["Teorema de Feynman", "Teorema de Dirac", "Teorema de Schrödinger", "Teorema de Heisenberg"],
            "answer": "Teorema de Dirac"
        },
];

const correctsound = document.getElementById('correct-sound')
const incorrectsound = document.getElementById('incorrect-sound')

let currentQuestionIndex = 0;
let score = 0;

function showModal() {
    const modal = document.getElementById('modal');
    const questionElement = document.getElementById('modal-question');
    const optionsElement = document.getElementById('modal-options');
    const nextButton = document.getElementById('next-question');
    const feedbackElement = document.getElementById('feedback');

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    });

    feedbackElement.textContent = ''; // Limpa o feedback anterior
    feedbackElement.classList.remove('correct', 'incorrect');
    modal.style.display = 'block';

    nextButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                feedbackElement.textContent = 'Resposta correta!';
                feedbackElement.classList.add('correct');
                score++;
                correctsound.play();
            } else {
                feedbackElement.textContent = 'Resposta incorreta. A resposta correta é: ' + question.answer;
                feedbackElement.classList.add('incorrect');
                incorrectsound.play();
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(showModal, 2000); // Exibe a próxima pergunta após 2 segundos
            } else {
                document.getElementById('result').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
                document.getElementById('result').classList.add(score === questions.length ? 'correct' : 'incorrect');
                modal.style.display = 'none';
                document.getElementById('start').style.display = 'block';
            }
        }
    };
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none';
    showModal();
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};