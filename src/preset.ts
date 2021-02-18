import type { Selector, Prop, Val, Rules } from './style';

export type StyleRules = (prop: Prop, val: Val) => Rules;
export type StyleSelector = (prop: Prop) => Selector;
export type Style = StyleRules | StyleSelector;
export type Styles = Record<string, Style>;

export type Preset = {
  styles: Styles;
};

export function extend(preset: Preset) {}
