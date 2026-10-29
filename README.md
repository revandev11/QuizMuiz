# Lotuxana

Bulud texnologiyaları üzrə quiz tətbiqi. Yalnız bu kompüterdə istifadə üçün nəzərdə tutulub; backend və verilənlər bazası tələb etmir.

## Başlatmaq

1. `Başlat.bat` faylını iki dəfə klikləyin.
2. Sayt brauzerdə `http://127.0.0.1:8765` ünvanında açılacaq.
3. Cavab yoxlama rejimini və sual aralığını seçin, sonra **Quizi başlat** düyməsinə basın.

`Başlat.bat` yalnız statik faylları bu kompüterdə localhost üzərindən təqdim edir. Quiz üçün server tərəfli kod yoxdur. Python tapılmasa, `.bat` faylı `index.html`-i birbaşa açmağa çalışır.

## Quiz imkanları

- Ümumi quiz sual bankından təsadüfi 30 sual seçir.
- Hər quiz üçün 45 dəqiqə verilir.
- Cavabları hər sualdan sonra və ya quiz bitəndə yoxlamaq mümkündür.
- Başlanğıc və son sual nömrəsini daxil edib istədiyiniz aralığı işləyə bilərsiniz. Hər iki nömrə aralığa daxildir.
- Quiz bitəndə düzgün, səhv və boş cavabların sayı, həmçinin hər sualın cavabı göstərilir.
- Səhv etdiyiniz və yadda saxladığınız sualları yenidən işləyə bilərsiniz.

Hazırkı sual bankında 315 sual var. Buna görə 300–330 aralığı seçildikdə yalnız mövcud olan 300–315-ci suallar quizə daxil edilir. Seçimdən əvvəl neçə sualın tapıldığı göstərilir.

## Suallar və cavablar

Sual bankı `questions.js` faylındadır. Məlumatlar `sources/` qovluğundakı bu fayllardan hazırlanıb:

- `Document from Ravan.xlsx` — suallar və yanlış cavab variantları.
- `Suallar_ehtimal_olunan_cavablarla.pdf` — ehtimal olunan düzgün cavablar.

Excel-də düzgün cavab xanaları boş olduğuna görə PDF-dəki cavablar ehtimal xarakteri daşıyır. Tətbiq seçilmiş variantı sualın ehtimal olunan cavabı ilə müqayisə edir; cavabın doğruluğunu ayrıca araşdırmır. Nəticələri rəsmi cavab açarı kimi qəbul etməzdən əvvəl mühazirə materialı ilə tutuşdurun.

## Məlumatların saxlanması

Quizin gedişi, nəticələr, tarixçə, yoxlama rejimi və yadda saxlanmış suallar brauzerin `localStorage` yaddaşında JSON formatında saxlanır. `Başlat.bat` ilə açdıqda bu məlumatlar `http://127.0.0.1:8765` ünvanına bağlı olur. Başqa brauzer və ya ünvan ayrı yaddaş istifadə edir. Brauzerin sayt məlumatlarını silsəniz, quiz tarixçəsi də silinir.


