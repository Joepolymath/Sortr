# SORTRJS

Package that houses various sorting algorithms for the consumption of engineers who do not want to go through the stress of writing their own sorting algorithms from scratch.

All available algorithms are usable as methods of this package.

Firstly, install sortr. `npm install sortrjs`

You can hence import sortr into your codebase.

```
const sortr = require('sortrjs');

// to use Merge Sort for example, you can write it as follows
const sortedArray = sortr.merge.sort([43, 12, 54, 1, 3, 2, 98])
console.log(sortedArray) // [1, 2, 3, 12, 43, 54, 98]
```
