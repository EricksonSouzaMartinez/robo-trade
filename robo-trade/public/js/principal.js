
$("#comecar").click(function(){
	//setInterval(function(){
	$.get("https://www.mercadobitcoin.net/api/BTC/ticker/", pegaDados);
	// $.get("https://www.mercadobitcoin.net/api/LTC/ticker/", pegaDados);
	// $.get("https://www.mercadobitcoin.net/api/BCH/ticker/", pegaDados);
	// $.get("https://www.mercadobitcoin.net/api/XRP/ticker/", pegaDados);
	// $.get("https://www.mercadobitcoin.net/api/ETH/ticker/", pegaDados);
	//},0);	
});
//https://www.mercadobitcoin.net/api-doc/

function pegaDados(data) {
	var valorReal = $(".real");
	var sell = (data.ticker['sell']);

	valorReal.text(" " + sell);
}
	