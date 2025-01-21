import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Bought from './components/bought';
import CashButtons from './components/CashButtons';
import ItemButtons from './components/ItemButtons';

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
          <ItemButtons onPurchase={handlePurchase} count={count} />
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h5" gutterBottom>
              お財布
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
