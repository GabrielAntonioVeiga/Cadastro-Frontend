const maskElements = document.querySelectorAll("[data-mascara]")

const fnMasks = {
    matricula: maskMatricula
}

maskElements.forEach(el => {
    const maskName = el.dataset.mascara
    const fnMascara = fnMasks[maskName]
    fnMascara(el)
})

function maskMatricula(el) {
    el.addEventListener("keydown", ev => { 
        const key = ev.key
        var number = /^[A-z ]+$/;
        if (key.match(number)) {
            ev.preventDefault()
        }
    })
}

// Por alguma razao, o template nao deixa a funcao acima funcionar :(




const actionBar = document.querySelector(".add-bar")
const btnAdd = actionBar.querySelector(".btn-add")
const container = document.querySelector(".container-data")
const templateModalStudent = document.querySelector("template.student")

btnAdd.addEventListener("click", () => {
    const cloneModal = templateModalStudent.content.cloneNode(true)
    container.prepend(cloneModal)
})

container.addEventListener("click", ev => {
    const btnClose = ev.target.closest("#btn-close")
    const thisModal = ev.target.closest(".modal")

    if (btnClose) {
        thisModal.remove()
    }

    const btnSave = ev.target.closest(".btn-save")
    if (btnSave) {

        const form = thisModal.querySelector("form")
        forms = new FormData(form)

        forms.forEach(value => {
            console.log(value);

            // Tentativa de deixar a color do modal que tenha o mesmo nome da aba de pesquisa em vermelho 

            // const valor = document.querySelector(".input-search-header").value
            // console.log(valor)
            // const nomes = [forms.get("nome")]
            // console.log(nomes)
            // if(valor.match(nome)){
            //     thisModal.style.color = "red"
            // }


        })
        if (forms.get("nome").trim() != ""){
            alert(`${forms.get("nome")} cadastrado com sucesso!`)
        }
        
    }

})





function validation() {
    let form = document.getElementById('form')
    let nome = document.getElementById('nome').value
    let nomeTexto = document.getElementById('nome')
    

    let text = document.getElementById('text')
    let pattern = /^[A-z ]+$/
    if(nome.match(pattern)){
        form.classList.add('valid')
        form.classList.remove('invalid')
        text.innerHTML = "nome certo"
        text.style.color = "green"
    } else {
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = "Nome errado"
        text.style.color = "#ff0000"
    }
    if(nome == '') {
        form.classList.remove('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
        text.style.color = '#00ff00'
    }
}



// piazinho expressoes regulares