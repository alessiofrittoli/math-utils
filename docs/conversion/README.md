# Conversion functions

[🔙 Back](../../README.md)

### `getMapRatio`

Generates a new conversion map where each key's value is recalculated as the ratio of a specified reference key's value divided by the original value of that key.

It works well in combination with the [convertTo](#convertto) function

<details>

<summary>Type parameters</summary>

| Parameter | Description |
|-----------|-------------|
| `T`       | Represents the input map object. It must be a `Record<string, number>`. |
| `K`       | Represents the key in the input map to be used as the reference. It must be a key of `T`. |

</details>

---

<details>

<summary>Parameters</summary>

| Parameter | Type | Description |
|-----------|------|-------------|
| `map`     | `Record<string, number>` | A key-value object. |
| `key`     | `keyof map` | The reference key from the input map. The function uses this key's value to calculate the ratios for all other keys. |

</details>

---

<details>

<summary>Returns</summary>

A new object where:

Each key's value is recalculated as the ratio of the reference key's value divided by the original value of the corresponding key.

</details>

---

<details>

<summary>Throws</summary>

- `Error`:
    Thrown if the specified key does not exist in the input map.

- `TypeError`:
    Thrown if the value of the reference key is not a valid number.

</details>

---

<details>

<summary>Usage</summary>

#### Get object ratio values based on a given key

```ts
import { getMapRatio } from '@alessiofrittoli/math-utils'
// or
import { getMapRatio } from '@alessiofrittoli/math-utils/conversion'

const CacioEPepe = {
    spaghettoni : 320,
    pecorino    : 200, // pecorino romano DOP is a must
    pepe        : 5,
    portions    : 4,
}

console.log( getMapRatio( CacioEPepe, 'spaghettoni' ) )
// Outputs: {
//    spaghettoni   : 1,    // 1 to 1
//    pecorino      : 1.6,  // 1 to 1.6 ( 320 / 200 )
//    pepe          : 64,   // 1 to 64 ( 320 / 5 )
//    portions      : 80,   // 1 to 80 ( 320 / 4 )
// }
```

---

#### Using ratio values to convert values

```ts
import { convertTo, getMapRatio } from '@alessiofrittoli/math-utils'
// or
import { convertTo, getMapRatio } from '@alessiofrittoli/math-utils/conversion'

/** Carbonara for 4 people. */
const Carbonara = {
    spaghettoni : 320,
    guanciale   : 150,
    tuorli      : 6,
    pepe        : 5,
    pecorino    : 50, // pecorino romano DOP is a must
    portions    : 4,
}

/** Converted recipe for 7 people. */
const result1 = convertTo( 7, getMapRatio( Carbonara, 'portions' ) )
console.log( result1 )
// Outputs:
// Map(6) {
//     'spaghettoni' => { value: 560, ratio: 0.0125 },
//     'guanciale' => { value: 262.5, ratio: 0.02666666666666667 },
//     'tuorli' => { value: 10.5, ratio: 0.6666666666666666 },
//     'pepe' => { value: 8.75, ratio: 0.8 },
//     'pecorino' => { value: 87.5, ratio: 0.08 },
//     'portions' => { value: 7, ratio: 1 }
// }

/** Converted recipe for a full pack of spaghettoni consumption. */
const result2 = convertTo( 500, getMapRatio( Carbonara, 'spaghettoni' ) )
console.log( result2 )
// Outputs:
// Map(6) {
//     'spaghettoni' => { value: 500, ratio: 1 },
//     'guanciale' => { value: 234.375, ratio: 2.1333333333333333 },
//     'tuorli' => { value: 9.375, ratio: 53.333333333333336 },
//     'pepe' => { value: 7.8125, ratio: 64 },
//     'pecorino' => { value: 78.125, ratio: 6.4 },
//     'portions' => { value: 6.25, ratio: 80 }
// }

/** Converted recipe for 3 eggs consumption. */
const result3 = convertTo( 3, getMapRatio( Carbonara, 'tuorli' ) )
console.log( result3 )
// Outputs:
// Map(6) {
//     'spaghettoni' => { value: 160, ratio: 0.01875 },
//     'guanciale' => { value: 75, ratio: 0.04 },
//     'tuorli' => { value: 3, ratio: 1 },
//     'pepe' => { value: 2.5, ratio: 1.2 },
//     'pecorino' => { value: 25, ratio: 0.12 },
//     'portions' => { value: 2, ratio: 1.5 }
// }
```

</details>

---

### `convertTo`

Converts a given numeric input into multiple units using a specified conversion map. Each unit's conversion factor determines the calculation.

<details>

<summary>Type parameters</summary>

| Parameter | Description |
|-----------|-------------|
| `T`       | A `ConversionMap` type where: |
|           | Keys represent unit names (e.g., `"mile"`, `"yard"`, `"foot"`). |
|           | Values represent conversion factors relative to the input unit. |

</details>

---

<details>

<summary>Parameters</summary>

| Parameter | Type | Description |
|-----------|------|-------------|
| `input`   | `number` | The numeric value to be converted. |
| `map`     | `ConversionMap` | A record defining the conversion factors for each unit. |
|           |                 | Keys: Unit names (e.g., `"mile"`, `"yard"`, `"foot"`). |
|           |                 | Values: Measurement factors (e.g., meters per unit). |

</details>

---

<details>

<summary>Returns</summary>

Type: `TypedMap<T>`

A `TypedMap` where:

- Key: The unit name.
- Value: An object containing:
    - `value`: The converted value.
    - `ratio`: The measurement factor used for the conversion.

</details>

---

<details>

<summary>Throws</summary>

Throws a `TypeError` if any ratio in the map is not a valid number.

</details>

---

<details>

<summary>Usage</summary>

```ts
const InMeters = {
    mile: 1609.34,  // 1 mile in meters
    yard: 0.9144,   // 1 yard in meters
    foot: 0.3048,   // 1 foot in meters
}
const result = convertTo( 100, InMeters )

console.log( result.get( 'mile' ) ) // 100m in miles -> { value: 0.06213727366498068, ratio: 1609.34 }
console.log( result.get( 'yard' ) ) // 100m in yards -> { value: 109.36132983377078, ratio: 0.9144 }
console.log( result.get( 'foot' ) ) // 100m in feet -> { value: 328.0839895013123, ratio: 0.3048 }
```

</details>
