import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function ProgressBar({ score }) {
  const [progress, setProgress] = React.useState(50);
  const theme = createTheme({
    palette: {
      // yellow
      shinku: {
        main: "#fecd19"
      }
    }
  });
  const progScore = score / 10;

  React.useEffect(() => {
    console.log("prog", progScore);

    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === progScore) {
          return progScore;
        }

        return Math.min(100, progScore);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: "50%" }}>
        <LinearProgress
          variant='determinate'
          value={progress}
          color='warning'
        />
      </Box>
    </ThemeProvider>
  );
}
