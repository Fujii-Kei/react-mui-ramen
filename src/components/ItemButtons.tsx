import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';

interface ItemButtonsProps {
    onPurchase: (amount: number, itemName: string) => void;
    count: number;
}

const ItemButtons: React.FC<ItemButtonsProps> = ({ onPurchase, count }) => {
    return (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Grid container direction="column" alignItems="center" spacing={2}>
                <Grid item>
                    <Typography variant="h3" gutterBottom>
                        食券販売機
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => onPurchase(700, 'ラーメン並')}
                            >
                                ラーメン並<br />700円
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => onPurchase(800, 'ラーメン中')}
                            >
                                ラーメン中<br />800円
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => onPurchase(900, 'ラーメン大')}
                            >
                                ラーメン大<br />900円
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="h1" gutterBottom>
                        {count}円
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ItemButtons;
