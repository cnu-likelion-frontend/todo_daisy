import './App.css';
import { useState, useRef } from 'react';
import Responsive from './MediaQuery';


const { Desktop, Mobile } = Responsive;

const dummys = [
  'ride a bike',
  'take a rest',
  'eat the world',
  'kakao',
  'daum',
  'likelion'
]

function App() {
  const [lists, setLists] = useState(dummys);
  const inputRef = useRef();

  //filtered list required

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = inputRef.current.value;

    //setLists update
    setLists([...lists, newTodo])
    
    inputRef.current.value = "";
  }

  return (
    <>
      <Desktop>
        <form action="" onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" placeholder='Create a new todo...' />
        </form>
        <ul>
          {lists.map((list, index) => (
            <li key={index} className='flex'>
              <input type="checkbox" name="" id="" />
              <p>{list}</p>
            </li>
          ))}
        </ul>
      </Desktop>
      <Mobile>
        HI Mobile
      </Mobile>
    </>
  );
}

export default App;
