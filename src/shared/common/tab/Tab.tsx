import React from 'react';
import { Box, Typography, Chip, styled } from '@mui/material';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

export interface TabItem {
  id: string | number;
  title: string;
  count?: number;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string | number;
  onChange: (id: string | number) => void;
  children?: (activeId: string | number) => React.ReactNode;
}

const TabsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1), // Reduced gap for mobile
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(2),
  overflowX: 'auto', // Allow horizontal scrolling on mobile
  // Use global horizontal scroll styling
  '&.horizontal-scroll': {
    scrollbarWidth: 'thin',
    scrollbarColor: `${theme.palette.mode === 'dark' ? '#888' : '#ccc'} transparent`,
  },
  // Ensure minimum touch target size
  minHeight: 48,
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.5),
    paddingBottom: theme.spacing(1),
  },
}));

const TabButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center content
  gap: theme.spacing(0.5),
  padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
  cursor: 'pointer',
  borderBottom: isActive
    ? `2px solid ${theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.main}`
    : '2px solid transparent',
  transition: 'border-color 0.2s ease-in-out',
  whiteSpace: 'nowrap', // Prevent text wrapping
  flexShrink: 0, // Prevent shrinking
  minWidth: 'fit-content', // Ensure minimum width
  flex: 1, // Take full available width
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  // Mobile optimizations
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
    gap: theme.spacing(0.25),
    minHeight: 44, // Touch target size
    flex: 1, // Also take full width on mobile
  },
}));

const TabTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.primary,
  fontSize: '0.875rem', // Slightly smaller font
  textAlign: 'center', // Center text
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem', // Even smaller on mobile
  },
}));

const TabCount = styled(Chip)(({ theme }) => ({
  height: 18,
  minWidth: 18,
  fontSize: '0.7rem',
  fontWeight: 500,
  [theme.breakpoints.down('sm')]: {
    height: 16,
    minWidth: 16,
    fontSize: '0.65rem',
  },
}));

function Tab({ items, activeId, onChange, children }: TabsProps) {
  const { t } = useTranslation();
  const handleTabClick = (id: string | number) => {
    onChange(id);
  };

  return (
    <Box>
      <TabsContainer className="horizontal-scroll">
        {items.map((item) => (
          <TabButton
            key={item.id}
            isActive={item.id === activeId}
            onClick={() => handleTabClick(item.id)}
            role="tab"
            aria-selected={item.id === activeId}
          >
            <TabTitle variant="body2">{t(item.title)}</TabTitle>
            {item.count !== undefined && (
              <TabCount
                label={item.count}
                size="small"
                color="primary"
                variant="filled"
              />
            )}
          </TabButton>
        ))}
      </TabsContainer>

      {children && children(activeId)}
    </Box>
  );
}

export default Tab;
