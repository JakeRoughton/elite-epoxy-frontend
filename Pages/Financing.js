import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Grid from '@mui/material/Grid';
// import FolderIcon from '@mui/icons-material/Folder';


// const Demo = styled('div')(({ theme }) => ({
//     backgroundColor: theme.palette.background.paper,
//   }));
  
//   export default function InteractiveList() {
//     const [dense, setDense] = React.useState(false);
//     const [secondary, setSecondary] = React.useState(false);
//   }

export default function Financing() {
    return (
        <div id="financingDiv">
            <img
            className="financingImg"
            src="https://i.imgur.com/PsRIiXk.jpg"
            alt="financingImg"
            loading="lazy"
          />
        <h1>Financing something something</h1>
        <p>Offer customers affordable monthly payments</p>
	    <br />
        <Button variant="contained">Request a finance quote</Button>
        <br />
        <br />
        <div id="financingDivTwo">
        <div>
            <h2>Financing stuff</h2>
            <p>We finance you</p>
            </div>
        <div>
            <h2>Financing Financing</h2>
            <p>Stuff about saving money</p>
        </div>
        <div>
            <h2>More financing</h2>
            <p>You get what you want NOW</p>
        </div>
        </div>
        <br />
        <br />
        <br />
            <h1 id="financingTrust"> Why people trust our financing</h1>
        <div id="financingDivThree">
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.imgur.com/FIfw90a.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Save Money
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You save money with flexible payments
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.imgur.com/FIfw90a.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Save Money
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You save money with flexible payments
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.imgur.com/FIfw90a.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Save Money
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You save money with flexible payments
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>
        </div>
        <br />
        <br />
        <br />
        <div>
            <h1>How it works!</h1>
        {/* <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid> */}
        </div>

        </div>
    )
}