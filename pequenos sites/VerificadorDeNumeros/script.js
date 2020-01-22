var lista = []
var quantidade = 0
var saida = document.getElementById('nAdicionado');
var saida2  = document.getElementById('nAdicionado2');
var entrada = document.getElementById('entrada');
var relatorio = document.getElementById('resumo');



function adicionarN() {

    let n = Number(entrada.value)
   
    if (n < 1 || n > 100) {
        alert("Numero invalido. Tente novamente")
    } else {
        if (quantidade<10){
        
            //Adiciona elementos no lado esquerdo
            if (quantidade < 5) {
                saida.innerHTML += `<li id="itemAdicionado">${n} adicionado</li>`
                lista.push(n)
                quantidade++
            } 
            
            //Adiciona elementos no lado direito
            if (quantidade >= 5){
                saida2.innerHTML += `<li id="itemAdicionado2">${n} adicionado</li>`
                lista.push(n)
                quantidade++
            }
        } else {
                alert('Capacidade cheia!')
        }
    }
    entrada.value = ""
    entrada.focus()
}

function resumo(){
    var soma = 0 
    var media = 0

    //valida
    if (quantidade == 0) {
        alert("Lista vazia. Impossivel fazer relatório")    
    } else {
        lista.sort
        
        //soma
        for (var i=0; i<lista.length; i++){    
            soma += lista[i];
        } 
        
        //media
        media = soma/quantidade
        
        //imprime na tela
        relatorio.innerHTML = `
        <p>${quantidade} números foram adicionados</p>
        <p>Menor valor é ${lista[0]} e o maior valor é ${lista[quantidade-1]}</p>
        <p>A soma dos valores é de ${soma}</p>
        <p>A média dos valores é de ${media}</p>`
    }
}

function limpar(){

    if (quantidade != 0) {
        if (quantidade > 5) {
            document.getElementById('itemAdicionado2').remove()  
            quantidade--  
            lista.pop()
        } else {
            document.getElementById('itemAdicionado').remove()
            quantidade--
            lista.pop()
        }    
    } else {
        alert("Lista ja está vazia")
    }
    
    
}
