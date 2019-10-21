import { colors } from '../../../assets/styles/colors';

export const mainStyles = {
  container: {
    height: '92vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    background: colors.mainBlue
  },
  mainHeader: {
    color: colors.lightBlue,
    fontWeight: 'bold',
    fontSize: '4em',
    marginTop: 'auto',
    fontFamily: 'Work Sans'
  },
  subHeader: {
    marginTop: '1.5em',
    fontFamily: 'Roboto Mono',
    color: colors.lightBlue
  },
  tech: { marginTop: 'auto', bottom: 0 }
};

export const imageStyles = {
  container: {
    margin: '30px'
  },
  image: {
    margin: 'auto',
    border: '3px solid',
    borderColor: colors.lightBlue,
    boxShadow: '1px 6px 47px 31px rgba(24, 145, 172, 1)'
    // -webkit-box-shadow: 1px 6px 47px 31px rgba(24, 145, 172, 1);
    // -moz-box-shadow: 1px 6px 47px 31px rgba(24, 145, 172, 1);
    // box-shadow: 1px 6px 47px 31px rgba(24, 145, 172, 1);
  }
};

export const techStyle = {
  icons: {
    color: colors.lightBlue
  },
  container: {
    border: `1px solid ${colors.lightBlue}`,
    background: colors.secondaryBlue
  }
};
