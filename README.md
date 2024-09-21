# shrimple-env

An opinionated but small environment variable reader for Javascript.

## Installation

Install `shrimple-env` with your package manager of choice. Bun should also work.

## Usage

### ES6/"headless"

```javascript
import 'shrimple-env/init';

console.log(process.env.MY_ENV_VAR);
```
With this approach, `shrimple-env` will look for a `.env` file in the root of your project.

### Configuration

```javascript
import { init } from 'shrimple-env';
init({
    envFiles: ['.env', '.env.local'],
})
```

## Additional tool(s)

### Parser is also exported

The parsing tool used is also exported for better bug reproduction or for whatever reason you might need it.

```javascript
import { parseEnv } from 'shrimple-env';

const env = 'HELLO=world\nFOO=bar';
const parsed = parseEnv(env);
console.log(parsed);
```
