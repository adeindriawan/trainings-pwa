import React from 'react';
import Head from 'next/head';
import {
  Box,
  Card,
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
        <Box sx={ { flexGrow: 1 } }>
          <Grid container spacing={ 1 }>
            {
              dummyTraining.map(v => (
                <Grid
                  item
                  xs={ 12 }
                  md={ 4 }
                  key={ v.id }
                  component={ Card }
                  sx={ {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  } }
                >
                  <TrainingCard
                    title={ v.name }
                    shortDetail={ v.shortDetail }
                  />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </main>
    </>
  );
}

export default Trainings;
