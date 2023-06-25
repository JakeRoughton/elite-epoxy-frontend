import React from 'react';
import ReactPlayer from 'react-player'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/joy/Grid';
import { Button, CardActions, Stack, styled, ImageList, ImageListItem } from '@mui/material';

const Item = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomePage = () =>{
    return (
        <>
        <Grid container spacing={2} columns={16} sx={{ flexGrow: 1 }}>
        <h1 id="homeGreeting">Welcome to Elite Epoxy Texas</h1>
      <Box display="grid" container="true" columns={2} gap={2}>
			<br />
      <Stack container spacing={0} direction="column">

      <ImageList sx={{ width: 900, height: 450 }} cols={3} rowHeight={164}>
        <ImageListItem>
          <img
            src="https://i.imgur.com/1ttQIwn.jpg"
            alt="homePageImg"
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>

      <ImageList sx={{ width: 900, height: 450 }} cols={3} rowHeight={164}>
        <ImageListItem>
          <img
            src="https://i.imgur.com/rsD6BuR.jpg"
            alt="homePageImg"
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>

      <ImageList sx={{ width: 900, height: 450 }} cols={3} rowHeight={164}>
        <ImageListItem>
          <img
            src="https://i.imgur.com/rSTW1nA.jpg"
            alt="homePageImg"
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
      </Stack>

    <Stack 
      direction={{xs: 'column'}}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      // justifyContent={'flex-start'}
      // alignItems={'flex-end'}
    >
    <Item>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         Title Something
        </Typography>
        <Typography variant="body2">
        Venmo pabst kale chips la croix neutra yr migas scenester cardigan blackbird spyplane viral eiusmod grailed poutine. Solarpunk consectetur succulents, hoodie bushwick ugh cold-pressed migas celiac coloring book cupping laboris chia. Deserunt narwhal lo-fi, reprehenderit heirloom next level raclette blackbird spyplane man bun portland pork belly occaecat excepteur cillum distillery. Selvage sint lo-fi. Glossier commodo fixie, sustainable tofu keytar flannel raclette whatever chambray keffiyeh af est actually duis.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/blogs">Link to blog</Button>
      </CardActions>
    </Card>
    </Item>

    <Item>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         Something something title
        </Typography>
        <Typography variant="body2">
        Shaman cronut pug ut paleo gentrify helvetica sustainable locavore dreamcatcher banjo live-edge dolore tilde. Roof party DSA meditation, truffaut pinterest chartreuse polaroid four dollar toast +1 normcore proident austin voluptate. Letterpress chartreuse stumptown tempor non fashion axe migas anim sus dolore elit pabst deep v chicharrones. Master cleanse semiotics meh etsy trust fund ugh. Hell of affogato etsy live-edge, dreamcatcher eiusmod yuccie jawn et aliqua.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="blogs">Link to blog</Button>
      </CardActions>
    </Card>
    </Item>

    <Item>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         Something title something
        </Typography>
        <Typography variant="body2">
        Ennui food truck hella proident ut irure. Vice echo park roof party occaecat four loko snackwave portland shabby chic. Skateboard eiusmod lo-fi four dollar toast. Microdosing man bun taxidermy seitan, chambray migas affogato et raclette YOLO ethical jianbing minim fugiat.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="blogs">Link to blog</Button>
      </CardActions>
    </Card>
    </Item>
    </Stack>
  </Box>
</Grid>

        <br />
        <br />
        <br />
        <br />
        <div id="homeVid ">
        <ReactPlayer url="https://youtu.be/PPCLVVRT_qo" width="1240px" height="640px"/>
        </div>
        </>
    )
}

export default HomePage