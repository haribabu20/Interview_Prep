
/*
String reversal

I/P --> "John Doe"
O/P --> "nhoJ eoD"

*/

// Done in first attempt by me without refering any source !!


const str = "John Doe"

let temp = '';
let word = '';

for(let i=0; i<str.length; i++){
    if(str[i] === ' '){
        for(let j=temp.length-1; j>=0; j--){
            word += temp[j];
        }
        word += ' ' // for space between words.
        temp = ''
    }else{
        temp += str[i];
    }
}

for(let j=temp.length-1; j>=0; j--){
    word += temp[j];
}


console.log(word)