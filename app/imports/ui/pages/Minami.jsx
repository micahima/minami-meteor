import React from 'react';
import { Grid, Container, Divider } from 'semantic-ui-react';
import LogoRow from '../components/LogoRow';
import MenuRow from '../components/MenuRow';
import BannerRow from '../components/BannerRow';
import Links from '../components/Links';
import Tours from '../components/Tours';
import Videos from '../components/Videos';
import FooterRow from '../components/FooterRow';

export default class Minami extends React.Component {

  render() {
    return (
      <div>
        <Grid centered container>
          <Grid.Row><LogoRow/></Grid.Row>
          <Grid.Row><MenuRow/></Grid.Row>
        </Grid>
        <BannerRow/>
        <Container className={'divider'}/>
        <Grid centered container>
          <Links/>
        </Grid>
        <Container className={'divider'}/>
        <Tours/>
        <Container className={'divider'}/>
        <Videos/>
        <Divider/>
        <Grid centered container>
          <Grid.Row><FooterRow/></Grid.Row>
        </Grid>
      </div>
    );
  }
}
