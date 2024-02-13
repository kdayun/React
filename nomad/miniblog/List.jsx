import React, {useState} from "react";

function List(props){
    const [like, setLike] = useState(0);
    
    return (
    <div className="list">
        <h3>{props.name}
          <span onClick={ () => setLike(like+1)}> 👍 </span>{like}</h3>
        <p>{props.date} 업데이트</p>
        <hr></hr>
    </div>
    )
}

export default List;