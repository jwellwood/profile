import React, { Component, Fragment } from 'react';
import { Segment, Button, Modal, Header } from 'semantic-ui-react';

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
          centered
          size="mini"
          open={open}
          onClose={this.close}
          dimmer="blurring"
        >
          <Segment color="blue" inverted attached>
            <Modal.Content>
              <Header as="h5">
                You will be redirected to:
                <p style={{ fontWeight: 'bold' }}>{link}</p>
              </Header>

              <p>Continue?</p>
            </Modal.Content>
          </Segment>
          <Modal.Actions>
            <Button color="black" size="mini" onClick={this.close}>
              No
            </Button>

            <Button color="blue" size="mini">
              <a href={link} style={{ color: '#fff' }}>
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
