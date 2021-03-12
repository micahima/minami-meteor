import React from 'react';
import { Grid, Header, Embed } from 'semantic-ui-react';

export default class Videos extends React.Component {
  render() {
    const formatPadding = { marginTop: '20px', marginBottom: '10px' };
    return (
      <Grid centered container className={'movieRow'}>
        <Grid.Row><Header as={'h3'} style={formatPadding}>MOVIE</Header></Grid.Row>
        <Grid.Row>
          <Grid.Column><Embed url="https://www.youtube.com/embed/766qmHTc2ro"/></Grid.Column>
        </Grid.Row>
        <Grid.Row>美波「アメヲマツ、」 Music Video</Grid.Row>
        <Grid.Row>
          <Grid.Column><Embed url="https://www.youtube.com/embed/0YF8vecQWYs"/></Grid.Column>
        </Grid.Row>
        <Grid.Row>美波「カワキヲアメク」 Music Video</Grid.Row>
        <Grid.Row>
          <Grid.Column><Embed url="https://www.youtube.com/embed/HIRiduzNLzQ"/></Grid.Column>
        </Grid.Row>
        <Grid.Row>美波「ホロネス」 Music Video</Grid.Row>
        <Grid.Row>
          <Grid.Column><Embed url="https://www.youtube.com/embed/GQ3V50XoLOM"/></Grid.Column>
        </Grid.Row>
        <Grid.Row>美波「ライラック」 Music Video</Grid.Row>
        <Grid.Row>
          <Grid.Column><Embed url="https://www.youtube.com/embed/jb4ybTQwcdw"/></Grid.Column>
        </Grid.Row>
        <Grid.Row>美波「main actor」 Music Video</Grid.Row>
      </Grid>
    );
  }
}
