//definir variables
let hours=0
const price_hours=15
const discount=20
let total=0

hours=7 // simulated user input
total=hours*price_hours
if(hours>=3){
    total=total-discount
}
console.log(total)