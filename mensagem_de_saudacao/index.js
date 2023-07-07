let data = new Date();

let hora = data.getHours();
let min = data.getMinutes();

let saudacao;

if(hora <= 11){
    saudacao = "Bom Dia!";
} else if(hora <= 17){
    saudacao = "Boa Tarde!";
}else {
    saudacao = "Boa Noite!";
}

console.log("Ola, " + saudacao);
console.log("Agora sao exatamente " + hora + " horas e " + min + " minutos!");