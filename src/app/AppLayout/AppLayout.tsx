import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Flex,
  FlexItem,
  Masthead,
  MastheadMain,
  Nav,
  NavExpandable,
  NavItem,
  NavList,
  Page,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  Switch,
} from '@patternfly/react-core';
import { IAppRoute, IAppRouteGroup, routes } from '@app/routes';

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children }) => {
  const [sidebarOpen] = React.useState(true);
  const [isStyled, setIsStyled] = React.useState(true);

  React.useEffect(() => {
    if (isStyled) {
      document.body.classList.add('pf-custom-styles');
      document.documentElement.classList.add('pf-custom-styles');
    } else {
      document.body.classList.remove('pf-custom-styles');
      document.documentElement.classList.remove('pf-custom-styles');
    }
  }, [isStyled]);

  const masthead = (
    <Masthead>
      <MastheadMain>
        <Flex className="theme-switcher" alignItems={{ default: 'alignItemsCenter' }}>
          <FlexItem>Default</FlexItem>

          <FlexItem>
            <Switch
              id="theme-switch"
              isChecked={isStyled}
              onChange={() => setIsStyled(!isStyled)}
              aria-label="Toggle between default and styled PatternFly"
            />
          </FlexItem>

          <FlexItem>Styled</FlexItem>
        </Flex>
      </MastheadMain>
    </Masthead>
  );

  const location = useLocation();

  const renderNavItem = (route: IAppRoute, index: number) => (
    <NavItem key={`${route.label}-${index}`} id={`${route.label}-${index}`} isActive={route.path === location.pathname}>
      <NavLink to={route.path}>{route.label}</NavLink>
    </NavItem>
  );

  const renderNavGroup = (group: IAppRouteGroup, groupIndex: number) => (
    <NavExpandable
      key={`${group.label}-${groupIndex}`}
      id={`${group.label}-${groupIndex}`}
      title={group.label}
      isActive={group.routes.some((route) => route.path === location.pathname)}
    >
      {group.routes.map((route, idx) => route.label && renderNavItem(route, idx))}
    </NavExpandable>
  );

  const Navigation = (
    <Nav id="nav-primary-simple">
      <NavList id="nav-list-simple">
        {routes.map(
          (route, idx) => route.label && (route.routes ? renderNavGroup(route, idx) : renderNavItem(route, idx)),
        )}
      </NavList>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar>
      <PageSidebarBody>{Navigation}</PageSidebarBody>
    </PageSidebar>
  );

  const pageId = 'primary-app-container';

  const PageSkipToContent = (
    <SkipToContent
      onClick={(event) => {
        event.preventDefault();
        const primaryContentContainer = document.getElementById(pageId);
        primaryContentContainer?.focus();
      }}
      href={`#${pageId}`}
    >
      Skip to Content
    </SkipToContent>
  );
  return (
    <Page
      mainContainerId={pageId}
      masthead={masthead}
      sidebar={sidebarOpen && Sidebar}
      skipToContent={PageSkipToContent}
    >
      {children}
    </Page>
  );
};

export { AppLayout };
