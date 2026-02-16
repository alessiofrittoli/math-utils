# Easing functions

[🔙 Back](../../README.md)

### Easing

The `Easing` object defines and exports the most commonly used easing functions that allows you to remaps the timeline of the given time.

#### EasingFn

Represents a time easing function.

All easing functions must follow the `EasingFn` function signature type.

```ts
(time: number) => number;
```

It accepts `time` and returns the eased time.
