import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));




return (
  <div>
    <h3>{title}</h3>
    {recipes && recipes.map((recipe) => (
      <div>
        <p>{recipe._id}</p>
        <p>{recipe.recipeName}</p>
        <p>Created by: {recipe.username}</p>
        <p>Ingredients List {recipe.ingredients} </p>
        <p>{recipe.cookingTime} </p>
        <p>Instructions {recipe.instructions} </p>
        <p>Equipment {recipe.equipment}</p>
        <img src={recipe.picture} alt="Recipe img">
        </img>
      </div>
    ))}
  </div>
)