import "./scss/main.scss"

let j = 0;
for ( ; ; ) {
    let i = Math.random();
    if (i<0.5) continue;
    console.log(i);
    j++
    if(j>20) break;
   
} // 9..0

let list  = { 
    one: 'text',
    two: 'two text',
 }
 
 let list2  = { 
    w999: 'text',
    w2: 'two text',
 }
 for(let val of list){
     console.log(val)
 }