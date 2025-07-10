import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contribution: React.FC = () => {
  const googleFormUrl = "https://forms.gle/v5YWMEVK2HqsnUfY6"; 

  return (
    <motion.div
      className="bg-primary-bg p-8 rounded-lg border border-border-color text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold text-white mb-4 font-serif">Katkıda Bulun</h3>
      <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
        Bu listede eksik veya hatalı bir bilgi olduğunu düşünüyorsanız, lütfen bize bildirin. Gönderdiğiniz veriler incelendikten sonra listeye eklenecektir. Katkılarınız, bu arşivin daha doğru ve eksiksiz olmasına yardımcı olacaktır.
      </p>
      <a
        href={googleFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-highlight text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-red-700 transition-colors duration-300"
      >
        <FaPaperPlane />
        Veri Gönder
      </a>
    </motion.div>
  );
};

export default Contribution; 