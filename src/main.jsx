import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import { store,persistor } from './redux/Store.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
      <App />
      </ThemeProvider>
    </Provider>
    </PersistGate>
  </React.StrictMode>
);
