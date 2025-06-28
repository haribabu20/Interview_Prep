import { useState } from "react";

const Parent = () => {

  const cityName = ['Chennai', 'Mumbai', 'Kolkata', 'Delhi', 'Coimbatore', 'Bengaluru', 'Madurai', 'Vrindavan'];

  const [searchValue, setSearchValue] = useState('');

  let list = cityName.filter((li)=>(
    li.toLowerCase().includes(searchValue.toLowerCase())
  ))

  return(
    <div>
      <input type='text' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}></input>


      {
        list.map((lis,idx) => (
          <ul>
            <li key={idx}>{lis}</li>
          </ul>
        ))
      }

    </div>


  )

}

export default Parent;
