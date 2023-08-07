let p = prompt("Number")

if(p > 0)
{console.log("Positive number")
} 
else if (p > 0)
{console.log("Positive number")    
}
else if (p == 0)
{console.log("Zero")    
}
else if (p < 0)
{console.log("Negative number")    
}
else if (isNaN(p))
{alert("Invalid number") 
}

// let num1 =prompt('Enter number 1')

// ########################################
// Input : null, '', "qseqwd", "12"
// null === null [ok]
// '', '      ', => str.trim() == ""
// "qseqwd" => isNaN (ture เมื่อค่านั้นเป็น NaN)
//########################################

// colsole.log(num);

//########################################
// IF - ELSE
// Guard-Clause
//########################################


// if (num === null || num.trim() ==='' || isNaN(num){ 
//    alert('Invalid number')
// }

// "string'.trim() => can use
// null.trim() => can not use

// Solution by Aj.P
// let num1 =prompt('Enter number 1')
// colsole.log(num);
// if (num === null || num.trim() === '' || isNaN(num)) {
//    alert('Invalid Number');
//} else if (+num > 0) {
//    alert('Positive Number');
//} else if (+num == 0) {
//    alert('Zero');
//} else if (+num < 0) {
//    alert('Negative Number');
//}