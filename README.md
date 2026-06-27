# Chrome React Boilerplate

A minimal boilerplate for building Chrome extensions with React and Webpack.

## Features

- React 0.14+ with JSX
- Webpack bundling (dev watch + production build)
- Babel ES2015 + React presets
- ESLint configured
- Chrome Manifest v2 content script setup

## Getting Started

### Prerequisites

- Node.js >= 6
- npm

### Install

```bash
npm install
```

### Development

```bash
npm start
```

Watches `src/` and rebuilds to `app/dist/` on change.

### Production Build

```bash
npm run build
```

Outputs minified bundle to `app/dist/app.min.js`.

### Load in Chrome

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** and select the `app/` directory

## Project Structure

```
app/
  manifest.json       # Chrome extension manifest
  dist/               # Built output (git-ignored)
src/
  index.js            # Entry point
  App.js              # Root React component
webpack.config.dev.js
webpack.config.prod.js
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
