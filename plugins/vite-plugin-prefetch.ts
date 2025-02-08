import { Plugin } from 'vite';

const prefix = 'prefetch:';
const resolutionPrefix = '\0' + prefix;

const resolvePrefetchId = (id: string, env: Record<string, string>) => {
  let resolutionId = id.replace(prefix, '');

  for (const envName in env) {
    resolutionId = resolutionId.replace(
      new RegExp(`%${envName}%`, 'g'),
      env[envName],
    );
  }
  return resolutionPrefix + resolutionId;
};

export default function prefetch(): Plugin {
  let env: Record<string, string>;

  return {
    name: 'vite-plugin-prefetch',

    configResolved(config) {
      env = config.env;
    },

    resolveId(id: string) {
      if (id.startsWith(prefix)) {
        return resolvePrefetchId(id, env);
      }
    },

    async load(id: string) {
      if (id.startsWith(resolutionPrefix)) {
        const text = await fetch(`${id.replace(resolutionPrefix, '')}`).then(
          (resp) => resp.text(),
        );
        const json = JSON.parse(text);

        return `export const raw = ${JSON.stringify(
          text,
        )};\nexport default ${JSON.stringify(json)};`;
      }
    },
  };
}
