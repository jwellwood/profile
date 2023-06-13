import React, { useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { LanguageContext } from 'context/LanguageContext';
import CustomIcon from 'components/icons/CustomIcon';
import { theme } from 'lib/theme/theme';
import { AppIcons } from 'constants/icon-names';

const NavLanguage: React.FC = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <ListItem onClick={toggleLanguage} sx={{ cursor: 'pointer' }}>
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: theme.palette.primary.main }}>
          <CustomIcon name={AppIcons.LANGUAGE} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={language === 'es' ? 'Español' : 'English'} />
    </ListItem>
  );
};

export default NavLanguage;
