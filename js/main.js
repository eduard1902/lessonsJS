// var obj = {
//     a: 5,
//     b: 9,
//     c: 7,
//     d: 'JavaScript',
//     f: {
//         e: 8,
//         n: 0,
//     },
//     z: [5, 3, 7, 1]
// };

// obj.d = 'JQuery';

// obj.x = 'JavaScript';

// console.log(obj);
let parent = document.getElementById('parent');
let xuu = document.getElementById('xuu')
let sobj = xuu.querySelector('.elem');

console.log(sobj);
let clone = sobj.cloneNode(true);

parent.appendChild(clone);
console.log(clone);
