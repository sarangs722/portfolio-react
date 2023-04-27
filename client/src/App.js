import './App.css';
import React, {useState, useEffect} from 'react';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SyncLoader from "react-spinners/SyncLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div className="App">
      {
        loading ? 
        <div className="loadingScreen">
          <SyncLoader
          color={"#fff"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
        :
        <div>
        <ToastContainer/>
        <PortfolioContainer/>
        </div>
      }
    </div>
  );
}

export default App;
