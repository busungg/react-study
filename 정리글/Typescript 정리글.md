# TypeScript 정리글

## 1. Interface
### 1.1. 첫 번째 인터페이스
```
function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```
타입 검사는 printLabel 호출을 확인 합니다.      
1. printLabel 함수는 <code>string</code> 타입 <code>label</code>을 갖는 객체를 하나의 매개변수로 가집니다.
2. myObj 객체가 *실제로는 더 많은 프로퍼티를 갖고 있지만*, 컴파일러는 최소한 필요한 프로퍼티가 있는지와 타입이 잘 맞는지만 검사합니다.
* **컴파일러는 최소한 필요한 프로퍼티가 있는지와 타입이 잘 맞는지만 검사합니다.**

같은 예제를, 문자열 타입의 프로퍼티 label을 가진 인터페이스로 다시 작성해 보겠습니다.
```
interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```
LabeledValue 인터페이스는 이전 예제의 요구사항을 똑같이 기술하는 이름으로 사용할 수 있습니다.       
해당 인터페이스는 여전히 <code>string</code> 타입의 <code>label</code> 프로퍼티를 가진다는 것을 의미합니다.

#### 1.1.1 결론
 - 타입 검사는 프로퍼티들의 순서를 요구하지 않습니다.
 - 인터페이스가 요구하는 프로피터들의 존재 여부와
 - 프로퍼티들이 요구하는 타입을 가졌는지만을 확인 합니다.

***
### 1.2. 함수 타입(Function types)
인터페이스는 함수 타입을 설명할 수 있습니다.        
인터페이스로 함수 타입을 기술하기 위해, 인터페이스에 호출 서명을 전달합니다.
- 매개변수 목록
- 반환 타입

이 두가지만 주어진 함수 선언과 비슷합니다. 각 매개변수는 이름과 타입이 모두 필요합니다.

```
 interface SearchFunc {
    (source: string, subString: string): boolean;
}
```
올바른 함수 타입 검사를 위해, 매개변수의 이름이 같을 필요는 없습니다.
```
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
```

***
### 1.3. 인덱서블 타입(Indexable Types)
a[10] 이나 ageMap["daniel"] 처럼 타입을 "인덱스로" 기술할 수 있습니다.
```
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```