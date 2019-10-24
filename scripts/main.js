import jquery from 'jquery';

class Car {
    constructor ( name ) {
        this.name = name;
    }

    drive ( ) {
        return `${this.name} can run on petrol`;
    }
}

const init = () => {
    const myCar = new Car('Toyota');
    return myCar.drive();
}

jquery(document).ready( function () {
    jquery("#myCar").html(init())
})
