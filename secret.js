let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// removing the last element of the array
secretMessage.pop();
// add two elements in array
 secretMessage.push('to','Program');
 // changing element on index 7 from easily to right
 secretMessage[7]='right';
 // remove first elemrnt in array
 secretMessage.shift();
 // add an element at the beginning of the array
 secretMessage.unshift('Programming');
 // converting 5 elements of the array into one element
 secretMessage.splice(6,5,'know');

 console.log(secretMessage.join(' '));