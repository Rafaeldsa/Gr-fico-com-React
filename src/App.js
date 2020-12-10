import React, { useState, useEffect }from 'react';
import api from './services/api';
import Graphic from './Components/Graphic';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadingUsers() {
      const response = await api.get('users');

      setUsers(response.data.users);
      
    }

    loadingUsers();
  }, []);

  console.log(users)
  /*for (let i = 0; i < acel.length; i++) {
    data.push({tempo: i, acelerômetro: acel[i], giroscópio: giro[i]});
  }  */
  
    return (
      <div id="container-principal" className="container">
      <header id="header">
        <h1>Gráficos</h1>
      </header>   
      </div>
  )
}

export default App;
