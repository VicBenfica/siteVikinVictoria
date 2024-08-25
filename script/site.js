
startList = function () {
    if (document.all && document.getElementById) {
        navRoot = document.getElementById("menuDropDown");
        for (i = 0; i < navRoot.childNodes.length; i++) {
            node = navRoot.childNodes[i];
            if (node.nodeName == "LI") {
                node.onmouseover = function () {
                    this.className += " over";
                }
                node.onmouseout = function () {
                    this.className = this.className.replace
                        (" over", "");
                }
            }
        }
    }
}
window.onload = startList;

function Formulario(formulario){
    var custo = parseFloat(formulario.custo.value);
    
    var nome = formulario.nome.value;
    var img = document.getElementById('imagem')
    var data = formulario.data.value;
    var email = formulario.email.value;
    var telefone = formulario.telefone.value;
    var element=document.getElementById("moradia");
    var textoSe1 = element.options[element.selectedIndex].text;
    
    var resposta;

    switch(textoSe1){
        case "Em um lugar grande!":
            resposta="grande";      
            break;
        case "Em um lugar pequeno!":
            resposta="pequeno";
            break;
        default:
            document.getElementById("resposta").value = "Operador inválido!";
    }  

    if(resposta=="pequeno" && custo<=50){
        document.getElementById("res2").innerHTML="Beringela combina muito com você!";
        img.src='9.png'

    }else if(resposta=="pequeno" && custo<=100){
        document.getElementById("res2").innerHTML="Mortadela combina muito com você!";
        img.src='10.png'

    }else if(custo<=200){
        document.getElementById("res2").innerHTML="Dior e Beth combinam muito com você!";
        
        img.src='3.png'
    }else if(custo<=350){
        document.getElementById("res2").innerHTML="Thor, Barbecue, Buldog, Gordinha e Tulipa combinam muito com você!";
        img.src='1.png'
        
    }else if(resposta=="grande" && custo>=200){
        
        document.getElementById("res2").innerHTML="Flor combina muito com você!";
        img.src='8.png'

    }else{
        document.getElementById("res2").innerHTML="Sinto muito, não encontramos nenhum pet para você! Mas não desista, toda semana atualizamos o cadastro de pets, então fique ligado no nosso site!";
    }

    document.getElementById("res").innerHTML= nome  + ", você nasceu em "+ data +  ", seu e-mail é "+ email+ ", seu telefone é " + telefone+ " , você mora em um lugar " + resposta +" e pretende gastar com seu pet R$ " + custo +". Dito isso, o Pet que mais combina com você é : ";
    
}

function Limpar(formulario){
    var img = document.getElementById('imagem')

    img.src='Interrogacao.png'
    document.getElementById("res").innerHTML="";
    document.getElementById("res2").innerHTML="";
    
}