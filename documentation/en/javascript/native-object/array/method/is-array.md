---
title: "Array.isArray()"
description: "This method checks if an element is an array."
tags: ["javascript", "array"]
---

# Array.isArray()

Check if an element is of type `Array`.

## Summary

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Return value](#return-value)
- [Examples](#examples)
- [Platform support](#platform-support)

## Prototype

```javascript
Array.isArray(element: any): Boolean
```

## Arguments

- [element](#element)

### element

Any kind of variable.

## Return value

Returns a `Boolean`.

## Examples

- [Checking if an iterable is an array](#checking-if-an-iterable-is-an-array)
- [Checking if undefined is an array](#checking-if-undefined-is-an-array)

### Checking if an iterable is an array

In this example, we will check if an array of numbers is an `Array`.

```javascript
const numbers = [1, 2, 3, 4, 5];

if (Array.isArray(numbers)) {
  console.log("This is an array.");
} else {
  console.log("This is not an array.");
}
```

```
This is an array.
```

### Checking if undefined is an array

In this example, we will check if `undefined` is an `Array`.

```javascript
const variable = undefined;

if (Array.isArray(variable)) {
  console.log("This is an array.");
} else {
  console.log("This is not an array.");
}
```

```
This is not an array.
```

## Platform support

- [Desktop](#desktop)
- [Mobile](#mobile)
- [Server](#server)

### Desktop

- Internet Explorer: 9
- Edge: 12
- Firefox: 4
- Chome: 5
- Safari: 5
- Opera: 11.5
- Opera Mini: **all**

### Mobile

- iOS Safari: 5
- Opera mobile: 46
- Android Browser: 2.1
- Chrome for Android: 84
- Firefox for Android: 68
- UC Browser for Android: 12.12
- Samsung Internet: 4
- QQ Browser: 10.4
- Baidu Browser: 7.12
- KaiOS Browser: 2.5

### Server

- Node.JS: 0.1.100
