import React, { Component, Fragment } from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';

class LinkModal extends Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    const { children, link } = this.props;
    return (
      <Fragment>
        <div onClick={this.show}>{children}</div>

        <Modal
          basic
          centered={false}
          size="tiny"
          open={open}
          onClose={this.close}
          dimmer="blurring"
        >
          <Modal.Content>
            <Header as="h5" color="green">
              This link will redirect you to:{' '}
              <p style={{ fontWeight: 'bold' }}>{link}</p>
            </Header>

            <p>Continue?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              No
            </Button>

            <Button positive>
              <a href={link} style={{ color: 'black' }}>
                Yes
              </a>
            </Button>
          </Modal.Actions>
        </Modal>
      </Fragment>
    );
  }
}

export default LinkModal;
