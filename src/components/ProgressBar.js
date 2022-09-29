import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function ProgressBar() {
  const [progress, setProgress] = React.useState(50);
  const theme = createTheme({
    palette: {
      // yellow
      shinku: {
        main: "#fecd19",
      },
    },
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: "50%" }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          color="warning"
        />
      </Box>
    </ThemeProvider>
  );
}
