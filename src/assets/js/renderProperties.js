import { renderData } from "./renderData";

export function renderProperties(propertiesContainer, properties) {
  renderData(propertiesContainer, properties, (prop) => {
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

    return propContainer;
  });
}
