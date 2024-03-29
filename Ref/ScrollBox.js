import { Component } from "react";

class ScrollBox extends Component{
    scrollToBottom = () => {
        const {scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    scrollToTop = () => {
        const {scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = clientHeight - scrollHeight;
    }
    render() {
        const style={
            border: '1px solid blakc',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%', 
            height: '650px',
            background: 'linear-gradient(pink, lightcoral)'
        }
        return(
            <div 
                style={style}
                ref={(ref)=>{this.box=ref}}>
                <div style={innerStyle}></div>
            </div>
        );
    }

}

export default ScrollBox;
