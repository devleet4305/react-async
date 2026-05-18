
import './App.css'
import { Suspense } from 'react';
import Bottles from './components/Bottles';


const bottlesPromise = async() => {
  const res = await fetch('./bottles.json');
  return res.json();
}

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </div>
  )
}

export default App
