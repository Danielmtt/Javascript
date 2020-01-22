var agora = new Date()

hora = agora.getHours()

if (hora < 12) {
    console.log('Bom Dia');
} else if (hora < 18){
    console.log('Boa Tarde');
} else {
    console.log('Boa Noite');
}

/*
0 = domingo 
1 = segunda
2 = terça
3 = quarta
4 = quinta 
5 = sexta
6 = sabado
*/

var dia = agora.getDay()

switch (dia) {
    case 0:
        dia = 'domingo'
        break;
        
    case 1:
        dia = 'segunda'
        break;
    
    case 2:
        dia = 'terça'
        break;
    
    case 3:
        dia = 'quarta'
        break;
    
    case 4:
        dia = 'quinta'
        break;
    
    case 5:
        dia = 'sexta' 
        break;
    
    case 6:
        dia = 'sabado'
        break;

    default:
        break;
}

console.log('hoje é ' + dia);