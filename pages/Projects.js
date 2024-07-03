import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  styles  from '@/styles/Projects.module.css'
import Badge from '@mui/material/Badge';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  


const project1 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          December 2023
        </Typography>
        <Typography variant="h5" component="div">
          Give me Some Credit Model Building
        </Typography>
        <Typography sx={{ mb: 1.5 }} >
          Python | SKLearn
        </Typography>
        <Typography variant="body2">
          Data Feature Cleaning & Engineering | Model Building
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link href="projects/Portfolio"><Button>Learn More</Button></Link>
        <Button>
          <Link href="https://github.com/KabinAnalyzes/GiveMeSomeCredit"target="_blank"> 
          <Badge badgeContent={0} color= "primary">
                Github  <GitHubIcon /> 
          </Badge>
          </Link>
          </Button>
      </CardActions>
    </React.Fragment>
  );

  const project2 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}  gutterBottom>
          June - July 2023
        </Typography>
        <Typography variant="h5" component="div">
          Object Detection: Shibuya Crossing Pedistrian Counter
        </Typography>
        <Typography sx={{ mb: 1.5 }} >
            Python | Pytorch | MMDetection
        </Typography>
        <Typography variant="body2">
            Object Detection Project to detect and count pedestrians crossing the Shibuya Crossing.
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link href="projects/SCBD"><Button>Learn More</Button></Link>
        <Button>
          <Link href="https://github.com/KabinAnalyzes/Shinjuku-ObjectDetection"target="_blank"> 
          <Badge badgeContent={0} color= "primary">
                Github  <GitHubIcon /> 
          </Badge>
          </Link>
          </Button>
      </CardActions>
    </React.Fragment>
  );

  const project3 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}  gutterBottom>
          May - June 2023
        </Typography>
        <Typography variant="h5" component="div">
          Petal Planner
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
            Python | Flask | HTML | CSS | SQLite
        </Typography>
        <Typography variant="body2">
            Petal Planner is a web application that allows users motivate themselves and track their progress towards their goals.
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link href="projects/petalplanner"><Button>Learn More</Button></Link>
        <Button>
          <Link href="https://github.com/KabinAnalyzes/PetalPlanner"target="_blank"> 
          <Badge badgeContent={0} color= "primary">
                Github  <GitHubIcon /> 
          </Badge>
          </Link>
          </Button>
      </CardActions>
    </React.Fragment>
  );


  const project4 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          March-May 2023
        </Typography>
        <Typography variant="h5" component="div">
          Spotify Top Songs Web Application
        </Typography>
        <Typography sx={{ mb: 1.5 }} >
            Python | Flask | HTML | CSS
        </Typography>
        <Typography variant="body2">
            Spotify Top Songs Web Application that allows users and view their top songs over different time periods and save them as playlists.
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link href="projects/SpotifyTop"><Button>Learn More</Button></Link>
        <Button>
          <Link href="https://github.com/KabinAnalyzes/SpotipyV2---Git"target="_blank"> 
          <Badge badgeContent={0} color= "primary">
                Github  <GitHubIcon /> 
          </Badge>
          </Link>
          </Button>
      </CardActions>
    </React.Fragment>
  );

  const project5 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}gutterBottom>
          May 2022
        </Typography>
        <Typography variant="h5" component="div">
          League of Legends Linear Regression
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          R
        </Typography>
        <Typography variant="body2">
          League of Legends Linear Regression Project using R using Statistical Analysis, Tests, and Visualizations
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="projects/lolreg"><Button>Learn More</Button></Link>
        <Button>
          <Link href="https://github.com/KabinAnalyzes/Machine-Learning-Portfolio/tree/main/LeagueOfLegendsRegression"target="_blank"> 
          <Badge badgeContent={0} color= "primary">
                Github  <GitHubIcon /> 
          </Badge>
          </Link>
          </Button>
      </CardActions>
    </React.Fragment>
  );

  

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        
        <div className={styles.project_card}>
        <div className={styles.header}>
            <h2>  Previous Projects </h2>
        </div>
      <Grid 
      container
      spacing={1}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '20vh' }}>
        <Grid xs={5}>
            <Card 
            sx={{backgroundColor: "#212529", color: "white", borderRadius: "15px"}}>{project1}</Card>
        </Grid>
        <Grid xs={5}>
            <Card 
            sx={{backgroundColor: "#212529", color: "white", borderRadius: "15px"}}>{project2}</Card>
        </Grid>
        <Grid xs={5}>
            <Card 
            sx={{backgroundColor: "#212529", color: "white", borderRadius: "15px"}}>{project3}</Card>
        </Grid>
        <Grid xs={5}>
            <Card 
            sx={{backgroundColor: "#212529", color: "white", borderRadius: "15px"}}>{project4}</Card>
        </Grid>
        <Grid xs={5}>
            <Card 
            sx={{backgroundColor: "#212529", color: "white", borderRadius: "15px"}}>{project5}</Card>
        </Grid>
      </Grid>
        </div>
    </Box>
  );
}