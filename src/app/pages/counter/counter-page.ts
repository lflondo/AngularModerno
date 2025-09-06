import { Component } from "@angular/core";


@Component({
   selector: 'app-root',
   templateUrl: './counter-page.html',
   styleUrl: './counter-page.css'
})

export class CounterPage{
    counter = 10;
    increaseBy(value:number){
        this.counter += value
    }

    decreaseBy(value2:number){
        this.counter -= value2;
    }

    resetCouter(){
        this.counter =  10;
    }
}