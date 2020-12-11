import React, { useState, useEffect }from 'react';
import api from './services/api';
import Graphic from './Components/Graphic';


function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function loadingUsers() { 
      const response = await api.get('/users/giro');
      let acel_parado = response.data;
      setUser(acel_parado);
    } 
    loadingUsers();
  }, []);
  console.log(user[0]);
    return (
      <div id="container-principal" className="container">
      <header id="header">
        <h1>Gráficos</h1>
      </header>

      <Graphic
        data={user}
        dataKey="giro_x"
        stroke="#000000"
        dataKeyX={user.tempo}/>    
      </div>
  )
}

export default App;
