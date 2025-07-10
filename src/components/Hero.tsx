import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { persons } from '../data/persons';
import { motion, animate } from 'framer-motion';

const AnimatedCounter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      const controls = animate(0, value, {
        duration: 1, // Reduced duration
        onUpdate(latest) {
          node.textContent = Math.round(latest).toString();
        },
      });
      return () => controls.stop();
    }
  }, [value]);

  return <span ref={ref} />;
};

const Hero: React.FC = () => {
  const stats = React.useMemo(() => {
    const counts = persons.reduce((acc, { durum }) => {
        const lowerCaseDurum = durum.toLocaleLowerCase('tr-TR');
        if (lowerCaseDurum.includes('tutuklu')) {
            acc.tutuklu = (acc.tutuklu || 0) + 1;
        } else if (lowerCaseDurum.includes('gözaltı işlemi')) {
            acc.gozalti = (acc.gozalti || 0) + 1;
        } else if (lowerCaseDurum.includes('ev hapsi')) {
            acc.evHapsi = (acc.evHapsi || 0) + 1;
        }
        return acc;
    }, { tutuklu: 0, gozalti: 0, evHapsi: 0 });
    return {
        ...counts,
        toplam: persons.length,
    };
  }, []);

  const statItems = [
    { label: 'TUTUKLU', value: stats.tutuklu, color: 'text-red-500' },
    { label: 'GÖZALTI İŞLEMİ', value: stats.gozalti, color: 'text-orange-500' },
    { label: 'EV HAPSİ', value: stats.evHapsi, color: 'text-yellow-500' },
    { label: 'TOPLAM VAKA', value: stats.toplam, color: 'text-highlight' },
  ];

  return (
    <section 
      id="hero" 
      className="h-screen flex flex-col justify-center items-center text-white p-4"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${import.meta.env.BASE_URL}assets/hero.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-4 text-center font-serif"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
        >
          {"Yargı Kıskacında Demokrasi".split(" ").map((word, index) => (
            <motion.span key={index} className="inline-block" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mt-4 mb-12"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          19 Mart 2025'te başlayan siyasi operasyonların anatomisi
        </motion.p>
        
        <motion.div 
          className="flex gap-4 md:gap-8 flex-wrap justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {statItems.map((item, index) => (
            <div key={index} className="bg-black bg-opacity-40 backdrop-blur-sm py-6 px-8 rounded-lg border border-border-color min-w-[150px]">
              <div className={`text-5xl font-black ${item.color}`}>
                <AnimatedCounter value={item.value} />
              </div>
              <div className="text-sm text-gray-400 mt-2">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <a href="#timeline" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-3xl">
        <motion.div
          animate={{ y: [0, -10, 0] }} // Reduced bounce
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.div>
      </a>
    </section>
  );
};

export default Hero; 