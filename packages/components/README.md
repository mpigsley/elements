# [`@mpigsley/components`]

Base building block components. In [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), this package contains atoms and some molecules.

### Styles

To use this package, you'll need to include the compiled styles. They are located at `@mpigsley/components/dist/index.css`.

### Theme

Wrap your component tree with `<ThemeProvider theme={...} control={...} />`. If you are using typescript, these parameter types will be `Theme` and `Control`.

> 📝 This repository ships with a `mono` theme (the default), which is a primarily black & white brutalist theme. More themes to come!

### Components

- `<FlexContainer />`
- `<Spinner />`
