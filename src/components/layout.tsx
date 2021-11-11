import React from "react";
import { Outlet } from "react-router";
import { ModalProvider } from "../modal";

export function Layout() {
  return (
    <ModalProvider>
      <Outlet />
    </ModalProvider>
  );
}
