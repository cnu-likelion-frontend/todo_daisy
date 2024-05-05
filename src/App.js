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
      <div className='to-do-wrapper'>
        <div className='background-img'></div>
        <div className='main'>
          <div className='title'>TODO</div>
            <div className="container">
              <div className='todo-input-wrapper'>
                <div className='todo-input-item'>
                  <input className="todo-check" type="checkbox" id="check" value=""></input>
                  <label htmlFor="check" className="checkbox-label"></label>
                  <input ref={inputRef} type='text' className='todo-input' placeholder='Create a new todo…'></input>
                </div>
              </div>
              <ul className="todo-list">
                {lists.map((item, index) => (
                  <li key={index} className="todo-item">
                    <input className="todo-check" type="checkbox" id={`check${index + 1}`} value=""></input>
                    <label htmlFor={`check${index + 1}`} className="checkbox-label"></label>
                    {item}
                  </li>
                ))}
                <li className='footer'>
                  <div className='count'>
                      <p className='count-item'>5</p><p>items left</p>
                  </div>
                  <div className='buttons'>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                  </div>
                  <div className='clear'>
                  <button>Clear Completed</button>
                  </div>
                </li>
              </ul>
              
            </div>
          </div>

      </div>
      </Desktop>
      <Mobile>
    
      </Mobile>
    </>
  );
}

export default App;
