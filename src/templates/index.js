import React from 'react';
import Modal from 'react-modal';
import {StyleSheetManager} from 'styled-components';
import stylisRTLPlugin from 'stylis-rtl';

import {Home} from 'home';
import GlobalStyle from 'shared/theme/globalStyle';

Modal.setAppElement('body');

// we use https://github.com/cssjanus/cssjanus to flip all styled-components on hebrew.
// styled-components flip on can be prevented by using: /* @noflip */

const IndexPage = ({pageContext: {lang, allContent}}) => {
  console.log({lang, allContent});

  // prettier-ignore
  const stylisPlugins = [
    lang === 'he' && stylisRTLPlugin,
  ].filter(Boolean);

  return (
    <StyleSheetManager stylisPlugins={stylisPlugins}>
      <>
        <GlobalStyle />
        <Home allContent={allContent} lang={lang} />
      </>
    </StyleSheetManager>
  );
};

export default IndexPage;
