import React, { useState } from 'react';
import './App.module.css';
import Counter from '../Counter/Counter';
import Footer from '../Footer/Footer';


function App() {
  // init state = 0
  const [count, setCount] = useState(0);

  // Increment Count
  function incrementCount() {
    setCount(count + 1)
  }

  // Increment Count
  function decrementCount() {
    setCount(count - 1)
  }

  // Reset Count
  function resetCount() {
    setCount(0)
  }

  return (
    <div className="App">
      <h1>Counter <span>(until 5)</span></h1>
      <Counter
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        resetCount={resetCount} />
      <Footer />
    </div>
  );
}

export default App;
