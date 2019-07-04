import React from 'react';
import Modal from 'react-modal';
import Home from '../components/Home';
import Footer from '../shared/components/Footer/Footer';
import Header from '../components/Header';
import GlobalStyle from '../shared/theme/globalStyle';

Modal.setAppElement('body');
function IndexPage({pageContext: {allContent}}) {
  //  console.log('allContent');
  //  console.log(allContent.footer[0].data);
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Home allContent={allContent} />
      <Footer footer={allContent.footer[0].data} follow={allContent.footer[0].data.body[0].items} />
    </div>
  );
}

export default IndexPage;
