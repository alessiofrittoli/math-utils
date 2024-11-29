# Math Utils 🤓

Version 0.3.0

## Lightweight TypeScript math utility functions

This lightweight TypeScript utility library comes with common and utility math functions.

Everything is exported from the root of this library but specific paths can be used too (especially when dynamically importing functions and tree shaking has no effect).

### Table of Contents

- [Getting started](#getting-started)
- Utilities
	- [Formatting functions](https://github.com/alessiofrittoli/math-utils/blob/master/docs/format/README.md)
	- [Helpers functions](https://github.com/alessiofrittoli/math-utils/blob/master/docs/helpers/README.md)
	- [Interpolation functions](https://github.com/alessiofrittoli/math-utils/blob/master/docs/interpolation/README.md)
	- [Random number functions](https://github.com/alessiofrittoli/math-utils/blob/master/docs/random/README.md)
	- [Types](https://github.com/alessiofrittoli/math-utils/blob/master/docs/types/README.md)
- [ESLint](#eslint)
- [Jest](#jest)
- [Security](#security)
- [Credits](#made-with-)

---

### Getting started

Run the following command to start using `math-utils` in your projects:

```bash
npm i @alessiofrittoli/math-utils
```

or using `pnpm`

```bash
pnpm i @alessiofrittoli/math-utils
```

### [ESLint](https://www.npmjs.com/package/eslint)

warnings / errors check.

```bash
pnpm lint
```

### [Jest](https://npmjs.com/package/jest)

Run all the defined test suites by running the following:

```bash
# Run tests and watch file changes.
pnpm test

# Run tests in a CI environment.
pnpm test:ci
```

You can eventually run specific suits like so:

```bash
pnpm test:format
# or
pnpm test:helpers
# or
pnpm test:interpolation
# or
pnpm test:random
```

---

### Security

If you believe you have found a security vulnerability, we encourage you to **_responsibly disclose this and NOT open a public issue_**. We will investigate all legitimate reports. Email `security@alessiofrittoli.it` to disclose any security vulnerabilities.

### Made with ☕

<table style='display:flex;gap:20px;'>
	<tbody>
		<tr>
			<td>
				<img src='https://avatars.githubusercontent.com/u/35973186' style='width:60px;border-radius:50%;object-fit:contain;'>
			</td>
			<td>
				<table style='display:flex;gap:2px;flex-direction:column;'>
					<tbody>
						<tr>
							<td>
								<a href='https://github.com/alessiofrittoli' target='_blank' rel='noopener'>Alessio Frittoli</a>
							</td>
						</tr>
						<tr>
							<td>
								<small>
									<a href='https://alessiofrittoli.it' target='_blank' rel='noopener'>https://alessiofrittoli.it</a> |
									<a href='mailto:info@alessiofrittoli.it' target='_blank' rel='noopener'>info@alessiofrittoli.it</a>
								</small>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>