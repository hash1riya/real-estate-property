// Tabs
const tabs = document.querySelector(".search-tabs");

Array.from(tabs.children).forEach((child) => {
  child.addEventListener("click", selectTab);
});

function selectTab() {
  Array.from(tabs.children).forEach((tab) => {
    tab.classList.remove("active-tab");
  });

  this.classList.add("active-tab");
}

// Countries

// data
const countries = [
  {
    title: "america",
    imgPath: "/src/assets/img/img-country-america.png",
  },
  {
    title: "spain",
    imgPath: "/src/assets/img/img-country-spain.png",
  },
  {
    title: "great britain",
    imgPath: "/src/assets/img/img-country-great-britain.png",
  },
  {
    title: "france",
    imgPath: "/src/assets/img/img-country-france.png",
  },
];

const countriesContainer = document.getElementById("countries-container");

// data iteration
countries.forEach((country) => {
  // item container
  const div = document.createElement("div");
  div.classList.add("country-tab");
  div.style.background = `url(${country.imgPath})`;

  // title
  const countryTitle = document.createElement("h4");
  countryTitle.classList.add("country-title");
  countryTitle.textContent = country.title;
  div.appendChild(countryTitle);

  // append item to country container
  countriesContainer.appendChild(div);
});

// Properties

document.addEventListener("DOMContentLoaded", () => {
  const propertiesContainer = document.getElementById("properties-container");
  const filePath = "/src/api/properties.json";

  // Function to fetch product data from the API
  async function fetchProperties() {
    try {
      const response = await fetch(filePath);

      // Check if the request was successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // 1. Parse the JSON data from the response body
      // The .json() method reads the response stream to completion
      // and parses the body text as JSON. It returns a promise
      // that resolves with the resulting JavaScript object/array.
      const properties = await response.json();

      // 2. Check if we received an array
      if (!Array.isArray(properties)) {
        throw new Error("Received data is not an array!");
      }

      // 3. Render the products onto the page
      renderProperties(properties);
    } catch (error) {
      console.error("Failed to fetch or process properties:", error);
      propertiesContainer.innerHTML =
        '<p class="error-message">Sorry, we could not load the properties at this time. Please try again later.</p>';
    }
  }

  // Function to render the array of product objects into HTML
  function renderProperties(propertiesArray) {
    // Clear any existing content (like the "Loading..." message)
    propertiesContainer.innerHTML = "";

    if (propertiesArray.length === 0) {
      catalogContainer.innerHTML = "<p>No products found.</p>";
      return;
    }

    // 4. Iterate over the array of product objects
    propertiesArray.forEach((prop) => {
      // item container
      const propContainer = document.createElement("a");
      propContainer.href = "#";
      propContainer.classList.add("property-tab");

      // property image
      const propImg = document.createElement("img");
      propImg.classList.add("property-img");
      propImg.src = prop.imgPath;
      propContainer.appendChild(propImg);

      // property description
      const propDesc = document.createElement("div");
      propDesc.classList.add("property-desc");
      propContainer.appendChild(propDesc);

      // property title
      const propName = document.createElement("h3");
      propName.classList.add("property-name");
      propName.textContent = prop.name;
      propDesc.appendChild(propName);

      // property attributes
      const propAttributes = document.createElement("div");
      propAttributes.classList.add("property-attributes");
      propDesc.appendChild(propAttributes);

      // property bedrooms
      const propBedrooms = document.createElement("span");
      propBedrooms.textContent = `${prop.bedrooms} Bedrooms`;
      propAttributes.appendChild(propBedrooms);

      // property area
      const propArea = document.createElement("span");
      propArea.textContent = `${prop.area} M`;
      propAttributes.appendChild(propArea);

      // property garages
      if (prop.garages != 0) {
        const propGarages = document.createElement("span");
        propGarages.textContent = `${prop.garages} Garages`;
        propAttributes.appendChild(propGarages);
      }

      // property poster
      const propPoster = document.createElement("span");
      propPoster.textContent = `Posted by ${prop.poster}`;
      propAttributes.appendChild(propPoster);

      // price
      const propPrice = document.createElement("span");
      propPrice.textContent = `$${prop.price}`;
      propPrice.classList.add("property-price");
      propAttributes.appendChild(propPrice);

      // append property to properties container
      propertiesContainer.appendChild(propContainer);
    });
  }

  // Initial call to fetch and render products when the page loads
  fetchProperties();
});
