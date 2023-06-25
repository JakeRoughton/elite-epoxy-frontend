import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
// import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@mui/icons-material/Facebook';


// const useStyles = makeStyles((theme) => ({
// 	root: {
// 	  "& > *": {
// 		 margin: theme.spacing(1),
// 		 width: theme.spacing(32),
// 		 height: theme.spacing(16)
// 	  }
// 	},
// 	grayPaper: {
// 	  backgroundColor: '#c2c2c2'
// 	},
// 	customBorderRadius: {
// 	  borderRadius: 25
// 	}
//  }));

export default function Contact() {
	// const classes = useStyles();
   return (
      <Box
         sx={{
         	display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 500,
              height: 300,
            },
         }}
      >
      <Paper elevation={18}>
			<h1>Blake Mendoza</h1>
			<h3>Phone: 806-500-3575</h3>
			<h4>Blake.Mendoza@EliteEpoxyTX.com</h4>
			<FacebookIcon color="primary" fontSize="large"/>
      </Paper>
      </Box>
      );
    }