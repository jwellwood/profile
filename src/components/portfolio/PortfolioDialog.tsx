import React, { useContext, ReactNode } from 'react';
// MUI
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { TransitionProps } from '@material-ui/core/transitions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// Internal
import PortfolioTech from './PortfolioTech';
import PortfolioImages from './PortfolioImages';
import PortfolioLinks from './PortfolioLinks';
import Header from '../ui/Header';
import { LanguageContext } from 'context/LanguageContext';

import { IProjectData } from 'database/types';
import { dialog_styles } from './styles';
import { Slide } from '@material-ui/core';

interface Props {
  children: ReactNode;
  project: IProjectData;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const PortfolioDialog: React.FC<Props> = ({ children, project }) => {
  const classes = dialog_styles();
  const theme = useTheme();

  const language = useContext(LanguageContext);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const title: string = language.language
    ? project.title.eng
    : project.title.esp;
  const description: string = language.language
    ? project.description.eng
    : project.description.esp;

  return (
    <>
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
          paper: classes.root,
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
            language={language.language!}
          />
        </DialogContent>
        <DialogActions>
          <PortfolioLinks handleClose={handleClose} links={project.links} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PortfolioDialog;
