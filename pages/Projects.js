import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import styles from '@/styles/Projects.module.css'
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

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <div className={styles.header}>
        <h2>  Previous Projects </h2>
        </div>
        <br></br>
      <Grid 
      container
      spacing={1}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '20vh' }}>
        <Grid xs={5}>
            <div className={styles.card}>
            <Link href="Portfolio"><h3> Portfolio Site</h3> </Link>
            <p> NextJs | HTML | CSS </p>
            <div className={styles.badge}>
                    <Badge badgeContent={0} color= "primary">
                    <Link href="."
                    target="_blank"> 
                        <GitHubIcon color="white" /> 
                    </Link>
                    </Badge>
                </div>
            </div>
        </Grid>
        <Grid xs={5}>
          <div className={styles.card}>
            <Link href= "/projects/SCBD"><h3> Shibuya Crossing Object Detection </h3> </Link>
            <p> Python | Pytorch | MMDetection </p>
            <div className={styles.badge}>
                    <Badge badgeContent={0} color= "primary">
                    <Link href="https://github.com/KabinAnalyzes/Shinjuku-ObjectDetection" target="_blank">
                         <GitHubIcon color="white" /> 
                    </Link>
                    </Badge>
                </div>
          </div>
        </Grid>
        <Grid xs={5}>
            <div className={styles.card}>
                <Link href="/projects/petalplanner"><h3> Petal Planner</h3> </Link>
                <p> Python | Flask | HTML | CSS | SQLite </p>
                <div className={styles.badge}>
                    <Badge badgeContent={0} color= "primary">
                    <Link href="https://github.com/KabinAnalyzes/PetalPlanner" target="_blank">
                         <GitHubIcon color="white" /> 
                    </Link>
                    </Badge>
                </div>
            </div>
        </Grid>
        <Grid xs={5}>
            <div className={styles.card}>
            <Link href="/projects/SpotifyTop"><h3> Spotify Top Songs Web Application</h3></Link>
            <p> Python | Flask | HTML | CSS </p>
            <div className={styles.badge}>
                    <Badge badgeContent={0} color= "primary">
                    <Link href="https://github.com/KabinAnalyzes/SpotipyV2---Git" target="_blank">
                         <GitHubIcon color="white" /> 
                    </Link>
                    </Badge>
                </div>
            </div>
        </Grid>
        <Grid xs={5}>
            <div className={styles.card}>
            <Link href="lolreg"><h3> League of Legends Linear Regression</h3> </Link>
            <p> R </p>
            <div className={styles.badge}>
                    <Badge badgeContent={0} color= "primary">
                    <Link href="https://github.com/KabinAnalyzes/Machine-Learning-Portfolio/tree/main/LeagueOfLegendsRegression"
                    target="_blank"> 
                        <GitHubIcon color="white" /> 
                    </Link>
                    </Badge>
                </div>
            </div>
        </Grid>
      </Grid>
    </Box>
    
  );
}
