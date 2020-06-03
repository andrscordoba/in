import React from 'react';
import { Resume as ResumeType, ResumeProvider } from 'react-vitae';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { TopBar } from './components/topbar';
import { LeftBar } from './components/leftbar';
import { RightBar } from './components/rightbar';
import { Footer } from './components/footer';

interface ResumeProps {
  resume: ResumeType;
}

export const Resume = ({ resume }: ResumeProps): React.ReactElement<ResumeProps> => (
  <ResumeProvider resume={resume}>
    <TopBar />
    <Container fixed>
      <Grid container justify="center" spacing={0}>
        <LeftBar />
        <RightBar />
      </Grid>
    </Container>
    <Footer />
  </ResumeProvider>
);
