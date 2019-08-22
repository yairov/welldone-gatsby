const importAnimation = jsonPathFile => {
  // console.log('animobj', require('./bottle-repeater.json'))
  delete require.cache[require.resolve(`./${jsonPathFile}`)];
  // eslint-disable-next-line import/no-dynamic-require
  return require(`./${jsonPathFile}`);
};

export default importAnimation;
