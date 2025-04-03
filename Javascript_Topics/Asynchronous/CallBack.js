/*
    Callbacks are functions that are passed as arguments to other functions and is executed after the completion of that function.


*/

function call(){
    console.log("Hello");
}

function callback(call){
    setTimeout(() => {call()}, 1000);
}


// Call the callback function with the call function as an argument
callback(call);