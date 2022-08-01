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

export default function RecipePage({ recipes, title }) {

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(recipes)
  if (!recipes.length) {
    return <h3>No Recipes Yet!</h3>
  }

  function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
  }
  //This toBase64 function will take the img data that was deconstructed down to 64bit code from Multer and convert it back so that it can render the image on the screen. If using the express route to do this, the picture data is in the field that it was called. In our case picture, then data which is a subfield holding all the data of picture, then data again where there is the 64bit code being held in a large array. In short too acess the code it will be picture.data.data (Refer to line 73)
  return (
    <div>
      {recipes && recipes.map((recipe) => (
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Test"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={`data:image/png;base64,${toBase64(recipe.picture.data.data)}`}
              alt="Paella dish"
            />
            {/* <img alt="Pictur" src={`data:image/png;base64,${toBase64(recipe.picture.data.data)}`} /> */}

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Test card for the MUI Card
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
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method</Typography>
                <Typography paragraph>
                  {recipe.equipment}
                </Typography>
                <Typography paragraph>
                  {recipe.ingredients}
                </Typography>
                <Typography paragraph>
                  {recipe.instructions}
                </Typography>

              </CardContent>
            </Collapse>
          </Card>
        </div>
      ))}
    </div>
  );
}



// export default RecipePage