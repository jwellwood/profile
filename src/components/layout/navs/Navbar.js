import React, { Component } from 'react';
import { Icon, Menu, Dropdown, Portal, Segment } from 'semantic-ui-react';

const style = {
  borderRadius: '0px',
};

const options = [
  { key: 1, text: 'English', value: 1 },
  { key: 2, text: 'Spanish (coming soon!)', value: 2 },
];

class Navbar extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Menu inverted style={style}>
        <Menu.Item link href="https://www.linkedin.com/in/joe-wellwood/">
          <Icon name="linkedin" />
        </Menu.Item>

        <Menu.Item link href="https://github.com/jwellwood">
          <Icon name="github" />
        </Menu.Item>
        <Portal
          closeOnTriggerClick
          openOnTriggerClick
          trigger={
            <Menu.Item>
              <Icon name="mail" />
            </Menu.Item>
          }
        >
          <Segment
            style={{
              left: 10,
              position: 'fixed',
              top: 25,
              zIndex: 1000,
            }}
          >
            joemadriddev@gmail.com
          </Segment>
        </Portal>

        <Menu.Item position="right">
          <Dropdown
            trigger={<Icon name="language" size="large" />}
            onChange={this.handleChange}
            options={options}
            value={value}
            direction="left"
          />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
