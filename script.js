let prato;
let nomePrato;
let valorPrato;

let bebida;
let nomeBebida;
let valorBebida

let sobremesa;
let nomeSobremesa;
let valorSobremesa

let total;

function selecPrato(select){
    const pratoSelect = document.querySelector(".prato .seleciona");
    if(pratoSelect !== null){
        pratoSelect.classList.remove("seleciona")
    }

    select.classList.add("seleciona")

    prato = select.innerHTML;
    
    const tituloPrato = document.querySelector(".prato .seleciona h2 ");
    nomePrato = tituloPrato.innerHTML

    const custoPrato = document.querySelector(".prato .seleciona h3 ");
    valorPrato = custoPrato.innerHTML

    valorPratoConvertido = valorPrato.replace('R$', "").replace(',', '.');
    
    liberarBotaoContinuar();
}



function selectBebida(select){
    let bebidaSelect = document.querySelector(".bebida .seleciona")
    if(bebidaSelect !== null){
        bebidaSelect.classList.remove("seleciona")
    }
    select.classList.add("seleciona")

    bebida = select.innerHTML;     

    nomeBebida = document.querySelector("h2");
    
    const tituloBebida = document.querySelector(".bebida .seleciona h2 ");
    nomeBebida = tituloBebida.innerHTML

    const custoBebida = document.querySelector(".bebida .seleciona h3 ");
    valorBebida = custoBebida.innerHTML

    valorBebidaConvertido = valorBebida.replace('R$', "").replace(',', '.');
    
    liberarBotaoContinuar();
}


function selecSmesa(select){
    let SmesaSelect = document.querySelector(".Smesa .seleciona")
    if(SmesaSelect !== null){
        SmesaSelect.classList.toggle("seleciona")
    }
    select.classList.add("seleciona")

    sobremesa = select.innerHTML;

    nomeSobremesa = document.querySelector("h2");
    
    const tituloSobremesa = document.querySelector(".Smesa .seleciona h2 ");
    nomeSobremesa = tituloSobremesa.innerHTML

    const custoSobremesa = document.querySelector(".Smesa .seleciona h3 ");
    valorSobremesa = custoSobremesa.innerHTML
  
    valorSobremesaConvertido = valorSobremesa.replace('R$', "").replace(',', '.');

    liberarBotaoContinuar();
}

let botaoContinuar
let nomeDigitado 
let endereçoDigitado

function pedirInfo() {
    nomeDigitado = prompt("Digite seu nome");
    endereçoDigitado = prompt("Digite seu endereço");
            }

function liberarBotaoContinuar(){

    if (prato !== undefined & bebida !== undefined & sobremesa !== undefined){

        let botaoContinuar = document.querySelector('.botao-continuar');
        botaoContinuar.classList.add('Botaohabilitado');

        somarValores();

        const resumoPedido = ` Olá, gostaria de fazer o pedido: \n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${total}`;
   
        const encodePedido = encodeURIComponent(resumoPedido);

        botaoContinuar.href = `https://wa.me/+5532988475771?text=${encodePedido}`

        let textoBotaoContinuar = document.querySelector('.botao-continuar p');
        textoBotaoContinuar.innerHTML = "Fechar pedido";  
        
    }
}


function somarValores(valorPrato, valorBebida, valorSobremesa){
    let soma = Number(valorPratoConvertido) + Number(valorBebidaConvertido) + Number(valorSobremesaConvertido);
    total = soma.toFixed(2);
    }



