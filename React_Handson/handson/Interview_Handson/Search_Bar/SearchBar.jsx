import { useState } from "react";

const Parent = () => {
  const cityName = [
    'Chennai',
    'Mumbai',
    'Kolkata',
    'Delhi',
    'Coimbatore',
    'Bengaluru',
    'Madurai',
    'Vrindavan'
  ];

  const [searchValue, setSearchValue] = useState('');

  const filteredCities = cityName.filter((city) =>
    city.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <input
        type='text'
        placeholder='Search cities...'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <ul>
        {filteredCities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default Parent;


/*

1. Routes Setup
<Route path='/' element={<About/>}>  <Route/>
<Route path='/user/:id' element={<About/>}>  <Route/>


2. Navigation to dynamic route
<nav>
  <Link to='/user/101'> User 101 <Link/>
  <Link to='/user/102'> User 102 <Link/>
<nav/>


3. Using useParams
 = userparams()



*/