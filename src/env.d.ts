/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.yml' {
  const value: Record<string, string>;
  export default value;
}
