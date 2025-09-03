

1. How you pass the data in request to server ? ---->   POST/PUT/PATCH methods and Interceptor using axios
2. Mount, Render, Re Render








1. How you pass the data in request to server ?

If you need to pass any data in request body, then we have 2 ways,
  - post method
  - interceptors


Example:


import 'axios' from axios;

// Adding the data into request body with interceptors

axios.interceptors.request.use(
  (config) => {

    if(config.data){
      config.data.modified = true;
    }

    return config;
  },
  (error) => {
    console.error("Requested Error: ", error)
  }

)

axios.interceptors.response.use(
  (response) => {

    console.log("Response --> ", response)
    return response.data;
  },
  (error) => {

    if(error.response.status === 401){
      console.warn("Unauthorised !!!, Redirecting back to login page")
      window.location.href("/login");
    }
    if(error.response.status === 500){
      alert("Server Error, Please try after sometime !!!")
    }
  }

)

axios.post('https://jsonplaceholder.com', {title:"New Post"})
.then((data) => {
  console.log("Processed response: ", data)
})
.catch((error) => {
  console.error("API call failed: ", error)
})



Output:

API request will now be sent with the following request body.

{
  "title": "New Post",
  "modified": true
}






2. Mount, render, re render


Mount:
  Component is inserted into the DOM for the first time.
  Mount = Birth (first time in DOM).

Render:
  React calls the component function to produce UI (happens on mount + updates).
  Render = Painting (describing UI).

Re-render:
  React calls the component again because state/props changed.
  Re-render = Repainting (when something changes).


  ✅ So you can say in interview:

      When we create a component, it first mounts into the DOM.
      During mount, React renders the UI.
      If state or props change, the component re-renders → React recalculates the virtual DOM and updates only the changed parts in the UI.



