import { Route, Routes, } from "react-router-dom";
import { Subscriber } from "./pages/Subscriber";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscriber />} />

    </Routes >
  )
}