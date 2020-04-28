# Component 성능 최적화
**100ms 미만의 UI 응답 지연은 유저들이 즉시 느낄 수 있고, 100ms에서 300ms가 지연되면 이미 유저들은 상당한 지연으로 느낀다.**

## 1. 많은 데이터 렌더링하기
- useState의 기본값에 함수를 넣어주는 것 => useState(createBulkTodos())라고 작성하면 리렌더링될 때마다 createBulkTodos 함수가 호출되지만, useState(createBulkTodos)처럼 파라미터를 함수 형태로 넣어 주면 Component가 처음 렌더링될 때만 createBulkTodos 함수가 실행될 것입니다.

***
## 2. 느려지는 원인 분석
- 자신이 전달받은 props가 변경될 때
- 자신의 state가 바뀔 때
- 부모 컴포넌트가 리렌더링될 때
- forceUpdate 함수가 실행될 때

### 2.1. 분석
1. '할 일 1' 항목 체크
2. App Component의 state가 변경되면서 App Component가 리렌더링
3. 부모 Component(App)이 리렌더링 되어 TodoList Component가 리렌더링
    - '할 일 1' 항목은 리렌더링되어야 하는 것이 맞지만, '할 일 2'부터 '할 일 2500'까지는 리렌더링을 안해도 되는 상황인데 모두 리렌더링되고 있어서 느림

결론 => 리렌더링이 불필요할 때는 리렌더링을 방지해야함

### 2.2. React.memo를 사용하여 Component 성능 최적화
- Class Component인 경우 shouldComponentUpdate라는 라이프사이클 사용하면 됨
- 함수형 Component인 경우 라이프사이클을 사용할 수 없으므로 React.memo라는 함수를 사용

컴포넌트의 props가 바뀌지 않았다면, 리렌더링하지 않도록 설정하여 함수형 Component의 리렌더링 성능을 최적화해 줄 수 있습니다.
(https://ui.toast.com/weekly-pick/ko_20190731/)

### 2.3 Windowing 라이브러리 사용