import React from 'react';
import { Image } from 'semantic-ui-react';

export default class LogoRow extends React.Component {
  render() {
    return (
      <Image
        src="https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/278619/44ad8d7ef62ca48108a22d9506324160_e5154ca6ec7fcdb959b7953cc35225f9.png?height=192"
        alt="美波" className={'logo'}/>
    );
  }
}
