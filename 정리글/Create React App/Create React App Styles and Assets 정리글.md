# Create React App Styles and Assets

## [1. Adding a StylesSheet](https://create-react-app.dev/docs/adding-a-stylesheet)
CRA 프로젝트는 모든 asset을 처리하기 위해 webpack을 사용합니다.     
webpack은 javascript import의 개념을 확장한 custom 방법을 제공합니다.       
표현하자면 javascript file이 css file에 의존성을 가지고 있다는 것이며, 사용자는 css file을 javascript import 해야 합니다.

### 1.1 예시 코드
1. Button.css
```
.Button {
    padding: 20px;
}
```

2. Button.js
```
import React, { Component } from 'react';
import './Button.css'; // Tell webpack that Button.js uses these styles
class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}
```

이 방법의 이점은 [이곳](https://medium.com/seek-blog/block-element-modifying-your-javascript-components-d7f99fcab52b)에서 확인 하실 수 있습니다.


## [2. Adding a CSS Modules Stylesheet](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
CRA 프로젝트는 [CSS Modules](https://github.com/css-modules/css-modules)을 [name].module.css 파일 이름 규칙으로 지원합니다. CSS Modules는 CSS의 유효범위를 지정할 수 있는데 자동적으로 unique한 classname을 생성할 수 있기 때문입니다.      
classname format은 [filename]\_[classname]\_\_[hash]. 입니다.

### 2.1 예시 코드
1. Button.module.css
```
.error {
  background-color: red;
}
```

***

2. another-Stylesheet.css
```
.error {
  color: red;
}
```

***

3. Button.js
```
import React, { Component } from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles
import './another-stylesheet.css'; // Import regular stylesheet
class Button extends Component {
  render() {
    // reference as a js object
    return <button className={styles.error}>Error Button</button>;
  }
}
```

***

4. 결과
```
<!-- This button has red background but not red text -->
<button class="Button_error_ax7yz">Error Button</button>
```

5. 주의점
모든 class명을 변경 하기 때문에 그대로 사용하기 원하는 css가 존재 할 시에는 :global()이라는 명령어를 사용 해야 합니다.    
자세한 내용은 https://github.com/css-modules/css-modules 에서 확인 가능합니다.
