// Debouncing and Throttling


let timer;
const input = document.getElementById('search');
const result = document.getElementById('result');

input.addEventListener('input', function(event) {
  clearTimeout(timer); // Clear the previous timer

  timer = setTimeout(() => {
    // Imagine this is your API Call
    result.innerHTML = `API Call Sent for: ${event.target.value}`;
    console.log("API Call Sent for:", event.target.value);
  }, 2000);
});









/*
                          Explanation:


Debouncing:

Debouncing is a technique where we delay the function execution (like API call) until a certain time (like 500ms) after the last event (like keystroke). 💯🔥
👉 If the user keeps typing, the timer resets again. 🚀

Throttling:

Throttling is a technique where we allow the function (like API call) to execute only ONCE in a fixed time interval (like every 2 seconds) no matter how many times the event occurs. 



*/