var corpo = $(".corpo-arquivo");
$("#comecar").click(function(){
	setInterval(function(){
	$.get("https://www.mercadobitcoin.net/api/BTC/ticker/", pegaDados);
	//$.get("https://api.exmo.com/v1/ticker/", menorPreco);
	// $.get("https://www.mercadobitcoin.net/api/BCH/ticker/", quantidadeNegociada);
	// $.get("https://www.mercadobitcoin.net/api/XRP/ticker/", MaiorPrecodeOferta);
	// $.get("https://www.mercadobitcoin.net/api/ETH/ticker/", pegaDados);
	Analise();
	SyncDados();
	},3000);
	
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

   //console.log(dados);
   $.post("http://localhost:3000/placar", dados, function () {
   //console.log("Salvou os Usuarios no servidor");
      // $(".tooltip").tooltipster("open")
     // }).fail(function(){
   // $(".tooltip").tooltipster("open").tooltipster("content","Falha ao sincornizar");
   });
      },3500);  

}

function Analise() {
	var precoUnitario = $(".last").text();
	if (precoUnitario < 13500){
		//alert("compra");
		corpo.addClass("green");
        corpo.removeClass("red");
        corpo.removeClass("yelloW");
        corpo.removeClass("blue");
        corpo.removeClass("purple");
        corpo.removeClass("gray");
	}
	if (precoUnitario < 13400){
		//alert("compra media");
		corpo.addClass("red");
		corpo.removeClass("green");
		corpo.removeClass("yelloW");
		corpo.removeClass("blue");
		corpo.removeClass("purple");
		corpo.removeClass("gray");
	}
	if (precoUnitario < 13200){
		//alert("compra mais ou menos");
		corpo.addClass("yelloW");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("blue");
		corpo.removeClass("blue");
		corpo.removeClass("purple");
		corpo.removeClass("gray");
	}
	if (precoUnitario < 13100){
		alert("compra mais mais ou menos");
		corpo.addClass("blue");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("yelloW");
		corpo.removeClass("purple");
		corpo.removeClass("purple");
		corpo.removeClass("gray");
	}
	if (precoUnitario < 13000){
		//alert("compra mais");
		corpo.addClass("purple");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("yelloW");
		corpo.removeClass("blue");
		corpo.removeClass("gray");
	}
	if (precoUnitario > 13750){
		//alert("Vende");
		corpo.addClass("gray");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("yelloW");
		corpo.removeClass("blue");
		corpo.removeClass("purple");
	}
}
