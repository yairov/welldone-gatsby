import React, { useEffect, useRef } from "react"
import styled from "styled-components"

const Root = styled.div`
  background-color: #f1f1f1; /* Grey background */
  padding: 50px 10px; /* Some padding */
  color: black;
  text-align: center; /* Centered text */
  font-size: 90px; /* Big font size */
  font-weight: bold;
  position: fixed; /* Fixed position - sit on top of the page */
  top: 0;
  width: 100%; /* Full width */
  transition: 0.2s; /* Add a transition effect (when scrolling - and font size is decreased) */
  font-size: 30px;
  &.scrolled {
    font-size: 90px;
  }
`

export default function Header() {
  const ref = useRef()
  useEffect(() => {
    const onScroll = () => {
      const fn =
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
          ? "add"
          : "remove"

      ref.current.classList[fn]("scrolled")
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])
  return (
    <Root ref={ref} onClick={() => alert("x")}>
      header
    </Root>
  )
}
