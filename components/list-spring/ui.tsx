"use client"

import { forwardRef, LegacyRef, ReactNode } from "react"
import { motion } from "framer-motion"

const ListSpring = ({ children }: { children: ReactNode }, ref: LegacyRef<any> | undefined) => {
    return (
        <div ref={ref}>
            {children}
        </div>
    )
}

export default motion(forwardRef(ListSpring))