import {Car} from "./carmodule.js"
export class Flyingcar extends Car {
    constructor(model,year){
        super(model,year);
    this.flying= true;
    }
    toString(){
        return `model:${this.model} , year : ${this.year} , flying ${this.flying}`
    }
};
