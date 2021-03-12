import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class MenuRow extends React.Component {
  render() {
    return (
      <Menu borderless className={'menuRow'}>
        <Menu.Item active link>HOME</Menu.Item>
        <Menu.Item link>LIVE SCHEDULE</Menu.Item>
        <Menu.Item link>BIOGRAPHY</Menu.Item>
        <Menu.Item link>DISCOGRAPHY</Menu.Item>
        <Menu.Item link>GOODS STORE</Menu.Item>
        <Menu.Item link>CONTACT</Menu.Item>
      </Menu>
    );
  }
}
