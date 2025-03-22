export class Ecologica {

    consumo(){
        return 16
    }

    velocidadMaxima(){
        return 120
    }

    siguiente(){
        return new Estandar()
    }

    anterior(){
        return new SuperDeportivo()
    }
}

export class Estandar {

    consumo(){
        return 10
    }

    velocidadMaxima(){
        return 150
    }

    siguiente(){
        return new Deportiva()
    }

    anterior(){
        return new Ecologica()
    }
}

export class Deportiva {

    consumo(){
        return 5
    }

    velocidadMaxima(){
        return 200
    }

    siguiente(){
        return new SuperDeportivo()
    }

    anterior(){
        return new Estandar()
    }
}

export class SuperDeportivo {

    consumo(){
        return 2
    }

    velocidadMaxima(){
        return 240
    }

    siguiente(){
        return new Ecologica()
    }

    anterior(){
        return new Deportiva()
    }
}