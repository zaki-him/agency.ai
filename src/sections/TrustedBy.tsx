import React from "react";
import { company_logos } from "../assets/assets";
import { motion } from "motion/react";

const TrustedBy: React.FC = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.6}}
    viewport={{once: true}}
    className="flex flex-col gap-7 items-center py-8">
      <motion.p
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5 }}
      viewport={{once: true}}
      >Trusted by Leading Companies</motion.p>
      <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-6 relative flex-wrap">
        {company_logos.map((item, index) => (
          <motion.img
          variants={{
            hidden: {opacity: 0, y: 10},
            visible: {opacity: 1, y: 0}
          }}
          transition={{duration: 0.4}}
          viewport={{once: true}}
          src={item} alt="" key={index} className="w-24 lg:30" />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TrustedBy;
