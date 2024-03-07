const input ='eastern union';
const vowels =['a', 'u', 'i', 'o', 'e'];
let resultArray = [];
for(let i = 0; i < input.length; i++){
    //console.log('i is '+ i);
    for(let j = 0; j < vowels.length; j++){
          //  console.log('j is '+ j);
          if(input[i] === 'e' || input[i] === 'u'){
            resultArray.push(input[i]);
          }
          if(input[i] === vowels[j]){
           // console.log(vowels[j]);
            resultArray.push(vowels[j]);
        }
           
    }
}

let resultString = resultArray.join(' ').toUpperCase();
console.log(resultString);