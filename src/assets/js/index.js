import { selectTab } from "./selectTabs";
import { renderCountries } from "./renderCountries";
import { renderProperties } from "./renderProperties";

import properties from "../../data/properties.json";
import countries from "../../data/countries.json";

// Styles
import "../css/base/styles.css";

// Reset
import "../css/base/reset.css";

// Components
import "../css/components/header.css";
import "../css/components/home.css";
import "../css/components/countries.css";
import "../css/components/properties.css";
import "../css/components/blog.css";
import "../css/components/footer.css";

const tabs = document.querySelector(".search-tabs");
const countriesContainer = document.getElementById("countries-container");
const propertiesContainer = document.getElementById("properties-container");

// Tabs
Array.from(tabs.children).forEach((child) => {
  child.addEventListener("click", () => selectTab(tabs));
});

// Countries
renderCountries(countriesContainer, countries);

// Properties
document.addEventListener("DOMContentLoaded", () => {
  renderProperties(propertiesContainer, properties);
});
