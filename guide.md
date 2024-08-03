# Switch to Node 20
nvm use 20

# NextJS Installation

npx create-next-app@latest .
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes

# Install Mantine Core and Hooks
https://mantine.dev/getting-started/
yarn add @mantine/core @mantine/hooks

# Install PostCSS plugins and postcss-preset-mantine:
yarn add --dev postcss postcss-preset-mantine postcss-simple-vars

# Create postcss.config.cjs

```
module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
};
```