import React from "react";
import { motion } from "framer-motion";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <motion.div
          key={index}
          className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer ${
            currentPage === index ? "bg-primary" : "bg-gray-400"
          }`}
          onClick={() => handlePageClick(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: currentPage === index ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
};

export default Pagination;
