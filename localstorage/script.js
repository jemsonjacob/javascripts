// var user={
//     username:"shyam",
//     email:"shyam@gmail.com",
//     password:"shyam123"
// }
// localStorage.setItem(user["username"],JSON.stringify(user))

// var data=JSON.parse(localStorage.getItem('jemson'))
// console.log(user.password)
function login(username,password){
    let userdata=JSON.parse(localStorage.getItem('username'))
    if(userdata.password==password){
        console.log('succes');

    }
    else{
        console.log('invalid')
    }
}
login("shyam","shyam123")