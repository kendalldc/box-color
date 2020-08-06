import React from 'react';



class StateChange extends React.Component {
      
      
//       handleNext = () =>{
          
//       this.setState({
// idx: this.state.idx + 1
//           });
//       }

  handlePrev=() =>{
      this.setState({
        idx: this.state.idx - 1
      });
  }
  
  
  
  
      render(){
    return (
      <div className="stateChange">
         
       <div className='before'>Before</div>
        
      </div>
    );
}
} 






export default StateChange
