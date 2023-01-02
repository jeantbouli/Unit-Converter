// important conversions
 /*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

btnEl.addEventListener("click", function(){
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} Meter = ${(baseValue * meterToFeet).toFixed(3)} Feet | ${baseValue} Feet = ${(baseValue / meterToFeet).toFixed(3)} Meters`
    volumeEl.textContent = `${baseValue} Liters = ${(baseValue * literToGallon).toFixed(3)} Gallons | ${baseValue} Gallons = ${(baseValue / literToGallon).toFixed(3)} Liters`
    massEl.textContent = `${baseValue} Kilograms = ${(baseValue * kilogramToPound).toFixed(3)} Pounds | ${baseValue} Pounds = ${(baseValue / kilogramToPound).toFixed(3)} Kilograms`
})
inputEl.addEventListener("click", function(){
    inputEl.value = ` `
}
)