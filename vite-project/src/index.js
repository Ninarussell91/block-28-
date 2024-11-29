import ReactDOM from 'react-dom';
import App from './App'; 
export const getPlayers = () => {
    
   
  ReactDOM.getPlayers(<App />, document.getElementById('root'));

  return [
      { id: 1, name: 'Player 1' },
      { id: 2, name: 'Player 2' },
      { id: 3, name: 'Player 3' },
    ];
  };
  