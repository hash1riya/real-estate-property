import { renderData } from "./renderData";

export const renderCountries = (countriesContainer, countries) => {
  renderData(countriesContainer, countries, (country) => {
    // item container
    const div = document.createElement("div");
    div.classList.add("country-tab");
    div.style.background = `url(${country.imgPath})`;

    // title
    const countryTitle = document.createElement("h4");
    countryTitle.classList.add("country-title");
    countryTitle.textContent = country.title;
    div.appendChild(countryTitle);

    return div;
  });
};
