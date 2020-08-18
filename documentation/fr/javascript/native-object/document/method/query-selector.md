---
title: "document.querySelector()"
description: "Sélectionne un seul element validant le sélécteur."
tags: ["javascript", "DOM"]
---

# document.querySelector()

Sélectionne un seul element validant le sélécteur.

## Summary

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Valeur de retour](#valeur-de-retour)
- [Exceptions](#exceptions)
- [Exemples](#exemples)
- [Support des plateformes](#support-des-plateformes)

## Prototype

```typescript
document.querySelector(selector: String): Element
```

## Arguments

- [selector](#selector)

### selector

Un `String` représentant le sélécteur CSS.

## Valeur de retour

Un `Element`.

## Exceptions

- [DOMException](#dom-exception)

### DOMException

Si le sélécteur CSS n'est pas valide.

## Exemples

- [Séléctionner un élément par sa classe](#séléctionner-un-élément-par-sa-classe)
- [Séléctionner un élément par son id](#séléctionner-un-élément-par-son-id)

### Séléctionner un élément par sa classe

Dans cet exemple, nous allons récupérer un `Èlement` ciblé par sa classe.

```javascript
let element = null;

try {
  element = document.querySelector(".btn");
} catch (exception) {
  if (exception instanceof DOMException) {
    console.error("Erreur: sélécteur invalide.");
  } else {
    console.error("Une erreur innatendue s'est produite.");
  }
}
```

### Séléctionner un élément par son id

In this example, we will get the `Element` scoped by its id.

```javascript
let element = null;

try {
  element = document.querySelector("#form");
} catch (exception) {
  if (exception instanceof DOMException) {
    console.error("Erreur: sélécteur invalide.");
  } else {
    console.error("Une erreur innatendue s'est produite.");
  }
}
```

## Support des plateformes

- [Ordinateur](#ordinateur)
- [Mobile](#mobile)
- [Serveur](#serveur)

### Ordinateur

- Chrome : 1
- Edge : **all**
- Internet Explorer : 8
- Opera : 10
- Safari : 3.2

### Mobile

- Android : 2.1
- IE Mobile : 9
- Opera Mobile : 10
- Safari Mobile : 3.2
- Firefox mobile : **all**

### Serveur

- Node.JS : **N/A**
