import { Sidebar } from '@widgets/sidebar';
import { LayoutProps } from '@widgets/layout/model/types';
import { LayoutContainer, MainContent } from '@widgets/layout/ui/styles';
import { CustomHeader } from '@shared/index';
import { useLocation } from 'react-router-dom';

export const Layout: React.FC<LayoutProps> = ({
  children,
  sidebarOpen,
  onSidebarToggle
}) => {
  const location = useLocation();
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
          title={
            location.pathname === '/' ? 'Home'
              : location.pathname.split('/').pop()?.replace(/-/g, ' ')
              || 'Page'}
        />
        {children}
      </MainContent>
    </LayoutContainer>
  );
};
