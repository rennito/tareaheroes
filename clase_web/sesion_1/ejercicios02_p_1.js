/*teniendo en cuenta las siguientes variables:*/
const a = true;
let b = false;
const c = true;

/*resolver: a || b && c
resolver: a || (b && c)*/

console.log (a || b && c);

console.log (a || (b && c));