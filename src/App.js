import './App.css';
import Responsive from './MediaQuery'; 

const { Desktop, Mobile } = Responsive;


function App() {


  return (
    <>
      <Desktop>
      <div className='to-do-wrapper'>
        <div className='background-img'></div>
        <div className='main'>
          <div className='title'>TODO</div>
            <div className="container">
              <div className='todo-input-wrapper'>
                <input class="todo-check" type="checkbox" value=""></input>
                <label for="check" class="checkbox-label"></label>
                <input  type='text' className='todo-input' placeholder='Create a new todo…'></input>
              </div>
              <ul className="todo-list">
                <li className="todo-item">할일1</li>
                <li className="todo-item">할일2</li>
              </ul>
              <footer>
               <p>Copyright © 2024</p>
            </footer>
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
