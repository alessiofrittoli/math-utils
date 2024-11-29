# Helpers functions

[🔙 Back](../../README.md)

### round

Rounds a number to a specified number of decimal places.

<details>

<summary>Usage</summary>

The `round` function provides precise rounding to a given number of decimal places using exponential notation. It ensures consistent behavior across various numeric edge cases.

```ts
import { round } from '@alessiofrittoli/math-utils'
// or
import { round } from '@alessiofrittoli/math-utils/helpers'

// Round a number to no decimal places
round( 5.678 ) 
// Output: 6

// Round a number to 2 decimal places
round( 5.678, 2 )
// Output: 5.68
```

</details>

<details>

<summary>Parameters</summary>

`number`\
Type: `number`\
The numeric value to round.

Must be a finite number.

---

`places` (optional)\
Type: `number`\
The number of decimal places to retain. Defaults to 0 (no decimal places).

`Returns`\
Type: `number`\
The rounded numeric value.

</details>

<details>

<summary>Examples</summary>

###### Round to No Decimal Places (Default)

```ts
round( 4.20 )
// Output: 4
round( 4.56 )
// Output: 5
```

###### Round to Specific Decimal Places

```ts
round( 4.19789, 2 )
// Output: 4.20
```

###### Round Negative Numbers

```ts
round( -3.14159, 3 )
// Output: -3.142
```

###### Round Large Numbers

```ts
round( 123456.789, 1 )
// Output: 123456.8
```

</details>

---

### getClosestNumber

Finds the closest number to a target value from a given array of numbers.

<details>

<summary>Usage</summary>

The `getClosestNumber` function iterates through an array of numbers to find the one closest to a specified target value.\
This can be useful in scenarios such as snapping to a predefined set of values or approximating a match.

```ts
import { getClosestNumber } from '@alessiofrittoli/math-utils'
// or
import { getClosestNumber } from '@alessiofrittoli/math-utils/helpers'

// Find the closest number
getClosestNumber( [ 1, 5, 10, 20 ], 7 ) 
// Output: 5
```

</details>

<details>

<summary>Parameters</summary>

`haystack`\
Type: `number[]`\
An array of numbers to search through.

Can be empty, in which case the function defaults to returning 0.\
If all elements are invalid or missing, it returns 0.

`needle`\
Type: `number`\
The target number to find the closest match for.

Must be a finite number.

`Returns`\
Type: `number`\
The number from the array that is closest to the target value (needle).

`Errors`
This function does not throw errors for invalid inputs like an empty array; it gracefully returns 0 by default.\
However, it expects both haystack and needle to be valid numeric types.

</details>

<details>

<summary>Examples</summary>

###### Basic Usage

```ts
getClosestNumber( [ 1, 5, 10, 20 ], 7 )
// Output: 5
```

###### Exact Match

```ts
getClosestNumber( [ 3, 7, 15 ], 7 )
// Output: 7
```

###### Empty Array

```ts
getClosestNumber( [], 10 )
// Output: 0
```

###### Negative Numbers

```ts
getClosestNumber( [ -10, -5, 0, 5 ], -7 )
// Output: -5
```

###### Equidistant Numbers

When the target number (`needle`) is equidistant from multiple numbers in the array (`haystack`), the "true" closest number could philosophically be considered _both_ or an _indeterminate state_. However, for practical and technical reasons, this function will return the first closest number found in the array.

```ts
getClosestNumber( [ -1, 1 ], 0 )
// Output: -1
// Explanation: Both -1 and 1 are equidistant from 0, but -1 is returned because it appears first in the array.

getClosestNumber( [ 1, -1 ], 0 )
// Output: 1
// Explanation: Both 1 and -1 are equidistant from 0, but 1 is returned because it appears first in the array.

```

</details>

---

### getNumbersFromString

Extracts numeric data from a string, returning both the concatenated digits as a single number and an array of grouped numeric values.

<details>

<summary>Usage</summary>

The `getNumbersFromString` function identifies sequences of digits in a string, concatenates them into a single numeric value, and returns an array of grouped numbers.\
This is particularly useful when dealing with mixed strings that contain numeric data.

```ts
import { getNumbersFromString } from '@alessiofrittoli/math-utils'
// or
import { getNumbersFromString } from '@alessiofrittoli/math-utils/helpers'

// Extract numbers from a string
getNumbersFromString( 'abc123def456ghi78' )
// Output: [ 12345678, [ 123, 456, 78 ] ]
```

</details>

<details>

<summary>Parameters</summary>

`string`\
Type: `string`\
The input string to process.

May contain any combination of letters, digits, symbols, or whitespace.\
If no digits are found, the function returns null for both elements of the tuple.

`Returns`\
Type: `readonly [number | null, number[] | null]`\
A tuple containing:

`number | null`: A single concatenated number from all digit groups, or null if no digits are found.\
`number[] | null`: An array of grouped numbers, or null if no digits are found.

</details>

<details>

<summary>Examples</summary>

###### Basic Extraction

```ts
getNumbersFromString( 'abc123xyz456' )
// Output: [ 123456, [ 123, 456 ] ]
```

###### No Digits in String

```ts
getNumbersFromString( 'Hello World!' )
// Output: [ null, null ]
```

###### Single Number in String

```ts
getNumbersFromString( 'Price: 99€' )
// Output: [ 99, [ 99 ] ]
```

###### Empty String

```ts
getNumbersFromString( '' )
// Output: [ null, null ]
```

###### Complex String with Symbols

```ts
getNumbersFromString( 'Order #123-456. Delivery in 7 days.' )
// Output: [ 1234567, [ 123, 456, 7 ] ]
```

</details>

---

### englishOrdinalSuffix

Determines the English ordinal suffix (`st`, `nd`, `rd`, `th`) for a given number.

<details>

<summary>Usage</summary>

The `englishOrdinalSuffix` function helps format numbers with the appropriate English ordinal suffix.\
This is commonly used in dates, rankings, and other ordered lists.

```ts
import { englishOrdinalSuffix } from '@alessiofrittoli/math-utils'
// or
import { englishOrdinalSuffix } from '@alessiofrittoli/math-utils/helpers'

// Get ordinal suffixes
englishOrdinalSuffix( 1 )	// Output: 'st'
englishOrdinalSuffix( 22 )	// Output: 'nd'
englishOrdinalSuffix( 33 )	// Output: 'rd'
englishOrdinalSuffix( 44 )	// Output: 'th'
```

</details>

<details>

<summary>Parameters</summary>

`number`\
Type: `number`\
The number for which to retrieve the ordinal suffix.

Should be a positive integer.
The function correctly handles special cases like 11, 12, and 13.

`Returns`\
Type: `string`\
The English ordinal suffix for the given number ('st', 'nd', 'rd', or 'th').

</details>

<details>

<summary>Examples</summary>

###### Basic Usage

```ts
englishOrdinalSuffix( 1 )	// Output: 'st'
englishOrdinalSuffix( 2 )	// Output: 'nd'
englishOrdinalSuffix( 3 )	// Output: 'rd'
englishOrdinalSuffix( 4 )	// Output: 'th'
```

###### Special Cases

```ts
englishOrdinalSuffix( 11 )	// Output: 'th'
englishOrdinalSuffix( 12 )	// Output: 'th'
englishOrdinalSuffix( 13 )	// Output: 'th'
```

###### Larger Numbers

```ts
englishOrdinalSuffix( 101 )	// Output: 'st'
englishOrdinalSuffix( 112 )	// Output: 'th'
englishOrdinalSuffix( 122 )	// Output: 'nd'
englishOrdinalSuffix( 123 )	// Output: 'rd'
```

</details>

---

### pad

The `pad` function adds leading zeros to a number to ensure its string representation reaches a specified length.

<details>

<sumamry>Parameters</sumamry>

| Parameter | Type     | Description                                               |
|-----------|----------|-----------------------------------------------------------|
| `number`  | `number` | The number to be padded with leading zeros.               |
| `length`  | `number` | The minimum length of the resulting string after padding. |

</details>

<details>

<sumamry>Returns</sumamry>

Type: `string`

A string representation of the input number, padded with leading zeros if its length is less than the specified length.

</details>

<details>

<sumamry>Usage</sumamry>

###### Padding a Short Number

```ts
import { pad } from '@alessiofrittoli/math-utils'
// or
import { pad } from '@alessiofrittoli/math-utils/helpers'

console.log( pad( 5, 3 ) )
// Outputs: "005"
```

###### No Padding Needed

```ts
import { pad } from '@alessiofrittoli/math-utils'
// or
import { pad } from '@alessiofrittoli/math-utils/helpers'

console.log( pad( 123, 3 ) ) 
// Outputs: "123"
```

###### Larger Numbers

```ts
import { pad } from '@alessiofrittoli/math-utils'
// or
import { pad } from '@alessiofrittoli/math-utils/helpers'

console.log( pad( 42, 5 ) ) 
// Outputs: "00042"
```

</details>