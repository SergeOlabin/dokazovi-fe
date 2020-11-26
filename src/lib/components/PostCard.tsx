import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Box, Chip } from '@material-ui/core';
import { useStyles } from '../styles/PostCard.styles';
import { PostResponseType } from '../utilities/API/types';

export interface IPostCardProps {
  post: PostResponseType;
}

export const PostCard: React.FC<IPostCardProps> = (props) => {
  const classes = useStyles();
  const { post } = props;

  return (
    <Card className={classes.root}>
      <Box className={classes.leftPart}>
        <CardMedia
          className={classes.photo}
          image={post.author?.avatar}
          title="doctor"
        />
        <Typography
          className={classes.fullName}
          component="p"
          variant="subtitle2"
          gutterBottom
          align="center"
        >
          {post.author?.firstName} {post.author?.lastName}
        </Typography>
        <Typography component="p" variant="body2" gutterBottom align="center">
          {post.author?.mainInstitution.name}
        </Typography>
      </Box>
      <Box className={classes.rightPart}>
        <Box className={classes.chipRoot}>
          <Chip label={post.type.name} size="small" />
          <Chip label={post.direction.name} size="small" color="secondary" />
        </Box>
        <Typography variant="body1" component="p" align="center">
          {post.title}
        </Typography>
      </Box>
    </Card>
  );
};
