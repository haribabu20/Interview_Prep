
// Have a look onto react handson question - 1 [searching fruits]




function Customer({ num }) {
  let squared = useMemo(() => {
    return num * num;
  }, [num]);

  return <h1>{squared}</h1>;
}


/*

📘 Explanation (What you can say in the interview):

"Here, I'm using useMemo to calculate the square of a number passed as a prop.
React will only recalculate num * num when num changes.
If the parent re-renders without changing num, this avoids re-running the square logic."

*/