import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    date: '19 Mart 2025: Kıvılcım',
    description: "İBB Başkanı Ekrem İmamoğlu'nun gözaltına alınmasıyla süreç başladı.",
  },
  {
    date: 'Mart Sonu 2025: İlk Dalga',
    description: 'Operasyonlar İBB bürokrasisine ve ilçe belediye başkanlarına yayıldı.',
  },
  {
    date: 'Nisan 2025: Hedef Büyükşehirler',
    description: 'Dalga, Adana, Antalya, İzmir gibi büyükşehirlere sıçradı.',
  },
  {
    date: 'Mayıs 2025 ve Sonrası: Sistematik Baskı',
    description: "Soruşturmalar, CHP'nin güçlü olduğu tüm bölgelere yayıldı.",
  },
];

const TimelineItem: React.FC<{ item: Omit<typeof timelineData[0], 'align'> }> = ({ item }) => {
  return (
    <motion.div
      className="relative pl-16 py-4"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute left-[1px] top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-dark-bg border-4 border-highlight z-10"></div>
      <div className="bg-primary-bg p-6 rounded-lg border border-border-color transition-all duration-300 hover:border-highlight hover:shadow-lg hover:shadow-highlight-transparent">
        <h3 className="text-highlight text-xl font-bold mb-2 font-serif">{item.date}</h3>
        <p className="text-gray-300">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 font-serif text-white">Operasyonun Kronolojisi</h2>
          <p className="text-lg text-gray-400">
            Sürecin nasıl başladığını ve dalga dalga nasıl yayıldığını adım adım takip edin.
          </p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute top-0 bottom-0 w-1 bg-border-color left-4"></div>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 