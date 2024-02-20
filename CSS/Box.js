import "./Box.css";

function Box() {
    return (
        <>
            <div className="block">블록 요소</div>
            <div className="inline-block">블록의 인라인</div>
            <span className="span">인라인 요소</span>
            <div className="block-size"></div>
            <div className="img">React</div>
        </>
        
    );
}

export default Box;
