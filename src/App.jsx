import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import PropertyPage from "./components/PropertyPage";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchResults />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
