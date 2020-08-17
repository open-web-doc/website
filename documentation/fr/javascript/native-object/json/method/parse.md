---
title: "JSON.parse()"
description: "Converts a JSON string to an object."
tags: ["javascript", "json"]
---

# JSON.parse()

Convertit une chaîne de caractère JSON en objet.

## Summary

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Valeur de retour](#valeur-de-retour)
- [Exceptions](#exceptions)
- [Exemples](#exemples)
- [Support des plateformes](#support-des-plateformes)

## Prototype

```typescript
JSON.parse(jsonString: String): Object
```

## Arguments

- [jsonString](#jsonString)

### jsonString

Un `String` représentant l'objet JSON.

## Valeur de retour

Un `Object` representant l'objet JSON.

## Exceptions

- [SyntaxError](#syntax-error)

### SyntaxError

Si le paramètre [jsonString](#jsonString) n'est pas une chaîne de caractère JSON valide.

## Examples

- [Parse une chaîne de caractère JSON](#parse-une-chaîne-de-caractère-json)

### Parse a stringified JSON object

Dans cet exemple, nous allons convertir un object JSON qui représente des utilisateurs dans son équivalent en chaîne de caractères, puis nous allons le convertir à nouveau en `Object`.

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
    console.error("Erreur : le JSON est mal formé.");
  } else {
    console.error("Une erreur innatendue s'est produite..");
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

## Support des plateformes

- [Ordinateur](#ordinateur)
- [Mobile](#mobile)
- [Serveur](#serveur)

### Ordinateur

- Internet Explorer : 8
- Edge : 12
- Firefox : 3.5
- Chrome : 4
- Safari : 4
- Opera Mini : **all**

### Mobile

- iOS Safari : 4
- Android Browser : 2.1
- Opera Mobile : 12
- Chrome for Android : 84
- Firefox for Android : 68
- UC Browser for Android : 12.12
- Samsung Internet : 4
- QQ Browser : 10.4
- Baidu Browser : 7.12
- KaiOS Browser : 2.5

### Serveur

- Node.JS : 0.1.100
