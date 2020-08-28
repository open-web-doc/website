---
title: "Object.keys()"
description: "Returns the keys names of an object."
tags: ["javascript", "object"]
---

# Object.keys()

Returns the keys names of an object.

## Summary

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Return value](#return-value)
- [Exceptions](#exceptions)
- [Examples](#examples)
- [Platform support](#platform-support)

## Prototype

```javascript
Object.keys(element: any): Array<String>
```

## Arguments

- [element](#element)

### element

Any kind of variable but `null` and `undefined`.

## Return value

Returns an `Array` of `String` representing the key names.

## Exceptions

- [TypeError](#typeerror)

### TypeError

- If the argument is `null` or `undefined`.

## Examples

- [Getting the key names of an object](#getting-the-key-names-of-an-object)
- [Getting the key names of an array](#getting-the-key-names-of-an-array)

### Getting the key names of an object

In this example, we will get the key names of an object.

```javascript
const user = {
  name: "John",
  age: 38,
  position: "developer",
};
let keys = [];

try {
  keys = Object.keys(user);
} catch (exception) {
  if (exception instanceof TypeError) {
    console.error("The argument cannot be null or undefined.");
  } else {
    console.error("An unexpected error occured.");
  }

  return;
}

for (const key of keys) {
  console.log(`Key found with name: ${key}.`);
}
```

```
Key found with name: name.
Key found with name: age.
Key found with name: position.
```

### Getting the key names of an array

In this example, we will get the key names of an array.

```javascript
const marks = [20, 18, 11, 13, 16];
let keys = [];

try {
  keys = Object.keys(marks);
} catch (exception) {
  if (exception instanceof KeyError) {
    console.error("The argument cannot be null or undefined.");
  } else {
    console.error("An unexpected error occured.");
  }

  return;
}

for (const key of keys) {
  console.log(`Found key with name: ${key}.`);
}
```

```
Found key with name: 0.
Found key with name: 1.
Found key with name: 2.
Found key with name: 3.
Found key with name: 4.
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
- Opera: 12

### Mobile

- iOS Safari: 5
- Opera mobile: 12
- Chrome for Android: 18
- Firefox for Android: 4
- UC Browser for Android: 1
- Samsung Internet: 1

### Server

- Node.JS: **all**
