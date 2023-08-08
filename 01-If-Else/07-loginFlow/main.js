let username = prompt("username")
let password = prompt("password")

if (username == '' || password == '') {

    if (username == '') {
        alert('username is required')
    } else {
        alert('password is required')
    }

} else if ((username == 'admin' && password == '1234') || (username == 'john' && password == 'qwerty')) {

    alert('Hello' + ' ' + username)

}

else {
    alert('invalid username or password')
}


