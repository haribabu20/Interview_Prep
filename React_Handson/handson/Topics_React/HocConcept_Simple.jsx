
// HOC concept without using any props


// Main Component
const App = () => {
const EnhancedParent = HocComponent(ParentComponent) ;
return(
  <>
    <EnhancedParent/>
  </>
)
}


// Higher Order Component
const HocComponent = (WrapperComponent) => {

  return () => {

    return (
      <>
        <h1>Passed via HOC</h1>
        <WrapperComponent/>
      </>
    )

  }
}


// Wrapped Component
const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
    </div>
  )
}

// Exporting the main component
export default App;




/*

Output:

    Passed via HOC
    Parent Component


Mistake:

  1. Make sure that you're passing a function for the return statement of the HOC Component.

  2. That function which you're passing into the HOC Component should have another return statement where we can have the JSX element. ---> I made this mistake in the first place.


*/