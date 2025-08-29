import { Typography, Button, useTheme, useMediaQuery, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PageContainer } from '@shared/index';
import { HomeContainer, WelcomeSection } from '@pages/HomePage/styles';
import { useTranslation } from 'react-i18next';
import { CommonPopover, usePopover } from '@shared/common';

const DemoRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const DemoButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
}));

export const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();
  const pop = usePopover(false);

  return (
    <PageContainer>
      <HomeContainer disableGutters maxWidth="xl">
        {/* Welcome Section */}
        <WelcomeSection elevation={0}>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            {t('Welcome to Your Dashboard')}
          </Typography>
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            sx={{ mb: 3, opacity: 0.9 }}
          >
            {t(
              'Your central hub for managing and monitoring all aspects of your system. Get insights, manage users, and control your platform efficiently'
            )}
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.3)',
              },
            }}
          >
            {t('Get Started')}
          </Button>
        </WelcomeSection>
      </HomeContainer>
    </PageContainer>
  );
};
