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
  readonly items: ItemType[];
  readonly hasMore: boolean;
  readonly isLoading: boolean;
  readonly loadMore: () => Promise<void> | void;
  readonly renderItem: (item: ItemType, index: number) => React.ReactNode;
  readonly keyExtractor: (item: ItemType) => string | number;
  readonly loader?: React.ReactNode;
  readonly scrollThreshold?: number | string;
  readonly className?: string;
  readonly listClassName?: string;
  readonly listWrapper?: React.ElementType;
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
