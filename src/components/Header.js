import { motion } from "framer-motion";

const Header = () => {
  return (
    <h1 className="md:text-6xl text-4xl py-6 md:px-12 px-8 font-bold uppercase bg-teal-600 text-white">
      <motion.div
        className="align-middle"
        transition={{
          duration: 0.8,
        }}
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
      >
        <span>Bob's </span>
        <span>Orchestra Hall</span>
      </motion.div>
    </h1>
  );
};

export default Header;
