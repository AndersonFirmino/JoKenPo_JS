//Scripts para animações do jogo Jo-Ken-Po JS

//Variavel para a animação das mãos
var clickAnimacao = 0;
var escolha;
var pontosJogador = 0;
var pontosCpu = 0;
var vencedor;

$(function() {

	console.log('Carregou animações.');

	$(".selPedra").click(function() {
		escolha = escolher("pedra");
	});

	$(".selPapel").click(function() {
		escolha = escolher("papel");
	});
	$(".selTesoura").click(function() {
		escolha = escolher("tesoura");
	});
	$("#jogar").click(function() {
		if ($("#papel").hasClass('selPapel selecionado') === false &&
			$("#pedra").hasClass('selPedra selecionado') === false &&
			$("#tesoura").hasClass('selTesoura selecionado') === false) {
			alert("Escolha: pedra, papel ou tesoura para jogar!");
		} else {
			backHandsPosition();
			shakeHands();
			trocaImagem(escolha);
			var cpu = JogadaCPU();
			trocaImagemCPU(cpu);
			vencedor = compare(escolha, cpu);
			placar(vencedor);
			clickAnimacao = 1;
		}

	});
});

function abaixarBotao(event) {
	$(event).addClass('selecionado');
}

function levantarBotao(event) {
	$(event).removeClass('selecionado');
}

function escolher(quem) {
	if (quem === "pedra") {
		console.log(quem);
		abaixarBotao($(".selPedra"));
		levantarBotao($(".selPapel"));
		levantarBotao($(".selTesoura"));
	}
	if (quem === "papel") {
		console.log(quem);
		abaixarBotao($(".selPapel"));
		levantarBotao($(".selPedra"));
		levantarBotao($(".selTesoura"));
	}
	if (quem === "tesoura") {
		console.log(quem);
		abaixarBotao($(".selTesoura"));
		levantarBotao($(".selPedra"));
		levantarBotao($(".selPapel"));
	}
	return quem;
}

function shakeHands() {
	console.log('JoKenPo!');
	for (var i = 0; i < 3; i++) {
		$("#playerSprite").attr("src", "img/pedraL.jpg");
		$("#computerSprite").attr("src", "img/pedraR.jpg");

		$("#playerSprite").animate({
			"top": "+=50px"
		}, 200);
		$("#computerSprite").animate({
			"top": "+=50px"
		}, 200);
		if (i !== 2) {
			$("#playerSprite").animate({
				"top": "-=50px"
			}, 200);
			$("#computerSprite").animate({
				"top": "-=50px"
			}, 200);
		};
	};
}


//Possivel função para tratar a posição das mãos apos o JOKENPO
function backHandsPosition() {
		console.log(clickAnimacao);
		if (clickAnimacao >= 1) {
			$("#playerSprite").animate({
				"top": "-=50px"
			}, 0);
			$("#computerSprite").animate({
				"top": "-=50px"
			}, 0);
		};
	}
	//Verifica qual a escolha do player e troca a imagem.
function trocaImagem(quem) {
		if (quem === "pedra") {
			setTimeout(function() {
				$("#playerSprite").attr("src", "img/pedraL.jpg")
			}, 1000);
		};
		if (quem === "papel") {
			setTimeout(function() {
				$("#playerSprite").attr("src", "img/papel(L).jpg")
			}, 1000);
		};
		if (quem === "tesoura") {
			setTimeout(function() {
				$("#playerSprite").attr("src", "img/tesoura(L).jpg")
			}, 1000);
		};
	}
	//Verifica qual a escolha do cpu e troca a imagem.
function trocaImagemCPU(quem) {
		if (quem === "pedra") {
			setTimeout(function() {
				$("#computerSprite").attr("src", "img/pedraR.jpg")
			}, 1000);
		};
		if (quem === "papel") {
			setTimeout(function() {
				$("#computerSprite").attr("src", "img/papel(R).jpg")
			}, 1000);
		};
		if (quem === "tesoura") {
			setTimeout(function() {
				$("#computerSprite").attr("src", "img/tesoura(R).jpg")
			}, 1000);
		};
	}
	//Dar pontos ao vencedor 
function placar(vencedor) {
	if (vencedor === 7) {
		setTimeout(function() {
			alerta("Empate! x..x");
		}, 1000);
	};
	if (vencedor !== 7) {
		if (vencedor) {
			setTimeout(function() {
				$("#placarPlayer").html(pontosJogador += 1);
				alerta("Jogador leva a melhor!");
			}, 1000);

		} else {
			setTimeout(function() {
				$("#placarCpu").html(pontosCpu += 1);
				alerta("CPU leva a melhor!");
			}, 1000);

		};
	};
};

//Mensagem para o vencedor

function alerta(mensagem) {
	var segundos = 1;
	$("#vencedor").fadeIn(500).css({
		"color": "#F00"
	}).text(mensagem);
	setTimeout(function() {
		$("#vencedor").fadeOut(500);
	}, segundos * 1000);
}