---
title: "document.querySelectorAll()"
description: "Get an array of Nodes matching the selector."
tags: ["javascript", "DOM"]
---

# document.querySelector()

Get an array of Nodes matching the selector.

## Summary

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Return value](#return-value)
- [Exceptions](#exceptions)
- [Examples](#examples)
- [Platform support](#platform-support)

## Prototype

```typescript
document.querySelectorAll(selector: String): NodeList
```

## Arguments

- [selector](#selector)

### selector

A CSS selector as a `String`.

## Return value

An iterable `NodeList`.

## Exceptions

- [DOMException](#dom-exception)

### DOMException

- If the CSS selector is not valid.

## Examples

- [Getting elements matching a class name](#getting-elements-matching-a-class-name)
- [Itering on elements using a for loop](#itering-on-elements-using-a-for-loop)

### Getting elements matching a class name

In this example, we will get every elements matching a class name and iterate on them.

```javascript
let elements = null;

try {
  elements = document.querySelectorAll(".btn");
} catch (exception) {
  if (exception instanceof DOMException) {
    console.error("Error: selector invalid.");
  } else {
    console.error("An unexpected error occured.");
  }

  return;
}

elements.forEach((element) => {
  console.log(`Element tag name: ${element.tagName}.`);
});
```

```bash
Element tag name: BUTTON.
```

### Itering on elements using a for loop

Iterating through a NodeList is impossible with a classic for loop. In this example, we will convert the NodeList into an Array, to be able to loop through it using a `for...of` loop.

```javascript
let elements = null;

try {
  elements = Array.from(document.querySelectorAll(".btn"));
} catch (exception) {
  if (exception instanceof DOMException) {
    console.error("Error: selector invalid.");
  } else {
    console.error("An unexpected error occured.");
  }

  return;
}

for (const element of elements) {
  console.log(`Element tag name: ${element.tagName}.`);
}
```

```bash
Element tag name: BUTTON.
```

## Platform support

- [Desktop](#desktop)
- [Mobile](#mobile)
- [Server](#server)

### Desktop

- Chrome: 1
- Firefox: 3.5
- Edge: **all**
- Internet Explorer: 8
- Opera: 10
- Safari: 3.2

### Mobile

- Android: **all**
- Safari Mobile: **all**
- Firefox mobile: 1

### Server

- Node.JS: **N/A**
