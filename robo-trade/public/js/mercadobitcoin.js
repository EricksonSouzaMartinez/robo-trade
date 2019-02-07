
$("#comecar").click(function(){
	setInterval(function(){
	$.get("https://www.mercadobitcoin.net/api/BTC/ticker/", pegaDados);
	//$.get("https://api.exmo.com/v1/ticker/", menorPreco);
	// $.get("https://www.mercadobitcoin.net/api/BCH/ticker/", quantidadeNegociada);
	// $.get("https://www.mercadobitcoin.net/api/XRP/ticker/", MaiorPrecodeOferta);
	// $.get("https://www.mercadobitcoin.net/api/ETH/ticker/", pegaDados);
	},300);	
});
//https://www.mercadobitcoin.net/api-doc/

function pegaDados(data) {
	var maiorpreco = $(".high");
	var menorPreco = $(".low");
	var quantidadeNegociada = $(".vol");
	var precoUnitario = $(".last");
	var maiorPrecodeOferta = $(".buy");
	var menorPrecodeOferta = $(".sell");
	var time = $(".date");

	var high = (data.ticker['high']);
	var low = (data.ticker['low']);
	var vol = (data.ticker['vol']);
	var last = (data.ticker['last']);
	var buy = (data.ticker['buy']);
	var sell = (data.ticker['sell']);
	var date = (data.ticker['date']);
	
	maiorpreco.text(" " + high);
	menorPreco.text(" " + low);
	quantidadeNegociada.text(" " + vol);
	precoUnitario.text(" " + last);
	maiorPrecodeOferta.text(" " + buy);
	menorPrecodeOferta.text(" " + sell);
	time.text(" " + date);

	var convert = $(".date").text();
	var timestampIn = convert*1000;

	//console.log(valorReal.text(" " + sell));
}

	