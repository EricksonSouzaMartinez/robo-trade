function pegaDolar() {
    setInterval(function(){
        $.get("https://economia.awesomeapi.com.br/json/list/USD-BRL/", pegaDadosDolar)
        .fail(function(){
        $(".dica").text("Falha de conexão");
        },300);	
    });
}

function pegaDadosDolar(data) {
    console.log(data);    
}