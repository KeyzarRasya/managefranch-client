import { ThemeProvider } from "@emotion/react"
import Signup from "./pages/Signup"
import { createTheme } from "@mui/material"
import { deepPurple, purple } from "@mui/material/colors"
import LandingPages from "./pages/LandingPages"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Purchase from "./pages/Purchase"
import FinishPayment from "./pages/FinishPayment"


function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main:"#610094",
        light:deepPurple[50]
      },
      secondary:{
        main:'#F97300'
      },
      action:{
        active:purple[400],
        hover:purple[400]
      }
    },
    typography:{
      fontFamily:'Plus Jakarta Sans',
      htmlFontSize:20,
      fontWeightLight:200,
      fontWeightRegular:400,
      fontWeightMedium:500,
      fontWeightBold:600
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPages />} path="/" />
          <Route element={<Signup />} path="/signup/:token" />
          <Route element={<Purchase />} path="/purchase/:value" />
          <Route element={<FinishPayment/>} path="/finish"/>
        </Routes>
      </BrowserRouter>

    </ThemeProvider>

  )
}

export default App
