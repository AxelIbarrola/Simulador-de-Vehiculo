import { Vehiculo } from "./vehiculos.js";

let vehiculo1 = new Vehiculo(25)
vehiculo1.cambiarTipoConduccionSiguiente()
vehiculo1.avanzar(200)
console.log('Kilometraje luego de avanzar:',vehiculo1.obtenerKilometraje())
console.log('Combustible restante luego de avanzar:',vehiculo1.obtenerCombustible())

console.log("")

let vehiculo2 = new Vehiculo(13)
vehiculo2.cambiarTipoConduccionSiguiente()
vehiculo2.cambiarTipoConduccionSiguiente()
vehiculo2.avanzar(75)
console.log('Kilometraje luego de avanzar:',vehiculo2.obtenerKilometraje())
console.log('Combustible restante luego de avanzar:',vehiculo2.obtenerCombustible())