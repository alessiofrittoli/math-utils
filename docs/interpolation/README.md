# Interpolation functions

[🔙 Back](../../README.md)

### `lerp`

Performs linear interpolation between two values, returning a value that is a weighted average of the two, based on a given interpolation factor.

<details>

<summary>Usage</summary>

The `lerp` function is commonly used in animations, simulations, or any scenario where you need to interpolate (or "blend") between two values based on a factor that typically ranges from 0 to 1.

```ts
import { lerp } from '@alessiofrittoli/math-utils'

// Interpolate between two values
lerp(0, 10, 0) // Output: 0
lerp(0, 10, 0.5) // Output: 5
lerp(0, 10, 1) // Output: 10
```

</details>

<details>

<summary>Parameters</summary>

`a`\
Type: `number`\
The starting value of the interpolation. When `t = 0`, the result will be `a`.

`b`\
Type: `number`\
The ending value of the interpolation. When `t = 1`, the result will be `b`.

`t`\
Type: `number`\
The interpolation factor.

`t = 0`: Returns `a` (the starting value).\
`t = 1`: Returns `b` (the ending value).\
Values between `0` and `1` will return a value that is linearly between `a` and `b`.

`Returns`\
Type: `number`\
The interpolated value between `a` and `b`, calculated as `a * (1 - t) + b * t`.

</details>

<details>

<summary>Examples</summary>

###### Interpolation at the Ends

```ts
lerp(0, 10, 0) // Output: 0
lerp(0, 10, 1) // Output: 10
```

###### Interpolation at the Midpoint

```ts
lerp(0, 10, 0.5) // Output: 5
```

###### Other Values of `t`

```ts
lerp(5, 15, 0.25) // Output: 7.5
lerp(100, 200, 0.75) // Output: 175
```

</details>
