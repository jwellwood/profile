import React, { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Header from 'components/typography/Header';
import { IProject } from 'modules/projects/types';
import PortfolioLinks from './PortfolioLinks';
import Image from 'components/images/Image';
import Grid from '@mui/material/Grid';
import './styles.css';

interface Props {
  children: ReactNode;
  project: IProject;
}

const PortfolioDialog: React.FC<Props> = ({ children, project }) => {
  const { name, description, link, github, image } = project;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <span onClick={handleClickOpen} className='dialog-wrapper'>
        {children}
      </span>
      <Dialog
        scroll='body'
        maxWidth='sm'
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby='project-title'
      >
        <DialogTitle id='project-title'>
          <Header>{name}</Header>
        </DialogTitle>
        <DialogContent>
          <Grid container justifyContent='center'>
            <Grid item xs={12} sm={6}>
              <Image image={image} alt='project image' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DialogContentText>{description}</DialogContentText>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <PortfolioLinks
            handleClose={handleClose}
            link={link}
            github={github}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PortfolioDialog;
