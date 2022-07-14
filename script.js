//variável display
let display = document.getElementById("display")

// apagar todos os números do visor
document.getElementById("deletarTudo").addEventListener("click", ()=>{display.value = ""})
// função para fazer os números aparecerem no display
for(let i = 0; i <= 9; i++){
    document.getElementById([i]).addEventListener('click', ()=>{display.value += [i]});
}
// acréscimo do 00
document.getElementById("duploZero").addEventListener('click', ()=>{display.value += "00"})

// botão apagar a direita
document.getElementById("apagarADireita").addEventListener("click", ()=>{display.value = display.value.substring(0, display.value.length - 1)})

// botao ponto
document.getElementById("ponto").addEventListener("click", ()=>{
    if(display.value[display.value.length - 1] != "*" && display.value[display.value.length - 1] != "/" && display.value[display.value.length - 1] != "-" && display.value[display.value.length - 1] != "." && display.value[display.value.length - 1] != "+"  && display.value.length != 0){
        display.value += "."
    }
})

// divisao
document.getElementById("divisao").addEventListener("click", ()=>{
    if(display.value[display.value.length - 1] != "*" && display.value[display.value.length - 1] != "/" && display.value[display.value.length - 1] != "-" && display.value[display.value.length - 1] != "." && display.value[display.value.length - 1] != "+"  && display.value.length != 0){
        display.value += "/"
    }
})

//multiplicação
document.getElementById("multiplicacao").addEventListener("click", ()=>{
    if(display.value[display.value.length - 1] != "*" && display.value[display.value.length - 1] != "/" && display.value[display.value.length - 1] != "." &&  display.value[display.value.length - 1] != "-" && display.value[display.value.length - 1] != "+"  && display.value.length != 0){
        display.value += "*"
    }
})

//soma
document.getElementById("adicao").addEventListener("click", ()=>{
    if(display.value[display.value.length - 1] != "*" && display.value[display.value.length - 1] != "/" && display.value[display.value.length - 1] != "." && display.value[display.value.length - 1] != "-" && display.value[display.value.length - 1] != "+"  && display.value.length != 0){
        display.value += "+"
    }
})

//subtração
document.getElementById("subtracao").addEventListener("click", ()=>{
    if(display.value[display.value.length - 1] != "*" && display.value[display.value.length - 1] != "/" && display.value[display.value.length - 1] != "." && display.value[display.value.length - 1] != "-" && display.value[display.value.length - 1] != "+"  && display.value.length != 0){
        display.value += "-"
    }
})

//resultado da operação
document.getElementById("igual").addEventListener("click", ()=>{
    display.value = eval(display.value)
})

let displayAuto = document.getElementsByClassName("displayAuto")[0]
document.getElementById("grupoBotoes").addEventListener("click", ()=>{
    if(display.value[display.value.length - 1] != "*" && display.value[display.value.length - 1] != "/" && display.value[display.value.length - 1] != "." && display.value[display.value.length - 1] != "-" && display.value[display.value.length - 1] != "+"  && display.value.length != 0 && display.value != undefined){
        displayAuto.value = eval(display.value)
    }
})
