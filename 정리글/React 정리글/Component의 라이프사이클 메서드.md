# Component의 라이프사이클 메서드

## 1. 라이프사이클 메서드의 이해
- Will 접두사가 붙은 메서드는 어떤 작업을 작동하기 전에 실행되는 메서드
- Did 접두사가 붙은 메서드는 어떤 작업을 작동한 후에 실행되는 메서드

라이프사이클은 총 세 가지, 마운트, 업데이트, 언마운트 카테고리로 나눕니다.
- 주의 사항: 라이프사이클 메서드는 클래스형 Component에서만 사용이 가능합니다.

***
### 1.1 마운트
> DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트라고 합니다.

#### 1.1.1. 호출 메서드(위에서부터 아래로 호출 순서)
1. 컴포넌트 만들기
2. constructor
3. getDerivedStateFromProps
4. render
5. componentDidMount

#### 1.1.2. 메서드 설명
- <code>constuctor</code> : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드 입니다.
- <code>getDerivedStateFromProps</code> : props에 있는 값을 state에 넣을 때 사용하는 메서드입니다. props 값 -> state
- <code>render</code> : 우리가 준비한 UI를 렌더링하는 메서드입니다.
- <code>componentDidMount</code> : Component가 웹 브라우저상에 나타난 *후* 호출하는 메서드 입니다.

***
### 1.2 업데이트
> 마운트가 된 Component의 정보를 업데이트 하는 것 입니다.

#### 1.2.1. Component가 업데이트 되는 경우
1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 Component가 리렌더링 될 때
4. this.forceUpdate로 강제로 렌더링을 트리거할 때

#### 1.2.2. 호출 메서드(위에서부터 아래로 호출 순서)
1. 업데이트를 발생시키는 요인
    - props 변경
    - state 변경
    - 부모 Component 리렌더링
2. getDerivedStateFromProps
3. shouldComponentUpdate
    - true 반환 시 render 호출
    - false 반환 시 여기서 작업 취소
4. render <- forceUpdate로 호출 가능
5. getSnapshotBeforeUpdate
    - 웹 브라우저상의 실제 DOM 변화 전에 호출
6. componentDidUpdate

#### 1.2.3. 메서드 설명
- <code>shouldComponentUpdate</code> : Component가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드 입니다.
- <code>getSnapshotBeforeUpdate</code> : Component 변화를 DOM에 반영하기 바로 직전에 호출되는 메서드 입니다.
- <code>componentDidUpdate</code> : 컴포넌트의 업데이트 작업이 끝난 후 호출되는 메서드 입니다. 

***
### 1.3 언마운트
> 마운트의 반대 과정, 즉 Component를 DOM에서 제거하는 것을 언마운트라고 합니다.

#### 1.3.1. 호출 메서드(위에서부터 아래로 호출 순서)
1. 언마운트 하기
2. componentWillUnmount

#### 1.3.2. 메서드 설명
- <code>componentWillUnmount</code> : 컴포넌트가 웹 브라우저상에서 사라지기 *전*에 호출하는 메서드 입니다.

***
1.4 예시 코드
```
import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //동기화 할 값을 return 한다.
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }

    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  handelClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handelClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;

```