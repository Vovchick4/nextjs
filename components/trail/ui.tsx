"use client"

import { FC, ReactNode, Children } from "react"
import { a, useTrail } from "@react-spring/web"

const Trail: FC<{ open: boolean, children: ReactNode }> = ({ open, children }) => {
    const items = Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 150 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 70 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}

export default Trail