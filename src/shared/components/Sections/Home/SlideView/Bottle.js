import React, { Component } from 'react';
import lottie from 'lottie-web';
import importAnimation from '../../../../../../static/lottie/animtionImporter';

export default class Bottle extends Component {
    
  container = React.createRef();
  animationOptions = null;
  animationData = null;
  loop = (event) => {

    if (!event.type || event.type !== 'enterFrame') {
      return;
    }

    if (event.currentTime > 575) {
      this.anim.goToAndPlay(340, true);
    }
  };
  componentDidMount = () => {
      this.animationData = importAnimation('bottle-repeater.json');
      this.animationOptions = {
          container: this.container,
          animationData: this.animationData,
          loop: true,
          autoplay: true,
          name: 'title',
          renderer: 'svg',
          rendererSettings: {
              progressiveLoad: true
          },

      };
      this.anim = lottie.loadAnimation(this.animationOptions);
      this.anim.addEventListener('enterFrame', this.loop);
  };

  componentWillUnmount() {
    this.anim.removeEventListener('enterFrame', this.loop);
  }
  

  render() {
      return (
          <div
            {...this.props}
            ref={elem => {this.container = elem}}
          >
              
          </div>
      )
  }
}
