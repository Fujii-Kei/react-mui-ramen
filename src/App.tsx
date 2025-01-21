import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Bought from './components/bought';
import CashButtons from './components/CashButtons';

function App() {
  const [count, setCount] = useState(0)
  const [alertMessage, setAlertMessage] = useState('')
  const [purchasedItems, setPurchasedItems] = useState<string[]>([]); // Example items

  const handlePurchase = (amount: number, itemName: string) => {
    if (count < amount) {
      setAlertMessage(`お金が足りません: ${itemName}の購入には${amount}円が必要です。`)
    } else {
      setCount((prevCount) => prevCount - amount)
      setAlertMessage('') // Clear alert message on successful purchase
      setPurchasedItems((prevItems) => [...prevItems, itemName])
    }
  }

  const handleAddCash = (amount: number) => {
    setCount((prevCount) => prevCount + amount);
  };

  return (
    <Container maxWidth="lg">
      {alertMessage && (
        <Alert severity="warning" onClose={() => setAlertMessage('')}>
          {alertMessage}
        </Alert>
      )}
      <Grid container spacing={2}>
        <Grid item xs={8}>
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
                      onClick={() => handlePurchase(700, 'ラーメン並')}
                    >
                      ラーメン並<br/>700円
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handlePurchase(800, 'ラーメン中')}
                    >
                      ラーメン中<br/>800円
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handlePurchase(900, 'ラーメン大')}
                    >
                      ラーメン大<br/>900円
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
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h5" gutterBottom>
              現金を追加
            </Typography>
            <CashButtons onAddCash={handleAddCash} />
          </Paper>
        </Grid>
      </Grid>
      <Bought purchasedItems={purchasedItems} />
    </Container>
  )
}

export default App
