import React from 'react';
import Head from 'next/head';
import {
  Box,
  Card,
  Grid
} from '@mui/material';
import CourseCard from 'components/courses';
import { useCourse } from 'hooks/course';

function Courses(): JSX.Element {
  
  const dummyCourse = useCourse();

  return (
    <>
      <Head>
        <title>Courses</title>
      </Head>
      <main>
        <Box sx={ { flexGrow: 1 } }>
          <Grid container spacing={ 1 }>
            {
              dummyCourse.map(v => (
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
                  <CourseCard
                    id={ v.id }
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

export default Courses;
