export class Car{
    constructor(model="bmw",year=2010){
        this.model= model;
        this.year = year;
    }
    
    toString(){
        return `model:${this.model} , year:${this.year}`;
    }
};
 
