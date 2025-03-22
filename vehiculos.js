import { Ecologica, Estandar, Deportiva, SuperDeportivo } from "./tiposDeConduccion.js";

export class Vehiculo{

    constructor(combustible){
        this.combustible = combustible;
        this.tipoConduccion = new Ecologica();
        this.kilometraje = 0;
    }

    cambiarTipoConduccionSiguiente(){
        this.tipoConduccion = this.tipoConduccion.siguiente()
    }

    cambiarTipoConduccionAnterior(){
        this.tipoConduccion = this.tipoConduccion.anterior()
    }

    avanzar(kilometrosDeseados){

        const kilometros_posibles = this.combustible * this.tipoConduccion.consumo()
        const combustible_necesario = kilometrosDeseados / this.tipoConduccion.consumo()

        this.kilometraje += Math.min(kilometrosDeseados, kilometros_posibles)
        this.combustible -= Math.min(this.combustible, combustible_necesario)

        if (kilometrosDeseados > kilometros_posibles){
            console.warn(`Combustible insuficiente, solo puede recorrer ${kilometros_posibles} del total de ${kilometrosDeseados} kms.`);
        }

    }

    obtenerCombustible(){
        return this.combustible
    }

    obtenerKilometraje(){
        return this.kilometraje
    }

    obtenerVelocidadMaxima(){
        return this.tipoConduccion.velocidadMaxima()
    }

    obtenerConsumo(){
        return this.tipoConduccion.consumo()
    }

}

