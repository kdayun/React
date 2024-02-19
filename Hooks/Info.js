import { useEffect, useState } from "react";

const Info= () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=>{
        console.log('effect');
        return () => {
            console.log('unmount');
        }
    }, []);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input vlaue = {name} onChange={onChangeName}></input>
                <input vlaue = {nickname} onChange={onChangeNickname}></input>
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
            
        </div>
    )
}

export default Info;
