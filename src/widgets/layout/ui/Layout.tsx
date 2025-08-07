import { Sidebar } from '@widgets/sidebar';
import { LayoutProps } from '@widgets/layout/model/types';
import { LayoutContainer, MainContent } from '@widgets/layout/ui/styles';

export const Layout: React.FC<LayoutProps> = ({
  children,
  sidebarOpen,
  onSidebarToggle
}) => {
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
        {children}
      </MainContent>
    </LayoutContainer>
  );
};
