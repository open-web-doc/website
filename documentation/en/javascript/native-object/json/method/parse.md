---
title: "JSON.parse()"
description: "Converts a JSON string to an object."
tags: ["javascript", "json"]
---

# JSON.parse()

Converts a JSON string to an object.

## Summary

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Return value](#return-value)
- [Exceptions](#exceptions)
- [Examples](#examples)
- [Platform support](#platform-support)

## Prototype

```typescript
JSON.parse(jsonString: String): Object
```

## Arguments

- [jsonString](#jsonString)

### jsonString

A `String` text representation of the JSON object.

## Return value

An `Object` representing the JSON object.

## Exceptions

- [SyntaxError](#syntax-error)

### SyntaxError

If the [jsonString](#jsonString) parameter is not a correctly formed JSON string.

## Examples

- [Parse a stringified JSON object](#parse-a-stringified-json-object)

### Parse a stringified JSON object

In this example, we will convert a JSON object representing users to its string representation, and then, we will convert it back to an `Object`.

```javascript
const users = [
  {
    name: "Diana",
    age: 34,
  },
  {
    name: "John",
    age: 48,
  },
];

const jsonString = JSON.stringify(users);
let object = {};

try {
  object = JSON.parse(jsonString);
} catch (exception) {
  if (exception instanceof SyntaxError) {
    console.error("Error: the JSON is malformed.");
  } else {
    console.error("An unknown error occured.");
  }
}

console.log(object);
```

```
[
  {
    name: "Diana",
    age: 34
  },
  {
    name: "John",
    age: 48
  },
]
```

## Platform support

- [Desktop](#desktop)
- [Mobile](#mobile)
- [Server](#server)

### Desktop

- Internet Explorer: 8
- Edge: 12
- Firefox: 3.5
- Chrome: 4
- Safari: 4
- Opera Mini: **all**

### Mobile

- iOS Safari: 4
- Android Browser: 2.1
- Opera Mobile: 12
- Chrome for Android: 84
- Firefox for Android: 68
- UC Browser for Android: 12.12
- Samsung Internet: 4
- QQ Browser: 10.4
- Baidu Browser: 7.12
- KaiOS Browser: 2.5

### Server

- Node.JS: 0.1.100
