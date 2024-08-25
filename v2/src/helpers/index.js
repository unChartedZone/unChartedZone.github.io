const scrollJumper = id => {
  let offset = 90; // Size of navbar + 20 pixels for a little padding
  let section = document.getElementById(id);
  window.scrollTo(0, section.offsetTop - offset);
};

export { scrollJumper };
