import React from 'react';
import { Image } from 'semantic-ui-react';

export default class BannerRow extends React.Component {
  render() {
    return (
      <Image
        src="https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/278619/a5e5924b5a32c50ae50a861f2b847c35_df02426fc145c195684989859a82a971.png"
        fluid
        className={'banner'}/>
    );
  }
}
