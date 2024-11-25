console.clear();

{

for(let i=1; i<=5; i++){
    console.log(i);
}

for(var i=1; i<=5; i++){
    console.log(i);
}

for(i=1; i<=5; i++){
    console.log(i);
}

let a = [1, 2, 3];
for(var i=0; i<a.length; i++) {
    console.log(`a[${i}] --> ${a[i]}`);
}

console.log(`a[${i}] --> ${a[0]}`);
console.log(`a[${i}] --> ${a[1]}`);
console.log(`a[${i}] --> ${a[2]}`);



}