import './App.css';
import AppBar from './component/appBar';
import Menu from './component/menu';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh', left: '0px', top: '0px', background: '#F3F4F8' }}>
      <Menu />
      <AppBar />
    </Box>

  );
}

export default App;
