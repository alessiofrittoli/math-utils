# Types

## Math Utility Types

[🔙 Back](../../README.md)

### `IntEnumerate` and `IntRange`

These are TypeScript utility types that help with generating ranges of numbers and defining number ranges based on their positions.

#### IntEnumerate

`IntEnumerate` is a recursive type that enumerates the numbers from `0` to `N`. It builds an array of numbers from `0` up to the given number `N`.

<details>

<summary>Usage</summary>

This type is useful when you need to generate an array of numbers from 0 to `N` or manipulate types based on a range of numbers.

```ts
import type { IntEnumerate } from "@alessiofrittoli/math-utils";

type Example = IntEnumerate<5>;
// Result: 0 | 1 | 2 | 3 | 4
```

</details>

<details>

<summary>Type Parameters</summary>

- `N` (required): The number to enumerate up to. Must be a number type.
- `Acc` (optional): Accumulator array to collect the results of the enumeration (default is an empty array).

</details>

#### IntRange

`IntRange` is a utility type that generates a range of numbers between `F` (start) and `T` (end), excluding `T`.

<details>

<summary>Usage</summary>

The `IntRange` type is useful when you need to work with a range of numbers excluding the end value.

```ts
import type { IntRange } from "@alessiofrittoli/math-utils";

type RangeExample = IntRange<2, 5>;
// Result: 2 | 3 | 4
```

</details>

<details>

<summary>Type Parameters</summary>

- `F` (required): The start of the range. This number will be included in the resulting range.
- `T` (required): The end of the range. This number will not be included in the range.

</details>

---

### Vector Interfaces

#### Vector2

Represents a 2D vector with `x` and `y` components. The component types are generic and default to number.

```ts
interface Vector2<X = number, Y = X> {
  x: X;
  y: Y;
}
```

<details>

<summary>Type Parameters</summary>

- `X` (default: `number`): The type for the `x` component.
- `Y` (default: `X`): The type for the `y` component. Defaults to the type of `X`.

</details>

<details>

<summary>Properties</summary>

- `x`: The value of the `x` component.
- `y`: The value of the `y` component.

</details>

<details>

<summary>Example</summary>

```ts
import type { Vector2 } from "@alessiofrittoli/math-utils";

const point2D: Vector2 = { x: 10, y: 20 };
const point2DString: Vector2<string> = { x: "10", y: "20" };
const mixedPoint2D: Vector2<number, string> = { x: 10, y: "20" };
```

</details>

---

#### Vector3

Represents a 3D vector with `x`, `y`, and `z` components.\
Extends the `Vector2` interface to include a `z` component. The component types are generic and default to `number`.

```ts
interface Vector3<X = number, Y = X, Z = X> extends Vector2<X, Y> {
  z: Z;
}
```

<details>

<summary>Type Parameters</summary>

- `X` (default: `number`): The type for the `x` component.
- `Y` (default: `X`): The type for the `y` component. Defaults to the type of `X`.
- `Z` (default: `X`): The type for the `z` component. Defaults to the type of `X`.

</details>

<details>

<summary>Properties</summary>

- `x`: The value of the `x` component (inherited from `Vector2`).
- `y`: The value of the `y` component (inherited from `Vector2`).
- `z`: The value of the `z` component.

</details>

<details>

<summary>Example</summary>

```ts
import type { Vector3 } from "@alessiofrittoli/math-utils";

const point3D: Vector3 = { x: 10, y: 20, z: 30 };
const point3DString: Vector3<string> = { x: "10", y: "20", z: "30" };
const mixedPoint3D: Vector3<number, string, boolean> = {
  x: 10,
  y: "20",
  z: true,
};
```

</details>
