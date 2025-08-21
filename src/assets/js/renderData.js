export const renderData = (dataContainer, data, render) => {
  data.forEach((item) => {
    dataContainer.appendChild(render(item));
  });
};
