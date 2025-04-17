

import Head from 'next/head';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5",}}>

      <Head>
        <title>Thank You</title>
      </Head>
      <Container
        sx={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            textAlign: 'center',
            borderRadius: 3,
            backgroundColor: 'white',
          }}
        >
          <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Your form has been successfully submitted.
          </Typography>
          <Link href="/" passHref>
            <Button variant="contained" color="primary" size="large" style={{backgroundColor : 'purple'}}>
              Back to Home
            </Button>
          </Link>
        </Paper>
      </Container>
    </Box>
    
  );
}
