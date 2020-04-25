# Hooks

## 1. useReducer
useREducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook 입니다.

Reducer는 **현재 상태, 그리고 업데이트를 위해 필요한 정보**를 답음 액션 값을 전달 받아 새로운 상태를 반환하는 함수 입니다.

```
function reducer(state, action) {
  return {...}; // 불변성을 지키면서 업데이트한 새로운 상태를 반환합니다.
}
```

액션 값은 주로 다음과 같은 형태로 이루어져 있습니다.
```
{
  type: 'INCREMENT',
  //다른 값들이 필요하다면 추가로 들어감
}
```

### 1.1. userReducer 파리미터
- 첫 번째 파라미터에는 리듀서 함수
- 두 번째 파라미터에는 해당 리듀서의 기본값을 넣어 줍니다.

### 1.2. 장점
- 컴포넌트 어데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 점입니다.

***
## 2. useMemo
useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 취적화할 수 있습니다.

```
import React, { useState } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
      <div>
        <b>평균값: </b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
```

인풋 내용이 바뀔 때는 평균값을 다시 계산할 필요가 없는데, 이렇게 렌더링할 때마다 계산하는 것은 낭비입니다.
useMemo Hook을 사용하면 이러한 작업을 최적화할 수 있습니다. **렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행**하고,
, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식 입니다.

***
## 3. useCallback
상단의 코드를 확인하면 onChange와 onInsert 함수들은 Component가 리렌더링될 때마다 이 함수들이 새로 생성됩니다.
Component의 렌더링이 자주 발생하거나 렌더링해야 할 Component의 개수가 많아지면 이 부분을 최적화해 주는 것이 좋습니다.

### 3.1. useCallback 파라미터
- 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고
- 두 번째 파라미터에는 배열을 넣으면 됩니다. 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 합니다.

***
## 4. Custom Hooks 만들기
여러 Component에서 비슷한 기능을 공유할 경우, 이를 여러분만의 Hook으로 작성하여 로직을 재사용 할 수 있습니다.
