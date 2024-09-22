export * from './init';

export function parseEnv(env: string) {
  return Object.fromEntries(
    env
      .split(/(\n\r?)+/)
      .filter((line) => !line.startsWith('#'))
      .map((line) => line.split(/=(.*)/s))
  );
}
