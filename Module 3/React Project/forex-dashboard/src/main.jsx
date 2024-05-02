// React imports
import React from 'react'
import ReactDOM from 'react-dom/client'

// Data imports
import data from './data/data.js'

// Component imports
// import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import AccountInfo from './components/AccountInfo.jsx'
import AccountGrowth from './components/AccountGrowth.jsx'
import TradeHistory from './components/TradeHistory.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Navbar 
    username="B I L A L"
    accountNumber="1234567890"
    />
    <div id="mainContent">


    <AccountInfo
    balance={data[0].balance}
    equity={data[0].equity}
    margin={data[0].margin}
    freeMargin={data[0].freeMargin}
    profit={data[0].openPNL}
    />
    
    <AccountGrowth 
    data={data}
    />
  {/* pass data into trade history*/}
    <TradeHistory
    data={data}
    />
    {/* <App /> */}
    
    </div>
  </React.StrictMode>,
)
