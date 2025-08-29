import { memo, type ReactNode, type SyntheticEvent } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

type StyledAccordionProps = {
  borderRadius?: number | string;
};

const StyledAccordion = styled(Accordion, {
  shouldForwardProp: (prop) => prop !== 'borderRadius',
})<StyledAccordionProps>(({ borderRadius = 8, theme }) => ({
  borderRadius,
  boxShadow: 'none',
  '&::before': {
    display: 'none',
  },
  '&.Mui-expanded .MuiAccordionDetails-root': {
    position: 'relative',
  },
  '&.Mui-expanded .MuiAccordionDetails-root::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: theme.palette.divider,
  },
}));

const SummaryContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexGrow: 1,
  minWidth: 0,
}));

const IconWrapper = styled(Box)(() => ({
  display: 'inline-flex',
  alignItems: 'center',
}));

export type CommonAccordionProps = {
  icon?: ReactNode;
  title: ReactNode;
  children: ReactNode;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onChange?: (event: SyntheticEvent, expanded: boolean) => void;
  id?: string;
  borderRadius?: number | string;
};

function CommonAccordion({
  icon,
  title,
  children,
  expanded,
  defaultExpanded = false,
  onChange,
  id,
  borderRadius,
}: CommonAccordionProps) {
  return (
    <StyledAccordion
      borderRadius={borderRadius}
      expanded={expanded}
      defaultExpanded={defaultExpanded}
      onChange={onChange}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={id ? `${id}-content` : undefined}
        id={id ? `${id}-header` : undefined}
      >
        <SummaryContent>
          {icon && <IconWrapper>{icon}</IconWrapper>}
          <Typography variant="subtitle1" noWrap>
            {title}
          </Typography>
        </SummaryContent>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordion>
  );
}

export default memo(CommonAccordion);
