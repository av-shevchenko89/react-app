import React from 'react';
import { SearchPage } from './pages/search-page';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Layout, NotFound } from './components';
import { ModalProvider } from './modal';

export function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<Navigate to="search" replace />} />

        <Route path="search" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path=":searchQuery" element={<SearchPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ModalProvider>
  );
}
