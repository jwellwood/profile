import React from 'react';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import CustomTypography from 'components/typography/CustomTypography';
import SubheaderList from 'components/typography/SubHeaderList';
import { theme } from 'lib/theme/theme';
import CustomPaper from 'components/layout/CustomPaper';
import CustomIcon from 'components/icons/CustomIcon';

interface Props {
  data: {
    icon?: string;
    title: string;
    text: string;
  }[];
}

const CustomList: React.FC<Props> = ({ data }) => {
  return (
    <CustomPaper>
      <List>
        {data.map((item) => (
          <ListItem key={item.text}>
            {item.icon && (
              <ListItemAvatar>
                <Avatar
                  sx={{
                    border: `${theme.palette.primary.main} 2px solid`,
                    background: theme.palette.primary.light,
                  }}
                >
                  <CustomIcon name={item.icon} />
                </Avatar>
              </ListItemAvatar>
            )}
            <ListItemText
              primary={<SubheaderList>{item.title}</SubheaderList>}
              secondary={<CustomTypography>{item.text}</CustomTypography>}
            />
          </ListItem>
        ))}
      </List>
    </CustomPaper>
  );
};

export default CustomList;
