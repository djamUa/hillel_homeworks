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

// створити метод який буде виводити в консоль повідомлення чи працює зараз працівник чи ні
// можна використати 
//  Date()
// і в залежності від години виклику методу відображати текст робочі години чи ні
// робочий день з 09:00 до 18:00


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

    WorkingNow() {
        const worksHours2 = new Date().getHours();

        if  (worksHours2 >= 9 && worksHours2 < 18) {
            console.log('on work');
        } else {
            console.log('off work');
        }
    }
}

const worker = new Worker();

worker.greetings(); 
worker.finishWork();
worker.eat();
worker.listen();
worker.WorkingNow();

