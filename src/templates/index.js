import React from "react"

import Home from "../components/Home"
import Footer from "../shared/components/Footer/Footer";
import Header from "../components/Header"
//import Header2 from "../components/header"
import GlobalStyle from '../shared/theme/globalStyle';




function IndexPage({ pageContext: { allContent } }) {
  
//  console.log('allContent');
//  console.log(allContent.footer[0].data);
  return (
      <div >
         <GlobalStyle />
          <Header/>
        <Home  customers={allContent}/>
        <Footer footer= {allContent.footer[0].data}  follow= {allContent.footer[0].data.body[0].items}/>
      </div>

  )
}

export default IndexPage;
