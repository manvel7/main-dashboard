import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import LanguageSelector from './LanguageSelector';

interface CustomHeaderProps {
  title: string;
  otherChildren?: React.ReactNode;
  children?: React.ReactNode;
}

const HeaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  maxHeight: '150px',
  padding: theme.spacing(2, 3),
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 1.5),
  },
}));

const HeaderTop = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
}));

const TitleSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
}));

const OtherChildrenSection = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}));

const ChildrenSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  otherChildren,
  children,
}) => {
  return (
    <HeaderContainer>
      <HeaderTop>
        <TitleSection>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontSize: '24px',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
          >
            {title}
          </Typography>
        </TitleSection>

        <OtherChildrenSection>
          <LanguageSelector />
          {otherChildren}
        </OtherChildrenSection>
      </HeaderTop>

      {children && (
        <ChildrenSection>
          {children}
        </ChildrenSection>
      )}
    </HeaderContainer>
  );
};

export default CustomHeader;
