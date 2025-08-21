export function selectTab(tabs) {
  Array.from(tabs.children).forEach((tab) => {
    tab.classList.remove("active-tab");
  });

  this.classList.add("active-tab");
}