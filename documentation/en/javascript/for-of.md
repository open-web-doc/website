---
title: "For...of loop - Javascript"
tags: ["javascript", "loop"]
---

# For...of loop

`for...of` loops make it easy to loop through an `Array` or an iterable object.

## Summary

- [Examples](#examples)
- [Points of attention](#points-of-attention)
- [Browser support](#browser-support)

## Examples

- [Iterating through an array of numbers](#iterating-through-an-array-of-numbers)
- [Iterating through an array of objects](#iterating-through-an-array-of-objects)

### Iterating through an array of numbers

In this example, we will display numbers of an array.

```javascript
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(`number is: ${number}`);
}
```

```
number is: 1
number is: 2
number is: 3
number is: 4
number is: 5
```

### Iterating through an array of objects

In this examples, we will display users in an array.

```javascript
const users = [
  {
    name: "Marie",
    age: 31,
  },
  {
    name: "John",
    age: 23,
  },
  {
    name: "Diana",
    age: 37,
  },
];

for (const user of users) {
  console.log(`user ${name} is ${age} years old`);
}
```

```
user Marie is 31 years old
user John is 23 years old
user Diana is 37 years old
```

## Browser support

- [Desktop](#desktop)
- [Mobile](#mobile)

### Desktop

- Chrome: 38
- Edge: 12
- Firefox: 13
- Internet explorer: **no**
- Opera: 25
- Safari: 7

### Mobile

- UC Browser for Android: 38
- Chrome for Android: 38
- Firefox for Android: 14
- Opera for Android: 25
- iOS Safari: 7
- Samsung Internet: 3
