//Arquivo com as logicas do CPU "IA"

//Escolhas do CPU
function JogadaCPU() {
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "pedra";
	} else if (computerChoice <= 0.67) {
		computerChoice = "papel";
	} else {
		computerChoice = "tesoura";
	}
	console.log("Computer: " + computerChoice);
	return computerChoice;
}


//Logica que decide quem foi o vencedor da partida.
function compare(jogador, cpu) {

	if (jogador === cpu) {
		console.log("Houve um empate");
		return 7;
	} else if (jogador === "pedra") {
		if (cpu === "tesoura") {
			console.log('jogador: vence com pedra sobre tesoura');
			return true;
		} else {
			console.log('cpu: Papel vence sobre pedra');
			return false;
		};

	} else if (jogador === "papel") {
		if (cpu === "pedra") {
			console.log('jogador: Papel vence sobre pedra');
			return true;

		} else {
			console.log('cpu: tesoura vence');
			return false;
		};
	} else if (jogador === "tesoura") {
		if (cpu === "papel") {
			console.log('jogador: vence com tesoura');
			return true;
		} else {
			console.log('cpu: vence com pedra');
			return false;
		};
	}

};