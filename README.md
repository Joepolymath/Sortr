# SORTRJS

Package that houses various sorting algorithms for the consumption of engineers who do not want to go through the stress of writing their own sorting algorithms from scratch.

All available algorithms are usable as methods of this package.

Firstly, install sortr. `npm install sortrjs`

You can hence import sortr into your codebase.

```
const sortr = require('sortrjs').default;

// to use Merge Sort for example, you can write it as follows
const sortedArray = sortr.merge.sort([43, 12, 54, 1, 3, 2, 98])
console.log(sortedArray) // [1, 2, 3, 12, 43, 54, 98]
```

# Contribution Guidelines

Part of the major goals of this project apart from makeing algorithms accessible, is to encourage beginners and first-timers to contribute to open source projects.

Below are the guidelines for

## Getting Started

- Read this [step by step guide](https://link.medium.com/7AjLJHdO02) to get your code into this repository

- Pick a sorting algorithm you would like to add, make sure no one has written it.

- Create a new file in the `src` directory `<SORTING_ALGORITHM_NAME>/index.js`. Eg. `quick/index.js` make sure the sorting algorithm hasn't been written already

- create a new file to write your tests `<SORTING_ALGORITHM_NAME>.spec.js` e.g `quick.test.js`

- I wrote `bubble/index.js` and `bubble.spec.js` feel free to use it as a template

## Contributors

- [Joepolymath](https://github.com/Joepolymath) (bubble, insertion, merge, selection)
