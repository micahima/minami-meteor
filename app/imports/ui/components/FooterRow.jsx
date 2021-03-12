import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default class FooterRow extends React.Component {
  render() {
    const formatPadding = { marginBottom: '10px', fontSize: '14px' };
    return (
      <Grid.Row><Header as={'h3'} style={formatPadding} color={'grey'}>© Water Reflection</Header></Grid.Row>
    );
  }
}
