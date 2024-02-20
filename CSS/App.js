import "./App.css";
import Box from "./Box";

function Prac(){
  return (
    <>
      <h1 className="title">제목</h1>
      <h3 className="small_title">소제목</h3>
      <div className="block">블록 요소</div>
      <span>인라인 요소</span>
      <p className="line">
        조그만 날갯짓 널 향한 이끌림 나에게 따라오라 손짓한 것 같아서
        애절한 눈빛과 무언의 이야기 가슴에 회오리가 몰아치던 그날 밤
        오묘한 그대의 모습에 넋을 놓고 하나뿐인 영혼을 뺏기고 
        그대의 몸짓에 완전히 취해서 숨 쉬는 것조차 잊어버린 나인데
        왈츠처럼 사뿐히 앉아 눈을 뜰 수 없어 
        시선이 자연스레 걸음마다
        널 따라가잖아 날 데려가 줘 yeah
        그대가 살고 있는 곳에 나도 함께 데려가 줘 oh
        세상의 끝이라도 따라 갈게 oh no
        내 시야에서 벗어나지 말아 줘 아침이 와도 사라지지 말아 줘
        그댄 나만의 아름다운 나비
        어디서 왔는지 어디로 가는지 친절히 여기까지 마중을 와준 너
        가파른 오르막 깎아진 절벽도 걱정 마 무엇도 두려울 것이 없으니
        너는 뽐내 우아한 자태 난 몇 번이고 반하고
        사랑은 이렇게 나도 모르게 예고도 없이 불시에 찾아와 
        조그마한 손짓 나의 가슴엔 회오리가 친다</p>

        <hr></hr>

        <div className="box-border">요소의 콘텐츠</div>
        <span className="span-block">Check</span>

        <hr></hr>

        <div className="block-down">블록의 하위 요소</div>
    </>
  )

}
function App(){
  return (
    <Box></Box>
  );
}

export default App;