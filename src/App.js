import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   
    <>
<Navbar title="Textutils" aboutText="About TextUtils"/>
<div className="container my-3">
<TextForm heading="Enter the Text to analyze"/>
  </div>

</>
    
  );
}

export default App;
