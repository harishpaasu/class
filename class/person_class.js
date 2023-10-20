class person{
    constructor( first_name, last_name , age , adress ,email , phone_number ) {
        
        this.first_name=first_name;
        this.email=email;
        this.adress=adress;
        this.last_name=last_name;
        this.age=age;
        this.phone_number=phone_number;

    }
    getfullname(){
        return`${this.first_name} ${this.last_name}`;
    }
    getage(){
        return`${this.age}`;
    }
    getadress(){
        return`${this.adress}`;
    }
getcontact(){
    return`${this.email} ${this.phone_number}`
}
}
const person1=new person ("harish", "paasu",23,"chennai", "paasuharish6@gmail.com", "8883882993",)

console.log(person1.first_name);
console.log(person1.last_name);
console.log(person1.adress);
console.log(person1.email);
console.log(person1.age);
console.log(person1.email);
console.log(person1.phone_number);