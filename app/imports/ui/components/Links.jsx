import React from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';

export default class Links extends React.Component {
  render() {
    const formatPadding = { marginTop: '40px', marginBottom: '40px' };
    return (
      <div className={'links'}>
        <Grid.Row>
          <Header as={'h3'} style={formatPadding}>美波 Official Web Site</Header>
        </Grid.Row>
        <Grid.Row>
          <Button basic color={'grey'} style={formatPadding} fluid>youtube</Button>
        </Grid.Row>
        <Grid.Row>
          <Button basic color={'grey'} style={formatPadding} fluid>Instagram</Button>
        </Grid.Row>
        <Grid.Row>
          <Button basic color={'grey'} style={formatPadding} fluid>Twitter</Button>
        </Grid.Row>
        <Grid.Row>
          <Button basic color={'grey'} style={formatPadding} fluid>TwitCasting</Button>
        </Grid.Row>
      </div>
    );
  }
}
