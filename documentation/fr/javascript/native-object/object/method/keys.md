---
title: "Object.keys()"
description: "Retourne les noms des clés d'un objet."
tags: ["javascript", "object"]
---

# Object.keys()

Retourne les noms des clés d'un objet.

## Summary

- [Prototype](#prototype)
- [Arguments](#arguments)
- [Valeur de retour](#valeur-de-retour)
- [Exceptions](#exceptions)
- [Exemples](#exemples)
- [Support des plateformes](#support-des-plateformes)

## Prototype

```javascript
Object.keys(element: any): Array<String>
```

## Arguments

- [element](#element)

### element

N'importe quel type de variable sauf `null` et `undefined`.

## Valeur de retour

Retorune un `Array` de `String` représentant les noms des clés.

## Exceptions

- [TypeError](#typeerror)

### TypeError

- Si l'argument est `null` ou `undefined`.

## Exemples

- [Récupérer les noms des clés d'un object](#récupérer-les-noms-des-clés-d-un-object)
- [Récupérer les noms des clés d'un tableau](#récupérer-les-noms-des-clés-d-un-tableau)

### Récupérer les noms des clés d'un object

Dans cet exemple, nous allons récupérer les noms des clés d'un object.

```javascript
const user = {
  name: "John",
  age: 38,
  position: "developer",
};
let keys = [];

try {
  keys = Object.keys(user);
} catch (exception) {
  if (exception instanceof TypeError) {
    console.error("L'argument ne peut pas être null ou undefined.");
  } else {
    console.error("Une erreur innatendue s'est produite.");
  }

  return;
}

for (const key of keys) {
  console.log(`Clé trouvée avec comme nom : ${key}.`);
}
```

```
Clé trouvée avec comme nom : name.
Clé trouvée avec comme nom : age.
Clé trouvée avec comme nom : position.
```

### Récupérer les noms des clés d'un tableau

Dans cet exemple, nous allons récupérer les noms des clés d'un tableau.

```javascript
const marks = [20, 18, 11, 13, 16];
let keys = [];

try {
  keys = Object.keys(marks);
} catch (exception) {
  if (exception instanceof KeyError) {
    console.error("L'argument ne peut pas être null ou undefined.");
  } else {
    console.error("Une erreur s'est produite.");
  }

  return;
}

for (const key of keys) {
  console.log(`Clé trouvée avec comme nom : ${key}.`);
}
```

```
Clé trouvée avec comme nom : 0.
Clé trouvée avec comme nom : 1.
Clé trouvée avec comme nom : 2.
Clé trouvée avec comme nom : 3.
Clé trouvée avec comme nom : 4.
```

## Support des plateformes

- [Ordinateur](#ordinateur)
- [Mobile](#mobile)
- [Serveur](#serveur)

### Ordinateur

- Internet Explorer : 9
- Edge : 12
- Firefox : 4
- Chome : 5
- Safari : 5
- Opera : 12

### Mobile

- iOS Safari : 5
- Opera mobile : 12
- Chrome for Android : 18
- Firefox for Android : 4
- UC Browser for Android : 1
- Samsung Internet : 1

### Serveur

- Node.JS : **all**
