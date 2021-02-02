import './App.css';
import { useState } from 'react';

function App() {
  const [myCount, setMyCount] = useState(0);

  return (
    <div className="Container">
      <div className="Carousel">
        <button 
          className="leftButton"
          onClick={()=>setMyCount(myCount-1)}
        >
          <h6 className="Label">Decrement</h6>
        </button>
          <h5 className="Counter">{myCount}</h5>
        <button
          className="rightButton"
          onClick={()=>setMyCount(myCount+1)}
        >
          <h6 className="Label">Incremeant</h6>
        </button>
      </div>
    </div>
  );
}

export default App;
