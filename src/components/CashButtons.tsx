import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

interface CashButtonsProps {
  onAddCash: (amount: number) => void;
}

// Styled button for the image
const ImageButton = styled(Button)({
  padding: 0,
  minWidth: "120px",
  minHeight: "120px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

// Styled button for the 1000 yen image
const BigImageButton = styled(ImageButton)({
  minWidth: "200px",
  minHeight: "200px",
});

// Styled container for the cash buttons
const CashButtonsContainer = styled(Grid)({
  width: "100%",
  maxWidth: "600px",
});

const CashButtons: React.FC<CashButtonsProps> = ({ onAddCash }) => {
  const [show1000Yen, setShow1000Yen] = useState(true);
  const [show500Yen, setShow500Yen] = useState(true);
  const [show100Yen, setShow100Yen] = useState(Array(4).fill(true));

  const handle1000YenClick = () => {
    onAddCash(1000);
    setShow1000Yen(false);
  };

  const handle500YenClick = () => {
    onAddCash(500);
    setShow500Yen(false);
  };

  const handle100YenClick = (index: number) => {
    onAddCash(100);
    const newShow100Yen = [...show100Yen];
    newShow100Yen[index] = false;
    setShow100Yen(newShow100Yen);
  };

  return (
    <CashButtonsContainer container spacing={2} justifyContent="center">
      {/* Row for 1000 yen */}
      <Grid item xs={12} container justifyContent="center">
        {show1000Yen && (
          <BigImageButton
            onClick={handle1000YenClick}
            style={{ backgroundImage: "url(/1000_yen.png)" }} // Path to the image
          />
        )}
      </Grid>
      {/* Row for 500 yen */}
      <Grid item xs={12} container justifyContent="center">
        {show500Yen && (
          <ImageButton
            onClick={handle500YenClick}
            style={{ backgroundImage: "url(/500_yen.png)" }} // Path to the image
          />
        )}
      </Grid>
      {/* Row for 100 yen - displaying 4 images in a row */}
      <Grid item xs={12}>
        <Grid container spacing={2} justifyContent="center">
          {show100Yen.map((show, index) => (
            <Grid item key={index}>
              {show && (
                <ImageButton
                  onClick={() => handle100YenClick(index)}
                  style={{ backgroundImage: "url(/100_yen.png)" }} // Path to the image
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </CashButtonsContainer>
  );
};

export default CashButtons;
