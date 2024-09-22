export * from './init';

export function parseEnv(env: string) {
  return Object.fromEntries(
    env
      .split('\n')
      .filter((line) => line.trim() && !line.startsWith('#'))
      .map((line) => line.split('='))
  );
}
