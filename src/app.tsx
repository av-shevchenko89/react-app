import React from "react";
import { SearchPage } from "./pages/search-page";
import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "./components";
import { ModalProvider } from "./modal";

export function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<Navigate to="search" replace />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ModalProvider>
  );
}
