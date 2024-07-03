import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#212529',
        zIndex: 1,
        opacity: 1,
          }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{ backgroundColor: '#212529'}}
      >
        <BottomNavigationAction label="Github" 
            icon={<GitHubIcon style={{color: 'white' }}/>}  
            style={{ color: 'white'}} 
            href="https://github.com/KabinAnalyzes"
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Recommended for security reasons
        />
        <BottomNavigationAction label="LinkedIn" 
            icon={<LinkedInIcon style={{color: 'white' }}/>} 
            style={{ color: 'white'}} 
            href="https://www.linkedin.com/in/kevin-loun/"
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Recommended for security reasons
        />
        <BottomNavigationAction label="Email" 
            icon={<EmailIcon style={{color: 'white' }} />}  
            style={{ color: 'white'}}
            href="https://github.com/KabinAnalyzes"
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Recommended for security reasons
        />
      </BottomNavigation>
    </Box>
  );
}
