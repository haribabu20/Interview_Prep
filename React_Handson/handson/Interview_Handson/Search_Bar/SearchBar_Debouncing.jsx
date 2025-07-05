import React, { useState, useEffect } from 'react';

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

  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchValue(inputValue);
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  const filteredCities = cityName.filter((city) =>
    city.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <input
        type='text'
        placeholder='Search cities...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
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