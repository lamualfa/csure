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

### Example 2

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
