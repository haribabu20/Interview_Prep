// Debouncing

let timer;        // this timer has to be declared initially. else we get error like --> cannot access 'timer' beofre its initialisation.

const input = document.getElementById('search');
const result = document.getElementById('result');

input.addEventListener('input', (event) => {
  clearTimeout(timer);
  timer = setTimeout(()=>{
    result.innerHTML = `API call triggered for ${event.target.value}`;
    console.log('API call triggered for', event.target.value);
  },2000)
})   


// When we type any character in search box --> addEventListener for ('input')





/*
                          Explanation:


Debouncing:

Debouncing is a technique where we delay the function execution (like API call) until a certain time (like 500ms) after the last event (like keystroke). 💯🔥
👉 If the user keeps typing, the timer resets again. 🚀

Every time the user types (input event), you:

clearTimeout(timer) → cancel the previous scheduled execution.
setTimeout(...) → start a new timer.
Only if the user stops typing for 2000ms (2s), the callback executes and you trigger your "API call".
If the user types before 2s, the timer resets again → delaying execution.
That’s exactly debouncing ✅




Throttling:

Throttling is a technique where we allow the function (like API call) to execute only ONCE in a fixed time interval (like every 2 seconds) no matter how many times the event occurs. 



*/