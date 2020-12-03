import React from 'react';
import { Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IExpert } from '../types';
import { useStyles } from '../styles/ExpertDataCard.styles';

export interface IExpertDataCardProps {
  expert: IExpert;
}

const ExpertDataCard: React.FC<IExpertDataCardProps> = (props) => {
  const { expert } = props;

  const fullName = `${expert.firstName} ${expert.lastName}`;
  const directionName = expert.mainDirection ? expert.mainDirection.name : '';

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Box
          style={{
            height: 210,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Typography variant="h5">{fullName}</Typography>
          <Typography variant="body1">
            Спеціалізація: {directionName}
          </Typography>
          <Typography className={classes.pos} variant="body1" component="h2">
            {expert.mainInstitution?.city?.name}, {expert.mainInstitution?.name}
          </Typography>
          <Typography variant="body1">{expert.qualification}</Typography>
          <Typography variant="body2" color="textSecondary">
            Останній доданий матеріал:
          </Typography>
          <Typography variant="h6" component="p">
            {expert.lastAddedPost?.title}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExpertDataCard;
