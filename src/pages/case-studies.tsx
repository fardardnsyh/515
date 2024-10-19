import React, { useRef } from "react";
import data from '@/lib/case-studies';
import Card from "@/components/layout/card";
import { motion } from "framer-motion";
import { fadeInTransformVariant } from "@/lib/animationVariants";


const CaseStudies: React.FC = () => {
    const caseStudiesRef = useRef<HTMLDivElement>(null);
  return (
    <section ref={caseStudiesRef} id="case studies" className="min-h-screen my-2">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6">
            {data.map((item, index) => (
              <motion.div
                className=""
                key={index}
                variants={fadeInTransformVariant}
                initial='initial'
                whileInView="animate"
                viewport={{
                  once: true
                }}
                custom={index}
              >
                <Card item={item}/>
              </motion.div>
            ))}
        </div>
    </section>
  )
}

export default CaseStudies;