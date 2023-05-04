import './App.css';
import Box from '@mui/material/Box';
import myImg from './img/Mohammed_Alzafarani.jpeg';

function App() {
  return (
    <div className="App">

      <h2 style={{ alignItems: 'left', marginLeft: '2%', marginTop: "1.5%", fontWeight: 'bold', fontSize: 40 }}>Mohammed Alzafarani</h2>

      <Box
        sx={{
          width: '22%',
          height: "20%",
          margin: 'auto',
          marginLeft: '10%',
          marginTop: '7%',
          borderRadius: '10px',
          backgroundColor: '#',
        }}
      >
        <img src={myImg} alt='' width={'93%'} height={'100%'}></img>


      </Box>

      <Box
        sx={{
          width: '22%',
          height: "20%",
          margin: 'auto',
          marginLeft: '10%',
          marginTop: '7%',
          borderRadius: '10px',
          backgroundColor: '#',
        }}
      >
        <body>Hi I am Mohammed Alzafarani and This is my website!</body>
        Links:
        Github:https://github.com/mozafarani
        Linkedin:https://www.linkedin.com/in/mohammed-alzafarani-7b1b3a1b0/
        Email: mohammefm@gmail.com

        


      </Box>


    </div>
  );
}

export default App;
