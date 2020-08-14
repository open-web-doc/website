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
