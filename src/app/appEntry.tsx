import { ThemeProvider } from "@/app/providers/ThemeProvider";
import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import BaseLayout from "./layouts/BaseLayout";
import { store } from "./appStore";
import "@/shared/index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <BaseLayout />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
)