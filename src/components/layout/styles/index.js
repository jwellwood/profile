import { colors } from '../../../assets/styles/colors';

export const navBarStyle = {
  borderRadius: '0px',
  backgroundColor: 'transparent'
};

export const linkModalStyles = {
  title: {
    background: colors.mainBlue,
    color: colors.lightBlue
  },
  content: {
    color: colors.secondaryBlue
  },
  link: {
    fontWeight: 'bold'
  },
  button: {
    color: colors.lightBlue,
    background: colors.mainTeal
  }
};

export const emailStyles = {
  icon: {
    cursor: 'pointer'
  },
  message: {
    background: colors.lightBlue,
    color: colors.mainBlue,
    fontWeight: 'bold',
    left: 10,
    position: 'fixed',
    top: 10,
    zIndex: 1000
  },
  copyIcon: {
    background: colors.secondaryBlue,
    color: colors.lightBlue
  },
  copied: {
    color: colors.mainTeal
  }
};

export const curvedWrapperStyles = color => {
  let backgroundCol = colors.mainTeal;
  if (color === 'lightBlue') {
    backgroundCol = colors.lightBlue;
  }
  return {
    title: {
      color: colors.lightBlue,
      textTransform: 'uppercase',
      fontFamily: 'Work Sans ',
      textAlign: 'center'
    },
    wrapper: {
      padding: '1rem',
      margin: '1rem 10px',
      borderRadius: '30% 10% / 40% 80%',
      border: `3px solid ${colors.secondaryBlue}`,
      background: backgroundCol
    }
  };
};

export const squareWrapperStyles = color => {
  let backgroundCol = colors.lightBlue;
  let textCol = colors.mainBlue;
  if (color === 'secondaryBlue') {
    backgroundCol = colors.secondaryBlue;
    textCol = colors.lightBlue;
  }
  return {
    container: {
      borderRadius: '15px',
      border: `2px solid ${colors.secondaryBlue}`,
      background: backgroundCol,
      textAlign: 'center',
      color: textCol
    },
    title: {
      color: textCol,
      textTransform: 'uppercase',
      fontFamily: 'Work Sans ',
      textAlign: 'center',
      marginBottom: '1rem'
    }
  };
};
