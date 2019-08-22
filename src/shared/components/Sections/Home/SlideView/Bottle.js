import React, {useEffect} from 'react';
import lottie from 'lottie-web';
import importAnimation from '../../../../../../static/lottie/animtionImporter';

const Bottle = props => {
  const container = React.useRef();
  const [anim, setAnim] = React.useState(null);

  const loop = React.useCallback(
    event => {
      if (!event.type || event.type !== 'enterFrame') {
        return;
      }

      if (event.currentTime > 575) {
        anim.goToAndPlay(340, true);
      }
    },
    [anim]
  );

  useEffect(() => {
    if (!anim) {
      setAnim(
        lottie.loadAnimation({
          container: container.current,
          animationData: importAnimation('bottle-repeater.json'),
          loop: true,
          autoplay: true,
          name: 'title',
          renderer: 'svg',
          rendererSettings: {
            progressiveLoad: true,
          },
        })
      );
    } else {
      anim.addEventListener('enterFrame', loop);
    }

    return () => {
      if (anim) {
        anim.removeEventListener('enterFrame', loop);
      }
    };
  }, [anim, loop]);

  return <div {...props} ref={container} />;
};

export default Bottle;
