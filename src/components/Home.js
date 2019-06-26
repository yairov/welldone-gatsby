import React from 'react'
import styled from 'styled-components';
import {media} from '../shared/theme';


import MainSlider from '../shared/components/Sections/Home/MainSlider';
import ConsultingAndMentoring from '../shared/components/Sections/ConsultingAndMentoring/ConsultingAndMentoring';
import OurCustomers from '../shared/components/Sections/OurCustomers/OurCustomers';
import Technologies from '../shared/components/Sections/Technologies/Technologies';
import CustomersSays from '../shared/components/Sections/CustomersSays/CustomersSays';
import JoinUs from '../shared/components/Sections/JoinUs/JoinUs';
import LetsTalk from '../shared/components/Sections/LetsTalk/LetsTalk';
import CoreValues from '../shared/components/Sections/CoreValues/CoreValues';
import Projects from '../shared/components/Sections/Projects/Projects';

const Content = styled.div`
  position: relative;
  overflow-x: hidden;
  & > div {
    ${media.minSmallDesktop`
      padding: 0 10rem;
      
    `}
  }
`;
const BlogIndexPage = (props) => {
   console.log('rops.customers');
   console.log(props.customers.homepage[0].data.body[2]);
  
    return (
      <Content>
          
              <MainSlider items = {props.customers.homepage[0].data.body[0].items[0]}/> 
              <Technologies  items={props.customers.technology}/>      
              <OurCustomers  customers={props.customers.customer} text={props.customers.homepage[0].data.body[2]}/>  
              <Projects projects={props.customers.homepage[0].data.body[10]}/>    
              <CustomersSays customerSays={props.customers.customerfeedbacks} title={props.customers.homepage[0].data.body[6]}/>  
              <ConsultingAndMentoring ingredients={props.customers.homepage[0].data.body[4]}/> 
              <CoreValues coreValues={props.customers.homepage[0].data.body[5]} projects={props.customers.homepage[0].data.body[10]}/>
              <JoinUs joinUs={props.customers.homepage[0].data.body[9]}/>  
              <LetsTalk letsTalk={props.customers.homepage[0].data.body[7]} contactItems={props.customers.homepage[0].data.body[7].items}/>  
      </Content>
    )
};
export default BlogIndexPage;

