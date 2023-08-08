// V.0 แสดงเฉพาะตัวที่มากสุด
// V.1 Handle เลขที่ไม่เหมือนกัน => แสดงผลเป็นการเรียงลำดับ มาก ไป น้อย
// V.2 Handle เลขที่เหมือนกันได้

let x = Number(prompt('Enter number 1'));
let y = +prompt('Enter number 2');
let z = prompt('Enter number 3') * 1;

// V.0 แสดงเฉพาะตัวที่มากสุด
// CASE1 : x มากสุด
// CASE2 : y มากสุด
// CASE3 : z มากสุด
// DRY Principle : Don't Repeat Yourself
// let max;

// if (x > y && x > z) {
//     max = x;
// } else if (y > x && y > z) {
//     max = y;
// } else if (z > x && z > y) {
//     max = z;
// }

// console.log(`MAX = ${max}`);

// V.1 Handle เลขที่ไม่เหมือนกัน => แสดงผลเป็นการเรียงลำดับ มาก ไป น้อย
// CASE1 : x มากสุด
//         1A : y มากกว่า z
//         2A : z มากกว่า y
// CASE2 : y มากสุด
// CASE3 : z มากสุด
// DRY Principle : Don't Repeat Yourself


let max;
let mid;
let min;

// if (x >= y && x >= z) {
//     max = x;
//     if (y >= z) {
//         mid = y;
//         min = z;
//     } else {
//         mid = z;
//         min = y;
//     }
// } else if (y >= x && y >= z) {
//     max = y;
//     if (x >= z) {
//         mid = x;
//         min = z;
//     } else {
//         mid = z;
//         min = x;
//     }
// } else if (z >= x && z >= y) {
//     max = z;
//     if (x >= y) {
//         mid = x;
//         min = y;
//     } else {
//         mid = y;
//         min = x;
//     }
// }

// console.log(`${max} : ${mid} : ${min}`);


// คิดแบบ 6 กรณี
if (x >= y && x >= z && y >= z) {
    // x,y,z
    max = x;
    mid = y;
    min = z;
} else if (x >= y && x >= z && y < z) {
    max = x;
    mid = z;
    min = y;
} else if (y >= x && y >= z && x >= z) {
    max = y;
    mid = x;
    min = z;
} else if (y >= x && y >= z && x < z) {
    max = y;
    mid = z;
    min = x;
} else if (z >= x && z >= y && x >= y) {
    max = z;
    mid = x;
    min = y;
} else {
    max = z;
    mid = y;
    min = x;
}

console.log(`${max} : ${mid} : ${min}`);

