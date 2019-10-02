import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import './App.css';
import UserCards from './Components/UserCards'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      myData: [], 
      followers: []
    }
  };
  


  cDM(){
    axios
    .get('https://api.github.com/users/afialydia')
    .then(res=>{
      console.log(res)
      this.setState({
        user: res.data.message
      })
    })
    .catch(err => console.log('error in axios', err));
  }

  render(){
  return (
    <div className="App">
     <h1>GitHub User Cards</h1>
     <UserCards />
    </div>
  );
  }
}

export default App;
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
