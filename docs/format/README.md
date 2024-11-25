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