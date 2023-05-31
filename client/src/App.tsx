import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "@/scenes/navbar/index.tsx";
import Dashboard from "@/scenes/dashboard/index.tsx";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<div>Predictions</div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

//1:39
