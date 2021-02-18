import type { Preset, Styles } from './preset';
import type { Registry } from './registry';
import { createRegistry } from './registry';

export type CSureOpts = {
  preset: Preset;
  registry?: Registry;
};

export default class CSure {
  styles: Styles;
  registry: Registry;

  constructor({ preset, registry }: CSureOpts) {
    this.styles = preset.styles;
    this.registry = registry || createRegistry();
  }
}
