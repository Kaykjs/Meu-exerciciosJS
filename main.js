function exercicio1() {
    console.log("Olá, Mundo!");
}

function exercicio2() {
    const nome = prompt("Digite seu primeiro nome");
    const sobrenome = prompt("Digite seu sobrenome");
    const resultado = 'Olá ' + nome + ' ' + sobrenome;
    console.log(resultado);
}

function exercicio3() {
    const num1 = parseFloat(prompt("Digite um numero"));
    const num2 = parseFloat(prompt("Digite um numero"));
    console.log(`O resultado é: ${num1 + num2}`);
}

function exercicio4() {
    const nota1 = parseFloat(prompt("Insira sua primeira nota"))
    const nota2 = parseFloat(prompt("Insira sua segunda nota"))
    const nota3 = parseFloat(prompt("Insira sua terceira nota"))

    console.log(`A sua média é ${nota1 + nota2 + nota3 / 3}`)
}

function exercicio5() {
    const num1 = parseFloat(prompt("Digite um numero"))

    const suce = num1 + 1
    const ante = num1 - 1

    console.log("O numero sucessor é: " + suce)
    console.log("O numero antecessor é: " + ante)
}

function exercicio6() {
    const salario = parseFloat(prompt("Digite o seu salário"))

    const novoSalario = salario * 1.15

    console.log("O valor do salário reajustado é: " + Number(novoSalario.toFixed(2)))
}

function exercicio7() {
    const valor = parseFloat(prompt("Digite um valor em Reais"))

    const cotacaoDolar = 5.19;
    const conversao = valor / cotacaoDolar

    console.log("O valor em Dolares é: " + Number(conversao.toFixed(2)))
}

function exercicio8() {
    const num = parseFloat(prompt("Digite um numero"))

    if (num % 2 === 0) {
        console.log(`O numero ${num} é par`)
    } else {
        console.log(`O numero ${num} é impar`)
    }
}

function exercicio9() {
    const idade = parseFloat(prompt("Digite sua idade"))

    if (idade >= 18) {
        console.log("Você é maior de idade")
    } else {
        console.log("Você é menor de idade")
    }
}

function exercicio10() {
    const num1 = parseFloat(prompt("Digite um numero"))
    const num2 = parseFloat(prompt("Digite um numero"))

    if (num1 > num2) {
        console.log(`O numero ${num1} é maior que ${num2}`)
    } else if (num1 < num2) {
        console.log(`O numero ${num2} é maior que ${num1}`)
    } else {
        console.log(`Os numeros são iguais `)
    }
}

function exercicio11() {
    const nota1 = parseFloat(prompt("Insira sua primeira nota"))
    const nota2 = parseFloat(prompt("Insira sua segunda nota"))

    const media = (nota1 + nota2) / 2

    if (media >= 7) {
        console.log(`Sua média é ${media}, você foi aprovado parabéns!!`)
    } else {
        console.log(`Sua média é ${media}, você foi reprovado `)
    }
}

function exercicio12() {
    const num1 = parseFloat(prompt("Digite um numero"));

    if (num1 >= 1) {
        console.log(`O numero ${num1} é positivo`);
    } else if (num1 == 0) {
        console.log(`O numero ${num1} é zero`);
    } else {
        console.log(`O numero ${num1} é negativo`);
    }
}

function exercicio13() {
    const idade = parseFloat(prompt("Digite sua idade"));

    if (idade < 5) {
        console.log("Idade inválida!");
    } else if (idade <= 7) {
        console.log("Sua categoria de nadador é infantil A");
    } else if (idade <= 11) {
        console.log("Sua categoria de nadador é infantil B");
    } else if (idade <= 13) {
        console.log("Sua categoria de nadador é juvenil A");
    } else if (idade <= 17) {
        console.log("Sua categoria de nadador é juvenil B");
    } else {
        console.log("Sua categoria de nadador é Adulto");
    }
}

function exercicio14() {
    const nomeUsuario = prompt("Insira seu nome de usuário");
    const senha = prompt("Insira sua senha");

    if (nomeUsuario === "admin" && senha === "1234") {
        console.log("Login efetuado com sucesso");
    } else {
        console.log("Falha na autenticação");
    }
}

function exercicio15() {
    const peso = prompt("Digite seu peso em kg");
    const altura = prompt("Digite sua altura em metros");

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III (mórbida)";
    }

    console.log(`Seu IMC é ${imc.toFixed(2)} e sua classificação é ${classificacao}`);
}

function exercicio16() {
    const valorProduto = Number(prompt("Digite o valor do produto"));
    const porcentagemDesconto = Number(prompt("Digite a porcentagem de desconto "));

    const valorDesconto = (valorProduto * porcentagemDesconto) / 100;
    const precoFinal = valorProduto - valorDesconto;

    alert(`Valor do desconto: R$  ${valorDesconto.toFixed(2)}. Preço final: R$  ${precoFinal.toFixed(2)}`);
}

function exercicio17() {
    const celsius = Number(prompt("Digite a temperatura em celsius"));
    const fahrenheit = celsius * 1.8 + 32;

    alert(`A temperatura em Fahrenheit é: ${fahrenheit}°`);
}

function exercicio18() {
    const dias = Number(prompt("Quantos dias de aluguel?"));
    const km = Number(prompt("Quantos Km rodados?"));

    const precoTotal = (dias * 60) + (km * 0.15);

    alert(`O preço total a pagar é: R$   ${precoTotal.toFixed(1)}`);
}

function exercicio19() {
    const idade = Number(prompt("Digite sua idade:"));

    if (idade < 16) {
        alert(`Situação: Não votante`);
    } else if (idade <= 17) {
        alert(`Situação: Voto opcional`);
    } else if (idade <= 70) {
        alert(`Situação: Voto obrigatório`);
    } else {
        alert(`Situação: Voto opcional`);
    }
}

function exercicio20() {
    const peso = prompt("Digite seu peso em kg");
    const altura = prompt("Digite sua altura em metros");

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III (mórbida)";
    }

    console.log(`Seu IMC é ${imc.toFixed(2)} e sua classificação é ${classificacao}`);
}

function exercicio21() {
    const preco = Number(prompt("Preço R$:"));
    const opcao = Number(prompt("1 = à vista   2 = 2x   3 = 3x ou + "));

    let total = preco;

    if (opcao === 1) {
        total *= 0.9;
    } else if (opcao === 3) {
        total *= 1.2;
    }

    alert(`Valor final: R$ ${total.toFixed(2)}`);
}

function exercicio22() {
    const a = Number(prompt("Insira o lado 1"));
    const b = Number(prompt("Insira o lado 2:"));
    const c = Number(prompt("Insira o lado 3:"));

    if (a + b > c && a + c > b && b + c > a) {
        alert("Podem formar um triângulo");
    } else {
        alert("Não podem formar um triângulo");
    }
}

function exercicio23() {
    const n1 = Number(prompt("Digite o primeiro numero"));
    const n2 = Number(prompt("Digite o segundo numero"));
    const n3 = Number(prompt("Digite o terceiro numero"));

    const maior = Math.max(n1, n2, n3);

    alert(`O maior número é: ${maior}`);
}

function exercicio24() {
    const n1 = Number(prompt("Digite o primeiro numero"));
    const n2 = Number(prompt("Digite o segundo numero"));

    if (n1 < n2) {
        alert(`Ordem crescente: ${n1}, ${n2}`);
    } else {
        alert(`Ordem crescente: ${n2}, ${n1}`);
    }
}

function exercicio25() {
    const ano = Number(prompt("Digite um ano:"));

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        alert("O ano " + ano + " é bissexto.");
    } else {
        alert("O ano " + ano + " NÃO é bissexto.");
    }
}

function exercicio26() {
    const anoAtual = 2025;

    let ano = Number(prompt("Ano de nascimento:"));
    let idade = anoAtual - ano;

    if (idade < 18) {
        alert(`Você tem ${idade} anos em ${anoAtual}.\n Ainda vai se alistar. Faltam ${18 - idade} anos.`);
    } else {
        alert(`Você tem ${idade} anos em ${anoAtual}.\n Já passou da idade de alistamento.`);
    }
}

function exercicio27() {
    let n1 = Number(prompt("Nota 1"));
    let n2 = Number(prompt("Nota 2"));

    let media = (n1 + n2) / 2;

    alert(`Sua média é: ${media.toFixed(1)}\nStatus: ${media < 5 ? "REPROVADO" : media < 7 ? "RECUPERAÇÃO" : "APROVADO"}`);
}

function exercicio28() {
    let j1 = Number(prompt("Jogador 1 (1-Pedra, 2-Papel, 3-Tesoura):"));
    let j2 = Number(prompt("Jogador 2 (1-Pedra, 2-Papel, 3-Tesoura):"));

    if (j1 === j2) {
        alert("Empate!");
    } else if (
        (j1 === 1 && j2 === 3) ||
        (j1 === 2 && j2 === 1) ||
        (j1 === 3 && j2 === 2)
    ) {
        alert("Jogador 1 VENCEU!");
    } else {
        alert("Jogador 2 VENCEU!");
    }
}

function exercicio29() {
    let km = Number(prompt("Distância em Km:"));
    let preco = km <= 200 ? km * 0.50 : km * 0.45;
    alert("O preço da passagem é: R$ " + preco.toFixed(1));
}

function exercicio30() {
    let valorCasa = Number(prompt("Valor da casa (R$):"));
    let salario = Number(prompt("Seu salário mensal (R$):"));
    let anos = Number(prompt("Em quantos anos quer pagar?"));

    let meses = anos * 12;
    let prestacao = valorCasa / meses;
    let limite = salario * 0.30;

    if (prestacao <= limite) {
        alert(`A prestação mensal será de: R$ ${prestacao.toFixed(1)}\nEmpréstimo APROVADO!`);
    } else {
        alert(`A prestação mensal seria de: R$ ${prestacao.toFixed(1)}\nEmpréstimo NEGADO!\n(ultrapassa 30% do salário)`);
    }
}

function exercicio31() {
    const item1 = prompt("Digite um item de compra")
    const item2 = prompt("Digite um item de compra")
    const item3 = prompt("Digite um item de compra")
    const item4 = prompt("Digite um item de compra")
    const item5 = prompt("Digite um item de compra")

    const arrayCompras = [item1, item2, item3, item4, item5]
    console.log(arrayCompras);

    alert('Lista final de compras: ' + arrayCompras);

    const removerItem = prompt("Deseja remover um item? sim ou nao")
    console.log(removerItem);

    if (removerItem.toLowerCase() === "sim") {
        const produto = prompt("Qual item voce quer remover?")
        console.log(produto);

        const temOproduto = arrayCompras.includes(produto)
        console.log(temOproduto);

        if (temOproduto === true) {
            const listaAtualizada = arrayCompras.filter(item => item !== produto)
            console.log(listaAtualizada);

            alert('Sua lista ficou assim sem o elemento retirado: ' + listaAtualizada)
        }
    } else {
        alert('Sua lista final de compras ficou assim: ' + arrayCompras)
    }
}

function exercicio32() {
    function exercicio02() {
        const nome = prompt("escreva seu nome")
        const tel = prompt("digite seu numero")
        const email = prompt("escreva seu email")

        const cadastro = {
            nome: nome,
            tel: tel,
            email: email
        }

        alert(`nome: ${cadastro.nome} tel: ${cadastro.tel} email: ${cadastro.email}`)

        const mudanca = prompt("deseja alterar telefone ou email? digite tel ou email:")

        if (mudanca === "tel") {
            const atualizacaonumero = prompt("digite seu numero")
            cadastro.tel = atualizacaonumero
        } else if (mudanca === "email") {
            const atualizacaoemail = prompt("digite seu email")
            cadastro.email = atualizacaoemail
        } else {
            alert("opção inválida nenhum dado alterado!")
        }

        alert(`nome: ${cadastro.nome} tel: ${cadastro.tel} email: ${cadastro.email}`)
    }
}

function exercicio33() {
    const idade1 = parseInt(prompt("Digite a primeira idade"))
    const idade2 = parseInt(prompt("Digite a segunda idade"))
    const idade3 = parseInt(prompt("Digite a terceira idade"))
    const idade4 = parseInt(prompt("Digite a quarta idade"))
    const idade5 = parseInt(prompt("Digite a quinta idade"))

    const arrayidade = [idade1, idade2, idade3, idade4, idade5]

    alert(`Idade digitadas: ${arrayidade}`)

    const maior18 = arrayidade.filter(idade => idade > 18)
    const menor18 = arrayidade.filter(idade => idade < 18)

    alert(`A quantidade de pessoas maiores de 18 anos é: ${maior18.length} (${maior18}) e as menores são: ${menor18.length} (${menor18})`)
}

function exercicio34() {
    const precos = []

    for (let i = 0; i < 4; i++) {
        precos.push(Number(prompt("Digite o preço " + (i + 1) + ":")))
    }

    const soma = precos.reduce((a, b) => a + b, 0)
    const media = soma / 4

    const maior = Math.max(precos)
    const mediaSemMaior = (soma - maior) / 3

    alert(`Preços: ${precos}`)
    alert(`Média normal: ${media.toFixed(2)}`)
    alert(`Média após tirar o mais caro: ${mediaSemMaior.toFixed(2)}`)
    alert(`Economia: ${maior.toFixed(2)}`)
}

function exercicio35() {
    let produto = {
        nome: prompt("Nome do produto:"),
        quantidade: Number(prompt("Quantidade inicial:"))
    }

    function mostrar() {
        let status = produto.quantidade > 0 ? "Em estoque" : "Fora de estoque"
        alert(`${produto.nome} - ${produto.quantidade} unidade\n${status}`)
    }

    mostrar()

    do {
        const opcao = Number(prompt("1 = Repor\n2 = Retirar\n0 = Sair"))

        if (opcao === 1) {
            const unidade = Number(prompt("Quantas unidades repor?"))
            if (unidade > 0) {
                produto.quantidade += unidade
                alert(`+${unidade} unidades`)
            }
        } else if (opcao === 2) {
            let unidade = Number(prompt("Quantas unidades retirar?"))
            if (unidade > 0 && unidade <= produto.quantidade) {
                produto.quantidade -= unidade
                alert(`-${unidade} unidades`)
            } else if (unidade > produto.quantidade) {
                alert("Não tem tanto em estoque!")
            }
        }

        mostrar()

    } while (opcao !== 0)
}

function exercicio36() {
    let usuarios = [
        { nome: "Ana Silva", email: "ana.silva@email.com" },
        { nome: "Bruno Costa", email: "bruno123@email.com" },
        { nome: "Carla Mendes", email: "carla.m@email.com" }
    ]

    alert("Usuários cadastrados:\n" +
        usuarios.map(u => `${u.nome} - ${u.email}`).join("\n"))

    const emailBusca = prompt("Digite o email para buscar:").trim()

    const usuarioEncontrado = usuarios.find(u => u.email.toLowerCase() === emailBusca.toLowerCase())

    if (usuarioEncontrado) {
        alert(`Usuário encontrado!\nNome: ${usuarioEncontrado.nome}\nEmail: ${usuarioEncontrado.email}`)

        const remover = prompt("Deseja remover este usuário? (sim/não)").toLowerCase()

        if (remover === "sim" || remover === "s") {
            usuarios = usuarios.filter(u => u.email.toLowerCase() !== emailBusca.toLowerCase())

            alert("Usuário removido com sucesso!")

            if (usuarios.length === 0) {
                alert("A lista de usuários está vazia agora.")
            } else {
                alert("Lista atualizada:\n" + usuarios.map(u => `${u.nome} - ${u.email}`).join("\n"))
            }
        } else {
            alert("Nenhum usuário foi removido.")
        }
    } else {
        alert("Não encontrado.")
    }
}

function exercicio37() {
    let tarefas = []

    for (let i = 1; i <= 3; i++) {
        const texto = prompt(`Tarefa ${i}:`) || `Tarefa ${i}`
        tarefas.push({ texto, feita: false })
    }

    function mostra() {
        let texto = "Tarefas:\n"
        let feitas = 0

        for (let i = 0; i < tarefas.length; i++) {
            let status = tarefas[i].feita ? "[X]" : "[ ]"
            texto += `${i + 1}. ${status} ${tarefas[i].texto}\n`
            if (tarefas[i].feita) feitas++
        }

        texto += `\nFeitas: ${feitas}/${tarefas.length}`
        alert(texto)
    }

    mostra()

    let opcao

    do {
        opcao = Number(prompt("1 = marcar feita\n2 = remover\n0 = sair") || "0")

        if (opcao === 1) {
            let numeroTarefa = Number(prompt("Número da tarefa:") || "0")
            if (numeroTarefa >= 1 && numeroTarefa <= tarefas.length) {
                tarefas[numeroTarefa - 1].feita = true
            }
        } else if (opcao === 2) {
            let remover = Number(prompt("Número para remover:") || "0")
            if (remover >= 1 && remover <= tarefas.length) {
                tarefas.splice(remover - 1, 1)
            }
        }

        if (tarefas.length > 0) {
            mostra()
        } else {
            alert("Lista vazia!")
        }

    } while (opcao !== 0);
}

function exercicio38() {
    let tarefas = []

    for (let i = 1; i <= 3; i++) {
        const texto = prompt(`Tarefa ${i}:`) || `Tarefa ${i}`
        tarefas.push({ texto, feita: false })
    }

    function mostra() {
        let texto = "Tarefas:\n"
        let feitas = 0

        for (let i = 0; i < tarefas.length; i++) {
            let status = tarefas[i].feita ? "[X]" : "[ ]"
            texto += `${i + 1}. ${status} ${tarefas[i].texto}\n`
            if (tarefas[i].feita) feitas++
        }

        texto += `\nFeitas: ${feitas}/${tarefas.length}`
        alert(texto)
    }

    mostra()

    let opcao

    do {
        opcao = Number(prompt("1 = marcar feita\n2 = remover\n0 = sair") || "0")

        if (opcao === 1) {
            let numeroTarefa = Number(prompt("Número da tarefa:") || "0")
            if (numeroTarefa >= 1 && numeroTarefa <= tarefas.length) {
                tarefas[numeroTarefa - 1].feita = true
            }
        } else if (opcao === 2) {
            let remover = Number(prompt("Número para remover:") || "0")
            if (remover >= 1 && remover <= tarefas.length) {
                tarefas.splice(remover - 1, 1)
            }
        }

        if (tarefas.length > 0) {
            mostra()
        } else {
            alert("Lista vazia!")
        }

    } while (opcao !== 0)
}

function exercicio39() {
    let jogadores = []

    for (let i = 0; i < 4; i++) {
        let nome = prompt(`Nome do ${i + 1}º jogador:`) || `Jogador ${i + 1}`
        let pontos = Number(prompt(`Pontos de ${nome}:`) || "0");
        jogadores.push({ nome, pontos })
    }

    function mostrarRanking() {
        let ordenados = [...jogadores].sort((a, b) => b.pontos - a.pontos)

        let texto = "🏆 Ranking:\n\n"

        ordenados.forEach((j, pos) => {
            texto += `${pos + 1}º lugar: ${j.nome} - ${j.pontos} pontos\n`
        })

        alert(texto)
    }

    let atualizar = prompt("Quer atualizar a pontuação de alguém?\n1 = Sim\n2 = Não") || "2"

    if (atualizar === "1") {
        let lista = "Jogadores:\n";
        jogadores.forEach((j, i) => {
            lista += `${i + 1}. ${j.nome} (${j.pontos} pts)\n`
        })
        alert(lista)

        let numero = Number(prompt("Digite o número do jogador (1 a 4):") || "0")
        let indice = numero - 1

        if (indice >= 0 && indice < jogadores.length) {
            let novaPontuacao = Number(prompt(`Nova pontuação para ${jogadores[indice].nome} (era ${jogadores[indice].pontos}):`) || "0")
            jogadores[indice].pontos = novaPontuacao
            alert(`Atualizado! ${jogadores[indice].nome} agora tem ${novaPontuacao} pontos.`)

            mostrarRanking()
        } else {
            alert("Número inválido.")
        }
    } else if (atualizar === 2) {
        mostrarRanking()
    } else {
        alert(`OPÇÃO INVÁLIDA!!!`)
        mostrarRanking()
    }
}

function exercicio40() {
    let carrinho = [];

    for (let i = 1; i <= 5; i++) {
        let n = prompt(`Produto ${i} (vazio = parar):`)?.trim();
        if (!n) break;
        let p = Number(prompt(`Preço R$:`) || 0);
        carrinho.push({ nome: n, preco: p });
    }

    function atualizar() {
        let total = carrinho.reduce((s, i) => s + i.preco, 0);
        let frete = total > 100 ? 0 : 10;
        let txt = carrinho.map(i => `${i.nome} R$${i.preco.toFixed(2)}`).join("\n");
        alert(`Carrinho:\n${txt || "vazio"}\n\nTotal: R$${total.toFixed(2)}\nFrete: ${frete ? "R$10" : "Grátis"}\nTotal final: R$${(total + frete).toFixed(2)}`);
    }

    atualizar();

    while (carrinho.length > 0) {
        let remover = prompt("Remover qual produto? (ou 'sair')").trim();
        if (remover.toLowerCase() === "sair" || !remover) break;

        let idx = carrinho.findIndex(p => p.nome.toLowerCase() === remover.toLowerCase());
        if (idx !== -1) {
            carrinho.splice(idx, 1);
            alert("Removido!");
            atualizar();
        } else {
            alert("Não encontrado");
        }
    }
}

const output = document.getElementById('output-area');
const originalConsoleLog = console.log;
const originalAlert = window.alert;

let logs = [];

function startCapture() {
    logs = [];
    console.log = (...args) => {
        logs.push(args.map(a => String(a)).join(' '));
    };
    window.alert = (msg) => {
        logs.push("ALERT: " + msg);
    };
}

function stopCapture() {
    console.log = originalConsoleLog;
    window.alert = originalAlert;
}

function showResult() {
    output.textContent = logs.length > 0 ? logs.join('\n') : '(nenhuma saída visível)';
    output.style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('back').style.display = 'inline-block';
}

const menu = document.getElementById('menu');

for (let i = 1; i <= 40; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>Exercício ${i}</h3>
        <p>${i < 10 ? '0' : ''}${i} – ${getDescricao(i) || 'Sem descrição'}</p>`;
    card.addEventListener('click', () => {
        startCapture();
        try {
            window[`exercicio${i}`]();
        } catch (e) {
            logs.push("ERRO: " + e.message);
        }
        stopCapture();
        showResult();
    });
    menu.appendChild(card);
}


function getDescricao(n) {
    const desc = {
        1: "Olá, Mundo!",
        2: "Saudação com nome + sobrenome",
        3: "Soma de dois números",
        4: "Média de 3 notas",
        5: "Sucessor e antecessor",
        6: "Reajuste salarial 15%",
        7: "Real → Dólar",
        8: "Par ou ímpar",
        9: "Maior de idade",
        10: "Qual número é maior",
        11: "Aprovado/Reprovado (média 2 notas)",
        12: "Positivo, negativo ou zero",
        13: "Categoria de natação",
        14: "Login simples",
        15: "Cálculo de IMC",
        16: "Calculadora de Desconto",
        17: "Conversor de Temperatura",
        18: "Aluguel de Carro",
        19: "Situação de Votação",
        20: "IMC com Classificação",
        21: "Formas de Pagamento",
        22: "É um Triângulo?",
        23: "Maior de Três",
        24: "Ordem Crescente",
        25: "Ano Bissexto",
        26: "Alistamento Militar",
        27: "Média com Status",
        28: "Pedra, Papel e Tesoura",
        29: "Preço da Passagem",
        30: "Empréstimo Bancário",
        31: "Lista de Compras",
        32: "Cadastro de Contato",
        33: "Filtrar Adultos",
        34: "Calculadora de Preço",
        35: "Inventário Simples",
        36: "Buscar Usuário",
        37: "Marcar Tarefas",
        38: "Contagem por Categoria",
        39: "Ranking de Pontuação",
        40: "Carrinho Simples",
        41: "Calculadora com switch"
    };
    return desc[n] || '';
}

document.getElementById('back').addEventListener('click', e => {
    e.preventDefault();
    output.style.display = 'none';
    document.getElementById('menu').style.display = 'grid';
    document.getElementById('back').style.display = 'none';
    output.textContent = '';
});