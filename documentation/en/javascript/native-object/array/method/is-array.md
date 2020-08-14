---
title: "Array.isArray()"
tags: ["javascript", "array"]
---

# Array.isArray()

Check if an element is of type `Array`.

## Summary

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Return value](#return-value)
- [Examples](#examples)

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
