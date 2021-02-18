import { countChar } from './string.js';

const classSeparator = ' ';
const keySeparator = '-';
const condSeparator = ':';
const condOpeningGroup = '(';
const condClosingGroup = ')';

function toKeyVal(chunk) {
  let key;
  let val;

  if (chunk.includes(condSeparator)) {
    const splitted = chunk.split(condSeparator);
    key = `${condSeparator}${splitted.shift().trim()}`;
    val = toObject(splitted.join(condSeparator));
  } else if (chunk.includes(condOpeningGroup)) {
    const splitted = chunk.split(condOpeningGroup);
    key = `${condSeparator}${splitted.shift().trim()}`;
    val = splitted.join(condOpeningGroup);
    val = toObject(val.substr(0, val.length - 1));
  } else if (chunk.includes(keySeparator)) {
    const splitted = chunk.split(keySeparator);
    key = splitted.shift().trim();
    if (!key) key = `${keySeparator}${splitted.shift().trim()}`;
    val = splitted.join(keySeparator);
  } else key = val;

  return [key, val];
}

export function toObject(str) {
  const chunks = str.split(classSeparator);
  const parsed = {};

  let totalOpeningChars = 0;
  let totalClosingChars = 0;
  let imperfectChunk = '';

  for (const chunk of chunks) {
    const currentTotalOpeningChars = countChar(chunk, condOpeningGroup);
    const currentTotalClosingChars = countChar(chunk, condClosingGroup);

    if (
      totalOpeningChars === 0 &&
      totalClosingChars === 0 &&
      currentTotalOpeningChars === currentTotalClosingChars
    ) {
      const [key, val] = toKeyVal(chunk);
      parsed[key] = val;
      continue;
    }

    totalOpeningChars += currentTotalOpeningChars;
    totalClosingChars += currentTotalClosingChars;
    imperfectChunk += `${classSeparator}${chunk}`;

    if (totalOpeningChars === totalClosingChars) {
      const [key, val] = toKeyVal(imperfectChunk);
      parsed[key] = val;

      totalOpeningChars = 0;
      totalClosingChars = 0;
      imperfectChunk = '';
    }
  }

  return parsed;
}

export function getVal(presets, groups, val) {
  for (const group of groups) {
    if (presets.values[group]) return presets.values[group](val);
  }

  return val;
}

export function getSelector(key, path, prop, val) {
  return `.${key}${keySeparator}${path}{${prop}:${val};}`;
}

export function toStyles(presets, object) {
  const styles = [];

  for (const rawKey in object) {
    const isNegative = rawKey[0] === '-';
    const key = isNegative ? rawKey.substring(1) : rawKey;
    const path = object[rawKey];

    if (presets.keys[key]) {
      const [prop, ...groups] = presets.keys[key];

      styles.push(
        getSelector(
          rawKey,
          path,
          prop,
          `${isNegative ? '-' : ''}${getVal(presets, groups, path)}`
        )
      );
    }
  }

  return styles;
}
