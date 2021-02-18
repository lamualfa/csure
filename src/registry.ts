import type { RawSelector, Styles } from './style';
export type Registry = Record<RawSelector, Styles>;

export function createRegistry(): Registry {
  return {};
}
