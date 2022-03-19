#### Javascript
1. class 객체 
2. 배열 API 
3. React 공부


# 클래스와 인스턴스화
> 클래스안에는 프로퍼티와 메소드를 정의할 수 있고, 아직은 **지도** 라고 표현할 수 있다.
이를 인스턴스화 시키면 비로소 객체가 된다.

> 클래스는 상속이 가능하고, 부모클래스의
프로퍼티와 메소드를 점점 살을 붙여 확장하는 방식이기에 재사용하기에 용이하고, 객체지향적이다.

### 기본적인 객체의 유형이다.
```ts
var person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
```




# 배열 API 
> 자바스크립트의 배열은 다른 언어들과 비교했을때
비교적 자유로운 편이다. 특히 배열이 생성되면 배열의 크기가 임의로 변경이 가능하다.
또한 할당된 값은 사라지지않기에 
개발자의 마음가짐에서 'Use strict'이 필요하다.


## 배열 끝에 항목 추가하기
```ts
 let newLength = fruits.push('오렌지')
 // ["사과", "바나나", "오렌지"]
```

## 배열 끝에서부터 항목 제거하기
```ts
let last = fruits.pop()
// ["사과", "바나나"]
```

## 배열 앞에서부터 항목 제거하기
```ts
let first = fruits.shift
// ["바나나"]
```

## 배열 앞에 항목 추가하기
```ts
let newLength = fruits.unshift('딸기')
// ["딸기", "바나나"]
```

## 배열 안 항목의 인덱스 찾기
```ts
fruits.push('망고')
// ["딸기", "바나나", "망고"]
let pos = fruits.indexOf('바나나')
// 1
```

## 인덱스 위치에 있는 항목 제거하기
```ts
let removedItem = fruits.splice(pos, 1) 
// 항목을 제거하는 방법
// ["딸기", "망고"]
```

## 인덱스 위치에서부터 여러개의 항목 제거하기
```ts
let vegetables = ['양배추', '순무', '무', '당근']
console.log(vegetables)
// ["양배추", "순무", "무", "당근"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// 배열에서 항목을 제거하는 방법
// pos 인덱스부터 n개의 항목을 제거함

console.log(vegetables)
// ["양배추", "당근"] (원 배열 vegetables의 값이 변함)

console.log(removedItems)
// ["순무", "무"]
```

#### 출처 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

