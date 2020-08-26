---
title: "String.toUppercase()"
description: "Transforme toutes les lettres en majuscules."
tags: ["string", "casing"]
---

# String.toUppercase()

Transforme toutes les lettres en majuscules.

## Sommaire

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Valeur de retour](#valeur-de-retour)
- [Exceptions](#exceptions)
- [Exemples](#exemples)
- [Support des plateformes](#support-des-plateformes)

## Prototype

```javascript
String.toUppercase(): String
```

## Arguments

Aucun argument n'est autorisé.

## Valeur de retour

Retourne une `String`.

## Exceptions

- [TypeError](#typeerror)

### TypeError

- Si la variable sur laquelle vous appelez `.toUppercase()` n'est pas convertissable en `String` (comme `null` ou `undefined`).

## Exemples

- [Transformer un text minuscule en majuscule](#transformer-un-text-minuscule-en-majuscule)

### Transformer un text minuscule en majuscule

Dans cet exemple, nous allons transformer une chaîne minuscule en majuscule.

```javascript
let name = "doe";

try {
  name = name.toUppercase();
} catch (exception) {
  if (exception instanceof TypeError) {
    console.error(
      "Appel de .toUppercase() sur une variable qui n'est pas une String."
    );
  } else {
    console.error("Une erreur innatendue s'est produite.");
  }

  return;
}

console.log(`Votre nom est ${name}.`);
```

```
Votre nom est DOE.
```

## Support des plateformes

- [Ordinateur](#ordinateur)
- [Mobile](#mobile)
- [Serveur](#serveur)

### Ordinateur

- Internet Explorer : 3
- Edge : 12
- Firefox : 1
- Chome : 1
- Safari : 1
- Opera : 3

### Mobile

- iOS Safari : 1
- Opera mobile : 10.1
- Android Browser : 2.1
- Chrome for Android : 18
- Firefox for Android : 4
- UC Browser for Android : 1
- Samsung Internet : 1

### Serveur

- Node.JS : 0.1.100
