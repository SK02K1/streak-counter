# `@sk02k1/streak-counter` - a basic streak counter

This is a basic streak counter - inspired by Duolingo - written in TypeScript and meant for the browser (uses `localStorage`).

## Install

### yarn

```shell
yarn add @sk02k1/streak-counter
```

### npm

```shell
npm install @sk02k1/streak-counter
```

## Usage

```js
import { streakCounter } from '@sk02k1/streak-counter';

const today = new Date();
const streak = streakCounter(localStorage, today);
```

### streakCounter returns an object

```js
 {
    currentCount: 1,
    lastLoginDate: "11/11/2021",
    startDate: "11/11/2021",
 }
```
