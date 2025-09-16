import React, { useState } from 'react';
import {
  Typography,
  Box,
  Paper,
  Button,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
  TableCell,
  CardMedia,
} from '@mui/material';
import {
  Info as InfoIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Check as CheckIcon,
  Star as StarIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  MoreVert as MoreVertIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';
import { PageContainer } from '@shared/index';
import { useTranslation } from 'react-i18next';
import { HomeContainer } from '@pages/HomePage/styles';
import SelectCheckboxList from '@shared/common/forms/SelectCheckboxList';
import CommonAccordion from '@shared/common/accordion/CommonAccordion';
import CommonChip from '@shared/common/chip/CommonChip';
import CommonLoadingButton from '@shared/common/forms/CommonLoadingButton';
import CommonPopover from '@shared/common/popover/CommonPopover';
import Tab from '@shared/common/tab/Tab';
import { CommonRadioGroup } from '@shared/common/forms';
import { FormProvider, useForm } from 'react-hook-form';
import { CommonTable } from '@/shared/common';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel from '@/shared/common/carousel/Carousel';
import UserCardItem from '@/features/user/ui/UserCardItem';
import { useAppSelector } from '@/app/store/hooks';
import { selectUsersCard } from '@/features/user/model/selectors';
import { UsersCardGrid } from '@/features/user/styles';

// Sample data for SelectCheckboxList
const items = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  data: { label: `Item ${i + 1}`, value: `Description ${i + 1}` },
}));

// Sample data for Tabs
const tabItems = [
  { id: 'overview', title: 'Overview', count: 12 },
  { id: 'analytics', title: 'Analytics', count: 5 },
  { id: 'reports', title: 'Reports', count: 8 },
  { id: 'settings', title: 'Settings' },
];

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  // State for components
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLElement | null>(null);
  const [loadingStates, setLoadingStates] = useState({
    primary: false,
    secondary: false,
    danger: false,
  });

  // Form for CommonRadioGroup example
  const radioFormMethods = useForm<{ status: string }>({
    defaultValues: { status: 'active' },
    mode: 'onChange',
  });

  const renderStatusRadioGroup = ({
    value,
    onChange,
    onBlur,
    ref,
  }: {
    value: string | number | undefined;
    onChange: (value: any) => void;
    onBlur: () => void;
    ref: React.Ref<any>;
  }) => (
    <RadioGroup value={value} onChange={onChange} onBlur={onBlur} ref={ref} row>
      <FormControlLabel value="active" control={<Radio />} label="Active" />
      <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
    </RadioGroup>
  );

  // Handlers
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setPopoverAnchor(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };

  const handleButtonClick = (type: keyof typeof loadingStates) => {
    setLoadingStates((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [type]: false }));
    }, 2000);
  };

  const renderTabContent = (activeId: string | number) => {
    switch (activeId) {
      case 'overview':
        return (
          <Box p={2}>
            <Typography variant="h6">Overview Content</Typography>
            <Typography variant="body2" color="text.secondary">
              This is the overview tab content with sample data and statistics.
            </Typography>
          </Box>
        );
      case 'analytics':
        return (
          <Box p={2}>
            <Typography variant="h6">Analytics Content</Typography>
            <Typography variant="body2" color="text.secondary">
              Analytics dashboard with charts and metrics.
            </Typography>
          </Box>
        );
      case 'reports':
        return (
          <Box p={2}>
            <Typography variant="h6">Reports Content</Typography>
            <Typography variant="body2" color="text.secondary">
              Generated reports and data exports.
            </Typography>
          </Box>
        );
      case 'settings':
        return (
          <Box p={2}>
            <Typography variant="h6">Settings Content</Typography>
            <Typography variant="body2" color="text.secondary">
              Application settings and configuration options.
            </Typography>
          </Box>
        );
      default:
        return null;
    }
  };
  type User = { id: number; name: string; age: number };

  const users: User[] = Array.from({ length: 100000 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    age: 20 + (i % 10),
  }));

  const renderMobileStickySummary = React.useCallback(() => {
    return (
      <Box
        px={2}
        py={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="subtitle2">Users</Typography>
        <Typography variant="caption" color="text.secondary">
          {users.length} items
        </Typography>
      </Box>
    );
  }, [users.length]);

  const renderMobileCard = React.useCallback(
    (
      row: User,
      _index: number,
      { expanded, toggle }: { expanded: boolean; toggle: () => void }
    ) => {
      return (
        <Card sx={{ mx: 2 }}>
          <CardHeader
            title={row.name}
            action={
              <IconButton
                onClick={toggle}
                aria-label={expanded ? 'Collapse' : 'Expand'}
              >
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            }
          />
          {expanded && (
            <CardContent>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography variant="body2">
                  <strong>Name:</strong> {row.name}
                </Typography>
                <Typography variant="body2">
                  <strong>Age:</strong> {row.age}
                </Typography>
              </Box>
            </CardContent>
          )}
        </Card>
      );
    },
    []
  );


  const items = [
    {
      image: "https://picsum.photos/id/1018/600/400",
      title: "Beautiful Landscape",
      description: "A breathtaking view of mountains and lake."
    },
    {
      image: "https://picsum.photos/id/1025/600/400",
      title: "Cute Puppy",
      description: "Adorable puppy enjoying the sunshine."
    },
    {
      image: "https://picsum.photos/id/1018/600/400",
      title: "Beautiful Landscape",
      description: "A breathtaking view of mountains and lake."
    },
    {
      image: "https://picsum.photos/id/1025/600/400",
      title: "Cute Puppy",
      description: "Adorable puppy enjoying the sunshine."
    },
  ];
  return (
    <PageContainer>
      <HomeContainer disableGutters maxWidth="xl">
        <Carousel
          items={items}
          autoplay
          autoplaySpeed={2500}
          infinite={true}
          showDots={false}
          showArrows
          slidesToShow={4}
          height={450}
          responsive={[
            { breakpoint: 1024, slidesToShow: 4 },
            { breakpoint: 600, slidesToShow: 2 },
            { breakpoint: 480, slidesToShow: 1 },
          ]}
          renderItem={({ title, description, image }) => (
            <Card sx={{ borderRadius: 3, boxShadow: 3, m: 2 }}>
              <CardMedia
                component="img"
                image={image}
                height={200}
                alt={title}
                sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {description}
                </Typography>
                <Button variant="contained" size="small" onClick={() => { }}>
                  Apply
                </Button>
              </CardContent>
            </Card>
          )}
        />
        {/* <CommonTable<User>
          data={users}
          getRowId={(row: User) => row.id}
          renderHeader={() => (
            <>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </>
          )}
          renderRow={(row: User) => (
            <>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
            </>
          )}
          renderActions={(row: User) => (
            <IconButton onClick={() => console.log(row)}>
              <EditIcon />
            </IconButton>
          )}
          loading={false}
          enableMobileCards
          renderMobileCard={renderMobileCard}
          renderMobileStickySummary={renderMobileStickySummary}
          mobileBreakpoint={600}
          mobileInfiniteScroll
        /> */}
        {/* <Box p={3}>
          <Typography variant="h4" gutterBottom>
            Shared Components Examples
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
            }}
          >
            <Box>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  SelectCheckboxList Example
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Multi-select component with search and select all
                  functionality
                </Typography>
                <SelectCheckboxList
                  items={items}
                  labelKey="label"
                  label="Select Items"
                  placeholder="Choose items from the list"
                  enableSelectAll
                  enableSearch
                  height={200}
                  itemHeight={60}
                  onIdsChange={setSelectedIds}
                  renderItem={(item) => (
                    <Box>
                      <Typography variant="body1" fontWeight="bold">
                        {item.data.label}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.data.value}
                      </Typography>
                    </Box>
                  )}
                />
                <Typography variant="caption" color="text.secondary" mt={1}>
                  Selected: {selectedIds.length} items
                </Typography>
              </Paper>
            </Box>

            <Box>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  CommonAccordion Examples
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Collapsible content sections with icons and custom styling
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <CommonAccordion
                    icon={<InfoIcon color="primary" />}
                    title="Information Section"
                    defaultExpanded
                  >
                    <Typography variant="body2">
                      This is an expanded accordion with an info icon. It
                      contains important information that users can collapse or
                      expand.
                    </Typography>
                  </CommonAccordion>

                  <CommonAccordion
                    icon={<SettingsIcon color="secondary" />}
                    title="Settings Section"
                    borderRadius={12}
                  >
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="Option 1"
                          secondary="Description for option 1"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Option 2"
                          secondary="Description for option 2"
                        />
                      </ListItem>
                    </List>
                  </CommonAccordion>

                  <CommonAccordion
                    icon={<NotificationsIcon color="warning" />}
                    title="Notifications"
                  >
                    <Typography variant="body2">
                      Notification settings and preferences can be configured
                      here.
                    </Typography>
                  </CommonAccordion>
                </Box>
              </Paper>
            </Box>

            <Box>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  CommonChip Examples
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Various chip styles with icons and different variants
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <CommonChip
                    label="Primary Chip"
                    color="primary"
                    icon={<CheckIcon />}
                  />
                  <CommonChip
                    label="Secondary Chip"
                    color="secondary"
                    icon={<StarIcon />}
                  />
                  <CommonChip
                    label="Success Chip"
                    color="success"
                    icon={<CheckIcon />}
                  />
                  <CommonChip
                    label="Warning Chip"
                    color="warning"
                    icon={<NotificationsIcon />}
                  />
                  <CommonChip
                    label="Error Chip"
                    color="error"
                    icon={<DeleteIcon />}
                  />
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <CommonChip
                    label="Outlined Primary"
                    variant="outlined"
                    color="primary"
                    icon={<PersonIcon />}
                  />
                  <CommonChip
                    label="Outlined Secondary"
                    variant="outlined"
                    color="secondary"
                    icon={<SettingsIcon />}
                  />
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <CommonChip
                    label="Right Icon"
                    color="info"
                    icon={<EditIcon />}
                    iconPosition="right"
                  />
                  <CommonChip
                    label="Clickable"
                    color="primary"
                    icon={<InfoIcon />}
                    onClick={() => console.log('Chip clicked')}
                  />
                </Box>
              </Paper>
            </Box>

            <Box>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  CommonLoadingButton Examples
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Buttons with loading states and different variants
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <CommonLoadingButton
                    title="Primary Loading Button"
                    loading={loadingStates.primary}
                    startIcon={<CheckIcon />}
                    onClick={() => handleButtonClick('primary')}
                  />

                  <CommonLoadingButton
                    title="Secondary Button"
                    variant="outlined"
                    color="secondary"
                    startIcon={<SettingsIcon />}
                    onClick={() => handleButtonClick('secondary')}
                  />

                  <CommonLoadingButton
                    title="Danger Button"
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    loading={loadingStates.danger}
                    onClick={() => handleButtonClick('danger')}
                  />

                  <CommonLoadingButton
                    title="Disabled Button"
                    disabled
                    startIcon={<InfoIcon />}
                  />

                  <CommonLoadingButton
                    title="Small Button"
                    size="small"
                    width="auto"
                    startIcon={<StarIcon />}
                  />
                </Box>
              </Paper>
            </Box>

            <Box>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  CommonRadioGroup Example
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Controlled radio group integrated with react-hook-form
                </Typography>

                <FormProvider {...radioFormMethods}>
                  <CommonRadioGroup name="status" label="Status">
                    {renderStatusRadioGroup}
                  </CommonRadioGroup>
                </FormProvider>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  mt={1}
                  display="block"
                >
                  Selected: {radioFormMethods.watch('status')}
                </Typography>
              </Paper>
            </Box>

            <Box>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  CommonPopover Example
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Popover with custom content and positioning
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={handlePopoverOpen}
                    endIcon={<MoreVertIcon />}
                  >
                    Open Popover
                  </Button>

                  <CommonPopover
                    open={Boolean(popoverAnchor)}
                    anchorEl={popoverAnchor}
                    onOpen={handlePopoverOpen}
                    onClose={handlePopoverClose}
                    content={({ closePopover }) => (
                      <Box>
                        <Typography variant="subtitle2" gutterBottom>
                          Popover Content
                        </Typography>
                        <List dense>
                          <ListItem component="button" onClick={closePopover}>
                            <ListItemText primary="Option 1" />
                          </ListItem>
                          <ListItem component="button" onClick={closePopover}>
                            <ListItemText primary="Option 2" />
                          </ListItem>
                          <Divider />
                          <ListItem component="button" onClick={closePopover}>
                            <ListItemText primary="Delete" />
                          </ListItem>
                        </List>
                      </Box>
                    )}
                  />
                </Box>
              </Paper>
            </Box>

            <Box sx={{ gridColumn: { xs: '1', md: '1 / -1' } }}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Tab Component Example
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Tabbed interface with content switching and count badges
                </Typography>

                <Tab
                  items={tabItems}
                  activeId={activeTab}
                  onChange={(id) => setActiveTab(id as string)}
                >
                  {renderTabContent}
                </Tab>
              </Paper>
            </Box>
          </Box>
        </Box> */}
      </HomeContainer>
    </PageContainer>
  );
};
