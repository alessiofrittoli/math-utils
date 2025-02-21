# Formatting functions

[🔙 Back](../../README.md)

### formatNumber

Formats a number according to the specified locale and formatting options.

<details>

<summary>Usage</summary>

The `formatNumber` function leverages the [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) API to format a number according to locale-specific conventions. It supports a wide range of options for number formatting, including currency, percentage, and custom decimal configurations.

Import the function as follow:

```ts
import { formatNumber } from '@alessiofrittoli/math-utils'
// or
import { formatNumber } from '@alessiofrittoli/math-utils/format'
```

</details>

<details>

<summary>Parameters</summary>

`number`\
Type: `number`\
The numeric value to format.

---

`options` (optional)\
Type: `Intl.NumberFormatOptions`\
An object specifying the formatting options.

See the [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) documentation for a full list of options.

---

`locales` (optional)\
Type: `Intl.LocalesArgument`\
A `string`, `string[]`, or `Intl.Locale` object specifying the locale(s) to use for formatting.

If omitted, the function uses the runtime's default locale.

Examples:

`"en-US"` for U.S. English.\
`"it-IT"` for French (France).\
`["en-US", "it-IT"]` for fallback locale ordering.

---

`Returns`\
Type: `string`\
The formatted number as a string, according to the specified locale and options.

</details>

<details>

<summary>Examples</summary>

###### Decimal Formatting

```ts
formatNumber( 1234.567, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}, 'en-US' )
// Output: "1,234.57"
```

###### Currency Formatting

```ts
formatNumber( 1000, {
    style: 'currency',
    currency: 'EUR',
}, 'de-DE' )
// Output: "1.000,00 €"
```

###### Percentage Formatting

```ts
formatNumber( 0.75, {
    style: 'percent',
    minimumFractionDigits: 1,
}, 'en-US' )
// Output: "75.0%"
```

###### Locale Fallbacks

```ts
formatNumber( 123456, undefined, [ 'unknown', 'fr-FR' ] )
// Output (in French locale): "123 456"
```

</details>

### Bytes

#### `HumanReadableBitInBytes` Enum

The `HumanReadableBitInBytes` enum is a utility that provides pre-defined constants for human well-known Bit values in Bytes.\
It is designed to simplify calculations/convertions and improve code readability.

<details>

<summary>Constants Overview</summary>

| Constant | Value (in bytes) | Description                    |
|----------|------------------|--------------------------------|
| `bits`   | `1 / 8`          | Represents 1 bit in bytes.     |
| `Kb`     | `125`            | Represents 1 Kilobit in bytes. |
| `Mb`     | `12.5e+4`        | Represents 1 Megabit in bytes. |
| `Gb`     | `1.25e+8`        | Represents 1 Gigabit in bytes. |
| `Tb`     | `1.25e+11`       | Represents 1 Terabit in bytes. |
| `Pb`     | `1.25e+14`       | Represents 1 Petabit in bytes. |

</details>

---

#### `BitInBytes` Enum

The `BitInBytes` enum is a utility that provides pre-defined constants for Bit values in Bytes including [`HumanReadableBitInBytes` Enum](#humanreadablebitinbytes-enum) values.\
It is designed to simplify calculations/convertions and improve code readability.

<details>

<summary>Constants Overview</summary>

In addition to [`HumanReadableBitInBytes` Enum](#humanreadablebitinbytes-enum) values.

| Constant | Value (in bytes)      | Description                    |
|----------|-----------------------|--------------------------------|
| `Kib`    | `128`                 | Represents 1 Kibibit in bytes. |
| `Mib`    | `131_072`             | Represents 1 Mebibit in bytes. |
| `Gib`    | `134_217_728`         | Represents 1 Gibibit in bytes. |
| `Tib`    | `137_438_953_472`     | Represents 1 Tebibit in bytes. |
| `Pib`    | `140_737_488_355_328` | Represents 1 Pebibit in bytes. |

</details>

---

#### `HumanReadableByteInBytes` Enum

The `HumanReadableByteInBytes` enum is a utility that provides pre-defined constants for human well-known Byte values in Bytes.\
It is designed to simplify calculations/convertions and improve code readability.

<details>

<summary>Constants Overview</summary>

| Constant | Value (in bytes) | Description                     |
|----------|------------------|---------------------------------|
| `bytes`  | `1`              | Represents 1 byte in bytes.     |
| `KB`     | `1e+3`           | Represents 1 Kilobyte in bytes. |
| `MB`     | `1e+6`           | Represents 1 Megabyte in bytes. |
| `GB`     | `1e+9`           | Represents 1 Gigabyte in bytes. |
| `TB`     | `1e+12`          | Represents 1 Terabyte in bytes. |
| `PB`     | `1e+15`          | Represents 1 Petabyte in bytes. |

</details>

---

#### `ByteInBytes` Enum

The `ByteInBytes` enum is a utility that provides pre-defined constants for Bit values in Bytes including [`HumanReadableByteInBytes` Enum](#humanreadablebyteinbytes-enum) values.\
It is designed to simplify calculations/convertions and improve code readability.

<details>

<summary>Constants Overview</summary>

In addition to [`HumanReadableByteInBytes` Enum](#humanreadablebyteinbytes-enum) values.

| Constant | Value (in bytes)        | Description                     |
|----------|-------------------------|---------------------------------|
| `KiB`    | `1024`                  | Represents 1 Kibibyte in bytes. |
| `MiB`    | `1_048_576`             | Represents 1 Mebibyte in bytes. |
| `GiB`    | `1_073_741_824`         | Represents 1 Gibibyte in bytes. |
| `TiB`    | `1_099_511_627_776`     | Represents 1 Tebibyte in bytes. |
| `PiB`    | `1_125_899_906_842_624` | Represents 1 Pebibyte in bytes. |

</details>

---

#### `InBytes` Enum

The `InBytes` enum is a utility that provides pre-defined constants for Bit and Byte values in Bytes.\
It is designed to simplify calculations/convertions and improve code readability.

It groups constants defined in [`BitInBytes`](#bitinbytes-enum) and [`ByteInBytes`](#byteinbytes-enum) Enum values.

---

#### formatBytes

Format bytes in a human readable format.

<details>

<summary>Parameters</summary>

| Parameter  | Type      | Default | Description |
| `bytes`    | `number`  | -       | The number of bytes to format. |
| `bitBased` | `boolean` | `false` | (Optional) Whether to use bit based outputs. |
| `options`  | `Intl.NumberFormatOptions` | - | The number format options. |
| `locales`  | `Intl.LocalesArgument` | - | A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. |

</details>

---

<details>

<summary>Returns</summary>

Type: `string`

A string representing the formatted size.

</details>

---

<details>

<summary>Usage</summary>

```ts
import { formatBytes } from '@alessiofrittoli/math-utils'
// or
import { formatBytes } from '@alessiofrittoli/math-utils/format/bytes'

console.log( formatBytes( 999 ) ) // Outputs: '999 bytes'
console.log( formatBytes( 1024 ) ) // Outputs: '1.024 KB'
console.log( formatBytes( 1_000_000 ) ) // Outputs: '1 MB'
console.log( formatBytes( 1_000_000_000 ) ) // Outputs: '1 GB'
console.log( formatBytes( 1_000_000_000_000 ) ) // Outputs: '1 TB'
console.log( formatBytes( 1_000_000_000_000_000 ) ) // Outputs: '1 PB'


console.log( formatBytes( 124, true ) ) // Outputs '992 bits'
console.log( formatBytes( 125, true ) ) // Outputs '1 Kb'
console.log( formatBytes( 12.5e+4, true ) ) // Outputs '1 Mb'
console.log( formatBytes( 1.25e+8, true ) ) // Outputs '1 Gb'
console.log( formatBytes( 1.25e+11, true ) ) // Outputs '1 Tb'
console.log( formatBytes( 1.25e+14, true ) ) // Outputs '1 Pb'
```

</details>
