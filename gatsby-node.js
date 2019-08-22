/**
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const Prismic = require('prismic-javascript');

// const handleExceptions = pages => ); // eslint-disable-line

// export const fetchDocuments = async ctx => {
//   const api = Prismic.api(apiEndpoint, { accessToken });
//   const cookies = getCookies(ctx);
//   const ref = cookies["io.prismic.preview"];
//   const documents = [];
//   let page = 1;
//   let total_pages = 1;
//   do {
//     // eslint-disable-next-line
//     const res = await api.query("", { pageSize: 100, page: "*", ref });
//     documents.push(...res.results.map(p => ({ ...p, type: p.type }));
//     ({ total_pages } = res);
//   } while (++page <= total_pages); // eslint-disable-line

//   return documents;
// };

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
    const res = await api.query('', {pageSize: 100, page});
    allDocs.push(...res.results);
    // eslint-disable-next-line prefer-destructuring
    totalPages = res.totalPages;
    page += 1;
  } while (page < totalPages);

  const content = allDocs.reduce((result, doc) => {
    if (!result[doc.type]) {
      result[doc.type] = [];
    }
    result[doc.type].push(doc);
    return result;
  }, {});

  return content;
  // console.log(content)
}

exports.createPages = async ({actions: {createPage}}) => {
  const allContent = await loadContent();
  // console.log(Object.keys(allContent), JSON.stringify(allContent.project, null, 2));
  createPage({
    path: '/',
    component: path.resolve('./src/templates/index.js'),
    context: {
      allContent,
    },
  });
};
