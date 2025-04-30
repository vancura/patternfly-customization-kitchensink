# PatternFly Customization Kitchensink

A comprehensive demonstration of [PatternFly](https://www.patternfly.org) components and customization options. This project showcases how to effectively customize the PatternFly design system for your specific branding and UX requirements.

## About this project

This project serves as both a demonstration of PatternFly's extensive component library and a practical guide for customizing these components. It's ideal for developers and designers who need to implement custom design systems based on PatternFly's solid foundation.

Key features:

- Complete PatternFly v6 component showcase
- Practical CSS variable customization examples
- Modern React 18 application structure with TypeScript
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

## Project Structure

The project follows a modular organization:

```
src/
├── app/                    # Main application code
│   ├── AppLayout/          # Main application layout components
│   ├── Kitchensink/        # Main showcase component for all PatternFly elements
│   ├── NotFound/           # 404 page component
│   ├── Support/            # Support page component
│   ├── bgimages/           # Background images and assets
│   ├── contexts/           # React context providers
│   ├── styles/             # CSS styles
│   │   ├── components/     # Component-specific CSS files
│   │   │   ├── alerts.css        # Styling for alerts and notifications
│   │   │   ├── buttons.css       # Button component customizations
│   │   │   ├── cards.css         # Card and container styling
│   │   │   ├── display.css       # Data display element styling
│   │   │   ├── forms.css         # Form controls styling
│   │   │   ├── global.css        # Global styles and typography
│   │   │   ├── navigation.css    # Navigation component styling
│   │   │   ├── progress.css      # Progress indicators styling
│   │   │   └── variables.css     # CSS custom properties (variables)
│   │   └── custom-styles.css     # Main CSS entry point
│   ├── app.css             # Global application styles
│   ├── index.tsx           # Application entry
│   └── routes.tsx          # Route definitions
└── index.tsx               # Main entry point
```

### 404 Page

A custom "Not Found" page that displays when users navigate to non-existent routes.

## PatternFly customization guide

This project demonstrates various ways to customize the PatternFly design system for your specific needs. Below are the primary customization approaches:

### CSS custom properties (variables)

PatternFly uses CSS custom properties (variables) extensively, which makes it easy to override default values. The most effective way to customize PatternFly is by overriding these variables.

Example (from our `variables.css`):

```css
:root {
  --pf-v6-global--primary-color--100: #1E88E5; /* Primary blue */
  --pf-v6-global--primary-color--200: #1565C0; /* Darker blue for hover states */
  --pf-v6-global--primary-color--light-100: #E3F2FD; /* Light blue for backgrounds */
}
```

### Key CSS variables to customize

#### Colors

- `--pf-v6-global--primary-color--100`: Primary brand color
- `--pf-v6-global--primary-color--200`: Darker shade of primary color
- `--pf-v6-global--secondary-color--100`: Secondary brand color
- `--pf-v6-global--success-color--100`: Success state color
- `--pf-v6-global--warning-color--100`: Warning state color
- `--pf-v6-global--danger-color--100`: Danger/error state color
- `--pf-v6-global--info-color--100`: Information state color

#### Typography

- `--pf-v6-global--FontFamily--sans-serif`: Main font family
- `--pf-v6-global--FontSize--md`: Medium font size (base size)
- `--pf-v6-global--FontSize--sm`: Small font size
- `--pf-v6-global--FontSize--lg`: Large font size
- `--pf-v6-global--FontWeight--normal`: Normal font weight
- `--pf-v6-global--FontWeight--bold`: Bold font weight

#### Spacing

- `--pf-v6-global--spacer--xs`: Extra small spacing
- `--pf-v6-global--spacer--sm`: Small spacing
- `--pf-v6-global--spacer--md`: Medium spacing
- `--pf-v6-global--spacer--lg`: Large spacing
- `--pf-v6-global--spacer--xl`: Extra large spacing

#### Borders

- `--pf-v6-global--BorderWidth--sm`: Small border width
- `--pf-v6-global--BorderColor--100`: Primary border color
- `--pf-v6-global--BorderRadius--sm`: Small border radius
- `--pf-v6-global--BorderRadius--lg`: Large border radius

### Component-specific overrides

You can also target specific components for customization. Each PatternFly component has its own set of CSS classes and variables.

Example (customizing buttons):

```css
.pf-v5-c-button.pf-m-primary {
  background-image: linear-gradient(to right, var(--pf-v6-global--primary-color--100), #9966ff);
  border-radius: 25px;
  border: none;
}
```

> **Note:** The project shows examples using both v5 (pf-v5-) and v6 (pf-v6-) class prefixes for compatibility during transition periods.

### Customization strategies

#### 1. Global theme customization

For site-wide changes, create a CSS file that overrides PatternFly variables and import it at the application level. This is the approach demonstrated in the Kitchensink component.

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
  background: linear-gradient(45deg, #1E88E5, #9966ff);
  border-radius: 25px;
`;
```

### Best Practices

1. **Minimize direct CSS overrides**: When possible, customize using CSS variables rather than directly overriding component styles.

2. **Document your customizations**: Keep track of all customizations for easier maintenance.

3. **Test accessibility**: Ensure customizations maintain accessibility standards.

4. **Remember responsive design**: Test customizations across different screen sizes.

5. **Stay updated with PatternFly**: Be aware of PatternFly updates that might affect your customizations.

### CSS Structure

This project organizes styles in a modular way to make customizations maintainable and scalable:

#### Main Files

- `custom-styles.css`: Main entry point that imports all component-specific styles
- `custom-fonts.css`: Typography and font-related styles (optional)

#### Component-Specific Files

The `components/` directory contains modular CSS files organized by component type:

- `variables.css`: Global CSS variables for colors, spacing, etc.
- `global.css`: Global styles and typography customizations
- `buttons.css`: Button component styling
- `cards.css`: Card and panel component styling
- `forms.css`: Form elements styling (inputs, switches, checkboxes)
- `navigation.css`: Navigation components (tabs, menu, breadcrumb)
- `alerts.css`: Alert and notification components
- `progress.css`: Progress bars, spinners, and loading indicators
- `display.css`: Data display components (badges, labels, etc.)

#### Usage

To apply the custom styles, add the `pf-custom-styles` class to a parent element in your React component:

```jsx
<div className="pf-custom-styles">
  {/* Your PatternFly components will be styled */}
  <Button>Styled Button</Button>
</div>
```

#### Extending Styles

To add new component styles:

1. Either add to an existing component CSS file in the `components/` directory
2. Or create a new component CSS file and import it in `custom-styles.css`

Follow the existing patterns and naming conventions for consistency.

## Vercel deployment

This project is configured for seamless deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Select the repository
3. Configure build settings if needed (defaults should work)
4. Deploy

## Technology Stack

- **React 18**: Modern frontend framework
- **TypeScript**: Type-safe JavaScript
- **PatternFly 6**: Red Hat's open source design system
- **Webpack 5**: Module bundler
- **Node.js 18+**: Runtime environment

## Resources

- [PatternFly Documentation](https://www.patternfly.org/v6/)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [React Documentation](https://react.dev/)
- [Vercel Documentation](https://vercel.com/docs)

## Author

Created and maintained by [Václav Vančura](https://github.com/vancura)

## License

MIT
