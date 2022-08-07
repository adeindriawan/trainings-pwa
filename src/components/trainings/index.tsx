/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Typography
} from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import {
  ExpandMore as ExpandMoreIcon,
  Favorite as FavoriteIcon,
  MoreVert as MoreVertIcon,
  Share as ShareIcon
} from '@mui/icons-material';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  // eslint-disable-next-line react/react-in-jsx-scope
  return <IconButton { ...other } />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

// eslint-disable-next-line react/prop-types
function TrainingCard({ title, shortDetail }: { title: string, shortDetail: string}): JSX.Element{
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={ { maxWidth: 345 } }>
      <CardHeader
        avatar={
          <Avatar sx={ { bgcolor: red[500] } } aria-label="recipe">
                R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ title }
        subheader="September 14, 2016"
      />
      <CardMedia
        sx={ {
          height: 0,
          paddingTop: '56.25%' // 16:9
        } }
        image="/static/images/placeholders/covers/1.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          { shortDetail }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={ expanded }
          onClick={ handleExpandClick }
          aria-expanded={ expanded }
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={ expanded } timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add
                saffron and set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large,
                deep skillet over medium-high heat. Add chicken, shrimp
                and chorizo, and cook, stirring occasionally until
                lightly browned, 6 to 8 minutes. Transfer shrimp to a
                large plate and set aside, leaving chicken and chorizo
                in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                onion, salt and pepper, and cook, stirring often until
                thickened and fragrant, about 10 minutes. Add saffron
                broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
          </Typography>
          <Typography paragraph>
                Add rice and stir very gently to distribute. Top with
                artichokes and peppers, and cook without stirring, until
                most of the liquid is absorbed, 15 to 18 minutes. Reduce
                heat to medium-low, add reserved shrimp and mussels,
                tucking them down into the rice, and cook again without
                stirring, until mussels have opened and rice is just
                tender, 5 to 7 minutes more. (Discard any mussels that
                don’t open.)
          </Typography>
          <Typography>
                Set aside off of the heat to let rest for 10 minutes,
                and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default TrainingCard;
