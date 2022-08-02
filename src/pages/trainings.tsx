import React from 'react';
import Head from 'next/head';
import {
  Container,
  Grid
} from '@mui/material';
import TrainingCard from 'components/trainings';

function Trainings(): JSX.Element {
  
  return (
    <>
      <Head>
        <title>Trainings</title>
      </Head>
      <main>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={ 3 }
          >
            <Grid item xs={ 12 }>
              <TrainingCard />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Trainings;
