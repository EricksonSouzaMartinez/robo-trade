var corpo = $(".corpo-arquivo");
$("#comecar").click(function(){
	setInterval(function(){
	$.get("https://www.mercadobitcoin.net/api/BTC/ticker/", pegaDados)
	.fail(function(){
    $(".dica").text("Falha de conexão");
	 });
	valorinput();
	analisa();
	SyncDados();
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
  var dados = {
       placar: placar
    }  
   $.post("http://localhost:3000/placar", dados, function () {
   //console.log("Salvou os Usuarios no servidor");
     }).fail(function(){
    $(".dica").text("Falha de conexão");
   });
      },100000); 
}
function valorinput(){
	resultado =  parseInt($(".last").text()) - parseInt($(".valor-compra").val());
	return resultado;

};

function analisa() {
	var diferencaValor = valorinput();
	if(diferencaValor > 100 && diferencaValor < 200){
		$(".dica").text("ate "+diferencaValor+" reais a mais");
		corpo.addClass("orange");
		corpo.removeClass("yelloW");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("blue");
		corpo.removeClass("blue");
		corpo.removeClass("purple");
		corpo.removeClass("gray")	
	}
	if(diferencaValor > 200 && diferencaValor < 300){
		$(".dica").text("ate "+diferencaValor+" reais a mais");
		corpo.addClass("yelloW");
		corpo.removeClass("red");
		corpo.removeClass("orange");
		corpo.removeClass("green");
		corpo.removeClass("blue");
		corpo.removeClass("blue");
		corpo.removeClass("purple");
		corpo.removeClass("gray")
	}else if (diferencaValor > 300 && diferencaValor < 400){
		$(".dica").text("ate "+diferencaValor+" reais a mais");
		corpo.addClass("blue");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("yelloW");
		corpo.removeClass("orange");
		corpo.removeClass("purple");
		corpo.removeClass("purple");
		corpo.removeClass("gray");
	}else if (diferencaValor > 400 && diferencaValor < 500){
		$(".dica").text("ate "+diferencaValor+" reais a mais");
		corpo.addClass("purple");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("orange");
		corpo.removeClass("yelloW");
		corpo.removeClass("blue");
		corpo.removeClass("gray");
	}else if (diferencaValor > 500 && diferencaValor < 600){
		$(".dica").text("Ate "+diferencaValor+" reais a mais")
		corpo.addClass("gray");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("orange");
		corpo.removeClass("yelloW");
		corpo.removeClass("blue");
		corpo.removeClass("purple");
	}else if (diferencaValor > 600 && diferencaValor < 700){
		console.log(precoDaCompra);
		$(".dica").text("Ate "+diferencaValor+" reais a mais");
		corpo.addClass("red");
		corpo.removeClass("green");
		corpo.removeClass("yelloW");
		corpo.removeClass("blue");
		corpo.removeClass("orange");
		corpo.removeClass("purple");
		corpo.removeClass("gray");
	}else if(diferencaValor > 700){
		$(".dica").text("ate "+diferencaValor+" reais");
				corpo.addClass("green");
        corpo.removeClass("red");
				corpo.removeClass("yelloW");
				corpo.removeClass("orange");
        corpo.removeClass("blue");
        corpo.removeClass("purple");
        corpo.removeClass("gray");
	}else if(diferencaValor < 0 && diferencaValor > -100){
		$(".dica").text("esta caindo "+diferencaValor);
				corpo.addClass("green");
        corpo.removeClass("red");
				corpo.removeClass("yelloW");
				corpo.removeClass("orange");
        corpo.removeClass("blue");
        corpo.removeClass("purple");
        corpo.removeClass("gray");
	}else if(diferencaValor < - 100){
		$(".dica").text("o valor esta caindo muito"+diferencaValor)
		corpo.addClass("gray");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("yelloW");
		corpo.removeClass("blue");
		corpo.removeClass("orange");
		corpo.removeClass("purple");
	}	
};
$("#pegar-valor").click(analisa());