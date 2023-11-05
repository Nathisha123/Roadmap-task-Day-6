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




// 2.
// class Movie
// {
//     constructor(title, studio, rating="PG")
//     {
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
// }
//     var film = new Movie("Titanic", "ABC", "4star");
//     var film1= new Movie("Friends", "XYZ");
//     console.log(`Movie title is   :  ${film.title}`);
//     console.log(`Movie rating is  :  ${film.rating}`);
//     console.log(`Movie rating is  :  ${film1.rating}`);

// 3.
// class Movie
// {
//     constructor(title, studio, rating="PG")
//     {
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
//     set Rating(n1)
//     {
//         console.log("setting movie with rating" +n1);
//         this.rating=n1;
//     }
//     get Rating()
//     {
//         console.log("getting movie with rating PG");
//         return this.rating="PG";
//     }
// }
// var film = new Movie("Titanic", "ABC studio", "4star");
//     var film1= new Movie("Friends", "XYZ studio");
//     var film2= new Movie("Frozen","new studio" );
//     console.log(Movie.rating);
    

// 4.
// class Movie
// {
//     constructor(title, studio, rating)
//     {
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
   
// }
// var film = new Movie("Casino Royale", "Eon productions", "PG13");
// console.log(`Movie title is  :  ${film.title}`);
// console.log(`Movie studio is :  ${film.studio}`);
// console.log(`Movie rating is :  ${film.rating}`);





// 3. Person class to hold all the details:

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



// 4. Calculate the uber price:

class Uber
{
    constructor (price)
    {
    this.PRICE= price;
    }
   
    get price()
    {
       console.log("Getting price");
       return  `${this.PRICE*50}`;
  }
}
var UBER1=new Uber(100);
console.log(UBER1.price);
var UBER2 = new Uber(50);
console.log(UBER2.price);


// Circle:
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



// class Movie
// {
//     constructor(title, studio, rating="PG")
//     {
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
//     set Rating(n1)
//     {
//         console.log("setting movie with rating" +n1);
// //         this.rating=n1;
// //     }
//     get Rating()
//     {
//         console.log("getting movie with rating PG");
//         return this.rating="PG";
//     }
// }
// for (var j=0)
// var film = new Movie("Titanic", "ABC studio", "4star");
//     var film1= new Movie("Friends", "XYZ studio");
//     var film2= new Movie("Frozen","new studio" );
//     console.log(Movie.rating);
    
