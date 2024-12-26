# Math Utils 🤓

Version 1.1.0

[![Coverage Status](https://coveralls.io/repos/github/alessiofrittoli/math-utils/badge.svg)](https://coveralls.io/github/alessiofrittoli/math-utils) [![Dependencies](https://img.shields.io/librariesio/release/npm/%40alessiofrittoli%2Fmath-utils)](https://libraries.io/npm/%40alessiofrittoli%2Fmath-utils)

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
- [Development](#development)
	- [ESLint](#eslint)
	- [Jest](#jest)
- [Contributing](#contributing)
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

---

### Development

#### Install depenendencies

```bash
npm install
```

or using `pnpm`

```bash
pnpm i
```

#### Build your source code

Run the following command to build code for distribution.

```bash
pnpm build
```

#### [ESLint](https://www.npmjs.com/package/eslint)

warnings / errors check.

```bash
pnpm lint
```

#### [Jest](https://npmjs.com/package/jest)

Run all the defined test suites by running the following:

```bash
# Run tests and watch file changes.
pnpm test:watch

# Run tests and watch file changes with jest-environment-jsdom.
pnpm test:jsdom

# Run tests in a CI environment.
pnpm test:ci

# Run tests in a CI environment with jest-environment-jsdom.
pnpm test:ci:jsdom
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

Run tests with coverage.

An HTTP server is then started to serve coverage files from `./coverage` folder.

⚠️ You may see a blank page the first time you run this command. Simply refresh the browser to see the updates.

```bash
test:coverage:serve
```

---

### Contributing

Contributions are truly welcome!\
Please refer to the [Contributing Doc](./CONTRIBUTING.md) for more information on how to start contributing to this project.

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