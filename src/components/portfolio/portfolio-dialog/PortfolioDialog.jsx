import React, { useContext } from 'react';
// MUI
import Zoom from '@material-ui/core/Zoom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// Internal
import PortfolioTech from '../portfolio-tech/PortfolioTech';
import PortfolioImages from '../portfolio-images/PortfolioImages';
import PortfolioLinks from '../portfolio-links/PortfolioLinks';
import Header from '../../utils/headers/Header';
import { dialog_styles } from './styles';
import { LanguageContext } from '../../../context/LanguageContext';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction='up' ref={ref} {...props} />;
});

const PortfolioDialog = ({ children, project }) => {
  const language = useContext(LanguageContext);
  const classes = dialog_styles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const title = language.language ? project.title.eng : project.title.esp;
  const description = language.language
    ? project.description.eng
    : project.description.esp;

  return (
    <React.Fragment>
      <span onClick={handleClickOpen}>{children}</span>
      <Dialog
        scroll='body'
        fullScreen={fullScreen}
        TransitionComponent={Transition}
        maxWidth='sm'
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby='project-title'
        classes={{
          paper: classes.root
        }}
      >
        <DialogTitle id='project-title'>
          <Header>{title}</Header>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogContent>
          <PortfolioTech technologies={project.tech_list} />
        </DialogContent>
        <DialogContent>
          <PortfolioImages
            images={project.screenshots}
            language={language.language}
          />
        </DialogContent>
        <DialogActions>
          <PortfolioLinks handleClose={handleClose} links={project.links} />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default PortfolioDialog;
