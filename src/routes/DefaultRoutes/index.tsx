import { Route, Routes } from "react-router-dom";
import Home from "../../page/Home";

export default function DefaultRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
