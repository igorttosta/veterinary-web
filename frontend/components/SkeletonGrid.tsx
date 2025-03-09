"use client";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

export default function SkeletonGrid() {
    return (
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <Skeleton height={50} />
            </Grid>
            <Grid item xs={0.8} />
            <Grid item xs={3.5}>
                <Skeleton height={250} />
            </Grid>
            <Grid item xs={3.5}>
                <Skeleton height={250} />
            </Grid>
            <Grid item xs={3.5}>
                <Skeleton height={250} />
            </Grid>
        </Grid>
    );
}
