import styled from 'styled-components';
import {Header as BaseHeader, SubHeader as BaseSubHeader} from '../../UI/Typography';
//import {withState} from 'recompose';
import Backdrop from "../../UI/Backdrop/Backdrop";
import React, {Component} from 'react';
import ReactPlayer from 'react-player';

const Root = styled.div`

  flex: 1;
  padding: 1rem 1rem;
  margin: 0 0.5rem;
  transition: all 150ms cubic-bezier(0.25, 0.25, 0.75, 0.75);

`;



const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  cursor: pointer;
`;
const Icons = styled.div`
  display: flex;
`;
const Title = styled(BaseHeader)``;

const SubTitle = styled(BaseSubHeader)`
font-weight: 400;
`;

const Img = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
`;

const IconImg = styled.img`
  height: 5rem;
  width: 5rem;
  z-index: 1;
  opacity: 0;
  padding:10rem;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 1;
  }
`;


const BackgroundImg = styled.img`
  z-index: 0;
  position: absolute;
  width: 25rem;
  height: 25rem;
  cursor: pointer;

`;





class ProjectItem extends Component {

  state = {
    width: '100%',
    height:'20rem',
    open: false,
    close: true,
    style: {display:'none' }

  }
  
   playingHandler = () => {
      const scrWidth = window.innerWidth;
      if (scrWidth >= 1024) {
        this.setState({ 
          width: '500px',
          height:'500px', 
          open: true,
          playing: true,
          style: {display:'block', zIndex: 200, position: 'absolute', left: '50%',transform: 'translate(-50%, -50%)'} });
      } else {
        this.setState({ 
          width: '100%',
          open: true,
          playing: true,
          style: {display:'block', zIndex: 200, position: 'absolute', left: '50%',transform: 'translate(-50%, -50%)'} });
      }
    }


  
  ClosedHandler = ( ) => {
    this.setState({
      open: false,
      playing: false,
      style: {transition: '1s',display: 'none'}
    });
  }      

  render () {

    const mcloud =  this.props.cloud ? <Icon src={this.props.cloud} />: null;
    const mdesktop =  this.props.desktop ? <Icon src={this.props.desktop} />: null;
    const mmobile =  this.props.mobile ? <Icon src={this.props.mobile} />: null;
     

    return (
      <Root >

      <Img>
          <IconImg src={this.props.mainImg }
               onClick={this.playingHandler} />
           <BackgroundImg 
                 src={this.props.thumbnail } 
                 onClick={this.playingHandler}/>
      </Img>

      <ReactPlayer  
        style={ this.state.style} 
        url='https://www.youtube.com/watch?v=PIEN5Ix8gqQ&list=RDPIEN5Ix8gqQ&start_radio=1' 
        onPlay={this.playingHandler} 
        onPause={this.ClosedHandler} 
        playing={this.state.playing} 
        width={this.state.width} 
        height={this.state.height}/>

      <Backdrop show={this.state.open} clicked={this.ClosedHandler}/>
      <Title>{this.props.title}</Title>  
      <Icons>
        {mdesktop} 
        {mmobile} 
        {mcloud} 
      </Icons>
      <SubTitle>{this.props.subtitle}</SubTitle>
    </Root>
    );
  }
}
export default ProjectItem;
