import React, {Component, useMemo, useState, useEffect} from 'react';

import styled from 'styled-components';
import {media} from '../../../theme';
import Background from '../../../assets/icons/purp-bg.png';
import {RichText} from 'prismic-reactjs';
import {Header as BaseHeader} from '../../UI/Typography.js';
import CustomerIcons from './CustomerIcons';
const A = styled.a`
  height: 15rem;
  width: 100%;
  padding: 1rem 8rem;

  ${media.minSmallDesktop`
      padding 1rem;
      width:15%;
      height:5rem;
  `}
`;
const Text = styled.div`
  ${media.minSmallDesktop`
     margin-top: 2.5rem;
  `}
`;

const SeeMore = styled.div`
  color: #6bdfff;
  margin-top: 2rem;
  cursor: pointer;
  ${media.minSmallDesktop`
     margin-top: 2rem;
     font-size: 1.7rem;
  `}
`;

const Root = styled.div`
  &&& {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  position: relative;
  display: block;
  font-size: 2rem;
  align-items: center;
  text-align: left;
  color: white;

  margin-bottom: 4rem;

  & > div {
    ${media.minSmallDesktop`
      padding: 0 10rem;
    `}
  }
  ${media.maxSmallDesktop`
  padding: 4rem 2rem;
`}
`;

const BG = styled.img`
  position: absolute;
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  height: 100%;
`;

const Title = styled(BaseHeader)`
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  ${media.minSmallDesktop`
    font-size: 2rem;
    text-align: start;
  `}
`;

const Icon = styled.img`
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const Computer = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100%;

  ${media.minSmallDesktop`
  display: flex;
  `}
`;
const Phone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;

  ${media.minSmallDesktop`
  display: none;
  `}
`;
const Line = styled.div`
  width: 1px;
  height: 3.5rem;
  align-items: center;
  background: #979797;
  margin: 2rem;
`;

// class OurCustomers extends Component {
//   constructor(props) {
//     super(props);
//     const promotedArray = [];
//     let numOfPromoted = 0;
//     for (let index = 0; index < this.props.customers.length; index++) {
//       if (this.props.customers[index].data.promoted === 'yes') {
//         numOfPromoted++;
//         promotedArray.push(this.props.customers[index]);
//       }
//     }
//     numOfPromoted = parseInt(numOfPromoted / 4);
//     this.customers0 = [];
//     this.customers1 = [];
//     this.customers2 = [];
//     this.customers3 = [];
//     this.customersPhone = [];

//     for (let index = 0; index < promotedArray.length; index++) {
//       this.customersPhone.push(promotedArray[index]);
//       if (index < numOfPromoted) {
//         this.customers0.push(promotedArray[index]);
//       } else if (index >= numOfPromoted && index < numOfPromoted * 2) {
//         this.customers1.push(promotedArray[index]);
//       } else if (index >= numOfPromoted * 2 && index < numOfPromoted * 3) {
//         this.customers2.push(promotedArray[index]);
//       } else {
//         this.customers3.push(promotedArray[index]);
//       }
//     }
//     this.state = {
//       backgroundIndex: 0,
//       backgroundIndexPhone: 0,
//       seeMore: false,
//     };
//     this.changeImg = this.changeImg.bind(this);
//   }

//   componentDidMount() {
//     this.timeout = setTimeout(this.changeImg, 3000);
//   }

//   componentWillUnmount() {
//     if (this.timeout) clearTimeout(this.timeout);
//   }

//   changeImg() {
//     this.setState(
//       function({backgroundIndex, backgroundIndexPhone}) {
//         const nextBackgroundIndex = ++backgroundIndex % this.customers0.length;
//         const nextPhoneBackgroundIndex = ++backgroundIndexPhone % this.customersPhone.length;
//         return {
//           backgroundIndex: nextBackgroundIndex,
//           backgroundIndexPhone: nextPhoneBackgroundIndex,
//         };
//       },
//       function() {
//         this.timeout = setTimeout(this.changeImg, 3000);
//       }
//     );
//   }

//   seeMoreHandler = () => {
//     this.setState(prevState => {
//       return {seeMore: !prevState.seeMore};
//     });
//   };

//   render() {
//     const text = this.state.seeMore
//       ? 'See Less'
//       : RichText.asText(this.props.text.primary.see_more);
//     return (
//       <Root id="C">
//         <BG src={Background} />
//         <Title>{RichText.asText(this.props.text.primary.title)}</Title>
//         <Computer>
//           <A
//             title={this.customers0[this.state.backgroundIndex].data.title}
//             href={this.customers0[this.state.backgroundIndex].data.website.url}
//           >
//             <Icon src={this.customers0[this.state.backgroundIndex].data.white_logo.url} />
//           </A>
//           <Line />
//           <A
//             title={this.customers1[this.state.backgroundIndex].data.title}
//             href={this.customers1[this.state.backgroundIndex].data.website.url}
//           >
//             <Icon src={this.customers1[this.state.backgroundIndex].data.white_logo.url} />
//           </A>
//           <Line />
//           <A
//             title={this.customers2[this.state.backgroundIndex].data.title}
//             href={this.customers2[this.state.backgroundIndex].data.website.url}
//           >
//             <Icon src={this.customers2[this.state.backgroundIndex].data.white_logo.url} />
//           </A>
//           <Line />
//           <A
//             title={this.customers3[this.state.backgroundIndex].data.title}
//             href={this.customers3[this.state.backgroundIndex].data.website.url}
//           >
//             <Icon src={this.customers3[this.state.backgroundIndex].data.white_logo.url} />
//           </A>
//         </Computer>
//         <Phone>
//           <A
//             title={this.customersPhone[this.state.backgroundIndexPhone].data.title}
//             href={this.customersPhone[this.state.backgroundIndexPhone].data.website.url}
//           >
//             <Icon src={this.customersPhone[this.state.backgroundIndexPhone].data.white_logo.url} />
//           </A>
//         </Phone>

//         <Text>{RichText.asText(this.props.text.primary.subtitle)}</Text>
//         <CustomerIcons seeMore={this.state.seeMore} items={this.props.customers} />
//         <SeeMore onClick={this.seeMoreHandler}>{text}</SeeMore>
//       </Root>
//     );
//   }
// }

// eslint-disable-next-line camelcase
function Customer({title, website, white_logo, isLast}) {
  return (
    <>
      <A title={title} href={website?.url} target="_blank">
        <Icon src={white_logo?.url} />
      </A>
      {!isLast && <Line />}
    </>
  );
}

function XOurCustomers({customers, text}) {
  const promoted = useMemo(
    () =>
      customers
        .map(({data}) => data)
        .sort((l, r) => l.order || Number.MAX_VALUE - r.order || Number.MAX_VALUE)
        .filter(c => c.promoted === 'yes'),
    [customers]
  );
  const [visibleCustomers, setVisibleCustomers] = useState(promoted.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      const startIndex = promoted.indexOf(visibleCustomers[0]) + 1;
      console.log({startIndex});
      setVisibleCustomers([...promoted, ...promoted].slice(startIndex, startIndex + 4));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [promoted, visibleCustomers, setVisibleCustomers]);

  return (
    <Root id="C">
      <BG src={Background} />
      <Title>{RichText.asText(text.primary.title)}</Title>
      <Computer>
        {visibleCustomers.map((c, i, all) => (
          <Customer {...c} isLast={i === all.length - 1} />
        ))}
      </Computer>
    </Root>
  );
}

export default XOurCustomers;
