---
title: "document.querySelectorAll()"
description: "Récupère un tableau de Node qui correspond au sélécteur."
tags: ["javascript", "DOM"]
---

# document.querySelector()

Récupère un tableau de Node qui correspond au sélécteur.

## Summary

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Valeur de retour](#valeur-de-retour)
- [Exceptions](#exceptions)
- [Exemples](#exemples)
- [Support des plateformes](#support-des-plateformes)

## Prototype

```typescript
document.querySelectorAll(selector: String): NodeList
```

## Arguments

- [selector](#selector)

### selector

Un `String` représentant le sélécteur CSS.

## Valeur de retour

Un `NodeList` itérable.

## Exceptions

- [DOMException](#dom-exception)

### DOMException

- Si le sélécteur CSS n'est pas valide.

## Exemples

- [Récupérer les éléments qui correspondent à une classe](#récupérer-les-éléments-qui-correspondent-à-une-classe)
- [Itérer sur les éléments en utilisant une boucle for](#itérer-sur-les-éléments-en-utilisant-une-boucle-for)

### Récupérer les éléments qui correspondent à une classe

Dans cet exemple, nous allons récupérer tous les éléments qui correspondent à la classe et itérer sur ceux-ci.

```javascript
let elements = null;

try {
  elements = document.querySelectorAll(".btn");
} catch (exception) {
  if (exception instanceof DOMException) {
    console.error("Erreur : sélécteur invalide.");
  } else {
    console.error("Une erreur innatendue s'est produite.");
  }

  return;
}

elements.forEach((element) => {
  console.log(`Nom du tag de l'élément : ${element.tagName}.`);
});
```

```
Nom du tag de l'élément: BUTTON.
```

### Itérer sur les éléments en utilisant une boucle for

Itérer à travers un NodeList n'est pas possible avec une boucle for classique. Dans cet exemple, nous allons convertir le NodeList en Array, afin de pouvoir boucler dessus en utilisant une boucle `for...of`.

```javascript
let elements = null;

try {
  elements = Array.from(document.querySelectorAll(".btn"));
} catch (exception) {
  if (exception instanceof DOMException) {
    console.error("Erreur : sélécteur invalide.");
  } else {
    console.error("Une erreur innatendue s'est produite.");
  }

  return;
}

for (const element of elements) {
  console.log(`Nom du tag de l'élément : ${element.tagName}.`);
}
```

```
Nom du tag de l'élément: BUTTON.
```

## Support des plateformes

- [Ordinateur](#ordinateur)
- [Mobile](#mobile)
- [Serveur](#serveur)

### Ordinateur

- Chrome : 1
- Firefox : 3.5
- Edge : **all**
- Internet Explorer : 8
- Opera : 10
- Safari : 3.2

### Mobile

- Android : **all**
- Safari Mobile : **all**
- Firefox mobile : 1

### Serveur

- Node.JS : **N/A**
