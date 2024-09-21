import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

export async function init(config?: Config) {
  const dir = await readdir('.');
  const fileList = config?.envFiles || dir.includes('.env') && ['.env'] || dir.filter((f) => f.startsWith('.env'));
  const envContents = await Promise.all(fileList.map(readEnv));

  const parsed = Object.assign({}, ...envContents.map(parseEnv)) as Record<string, string>;

  process.env = { ...process.env, ...parsed };
  return parsed;
}

function readEnv(path: string) {
  if (existsSync(path)) {
    return readFile(path, 'utf8');
  } else {
    return '';
  }
}

export function parseEnv(env: string) {
  return Object.fromEntries(
    env
      .split('\n')
      .filter((line) => line.trim() && !line.startsWith('#'))
      .map((line) => line.split('='))
  );
}

interface Config {
  envFiles?: string[];
};

// when the module is imported, it will automatically read the .env file
init();
