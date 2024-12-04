let victories = 220;
let defeats = 4;
let level = " "
function rank(victories, defeats){
    return victories - defeats;
}
let result = rank(victories, defeats);
if (victories <= 10){
    level = "Ferro";
}else if (victories <= 20){
    level = "Bronze";
}else if (victories <= 50){
    level = "Prata";
}else if (victories <= 80){
    level = "Ouro";
}else if (victories <= 90){
    level = "Diamante";
}else if (victories <= 100){
    level = "Lendário";
}else{
    level = "Imortal";
}
console.log ("O Herói tem de saldo de " + result + " vitórias, e está no nível de " + level);