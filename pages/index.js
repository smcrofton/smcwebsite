import * as React from 'react';
import utilStyles from '../styles/utils.module.css'
import authorImage from "../src/static/images/me.jpg";
import linkedInLogo from "../src/static/images/LinkedIn_Logo_initials.png";
import gitHubLogo from "../src/static/images/gitLogo.png";
import Image from "next/image";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Link from '../src/Link';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Stack spacing={4} sx={{ my: 4 }} alignItems="center" divider={<Divider orientation="horizontal" flexItem />}>
        <Stack direction="row" spacing ={2} alignItems="center" justifyContent="space-evenly">
          <Image src={authorImage} className={utilStyles.borderCircle} alt="me.jpg" width={500} height={500} />
            <Stack direction="column" spacing ={1} alignItems="left" justifyContent="space-evenly">
              <Typography variant="h2" component="h1" gutterBottom> 
                Hello, I'm Steve.
              </Typography>
              <Typography variant="h6" component="h1" gutterBottom>
                I'm a recent Computer Science graduate looking to break into a Developer role.
                This is my (pretty basic at the moment) website where I hope to host future projects. 
                For now, heres a few relevant links and contact information.
              </Typography>
            </Stack>
        </Stack>
        <Stack direction="row" spacing ={5} justifyContent="space-evenly" alignItems="flex-start">
          <Box>  
            <Link href="https://github.com/smcrofton">
              <a>
                <Image src={gitHubLogo} alt="gitLogo.png" width={100} height={100} />
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="https://linkedin.com/in/smcrofton">
              <a>
                <Image src={linkedInLogo} alt="linkedInLogo.png" width={100} height={100} />
              </a>
            </Link>
          </Box>
        </Stack>
        <Typography variant="h6" component="h1" gutterBottom>
                smcrofton@hotmail.com
        </Typography>
      </Stack>
    </Container>
  );
}
