
import { useSpring, animated } from 'react-spring';
import React, { ReactNode } from 'react';
import { useDrag } from 'react-use-gesture';

const left = {
  bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
  justifySelf: 'end',
}
const right = {
  bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
  justifySelf: 'start',
}

// Only triggers when dragging the layer
const Slide = ({ children }: { children: ReactNode }) => {
  const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    ...left,
  }))
  const bind = useDrag(({ active, movement: [x] }) =>
    api.start({
      x: active ? x : 0,
      scale: active ? 1.1 : 1,
      ...(x < 0 ? left : right),
      immediate: name => active && name === 'x',
    })
  )

  const avSize = x.to({
    map: Math.abs,
    range: [50, 300],
    output: [0.5, 1],
    extrapolate: 'clamp',
  })

  return (
    <animated.div {...bind()}  style={{ background: bg }}>
      <animated.div  style={{ scale: avSize, justifySelf }} />
      <animated.div  style={{ x, scale }}>
        {children}
      </animated.div>
    </animated.div>
  )
}