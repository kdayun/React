import "./PseudoClass.css";


function PseudoClass(){

    return(
        <div>
            <input type="button" value="버튼"></input>
            <input type="text" placeholder="아무거나 쓰기" disabled></input>
            <br></br>
            <div className="boxes">
                <div className="box">1번</div>
                <div className="box">2번</div>
                <div className="box">3번</div>
                <div className="box">4번</div>
                <div className="box">5번</div>
            </div>
                
            
        </div>
    );
}

export default PseudoClass;
