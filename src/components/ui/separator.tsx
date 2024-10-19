import { lineVariant } from "@/lib/animationVariants";
import { motion } from "framer-motion";

const Separator = () => {
  return (
    <motion.div
        variants={lineVariant}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className="h-[1px] w-full bg-muted-foreground"></motion.div>
  )
}

export default Separator