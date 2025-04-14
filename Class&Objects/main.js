// const employee = {
//     clacTax(){
//         console.log("tax is 10%");
        
//     },
// };


// const karanarjun={
//     salary:1000

// };

// karanarjun.__proto__ =employee;

// class toyatacar {
//     constructor(brand){
//         console.log("creating new object");
        
//     }
//     start(){
//         console.log("Start");
        
//     }

//     stop(){
//         console.log("stop");
        
//     }
    
// };
// let fortuner=new toyatacar("fortuner");

// class Person{
//     constructor(){
//         console.log("Enter parent constructor");
//         this.spices="home spices";
        
//     }
//     eat(){
//         console.log("Eat");
//     }

// }

// class Engineer extends Person{
//     constructor(branch){
//         super();//to invoke parent class contructor
//         console.log("Enter child constructor");
//         this.branch=branch;
//         console.log("exit parent constructor");

//     }
//     work(){
//         console.log("Solved Problem,Build Something");
//     }

// }

// let objenj = new Engineer ("chimical Engineer");


// Q.Create a website for your college .Create a user with 2 properties,name and email.It also has method for ViewData() that allows to user to view  website data.
// let Data ="View Data"
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//     viewdata(){
//         console.log("data=",Data);
//     }
// }

// let student1=new User("maaz","abd@gmail.com");
// let student2=new User("fazal","abc@gmail.com");

//Q.create a new class called admin which inherit from user .add a new method called editdata to admin that allows it to edit website data.

let Data ="View Data"
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewdata(){
        console.log("data=",Data);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data="some new value";
    }
}

let student1=new User("maaz","abd@gmail.com");
let student2=new User("fazal","abc@gmail.com");

let admin1=new Admin("fazal","abc@gmail.com");

