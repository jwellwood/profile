import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// Internal
import { nav_drawer_list_styles } from './styles';
import { scrollToElement } from 'components/utils/scroller';
import { LanguageContext } from 'context/LanguageContext';
import { nav_data } from 'database';
import NavLanguage from './NavLanguage';

const NavDrawerList = ({ onClose }) => {
  const language = useContext(LanguageContext);
  const classes = nav_drawer_list_styles();

  return (
    <List className={classes.list}>
      {nav_data.map((icon) => (
        <ListItem
          key={icon.text.eng}
          className={classes.listItem}
          onClick={(e) => {
            scrollToElement(icon.scroll);
            onClose();
          }}
        >
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon icon={icon.icon} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={language.language ? icon.text.eng : icon.text.esp}
          />
        </ListItem>
      ))}
      <Divider />
      <NavLanguage />
    </List>
  );
};

export default NavDrawerList;
