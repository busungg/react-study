# Context API

## 1. Context API란?
Context API는 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 유용한 기능입니다.   
- 사용자 로그인 정보,
- 애플리케이션 환경 설정
- 테마

이 기능은 리액트 관련 라이브러리에서도 많이 사용되고 있습니다.
- Redux
- React Router
- styled-components

## 2. Cotext API를 사용한 전역 상태 관리 흐름 이해하기
리액트 애플리케이션은 Component간에 데이터를 props로 전달하기 때문에 Component 여기저기서 필요한 데이터가 있을 때는 주로 최상위 Component인 APP의 state에 넣어서 관리합니다.


## 3. ConText API 사용법 익히기
### 3.1. 새 Context 만들기
### 3.2. Cosumer 사용하기
props로 정보를 받아오는 것이 아니고 Context 내부의 Consumer라는 Component를 통해 정보를 가져오게 됩니다.
