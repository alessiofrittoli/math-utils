# Random number functions

[🔙 Back](../../README.md)


### mtRand

Generates a random number between the given range, mimicking the behavior of PHP's [mt_rand](https://www.php.net/manual/it/function.mt-rand.php) function.

<details>

<summary>Usage</summary>

The `mtRand` function returns a random integer between a specified min and max value, both of which are optional.\
If no arguments are provided, the function defaults to a range of `0` to `0x7FFFFFFF`.

```ts
import { mtRand } from '@alessiofrittoli/math-utils'
// or
import { mtRand } from '@alessiofrittoli/math-utils/random'

// Generate a random number between 0 and 10
mtRand( 0, 10 )	// Output: Random number between 0 and 10

// Generate a random number between 100 and 200
mtRand( 100, 200 )	// Output: Random number between 100 and 200
```

</details>

<details>

<summary>Parameters</summary>

`min`\
Type: `number | string`\
The lowest value to be returned. Defaults to `0`. This parameter can also be a string, which will be parsed into a number.

`max`\
Type: `number | string`\
The highest value to be returned. Defaults to `0x7FFFFFFF` (2147483647). This parameter can also be a string, which will be parsed into a number.

`Returns`\
Type: `number`\
A random integer between min and max, inclusive.

</details>

<details>

<summary>Examples</summary>

###### Generating a Random Number in a Range

```ts
mtRand( 0, 10 )		// Output: Random number between 0 and 10
mtRand( 1, 5 )		// Output: Random number between 1 and 5
mtRand( 100, 200 )	// Output: Random number between 100 and 200
```

###### Using Default Values

```ts
mtRand()	// Output: Random number between 0 and 0x7FFFFFFF
```

</details>

---

### randomNumUUID

Generates a random numeric UUID (Universally Unique Identifier). This function is useful when [crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) is not available or when you need a numeric-based UUID.

<details>

<summary>Usage</summary>

The `randomNumUUID` function returns a string representing a random UUID.

The usage is discouraged since this function has been designed to be executed as fallback of [crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID). Use [randomUUID](#randomuuid) instead.

```ts
import { randomNumUUID } from '@alessiofrittoli/math-utils'
// or
import { randomNumUUID } from '@alessiofrittoli/math-utils/random'

// Generate a random numeric UUID
randomNumUUID() // Output: A random UUID like '2781415097-23468-18589-36554-89625858919940'
```

</details>

---

### generateUUID

Generates a random numeric v4 UUID (Universally Unique Identifier). This function is useful when [crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) is not available.

<details>

<summary>Usage</summary>

The `generateUUID` function returns a string representing a random UUID in the format of `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`, where x represents a random hexadecimal digit and y is a randomly generated version identifier.

The usage is discouraged since this function has been designed to be executed as fallback of [crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID). Use [randomUUID](#randomuuid) instead.

```ts
import { generateUUID } from '@alessiofrittoli/math-utils'
// or
import { generateUUID } from '@alessiofrittoli/math-utils/random'

// Generate a random numeric UUID
generateUUID() // Output: A random UUID like '4e4d7a60-7b6b-4c79-8142-fc21ac3492f8'
```

</details>

---

### randomUUID

Generates a random UUID. It uses the native [crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) function when available.\
If [crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) is not available, it falls back to using the [randomNumUUID](#randomnumuuid) function.

<details>

<summary>Usage</summary>

The `randomUUID` function returns a random UUID, using the [crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) method if available, or falling back to [randomNumUUID](#randomnumuuid) function.

```ts
import { randomUUID } from '@alessiofrittoli/math-utils'
// or
import { randomUUID } from '@alessiofrittoli/math-utils/random'

// Generate a random numeric UUID
randomUUID() // Output: A random UUID like 'f6c5f5ff-b3ac-47fa-bd55-510079b16c9d'
```

</details>