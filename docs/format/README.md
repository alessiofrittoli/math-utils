# Formatting functions

[🔙 Back](../../README.md)

### formatNumber

Formats a number according to the specified locale and formatting options.

<details>

<summary>Usage</summary>

The `formatNumber` function leverages the [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) API to format a number according to locale-specific conventions. It supports a wide range of options for number formatting, including currency, percentage, and custom decimal configurations.

Import the function as follow:

```ts
import { formatNumber } from "@alessiofrittoli/math-utils";
// or
import { formatNumber } from "@alessiofrittoli/math-utils/format";
```

</details>

---

<details>

<summary>Parameters</summary>

| Parameter | Type                       | Description                                                                                                                                                               |
| --------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `number`  | `number`                   | The numeric value to format.                                                                                                                                              |
| `options` | `Intl.NumberFormatOptions` | (Optional) An object specifying the formatting options.                                                                                                                   |
|           |                            | See the [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) documentation for a full list of options. |
| `locales` | `Intl.LocalesArgument`     | (Optional) A `string`, `string[]`, or `Intl.Locale` object specifying the locale(s) to use for formatting. If omitted, the function uses the runtime's default locale.    |
|           |                            | Examples:                                                                                                                                                                 |
|           |                            | - `"en-US"` for U.S. English.                                                                                                                                             |
|           |                            | - `"it-IT"` for French (France).                                                                                                                                          |
|           |                            | - `["en-US", "it-IT"]` for fallback locale ordering.                                                                                                                      |

</details>

---

<details>

<summary>Returns</summary>

Type: `string`

The formatted number as a string, according to the specified locale and options.

</details>

---

<details>

<summary>Examples</summary>

###### Decimal Formatting

```ts
formatNumber(
  1234.567,
  {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  "en-US"
);
// Output: "1,234.57"
```

###### Currency Formatting

```ts
formatNumber(
  1000,
  {
    style: "currency",
    currency: "EUR",
  },
  "de-DE"
);
// Output: "1.000,00 €"
```

###### Percentage Formatting

```ts
formatNumber(
  0.75,
  {
    style: "percent",
    minimumFractionDigits: 1,
  },
  "en-US"
);
// Output: "75.0%"
```

###### Locale Fallbacks

```ts
formatNumber(123456, undefined, ["unknown", "fr-FR"]);
// Output (in French locale): "123 456"
```

</details>

---

### Bytes

#### `HumanReadableBitInBytes` Enum

The `HumanReadableBitInBytes` enum is a utility that provides pre-defined constants for human well-known Bit values in Bytes.\
It is designed to simplify calculations/convertions and improve code readability.

<details>

<summary>Constants Overview</summary>

| Constant | Value (in bytes) | Description                    |
| -------- | ---------------- | ------------------------------ |
| `bits`   | `1 / 8`          | Represents 1 bit in bytes.     |
| `Kb`     | `1.25e+2`        | Represents 1 Kilobit in bytes. |
| `Mb`     | `1.25e+5`        | Represents 1 Megabit in bytes. |
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

| Constant | Value (in bytes)       | Description                    |
| -------- | ---------------------- | ------------------------------ |
| `Kib`    | `128`                  | Represents 1 Kibibit in bytes. |
| `Mib`    | `1.31072e+5`           | Represents 1 Mebibit in bytes. |
| `Gib`    | `1.34217728e+8`        | Represents 1 Gibibit in bytes. |
| `Tib`    | `1.37438953472e+11`    | Represents 1 Tebibit in bytes. |
| `Pib`    | `1.40737488355328e+14` | Represents 1 Pebibit in bytes. |

</details>

---

#### `HumanReadableByteInBytes` Enum

The `HumanReadableByteInBytes` enum is a utility that provides pre-defined constants for human well-known Byte values in Bytes.\
It is designed to simplify calculations/convertions and improve code readability.

<details>

<summary>Constants Overview</summary>

| Constant | Value (in bytes) | Description                      |
| -------- | ---------------- | -------------------------------- |
| `bytes`  | `1`              | Represents 1 byte in bytes.      |
| `KB`     | `1e+3`           | Represents 1 Kilobyte in bytes.  |
| `MB`     | `1e+6`           | Represents 1 Megabyte in bytes.  |
| `GB`     | `1e+9`           | Represents 1 Gigabyte in bytes.  |
| `TB`     | `1e+12`          | Represents 1 Terabyte in bytes.  |
| `PB`     | `1e+15`          | Represents 1 Petabyte in bytes.  |
| `PB`     | `1e+18`          | Represents 1 Exabyte in bytes.   |
| `PB`     | `1e+21`          | Represents 1 Zettabyte in bytes. |
| `PB`     | `1e+24`          | Represents 1 Yottabyte in bytes. |

</details>

---

#### `ByteInBytes` Enum

The `ByteInBytes` enum is a utility that provides pre-defined constants for Bit values in Bytes including [`HumanReadableByteInBytes` Enum](#humanreadablebyteinbytes-enum) values.\
It is designed to simplify calculations/convertions and improve code readability.

<details>

<summary>Constants Overview</summary>

In addition to [`HumanReadableByteInBytes` Enum](#humanreadablebyteinbytes-enum) values.

| Constant | Value (in bytes)         | Description                     |
| -------- | ------------------------ | ------------------------------- |
| `KiB`    | `1024`                   | Represents 1 Kibibyte in bytes. |
| `MiB`    | `1.048576e+6`            | Represents 1 Mebibyte in bytes. |
| `GiB`    | `1.073741824e+9`         | Represents 1 Gibibyte in bytes. |
| `TiB`    | `1.099511627776e+12`     | Represents 1 Tebibyte in bytes. |
| `PiB`    | `1.125899906842624e+15`  | Represents 1 Pebibyte in bytes. |
| `PiB`    | `1.152921504606847e+18`  | Represents 1 Exbibyte in bytes. |
| `PiB`    | `1.1805916207174113e+21` | Represents 1 Zebibyte in bytes. |
| `PiB`    | `1.2089258196146292e+24` | Represents 1 Yobibyte in bytes. |

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

| Parameter  | Type                       | Default | Description                                                                                                                                     |
| ---------- | -------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `bytes`    | `number`                   | -       | The number of bytes to format.                                                                                                                  |
| `bitBased` | `boolean`                  | `false` | (Optional) Whether to use bit based outputs.                                                                                                    |
| `options`  | `Intl.NumberFormatOptions` | -       | The number format options.                                                                                                                      |
| `locales`  | `Intl.LocalesArgument`     | -       | A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. |

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
import { formatBytes } from "@alessiofrittoli/math-utils";
// or
import { formatBytes } from "@alessiofrittoli/math-utils/format/bytes";

console.log(formatBytes(999)); // Outputs: '999 bytes'
console.log(formatBytes(1024)); // Outputs: '1.024 KB'
console.log(formatBytes(1_000_000)); // Outputs: '1 MB'
console.log(formatBytes(1_000_000_000)); // Outputs: '1 GB'
console.log(formatBytes(1_000_000_000_000)); // Outputs: '1 TB'
console.log(formatBytes(1_000_000_000_000_000)); // Outputs: '1 PB'

console.log(formatBytes(124, true)); // Outputs '992 bits'
console.log(formatBytes(125, true)); // Outputs '1 Kb'
console.log(formatBytes(12.5e4, true)); // Outputs '1 Mb'
console.log(formatBytes(1.25e8, true)); // Outputs '1 Gb'
console.log(formatBytes(1.25e11, true)); // Outputs '1 Tb'
console.log(formatBytes(1.25e14, true)); // Outputs '1 Pb'
```

</details>

---

#### clamp

Clamp the given `input` with the given `min` and `max` value.

<details>

<summary>Parameters</summary>

| Parameter | Type     | Default | Description                 |
| --------- | -------- | ------- | --------------------------- |
| `input`   | `number` | -       | The `input` value to clamp. |
| `min`     | `number` | `0`     | The minimum value.          |
| `max`     | `number` | `100`   | The maximum value.          |

</details>

---

<details>

<summary>Returns</summary>

Type: `number`

The clamped value.

</details>

---

<details>

<summary>Usage</summary>

```ts
import { clamp } from "@alessiofrittoli/math-utils";
// or
import { clamp } from "@alessiofrittoli/math-utils/format/bytes";

console.log(clamp(110)); // Outputs: 100
console.log(clamp(-110)); // Outputs: 0
console.log(clamp(110, -200, 200)); // Outputs: 110
```

</details>
