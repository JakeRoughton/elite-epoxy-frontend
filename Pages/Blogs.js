import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Blogs = () =>{
	return (
	<>
   <h1>Poopy</h1>
   <Box display="grid" container="true" columns={2} gap={2}>
      <Stack
      direction={{ xs: 'column'}}>
   <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         Title Something
        </Typography>
        <Typography variant="body2">
        Roof party listicle offal viral non, chillwave authentic. Hella truffaut artisan, marxism post-ironic man braid shabby chic raclette air plant seitan letterpress listicle neutra. Organic live-edge yes plz ascot readymade consectetur commodo in photo booth VHS. Pork belly next level offal typewriter prism, master cleanse squid 3 wolf moon locavore irony tempor bitters four dollar toast.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/blogs">Link to blog</Button>
      </CardActions>
    </Card>
    </Stack>
    <br />
    <Stack>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         Something title title
        </Typography>
        <Typography variant="body2">
        Synth labore banh mi, taxidermy cillum squid meh mustache ex franzen neutral milk hotel. Godard gatekeep pug neutra marfa fashion axe, vaporware yes plz XOXO taiyaki hoodie ethical kogi flexitarian. Succulents brunch veniam, lumbersexual crucifix cillum neutral milk hotel selfies trust fund before they sold out prism waistcoat. Pariatur aute gluten-free etsy mlkshk. Hoodie neutral milk hotel tote bag distillery, kinfolk microdosing blue bottle brunch vibecession asymmetrical flexitarian narwhal sunt mlkshk direct trade. Man bun tumeric palo santo flexitarian, commodo snackwave selvage crucifix la croix mlkshk.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/blogs">Link to blog</Button>
      </CardActions>
    </Card>
    </Stack>
    <br />
    <Stack>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         Something title title
        </Typography>
        <Typography variant="body2">
        Aliqua copper mug shoreditch green juice glossier iPhone plaid hot chicken typewriter waistcoat 3 wolf moon authentic. 3 wolf moon wayfarers neutra, four dollar toast exercitation tacos sartorial echo park pabst actually viral ad authentic bushwick health goth. 8-bit raw denim pok pok, hella jawn beard thundercats tumeric vinyl heirloom post-ironic. Pok pok aute gluten-free roof party dolore, selfies four dollar toast drinking vinegar try-hard big mood eiusmod tattooed. Adipisicing aliquip 8-bit celiac tumblr unicorn +1 laboris enim laborum ut.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/blogs">Link to blog</Button>
      </CardActions>
    </Card>
    </Stack>
    </Box>
	</>
	)
}

export default Blogs