import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// MUI
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
// Internal
import { nav_drawer_list_styles } from './styles';
import { LanguageContext } from '../../../context/LanguageContext';

const NavLanguage = () => {
  const language = useContext(LanguageContext);
  const classes = nav_drawer_list_styles();
  return (
    <ListItem className={classes.listItem} onClick={language.toggleLanguage}>
      <ListItemAvatar>
        <Avatar className={classes.avatar}>
          <FontAwesomeIcon icon='language' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={language.language ? 'Español' : 'English'} />
    </ListItem>
  );
};

export default NavLanguage;
