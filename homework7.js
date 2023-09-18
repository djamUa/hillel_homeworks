// є абстрактний клас
// class Human {
//     constructor() {
//         if (this.constructor == Human) {
//             throw new Error('it is abstract class')
//         } 
//     }
//     eat(){console.log('eating')}
//     listen() { console.log('listening') }
// }
// створити клас нащадок Worker - у якого має бути свій конструктор з оголошенням двох полів salary, work time. 
// Також має бути два метода який виводить привітання, і каже що робота завершена.


class Human {
    constructor() {
        if (this.constructor == Human) {
            throw new Error('Human class');
        }
    }

    eat() {
        console.log('eating');
    }

    listen() {
        console.log('listening');
    }
}

class Worker extends Human {
    constructor(salary, workTime) {
        super();

        this.salary = salary;
        this.workTime = workTime;
    }

    greetings() {
        console.log(`Hello!`);
    }

    finishWork() {
        console.log('Work is finished');
    }
}

const worker = new Worker;

worker.greetings(); 
worker.finishWork();
worker.eat();
worker.listen(); 
