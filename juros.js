const resultado1 = document.getElementById('result1')
const resultado2 = document.getElementById('result2')
const resultado3 = document.getElementById('result3')
const calcular = document.getElementById('calcular')

// funcao pra calcular o investimento-----------------
function calcularJuros(){
    let capitalinicial = parseFloat(document.getElementById('capital_inicial').value)
    let valormensal = parseFloat(document.getElementById('valor_mensal').value)
    let taxa = parseFloat(document.getElementById('taxa_juros').value)
    let meses = parseFloat(document.getElementById('periodo').value)

    let montante = capitalinicial + valormensal * meses
    let jc = 0; //juros compostos
    jct = 0; //juros compostos total

    for(let i = 0; i < meses; i++){
        jc =  (capitalinicial * taxa)/100
        jct += jc;
        capitalinicial += jc + valormensal
    }

    let valorTotal = montante + jct 

    let mont = new Intl .NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL", 
    }).format(montante)


    let jurus = new Intl .NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL", 
    }).format(jct)

    
    let vt = new Intl .NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL", 
    }).format(valorTotal)

    resultado1.textContent = `${mont}`
    resultado2.textContent = `${jurus}`
    resultado3.textContent = `${vt}`
}

calcular.addEventListener("click", calcularJuros)

// adinionar a classe active quando clicar no botao-------------

calcular.addEventListener('click', () =>{
    let resultado = document.querySelectorAll('.container-resultado')
    resultado.forEach((item)=>{
        item.classList.add("active")
    })
})

// limpar os inputs-------------------------------------------

let limpar = document.getElementById('limpar')

limpar.addEventListener('click', () =>{
    let resultado = document.querySelectorAll('.container-resultado')
    resultado.forEach((item)=>{
        item.classList.remove("active")
    })
    let capitalinicial = document.getElementById('capital_inicial')
    let valormensal = document.getElementById('valor_mensal')
    let taxa = document.getElementById('taxa_juros')
    let meses = document.getElementById('periodo')
    capitalinicial.value = ""
    valormensal.value = ""
    taxa.value = ""
    meses.value = ""
})



// modal-------------------------------------------------------

let abrirModal = document.querySelector('.abrir-modal')
let fecharModal = document.querySelector(".fechar-modal")
let containerModal = document.querySelector(".container-modal")

abrirModal.addEventListener('click', ()=>{
    containerModal.classList.add("active")
})

fecharModal.addEventListener('click', ()=>{
    containerModal.classList.remove("active")
})

