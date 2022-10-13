import { Grid, Skeleton } from '@mui/material';
import { FC, useId } from 'react';

interface IProps {
    numberIterations?: number;
}

export const FullSkeleton: FC<IProps> = ({ numberIterations = 3 }) => {
  const reactId = useId();
  const iterations = [...Array(numberIterations)];
  
  return (
    <Grid container spacing={4} display="flex" justifyContent="center" >
        {
            iterations.map((_, i) => (<SkeletonItem key={`${reactId}${i}`}/>))
        }
    </Grid>
  )
};


export const SkeletonItem = () => (
    <Grid item xs={8} sm={4} marginBottom={2}>
        <Skeleton variant="rectangular" height={118} />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
    </Grid>
)