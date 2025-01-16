import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


function App() {
  const [count, setCount] = useState(0)
  const [alertMessage, setAlertMessage] = useState('')

  const handlePurchase = (amount: number, itemName: string) => {
    if (count < amount) {
      setAlertMessage(`お金が足りません: ${itemName}の購入には${amount}円が必要です。`)
    } else {
      setCount((prevCount) => prevCount - amount)
      setAlertMessage('') // Clear alert message on successful purchase
    }
  }

  return (
    <Container maxWidth="sm">
      {alertMessage && (
        <Alert severity="warning" onClose={() => setAlertMessage('')}>
          {alertMessage}
        </Alert>
      )}
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
          <Grid item>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="outlined" onClick={() => setCount((prevCount) => prevCount + 1000)}>現金1000円</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={() => setCount((prevCount) => prevCount + 500)}>現金500円</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={() => setCount((prevCount) => prevCount + 100)}>現金100円</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default App
