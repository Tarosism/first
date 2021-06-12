function ChildComp(props){
    const {name, age} = props;
    return (
    <div>
    <p>
        이름은 {name}이고 나이는 {age}입니다.
    </p>
    </div>
    );
}

export default ChildComp;
//이런 구조로 만들고 
/* import ChildComp from './child';

function App() {
  return (
    <div>
      <h1>안녕섹스바</h1>
      <ChildComp />
      <ChildComp />
      <ChildComp />
      <ChildComp />
    </div> 
    );
    이런 구조로 불러올 수 있다. function으로 html구조를 짜고
    function에 태그 형식으로 리턴해 불러오는 것.
    사혼의 구슬조각을 열심히 모으자
    참고로 모든 불러오는 컴포넌트는 대문자로 시작해야 한다...
} */

/* ---------------------------------------------------------- */

/* 
function ChildComp(props){
    const {name, age} = props;
    return (
    <div>
    <p>
        이름은 {name}이고 나이는 {age}입니다.
    </p>
    </div>
    );
    //여기서 디스어쩌고링. const {name, age} = props; === const name = props.name; + const age = props.age;
    name이랑 age만 쳐도 props 안에 있는 name과 age가 나타난다고
    그럼 리턴되는 값 안에 저렇게 선언된 변수를 써주자
    근데 그럼 props는 어딨는데요?
    <--부모컴포넌트-->
    return (
    <div>
      <h1>안녕섹스바</h1>
      <h2>{text}</h2>
      {fuckstion}
      <div onClick={text2}>눌러봐유</div>
      <ChildComp name="준승" age={28}/>
      <ChildComp name="민수" age={21}/>
      <ChildComp name="종민" age={30}/>
      <ChildComp name="킹갓" age={45}/>
    </div> 
    );
    자식이 일방적으로 주기만 하는 게 아니야. 부모에서 props를 만들어주면 (가져온 자식컴프 안에 저렇게 써준다
    단! 숫자는 중괄호 안에 써줘야 표현이 가능) 자식이 그걸 받아오는 거지.
    즉 부모가 array역할을 해서 자료를 모아놓으면 자식은 부모컴포에 표현하는 걸 그 자료를 바탕으로 함!
    props를 여러가지로 바꿔줄 수 있겠지? 당연히?
} */