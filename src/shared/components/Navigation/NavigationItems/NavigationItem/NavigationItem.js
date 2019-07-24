import React, {Component} from 'react';
import {Link} from 'react-scroll';
import styled from 'styled-components';
import {media} from '../../../../theme/media';

const NavigationItem = styled.div`
  margin: 2rem;
  display: block;
  height: 100%;
  align-items: center;
  width: auto;
  font-size: 150%;
  cursor: pointer;
  color: ${props => (props.name && props.active ? '#40A4C8;' : '#51718C')};
  ${media.minSmallDesktop`
    margin: 0;
    display: block;
    height: 100%;
    align-items: center;
    width: auto;
    margin-right: 3rem;
    font-size: 100%;

    & a {
        text-decoration: none;
        color: inherit;
        &:hover {
            border-bottom: 2px solid #40A4C8;
            width: 110%;
            color: #40A4C8;
        }
    }
    
`}
`;

const Line = styled.div`
  border-bottom: 2px solid #40a4c8;
  width: 100%;
  color: #40a4c8;
  display: ${props => (props.name && props.active ? 'block' : 'none')};
`;

class navigationItem extends Component {
  state = {
    active: null,
  };

  handleSetActive = to => {
    //console.log(to);
    this.setState({active: to});
  };

  handleSetInactive = to => {
    // console.log(to);
    this.setState({active: null});
  };
  handleName = to => {
    //console.log(to);
    this.setState({active: to});
  };

  render() {
    if (this.props.simple) {
      return <NavigationItem>{this.props.children}</NavigationItem>;
    }

    return (
      <NavigationItem name={this.props.link} active={this.state.active} onClick={this.props.closed}>
        <Link
          onClick={this.props.closed}
          activeClass="NavigationItem-module--active"
          to={this.props.link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onSetActive={this.handleSetActive}
          onSetInactive={this.handleSetInactive}
        >
          {this.props.children}
        </Link>

        <Line name={this.props.link} active={this.state.active} />
      </NavigationItem>
    );
  }
}
export default navigationItem;
