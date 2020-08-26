---
title: "String.toUppercase()"
description: "Turns every characters into uppercases."
tags: ["string", "casing"]
---

# String.toUppercase()

Turns every characters into uppercases.

## Summary

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Return value](#return-value)
- [Exceptions](#exceptions)
- [Examples](#examples)
- [Platform support](#platform-support)

## Prototype

```javascript
String.toUppercase(): String
```

## Arguments

No argument is allowed.

## Return value

Returns a `String`.

## Exceptions

- [TypeError](#typeerror)

### TypeError

- If the variable you call `.toUppercase()` on is not convertible to `String` (like `null` or `undefined`).

## Examples

- [Turning a string to uppercase](#Turning-a-string-to-uppercase)

### Turning a string to uppercase

In this example, we will turn a string in lowercase to uppercase.

```javascript
let name = "doe";

try {
  name = name.toUppercase();
} catch (exception) {
  if (exception instanceof TypeError) {
    console.error("Calling .toUppercase() on a non String variable.");
  } else {
    console.error("An unexpected error occured.");
  }

  return;
}

console.log(`Your name is ${name}.`);
```

```
Your name is DOE.
```

## Platform support

- [Desktop](#desktop)
- [Mobile](#mobile)
- [Server](#server)

### Desktop

- Internet Explorer: 3
- Edge: 12
- Firefox: 1
- Chome: 1
- Safari: 1
- Opera: 3

### Mobile

- iOS Safari: 1
- Opera mobile: 10.1
- Android Browser: 2.1
- Chrome for Android: 18
- Firefox for Android: 4
- UC Browser for Android: 1
- Samsung Internet: 1

### Server

- Node.JS: 0.1.100
