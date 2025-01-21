import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

interface CashButtonsProps {
    onAddCash: (amount: number) => void;
}

const CashButtons: React.FC<CashButtonsProps> = ({ onAddCash }) => {
    const cashAmounts = [1000, 500, 100]; // Cash amounts to display

    return (
        <Grid container spacing={2} justifyContent="center">
            {cashAmounts.map((amount) => (
                <Grid item key={amount}>
                    <Button variant="outlined" onClick={() => onAddCash(amount)}>
                        現金{amount}円
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default CashButtons; 