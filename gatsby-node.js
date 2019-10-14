/* eslint-disable import/no-extraneous-dependencies */
/**
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const Prismic = require('prismic-javascript');

const config = {
  apiEndpoint: process.env.API_END_POINT || 'https://welldone.cdn.prismic.io/api/v2',
  previewTokenMaxAge: process.env.PREVIEW_EXPIRES || 1800000,
  accessToken:
    process.env.ACCESS_TOKEN ||
    'MC5YRkE2N0JVQUFDWUFqal9v.77-977-977-9BwPvv71wS0hpCe-_vTkSKFI077-9KEzvv73vv71Hfu-_vS_vv73vv710Iu-_ve-_vQ',
};

async function loadContent() {
  const api = await Prismic.api(config.apiEndpoint, {
    accessToken: config.accessToken,
  });
  const allDocs = [];
  let page = 1;
  let totalPages;
  do {
    // eslint-disable-next-line no-await-in-loop
    const res = await api.query('', {
      pageSize: 100,
      page,
      lang: '*',
    });
    allDocs.push(...res.results);
    // eslint-disable-next-line prefer-destructuring
    totalPages = res.totalPages;
    page += 1;
  } while (page < totalPages);

  /* eslint-disable no-param-reassign */
  const content = allDocs.reduce((result, doc) => {
    result[doc.lang] = result[doc.lang] || {};
    result[doc.lang][doc.type] = result[doc.lang][doc.type] || [];
    result[doc.lang][doc.type].push(doc);
    return result;
  }, {});
  /* eslint-enable no-param-reassign */

  return content;
}

exports.createPages = async ({actions: {createPage}}) => {
  const allContent = await loadContent();

  createPage({
    path: '/',
    component: path.resolve('./src/templates/index.js'),
    context: {
      allContent: allContent['en-us'],
      lang: 'en-us',
    },
  });

  createPage({
    path: '/he/',
    component: path.resolve('./src/templates/index.js'),
    context: {
      allContent: allContent.he,
      lang: 'he',
    },
  });
};

exports.onCreateWebpackConfig = ({getConfig, stage}) => {
  const webpackConfig = getConfig();
  if (stage.startsWith('develop') && webpackConfig.resolve) {
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};
