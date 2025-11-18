//definir variables
let horas=0
const precio_horas=15
const descuento=20
let total=0

horas=7 //suponiendo que estas fueran las horas que nos proporcione el usuario
total=horas*precio_horas
if(horas>=3){
    total=total-descuento
}
console.log(total)