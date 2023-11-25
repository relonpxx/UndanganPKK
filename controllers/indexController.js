export const home = (req, res) => {
  res.render("index", {
    title: "PKK - Home",
    layout: "layouts/main-layout",
  });
};

export default home
