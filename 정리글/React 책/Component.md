# Component
Component를 선언하는 방식은 두 가지 입니다.
- 함수형 Component
- 클래스형 Component

***
## 1. 클래스형 Component
클래스형 컴포넌트에서는 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 합니다.

### 1.1. 클래스형 컴포넌트에서 props 사용하기
클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회하면 됩니다.

## 2. props
props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소입니다.   
props는 컴포넌트가 사용되는 과정에서 부모 Component가 설정하는 값이며, Component 자신은 해당 props를 읽기 전용응로만 사용 할 수 있습니다.

### 2.1. props 기본값 설정: defaultProps
props 값을 따로 지정하지 않았을 때 보여 줄 기본값을 설정하는 defaultProps가 존재합니다.

### 2.2 isRequired를 사용하여 필수 propTypes 설정
propTypes를 지정하지 않았을 때 경고 메세지를 띄워줄 수 있습니다.

## 3. State
state는 Component 내부에서 바뀔 수 있는 값을 의미합니다.
- 클래스형 Component의 state
- 함수형 Component의 useState라는 함수를 통해 사용되는 state

총 두 종류의 state가 존재합니다.
- 클래스형 Component의 state는 객체 형식 이여야만합니다.    
Error: setState(...): takes an object of state variables to update or a function which returns an object of state variables.
- 함수형 Component의 useState의 초기값은 객체 형식이 아니여도 괜찮습니다. 초기값 형식은 자유입니다.
```
[message, setMessage] = useState('')
//배열의 첫 번째 원소는 현재 상태
//두 분째 원소는 상태를 바꾸어 주는 함수
```

### 3.1. this.setState 함수는 인자로 전달된 객체 안에 들어 있는 값만 바꾸어 줍니다.

### 3.2. this.setState에 객체 대신 함수 인자 전달하기
> this.setState를 사용하여 state 값을 업데이트할 때는 상태가 비동기적으로 업데이트 됩니다.

### 3.3. 한 컴포넌트에서 useSate 여러 번 사용하기

### 3.4. State를 사용할 때 주의 사항
클래스형 Component든 함수형 Component든 state를 사용할 때에는 주의 사항이 있습니다.
- state 값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 합니다.
