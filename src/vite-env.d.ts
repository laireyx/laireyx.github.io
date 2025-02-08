/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_PREFETCHED_PROFILE: string;
}

/** vite-plugin-prefetch */
declare module 'prefetch:*' {
  const raw: string;
  const json: object;
  export default json;
}
