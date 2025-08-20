import { useMemo } from 'react';
import { Sidebar } from '@widgets/sidebar';
import { CustomHeader } from '@shared/index';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LayoutProps } from '@widgets/layout/model';
import { useSidebarClose } from '@widgets/sidebar';
import { LayoutContainer, MainContent } from '@widgets/layout/ui/styles';
import NotifictaionContent from '@features/notification/ui/NotifictaionContent';

export const Layout: React.FC<LayoutProps> = ({
  children,
}) => {
  const location = useLocation();
  const { t } = useTranslation();
  const { sidebarOpen, onSidebarToggle } = useSidebarClose();

  const computedLocation = useMemo(() => {
    if (location.pathname === '/') {
      return t('Home');
    }

    const lastSegment = location.pathname.split('/').pop() || '';
    const formatted = lastSegment
      .replace(/-/g, ' ')
      .trim()
      .split(' ')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
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
          otherChildren={<NotifictaionContent />}
        />
        {children}
      </MainContent>
    </LayoutContainer>
  );
};
