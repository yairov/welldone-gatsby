import React from 'react';
import Modal from 'react-modal';
import {Home} from 'home';
import GlobalStyle from 'shared/theme/globalStyle';

Modal.setAppElement('body');

const IndexPage = ({pageContext: {allContent, lang}}) => {
  return (
    <>
      <GlobalStyle />
      <Home allContent={allContent} lang={lang} />
    </>
  );
};

export default IndexPage;
