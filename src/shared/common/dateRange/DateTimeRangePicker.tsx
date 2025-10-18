import React, { useMemo, useCallback } from 'react';
// ------------ day js -------------
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
// ---------- useDateTimeRange ------------
import { useDateTimeRange } from '@shared/common/dateRange/hooks/useDateTimeRange';
// -------- CommonPopover-------
import { CommonPopover } from '@shared/common/popover';
import { usePopover } from '@shared/common/popover/usePopover';
// ---------- Styled ----------
import {
  Content,
  ContentWrapper,
  Header,
  Root,
  SidebarItem,
  SidebarTitle,
  Sidebar,
  Footer,
} from '@shared/common/dateRange/styles';
import { Button, Grid, Typography } from '@mui/material';
// ----------------Chiled Compoenents -------------
import { RangeField } from '@shared/common/dateRange/RangeField';
// ---------------- constants dateRange------------
import { quickOptions } from '@shared/common/dateRange/constants';

export const DateTimeRangePicker: React.FC = () => {
  const { open, anchorEl, openPopover, closePopover, togglePopover } =
    usePopover();
  const {
    range,
    error,
    activeOption,
    handleChange,
    handleSelect,
    handleApply,
    formattedRange,
  } = useDateTimeRange();

  const handleRangeApply = useCallback(() => {
    togglePopover();
    handleApply();
  }, [togglePopover, handleApply]);

  const popoverContent = useMemo(
    () => (
      <ContentWrapper>
        <Sidebar>
          <SidebarTitle variant="subtitle1">Quick Select</SidebarTitle>
          {quickOptions.map((opt) => (
            <SidebarItem
              key={opt.value}
              active={opt.value === activeOption}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </SidebarItem>
          ))}
        </Sidebar>

        <Content>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <RangeField
                label="Start Date"
                value={range.startDate}
                onChange={(val) => handleChange('startDate', val)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <RangeField
                label="End Date"
                value={range.endDate}
                onChange={(val) => handleChange('endDate', val)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <RangeField
                label="Start Time"
                value={range.startTime}
                onChange={(val) => handleChange('startTime', val)}
                type="time"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <RangeField
                label="End Time"
                value={range.endTime}
                onChange={(val) => handleChange('endTime', val)}
                type="time"
              />
            </Grid>
          </Grid>

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          <Footer>
            <Button variant="contained" onClick={handleRangeApply}>
              Apply Range
            </Button>
          </Footer>
        </Content>
      </ContentWrapper>
    ),
    [range, activeOption, error, handleChange, handleSelect, handleRangeApply]
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Root elevation={3}>
        <Header>
          <Typography
            sx={{ cursor: 'pointer' }}
            variant="body1"
            fontWeight={600}
            onClick={openPopover}
          >
            📅 {formattedRange || 'Select a date range'}
          </Typography>
        </Header>
        <CommonPopover
          open={open}
          anchorEl={anchorEl}
          onOpen={openPopover}
          onClose={closePopover}
          content={() => popoverContent}
        />
      </Root>
    </LocalizationProvider>
  );
};
