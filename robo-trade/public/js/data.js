function obterHora() {
	var data = new Date();

	var dia = data.getDate();
	var mes = data.getMonth() + 1;


	var ano = data.getFullYear();

	console.log(mes);


	var informacoes = (dia+"/"+mes+"/"+ano);
	return informacoes;
}