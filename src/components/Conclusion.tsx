import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faLink } from '@fortawesome/free-solid-svg-icons';
import { unparse } from 'papaparse';
import { persons } from '../data/persons';
import Contribution from './Contribution'; 

const contributors = [
  'Anıl Karaca',
];

const Conclusion: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    const csv = unparse(persons, {
      header: true,
      columns: ['isim', 'görev', 'şehir', 'durum'],
    });
    const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'yeni-dusman-chp-veri.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pageUrl = window.location.href;
  const shareText = `19 Mart'ta başlayan ve CHP'li belediyeleri hedef alan 'Yeni Düşman: CHP' operasyonunun tam dökümü:`;
  
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${pageUrl}&hashtags=YeniDusmanCHP,SusturmaOperasyonu`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${encodeURIComponent(shareText)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${encodeURIComponent("Yargı Kıskacında Demokrasi")}&summary=${encodeURIComponent(shareText)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + pageUrl)}`
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="conclusion" className="py-20 text-center bg-dark-bg">
      <div className="container mx-auto px-4 space-y-16">
        
        <div>
          <h2 className="text-4xl font-bold mb-4 font-serif text-white">Harekete Geç</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-10">
            Bu tablo, Türkiye'de seçme ve seçilme hakkına, halk iradesine ve adalete yönelik bir müdahalenin belgesidir. Sessiz kalmak, bu hukuksuzluğu onaylamaktır.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-highlight text-white py-3 px-6 rounded-md font-bold transition-all duration-300 hover:bg-red-700 group">
              <FontAwesomeIcon icon={faTwitter} className="transition-transform duration-300 group-hover:scale-125" />
              Twitter
            </a>
            <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-highlight text-white py-3 px-6 rounded-md font-bold transition-all duration-300 hover:bg-red-700 group">
              <FontAwesomeIcon icon={faFacebook} className="transition-transform duration-300 group-hover:scale-125" />
              Facebook
            </a>
            <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-highlight text-white py-3 px-6 rounded-md font-bold transition-all duration-300 hover:bg-red-700 group">
              <FontAwesomeIcon icon={faLinkedin} className="transition-transform duration-300 group-hover:scale-125" />
              LinkedIn
            </a>
            <a href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-highlight text-white py-3 px-6 rounded-md font-bold transition-all duration-300 hover:bg-red-700 group">
              <FontAwesomeIcon icon={faWhatsapp} className="transition-transform duration-300 group-hover:scale-125" />
              WhatsApp
            </a>
            <button onClick={handleCopyLink} className="inline-flex items-center gap-3 bg-gray-600 text-white py-3 px-6 rounded-md font-bold transition-all duration-300 hover:bg-gray-700 group">
              <FontAwesomeIcon icon={faLink} className="transition-transform duration-300 group-hover:scale-125" />
              {copied ? 'Kopyalandı!' : 'Linki Kopyala'}
            </button>
            <button onClick={handleDownload} className="inline-flex items-center gap-3 bg-highlight text-white py-3 px-6 rounded-md font-bold transition-all duration-300 hover:bg-red-700 group">
              <FontAwesomeIcon icon={faDownload} className="transition-transform duration-300 group-hover:scale-125" />
              Veriyi İndir
            </button>
          </div>
          <p className="mt-8 text-xs text-gray-500">
            Bu çalışma, kamuya açık kaynaklardan ve haber ajanslarından derlenen bilgilerle hazırlanmıştır.
          </p>
        </div>

        <Contribution />

        <div>
          <h3 className="text-xl font-bold text-gray-400 mb-4">Katkıda Bulunanlar</h3>
          <div className="flex justify-center items-center gap-x-6 gap-y-2 flex-wrap">
            {contributors.map((name, index) => (
              <span key={index} className="text-gray-500 text-sm">
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Conclusion; 