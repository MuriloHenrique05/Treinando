function Verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var nasc = document.getElementById('nasc');
    var res = document.getElementById('res');
    if(nasc.value.length == 0 || Number(nasc.value) > ano){
        alert("Por favor Verifique Algo Esta Errado")
    } else{
        var sex = document.getElementsByName('sex');
        var idade = ano - Number(nasc.value);
        var genero;
        
        if(sex[0].checked){
            genero = 'Masculino';
        }else if(sex[1].checked){
            genero = 'Femenino';
        }
        res.innerHTML = `Seu genero é ${genero} e sua idade ${idade}`
    }
}
