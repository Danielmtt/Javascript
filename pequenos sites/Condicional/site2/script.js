function verificar() {
    var ano = new Date()

    var res = document.getElementById('res');
    var img = document.getElementById('Imagem');
    var anoRecebido = document.querySelector('input#textano');
    var anoatual = ano.getFullYear()



    idade = anoatual - anoRecebido.value

    if (anoRecebido.value > anoatual || anoRecebido.value == 0) {
    
        alert('Verifique os dados e tente novamente')
    
    } else {
       
        var sexo = document.getElementsByName('radsex')
        var genero = ''
       
        if (sexo[0].checked) {
            genero = "um homem"

            if (idade >= 0 && idade < 12 ) {
                img.src = '../site2/fotos/crianca1.png'
                res.innerHTML = `Detectamos ${genero} de ${idade} anos.` 
            } else if (idade >= 12 && idade < 25 ){
                img.src = '../site2/fotos/adolescente1.png'
                res.innerHTML = `Foto de ${genero} de ${idade} anos.`
            } else if (idade >= 25 && idade < 40 ){
                img.src = '../site2/fotos/adulto1.png'
                res.innerHTML = `Foto de ${genero} de ${idade} anos.`
            } else {
                img.src = '../site2/fotos/idoso1.png'
                res.innerHTML = `Foto de ${genero} de ${idade} anos.`
            }
            
        } else {
            genero = "uma mulher"

            if (idade >= 0 && idade < 12 ) {
                img.src = '../site2/fotos/crianca2.png'
                res.innerHTML = `Detectamos ${genero} de ${idade} anos.` 
            } else if (idade >= 12 && idade < 25 ){
                img.src = '../site2/fotos/adolescente2.png'
                res.innerHTML = `Foto de ${genero} de ${idade} anos.`
            } else if (idade >= 25 && idade < 40 ){
                img.src = '../site2/fotos/adulto2.png'
                res.innerHTML = `Foto de ${genero} de ${idade} anos.`
            } else {
                img.src = '../site2/fotos/idoso2.png'
                res.innerHTML = `Foto de ${genero} de ${idade} anos.`
            }
        }
    }
}