
$("#comecar").click(function(){
	setInterval(function(){
	$.get("https://www.mercadobitcoin.net/api/BTC/ticker/", pegaDados);
	//$.get("https://api.exmo.com/v1/ticker/", menorPreco);
	// $.get("https://www.mercadobitcoin.net/api/BCH/ticker/", quantidadeNegociada);
	// $.get("https://www.mercadobitcoin.net/api/XRP/ticker/", MaiorPrecodeOferta);
	// $.get("https://www.mercadobitcoin.net/api/ETH/ticker/", pegaDados);
	Analise();
	},3000);
	SyncDados();
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
	var date =  obterHora();
	
	maiorpreco.text(high);
	menorPreco.text(low);
	quantidadeNegociada.text(vol);
	precoUnitario.text(last);
	maiorPrecodeOferta.text(buy);
	menorPrecodeOferta.text( sell);
	time.text( date);

	var convert = $(".date").text();
	var timestampIn = convert*1000;

	
}

function obterHora() {

	var data = new Date();
	var dia = data.getDate();
	var mes = data.getMonth() + 1;
	var ano = data.getFullYear();
	var hora = data.getHours();
	var minuto = data.getMinutes();

	//console.log(mes);
	var informacoes = (dia+"/"+mes+"/"+ano+" "+hora+":"+minuto);
	return informacoes;
}


function SyncDados() {

	setInterval(function(){
	var maiorpreco = $(".high").text();
	var menorPreco = $(".low").text();
	var quantidadeNegociada = $(".vol").text();
	var precoUnitario = $(".last").text();
	var maiorPrecodeOferta = $(".buy").text();
	var menorPrecodeOferta = $(".sell").text();
	var time = $(".date").text();


    var placar = [];   
    var score = {
	    high: maiorpreco,
		low: menorPreco,
		vol: quantidadeNegociada,
		last: precoUnitario,
		buy: maiorPrecodeOferta,
		sell: menorPrecodeOferta,
		date: time
        }
       placar.push(score);
//console.log(valores);
  var dados = {
       placar: placar
    }

   console.log(dados);
   $.post("http://localhost:3000/placar", dados, function () {
   console.log("Salvou os Usuarios no servidor");
      // $(".tooltip").tooltipster("open")
     // }).fail(function(){
   // $(".tooltip").tooltipster("open").tooltipster("content","Falha ao sincornizar");
   });
      },3500);  

}

function Analise() {
	var precoUnitario = $(".last").text();
	if (precoUnitario < 13298){
		alert("compra");
	}
}
