import * as React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Link from '../../src/Link'

export default function Index() {
    return (
        <Container maxWidth="lg">
            <Typography variant="h2" component="h1" gutterBottom>
                Test
            </Typography>
            <Link href="/">
                <a>
                    <Typography>
                        Return Home
                    </Typography>
                </a>
            </Link>
        </Container>
    );
}