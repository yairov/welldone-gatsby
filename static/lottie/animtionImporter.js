const importAnimation = jsonPathFile => {
    // console.log('animobj', require('./bottle-repeater.json'))
    delete require.cache[require.resolve('./' + jsonPathFile)];
    return require('./' + jsonPathFile);
};

export default importAnimation;