import React, { useRef } from "react"

import Lottie from "react-lottie"
import animationData from "../../../../../static/lottie/bottle-start.json"

// const Root = styled.div`
//   margin-top: 200px;
//   height: 400px;
//   width: 100%;
//   overflow: hidden;
//   position: absolute;
// `

const eventListeners = [
  "complete",
  "loopComplete",
  "enterFrame",
  "segmentStart",
  "config_ready",
  "data_ready",
  "DOMLoaded",
  "destroy",
].map(eventName => ({
  eventName,
  callback: e => console.log(),
}))

export default function Bottle({}) {
  const ref = useRef()
  return (
    <div>

      <Lottie
        onClick={() => console.log(ref.current)}
        ref={ref}
        width="100%"
        eventListeners={eventListeners}
        options={{ animationData }}
        segments={[1, 2]}
        speed={0}
      />
    </div>
  )
}
// export default function({}) {
//   const ref = useRef()
//   const animRef = useRef()
//   useEffect(() => {
//     const animation = lottie.loadAnimation({
//       container: ref.current,
//       animationData,
//       onEnterFrame: x => console.log({ x }),
//     })
//     ;[
//       ("complete",
//       "loopComplete",
//       "enterFrame",
//       "segmentStart",
//       "config_ready",
//       "data_ready",
//       "DOMLoaded",
//       "destroy"),
//     ].forEach(evt => {
//       animation.addEventListener(evt, e => console.log(evt, e))
//     })
//     animRef.current = animation
//   }, [])

//   const replay = useCallback(() => {
//     animRef.current.goToAndStop(600, true)
//   }, [animRef.current])
//   return <Root onClick={replay} ref={ref} />
// }
