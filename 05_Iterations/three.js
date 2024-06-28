// for applying loop in objects we use for in loop
 const myobj = {
    js:'javascript',
    py:'python',
    cpp:'c++',
 }
 for (const key in myobj) {
 console.log(`${key} short cut is for ${myobj[key]}`);
 }