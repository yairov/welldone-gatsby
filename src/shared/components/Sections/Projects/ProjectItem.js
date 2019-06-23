import styled from 'styled-components';

import {Header as BaseHeader, SubHeader as BaseSubHeader} from '../../UI/Typography';
//import {withState} from 'recompose';
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from './ProjectItem.module.css';
import React, {Component} from 'react';
import ReactPlayer from 'react-player';
const Root = styled.div`

  flex: 1;
  padding: 1rem 0;
  margin: 0 0.5rem;
  transition: all 150ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  &:hover {
    box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.15), 0 7px 20px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 20rem;
  cursor: pointer;
  
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

const Video = styled.video`
  width: 100%;
  height: 10rem;
  cursor: pointer;
`;
const Player = styled.div`


`;







class ProjectItem extends Component {

  state = {
    width: '100%',
    height:'20rem',
    open: false,
    close: true,
    style: { }

  }
  
   playingHandler = () => {
    this.setState({ 
      width: '500px',
      height:'500px', 
      open: true,
      style: {zIndex: 200, position: 'absolute', left: '50%',transform: 'translate(-50%, -50%)',transition: '1s'} });
  }
  
  ClosedHandler = ( ) => {
    this.setState({
      open: false,
      width: '100%',
      height:'20rem', 
      style: {transition: '1s'}
    });
  }      

  render () {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(this.state.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    const mcloud =  this.props.cloud ? <Icon src={this.props.cloud} />: null;
    const mdesktop =  this.props.desktop ? <Icon src={this.props.desktop} />: null;
    const mmobile =  this.props.mobile ? <Icon src={this.props.mobile} />: null;
     

    return (
      <Root >
      <Player>
        <ReactPlayer className={attachedClasses.join(' ')} style={ this.state.style} url='https://www.youtube.com/watch?v=PIEN5Ix8gqQ&list=RDPIEN5Ix8gqQ&start_radio=1' onPlay={this.playingHandler} onPause={this.ClosedHandler} playing={true} light={this.props.thumbnail } width={this.state.width} height={this.state.height}/>
      </Player>
     
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
