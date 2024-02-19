import {Component} from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
    render(){
        const {name, favoriteNum, children} = this.props;
        return (
            <div>
                안녕하세요 제 이름은 {name} 입니다.<br></br>
                제가 좋아하는 숫자는 {favoriteNum} 이고<br></br>
                children은 {children} 입니다.
            </div>
        );
    }
}
MyComponent.defaultProps = {
    name: '김다윤'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNum: PropTypes.number.isRequired
};

export default MyComponent;
