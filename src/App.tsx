import { GlobalFrame, RouterButton, Typography } from "./components";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <GlobalFrame>
      <GlobalStyle />
      <RouterButton direct="back" />
      <RouterButton direct="front" />
      <Typography size="30px">123123asdadas</Typography>
    </GlobalFrame>
  );
}

export default App;
