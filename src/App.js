import './App.css';
import { useState, useRef } from 'react';
import Responsive from './MediaQuery';

const { Desktop, Mobile } = Responsive;

const newID = function () {
  return Math.random().toString(36).substr(2, 16);
}

const dummys = [
  {
    id: newID(),
    text:'ride a bike'
  },
  {
    id: newID(),
    text:'eat the world'
  },
  {
    id: newID(),
    text:'take a rest'
  },
  {
    id: newID(),
    text:'kakao'
  },
  {
    id: newID(),
    text:'likelion'
  },
]

function App() {
  const [lists, setLists] = useState(dummys);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = inputRef.current.value;

    //setLists update
    setLists([...lists, { id: newID(), text: newTodo }])

    inputRef.current.value = "";
  }


  const deleteItem = (id) => {
    const filteredItems = lists.filter(item => item.id !== id);
    setLists(filteredItems);
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
                  <div className='todo-input-check'>
                    <input className="todo-check" type="checkbox" id="check" value=""></input>
                    <label htmlFor="check" className="checkbox-label"></label>
                  </div>
                  <input ref={inputRef} type='text' className='todo-input' placeholder='Create a new todo…'></input>
                </div>
              </div>
              <ul className="todo-list">
                {lists.map((item, index) => (
                  <li key={item.id} className="todo-item">
                    <input className="todo-check" type="checkbox" id={`check${index + 1}`} value=""></input>
                    <label htmlFor={`check${index + 1}`} className="checkbox-label"></label>
                    {item.text}
                    <span onClick={() => deleteItem(item.id)} className="material-icons">
                      close
                    </span>
                  </li>
                ))}
                <li className='footer'>
                  <div className='count'>
                    <p className='count-item'>{lists.length}</p><p>items left</p>
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
        <div className='mobile-background-img'></div>
        <div className='mobile-main'>
          <div className='mobile-title'>TODO</div>
            <div className="mobile-container">
              <div className='mobile-todo-input-wrapper'>
                <div className='mobile-todo-input-item'>
                <div className='todo-input-check'>
                  <input className="todo-check" type="checkbox" id="check" value=""></input>
                  <label htmlFor="check" className="checkbox-label"></label>
                  </div>
                  <input ref={inputRef} type='text' className='mobile-todo-input' placeholder='Create a new todo…'></input>
                </div>
              </div>
              <ul className="mobile-todo-list">
                {lists.map((item, index) => (
                  <li key={index} className="mobile-todo-item">
                    <input className="todo-check" type="checkbox" id={`check${index + 1}`} value=""></input>
                    <label htmlFor={`check${index + 1}`} className="checkbox-label"></label>
                    {item.text}
                  </li>
                ))}
                <li className='mobile-footer'>
                  <div className='mobile-count'>
                      <p className='count-item'>5</p><p>items left</p>
                  </div>
                  <div className='mobile-clear'>
                  <button>Clear Completed</button>
                  </div>
                </li>
              </ul> 
              <div className='mobile-buttons'>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
              </div>
            </div>
          </div>
      </Mobile>
    </>
  );
}

export default App;
