import React from "react"

import Home from "../components/Home/Home"
import Footer from "../shared/components/Footer/Footer";
import Header from "../components/Header/Header"
//import Header2 from "../components/header"
import classes from './index.module.css';
import GlobalStyle from '../shared/theme/globalStyle';




function IndexPage({ pageContext: { allContent } }) {
  
//  console.log('allContent');
//  console.log(allContent.footer[0].data);
  return (
      <div >
         <GlobalStyle />
        <div className={classes.Block}>
          <Header/>
        </div>
        <Home  customers={allContent}/>
        <Footer footer= {allContent.footer[0].data}  follow= {allContent.footer[0].data.body[0].items}/>
      </div>

  )
}

export default IndexPage;
