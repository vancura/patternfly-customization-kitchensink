import React, { useState } from 'react';
import {
  ActionGroup,
  ActionList,
  ActionListGroup,
  ActionListItem,
  Alert,
  AlertActionCloseButton,
  AlertGroup,
  Avatar,
  BackToTop,
  Badge,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Checkbox,
  ClipboardCopy,
  CodeBlock,
  CodeBlockCode,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Divider,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  EmptyState,
  EmptyStateBody,
  ExpandableSection,
  Form,
  FormGroup,
  FormHelperText,
  Hint,
  HintBody,
  HintFooter,
  HintTitle,
  InputGroup,
  InputGroupItem,
  InputGroupText,
  JumpLinks,
  JumpLinksItem,
  JumpLinksList,
  Label,
  LabelGroup,
  List,
  ListItem,
  NotificationBadge,
  NumberInput,
  PageSection,
  Pagination,
  Panel,
  PanelHeader,
  PanelMain,
  PanelMainBody,
  Popover,
  Progress,
  ProgressMeasureLocation,
  ProgressStep,
  ProgressStepper,
  Radio,
  SearchInput,
  Select,
  SelectOption,
  Sidebar,
  SidebarContent,
  SidebarPanel,
  Skeleton,
  Slider,
  SliderOnChangeEvent,
  Spinner,
  Switch,
  Tab,
  TabContent,
  TabTitleText,
  Tabs,
  TextArea,
  TextInput,
  Title,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TreeView,
  TreeViewDataItem,
} from '@patternfly/react-core';
import { CogIcon, CubesIcon, InfoCircleIcon, PlusCircleIcon } from '@patternfly/react-icons';
import pfLogo from '@app/bgimages/Patternfly-Logo.svg';

/**
 * Kitchensink Component
 *
 * A comprehensive showcase of PatternFly components and their various states and properties.
 * This component demonstrates how PatternFly components can be used and customized,
 * serving as both documentation and a testing ground for styling modifications.
 */
export const Kitchensink: React.FunctionComponent = () => {
  // State for expandable section
  const [isExpandableSectionExpanded, setIsExpandableSectionExpanded] = useState(false);
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  // Tab state
  const [activeTabKey, setActiveTabKey] = useState<string | number>(0);

  // Alert visibility states
  const [alertOneVisible, setAlertOneVisible] = useState(true);
  const [alertTwoVisible, setAlertTwoVisible] = useState(true);

  // Form component states
  const [inputValue, setInputValue] = useState('PatternFly');
  const [textareaValue, setTextareaValue] = useState('This is a textarea.');
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [radioChecked, setRadioChecked] = useState('option1');
  const [switchChecked, setSwitchChecked] = useState(true);
  const [numberValue, setNumberValue] = useState(5);
  const [sliderValue, setSliderValue] = useState(50);

  // Progress and navigation states
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // Search and selection states
  const [searchInputValue, setSearchInputValue] = useState('');
  const [selectedTreeItems, setSelectedTreeItems] = useState<{ id: string; name: string }[]>([]);
  const [selectedToggleItem, setSelectedToggleItem] = useState('item-1');

  // Sample tree data for TreeView component
  const treeItems = [
    {
      name: 'Application launcher',
      id: 'app-launcher',
      children: [
        {
          name: 'Application 1',
          id: 'app-1',
          children: [
            { name: 'Settings', id: 'app-1-settings' },
            { name: 'Current', id: 'app-1-current' },
          ],
        },
        {
          name: 'Application 2',
          id: 'app-2',
          children: [{ name: 'Settings', id: 'app-2-settings' }],
        },
      ],
    },
    {
      name: 'Cost management',
      id: 'cost-mgmt',
      children: [{ name: 'Overview', id: 'cost-mgmt-overview' }],
    },
    { name: 'Sources', id: 'src' },
    { name: 'Technical support', id: 'support' },
  ];

  // Event handlers
  const handleExpandableSectionToggle = (_event: React.MouseEvent, isExpanded: boolean) => {
    setIsExpandableSectionExpanded(isExpanded);
  };

  const handleTabClick = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number,
  ) => {
    setActiveTabKey(tabIndex);
  };

  const handleTextInputChange = (event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => {
    setTextareaValue(value);
  };

  const handleCheckboxChange = (checked: boolean) => {
    setCheckboxChecked(checked);
  };

  const handleRadioChange = (value: string) => {
    setRadioChecked(value);
  };

  const handleSwitchChange = (checked: boolean) => {
    setSwitchChecked(checked);
  };

  const handleNumberChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    setNumberValue(value);
  };

  const handleSliderChange = (event: SliderOnChangeEvent, value: number) => {
    setSliderValue(value);
  };

  const handleStepClick = (index: number) => {
    setCurrentStepIndex(index);
  };

  const handlePageChange = (_event: React.MouseEvent | React.KeyboardEvent | MouseEvent, page: number) => {
    setCurrentPage(page);
  };

  const handleTreeViewSelect = (event: React.MouseEvent, item: TreeViewDataItem, _parentItem: TreeViewDataItem) => {
    if (item.id) {
      setSelectedTreeItems([{ id: item.id, name: String(item.name || '') }]);
    }
  };

  const handleSearchInputChange = (event: React.FormEvent<HTMLInputElement>, value: string) => {
    setSearchInputValue(value);
  };

  // Sample code block for demonstration
  const codeBlockContent = `import { Button } from '@patternfly/react-core';
function Example() {
  return <Button variant="primary">Click me</Button>;
}`;

  return (
    <React.Fragment>
      <PageSection>
        <BackToTop isAlwaysVisible />

        <div className="pf-v5-c-banner pf-m-sticky">This is a PatternFly banner component</div>

        <Breadcrumb>
          <BreadcrumbItem to="#">Home</BreadcrumbItem>

          <BreadcrumbItem to="#">Library</BreadcrumbItem>

          <BreadcrumbItem to="#" isActive>
            Components
          </BreadcrumbItem>
        </Breadcrumb>

        <Title headingLevel="h1">PatternFly Components Kitchensink</Title>

        <p>This is a showcase of PatternFly components and their customization abilities.</p>
      </PageSection>

      <Divider />

      {/* Branding and Identity Components Section */}
      <PageSection>
        <Title headingLevel="h2">Branding & Identity Components</Title>

        <Card>
          <CardBody>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Brand src={pfLogo} alt="PatternFly Logo" />

              <Avatar src={pfLogo} alt="Avatar" />
              <Avatar src={pfLogo} alt="Avatar" size="sm" />
              <Avatar src={pfLogo} alt="Avatar" size="md" />
              <Avatar src={pfLogo} alt="Avatar" size="lg" />

              <Badge>10</Badge>
              <Badge isRead>20</Badge>

              <NotificationBadge count={5} aria-label="Notifications" />
            </div>
          </CardBody>
        </Card>
      </PageSection>

      <Divider />

      {/* Card Components Section */}
      <PageSection>
        <Title headingLevel="h2">Card Components</Title>

        <div style={{ display: 'flex', gap: '20px' }}>
          <Card style={{ width: '350px' }}>
            <CardTitle>Card Title</CardTitle>

            <CardBody>This is the card body, you can add any content here.</CardBody>

            <CardFooter>
              <Button variant="primary">Action</Button>
            </CardFooter>
          </Card>

          <Panel>
            <PanelHeader>Panel Title</PanelHeader>

            <PanelMain>
              <PanelMainBody>
                This is a PatternFly panel component that provides a flexible container for content.
              </PanelMainBody>
            </PanelMain>
          </Panel>
        </div>
      </PageSection>

      <Divider />

      {/* State and Progress Components Section */}
      <PageSection>
        <Title headingLevel="h2">State & Progress Components</Title>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <Spinner size="md" aria-label="Loading..." />

          <Spinner size="lg" aria-label="Loading..." />

          <Progress value={65} title="Basic progress" />

          <Progress value={33} title="Progress with measure" measureLocation={ProgressMeasureLocation.outside} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <EmptyState>
            <CubesIcon className="pf-v5-c-empty-state__icon" />

            <Title headingLevel="h2" size="lg">
              No data available
            </Title>

            <EmptyStateBody>This represents an empty state pattern when no data is available.</EmptyStateBody>

            <Button variant="primary">Create new</Button>
          </EmptyState>
        </div>

        <ProgressStepper>
          <ProgressStep
            id="step1"
            titleId="step1-title"
            aria-label="completed step, step with success"
            isCurrent={currentStepIndex === 1}
          >
            Step 1
          </ProgressStep>

          <ProgressStep id="step2" titleId="step2-title" aria-label="step with info" isCurrent={currentStepIndex === 2}>
            Step 2
          </ProgressStep>

          <ProgressStep id="step3" titleId="step3-title" aria-label="pending step" isCurrent={currentStepIndex === 3}>
            Step 3
          </ProgressStep>
        </ProgressStepper>
        <div style={{ marginTop: '10px' }}>
          <Button variant="secondary" onClick={() => handleStepClick(currentStepIndex > 1 ? currentStepIndex - 1 : 1)}>
            Previous
          </Button>{' '}
          <Button variant="primary" onClick={() => handleStepClick(currentStepIndex < 3 ? currentStepIndex + 1 : 3)}>
            Next
          </Button>
        </div>
      </PageSection>

      <Divider />

      {/* Alert Components Section */}
      <PageSection>
        <Title headingLevel="h2">Alert Components</Title>

        <div style={{ marginBottom: '20px' }}>
          <AlertGroup>
            {alertOneVisible && (
              <Alert
                variant="success"
                title="Success alert"
                actionClose={<AlertActionCloseButton onClose={() => setAlertOneVisible(false)} />}
              >
                This is a success alert with a close button.
              </Alert>
            )}

            {alertTwoVisible && (
              <Alert
                variant="danger"
                title="Danger alert"
                actionClose={<AlertActionCloseButton onClose={() => setAlertTwoVisible(false)} />}
              >
                This is a danger alert with a close button.
              </Alert>
            )}
          </AlertGroup>
        </div>

        <Hint>
          <HintTitle>Did you know?</HintTitle>

          <HintBody>
            PatternFly provides a wide range of components for building enterprise-grade applications.
          </HintBody>

          <HintFooter>
            <Button variant="link" isInline>
              Learn more
            </Button>
          </HintFooter>
        </Hint>
      </PageSection>

      <Divider />

      {/* Form Components Section */}
      <PageSection>
        <Title headingLevel="h2">Form Components</Title>

        <Form>
          <FormGroup label="Text input" isRequired fieldId="text-input">
            <TextInput
              isRequired
              type="text"
              id="text-input"
              name="text-input"
              value={inputValue}
              onChange={handleTextInputChange}
              aria-describedby="text-input-helper"
            />

            <FormHelperText>{inputValue.length === 0 ? 'Please provide a text input.' : ''}</FormHelperText>
          </FormGroup>

          <FormGroup label="Textarea" isRequired fieldId="textarea">
            <TextArea
              isRequired
              id="textarea"
              name="textarea"
              value={textareaValue}
              onChange={handleTextAreaChange}
              aria-describedby="textarea-helper"
            />

            <FormHelperText>{textareaValue.length === 0 ? 'Please provide a text area input.' : ''}</FormHelperText>
          </FormGroup>

          <FormGroup label="Number input" fieldId="number-input">
            <NumberInput
              value={numberValue}
              min={0}
              max={10}
              onMinus={() => setNumberValue(numberValue - 1)}
              onPlus={() => setNumberValue(numberValue + 1)}
              onChange={handleNumberChange}
              inputName="number-input"
              inputAriaLabel="number input"
            />
          </FormGroup>

          <FormGroup label="Checkbox" fieldId="checkbox">
            <Checkbox
              id="checkbox"
              name="checkbox"
              label="I agree to terms and conditions"
              isChecked={checkboxChecked}
              onChange={(_event, checked) => handleCheckboxChange(checked)}
            />
          </FormGroup>

          <FormGroup label="Radio buttons" fieldId="radio">
            <Radio
              id="radio1"
              name="radio-group"
              label="Option 1"
              value="option1"
              isChecked={radioChecked === 'option1'}
              onChange={(_event, checked) => checked && handleRadioChange('option1')}
            />

            <Radio
              id="radio2"
              name="radio-group"
              label="Option 2"
              value="option2"
              isChecked={radioChecked === 'option2'}
              onChange={(_event, checked) => checked && handleRadioChange('option2')}
            />
          </FormGroup>

          <FormGroup label="Switch" fieldId="switch">
            <Switch
              id="switch"
              label="Power"
              isChecked={switchChecked}
              onChange={(_event, checked) => handleSwitchChange(checked)}
            />
          </FormGroup>

          <FormGroup label="Slider" fieldId="slider">
            <Slider
              id="slider"
              value={sliderValue}
              onChange={handleSliderChange}
              min={0}
              max={100}
              step={1}
              showTicks
              areCustomStepsContinuous
            />
          </FormGroup>

          <FormGroup label="Input group" fieldId="input-group">
            <InputGroup>
              <InputGroupText>
                <CogIcon />
              </InputGroupText>

              <InputGroupItem isFill>
                <TextInput
                  type="text"
                  id="input-group-text"
                  name="input-group-text"
                  aria-label="input with icon prefix"
                />
              </InputGroupItem>

              <InputGroupText>.com</InputGroupText>
            </InputGroup>
          </FormGroup>

          <FormGroup label="Select" fieldId="select">
            <Select
              aria-label="Select dropdown"
              toggle={(toggleRef) => <Button ref={toggleRef}>Select an option</Button>}
            >
              <SelectOption value="Option 1" />

              <SelectOption value="Option 2" />

              <SelectOption value="Option 3" />
            </Select>
          </FormGroup>

          <FormGroup label="Search input" fieldId="search-input">
            <SearchInput
              placeholder="Search"
              value={searchInputValue}
              onChange={handleSearchInputChange}
              onClear={() => setSearchInputValue('')}
            />
          </FormGroup>

          <FormGroup label="Toggle group" fieldId="toggle-group">
            <ToggleGroup aria-label="Toggle group">
              <ToggleGroupItem
                text="Option 1"
                buttonId="item-1"
                isSelected={selectedToggleItem === 'item-1'}
                onChange={() => setSelectedToggleItem('item-1')}
              />

              <ToggleGroupItem
                text="Option 2"
                buttonId="item-2"
                isSelected={selectedToggleItem === 'item-2'}
                onChange={() => setSelectedToggleItem('item-2')}
              />

              <ToggleGroupItem
                text="Option 3"
                buttonId="item-3"
                isSelected={selectedToggleItem === 'item-3'}
                onChange={() => setSelectedToggleItem('item-3')}
              />
            </ToggleGroup>
          </FormGroup>

          <ActionGroup>
            <Button variant="primary">Submit</Button>

            <Button variant="secondary">Cancel</Button>
          </ActionGroup>
        </Form>
      </PageSection>

      <Divider />

      {/* Layout & Navigation Components Section */}
      <PageSection>
        <Title headingLevel="h2">Layout & Navigation Components</Title>

        <div style={{ marginBottom: '20px' }}>
          <Tabs activeKey={activeTabKey} onSelect={handleTabClick} isBox>
            <Tab eventKey={0} title={<TabTitleText>Tab 1</TabTitleText>}>
              <TabContent id="tab-content-1">
                <p>Tab 1 content</p>
              </TabContent>
            </Tab>

            <Tab eventKey={1} title={<TabTitleText>Tab 2</TabTitleText>}>
              <TabContent id="tab-content-2">
                <p>Tab 2 content</p>
              </TabContent>
            </Tab>

            <Tab eventKey={2} title={<TabTitleText>Tab 3</TabTitleText>}>
              <TabContent id="tab-content-3">
                <p>Tab 3 content</p>
              </TabContent>
            </Tab>
          </Tabs>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <ExpandableSection
            toggleText={isExpandableSectionExpanded ? 'Show less' : 'Show more'}
            onToggle={handleExpandableSectionToggle}
            isExpanded={isExpandableSectionExpanded}
          >
            <p>
              This content is visible only when the expandable section is expanded. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </ExpandableSection>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Button variant="secondary" onClick={() => setIsDrawerExpanded(!isDrawerExpanded)}>
            Toggle drawer
          </Button>

          <Drawer isExpanded={isDrawerExpanded}>
            <DrawerContent
              panelContent={
                <DrawerPanelContent>
                  <DrawerHead>
                    <Title headingLevel="h2">Drawer panel</Title>

                    <DrawerActions>
                      <DrawerCloseButton onClick={() => setIsDrawerExpanded(false)} />
                    </DrawerActions>
                  </DrawerHead>

                  <DrawerPanelBody>
                    <p>Drawer panel content</p>
                  </DrawerPanelBody>
                </DrawerPanelContent>
              }
            >
              <DrawerContentBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat purus et dui tristique,
                  vitae aliquam arcu vulputate.
                </p>
              </DrawerContentBody>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Sidebar Navigation Example */}
        <div style={{ marginBottom: '20px' }}>
          <Sidebar orientation="split">
            <SidebarPanel style={{ width: sidebarExpanded ? '250px' : '50px' }}>
              <div>
                <Button variant="plain" onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                  {sidebarExpanded ? '<' : '>'}
                </Button>

                {sidebarExpanded && (
                  <div>
                    <p>Sidebar content</p>
                    <List>
                      <ListItem>Dashboard</ListItem>
                      <ListItem>Reports</ListItem>
                      <ListItem>Settings</ListItem>
                    </List>
                  </div>
                )}
              </div>
            </SidebarPanel>

            <SidebarContent>
              <div style={{ padding: '16px' }}>
                <p>Main content area</p>
              </div>
            </SidebarContent>
          </Sidebar>
        </div>

        {/* Jump Links Navigation */}
        <div style={{ marginBottom: '20px' }}>
          <JumpLinks isCentered>
            <JumpLinksList>
              <JumpLinksItem key={1} href="#section1">
                Section 1
              </JumpLinksItem>

              <JumpLinksItem key={2} href="#section2">
                Section 2
              </JumpLinksItem>

              <JumpLinksItem key={3} href="#section3">
                Section 3
              </JumpLinksItem>
            </JumpLinksList>
          </JumpLinks>
        </div>

        {/* Pagination Component */}
        <div style={{ marginBottom: '20px' }}>
          <Pagination
            itemCount={100}
            perPage={10}
            page={currentPage}
            onSetPage={handlePageChange}
            variant="top"
            titles={{ pages: 'Pagination' }}
          />
        </div>

        {/* TreeView Component for Hierarchical Navigation */}
        <div style={{ marginBottom: '20px' }}>
          <TreeView
            data={treeItems}
            hasBadges
            hasSelectableNodes
            onSelect={handleTreeViewSelect}
            activeItems={selectedTreeItems}
          />
        </div>
      </PageSection>

      <Divider />

      {/* Text & Data Display Components Section */}
      <PageSection>
        <Title headingLevel="h2">Text & Data Display Components</Title>

        <div style={{ marginBottom: '20px' }}>
          <LabelGroup categoryName="Category">
            <Label color="blue">Label 1</Label>
            <Label color="green">Label 2</Label>
            <Label color="red">Label 3</Label>
          </LabelGroup>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <DescriptionList>
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>PatternFly</DescriptionListDescription>
            </DescriptionListGroup>

            <DescriptionListGroup>
              <DescriptionListTerm>Version</DescriptionListTerm>
              <DescriptionListDescription>5.0.0</DescriptionListDescription>
            </DescriptionListGroup>

            <DescriptionListGroup>
              <DescriptionListTerm>License</DescriptionListTerm>
              <DescriptionListDescription>MIT</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <List>
            <ListItem>First item</ListItem>

            <ListItem>
              Second item with subitems
              <List>
                <ListItem>Subitem 1</ListItem>
                <ListItem>Subitem 2</ListItem>
              </List>
            </ListItem>

            <ListItem>Third item</ListItem>
          </List>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <ClipboardCopy>npm install @patternfly/react-core</ClipboardCopy>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <CodeBlock>
            <CodeBlockCode>{codeBlockContent}</CodeBlockCode>
          </CodeBlock>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Tooltip content="This is a tooltip">
            <Button variant="link">Hover for tooltip</Button>
          </Tooltip>
        </div>
      </PageSection>

      <Divider />

      {/* Action Components Section */}
      <PageSection>
        <Title headingLevel="h2">Action Components</Title>

        <div style={{ marginBottom: '20px' }}>
          <ActionList>
            <ActionListItem>
              <Button variant="primary">Primary</Button>
            </ActionListItem>

            <ActionListItem>
              <Button variant="secondary">Secondary</Button>
            </ActionListItem>

            <ActionListItem>
              <Button variant="tertiary">Tertiary</Button>
            </ActionListItem>

            <ActionListItem>
              <Button variant="danger">Danger</Button>
            </ActionListItem>
          </ActionList>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <ActionListGroup>
            <ActionList>
              <ActionListItem>
                <Button variant="link" icon={<PlusCircleIcon />}>
                  Add item
                </Button>
              </ActionListItem>

              <ActionListItem>
                <Button variant="link" icon={<InfoCircleIcon />}>
                  View details
                </Button>
              </ActionListItem>
            </ActionList>
          </ActionListGroup>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Button
            variant="primary"
            onMouseOver={() => setIsPopoverVisible(true)}
            onMouseOut={() => setIsPopoverVisible(false)}
          >
            Hover for popover
          </Button>

          <Popover
            isVisible={isPopoverVisible}
            bodyContent="This is a popover"
            headerContent="Popover header"
            footerContent="Popover footer"
            position="right"
          />
        </div>

        {/* Backdrop demonstration */}
        <div style={{ marginBottom: '20px' }}>
          <Button
            variant="link"
            onClick={() => {
              const backdrop = document.createElement('div');
              backdrop.className = 'pf-v5-c-backdrop';
              document.body.appendChild(backdrop);
              setTimeout(() => {
                document.body.removeChild(backdrop);
              }, 3000);
            }}
          >
            Show backdrop for 3 seconds
          </Button>
        </div>
      </PageSection>

      <Divider />

      {/* Loading & Skeleton Components Section */}
      <PageSection>
        <Title headingLevel="h2">Loading & Skeleton Components</Title>

        <div style={{ marginBottom: '20px' }}>
          <Skeleton screenreaderText="Loading contents" height="50px" width="300px" />
          <Skeleton shape="circle" width="50px" height="50px" screenreaderText="Loading avatar" />
          <Skeleton shape="square" width="100px" height="100px" screenreaderText="Loading image" />
        </div>
      </PageSection>
    </React.Fragment>
  );
};

export default Kitchensink;
