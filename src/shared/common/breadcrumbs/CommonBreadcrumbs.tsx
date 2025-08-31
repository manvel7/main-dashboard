import { useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material';
import useCommonBreadcrumbs from '@shared/common/breadcrumbs/useCommonBreadcrumbs';

const StyledBreadcrumbLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  padding: '4px 8px',
  borderRadius: '4px',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === 'light'
        ? 'rgba(25, 118, 210, 0.08)'
        : 'rgba(144, 202, 249, 0.08)',
    textDecoration: 'none',
    transform: 'translateY(-1px)',
  },
  '&:active': { transform: 'translateY(0)' },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  padding: '4px 8px',
}));

export default function CommonBreadcrumbs() {
  const { t } = useTranslation();
  const { breadcrumbs } = useCommonBreadcrumbs();

  const breadcrumbItems = useMemo(() => {
    return breadcrumbs.map((crumb) => {
      // Last breadcrumb is never clickable
      if (crumb.isLast) {
        return (
          <StyledTypography key={crumb.path} variant="body2">
            {crumb.label}
          </StyledTypography>
        );
      }

      // Clickable if route has no children
      if (crumb.clickable) {
        return (
          <StyledBreadcrumbLink key={crumb.path} to={crumb.path}>
            {crumb.label}
          </StyledBreadcrumbLink>
        );
      }

      // Non-clickable parent with children
      return (
        <StyledTypography key={crumb.path} variant="body2">
          {crumb.label}
        </StyledTypography>
      );
    });
  }, [breadcrumbs]);

  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      sx={{
        '& .MuiBreadcrumbs-separator': { color: 'text.secondary', mx: 0.5 },
      }}
    >
      {/* Dynamic Home breadcrumb */}
      <StyledBreadcrumbLink to="/">{t('Home')}</StyledBreadcrumbLink>
      {breadcrumbItems}
    </MUIBreadcrumbs>
  );
}
