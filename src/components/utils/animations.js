import { motion, useScroll } from "motion/react"


const BlockAppear = ({ children }) => {
    return <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    > {children} </motion.div>
}

export default BlockAppear;