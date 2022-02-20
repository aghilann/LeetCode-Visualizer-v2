import { MantineProvider } from "@mantine/core";
import App from "./App";

function Demo(): JSX.Element {
  return (
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
        colorScheme: "light",
      }}
    >
      <App />
    </MantineProvider>
  );
}

export { Demo };
