import { Typography, Button, useTheme, useMediaQuery, Box } from '@mui/material';
import { PageContainer } from '@shared/index';
import { HomeContainer, WelcomeSection } from '@pages/HomePage/styles';
import { useTranslation } from 'react-i18next';
import React from 'react';
import SelectCheckboxList from '@shared/common/forms/SelectCheckboxList';


const items = Array.from({ length: 500000 }, (_, i) => ({
  id: i + 1,
  data: { title: `Item ${i + 1}`, description: `Description ${i + 1}` },
}));


export const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

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
        <Box p={2}>
          <Box mb={2} maxWidth={400}>
            <SelectCheckboxList
              items={items}
              labelKey="title"
              label={t('Select')}
              placeholder={t('Select items')}
              enableSelectAll
              enableSearch
              height={200}
              itemHeight={60}
              onIdsChange={(ids) => console.log('selectedIds:', ids)}
              renderItem={(item) => (
                <Box>
                  <Typography variant="body1" fontWeight="bold">{item.data.title}</Typography>
                  <Typography variant="caption">{item.data.description}</Typography>
                </Box>
              )}
            />
          </Box>
        </Box>
      </HomeContainer>
    </PageContainer>
  );
};
