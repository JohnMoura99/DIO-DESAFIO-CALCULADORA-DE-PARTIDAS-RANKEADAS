
let result = calculate(270, 127)
let level = " "

function calculate (win, lose){
   let matchResults =  win - lose
    return matchResults
}


if(result <= 10){
    level = "ferro" 
}else if(result >= 11 && result <= 20){
    level= "bronze"
}else if(result >= 21 && result <= 50){
    level= "Prata"
}else if(result >= 51 && result <= 80){
    level= "Ouro"
}else if(result >= 81 && result <= 90){
    level= "Diamante"
}else if(result >= 91 && result <= 100){
    level= "Lendário"
}else{
  level= "Imortal"
}

console.log("O Herói tem um saldo de vitorias de " + result + ", está no nível de " + level  )



