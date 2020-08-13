---
title: "Boucles For...of - Javascript"
tags: ["javascript", "loop"]
---

# Boules For...of

Les boucles `for...of` permettent d'itérer sur un `Array` ou un object itérable.

## Sommaire

- [Exemples](#exemples)
- [Points de vigilences](#points-de-vigilences)
- [Support navigateurs](#support-navigateurs)

## Exemples

- [Itérer sur un tableau de nombres](#itérer-sur-un-tableau-de-nombres)
- [Itérer sur un tableau d'objets](#itérer-sur-un-tableau-d-objets)

### Itérer sur un tableau de nombres

Dans cet exemple, nous allons afficher les nombres d'un tableau.

```javascript
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(`le nombre est: ${number}`);
}
```

```
le nombre est: 1
le nombre est: 2
le nombre est: 3
le nombre est: 4
le nombre est: 5
```

### Itérer sur un tableau d'objets

Dans cet exemple, nous allons afficher les utilisateurs d'un tableau.

```javascript
const users = [
  {
    name: "Marie",
    age: 31,
  },
  {
    name: "John",
    age: 23,
  },
  {
    name: "Diana",
    age: 37,
  },
];

for (const user of users) {
  console.log(`l'utilisateur ${name} a ${age} ans`);
}
```

```
l'utilisateur Marie a 31 ans
l'utilisateur John a 23 ans
l'utilisateur Diana a 37 ans
```
