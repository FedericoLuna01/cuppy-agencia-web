"use client";

import { AnimatePresence, motion } from "framer-motion";

interface AnimatedSubscribeButtonProps {
  subscribeStatus: boolean;
  loading: boolean;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  subscribeStatus,
  changeText,
  initialText,
  loading,
}) => {

    return (
      <AnimatePresence mode="wait">
        {subscribeStatus ? (
          <motion.button
            className="relative flex w-full items-center justify-center overflow-hidden rounded-md bg-white p-[10px] outline outline-2 outline-lime-500 text-lime-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              key="action"
              className="relative block h-full w-full font-semibold"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
            >
              {changeText}
            </motion.span>
          </motion.button>
        ) : (
          <motion.button
            className="relative flex w-full cursor-pointer items-center justify-center rounded-md border-none p-[10px] bg-primary text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AnimatePresence mode="wait">
              {
                loading ? (
                  <motion.span
                    key="loading"
                    className="relative flex items-center justify-center w-full font-semibold"
                    initial={{ y: 0 }}
                    exit={{ y: 50, transition: { duration: 0.1 } }}
                  >
                    Enviando...
                  </motion.span>
                ) : (
                  <motion.span
                    key="reaction"
                    className="relative flex items-center justify-center w-full font-semibold"
                    initial={{ y: 0 }}
                    exit={{ y: 50, transition: { duration: 0.1 } }}
                  >
                    {initialText}
                  </motion.span>
                )
              }
            </AnimatePresence>
          </motion.button>
        )
        }
      </AnimatePresence >
    );
  };
