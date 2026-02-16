# Math Utils 🤓

[![NPM Latest Version][version-badge]][npm-url] [![Coverage Status][coverage-badge]][coverage-url] [![Socket Status][socket-badge]][socket-url] [![NPM Monthly Downloads][downloads-badge]][npm-url] [![Dependencies][deps-badge]][deps-url]

[![GitHub Sponsor][sponsor-badge]][sponsor-url]

[version-badge]: https://img.shields.io/npm/v/%40alessiofrittoli%2Fmath-utils
[npm-url]: https://npmjs.org/package/%40alessiofrittoli%2Fmath-utils
[coverage-badge]: https://coveralls.io/repos/github/alessiofrittoli/math-utils/badge.svg
[coverage-url]: https://coveralls.io/github/alessiofrittoli/math-utils
[socket-badge]: https://socket.dev/api/badge/npm/package/@alessiofrittoli/math-utils
[socket-url]: https://socket.dev/npm/package/@alessiofrittoli/math-utils/overview
[downloads-badge]: https://img.shields.io/npm/dm/%40alessiofrittoli%2Fmath-utils.svg
[deps-badge]: https://img.shields.io/librariesio/release/npm/%40alessiofrittoli%2Fmath-utils
[deps-url]: https://libraries.io/npm/%40alessiofrittoli%2Fmath-utils
[sponsor-badge]: https://img.shields.io/static/v1?label=Fund%20this%20package&message=%E2%9D%A4&logo=GitHub&color=%23DB61A2
[sponsor-url]: https://github.com/sponsors/alessiofrittoli

## Lightweight TypeScript math utility functions

This lightweight TypeScript utility library comes with common and utility math functions.

### Table of Contents

- [Getting started](#getting-started)
- What's inside
  - [Conversion functions](https://github.com/alessiofrittoli/math-utils/blob/master/docs/conversion/README.md)
  - [Formatting functions](https://github.com/alessiofrittoli/math-utils/blob/master/docs/format/README.md)
  - [Helpers functions](https://github.com/alessiofrittoli/math-utils/blob/master/docs/helpers/README.md)
  - [Interpolation functions](https://github.com/alessiofrittoli/math-utils/blob/master/docs/interpolation/README.md)
  - [Easing functions](https://github.com/alessiofrittoli/math-utils/blob/master/docs/easing/README.md)
  - [Random number functions](https://github.com/alessiofrittoli/math-utils/blob/master/docs/random/README.md)
  - [Types](https://github.com/alessiofrittoli/math-utils/blob/master/docs/types/README.md)
- [Development](#development)
  - [Install depenendencies](#install-depenendencies)
  - [Build the source code](#build-the-source-code)
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

#### Build the source code

Run the following command to test and build code for distribution.

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

# Run tests in a CI environment.
pnpm test:ci
```

- See [`package.json`](./package.json) file scripts for more info.

Run tests with coverage.

An HTTP server is then started to serve coverage files from `./coverage` folder.

⚠️ You may see a blank page the first time you run this command. Simply refresh the browser to see the updates.

```bash
test:coverage:serve
```

---

### Contributing

Contributions are truly welcome!

Please refer to the [Contributing Doc](./CONTRIBUTING.md) for more information on how to start contributing to this project.

Help keep this project up to date with [GitHub Sponsor][sponsor-url].

[![GitHub Sponsor][sponsor-badge]][sponsor-url]

---

### Security

If you believe you have found a security vulnerability, we encourage you to **_responsibly disclose this and NOT open a public issue_**. We will investigate all legitimate reports. Email `security@alessiofrittoli.it` to disclose any security vulnerabilities.

### Made with ☕

<table style='display:flex;gap:20px;'>
  <tbody>
    <tr>
      <td>
        <img alt="avatar" src='https://avatars.githubusercontent.com/u/35973186' style='width:60px;border-radius:50%;object-fit:contain;'>
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
