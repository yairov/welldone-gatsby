import React, {useRef} from 'react';

import Lottie from 'react-lottie';
import animationData from '../../../../../../static/lottie/bottle-start.json';

// const eventListeners = [
//   'complete',
//   'loopComplete',
//   'enterFrame',
//   'segmentStart',
//   'config_ready',
//   'data_ready',
//   'DOMLoaded',
//   'destroy',
// ].map(eventName => ({
//   eventName,
//   callback: e => console.log(),
// }));

// onClick={() => console.log(ref.current)}
// eventListeners={eventListeners}

export default function Bottle() {
  const ref = useRef();
  return <Lottie ref={ref} width="100%" options={{animationData}} segments={[1, 2]} speed={0} />;
}
