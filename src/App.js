import './App.css';
import { useEffect, useState } from 'react';
import * as transactionService from './transaction.service';

function App() {
  const [data, setData] = useState([]);
  
  useEffect( () => {
    transactionService.getTransactions().then(res => {
      let result = transactionService.rewardPerMonth(res.transactions);
      setData(result);
    });
  },[]);

  return (
    <div className="App">
      <div className="content" role="main">
        {
          Object.keys(data).map( user => {
            return (
              <div className="card" key={user}>
                <div className="container">
                <p>Name: {user}</p>
                {
                  Object.keys(data[user]).map(metric =>{
                    return (
                          <div key={metric}><b>{metric} :</b>{data[user][metric]}</div>
                    )
                  })
                }
              </div>
              </div>
            )
          })
        }
    </div>
    </div>
  );
}

export default App;
