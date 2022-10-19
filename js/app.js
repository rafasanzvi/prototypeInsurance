
//Constructors

function Insurance(marca, año, tipo) {
    this.marca = marca
    this.año = año
    this.tipo = tipo
}

Insurance.prototype.quoteInsurance = function() {
    /*
    1 = Americano 1.15
    2 = Asiático 1.05
    3 = Europeo 1.35
    */

    let cantidad
    const base = 2000

    console.log(this.marca)

    switch(this.marca) {
        case "1":
            cantidad = base * 1.15
            break;
        case "2":
            cantidad = base * 1.05
            break;
        case "3": 
            cantidad = base * 1.35
            break;
        default:
            break;
    }

    //Read year
    const difference = new Date().getFullYear() - this.year
    //Each year that the difference is greater, the cost is low in 3%
    cantidad -= ((difference * 3) * cantidad) / 100

    /* If the insurance is basic it multiplies 30% 
        Id the insurance is complete it multiplies 50%    
    */

    if(type === "basic") {
        cantidad *= 1.30
    } else {
        cantidad *= 1.50
    }
    return cantidad
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

//Show alerts in screen
userInterface.prototype.showMessage = (message, type) => {
    
    const div = document.createElement("div")

    if(type === "error") {
        div.classList.add("error")
    } else {
        div.classList.add("correcto")
    }

    div.classList.add("message", "mt-10")
    div.textContent = message

    //Insert in the HTML
    const form = document.querySelector("#cotizar-seguro")
    form.insertBefore(div, document.querySelector("#resultado"))

    //Clean the error message 
    setTimeout(() => {
        div.remove()
    }, 4000)
}

UI.prototype.showResult = (insurance, total) => {
    //Create the result
    
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
    
    if(marca === "" || year === "" || type === "") {
        UI.showMessage("You have to fill all fields", "error")
        return;
    } 

    UI.showMessage("Calculating...", "correcto")

    //To instance the insurance
    const insurance = new Insurance(marca, year, type)
    const total = insurance.quoteInsurance()
    
    //Use the prototype to quote
    UI.showResult(total, insurance)
}