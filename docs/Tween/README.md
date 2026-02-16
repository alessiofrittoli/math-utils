# Tween

[🔙 Back](../../README.md)

Provides interpolation between two numeric values over a given duration.

Supports customizable easing functions and configurable tick strategies (GPU-synchronized or timer-based).

### Types

#### TickHandler

Callback executed on each interpolation tick.

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter | Type     | Description                     |
| --------- | -------- | ------------------------------- |
| `value`   | `number` | The current interpolated value. |

</details>

---

#### TweenOptions

Defines customization options required by `Tween.to()` method.

<details>

<summary style="cursor:pointer">Properties</summary>

| Property   | Type          | Description                                                                                                                     |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `from`     | `number`      | Initial value of the interpolation.                                                                                             |
| `duration` | `number`      | Duration of the tween in milliseconds.                                                                                          |
| `onTick`   | `TickHandler` | Callback executed on each interpolation tick.                                                                                   |
|            |               | See [`TickHandler`](#tickhandler) types for more info.                                                                          |
| `easing`   | `EasingFn`    | (Optional) Easing function used to transform the linear time progression.                                                       |
|            |               | See [`EasingFn`](https://github.com/alessiofrittoli/math-utils/blob/master/docs/easing/README.md#easingfn) types for more info. |
| `onEnd`    | `TickHandler` | Callback executed when the interpolation completes.                                                                             |
|            |               | See [`TickHandler`](#tickhandler) types for more info.                                                                          |

</details>

---

<details>

<summary style="cursor:pointer">Conditional properties</summary>

| Property   | Type             | Default | Description                                                                                                                   |
| ---------- | ---------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `Hz`       | `number`         | `120`   | (Optional) Custom tick rate in Hz.                                                                                            |
|            |                  |         | When `strategy` is set to `timer`, ticks are driven by a timer and will continue running even if the document is not visible. |
| `strategy` | `'raf'\|'timer'` | `raf`   | (Optional) Determines how ticks are scheduled.                                                                                |
|            |                  |         | - `'raf'` uses `requestAnimationFrame`                                                                                        |
|            |                  |         | - `'timer'` uses a timer-based loop                                                                                           |
|            |                  |         | Note that browsers may pause updates when the document is not visible.                                                        |

</details>

### Properties

#### `Tween.Duration`

A static property that defines the default tween duration in milliseconds.

---

### Methods

#### `Tween.to()`

Interpolates from the specified starting value to the given target value.

If another tween is already running, it will be automatically aborted.

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter | Type           | Description                                                                                |
| --------- | -------------- | ------------------------------------------------------------------------------------------ |
| `to`      | `number`       | Target value.                                                                              |
| `options` | `TweenOptions` | Additional tween configuration options. See [`TweenOptions`](#tweenoptions) for more info. |

</details>

---

### Examples

#### Tween value

```ts
import { Tween } from "@alessiofrittoli/math-utils";

const tween = new Tween();

button.addEventListener("click", () => {
  tween.to(100, {
    from: -100,
    onTick: (value) => {
      // do something with interpolated `value`
    },
  });
});
```

---

#### Tween value with custom easing function

```ts
import { Tween, Easing } from "@alessiofrittoli/math-utils";

const tween = new Tween();

button.addEventListener("click", () => {
  tween.to(100, {
    from: -100,
    easing: Easing.easeOutSine,
    onTick: (value) => {
      // do something with interpolated `value`
    },
  });
});
```

---

#### Abort and animate back

When a new tween starts before the previous one ends, the previous interpolation is automatically aborted and the new tween starts from the last interpolated value.

```ts
import { Tween, Easing } from "@alessiofrittoli/math-utils";

const from = 0;
const to = 100;
let interpolatedFrom = 0;
let direction: "forward" | "backward" | undefined;

const tween = new Tween();

// button clicked multiple times before tween ends
button.addEventListener("click", () => {
  direction = direction === "forward" ? "backward" : "forward";
  console.log("------ start new tween ------");
  tween.to(direction === "forward" ? to : from, {
    from: interpolatedFrom,
    duration: 1000,
    easing: Easing.easeInOutSine,
    onTick(value) {
      interpolatedFrom = value;
      console.log("tick", value);
    },
    onEnd(value) {
      interpolatedFrom = value;
      console.log("------ tween end ------");
    },
  });
});
```

---

#### Running a tween when the document is not visible

By default, `Tween` uses `requestAnimationFrame` to synchronize tick updates with the browser’s rendering cycle.

This approach provides smooth animations and optimal performance, but browsers automatically pause rendering when a document is not visible in order to save resources.

In some cases, however, a tween must continue running even when the document is hidden. A common example is fading audio volume while transitioning media elements in the background.

When this behavior is required, the `strategy` option can be set to `timer`. In this mode, `Tween` falls back to a timer-based loop instead of relying on `requestAnimationFrame`.

You can also control the update frequency using the `Hz` option. The default tick rate is `120Hz`, meaning the tick function is executed 120 times per second.

```ts
import { Tween, Easing, clamp } from "@alessiofrittoli/math-utils";

const tween = new Tween();

const playMedia = () => {
  media.volume = 0;
  media.play().then(() => {
    tween.to(1, {
      from: media.volume,
      strategy: "timer",
      onTick(value) {
        media.volume = clamp(Math.abs(value), 0, 1);
      },
    });
  });
};

const pauseMedia = () => {
  tween.to(0, {
    from: media.volume,
    strategy: "timer",
    onTick(value) {
      media.volume = clamp(Math.abs(value), 0, 1);
    },
    onEnd() {
      media.pause();
    },
  });
};
```
