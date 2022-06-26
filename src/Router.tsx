import { Route, Routes, } from "react-router-dom";
import { Subscriber } from "./pages/Subscriber";
import { Event } from "./pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscriber />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes >
  )
}