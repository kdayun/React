import "./flex.css";


function Flex(){

    return(
        <div>
            <div className="container">
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
            </div>
            <br></br>
            <div className="con">
                <div className="child">1</div>
                <div className="child self">2</div>
                <div className="child">3</div>
            </div>
        </div>
    );
}

export default Flex;