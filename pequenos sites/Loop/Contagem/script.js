function contar() {
    var minimo = document.getElementById('minimo')
    var maximo = document.getElementById('maximo') 
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('contagem')
    
    var str = ""
    
    if (minimo.value.length == 0 || maximo.value.length == 0 || passo.value.length == 0) {

        resultado.innerHTML = `Impossível contar. Preencha todos os dados`

    } else {
        
        var i = Number(minimo.value)
        var f = Number(maximo.value)

        if (Number(passo.value) == 0) {
            alert("o passo não pode ser 0. Passo definido como 1")
            var p = 1
        } else {
            p = Number(passo.value)
        }
        
        
        
        if (i < f) {
            for (let c = i; c <= f; c+=p ) {
                str += c + ` \u{1F449} `  
            }
        
        } else{
            for (let c = i; c >= f; c-=p ) {
                str += c + `\u{1F449}`  
            }
        }
        str += `\u{1F3C1}`

        resultado.innerHTML = `<div id="resposta">${str}</div>`   
                
    }     
}
