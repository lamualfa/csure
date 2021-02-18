import { toObject, toStyles } from './src/libs/parser.js';

const presets = {
  keys: {
    // key: [CSS Attributes or properties, group values]
    mt: ['margin-top', 'spacing'],
    pr: ['padding-right', 'spacing'],
  },
  values: {
    spacing: (val) => {
      return `${parseInt(val) * 0.25}rem`;
    },
  },
};

const className =
  '-mt-2 pr-1 pr-3 hover:md(text-lg pt-1) sm(bg-green.200 md(pb-1)) md(mb-1)';
const parsedObject = toObject(className);
const styles = toStyles(presets, parsedObject);

console.log('Raw Class Name:');
console.log(className);
console.log('----------');
console.log('Parsed as Object:');
console.log(parsedObject);
console.log('----------');
console.log('Styles:');
console.log(styles);
