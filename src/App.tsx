import { BrowserRouter } from "react-router-dom";
import DefaultRoutes from "./routes/DefaultRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <DefaultRoutes />
    </BrowserRouter>
  );
}
