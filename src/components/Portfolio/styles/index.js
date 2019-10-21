import { colors } from '../../../assets/styles/colors';

export const portfolioStyles = {
  section: {
    textAlign: 'center'
  }
};

export const buttonStyles = {
  linkButton: {
    background: colors.mainTeal,
    color: colors.lightBlue
  },
  codeButton: {
    background: colors.lightBlue,
    color: colors.secondaryBlue
  }
};

export const imageStyles = {
  toggleButton: {
    margin: '10px auto'
  },
  images: {
    margin: 'auto',
    textAlign: 'center'
  }
};

export const modalContentStyles = {
  header: {
    margin: '10px auto',
    color: colors.lightBlue
  },
  headerMain: {
    margin: '10px auto',
    color: colors.mainBlue
  },
  mainImage: {
    border: `3px solid ${colors.mainBlue}`,
    background: colors.mainTeal,
    margin: 'auto',
    padding: '10px'
  },
  icon: {
    border: `2px solid ${colors.mainTeal}`,
    background: colors.lightBlue,
    color: colors.mainTeal
  },
  iconMain: {
    border: `2px solid ${colors.mainBlue}`,
    background: colors.secondaryBlue,
    color: colors.lightBlue
  },
  modalHeader: {
    fontFamily: 'Work Sans',
    background: colors.mainBlue,
    color: colors.lightBlue
  },
  mainContent: {
    color: colors.mainBlue
  }
};

export const techStyles = {
  container: {
    background: colors.lightBlue,
    color: colors.mainBlue,
    border: `1px solid ${colors.mainBlue}`,
    margin: '10px auto'
  },
  list: {
    fontFamily: 'Roboto Mono'
  },
  item: {
    fontSize: '10px',
    fontWeight: 'bold',
    color: colors.secondaryBlue
  }
};
