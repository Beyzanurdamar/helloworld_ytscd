const express = require('express');
const app = express();
const PORT = 8000;
const MY_NAME = "Beyzanur Damar"; // BURAYI KENDİ ADINIZLA DEĞİŞTİRİN

// Middleware: Express'e, gelen isteklerin (request) body'sindeki JSON verilerini 
// ayrıştırmasını (parse etmesini) söyler. Bu, POST istekleri için ZORUNLUDUR.
app.use(express.json());

// =========================================================
// İSTENEN ENDPOINT: localhost:8000/hello için POST metodu
// =========================================================
app.post('/hello', (req, res) => {
    // Postman'den gelen body'yi kontrol ediyoruz
    const gelenData = req.body;
    
    // Gelen body'de 'ad' veya 'isim' gibi bir alan olup olmadığını kontrol edelim
    const requestAd = gelenData.adiniz || gelenData.name || "bilinmeyen";

    // İstenen yanıtı döndürüyoruz. Yanıt body'sinde kendi adımızı gösteriyoruz.
    res.status(200).json({
        mesaj: `Merhaba! Postman'den gelen isteği aldım. Bu API'yi geliştiren kişi: ${MY_NAME}.`,
        request_detay: {
            endpoint: '/hello',
            http_metodu: 'POST',
            gelen_isim: requestAd
        }
    });
});

// Sunucuyu başlatma
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});