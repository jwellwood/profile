import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { scrollToElement } from 'utils/scroller';
import { LanguageContext } from 'context/LanguageContext';
import NavLanguage from './NavLanguage';
import CustomIcon from 'components/icons/CustomIcon';
import { theme } from 'lib/theme/theme';
import { nav_data } from './constants';

interface Props {
  onClose: () => void;
}

const NavDrawerList: React.FC<Props> = ({ onClose }) => {
  const { language } = useContext(LanguageContext);

  return (
    <List sx={{ minWidth: '270px' }}>
      {nav_data.map((icon) => (
        <ListItem
          key={icon.text.en}
          sx={{ cursor: 'pointer' }}
          onClick={(e) => {
            scrollToElement(icon.scroll);
            onClose();
          }}
        >
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: theme.palette.primary.main }}>
              <CustomIcon name={icon.icon} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={language === 'en' ? icon.text.en : icon.text.es}
          />
        </ListItem>
      ))}
      <Divider />
      <NavLanguage />
    </List>
  );
};

export default NavDrawerList;
