import * as React from 'react';
import { ExclamationTriangleIcon } from '@patternfly/react-icons';
import { Button, EmptyState, EmptyStateBody, EmptyStateFooter, EmptyStateVariant, PageSection, Title } from '@patternfly/react-core';
import { useNavigate } from 'react-router-dom';

/**
 * NotFound Component
 *
 * This component displays a 404 error page when a user navigates to a non-existent route.
 * It provides a clear error message and a button to navigate back to the home page.
 */
const NotFound: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <PageSection>
      <EmptyState variant={EmptyStateVariant.full} icon={ExclamationTriangleIcon}>
        <Title headingLevel="h1" size="lg">
          404 Page not found
        </Title>

        <EmptyStateBody>
          We couldn&apos;t find a page that matches the address you navigated to.
        </EmptyStateBody>

        <EmptyStateFooter>
          <Button variant="primary" onClick={handleHomeClick}>Take me home</Button>
        </EmptyStateFooter>
      </EmptyState>
    </PageSection>
  );
};

export { NotFound };
