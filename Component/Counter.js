import { Component } from "react";

class Counter extends Component {
   state = {
            number: 0,
            fixedNumb: 0
    };

    render(){
        const {number, fixedNumb} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumb}</h2>
                <button
                    onClick={()=> {
                        this.setState(prevState => {
                            return {number:  prevState.number +1};
                        })
                        {/*this.setState({fixedNumb: fixedNumb+10});*/}
                        this.setState(prevState => {
                            return {number:  prevState.number +1};
                        })
                    }}>+1</button>
            </div>
        );
    }
}

export default Counter;
