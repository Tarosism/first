import React from 'react';
//  === import React, {useState} from 'react';

function Timer(){
    const [time, bitch] = React.useState(0);
    React.useEffect(function(){
        bitch(time+(-5));
    }, []);
    return (
        <div>
            <h4>{time}이만큼</h4>
            <button onClick={() => bitch(time +2)}>신나는삼육구</button>
        </div>
    );
}

export default Timer;

/* useEffect(익명함수, 배열) - 위에서 보는 느낌 그대로
state가 업데이트 될 때 마다 랜더링이 새롭게 됨. 근데 만약 첫 랜더링 때 숫자를 몇 더한 채로 시작하고 싶어
그래서 그냥 bitch(time+1)을 쓰고 리턴을 시작하면 bitch가 무한정 랜더링됨. (즉 초기화면에서 state를 업데이트하고
    변경된 상태로 둘 수 없다는 뜻). 근데 초기화면 만들어야 할 것 아니야.
그때 useEffect를 저렇게 써주고 뒤의 배열을 비워주면 저 bitch가 딱 한 번 실행되고 끝남.
근데 만약 두 번째 인자(대괄호, 배열)에 들어가는 변수가 변경이 되면 useEffect안에 있는 함수가 계속 실행됨
뭔 말이냐 
React.useEffect(function(){
        bitch(time+1); //useEffect안의 변수 time은 +1이라는 변형을 가짐
    }, [time]); // 두번째 인자에 있는 변수 time은 가변적(계속 +1하며 업데이트됨)이라 useEffect를 계속 실행시킴
그래서 얘를
React.useEffect(function(){
        bitch(time); //useEffect안의 변수 time은 변형이 없음
    }, [time]);
이렇게 써주면 실행을 안 해주지. time은 어떠한 업데이트도 없는 새끼니까
하지만 이렇게 쓰겠냐? 고로 그냥 대괄호 비워서 초기화면 만들어 주는 거라고 이해하라
*/



/* function Timer(){
    const [time, bitch] = React.useState(0);
    function updateTime(){
        bitch(time + 3);
    }
    return (
        <div>
            <h4>{time}이만큼</h4>
            <button onClick={updateTime}>신나는삼육구</button>
        </div>
    );
}

export default Timer; */
/* 자 침착해 일단
1. 리액트 라이브러리를 쓰기 위해 임포트 해줘요
2. React.useState(리턴할 state값)은 [state값, state를 변경시키는 함수] 이 두 개를 반환함
즉 const [time, bitch] = React.useState(0) 하면 디스트럭 어쩌고 하는 거지?
(=== const time = React.useStat의 state값 / const bitch = React.useStat의 state를 변경시키는 함수
    일단은 이 정도로만 이해하고 넘어가자)
고로 time변수는 0이되고 bitch는 time을 변경시키는 나쁜년이 되겠지 (function to update state라 적혀있음 그냥;)
3. 타임을 변경시키는 함수인 bitch를 동작시키는 함수를 만들어주자. updateTime이라는 함수는
bitch하는 state를 변경시키는 함수에게 time(=0) + 3을 부여해주는 녀석임.
즉 updateTime을 실행시키면 `state를 변경시키는 함수`가 time에 3씩 더해준다고 (이 useState문법으로 보임..)
아 몰라 암튼 이렇게 짜셈 그냥
4. 정의는 끝났으니 실제로 화면을 짜봅시다. return!
5. {time}(= 0)과 onClick={updateTime}(=state를 변경시키는 함수, time에 3씩 더한다)을 끼워넣자
6. 부모한테 가서 <Timer />만 써주면 끗!


11번째 줄이랑 똑같은 코드 ===
<button onClick={()=> bitch(time+3)}>신나는삼육구</button>
강의는 코드를 줄이기 위해 function을 만들고 갔음. 어쨌든 확실한 건, useState는 디스어쩌고링을 해주고
state를 변경시키는 함수(state + 1)이런 식으로 해주면 돔










*/
