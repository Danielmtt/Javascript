function calcular(){
    var entrada = document.getElementById('entrada');
    var saida = document.getElementById('out');
    
    var numeroAserCalculado = Number(entrada.value)
    	
    var resultados = []


    for(var i = 0; i <= 10; i++){
        resultados[i] = numeroAserCalculado * (i+1)
    }
    
    
    saida.innerHTML = `
    <div class="resultado">
            <div class="painel" id="part1">
                <p class="item">${numeroAserCalculado} x 1 = ${resultados[0]}</p>
                <p class="item">${numeroAserCalculado} x 2 = ${resultados[1]}</p>
                <p class="item">${numeroAserCalculado} x 3 = ${resultados[2]}</p>
                <p class="item">${numeroAserCalculado} x 4 = ${resultados[3]}</p>
                <p class="item">${numeroAserCalculado} x 5 = ${resultados[4]}</p>
            </div>

            <div class="painel" id="part2">
                <p class="item">${numeroAserCalculado} x 6 =  ${resultados[5]}</p>
                <p class="item">${numeroAserCalculado} x 7 =  ${resultados[6]}</p>
                <p class="item">${numeroAserCalculado} x 8 =  ${resultados[7]}</p>
                <p class="item">${numeroAserCalculado} x 9 =  ${resultados[8]}</p>
                <p class="item">${numeroAserCalculado} x 10 = ${resultados[9]}</p>
            </div>
    </div>`


 
}