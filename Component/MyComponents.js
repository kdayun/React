// const MyComponent = props => {
//     return (<div>
//         제 이름은 {props.name}입니다.<br />
//         children 값은 {props.children} 입니다.
//         </div>);
// };

// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

import PropTypes from 'prop-types';

const MyComponent = ({name, children, favoriteNum}) => {
    return (
        <div>안녕하세요, 제 이름은 {name} 입니다.<br/>
        children 값은 {children}
        입니다.
        <br></br>
        제가 좋아하는 숫자는 {favoriteNum} 입니다.
        </div>
    );
}

MyComponent.defaultProps = {
    name: '김다윤',
    favoriteNum: 7
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNum : PropTypes.number.isRequired
};

export default MyComponent;
