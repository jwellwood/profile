import React, { Component } from 'react';
import { Icon, Menu, Dropdown, Portal, Segment } from 'semantic-ui-react';
import LinkModal from '../links/LinkModal';
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
        <LinkModal link="https://www.linkedin.com/in/joe-wellwood/">
          <Menu.Item link>
            <Icon name="linkedin" />
          </Menu.Item>
        </LinkModal>
        <LinkModal link="https://github.com/jwellwood">
          <Menu.Item link>
            <Icon name="github" />
          </Menu.Item>
        </LinkModal>

        <Portal
          closeOnTriggerClick
          openOnTriggerClick
          trigger={
            <div style={{ cursor: 'pointer' }}>
              <Menu.Item>
                <Icon name="mail" />
              </Menu.Item>
            </div>
          }
        >
          <Segment
            inverted
            color="blue"
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
            trigger={<Icon name="language" size="large" color="blue" />}
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
