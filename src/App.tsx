import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyName from './components/MyName'
import LetIndex from './components/LetIndex'
import StateIndex from './components/StateIndex'
import MyAge from './components/MyAge'
import ElementList from './components/ElementList'


type typeArrayUsers = {
  name: string,
  age: number
}[]

function App() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const [count, setCount] = useState(0)

  const arrayUsers: typeArrayUsers = [{
    name:"Alice",
    age:35,
  },
  {
    name:"Marry",
    age:27,
  }]
  const names = [{name: "Murad"},{name: "Wow"},{name: "Key"}]
  return (
    <>
      <div>
        {arrayUsers.map((elem,index)=>(
          <li key={index}>
            {elem.name} - Возраст {elem.age}
          </li>
        ))}
        <MyName 
        name={names[0].name}  
        className1={"read-the-docs"}
        >
          <MyAge age={20}/>
          <ElementList name={names[0].name} isPacked={true}/>
        </MyName>
        <MyName 
        name={names[1].name}  
        >
          <MyAge age={22}/>
          <MyAge age={48}/>
          <ElementList name={names[1].name} isPacked={false}/>

        </MyName>
        <MyName 
        name={names[2].name}  
        className1={"read-the-docs"}
        >
          {null}
          <ElementList name={names[0].name} isPacked={false}/>
        </MyName>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <LetIndex/>
        <StateIndex index={index1} setIndex={setIndex1}/>
        <StateIndex index={index2} setIndex={setIndex2}/>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
