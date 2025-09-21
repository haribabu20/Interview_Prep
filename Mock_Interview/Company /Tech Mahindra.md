
02/09/2025 - technical interview

1. Introduction
2. Closures
3. Pass by value and pass by reference
4. var, let and const
5. Event looping
6. typeof null[object] and Array[function]
7. generator in js
8. HOF
9. local and session storage
10. 
  x = 5
  y = --x
  console.log(x, y) // 4,4 
  If x-- then 4,5
11. 
  (i)
  for(var i=0; i<3;i++){
    setTimeout(()=>console.log(i),2000);
  }
  output: 3 3 3

  (ii)
  for(let i=0; i<3;i++){
    setTimeout(()=>console.log(i),2000);
  }
    output: 0 1 2
12. 
  console.log("1")
  promise -> console.log("2")
  setTimeout -> console.log("3")
  console.log("4")

  o/p: 1, 4, 2, 3

13. Difference between class and functional component
14. diffing algorithm
15. about useReducer
16. controlled and uncontrolled component
17. performance optimization
18. HOC
19. say you have an api, and instead of calling it all the time the api in all components, how can you reuse those
20. lifting state up
21. what is props drilling. What methods we use to avoid props drilling ?
22. how can we persist the datas in your react application on any page refresh ? - local storage and session storage
23. What is virtualisation list in react JS





15/09/2025 - client interview

1. Introduction
2. what is lazy loading and how it is used in optimisation
3. consider you have wide range of user data and you plan to include only 10 user details. how ? -- [cannot even understand the qn they asked]
4. what is redux
5. useContext, useState, useRef
6. what are all hook available in redux
7. what is the adv of rtk over redux
8. consider you have 10 csv file to upload and in return you need only 1 enhanced file. how can you acheive this ?
9. how can you make sure that the component is not re rendered
10. I/P = ['name','country','people']. --> O/P = ['Name','Country','People']
11. I/P ---> arr1 = ['ball','bat','catch'], arr2 = ['ball','bat']  O/P ---> ['catch']