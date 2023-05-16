import { motion } from "framer-motion";

const Header = () => {
  return (
    <h1 className="text-6xl py-6 px-12 font-bold uppercase bg-teal-600 text-white">
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
