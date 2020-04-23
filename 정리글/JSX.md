# JSX
Javascript 확장 문법으로 React에서는 JSX를 사용합니다.
JSX는 Babel을 통해 일반 자바스크립트 형태의 코드로 변환 됩니다.

- 예시
```
//JSX
function APP() {
  return (
    <div>
      Hello <b> react </b>
    </div>
  )
}

// Javascript
function App() {
  return React.createElement('div', null, 'Hello '
            , React.createElement('b', null, 'react') 
        );
}
```

## 1 If 문 대신 조건부 연산자
JSX 내부에 Javascript 표현식에서는 If문을 사용할 수 없습니다. 하지만 조건에 따라 다른 내용을 렌더링해야 할 때가 존재할 때
- JSX 밖에서 if문을 사용하여 사전에 값을 설정
- {} 안에 조건부 연산자를 사용(삼항 연산자)

두가지 방법 중 하나를 사용하면 됩니다.

```
import React from 'react';

function App() {
  const name = '리액트';
  return (
    <div>
    {
      name === '리액트' ? (
        <h1>리액트입니다.</>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )
    }
    </div>
  )
}
```

## 2. AND 연산자(&&)를 사용한 조건부 렌더링
JSX에 null을 렌더링하면 아무것도 보여 주지 않습니다.    
&& 연산자로 조건부 렌더링을 할 수 있는 이유는 *리액트에서 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않기 때문입니다.*   하지만 한가지 주의해야할 점은 __*falsy한 값인 0은 예외적으로 화면에 나타난다는 것입니다.*__

## 3. undefined를 렌더링하지 않기

## 4. class 대신 className

## 5. 꼭 닫아야 하는 태그
HTML 코드를 작성할 때 태그를 닫아주지 않아도 오류가 발생하지 않는 경우가 있습니다. 하지만 JSX에서는 태그를 닫지 않는다면 오류가 발생합니다.
