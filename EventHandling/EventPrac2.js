import { useState} from "react";

const EventPrac2 = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    
    const onChangeUsername = e => setUsername(e.target.value);
    const onChagneMessage = e => setMessage(e.target.value);

    const onClick = () => {
        alert(username + ' : ' + message);
        setUsername('');
        setMessage('');
    };
    const onKeyDown = e => {
        if(e.key ==='Enter'){
            onClick();
        }
    };

    return(
        <div>
            <h1>이벤트 연습</h1>
            <input type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}/>
            <input type="text"
                name="message"
                placeholder="내용"
                value={message}
                onChange={onChagneMessage}
                onKeyDown={onKeyDown}/>
            <button onClick={onClick}>확인</button>
        </div>
    );

}
export default EventPrac2;
