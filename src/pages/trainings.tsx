import React from 'react';
import Head from 'next/head';
import {
  Container,
  Grid
} from '@mui/material';
import TrainingCard from 'components/trainings';
import { useTraining } from 'hooks/training';

function Trainings(): JSX.Element {
  
  const dummyTraining = useTraining();

  return (
    <>
      <Head>
        <title>Trainings</title>
      </Head>
      <main>
        <Container maxWidth="lg">
          <Grid sx={ { flexGrow: 1 } } container spacing={ 1 }>
            <Grid item xs={ 12 }>
              <Grid container justifyContent="center" spacing={ 1 }>
                { dummyTraining.map(v => (
                  <Grid key={ v.id } item>
                    <TrainingCard
                      title={ v.name }
                      shortDetail={ v.shortDetail }
                    />
                  </Grid>
                )) }
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Trainings;
