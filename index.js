const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("btn-el")
const lenghtEL = document.getElementById("lenght-el")
const volumeEL = document.getElementById("volume-el")
const massEL = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204


convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    console.log(baseValue)
    
    lenghtEL.textContent =
     `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet |
     ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
     
     volumeEL.textContent = 
     `${baseValue} liters = ${baseValue * literToGallon} gallons |
      ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`
      
    massEL.textContent = `
     ${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds |
     ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos`
     
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/