import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { parseEnv } from './index';

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

interface Config {
  envFiles?: string[];
};

// when the module is imported, it will automatically read the .env file
init();
