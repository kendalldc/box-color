import React from 'react';

class Counter extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count: 0
        }
    }

    clickCounter = () => {
this.setState({
counter: this.state.count + 1 
});
    };


    render(){
        return(
            <div>
                <div> count: {this.state.count} </div>

                <button onClick={this.clickCounter}>count</button>
            </div>
        );
    }
}


export default Counter