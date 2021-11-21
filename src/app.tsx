import React from 'react';
import { SearchPage } from './pages/search-page';
import { Routes, Route, Navigate } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Layout, NotFound } from './components';
import { ModalProvider } from './modal';
export interface AppContext {
  url: string;
}

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<Navigate to="search" replace />} />

        <Route path="search" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path=":searchQuery" element={<SearchPage />} caseSensitive />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ModalProvider>
  );
}

export default hot(module)(App);
