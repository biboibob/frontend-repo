"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

type Props = {
  children: any;
};

function storeProvide({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default storeProvide;
