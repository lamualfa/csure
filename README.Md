# CSure

Still in development

## Development

```bash
git clone https://github.com/lamualfa/csure.git
cd csrure
pnpm i
pnpm dev
```

## Basic Concepts

### Example 1

Preset value.

#### Presets

```js
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
```

#### Class Name

```
-mt-2 pr-1 pr-3
```

> `pr-1` will be override with `pr-3`

#### Result

```css
.-mt-2 {
  margin-top: -0.5rem;
}

.pr-3 {
  padding-right: 0.75rem;
}
```

<hr/>

### Example 2

Variants grouping.

#### Class Name

```
pr-3 hover:md(text-lg pt-1) =sm(bg-green.200)
```

> `md` for Medium screen or larger. `=sm` for Small screen only.

#### Result

```css
.pr-3 {
  padding-right: 0.75rem;
}

/* In Progress */
@media (min-width: 640px) {
  .hover\:md\(text-lg\ pt-1\):hover {
    font-size: 3rem;
  }

  .hover\:md\(text-lg\ pt-1\):hover {
    padding-top: 0.25rem;
  }
}

/* In Progress */
@media (min-width: 480px) and (max-width: 640px) {
  .\=sm\(bg-green\.200\) {
    background-color: #00ff00;
  }
}
```

> In production, `=sm(bg-green.200)` will replace by short unique identifier like `aaa`, `aab`, `aac`, etc.

<hr/>

### Example 3

Dynamic value. No presets needed.

#### Class Name

```
-mt-5rem p-10rem bg-#fff
```

#### Result

```css
.-mt-5rem {
  margin-top: -5rem;
}

.p-10rem {
  padding: 1rem;
}

.bg-\#fff {
  background-color: #fff;
}
```
