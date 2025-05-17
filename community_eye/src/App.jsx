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
import RecentReports from './components/RecentReports';
import AuthForms from './pages/AuthForms';
import Homepage from './pages/Homepage';


function App() {
  return (
    <>
      <Navbar />

      <div className="pt-16 px-4"> {/* Add padding to avoid hiding behind navbar */}
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<AuthForms />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

