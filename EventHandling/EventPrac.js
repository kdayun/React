import { Component } from "react";

class EventPrac extends Component {

    state = {
        message: ''
    }
    render(){
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text" 
                    name="message" 
                    placeholder="입력하세요"
                    value={this.state.message}
                    onChange={(e)=>{this.setState({
                        message: e.target.value
                    })}}></input>
                <button onClick={()=>{
                    alert(this.state.message);
                    this.setState({message:''});
                }}>확인</button>
            </div>
        );
    }
}

export default EventPrac;
