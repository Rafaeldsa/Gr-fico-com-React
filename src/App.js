import React, { useState, useEffect }from 'react';
import api from './services/api';
import Graphic from './Components/Graphic';


function App() {
  const [user, setUser] = useState([]);
  const data = [];
  useEffect(() => {
    async function loadingUsers() { 
      const response = await api.get('users');
      let array_user = response.data.users[0];
      for (let i = 0; i < array_user.acelx.length; i++) {
          data.push(
            {tempo: i,
            acelerômetro_X: array_user.acelx[i],
            acelerômetro_Y: array_user.acely[i],
            acelerômetro_Z: array_user.acelz[i],
            giroscópio_X: array_user.girox[i],
            giroscópio_Y: array_user.giroy[i],
            giroscópio_Z: array_user.giroz[i]});
      }
      setUser(data);
    } 
    loadingUsers();
  }, []);  
    return (
      <div id="container-principal" className="container">
      <header id="header">
        <h1>Gráficos</h1>
      </header>

      <Graphic
        data={user}
        dataKey="acelerômetro_X"
        stroke="#000000"
        userKeyX={user.tempo}/>
      <Graphic
        data={user}
        dataKey="acelerômetro_Y"
        stroke="#e02041"
        userKeyX={user.tempo}/>
      <Graphic
        data={user}
        dataKey="acelerômetro_Z"
        stroke="#0000CD"
        userKeyX={user.tempo}/>
      <Graphic
        data={user}
        dataKey="giroscópio_X"
        stroke="#00FF00"
        userKeyX={user.tempo}/>
      <Graphic
        data={user}
        dataKey="giroscópio_Y"
        stroke="#8A2BE2"
        userKeyX={user.tempo}/>
      <Graphic
        data={user}
        dataKey="giroscópio_Z"
        stroke="#FFFF00"
        userKeyX={user.tempo}/>
      </div>
  )
}

export default App;
