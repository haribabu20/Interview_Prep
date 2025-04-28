// 4. Program to find Reverse of a string without using built-in method ?


// Without any inbuilt methods
const reverse = (str) => {
  let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let rev='';
  for(let i=newStr.length-1;i>=0;i--){
    rev += newStr[i]
  }
  return rev
}



//with inbuilt method
const reverseInbuilt = (str) => {
  return str.split('').reverse().join('');
};




console.log(reverse('String array')) // yarragnirts
console.log(reverseInbuilt('Welcome, Home')) // emoH ,emocleW