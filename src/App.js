import './App.css';
import Responsive from './MediaQuery'; 

const { Desktop, Mobile } = Responsive;


function App() {


  return (
    <>
      <Desktop>
        <p style={{color:"white"}}>HI Desktop</p>
      </Desktop>
      <Mobile>
        HI Mobile
      </Mobile>
    </>
  );
}

export default App;
