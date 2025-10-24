# Kilometers to Miles Converter

A simple TypeScript web application that converts kilometers to miles with a clean, interactive interface.

## Features

- 🔄 Real-time kilometers to miles conversion
- 📝 TypeScript with strict type checking
- 🎨 Clean and responsive UI
- 📁 Modular file structure

## Tech Stack

- TypeScript
- HTML5
- CSS3
- Vanilla JavaScript (compiled from TS)

## Project Structure

```
.
├── assets/
│   └── img/           # Image assets
├── css/
│   └── styles.css     # Styling
├── dist/
│   ├── main.js        # Compiled JavaScript
│   └── main.js.map    # Source map
├── src/
│   └── main.ts        # TypeScript source code
├── index.html         # Main HTML file
├── tsconfig.json      # TypeScript configuration
└── .gitignore         # Git ignore rules
```

## Getting Started

### Prerequisites

- Node.js and npm installed
- TypeScript compiler

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd <project-name>

# Install TypeScript globally (if not installed)
npm install -g typescript

# Compile TypeScript
tsc
```

### Usage

1. Open `index.html` in your browser
2. Enter a distance in kilometers
3. Click convert to see the result in miles

## Development

To compile TypeScript automatically on file changes:

```bash
tsc --watch
```

## Learning Goals

Perfect for beginners learning:

- TypeScript fundamentals
- DOM manipulation
- Modern web development practices
- Type-safe JavaScript

## License

MIT
