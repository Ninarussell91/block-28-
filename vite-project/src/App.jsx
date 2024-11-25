// eslint-disable-next-line no-unused-vars
import React from 'react';
import AllPlayers from './componets/AllPlayers.jsx'
import NavBar from './components/NavBar';
import NewPlayerForm from './components/NewPlayerForm';


const App = () =>{

return (
 <div>
   <NavBar />
   <h1>Welcome to the Player Management</h1>
   <NewPlayerForm />
   <AllPlayers />
</div>

);

};

export default App
