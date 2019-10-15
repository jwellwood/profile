import React from 'react';
import PropTypes from 'prop-types';
import { Header, Image, Segment } from 'semantic-ui-react';
import Technologies from './Technologies';
import profile from '../../../assets/images/profile.jpg';
import ResponsiveContainer from '../../layout/wrappers/ResponsiveContainer';
import styles from '../../../assets/styles/Image.module.css';
const MainHeader = ({ language }) => (
  <ResponsiveContainer>
    <Segment
      vertical
      inverted
      style={{
        height: '90vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header
        as="h1"
        content=".j.w"
        inverted
        style={{
          fontWeight: 'bold',
          fontSize: '4em',
          marginTop: 'auto',
          fontFamily: 'Work Sans',
        }}
      />

      <div style={{ margin: '30px' }}>
        <Image
          src={profile}
          size="small"
          circular
          style={{
            margin: 'auto',
            border: '3px solid #128172',
          }}
          className={styles.image}
        />
      </div>
      <Header
        as="h3"
        content={
          language === 'en' ? '{ web developer }' : '{ programador web }'
        }
        inverted
        style={{
          fontWeight: 'normal',
          marginTop: '1.5em',
          fontFamily: 'Roboto Mono',
        }}
      />
      <div style={{ marginTop: 'auto' }}>
        <Technologies />
      </div>
    </Segment>
  </ResponsiveContainer>
);

MainHeader.propTypes = {
  mobile: PropTypes.bool,
};

export default MainHeader;
