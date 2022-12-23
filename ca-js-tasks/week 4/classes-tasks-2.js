console.group('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
    class Player 
        { 
            name; age;height;weight;

            constructor (name, age, height, weight)
                {
                    this.name = name;
                    this.age = age;
                    this.height = height;
                    this.weight = weight;
                }
    
            get ageR() {return `${this.name} is age ${this.age}`;}
            get heightR() {return `${this.name} is ${this.height}cm`;}
            get weightR() {return `${this.name} weighs ${this.weight}kg`;}
        }

    p1 = new Player("Petūnija Petauskaite", 22, 130, 85);
    console.log(p1.ageR);
    console.log(p1.heightR);
    console.log(p1.weightR);

}
console.groupEnd();

console.group('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
    class Calculator 
        {
            constructor (x, y){this.x = x; this.y = y;}
            add(x, y) {return x+y;};
            subtract(x, y) {return x-y;};
            multiply(x, y) {return x*y;};
            divide(x,y) {return x/y;};
        }

    let calculator = new Calculator()
    console.log(calculator.add(3, 7));
    console.log(calculator.subtract(90, 3));
    console.log(calculator.multiply(4, 7));
    console.log(calculator.divide(40, 8)); 
}
console.groupEnd();

console.group('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
    class Employee 
        {
            constructor (firstname, lastname) {this.firstname = firstname; this.lastname = lastname;}
            get fullName(){return `${this.firstname} ${this.lastname}`; }
            get email(){return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@gmail.com`;}
        }
  
    let emp1 = new Employee("Petras", "Petraitis");
    console.log(emp1.fullName);
  
    let emp2 = new Employee("Labas",  "Ate");
    console.log(emp2.email);
  
    let emp3 = new Employee("Džonas", "Valkeris");
    console.log(emp3.firstname);

}
console.groupEnd();

console.group('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person 
    {
        constructor(name, age) {this.name = name; this.age = age;}
        compare(person) 
            {
                if (this.age > person.age) 
                {return `${person.name} is younger than me.`;}
                else if (this.age < person.age) 
                {return `${person.name} is older than me.`;}
                else return `${person.name} is the same age as me.`;
            }
    }

    let p1 = new Person("Petro", 34);
    let p2 = new Person("Laima", 86);
    let p3 = new Person("Jonas", 19);

    console.log(p1.compare(p2));
    console.log(p2.compare(p1));
    console.log(p1.compare(p3));
}
console.groupEnd();

console.group('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Circle
    {
        constructor (r){this.r = r;}
 
        get area()
            {
                return Math.PI * (this.r ** 2);
            }

        get perimeter()
            {
                return 2 * Math.PI * this.r;
            }
  } 

    let cir = new Circle(4);
    console.log(cir.area);

    let cir1 = new Circle(5.64);
    console.log(cir1.perimeter);
}
console.groupEnd();

console.group('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(fname,lname)
        {
            this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
            this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
        }

    get fullname() {
      return `${this.fname} ${this.lname}`;
    }
    get initials() {
      return `${this.fname[0]}.${this.lname[0]}`;
    }
  }

    person1 = new Name("Tomas", "KRUIZAS");
    console.log(person1.fname);
    console.log(person1.lname);
    console.log(person1.fullname);
    console.log(person1.initials);
}
console.groupEnd();

console.group('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{

  function sweetestIcecream(array) 
    {
        let a = 0;
        const flav = {Pisttachio: 0, Coconut: 10, Popcorn: 10, Vanilla: 15, Chocolate: 20};
     
        for (let i = 0; i<array.length ; i++)
            {
                if ((flav[array[i].flavor]+array[i].sprinkles) > a) 
                {a = flav[array[i].flavor]+array[i].sprinkles;}
            }
        return a;
    }
  
  class iceCream {constructor(flavor, sprinkles) {this.flavor = flavor; this.sprinkles = sprinkles}}

    let i1 = new iceCream("Coconut", 6);
    let i2 = new iceCream("Vanilla", 2);
    let i3 = new iceCream("Chocolate", 30);
    let i4 = new iceCream("Pisttachio", 0);
    let i5 = new iceCream("Popcorn", 99); 

    console.log( sweetestIcecream([i1, i2, i3, i4, i5]));
    console.log( sweetestIcecream([i3, i1]));
    console.log( sweetestIcecream([i3, i5]));
}
console.groupEnd();

console.group('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
    class OnesThreesNines
        {
            constructor (number){this.number = number;}
            get ones(){return (Math.floor(this.number/1));}
            get threes(){return (Math.floor(this.number/3));}
            get nines(){return (Math.floor(this.number/9));}
        } 

    let n1 = new OnesThreesNines(5)
    console.log(n1.nines);
    console.log(n1.ones);
    console.log(n1.threes);
}
console.groupEnd();

console.group('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User 
    {
        static userCount = 0;
        constructor(username){this.username = username; User.userCount++;}
    }
  
    user1 = new User("slapyvardis69");
    console.log( User.userCount );

    user2 = new User("johnwick3");
    console.log( User.userCount );

    user3 = new User("belgianwaffle33");
    console.log( User.userCount );

    console.log( user1.username );
    console.log( user2.username );
    console.log( user3.username );
}
console.groupEnd();

console.group('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  class Book 
    {
        title; author;

        constructor(title, author) {this.title = title; this.author = author;}

        get title() {return `Title: ${this.title}`;}
        get author() {return `Author: ${this.author}`;}
    }
  
  let pp = new Book("Pride and Prejudice", "Jane Austen");
  let ham = new Book("Hamlet", "William Shakespeare");
  let wap = new Book("War and Peace", "Leo Tolstoy");

console.log(pp.title);
console.log(ham.author," - ", ham.title);
console.log(wap.author);

}
console.groupEnd();