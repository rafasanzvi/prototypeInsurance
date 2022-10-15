
//Constructors

function Insurance(marca, año, tipo) {
    this.marca = marca
    this.año = año
    this.tipo = tipo
}

function userInterface() {}

userInterface.prototype.fillYear = () => {
    const maxYear = new Date().getFullYear()
          minYear = maxYear - 20

    const selectYear = document.querySelector("#year") 
    
    for(let i = maxYear; i > minYear; i--) {
        let option = document.createElement("option")
        option.value = i
        option.textContent = i
        selectYear.appendChild(option)
    }
}

//Instance of userInterface
const UI = new userInterface()

document.addEventListener("DOMContentLoaded", () => {
    UI.fillYear() //Fill the select with the years
})

eventListeners() 

function eventListeners() {
    const form = document.querySelector("#cotizar-seguro")
    form.addEventListener("submit", quoteInsurance)
}

function quoteInsurance(e) {
    e.preventDefault()

    //Read the selected brand
    const marca = document.querySelector("#marca").value
    //Read selected year
    const year = document.querySelector("#year").value
    //Read the type of insurance
    const type = document.querySelector('input[name="tipo"]:checked').value
    console.log(type)
}