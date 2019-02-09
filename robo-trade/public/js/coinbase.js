$("#comecar-coinbase").click(function(){
	setInterval(function(){
	$.get("https://api.pro.coinbase.com/products/BTC-USD/ticker", pegaDadoscoinbase)
	.fail(function(){
    $(".dica").text("Falha de conexão");
	 });
	valorinput();
	pegaDolar();
	analisa();
	//  SyncDados();
	},300);	
});

function pegaDadoscoinbase(data) {
	var quantidadeNegociada = $(".volume");
	var precoUnitario = $(".price");
	var time = $(".time");
// console.log(data);
	var volume = (data['volume']);
	var price = (data['price']);
	var date =  (data['time']);
	
	quantidadeNegociada.text(volume);
	precoUnitario.text(price);
	time.text(date);
}
function pegaDolar() {
	$.get("https://economia.awesomeapi.com.br/USD-BRL/", pegaDadosDolar)
	.fail(function(){
	$(".dica").text("Falha de conexão");
});
}
function pegaDadosDolar(data) {
var dolar = (data[0]['bid']);
var price = $(".price").text();
var usdbrl = (price * dolar);
$(".price").text(usdbrl)
}

function SyncDados() {
	setInterval(function(){
	var quantidadeNegociada = $(".volume").text();
	var precoUnitario = parseInt($(".price").text());
	var preco = (precoUnitario );
	var time = $(".time").text();
    var placar = [];   
    var score = {
	  vol: quantidadeNegociada,
		price: preco,
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
	resultado =  parseInt($(".price").text()) - parseInt($(".valor-compra-coinbase").val());
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
		// console.log(precoDaCompra);
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