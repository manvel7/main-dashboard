import React from 'react';
import { Card, CardContent, Typography, styled } from '@mui/material';
import { Post } from '@features/posts/model/postsSlice';

interface PostCardProps {
  post: Post;
}

const PostCardRoot = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
}));

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <PostCardRoot>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
    </PostCardRoot>
  );
};

export default PostCard;
