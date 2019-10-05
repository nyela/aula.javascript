function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://www.facebook.com/dani.vieria/");
   // window.location.href = "https://www.facebook.com/dani.vieria/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse aqui";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passar o mouse aqui";
    elemento.innerHTML = "passar o mouse aqui"

}
function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1 + n2;

}

function  validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }

    return validar;

}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

/*var count = 0;
for (count = 0; count <= 5; count++){
    alert(count);
};

/*
var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count ++;
};

/*
var idade = prompt("qual sua idade");
if (idade >= 22){
    alert("maior de idade");
}else{
    alert("menor de idade");
};

/*
var frutas = [{nome:"maça" , cor: "vermelha"}, {nome:"uva" , cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça" , cor: "vermelha"}
console.log(fruta.cor);
alert(fruta.cor);

*/

//var lista = ["maça", "morango", "laranja"];
//lista.push("uva");
//lista,pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Dani Vieira";
//var idade = 22;
//var idade1 = 10;
//var frase = "Espero que seus sonhos sejam doces e que neles nos encontremos em fantásticas aventuras. Boa noite!";

//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade1);
//console.log(nome);
//console.log(idade + idade1);
//console.log(frase.replace("Boa noite", "Bom dia"));