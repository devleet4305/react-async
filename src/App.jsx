
import './App.css'
import { Suspense } from 'react';
import Bottles from './components/Bottles';


const bottlesPromise = async() => {
  const res = await fetch('./bottles.json');
  return res.json();
}

function App() {
  const bottles = bottlesPromise();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Bottles bottles={bottles}></Bottles>
      </Suspense>
    </div>
  )
}

export default App
