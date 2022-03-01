import { useEffect, useState } from 'react';
import './App.scss';
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";


function App() {
  const [browserClass, setBrowserClass] = useState('');
  useEffect(() => {
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    if (isIE) {
      setBrowserClass('ie');
    }
}, []);

  return (
    <div className="main-container">
        <Header/>
        <Gallery browserclass={browserClass} />
        <footer className="footer">
            <span> ©{(new Date().getFullYear())} The Gallery all rights reserved </span>
        </footer>
    </div>
  );
}

export default App;
