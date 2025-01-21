import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

interface CashButtonsProps {
    onAddCash: (amount: number) => void;
}

// Styled button for the image
const ImageButton = styled(Button)({
    padding: 0,
    minWidth: '120px',
    minHeight: '120px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
});

// Styled button for the 1000 yen image
const BigImageButton = styled(ImageButton)({
    minWidth: '200px',
    minHeight: '200px',
});

// Styled container for the cash buttons
const CashButtonsContainer = styled(Grid)({
    width: '100%',
    maxWidth: '600px',
});

const CashButtons: React.FC<CashButtonsProps> = ({ onAddCash }) => {
    return (
        <CashButtonsContainer container spacing={2} justifyContent="center">
            {/* Row for 1000 yen */}
            <Grid item xs={12} container justifyContent="center">
                <BigImageButton
                    onClick={() => onAddCash(1000)}
                    style={{ backgroundImage: 'url(/1000_yen.png)' }} // Path to the image
                />
            </Grid>
            {/* Row for 500 yen */}
            <Grid item xs={12} container justifyContent="center">
                <ImageButton
                    onClick={() => onAddCash(500)}
                    style={{ backgroundImage: 'url(/500_yen.png)' }} // Path to the image
                />
            </Grid>
            {/* Row for 100 yen - displaying 4 images in a row */}
            <Grid item xs={12}>
                <Grid container spacing={2} justifyContent="center">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Grid item key={index}>
                            <ImageButton
                                onClick={() => onAddCash(100)}
                                style={{ backgroundImage: 'url(/100_yen.png)' }} // Path to the image
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </CashButtonsContainer>
    );
};

export default CashButtons; 