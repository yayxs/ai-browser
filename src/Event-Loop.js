// console.log(1)
// setTimeout(function () {
//   console.log(2)
// })
// new Promise(function (resolve) {
//   console.log(3)
//   resolve()
// })
//   .then(function () {
//     console.log(4)
//   })
//   .then(function () {
//     console.log(5)
//   })
// console.log(6)

setTimeout(() => {
  console.log('timeout1')
}, 0)

setTimeout(() => {
  console.log('timeout2')
  Promise.resolve().then(function () {
    console.log('promise1')
  })
}, 0)

setTimeout(() => {
  console.log('timeout3')
}, 0)


## 考题

### 考题一

```js
console.log(1) // 1
setTimeout(function () {
  // 异步任务一
  console.log(2) //6
})
new Promise(function (resolve) {
  console.log(3) //2
  resolve()
})
  .then(function () {
    // 异步任务
    console.log(4) //4
  })
  .then(function () {
    // 异步任务
    console.log(5) //5
  })
console.log(6) //3
```

### 考题二

```js
Promise.resolve()
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

process.nextTick(() => {
  console.log('nextTick1')
  process.nextTick(() => {
    console.log('nextTick2')
    process.nextTick(() => {
      console.log('nextTick3')
      process.nextTick(() => {
        console.log('nextTick4')
      })
    })
  })
})
```

### 考题三

```js
setTimeout(() => {
  console.log('timeout1')
}, 0)

setTimeout(() => {
  console.log('timeout2')
  Promise.resolve().then(function () {
    console.log('promise1')
  })
}, 0)

setTimeout(() => {
  console.log('timeout3')
}, 0)
```
