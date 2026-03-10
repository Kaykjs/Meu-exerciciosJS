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

function exercicio41() {
    alert('Boas-vindas á calculadora!')

    let dentroDaCalculadora = true;

    function selecionarOpcao() {
        const opcao = prompt(`
    1 - Somar números
    2 - Subtrair dois números
    3 - Soma de porcentagem
    4 - Multiplicação de dois números
    5 - Divisão de dois números
    6 - Sair
  `);
        return opcao;
    }

    function somarNumeros() {
        const quantidadeDeNumeros = Number(prompt('Digite quantos números você deseja somar: '))

        let somaTotal = 0;

        for (let contador = 0; contador < quantidadeDeNumeros; contador++) {
            const numeroSoma = Number(prompt(`Digite o ${contador + 1} número`))

            somaTotal += numeroSoma // ✅ Fix 1: += ao invés de =
        }

        return somaTotal;
    }

    function subtrairDoisNumeros(numero1, numero2) {
        return numero1 - numero2;
    }

    function somarPorcentagem(valor, porcentagem) {
        return valor + (valor * (porcentagem / 100))
    }

    function multiplicarDoisNumeros(numero1, numero2) {
        return numero1 * numero2;
    }

    function dividirDoisNumeros(numero1, numero2) {
        return numero1 / numero2;
    }

    while (dentroDaCalculadora) {
        const opcao = selecionarOpcao()

        switch (opcao) {
            case "1": {
                const resultadoSoma = somarNumeros()
                alert(`A soma de todos os números é: ${resultadoSoma}`)
                break;
            }
            case "2": { // ✅ Fix 2: nomes corrigidos + escopo com chaves
                const numero1 = Number(prompt('Digite o primeiro número: '));
                const numero2 = Number(prompt('Digite o segundo número: '));
                const subtracaoTotal = subtrairDoisNumeros(numero1, numero2)
                alert(`O número ${numero1} menos o número ${numero2} é igual: ${subtracaoTotal}`)
                break;
            }
            case "3": {
                const numero = Number(prompt('Digite o número a ser atribuido: '))
                const porcentagem = Number(prompt('Quantos porcento você deseja adicionado ao valor?'))
                const somaTotal = somarPorcentagem(numero, porcentagem);
                alert(`O número ${numero} acrescentando ${porcentagem}% é igual: ${somaTotal}`)
                break;
            }
            case "4": {
                const numero1 = Number(prompt('Digite o primeiro número: '));
                const numero2 = Number(prompt('Digite o segundo número: '));
                const multiplicacaoTotal = multiplicarDoisNumeros(numero1, numero2)
                alert(`O número ${numero1} multiplicado pelo número ${numero2} é igual: ${multiplicacaoTotal}`)
                break;
            }
            case "5": {
                const number1 = Number(prompt('Digite o primeiro número: '));
                const number2 = Number(prompt('Digite o segundo número: '));
                const divisaoTotal = dividirDoisNumeros(number1, number2);
                alert(`O número ${number1} dividido pelo número ${number2} é igual: ${divisaoTotal}`)
                break;
            }
            case "6":
                dentroDaCalculadora = false;
                break;
            default:
                alert('Opção inválida! Selecione algum número do menu!')
                break;
        }
    }
}

function exercicio42() {
    let posicao = ["", "", "", "", "",]
    for (let i = 0; i < posicao.length; i++) {
        posicao[i] = prompt(`Digite o número da posição ${i + 1}: `) || `Número ${i + 1}`
    }
    alert(`Posição final:\n1º - ${posicao[0]}\n2º - ${posicao[1]}\n3º - ${posicao[2]}\n4º - ${posicao[3]}\n5º - ${posicao[4]}`)
}

function exercicio43() {
    let numeros = [0, 0, 0, 0, 0, 0]
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Number(prompt(`Digite um número ${i + 1}: `))
    }
    const soma = numeros.reduce((a, b) => a + b, 0)
    alert(`A soma dos números é: ${soma}`)
}

function exercicio44() {
    let numeros = [0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Number(prompt(`Digite um número ${i + 1}: `))
    }
    const pares = numeros.filter(n => n % 2 === 0)
    alert(`Os números pares são: ${pares.join(", ")}`)
}

function exercicio45() {
    let numeros = [0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Number(prompt(`Digite um número ${i + 1}: `))
    }
    const maior = Math.max(...numeros)
    alert(`O maior número é: ${maior}`)
}

function exercicio46() {
    let numeros = [0, 0, 0, 0, 0]
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Number(prompt(`Digite a média do aluno número ${i + 1}:`))
    }
    const media = numeros.reduce((a, b) => a + b, 0) / numeros.length
    alert(`A média da turma é: ${media}`)
}

function exercicio47() {
    let numeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Number(prompt(`Digite o número ${i + 1}:`))
    }

    let contadorImpares = 0

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            contadorImpares++
        }
    }

    alert(`Números digitados: ${numeros.join(", ")}`)
    alert(`Quantidade de números ímpares: ${contadorImpares}`)
}

function exercicio48() {
    let numeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Number(prompt(`Digite o número ${i + 1}:`))
    }

    const busca = Number(prompt("Digite o número que deseja buscar:"))

    let encontrado = false

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === busca) {
            encontrado = true
        }
    }

    if (encontrado) {
        alert(`O número ${busca} foi encontrado no vetor!`)
    } else {
        alert(`O número ${busca} não está no vetor.`)
    }
}

function exercicio49() {
    let nomes = ["", "", "", "", ""]

    for (let i = 0; i < nomes.length; i++) {
        nomes[i] = prompt(`Digite o nome ${i + 1}:`)
    }

    let resultado = "Nomes que começam com 'A':\n"
    let encontrou = false

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i][0].toUpperCase() === "A") {
            resultado += `- ${nomes[i]}\n`
            encontrou = true
        }
    }

    if (encontrou) {
        alert(resultado)
    } else {
        alert("Nenhum nome começa com a letra 'A'.")
    }
}

function exercicio50() {
    let numeros = [0, 0, 0, 0, 0, 0]

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Number(prompt(`Digite o número ${i + 1}:`))
    }

    let resultado = "Números em ordem inversa:\n"

    for (let i = numeros.length - 1; i >= 0; i--) {
        resultado += `- ${numeros[i]}\n`
    }

    alert(resultado)
}

function exercicio51() {
    let notas = [0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < notas.length; i++) {
        notas[i] = Number(prompt(`Digite a nota do aluno ${i + 1}:`))
    }

    let aprovados = 0

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 7.0) {
            aprovados++
        }
    }

    alert(`Total de alunos aprovados: ${aprovados} de ${notas.length}`)
}

function exercicio52() {
    let resultado = "Contagem de 1 a 10:\n"
    let i = 1
    while (i <= 10) {
        resultado += `${i}\n`
        i++
    }
    alert(resultado)
}

function exercicio53() {
    let numero = 0
    while (numero <= 0) {
        numero = Number(prompt("Digite um número maior que 0:"))
    }
    alert(`Número válido: ${numero}`)
}

function exercicio54() {
    const secreto = 42
    let chute = -1
    while (chute !== secreto) {
        chute = Number(prompt("Adivinhe o número secreto:"))
        if (chute < secreto) alert("Muito baixo! Tente novamente.")
        else if (chute > secreto) alert("Muito alto! Tente novamente.")
    }
    alert("Parabéns! Você acertou! O número era 42.")
}

function exercicio55() {
    let soma = 0
    let numero = 0
    while (numero !== -1) {
        numero = Number(prompt("Digite um número para somar (-1 para parar):"))
        if (numero !== -1) soma += numero
    }
    alert(`Soma total: ${soma}`)
}

function exercicio56() {
    let resposta = ""
    while (resposta !== "s" && resposta !== "n") {
        resposta = prompt("Você gosta de programação? (s/n)").toLowerCase()
    }
    if (resposta === "s") {
        alert("Que ótimo! Programação é incrível!")
    } else {
        alert("Tudo bem, cada um tem seus gostos!")
    }
}

function exercicio57() {
    const base = Number(prompt("Digite a base:"))
    const expoente = Number(prompt("Digite o expoente:"))
    let resultado = 1
    let i = 0
    while (i < expoente) {
        resultado *= base
        i++
    }
    alert(`${base}^${expoente} = ${resultado}`)
}

function exercicio58() {
    let resultado = "Números pares de 0 a 20:\n"
    let i = 0
    while (i <= 20) {
        resultado += `${i}\n`
        i += 2
    }
    alert(resultado)
}

function exercicio59() {
    let soma = 0
    let quantidade = 0
    let nota = 0
    while (nota >= 0) {
        nota = Number(prompt("Digite a nota do aluno (-1 para parar):"))
        if (nota >= 0) {
            soma += nota
            quantidade++
        }
    }
    if (quantidade === 0) {
        alert("Nenhuma nota digitada.")
    } else {
        alert(`Média da turma: ${(soma / quantidade).toFixed(2)}`)
    }
}

function exercicio60() {
    const numero = Number(prompt("Digite um número para calcular o fatorial:"))
    let resultado = 1
    let i = 2
    while (i <= numero) {
        resultado *= i
        i++
    }
    alert(`${numero}! = ${resultado}`)
}

function exercicio61() {
    const n = Number(prompt("Quantos termos de Fibonacci deseja ver?"))
    let resultado = "Sequência de Fibonacci:\n"
    let a = 0
    let b = 1
    let contador = 0
    while (contador < n) {
        resultado += `${a}\n`
        const temp = a + b
        a = b
        b = temp
        contador++
    }
    alert(resultado)
}

function exercicio62() {
    const dividendo = Number(prompt("Digite o dividendo:"))
    const divisor = Number(prompt("Digite o divisor:"))
    let quociente = 0
    let resto = dividendo
    while (resto >= divisor) {
        resto -= divisor
        quociente++
    }
    alert(`${dividendo} ÷ ${divisor} = ${quociente} (resto: ${resto})`)
}

function exercicio63() {
    let maior = null
    let menor = null
    let numero = -1
    while (numero !== 0) {
        numero = Number(prompt("Digite um número (0 para parar):"))
        if (numero !== 0) {
            if (maior === null || numero > maior) maior = numero
            if (menor === null || numero < menor) menor = numero
        }
    }
    if (maior === null) {
        alert("Nenhum número digitado.")
    } else {
        alert(`Maior: ${maior}\nMenor: ${menor}`)
    }
}

function exercicio64() {
    let saldo = 500
    let continuar = true
    while (continuar) {
        const saque = Number(prompt(`Saldo: R$${saldo}\nDigite o valor do saque:`))
        if (saque <= saldo) {
            saldo -= saque
            alert(`Saque de R$${saque} realizado.\nSaldo restante: R$${saldo}`)
            if (saldo === 0) {
                alert("Saldo zerado. Encerrando.")
                continuar = false
            }
        } else {
            alert(`Saldo insuficiente! Seu saldo é R$${saldo}.`)
            continuar = false
        }
    }
}

function exercicio65() {
    let vetor = [0, 0, 0, 0, 0]
    let i = 0
    while (i < vetor.length) {
        vetor[i] = Number(prompt(`Digite o número ${i + 1}:`))
        i++
    }
    alert(`Vetor preenchido: [${vetor}]`)
}

function exercicio66() {
    let nomes = []
    let nome = ""
    while (nome.toLowerCase() !== "fim") {
        nome = prompt(`Digite um nome (ou "fim" para encerrar):`)
        if (nome.toLowerCase() !== "fim") {
            nomes.push(nome)
        }
    }
    if (nomes.length === 0) {
        alert("Nenhum nome cadastrado.")
    } else {
        alert(`Nomes cadastrados:\n${nomes.join("\n")}`)
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

for (let i = 1; i <= 66; i++) {
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
        41: "Calculadora com switch",
        42: "Preencher e Exibir",
        43: "Soma dos Elementos",
        44: "Apenas os Pares",
        45: "Encontrando o Maior Valor",
        46: "Média da Turma",
        47: "Contando Ímpares",
        48: "Procurando um Número",
        49: "Nomes com a Letra 'A'",
        50: "Vetor Invertido",
        51: "Alunos Aprovados",
        52: "Contagem Crescente",
        53: "Peça um Número Positivo",
        54: "Adivinhe o Número",
        55: "Somador com Flag",
        56: "Validação de Resposta",
        57: "Potência sem Operador Direto",
        58: "Contagem de Pares",
        59: "Média da Turma com Flag",
        60: "Fatorial",
        61: "Fibonacci",
        62: "Divisão por Subtrações Sucessivas",
        63: "Maior e Menor com Flag",
        64: "Simulando um Saque",
        65: "Preenchendo Vetor com While",
        66: "Cadastro na Lista"

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