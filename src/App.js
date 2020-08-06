import React from 'react';
import StateChange from './Components/StateChange';
import './App.css';
// import Counter from './Components/Counter';


class App extends  React.Component {
 state={
   visible: true 
 };

render(){
  const buttonText= this.state.visible ? "hide": "show";
  return (
    <div className="App">
     <p>Want to see me change colors?</p>
      {this.state.visible ? <StateChange /> : 
      <div className='after'>After</div>}
      <button onClick={() =>{ 
      this.setState({ visible: !this.state.visible});
      }}>Click Here</button>
      
  {/* <Counter/> */}
</div> 

  );
}
}

export default App;
