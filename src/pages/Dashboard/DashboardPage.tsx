import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  TrendingUp,
  People,
  Settings,
} from '@mui/icons-material';

export const DashboardPage: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      icon: <People />,
      color: '#1976d2',
    },
    {
      title: 'Active Sessions',
      value: '567',
      icon: <TrendingUp />,
      color: '#2e7d32',
    },
    {
      title: 'System Health',
      value: '98%',
      icon: <Settings />,
      color: '#ed6c02',
    },
    {
      title: 'Revenue',
      value: '$45,678',
      icon: <DashboardIcon />,
      color: '#9c27b0',
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 3,
            mb: 4,
          }}
        >
          {stats.map((stat, index) => (
            <Card key={index} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: stat.color, mr: 1 }}>{stat.icon}</Box>
                  <Typography variant="h6" component="h2">
                    {stat.title}
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  component="p"
                  sx={{ color: stat.color }}
                >
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
