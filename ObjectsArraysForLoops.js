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