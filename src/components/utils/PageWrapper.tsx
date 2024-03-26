"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type TProps = {
  className?: string;
  children?: ReactNode;
};

export default function PageWrapper({ children, className }: TProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.65 }}
      className={clsx(className, "relative pt-16 flex flex-col h-full")}
    >
      {children}
    </motion.div>
  );
}
