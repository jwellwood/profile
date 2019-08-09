import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Responsive, Sidebar } from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  render() {
    const { children } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

const MobileContainer = ({ children }) => {
  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      {children}
    </Responsive>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer mobile>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
