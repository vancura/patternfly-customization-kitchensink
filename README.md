# PatternFly Customization Kitchensink

A comprehensive demonstration of [PatternFly](https://www.patternfly.org) components and customization options. This project showcases how to effectively customize the PatternFly design system for your specific branding and UX requirements.

## About this project

This project serves as both a demonstration of PatternFly's extensive component library and a practical guide for customizing these components. It's ideal for developers and designers who need to implement custom design systems based on PatternFly's solid foundation.

Key features:

- Complete PatternFly component showcase
- Practical CSS variable customization examples
- Modern React application structure
- Ready for deployment on Vercel

## Quick-start

```bash
git clone https://github.com/vancura/patternfly-customization-kitchensink
cd patternfly-customization-kitchensink
npm install && npm run start:dev
```

## Development scripts

```sh
# Install development/build dependencies
npm install

# Start the development server
npm run start:dev

# Run a production build (outputs to "dist" dir)
npm run build

# Run the linter
npm run lint

# Run the code formatter
npm run format

# Launch a tool to inspect the bundle size
npm run bundle-profile:analyze

# Start the express server (run a production build first)
npm run start
```

## Configurations

* [TypeScript Config](./tsconfig.json)
* [Webpack Config](./webpack.common.js)
* [Editor Config](./.editorconfig)
* [Vercel Config](./vercel.json)

## PatternFly customization guide

This project includes a Kitchensink component that demonstrates various ways to customize the PatternFly design system for your specific needs. Below are the primary customization approaches:

### CSS custom properties (variables)

PatternFly uses CSS custom properties (variables) extensively, which makes it easy to override default values. The most effective way to customize PatternFly is by overriding these variables.

Example (from our `Kitchensink.css`):

```css
:root {
  --pf-global--primary-color--100: #5544ee; /* Custom primary color */
  --pf-global--primary-color--200: #4433dd; /* Darker shade for hover states */
  --pf-global--primary-color--light-100: #f2f0ff; /* Lighter shade for backgrounds */
}
```

### Key CSS variables to customize

#### Colors

- `--pf-global--primary-color--100`: Primary brand color
- `--pf-global--primary-color--200`: Darker shade of primary color
- `--pf-global--secondary-color--100`: Secondary brand color
- `--pf-global--success-color--100`: Success state color
- `--pf-global--warning-color--100`: Warning state color
- `--pf-global--danger-color--100`: Danger/error state color
- `--pf-global--info-color--100`: Information state color

#### Typography

- `--pf-global--FontFamily--sans-serif`: Main font family
- `--pf-global--FontSize--md`: Medium font size (base size)
- `--pf-global--FontSize--sm`: Small font size
- `--pf-global--FontSize--lg`: Large font size
- `--pf-global--FontWeight--normal`: Normal font weight
- `--pf-global--FontWeight--bold`: Bold font weight

#### Spacing

- `--pf-global--spacer--xs`: Extra small spacing
- `--pf-global--spacer--sm`: Small spacing
- `--pf-global--spacer--md`: Medium spacing
- `--pf-global--spacer--lg`: Large spacing
- `--pf-global--spacer--xl`: Extra large spacing

#### Borders

- `--pf-global--BorderWidth--sm`: Small border width
- `--pf-global--BorderColor--100`: Primary border color
- `--pf-global--BorderRadius--sm`: Small border radius
- `--pf-global--BorderRadius--lg`: Large border radius

### Component-specific overrides

You can also target specific components for customization. Each PatternFly component has its own set of CSS classes and variables.

Example (customizing buttons):

```css
.pf-v5-c-button.pf-m-primary {
  background-image: linear-gradient(to right, var(--pf-global--primary-color--100), #9966ff);
  border-radius: 25px;
  border: none;
}
```

### Customization strategies

#### 1. Global theme customization

For site-wide changes, create a CSS file that overrides PatternFly variables and import it at the application level. This is the approach we're using in the Kitchensink demo.

#### 2. Component-specific customization

For more targeted changes, create custom component wrappers that apply specific styles.

```jsx
// Example of a styled Button component
const StyledButton = ({ children, ...props }) => (
  <Button {...props} className="custom-button">
    {children}
  </Button>
);
```

#### 3. CSS-in-JS solutions

You can also use CSS-in-JS libraries like styled-components or emotion with PatternFly:

```jsx
import styled from 'styled-components';
import { Button } from '@patternfly/react-core';

const CustomButton = styled(Button)`
  background: linear-gradient(45deg, #5544ee, #9966ff);
  border-radius: 25px;
`;
```

### Best Practices

1. **Minimize direct CSS overrides**: When possible, customize using CSS variables rather than directly overriding component styles.

2. **Document your customizations**: Keep track of all customizations for easier maintenance.

3. **Test accessibility**: Ensure customizations maintain accessibility standards.

4. **Remember responsive design**: Test customizations across different screen sizes.

5. **Stay updated with PatternFly**: Be aware of PatternFly updates that might affect your customizations.

## Vercel deployment

This project is configured for seamless deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Select the repository
3. Configure build settings if needed (defaults should work)
4. Deploy

## Resources

- [PatternFly Documentation](https://www.patternfly.org/v4/)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vercel Documentation](https://vercel.com/docs)

## Author

Created and maintained by [Václav Vančura](https://github.com/vancura)

## License

MIT
