import React from 'react';
import { Container, Box, Typography } from '@mui/material';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  actions?: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  subtitle,
  maxWidth = 'lg',
  actions
}) => {
  return (
    <Container maxWidth={maxWidth} sx={{ p: 0 }}>
      <Box sx={{ mt: 4, mb: 2 }}>
        {(title || actions) && (
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: subtitle ? 2 : 4
          }}>
            {title && (
              <Box>
                <Typography variant="h3" component="h1" gutterBottom>
                  {title}
                </Typography>
                {subtitle && (
                  <Typography variant="body1" color="text.secondary">
                    {subtitle}
                  </Typography>
                )}
              </Box>
            )}
            {actions && (
              <Box>
                {actions}
              </Box>
            )}
          </Box>
        )}

        {subtitle && !title && (
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            {subtitle}
          </Typography>
        )}

        {children}
      </Box>
    </Container>
  );
};
