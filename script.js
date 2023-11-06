// Qn: class Movie
// solutions:
//  a. Write a constructor for the class Movie, which takes a String representing the title of the movie, 
//     a String representing the studio, and a String representing the rating as its arguments, 
//     and sets the respective class properties to these values.

// Answer:
// class Movie
// {
//     constructor(title, studio, rating)
//     {
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
   
// }
// var film = new Movie("Titanic", "ABC", "4star");
// console.log(`Movie title is  :  ${film.title}`);
// console.log(`Movie studio is :  ${film.studio}`);
// console.log(`Movie rating is :  ${film.rating}`);

// -------------------------------------------------------------------------------------------------------------


   //b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
   
   //Answer:
//    class Movie1
// {
//     constructor(title, studio, rating="PG")
//     {
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
// }
//     var film = new Movie1("Titanic", "ABC", "PG13");
//     var film1= new Movie1("Friends", "XYZ");
//     console.log(`Movie title is   :  ${film.title}`);
//     console.log(`Movie rating is  :  ${film.rating}`);
//     console.log(`Movie rating is  :  ${film1.rating}`);

//--------------------------------------------------------------------------------------------------------------

//c. Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only
//  those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. 
//  The returned array need not be full.

//Answer:
class Movie2
{
    constructor(title, studio, rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    
}
    var films = new Movie2("Titanic", "ABC studio", "PG13");
    var films1= new Movie2("Friends", "XYZ studio","PG");
    var films2= new Movie2("Frozen","new studio","PG13" );
    console.log(`movie rating1: ${films.rating}`);
    console.log(`movie rating2: ${films1.rating}`);
    console.log(`movie rating3: ${films2.rating}`);
    // var emptyarr=[];
    // get PG()
    // {
    //   return this.rating;
      
    // }
     const FindPG =  function (PG) {
    const Temp= [];
    for(let j = 0; j< films.rating; j++){
      if(this.rating==PG)
      {
        Temp.push(films.rating(j));
      }
    }
    return Temp;
    
}
console.log(Temp);

  
  
//------------------------------------------------------------------------------------------------------------------

//d.  Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
//Answer:

// class Movie3
// {
//     constructor(title, studio, rating)
//     {
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
   
// }
// var film = new Movie3("Casino Royale", "Eon productions", "PG13");
// console.log(`Movie title is  :  ${film.title}`);
// console.log(`Movie studio is :  ${film.studio}`);
// console.log(`Movie rating is :  ${film.rating}`);

//--------------------------------------------------------------------------------------------------------------------

//2. Circle - class

// Answer:
// class Circle
// {
//     constructor(radius, color)
//     {
//         this.RADIUS=radius;
//         this.COLOR=color;
//     }
//     set Radius(r)
//     {
//      this.RADIUS =r;
//     }
//     get Radius()
//     {
//        return this.RADIUS;
//     }
//     set color(c)
//     {
//        this.COLOR =c; 
//     }
//    get color()
//    {
//     return this.COLOR;
//    }
//    get tostring()
//    {
//     return `"Circle[radius=${this.radius},color=${this.color}]"`
//    }
//    get area()
//    {
//     return Math.PI*this.RADIUS*this.RADIUS;
//    }
//    get Circumference()
//    {
//     return 2*Math.PI*this.RADIUS;
//    }
// }

// var result= new Circle (1.0, "red");   //get
// console.log(result.Radius);          
// result.Radius = 4                     //set
// console.log(result.Radius);
// console.log(result.color);
// result.color = "Blue";
// console.log(result.color);
// console.log(result.tostring);
// console.log(result.area);
// console.log(result.Circumference);

//-------------------------------------------------------------------------------------------------


// 3. Person class to hold all the details:
//Answer:

// class Person
// {
//     constructor(name, age, gender, city)
//     {
//           this.name= name;
//           this.age=age;
//           this.gender=gender;
//           this.city=city;

//     }
// }
// var details = new Person("Nathisha", "27", "Female", "chennai");
// console.log(`The name of the person is   : ${details.name}`);
// console.log(`The age of the person is    : ${details.age}`);
// console.log(`The gender of the person is : ${details.gender}`);
// console.log(`The city of the person is   : ${details.city}`);

// ----------------------------------------------------------------------------------------------


// 4. Calculate the uber price:

//Answer:

// class Uber
// {
//     constructor (kilomtr,price=50)
//     {
//     this.KM= kilomtr;
//     this.PRICE=price;
//     }
   
//     get price()
//     {
//        console.log("Getting price");
//        return  this.KM * this.PRICE;
//   }
// }
// var UBER1=new Uber(100);
// var UBER2 = new Uber(5, 100);
// console.log(UBER1.price);
// console.log(UBER2.price);

//------------------------------------------------END---------------------------------------------------------------








