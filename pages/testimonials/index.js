import { motion } from "framer-motion";
import TestimonialsSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-8"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>
        {/* Slider */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialsSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
