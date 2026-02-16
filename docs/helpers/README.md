# Helpers functions

[🔙 Back](../../README.md)

### `round`

Rounds a number to a specified number of decimal places.

It provides precise rounding to a given number of decimal places using exponential notation. It ensures consistent behavior across various numeric edge cases.

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter | Type     | Description                                                                           |
| --------- | -------- | ------------------------------------------------------------------------------------- |
| `number`  | `number` | The numeric value to round. Must be a finite number.                                  |
| `places`  | `number` | (Optional) The number of decimal places to retain. Defaults to 0 (no decimal places). |

</details>

---

<details>

<summary style="cursor:pointer">Returns</summary>

Type: `number`

The rounded numeric value.

</details>

---

<details>

<summary style="cursor:pointer">Examples</summary>

###### Importing the function

```ts
import { round } from "@alessiofrittoli/math-utils";
```

---

###### Round to No Decimal Places (Default)

```ts
round(4.2);
// Output: 4
round(4.56);
// Output: 5
```

---

###### Round to Specific Decimal Places

```ts
round(4.19789, 2);
// Output: 4.20
```

---

###### Round Negative Numbers

```ts
round(-3.14159, 3);
// Output: -3.142
```

---

###### Round Large Numbers

```ts
round(123456.789, 1);
// Output: 123456.8
```

</details>

---

### `getClosestNumber`

Finds the closest number to a target value from a given array of numbers.

The `getClosestNumber` function iterates through an array of numbers to find the one closest to a specified target value.\
This can be useful in scenarios such as snapping to a predefined set of values or approximating a match.

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter  | Type       | Description                                                               |
| ---------- | ---------- | ------------------------------------------------------------------------- |
| `haystack` | `number[]` | An array of numbers to search through.                                    |
|            |            | Can be empty, in which case the function defaults to returning 0.         |
|            |            | If all elements are invalid or missing, it returns 0.                     |
| `needle`   | `number`   | The target number to find the closest match for. Must be a finite number. |

</details>

---

<details>

<summary style="cursor:pointer">Returns</summary>

Type: `number`

The number from the array that is closest to the target value (`needle`).

`Errors`
This function does not throw errors for invalid inputs like an empty array; it gracefully returns 0 by default.\
However, it expects both haystack and needle to be valid numeric types.

</details>

---

<details>

<summary style="cursor:pointer">Errors</summary>

This function does not throw errors for invalid inputs like an empty array; it gracefully returns 0 by default.\
However, it expects both haystack and needle to be valid numeric types.

</details>

---

<details>

<summary style="cursor:pointer">Examples</summary>

###### Importing the function

```ts
import { getClosestNumber } from "@alessiofrittoli/math-utils";
```

---

###### Basic Usage

```ts
getClosestNumber([1, 5, 10, 20], 7);
// Output: 5
```

---

###### Exact Match

```ts
getClosestNumber([3, 7, 15], 7);
// Output: 7
```

---

###### Empty Array

```ts
getClosestNumber([], 10);
// Output: 0
```

---

###### Negative Numbers

```ts
getClosestNumber([-10, -5, 0, 5], -7);
// Output: -5
```

---

###### Equidistant Numbers

When the target number (`needle`) is equidistant from multiple numbers in the array (`haystack`), the "true" closest number could philosophically be considered _both_ or an _indeterminate state_. However, for practical and technical reasons, this function will return the first closest number found in the array.

```ts
getClosestNumber([-1, 1], 0);
// Output: -1
// Explanation: Both -1 and 1 are equidistant from 0, but -1 is returned because it appears first in the array.

getClosestNumber([1, -1], 0);
// Output: 1
// Explanation: Both 1 and -1 are equidistant from 0, but 1 is returned because it appears first in the array.
```

</details>

---

### `getNumbersFromString`

Extracts numeric data from a string, returning both the concatenated digits as a single number and an array of grouped numeric values.

The `getNumbersFromString` function identifies sequences of digits in a string, concatenates them into a single numeric value, and returns an array of grouped numbers.\
This is particularly useful when dealing with mixed strings that contain numeric data.

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter | Type     | Description                                                                         |
| --------- | -------- | ----------------------------------------------------------------------------------- |
| `string`  | `string` | The input string to process.                                                        |
|           |          | May contain any combination of letters, digits, symbols, or whitespace.             |
|           |          | If no digits are found, the function returns `null` for both elements of the tuple. |

</details>

---

<details>

<summary style="cursor:pointer">Returns</summary>

Type: `readonly [number | null, number[] | null]`

A tuple containing:

- `number | null`: A single concatenated number from all digit groups, or `null` if no digits are found.
- `number[] | null`: An array of grouped numbers, or `null` if no digits are found.

</details>

---

<details>

<summary style="cursor:pointer">Examples</summary>

###### Importing the function

```ts
import { getNumbersFromString } from "@alessiofrittoli/math-utils";
```

---

###### Basic Extraction

```ts
getNumbersFromString("abc123xyz456");
// Output: [ 123456, [ 123, 456 ] ]
```

---

###### No Digits in String

```ts
getNumbersFromString("Hello World!");
// Output: [ null, null ]
```

---

###### Single Number in String

```ts
getNumbersFromString("Price: 99€");
// Output: [ 99, [ 99 ] ]
```

---

###### Empty String

```ts
getNumbersFromString("");
// Output: [ null, null ]
```

---

###### Complex String with Symbols

```ts
getNumbersFromString("Order #123-456. Delivery in 7 days.");
// Output: [ 1234567, [ 123, 456, 7 ] ]
```

</details>

---

### `englishOrdinalSuffix`

Determines the English ordinal suffix (`st`, `nd`, `rd`, `th`) for a given number.

The `englishOrdinalSuffix` function helps format numbers with the appropriate English ordinal suffix.\
This is commonly used in dates, rankings, and other ordered lists.

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter | Type     | Description                                                       |
| --------- | -------- | ----------------------------------------------------------------- |
| `number`  | `number` | The number for which to retrieve the ordinal suffix.              |
|           |          | Should be a positive integer.                                     |
|           |          | The function correctly handles special cases like 11, 12, and 13. |

</details>

---

<details>

<summary style="cursor:pointer">Returns</summary>

Type: `string`

The English ordinal suffix for the given number ('st', 'nd', 'rd', or 'th').

</details>

---

<details>

<summary style="cursor:pointer">Examples</summary>

###### Importing the function

```ts
import { englishOrdinalSuffix } from "@alessiofrittoli/math-utils";
```

---

###### Basic Usage

```ts
englishOrdinalSuffix(1); // Output: 'st'
englishOrdinalSuffix(2); // Output: 'nd'
englishOrdinalSuffix(3); // Output: 'rd'
englishOrdinalSuffix(4); // Output: 'th'
englishOrdinalSuffix(21); // Output: 'st'
englishOrdinalSuffix(22); // Output: 'nd'
englishOrdinalSuffix(33); // Output: 'rd'
englishOrdinalSuffix(44); // Output: 'th'
```

---

###### Special Cases

```ts
englishOrdinalSuffix(11); // Output: 'th'
englishOrdinalSuffix(12); // Output: 'th'
englishOrdinalSuffix(13); // Output: 'th'
```

---

###### Larger Numbers

```ts
englishOrdinalSuffix(101); // Output: 'st'
englishOrdinalSuffix(112); // Output: 'th'
englishOrdinalSuffix(122); // Output: 'nd'
englishOrdinalSuffix(123); // Output: 'rd'
```

</details>

---

### `padStart`

The `padStart` function adds padding to the left of a given value (either a string or a number) until it reaches the specified length.\
This function replicates the behavior of [String.prototype.padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) but allows for more customized use cases.

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter   | Type               | Default | Description                                                                                                   |
| ----------- | ------------------ | ------- | ------------------------------------------------------------------------------------------------------------- |
| `value`     | `string \| number` | -       | The value to pad with the given character.                                                                    |
| `maxLength` | `number`           | -       | The desired length of the resulting string. If value is already this length or longer, no padding is applied. |
| `character` | `number`           | `"0"`   | (Optional) The character used for padding.                                                                    |

</details>

---

<details>

<summary style="cursor:pointer">Returns</summary>

Type: `string`

The padded string if value is shorter than `maxLength`; otherwise, the original `value` converted to a string.

</details>

---

<details>

<summary style="cursor:pointer">Examples</summary>

###### Importing the function

```ts
import { padStart } from "@alessiofrittoli/math-utils";
```

---

###### Padding a Short Number

```ts
console.log(padStart(5, 3));
// Outputs: "005"
```

---

###### No Padding Needed

```ts
console.log(padStart(123, 3));
// Outputs: "123"
```

---

###### Larger Numbers

```ts
console.log(padStart(123456, 5));
// Outputs: "123456"
```

---

###### Using custom character

```ts
console.log(padStart(7, 3, "+"));
// Outputs: "++7"
```

</details>

---

### `isNumeric`

The `isNumeric` function check whether the given value is a valid `number` or a valid numeric string.

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter | Type               | Description         |
| --------- | ------------------ | ------------------- |
| `value`   | `string \| number` | The value to check. |

</details>

---

<details>

<summary style="cursor:pointer">Returns</summary>

Type: `boolean`

- `true`: if the the given value is a valid number or a valid numeric string.
- `false`: otherwise.

</details>

---

<details>

<summary style="cursor:pointer">Examples</summary>

###### Importing the function

```ts
import { isNumeric } from "@alessiofrittoli/math-utils";
```

---

###### Checking strings

```ts
console.log(isNumeric("12345"));
// Outputs: `true`

console.log(isNumeric("invalid numeric string 12345"));
// Outputs: `false`
```

---

###### Checking numbers

```ts
console.log(isNumeric(12345));
// Outputs: `true`

console.log(isNumeric(Number("NaN")));
// Outputs: `false`
```

</details>

---

### `paginate`

The `paginate` function returns pagination informations based on the given options.

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter         | Type              | Default | Description                               |
| ----------------- | ----------------- | ------- | ----------------------------------------- |
| `options`         | `PaginateOptions` | `{}`    | An object defining pagination input data. |
| `options.perPage` | `number`          | `0`     | Defines elements count per page.          |
| `options.offset`  | `number`          | `0`     | Defines the elements to skip.             |
| `options.total`   | `number`          | `0`     | Defines the total available elements.     |

</details>

---

<details>

<summary style="cursor:pointer">Returns</summary>

Type: `Pagination`

An object containing pagination informations based on the given options with the following properties:

| Property       | Type            | Description          |
| -------------- | --------------- | -------------------- |
| `pages`        | `number`        | The number of pages. |
| `currentPage`  | `number`        | The current page.    |
| `previousPage` | `number\|false` | The previous page.   |
| `nextPage`     | `number\|false` | The next page.       |

</details>

---

<details>

<summary style="cursor:pointer">Examples</summary>

###### Importing the function

```ts
import { paginate } from "@alessiofrittoli/math-utils";
```

---

###### Get pagination informations

```ts
console.log(paginate({ perPage: 12, total: 30 }));
// Outputs: { pages: 3, currentPage: 1, previousPage: false, nextPage: 2 }
```

---

###### Get pagination informations with offset

```ts
console.log(paginate({ perPage: 12, offset: 12, total: 30 }));
// Outputs: { pages: 3, currentPage: 2, previousPage: 1, nextPage: 3 }
```

</details>
