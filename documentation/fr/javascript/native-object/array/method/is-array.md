---
title: "Array.isArray()"
tags: ["javascript", "array"]
---

# Array.isArray()

Vérifie si un élément est de type `Array`.

## Summary

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Valeur de retour](#valeur-de-retour)
- [Exemples](#exemples)
- [Support navigateur](#support-navigateur)

## Prototype

```javascript
Array.isArray(element: any): Boolean
```

## Arguments

- [element](#element)

### element

N'importe quel type de variable.

## Valeur de retour

Retourne un `Boolean`.

## Exemples

- [Vérifier si un itérable est un tableau](#vérifier-si-un-itérable-est-un-tableau)
- [Vérifier si undefined est un tableau](#vérifier-si-undefined-est-un-tableau)

### Vérifier si un itérable est un tableau

Dans cet exemple, nous allons vérifier si un tableau de nombres est un `Array`.

```javascript
const numbers = [1, 2, 3, 4, 5];

if (Array.isArray(numbers)) {
  console.log("C'est un tableau.");
} else {
  console.log("Ce n'est pas un tableau.");
}
```

```
C'est un tableau.
```

### Vérifier si undefined est un tableau

Dans cet exemple, nous allons vérifier si `undefined` est un `Array`.

```javascript
const variable = undefined;

if (Array.isArray(variable)) {
  console.log("C'est un tableau.");
} else {
  console.log("Ce n'est pas un tableau.");
}
```

```
Ce n'est pas un tableau.
```

## Support navigateur

- [Ordinateur](#ordinateur)
- [Mobile](#mobile)

### Ordinateur

- Internet Explorer: 9
- Edge: 12
- Firefox: 4
- Chome: 5
- Safari: 5
- Opera: 11.5
- Opera Mini: all

### Mobile

- iOS Safari: 5
- Opera mobile: 46
- Android Browser: 2.1
- Chrome pour Android: 84
- Firefox pour Android: 68
- UC Browser pour Android: 12.12
- Samsung Internet: 4
- QQ Browser: 10.4
- Baidu Browser: 7.12
- KaiOS Browser: 2.5
