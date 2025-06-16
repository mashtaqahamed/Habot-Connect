export const fetchProviders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import("./data/providers.json").then((module) => {
        resolve(module.default);
      });
    }, 1000);
  });
};
