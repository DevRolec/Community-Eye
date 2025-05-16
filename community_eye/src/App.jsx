// import { useState } from 'react'
// import Navbar from './components/Navbar/Navbar'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <Navbar/>
//     </>
//   )
// }

// export default App

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Homepage from './pages/Homepage';


function App() {
  return (
    <>
      <Navbar />

      <div className="pt-16 px-4"> {/* Add padding to avoid hiding behind navbar */}
        <Routes>
        <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

