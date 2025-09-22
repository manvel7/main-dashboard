import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box, styled } from '@mui/material';

const DefaultList = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2), // 16px default gap
  width: '100%',
  boxSizing: 'border-box',
}));

export interface CommonInfiniteScrollProps<ItemType> {
  items: ItemType[];
  hasMore: boolean;
  isLoading: boolean;
  loadMore: () => Promise<void> | void;
  renderItem: (item: ItemType, index: number) => React.ReactNode;
  keyExtractor: (item: ItemType) => string | number;
  loader?: React.ReactNode;
  scrollThreshold?: number | string;
  className?: string;
  listClassName?: string;
  listWrapper?: React.ElementType;
}

function CommonInfiniteScroll<ItemType>(
  props: CommonInfiniteScrollProps<ItemType>
) {
  const {
    items,
    hasMore,
    isLoading,
    loadMore,
    renderItem,
    keyExtractor,
    loader,
    scrollThreshold = 0.98,
    className,
    listClassName,
    listWrapper: ListWrapper,
  } = props;

  const Wrapper: React.ElementType = ListWrapper || DefaultList;

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      hasMore={hasMore}
      loader={isLoading ? loader : null}
      scrollThreshold={scrollThreshold}
      className={className}
    >
      <Wrapper {...(ListWrapper ? {} : { className: listClassName })}>
        {items.map((item, index) => (
          <React.Fragment key={keyExtractor(item)}>
            {renderItem(item, index)}
          </React.Fragment>
        ))}
      </Wrapper>
    </InfiniteScroll>
  );
}

export default CommonInfiniteScroll;
