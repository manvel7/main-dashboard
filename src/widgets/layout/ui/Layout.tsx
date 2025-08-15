import { Sidebar } from '@widgets/sidebar';
import { LayoutProps } from '@widgets/layout/model/types';
import { LayoutContainer, MainContent } from '@widgets/layout/ui/styles';
import { CustomHeader } from '@shared/index';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

export const Layout: React.FC<LayoutProps> = ({
  children,
  sidebarOpen,
  onSidebarToggle
}) => {
  const location = useLocation();
  const { t } = useTranslation();

  const computedLocation = useMemo(() => {
    if (location.pathname === '/') {
      return t('Home');
    }

    const lastSegment = location.pathname.split('/').pop() || '';
    const formatted = lastSegment
      .replace(/-/g, ' ')
      .trim()
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return t(formatted || 'Page');
  }, [location.pathname, t]);

  return (
    <LayoutContainer>
      <Sidebar open={sidebarOpen} onToggle={onSidebarToggle}>
        {({ header, content, footer }) => (
          <>
            {header && header()}
            {content && content()}
            {footer && footer()}
          </>
        )}
      </Sidebar>

      <MainContent>
        <CustomHeader
          title={computedLocation}
        />
        {children}
      </MainContent>
    </LayoutContainer>
  );
};
