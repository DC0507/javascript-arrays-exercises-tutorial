let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
let parArray = par.toLowerCase().split('');
for (let i=0; i<parArray.length-1; i++){
    if(parArray[i] in counts && parArray[i] != ''){
        counts[parArray[i]] += 1;
    } else{
        counts[parArray[i]] = 1;
    }
}
console.log(counts);