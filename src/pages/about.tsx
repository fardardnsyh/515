import ContentLayout from "@/components/layout/content-layout";
import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeInTransformVariant, fadeInVariant } from "@/lib/animationVariants";
import { tech } from "@/lib/utils";

const intro = [
    "I am driven by the thrill of engineering performant yet visually captivating",
    "software solutions that seemlessly deliver an organization's product",
    "to the intended audience free from bumps and hassle."
]

const description = [
    'Throughout my journey within the industry I have acquired a wide range of skills and mastery of tools',
    'that I leverage in my craft. I take great pride in my work and journey and hence great confidence',
    'not only in my current level of performance but also the levels I will be ascending to further.'
]

const About = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
  return (
    <section ref={aboutRef} id="about">
        <ContentLayout
            title="about"
            border={true}
        >
            <div className="max-w-3xl space-y-4 lg:mb-36">
                <h3 className="text-lg font-bold">
                    {intro.map((text, index) => (
                    <motion.h1
                        variants={fadeInTransformVariant}
                        initial='initial'
                        whileInView='animate'
                        custom={index}
                        viewport={{ once: true }}
                    >
                        {text}
                    </motion.h1>))}
                </h3>
                <p className="text-muted-foreground">
                    {description.map((text, index) => (
                    <motion.h1
                        variants={fadeInVariant}
                        initial='initial'
                        whileInView='animate'
                        custom={index}
                        viewport={{ once: true }}
                    >
                        {text}
                    </motion.h1>))}
                </p>
            </div>
            <div className="">
                <ContentLayout
                    title="technologies"
                    border={true}
                >
                    <div className="lg:space-y-4 md:space-y-4 lg:block md:block gap-2 flex">
                        {tech.map((item, index) => (
                            <div className="lg:grid md:grid grid-cols-5" key={index}>
                                <motion.h3
                                    className="capitalize"
                                    variants={fadeInTransformVariant}
                                    initial='initial'
                                    whileInView='animate'
                                    custom={index}
                                    viewport={{ once: true }}
                                >
                                    {item.title}
                                </motion.h3>
                                {item.items.map((tech, index) => (
                                    <motion.div
                                        className="text-muted-foreground"
                                        key={index}
                                        variants={fadeInVariant}
                                        initial='initial'
                                        whileInView='animate'
                                        custom={index}
                                        viewport={{ once: true }}
                                    >
                                        <p className="lg:hidden">{tech.includes('/') ? `${tech.split('/')[1]}` : `${tech}`}</p>
                                        <p className="hidden lg:block">{tech}</p>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </ContentLayout>
            </div>
        </ContentLayout>
    </section>
  )
}

export default About