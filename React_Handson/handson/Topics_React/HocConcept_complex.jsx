
// HOC concept with using props


// Main Component
const App = () => {
const EnhancedParent = HocComponent(ParentComponent) ;
return(
  <>
    <EnhancedParent text="Hello"/>
  </>
)
}


// Higher Order Component
const HocComponent = (WrapperComponent) => {

  return (props) => {

    return (
      <>
        <h1>Passed via HOC</h1>
        <WrapperComponent {...props}/>
      </>
    )

  }
}


// Wrapped Component
const ParentComponent = (props) => {
  const {text} = props;
  return (
    <div>
      <h1>{text} Parent Component</h1>
    </div>
  )
}

// Exporting the main component
export default App;




/*

Output:

    Passed via HOC
    Hello Parent Component


Explanations:

    we gave like  ->  <EnhancedParent text="Hello" />
    It means like ->  <HocComponent(ParentComponent) text="Hello" />

    <WrapperComponent {...props} />   is exactly the same as:
    <WrapperComponent text="Hello" />  The spread operator breaks down the object and passes each property like this:

    Example 2:

    // props = { text: "Hello", id: 10 }
    
    <WrapperComponent {...props} />

    // becomes
    <WrapperComponent text="Hello" id={10} />





Mistake:

  1. In HOC return statement, you'll be passing a function right. So for that function you have to give a parameter called props.
  instead of passing props, i gave like {props} 



*/