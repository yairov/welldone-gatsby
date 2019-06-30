import React, {Component} from 'react';
// import ReactPlayer from 'react-player';
import {RichText} from 'prismic-reactjs';
import styled from 'styled-components';
import {Header as BaseHeader, SubHeader as BaseSubHeader} from '../../UI/Typography';
// import Backdrop from '../../UI/Backdrop/Backdrop';
import {media} from '../../../theme';

const Root = styled.div`
  flex: 1;
  padding: 1rem 1rem;
  margin: 0 0.5rem;
  transition: all 150ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  /* border: 1px brown solid; */
`;

const MyImageWrap = styled.div`
  position: relative;
  /* width: 25rem;
   */
  height: 25rem;
  flex: 1;

  ${media.maxSmallDesktop`
   height: 35rem;
    height: 35rem;
  `}
`;

const MyImage = styled.img`
  width: 100%;
  height: 25rem;
  position: absolute;
  ${media.maxSmallDesktop`
   height: 35rem;
    height: 35rem;
  `}
`;

const MyPlayIndicator = styled.img`
  width: 100%;
  height: 25rem;
  position: absolute;
  ${media.maxSmallDesktop`
   height: 35rem;
    height: 35rem;
  `}
  background-color: transparent;
  &:hover {
    transition: background-color 300ms linear;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled(BaseHeader)`
  margin: 1rem 0 0.5rem 0;
  text-transform: uppercase;
`;

const SubTitle = styled(BaseSubHeader)`
  font-weight: 400;
  p {
    margin-bottom: 1rem;
  }
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;

  ${media.maxSmallDesktop`
    padding: 0 25rem;
  `}
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

// const Img = styled.div`
//   position: relative;
//   width: 100%;
//   flex-shrink: 0;
//   display: flex;
//   flex-direction: column;
//   background-color: white;
//   align-items: center;
// `;

// const IconImg = styled.img`
//   height: 5rem;
//   width: 5rem;
//   z-index: 200;
//   opacity: 0;
//   padding: 10rem;
//   cursor: pointer;
//   transition: 0.5s;
//   &:hover {
//     opacity: 1;
//   }
// `;

// const BackgroundImg = styled.img`
//   z-index: 0;
//   width: 100%;
//   height: 100%;
//   cursor: pointer;
//   background-color: rgba(0, 0, 0, 0.5);
// `;
// const Wrapper = styled.div`
//   position: absolute;
//   width: 25rem;
//   height: 25rem;
// `;

// class ProjectItem extends Component {
//   state = {
//     width: '100%',
//     height: '20rem',
//     open: false,
//     close: true,
//     style: {display: 'none'},
//     hover: false,
//   };

//   playingHandler = () => {
//     const scrWidth = window.innerWidth;
//     if (scrWidth >= 1024) {
//       this.setState({
//         width: '70%',
//         height: '45rem',
//         open: true,
//         playing: true,
//         style: {
//           display: 'block',
//           zIndex: 300,
//           position: 'fixed',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//         },
//       });
//     } else {
//       this.setState({
//         width: '100%',
//         open: true,
//         playing: true,
//         style: {
//           display: 'block',
//           zIndex: 300,
//           position: 'fixed',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//         },
//       });
//     }
//   };

//   ClosedHandler = () => {
//     this.setState({
//       open: false,
//       playing: false,
//       style: {transition: '1s', display: 'none'},
//     });
//   };
//   mouseEnter = () => {
//     this.setState({
//       hover: true,
//     });
//   };
//   mouseLeave = () => {
//     this.setState({
//       hover: false,
//     });
//   };

//   render() {
//     const mcloud = this.props.cloud ? <Icon src={this.props.cloud} /> : null;
//     const mdesktop = this.props.desktop ? <Icon src={this.props.desktop} /> : null;
//     const mmobile = this.props.mobile ? <Icon src={this.props.mobile} /> : null;

//     return (
//       <Root>
//         <Img>
//           <IconImg
//             onMouseEnter={this.mouseEnter}
//             onMouseLeave={this.mouseLeave}
//             src={this.props.mainImg}
//             onClick={this.playingHandler}
//           />
//           <Wrapper>
//             <Backdrop show={this.state.hover} clicked={this.ClosedHandler} />
//             <BackgroundImg src={this.props.thumbnail} onClick={this.playingHandler} />
//           </Wrapper>
//         </Img>

//         <ReactPlayer
//           onClick={this.ClosedHandler}
//           style={this.state.style}
//           url={this.props.movie}
//           onPlay={this.playingHandler}
//           onPause={this.ClosedHandler}
//           playing={this.state.playing}
//           width={this.state.width}
//           height={this.state.height}
//         />

//         <Backdrop show={this.state.open} clicked={this.ClosedHandler} />
//         <Title>{this.props.title}</Title>
//         <Icons>
//           {mdesktop}
//           {mmobile}
//           {mcloud}
//         </Icons>
//         <SubTitle>{this.props.subtitle}</SubTitle>
//       </Root>
//     );
//   }
// }

//     const mcloud = this.props.cloud ? <Icon src={this.props.cloud} /> : null;
//     const mdesktop = this.props.desktop ? <Icon src={this.props.desktop} /> : null;

//     const mmobile = this.props.mobile ? <Icon src={this.props.mobile} /> : null;

function Layers({layers, layersMeta}) {
  console.log({layers, layersMeta});
  return (
    <Icons>
      {layers
        .map(({layer: {id}}) => layersMeta.find(l => l.id === id))
        .map(({data: {icon, title}}) => ({icon, title: title[0].text}))
        .map(({icon, title}) => (
          <Icon key={title} alt={title} title={title} src={icon.url} />
        ))}
    </Icons>
  );
}
export default function ProjectItem({
  layers: layersMeta,
  project: {title, description, thumbnail, video, customer, technologies, layers},
}) {
  console.log(title[0].text, thumbnail.url);
  return (
    <Root>
      <MyImageWrap>
        <MyImage src={thumbnail.url} />
        <MyPlayIndicator />
      </MyImageWrap>
      <Title>{RichText.asText(title)}</Title>
      <Layers {...{layers, layersMeta}} />
      <SubTitle>{RichText.render(description)}</SubTitle>
    </Root>
  );
}
