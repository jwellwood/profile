import { colors } from '../../../assets/styles/colors';

export const styles = {
  container: {
    margin: 'auto'
  },
  icon: {
    color: colors.lightBlue,
    background: colors.secondaryBlue,
    margin: 'auto'
  },
  column: {
    margin: 'auto',
    alignItems: 'center'
  },
  message: {
    width: '100%',
    background: colors.lightBlue,
    color: colors.mainBlue,
    fontWeight: 'bold',
    left: '25%',
    position: 'fixed',
    bottom: 10,
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

export const emailStyles = {
  message: {
    width: '100%',
    background: colors.lightBlue,
    color: colors.mainBlue,
    fontWeight: 'bold',
    left: '25%',
    position: 'fixed',
    bottom: 10,
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

export const statementStyles = {
  container: {
    margin: '1.5rem auto',
    textAlign: 'center'
  },
  text: {
    margin: '3rem auto',
    fontSize: '2.5rem',
    width: '75%'
  }
};

export const techStyles = {
  container: {
    background: colors.secondaryBlue,
    color: colors.lightBlue,
    border: `1px solid ${colors.mainBlue}`,
    margin: 'auto',
    textAlign: 'center',
    width: '100%',
    padding: '5px'
  },
  item: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: colors.lightBlue,
    fontFamily: 'Roboto Mono'
  }
};
