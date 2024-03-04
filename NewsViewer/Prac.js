import { useState } from "react";
import axios from "axios";

const Prac = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=d4afc9a6375b45428629a986c78a0eab"
      );
      setData(response.data);
    } catch(e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}></textarea>}
    </div>
  )
}

export default Prac;
