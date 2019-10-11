const importAnimation = jsonPathFile => {
  delete require.cache[require.resolve(`./${jsonPathFile}`)];
  // eslint-disable-next-line import/no-dynamic-require
  return require(`./${jsonPathFile}`);
};

export default importAnimation;
