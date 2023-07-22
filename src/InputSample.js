import React, { useState, useRef } from 'react';

function InputSample() {
  
  // 1. useState 훅을 사용하여 상태 변수 inputs를 선언하고, 기본값으로 객체를 할당함
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const nameInput = useRef(null);

  // 2. inputs 객체에서 name과 nickname을 비구조화하여 각각 변수로 선언
  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
  
  // 3. input 요소의 값이 변경될 때 실행되는 이벤트 처리 함수
  //    e.target에서 value와 name을 추출하여 현재 input 요소의 값과 name 속성을 가져옴
  //    setInputs를 호출하여 기존 inputs 상태를 복사한 뒤, name 속성에 해당하는 값을 value로 설정하여 업데이트함
  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  // 4. 초기화 버튼을 클릭했을 때 실행되는 함수
  //    setInputs를 호출하여 inputs 상태를 초기화함
  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      {/* 5. name 변수를 input 요소의 name 속성과 value에 바인딩하여 관리 */}
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      {/* 6. 닉네임 input 요소는 name 속성을 직접 지정 */}
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      {/* 7. 초기화 버튼을 클릭하면 onReset 함수를 실행 */}
      <button onClick={onReset}>초기화</button>
      <div>
        {/* 8. 현재 입력된 이름과 닉네임을 화면에 표시 */}
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;