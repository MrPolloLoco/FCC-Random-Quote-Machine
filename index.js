import React from "react";
import reactDom from "react-dom";
import App from "./src/App";
import "./CSS/index.css";
import { Analytics } from '@vercel/analytics/react';

reactDom.render(
<App />,
<Analytics />,
document.getElementById("root"));