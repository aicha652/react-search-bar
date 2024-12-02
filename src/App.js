import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState("")

  const options = [
    {id: 1, language: "Python"},
    {id: 2, language: "Java"},
    {id: 3, language: "JavaScript"},
    {id: 4, language: "C"},
    {id: 5, language: "C++"},
    {id: 6, language: "C##"},
    {id: 7, language: "Ruby"},
    {id: 8, language: "Php"},
  ]

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onclick = (searchValue) => {
    setValue(searchValue)
  }

  return (
    <div>
      <div className='container'>
        <p>Search</p>
        <input 
            type="text"
            value={value}
            onChange={onChange}
             />
        <button onclick={() => onclick(value)}>Search</button>
      </div>
      <div className='drop-down'>
        { options.filter((item) => {
          const searchValue = value.toLowerCase()
          const option = item.language.toLowerCase()

          return searchValue && option.startsWith(searchValue)
        })
        
        .map((item) => (
          <div onClick={() => onclick(item.language)}>{ item.language }</div>
          )) }
      </div>
    </div>
  );
}

export default App;
