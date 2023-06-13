import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Grid, useMediaQuery } from '@mui/material';
import PortfolioDialog from './PortfolioDialog';

interface Props {
  data: {
    name: string;
    tagline: string;
    description: string;
    image: string;
    link: string;
    github: string;
  }[];
}

export const PortfolioGrid: React.FC<Props> = ({ data }) => {
  const matches = useMediaQuery('(min-width:500px)');
  const cols = matches ? 2 : 1;
  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12} sm={8}>
        <ImageList cols={cols} rowHeight={220}>
          {data.map((item) => (
            <PortfolioDialog key={item.name} project={item}>
              <ImageListItem>
                <img src={item.image} alt={item.name} loading='lazy' />
                <ImageListItemBar title={item.name} subtitle={item.tagline} />
              </ImageListItem>
            </PortfolioDialog>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
};

export default PortfolioGrid;
