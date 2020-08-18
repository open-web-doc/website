---
title: "document.querySelector()"
description: "Select a single element matching the selector."
tags: ["javascript", "DOM"]
---

# document.querySelector()

Select a single element matching the selector.

## Summary

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Return value](#return-value)
- [Exceptions](#exceptions)
- [Examples](#examples)
- [Platform support](#platform-support)

## Prototype

```typescript
document.querySelector(selector: String): Element
```

## Arguments

- [selector](#selector)

### selector

A CSS selector as a `String`.

## Return value

An `Element`.

## Exceptions

- [DOMException](#dom-exception)

### DOMException

If the CSS selector is not valid.

## Examples

- [Selecting an element by class](#selecting-an-element-by-class)
- [Selecting an element by id](#selecting-an-element-by-id)

### Selecting an element by class

In this example, we will get the `Element` scoped by its class name.

```javascript
let element = null;

try {
  element = document.querySelector(".btn");
} catch (exception) {
  if (exception instanceof DOMException) {
    console.error("Error: selector invalid.");
  } else {
    console.error("An unexpected error occured.");
  }
}
```

### Selecting an element by id

In this example, we will get the `Element` scoped by its id.

```javascript
let element = null;

try {
  element = document.querySelector("#form");
} catch (exception) {
  if (exception instanceof DOMException) {
    console.error("Error: selector invalid.");
  } else {
    console.error("An unexpected error occured.");
  }
}
```

## Platform support

- [Desktop](#desktop)
- [Mobile](#mobile)
- [Server](#server)

### Desktop

- Chrome: 1
- Edge: **all**
- Internet Explorer: 8
- Opera: 10
- Safari: 3.2

### Mobile

- Android: 2.1
- IE Mobile: 9
- Opera Mobile: 10
- Safari Mobile: 3.2
- Firefox mobile: **all**

### Server

- Node.JS: **N/A**
