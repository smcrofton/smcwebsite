import * as React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Link from '../../src/Link'   
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

export default function Index() {
    return (
        <Container maxWidth="lg">
            <Box sx={{my: 4}}>
            <Stack direction="column" spacing ={2} alignItems="center" justifyContent="space-evenly">
                <Box>
                    <Button fullWidth={{bool: true}} >
                        Start A Movie Bracket
                    </Button>
                </Box>
                <Box>
                    <Link href="/">
                        <a>
                            <Typography >
                                Return Home
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>
            </Box>
        </Container>
    );
}