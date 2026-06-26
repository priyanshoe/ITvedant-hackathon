import "../../App.css"
import {motion} from 'framer-motion'
export default function Transition({children}){
    return (
        <div style={{position:"relative"}}>
        <motion.div className='slide-in'
        initial={{scaleY:0}}
        animate={{scaleY:0}}
        exit={{scaleY:1}}
        transition={{duration:1, ease:[0.22, 1, 0.36, 1]}}
        />
        {children}
        <motion.div className='slide-out'
        initial={{scaleY:1}}
        animate={{scaleY:0}}
        exit={{scaleY:0}}
        transition={{duration:1, ease:[0.22, 1, 0.36, 1]}}
        />
        </div>
)}