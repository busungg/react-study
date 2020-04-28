# Create React App으로 만들어진 React App 테스트 방법 정리 [(링크)](https://create-react-app.dev/docs/running-tests)

Create React App으로 생성된 React App은 프로그램 config 와 script 등이 정해져있습니다.   
정해져 있는 설정을 통해 file 생성 및 test 등을 진행해야만 프로그램이 제대로 동작하기 때문에 Create React App에서 추천하는 방식으로 테스트를 진행하겠습니다. 

***
## 1. Test runner
### 1.1 Jest
- Create React App은 Jest를 사용합니다.
- Jest는 Node 기반의 test runner지만  **jsdom**을 사용하여 Node 환경에서도 browser 환경의 테스트를 진행할 수 있습니다.   
(**jsdom**은 brwoser의 window와 같은 전역 변수들을 지원합니다.)

### 1.2 End to End test는 따로 진행해야 합니다.
- 현실적 브라우저 환경에서의 테스트(End to End test)는 사용자 입장에서 테스트해보는 형식이며 Create React App의 Test scope를 넘어가기 때문에 따로 진행해야 합니다.

***
## 2. Filename Conventions(파일 이름 규칙)
### 2.1 Jest가 test 파일이라 생각하는 형식
- \_\_tests\_\_ 폴더에 있는 .js 형식의 파일 
- .test.js 형식의 파일
- .spec.js 형식의 파일

이 3가지 형식의 file 또는 folder 들은 src라는 최고 레벨 folder 하위 어디든지 위치해도 됩니다.
하지만 Create React App에서 추천하는 방식은 \"*Test를 진행할 code가 위치한 폴더에 .test.js 파일을 같이 위치 시키는 것 입니다.*\"     
예시를 들자면  App.js 파일을 테스트 한다고 할 시 App.test.js 파일을 같은 folder에 위치 시키는 겁니다.

***
## 3. Test 작성
테스트를 작성하기 위해 it() (또는 test()) block들을 test 이름과 사용합니다. describe()라는 block을 통해 논리적인 그룹을 생성할 수 있지만 "*Create React App에서는 추천하지 않습니다.*"

Jest는 expect()라는 전역 함수(global function)을 제공합니다. expect 함수는 assertion (프로그램을 수행하며 반드시 강제해야 하는 조건)을 생성할 수 있습니다.

예시 코드 입니다.
```
import sum from './sum';
it('sums numbers', () => {
    expect(sum(1,2)).toEqual(3);
    expect(sum(2,2)).toEqual(4);
})
```

Jest가 제공하는 expect()의 모든 matchers는 [Expect - Jest](https://jestjs.io/docs/en/expect.html#content) 에 있습니다.

***
## 4. Component Test 하기
많은 수의 test 기술이 있습니다. smoke test(예러 없이 render가 되는지 확인) 부터 shallow rendering 그리고 output을 테스트 또는 full rendering을 한다던지등 많은 방법이 있기 때문에 개발자가 프로젝트에 맞게 골라야 합니다.

하지만 만약 아직 test 전략이 없다면 Create React App에서는 "*기본 smoke test를 통해 component 테스트를 시작하는 것을 추천합니다.*"
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```
이 테스트는 해당 component가 mount되고 rendering 될 때 error를 발생하지 않는 것을 보여 줍니다. 해당 테스트는 매우 적은 노력으로 많은 가치를 얻을 수 있습니다.   
이 test는 src/App.test.js에서도 확인 하실 수 있습니다.

### 4.1. Shoallow Rendering (추후에 정리하겠습니다.)
### 4.2. React Testing Library
react-testing-library는 최종 user가 구성요소를 사용하는 방식과 유사한 방식으로 React component를 테스트 하기 위한 라이브러리 입니다.   
이 라이브러리는 unit, integration 그리고 end-to-end(위에 설명되어 있습니다.) 테스트를 잘 수행 할 수 있습니다. 그리고 react-testing-library는 DOM node를 사용하기 때문에 jest-dom을 사용합니다.

설치는 이미 되어 있기 때문에 넘어가겠습니다.    
설치 방법이 궁금하시면 [Option 2: React Testing Library](https://create-react-app.dev/docs/running-tests/#option-2-react-testing-library)를 참조하시기 바랍니다.

```
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Learn React')).toBeInTheDocument();
});
```