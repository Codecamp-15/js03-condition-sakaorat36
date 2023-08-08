let user = prompt("Input Username")

if (user = '') {
    user = 'guest'
} else if (user = 'codecamp') {
    let password = prompt("Input Password")
    if (password = '123456') {
        user = 'codecamp'
    } else {
        alert('Wrong password')
    }
} else {
    user = 'guest'
}

alert('Welcome' + ' ' + user)

