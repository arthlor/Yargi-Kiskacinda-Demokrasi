# Yargı Kıskacında Demokrasi

Bu proje, 19 Mart'ta başlayan ve CHP'li belediyeleri hedef alan siyasi operasyonların interaktif bir haritasını, kronolojisini ve veri merkezini sunar.

**[Live Demo](https://arthlor.github.io/Yargi-Kiskacinda-Demokrasi/)**

![Proje Ekran Görüntüsü](public/assets/hero.jpg)

## Özellikler

- **İnteraktif Harita**: Operasyonların coğrafi dağılımını gösteren, filtrelenebilir Leaflet haritası.
- **Dinamik Filtreleme**: Verileri isme, şehre ve adli duruma göre anlık olarak filtreleme.
- **Veri Görselleştirme**: `Recharts` ile oluşturulmuş durum ve şehir bazlı istatistiksel grafikler.
- **Duyarlı Tasarım**: Mobil ve masaüstü cihazlarda sorunsuz bir kullanıcı deneyimi.
- **Kronoloji**: Operasyonun önemli anlarını gösteren animasyonlu bir zaman tüneli.
- **Sosyal Paylaşım**: Twitter, Facebook, LinkedIn ve WhatsApp için paylaşım seçenekleri.
- **Veri İndirme**: Tüm veri setini CSV formatında indirme imkanı.

## Kullanılan Teknolojiler

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animasyon**: Framer Motion
- **Harita**: React-Leaflet
- **Grafikler**: Recharts
- **SEO & Meta Etiketleri**: React Helmet Async

## Kurulum ve Başlatma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu Klonlayın:**
    ```bash
    git clone https://github.com/arthlor/Yargi-Kiskacinda-Demokrasi.git
    cd Yargi-Kiskacinda-Demokrasi
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

3.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```
    Uygulama `http://localhost:5173` adresinde çalışacaktır.

## Mevcut Scriptler

-   `npm run dev`: Geliştirme sunucusunu başlatır.
-   `npm run build`: Uygulamayı üretim için `dist` klasörüne derler.
-   `npm run preview`: Üretim derlemesini yerel olarak önizler.
-   `npm run deploy`: Uygulamayı GitHub Pages'e dağıtır.

## Katkıda Bulunma

Bu projenin veri setinde eksik veya hatalı bir bilgi olduğunu düşünüyorsanız, lütfen aşağıdaki form aracılığıyla bize bildirin. Katkılarınız, bu arşivin doğruluğu için çok değerlidir.

**[Veri Gönder Formu](https://forms.gle/v5YWMEVK2HqsnUfY6)**
