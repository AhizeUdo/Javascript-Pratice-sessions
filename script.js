// alert("You have to be above 18 to use this vehicle");
// var get_name = prompt("What is your name: ");
// var get_age = prompt("What is your age: ");
// if(get_age === 18){
//     alert("Congratulations Mr/Mrs " +get_name+ " on your first year of driving. Enjoy the ride!");
// }
// else if(get_age > 18){
//     alert("Powering up!!, enjoy your ride.");
// }
// else{
//     alert("Sorry Mr/mrs " +get_name+ " you are too young to drive this car. Powering off");
// }


// if(get_age > 18){
//     alert("Powering up!!, enjoy your ride.");
// }else{
//     alert("-- you cant use this vehicles");
// }

// var D = 0
// var R = '!'
// var fun = ' and i love hate javascript'

// var Name = ['James', 'Jude', 'Paul']
// for(D; D<Name.length;D++){
//     console.log(Name[D]+R+fun);
// }




// function func_action(current_height, current_mass){
//     return current_mass / current_height**2 ;
// }
// var current_user = prompt("Enter your name: ");
// var current_height_n = Number(prompt("Enter your height: "));
// var current_mass_y = Number(prompt("Enter your mass: "));
// alert(func_action(current_height_n,current_mass_y));

// function  call_action(height, mass){
//     return mass / height ** 2
// }
// alert(call_action(8, 2));

// clas work two.
// var user_one = prompt("Enter your name: ")
// var user_height = Number(prompt("Enter Height: "));
// var user_mass = Number(prompt("Enter mass: "));
// var height_data = user_height ** 2;
// var print_out = user_mass / height_data
// var user_one_data = print_out;
// var user_two = prompt("Enter your name: ")
// var user_height_two = Number(prompt("Enter Height: "));
// var user_mass_two = Number(prompt("Enter mass: "));
// var height_data_two = user_height_two ** 2;
// var print_out_two = user_mass_two / height_data_two
// var user_two_data = print_out_two;
// alert("Mr " + user_one + " has a body mass index of " + user_one_data);
// alert("Mr " + user_two + " has a body mass index of " + user_two_data);
// if(user_one_data > user_two_data){
//     alert(user_one + " body mass is higher than the body mass of " + user_two); 
// }

// Assignment No 2 
// Random Guessing game.

// var print_random = Math.floor(Math.random() * 10) + 1;
// var user_input = Number(prompt("Enter your Number: "));
// if(user_input === print_random){
//     alert(" Good Work ");
// }else{
//     alert("Not matched")
// }

// Assignment No 1 
// Area of a triangle

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
//if the formula for finding the area of a triangle is A = 1/2(b*h)

// since the lengths has been given

// var a = 5
// var b = 6
// var c = 7
// var A = a + b + c ;
// var A_final = A / 2;
// var Area_triangle = Math.sqrt(A_final*((A_final-a)*(A_final-b)*(A_final)));
// console.log(Area_triangle);

// var length_a = 1
// var length_b = 2
// var length_c = 3
// var A = (length_a+length_b+length_c)/2;
// var Area = Math.sqrt(A*((A - length_a)*(A - length_b)*(A - length_c)));
// console.log(Area);


//Trial session 1 

// Objects
// var user =  {
//     name: "Vald",
//     age: 89,
//     city: "Texas",
//     marital_status: false,
//     Hobbies: ["Coding", "sleeping", "Gaming"],// array in object 
//     greet:function(){
//         console.log("Hello there, i am Vald");//function
//     }
// }; 
// when for loop is created and this objects is tried to print out, it wont work, so you have to create object in array.

//array
// var user = [
//     {
//         name: "Vald",
//         age: 45,
//         city: "Malibu",
//         Hobbies: ["eating", "sleeping", "coding"],//array in object in array
//         greet:function(){
//            console.log("Hello there, i am Vald");//function
//         }
//     }
// ]

// write for loop to print 

// for(let i = 0; i < user.length; i++){
//     console.log(user[i]);
// }

//foreach 
// for each is also used as a for loop 

// user.forEach(function(f){
//     console.log(f);
// })



//object in array 
// var list = [
//     {
//         username: "Vlad",
//         password: "123455"
//     },
//     {
//         username: "James",
//         password: "554321"
//     },
// ] 
// create for loop to print contents of objects in array 

// for(var  i = 0; i<user.length; i++){
//     console.log(user[i])
// }


// class session 4

// var workers = [
//     {
//         name: "John",
//         age: 35,
//         state: "Anambra",
//         work_station: "Dancer",
//         hobbies: ["sleeping", "coding", "eating"],
//         present:function(){
//             console.log("hello there!!");
//         }
//     }
// ]

// for(var i = 0; i<workers.length; i++){
//     console.log(workers[i])
// // }
// workers.forEach(function(e){
//     console.log(e)
// })

// workers.forEach(function(r){
//     console.log(r)
// })

// Assignment session 4

// var admin_now = [
//     {
//         username: "James",
//         password: 1234566
//     },
//     {
//         username: "Paula",
//         password: 543211
//     },
//     {
//         username: "Sodam",
//         password: 543211003939
//     },
//     {
//         username: "Kola",
//         password: 543211788383
//     },
//     {
//         username: "justina",
//         password: 543211675
//     },
//     {
//         username: "sofiia",
//         password: 54321134
//     }
// ]

// for(var i = 0; i < admin_now.length; i++){
//     if(i === 0){
//         console.log(admin_now[2])
//     }
// }
 

// try to use if statement after the loop to print just one object in array 



// //trial session 4

// var agent_name = prompt("Enter your name: ");
// var agent_password = prompt("Enter your password: ");
// var get_list = prompt("Enter index of data you wish to print: ");
// var agent_admins = [
//     {
//         username: "James",
//         password: 1234566
//     },
//     {
//         username: "Paula",
//         password: 543211
//     }
       
// ]

// var convicts_list = [
//     {
//         name: "James Raul",
//         age: 56,
//         crime: "Murder, Rape, Arson",
//         time: "lifetime"

//     },
     
//     {
//         name: "Paula Rottikinson",
//         age: 36,
//         crime: "Theft, Arson, Fraud",
//         time: "12 Years"

//     },

//     {
//         name: "Janet Rogers",
//         age: 27,
//         crime: "Murder",
//         time: "lifetime"

//     },

//     {
//         name: "Andrew Arnold",
//         age: 41,
//         crime: "Murder, Rape",
//         time: "lifetime"

//     },

//     {
//         name: "Barney Raul",
//         age: 59,
//         crime: "Arson, Insurance Fraud",
//         time: "lifetime"
//     }
// ]

// for(task = 0; task <  convicts_list.length; task++){
//     if(task === 0){
//         console.log(convicts_list[get_list])
//     }
// }

// Develop a facebook login application, it will have two logins(users(John, Joshua)) if John logs in he can veiw his newsfeed. 
// if entry is wrong it will tell you wrong user name etc, specify which input is wrong..


//assignment 05 

// var enter_user = prompt(" Enter your username: ")
// var enter_pass = prompt(" Enter your password: ")
// var print_user = prompt(" select user you would like to print: ")


// const users_pack = [
//     {
//         username: "James",
//         password: 123456
//     },
//     {
//         username: "Sandra",
//         password: 334556
//     },
//     {
//         username: "Paul",
//         password: 234567
//     }
// ]

// const user_pack = [
//     {
//     gender: "male",
//     age: 34,
//     title: "Mr",
//     first: "Britkinson",
//     last: "James",
//     email: "BrikJamee@gmail.com",
//     state: "Texas",
//     city: "Fordale",
//     miscellaneous: "Sleeping, eating, coding."
//     },
//     {
//     gender: "female",
//     age: 29,
//     title: "Miss",
//     first: "Pokemoniz",
//     last: "Sandra",
//     email: "sandyxo12e@gmail.com",
//     state: "Ohio",
//     city: "lorthville",
//     miscellaneous: "reading –I've always been a huge reader. It's a great hobby for relaxation and self-care, as well as a wonderful educational hobby to learn new skills or information."
//     },
//     {
//     gender: "female",
//     age: 29,
//     title: "Miss",
//     first: "Bullsworth",
//     last: "Jane",
//     email: "janexo12e@gmail.com",
//     state: "Ohio",
//     city: "lorthville",
//     miscellaneous: "reading –I've always been a huge reader. It's a great hobby for relaxation and self-care, as well as a wonderful educational hobby to learn new skills or information."       
//     } 
// ]

    
// for(i = 0; i < users_pack.length; i++){
//     if(enter_user == users_pack[i].username && enter_pass == users_pack[i].password){
//         console.log("-- Login Succesful!!");
//         const extract_func = user_pack.filter((func) =>{
//             return func.first === print_user
//         }) 
//         console.log(extract_func)
//     }
//     // else if(enter_user !== users_pack[i].username && enter_pass !== users_pack[i].password){
//     //     console.log("-- user not found")
//     // } 
// }


// // /     greet:function(){
// //     //         console.log("Hello there, i am Vald");//function
// //     //     }

// // Assignmnet 06 part A
// // let pack = "Javscript is tedious";
// // let new_pack = pack.replace('tedious', 'simple');

// // console.log(new_pack)



// OOP in JS 

// class work 

// class admin{
//     constructor(name,  age, state, marital_status, data){
//         this.name = name;
//         this.age = age;
//         this.state = state;
//         this.marital_status = marital_status;
//         this.data = data
//     }

//     display_func(){
//         alert(`${this.name} ${this.age} ${this.state} ${this.marital_status}`);
//     }

//     display_func_two(){
//         alert(`${this.name} ${this.data}`)
//     }
// }

// let exec_func = new admin("My name is James", "and my age is 34", "i am from lagos state", "also i am single", "and I love JavaScript ");
// exec_func.display_func_two();

// build speed limiter 
// normal speed = 70 
// every 5 km is added,  1 point will be added to the speed 
// one point  = 5km 
// if spoeed limit is passed(12 points ) = car has to break down 


// Speed Limiter 

// normal_speed = 70 
// raw_km = 5
// speed_limit = 0
// while( raw_km += 5){
//     alert("You've driven over 5km ")
//     speed_update = raw_km + normal_speed
//     alert("You are driving at " + speed_update+"Kmh")
//     if(raw_km > 5){
//         speed_limit += 1
//         alert("System is now at  " +  speed_limit  + "  points  " +" Please slow down")
//         if(speed_limit == 12){
//             alert("System is now at " + speed_limit + " points")
//             alert("System will bring your car to a stop, speed limit reached")
//         }
//     }
// }


// function check_list(){
//     for(let i = 0; i <= 100; i++){
//         var three = i % 3;
//         var five = i % 5;
//         if(!three && !five){
//             console.log("FizzBuzz");
//         }else if(!three){
//             console.log("Fizz")
//         }else if(!five){
//             console.log("Buzz")
//         }else{
//             console.log(i)
//         }
//     }
// }

// check_list();

// EvenOdd System.

// function get_even_odd_sys(){
//     let x = prompt("Enter choice number: ")
//     for(let i = 0; i < x; i++){
//         let valid = i % 2
//         if(valid == 0){
//             console.log(`The number ${i} is an even number`)
//         }else{
//             console.log(`The number ${i} is an odd number`)
//         }
//     }
// }

// get_even_odd_sys()




// Grading System. Trial session one 


// function grading_sys(){
//     let Maths_Grade = prompt("Enter your Maths Grade: ")
//     let English_Grade = prompt("Enter your English Grade: ")
//     let Physics_Grade = prompt("Enter your Physics Grade: ")
//     let Chemistry_Grade = prompt("Enter your Chemistry Grade: ")
//     for(let A = 75; A < 100; A++){
//         if(Maths_Grade == A){
//             console.log(" You have an A!! in Maths")
//         }else if(English_Grade == A){
//             console.log(" You have an A!! in English")
//         }else if(Physics_Grade == A){
//             console.log(" You have an A!! in Physics")
//         }else if(Chemistry_Grade == A){
//             console.log(" You have an A!! in Chemistry")
//         }
//     }
//     for(let B = 65; B < 74; B++){
//         if(Maths_Grade == B){
//             console.log(" You have a B!! in Maths")
//         }else if(English_Grade == B){
//             console.log(" You have a B!! in English")
//         }else if(Physics_Grade == B){
//             console.log(" You have an A!! in Physics")
//         }else if(Chemistry_Grade == B){
//             console.log(" You have a B!! in Chemistry")
//         }    
//     } 
//     for(let C = 50; C < 64; C++){
//         if(Maths_Grade == C){
//             console.log(" You have a C!! in Maths")
//         }else if(English_Grade == C){
//             console.log(" You have a C!! in English")
//         }else if(Physics_Grade == C){
//             console.log(" You have a C!! in Physics")
//         }else if(Chemistry_Grade == C){
//             console.log(" You have a C!! in Chemistry")
//         }   
//     }
//     for(let D = 40; D < 49; D++){
//         if(Maths_Grade == D){
//             console.log(" you have a D!! in Maths")
//         }else if(English_Grade == D){
//             console.log(" You have a D!! in English")
//         }else if(Physics_Grade == D){
//             console.log(" You have a D!! in Physics")
//         }else if(Chemistry_Grade == D){
//             console.log(" You have an D!! in Chemistry")
//         }
//     } 
//     for(let F = 0; F < 39; F++){
//         if(Maths_Grade == F){
//             console.log(" You have a F!! in Maths")
//         }else if(English_Grade == F){
//             console.log(" You have a F!! in English")
//         }else if(Physics_Grade == F){
//             console.log(" You have a F!! in Physics")
//         }else if(Chemistry_Grade == F){
//             console.log(" You have an F!! in Chemistry")
//         }
//     }
//     let final_score = Maths_Grade + English_Grade + Chemistry_Grade + Physics_Grade
//     let percentage = Math.floor(final_score / 400)
//     console.log(final_score)
//     console.log(` Your overall percentage is ${Math.floor(percentage)}!!`)
// }

// grading_sys()


// Grading System. Trial session two 

// function test(){
//     for(let A = 75; A < 100; A++){
//     }
//     for(let B = 65; B < 74; B++){       
//     } 
//     for(let C = 50; C < 64; C++){     
//     }
// }

// function grading_sys_two(test){
//     let x = 3
//     var name = prompt("Enter your name: ")
//     var ca_one = prompt("Enter your first CA test score:  ")
//     var mid_test = prompt("Enter your Mid-term test score: ")
//     var ca_two = prompt("Enter your second CA test score: ")
//     let x_one =  ca_one + mid_test + ca_two
//     let x_two = x_one / x
//     console.log(`Your percentage score is ${x_two}`)
// }
// grading_sys_two()


// function emoji_pack(){
//     let enquiry = prompt("How much'⭐' stars would you like to print: ")
//     for('⭐' = 0; '⭐' < enquiry; '⭐' += 1){
//         console.log('⭐')
//     }
// }

// emoji_pack()

// Emoji Pack 

// function emoji_pack(x, y){
//     let xy = prompt("Enter amount of stars you would like to see: ")
//     for(i = 0; i < xy; i++){
//         console.log(x += y)
//     }
// }
// emoji_pack('⭐', '⭐')

// let x = 150
// let y = 1000
// let z = x + y 
// console.log(z)


// function addition(x, y ){
//     console.log(x + y)
// }

// addition(150, 1000)

// use function that recieves parameters for the fizz buzz application.
// if you entered character not a number it should tell you its a character not a number. 

// function xy(){
//     let y =prompt("Input your number: ");
//     let z = 'Error'
//     for(a = 0; a < 1000; a++){
//         if(y == a){
//             for(let i = 0; i < y;){
//                 console.log(
//                     (++i%3 ? '': 'fizz') + (i%5 ? '' : 'buzz')|| i
//                 );
//             }
//         }
//     }
// }
// xy()



// function data(x){
//     let x  = prompt("Enter your number: ")
    
// }

// data()


// const output = fizzbuzz(70)
// console.log(output)
// function fizzbuzz(){
//     if(typeof input !== 'number')
//         return NaN;
//     if((input % 3 === 0) && (input % 5 === 0)) 
//         return 'Fizzbuzz';
//     if(input % 3 === 0)
//         return 'Fizz';
//     if(input % 5 === 0)
//         return 'Buzz';
        
//     return input    
// }
// function print_bank(){
//     const bank = [
//         1,2,3,4,5,6,7,8,9,10,11,12,13,15,16
//     ]
//     const play_bank = bank.map(bank_file => {
        
//     })
//     if(play_bank % 3 === 0)
//     return 'Fizz';
//     console.log(" test ")
//     console.log(play_bank)
// }
// print_bank()

// console.log(play_bank)


// for(let print_bank = 0; print_bank < bank.length; print_bank++){
//     console.log(print_bank)
// }

// if(x == bank[i]){
//     console.log("Welcome")
// }else{
//     console.log("Error")
// }


// Arrow Function Practice

// hello = function(){
//     console.log("Hello World")
// }
// hello()

// hello = () => {
//     console.log("hello owrld ")
// }
// hello()

// hello = (val) => "Hello World " + val;

// console.log(hello("John"))


//partial voting system 

// const name = prompt("-- Enter your name: ")
// const english = Number(prompt("-- Enter your English grade: "))
// const maths = Number(prompt("-- Enter your Maths grade: "))

// pack = () => "-- Dear Mr/Mrs/Miss " + name
// result = () => english + maths / 2;
// print_result = () => pack() + " You have scored " + result()+'%';

// console.log(print_result())


// const test = function(y){
//     return y + y;
// }
// console.log(test(4))


// Fizz Buzz

// const entry = Number(prompt("Enter your Number: "))
// pack = () => {
//     for(i = 0; i < entry; i++){
//         if((i % 3 === 0) && (i % 5 === 0)){
//             console.log("FizzBuzz")
//         }
//         if(i % 3 === 0){
//             console.log("Fizz")
//         }
//         if(i % 5 === 0){
//             console.log("Buzz")
//         }
//     }
// }
// pack()
    

// Declare a variable firstname and initialize it with the value 'omoefe'

// firstname = (omoefe) => "I am " + omoefe;

// console.log(firstname('Omoefe'))

// // Define a function greet returning the caluve 'Omoefe!'


// Greet = (print_set) => "Hello there, i am Mr " + print_set

// console.log(Greet('Omoefe!'))


// // Declare a variable salutation. call the function greet and assign the result of the call to the variable salution

// let salutation = Greet(('Jumping')+ 'Licking')
// console.log(salutation)

// Write a function length that takes a string and returns the number of characters of the string 


star=()=>"the rat is a dog"
star()
console.log(star())