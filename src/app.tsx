import React from 'react';
import { SearchPage } from './pages/search-page';
import { Routes, Route } from 'react-router-dom';
import { Layout, NotFound } from './components';
import { ModalProvider } from './modal';

import './style.scss';

export function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="search" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path=":searchQuery" element={<SearchPage />} caseSensitive />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ModalProvider>
  );
}
