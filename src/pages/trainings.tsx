import React from 'react';

import {
  Container,
  Grid
} from '@mui/material';
import TrainingCard from 'components/trainings';

function Trainings(): JSX.Element {
  
  return (
    <>
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
    </>
  );
}

export default Trainings;
