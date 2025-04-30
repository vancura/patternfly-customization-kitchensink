import * as React from 'react';
import { InfoIcon } from '@patternfly/react-icons';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Divider,
  Grid,
  GridItem,
  List,
  ListItem,
  PageSection,
  Title,
} from '@patternfly/react-core';

/**
 * About Page Component
 *
 * This component provides information about the PatternFly Customization Kitchensink project,
 * its purpose, features, and documentation on how to use it.
 */
const About: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper>
    <div className="pf-v6-c-content">
      <Title headingLevel="h1">About PatternFly Customization Kitchensink</Title>

      <p>
        This project serves as both a comprehensive demonstration of PatternFly&apos;s extensive component library
        and a practical guide for customizing these components. It&apos;s designed for developers and designers
        who need to implement custom design systems based on PatternFly&apos;s solid foundation.
      </p>
    </div>

    <Divider className="pf-v6-u-my-md" />

    <Grid hasGutter>
      <GridItem span={6}>
        <Card>
          <CardTitle>Key Features</CardTitle>

          <CardBody>
            <List>
              <ListItem>Complete PatternFly v6 component showcase</ListItem>
              <ListItem>Practical CSS variable customization examples</ListItem>
              <ListItem>Modern React 18 application structure with TypeScript</ListItem>
              <ListItem>Ready for deployment on Vercel</ListItem>
            </List>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem span={6}>
        <Card>
          <CardTitle>Technology Stack</CardTitle>

          <CardBody>
            <List className="pf-v6-m-plain">
              <ListItem><strong>React 18</strong>: Modern frontend framework</ListItem>
              <ListItem><strong>TypeScript</strong>: Type-safe JavaScript</ListItem>
              <ListItem><strong>PatternFly 6</strong>: Red Hat&apos;s open source design system</ListItem>
              <ListItem><strong>Webpack 5</strong>: Module bundler</ListItem>
              <ListItem><strong>Node.js 18+</strong>: Runtime environment</ListItem>
            </List>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem span={12}>
        <Card>
          <CardTitle>Customization Guide</CardTitle>

          <CardBody>
            <div className="pf-v6-c-content">
              <Title headingLevel="h3">CSS Custom Properties</Title>

              <p>
                The most effective way to customize PatternFly is by overriding CSS variables.
                This project showcases various customization approaches through modular CSS files.
              </p>

              <Title headingLevel="h4">Key CSS files:</Title>

              <List>
                <ListItem><code>variables.css</code>: Global CSS variables for colors, spacing, etc.</ListItem>
                <ListItem><code>global.css</code>: Global styles and typography customizations</ListItem>
                <ListItem><code>buttons.css</code>, <code>cards.css</code>, <code>forms.css</code>, etc.: Component-specific styles</ListItem>
              </List>

              <Title headingLevel="h3">Customization Strategies</Title>

              <List>
                <ListItem>
                  <strong>Global theme customization</strong>: Override PatternFly variables at the application level
                </ListItem>

                <ListItem>
                  <strong>Component-specific styling</strong>: Create custom component wrappers with specific styles
                </ListItem>

                <ListItem>
                  <strong>CSS-in-JS options</strong>: Use libraries like styled-components for component styling
                </ListItem>
              </List>
            </div>
          </CardBody>

          <CardFooter>
            <Button variant="link" component="a" href="https://github.com/vancura/patternfly-customization-kitchensink" target="_blank">
              View on GitHub
            </Button>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem span={12}>
        <Card>
          <CardTitle>Resources</CardTitle>

          <CardBody>
            <Grid hasGutter>
              <GridItem span={4}>
                <div className="pf-v6-c-content">
                  <Title headingLevel="h3">Documentation</Title>

                  <List>
                    <ListItem>
                      <Button variant="link" component="a" href="https://www.patternfly.org/v6/" target="_blank" icon={<InfoIcon />}>
                        PatternFly Documentation
                      </Button>
                    </ListItem>

                    <ListItem>
                      <Button variant="link" component="a" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" icon={<InfoIcon />}>
                        CSS Custom Properties (MDN)
                      </Button>
                    </ListItem>

                    <ListItem>
                      <Button variant="link" component="a" href="https://react.dev/" target="_blank" icon={<InfoIcon />}>
                        React Documentation
                      </Button>
                    </ListItem>
                  </List>
                </div>
              </GridItem>

              <GridItem span={8}>
                <div className="pf-v6-c-content">
                  <Title headingLevel="h3">Getting Started</Title>

                  <p>
                    Clone the repository and start exploring how PatternFly components are customized
                    in this project. The main showcase is in the Kitchensink component, while the CSS
                    customizations are organized in the styles directory.
                  </p>

                  <pre><code>
                    git clone https://github.com/vancura/patternfly-customization-kitchensink<br />
                    cd patternfly-customization-kitchensink<br />
                    npm install && npm run start:dev
                  </code></pre>
                </div>
              </GridItem>
            </Grid>
          </CardBody>

          <CardFooter>
            <p>Created and maintained by <a href="https://github.com/vancura" target="_blank" rel="noopener noreferrer">Václav Vančura</a> | MIT License</p>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  </PageSection>
);

export { About };
