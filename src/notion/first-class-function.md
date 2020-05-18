# First-class Function（头等函数）

`头等函数` 是指在程序设计语言中，函数被当作一等公民。这意味着，函数可以作为  
- [别的函数的参数](#作为函数的参数)
- [函数的返回值](#作为函数的返回值)
- [赋值给变量](#赋值给变量)
- 存储在数据结构中

## 作为函数的参数

```javascript
function sayHi() {
  return "Hi, ";
}

function join(hiText, name) {
  console.info(hiText() + name);
}

join(sayHi, "Zhang He!"); // Hi, Zhang He!
```

## 作为函数的返回值

```javascript
function sayHi() {
  return function() {
    console.info("Hi!");
  }
}

sayHi()();
```

## 赋值给变量

```javascript
const zh = function() {
  console.info("zhanghe");
}

zh();
````

[参考链接](https://zh.wikipedia.org/wiki/%E5%A4%B4%E7%AD%89%E5%87%BD%E6%95%B0)