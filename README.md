# Lotuxana

Bulud texnologiyaları üzrə quiz tətbiqi. Yalnız bu kompüterdə istifadə üçün nəzərdə tutulub; backend və verilənlər bazası tələb etmir.

## Başlatmaq

1. `Başlat.bat` faylını iki dəfə klikləyin.
2. Sayt brauzerdə `http://127.0.0.1:8765` ünvanında açılacaq.
3. Cavab yoxlama rejimini və sual aralığını seçin, sonra **Quizi başlat** düyməsinə basın.

`Başlat.bat` yalnız statik faylları bu kompüterdə localhost üzərindən təqdim edir. Quiz üçün server tərəfli kod yoxdur. Python tapılmasa, `.bat` faylı `index.html`-i birbaşa açmağa çalışır.

## Quiz imkanları

- Quizdən əvvəl iki PDF-dən birini seçin. Hər bank 315 sualdan ibarətdir; cavablar və variantlar seçilmiş PDF-ə uyğundur.
- “Son cavabsız PDF” üçün doğru variant PDF-dəki ✓ işarəsinə əsaslanır.
- Ümumi quiz sual bankından təsadüfi 30 sual seçir.
- Hər quiz üçün 45 dəqiqə verilir.
- Cavabları hər sualdan sonra və ya quiz bitəndə yoxlamaq mümkündür.
- Başlanğıc və son sual nömrəsini daxil edib istədiyiniz aralığı işləyə bilərsiniz. Hər iki nömrə aralığa daxildir.
- Quiz bitəndə düzgün, səhv və boş cavabların sayı, həmçinin hər sualın cavabı göstərilir.
- Səhv etdiyiniz və yadda saxladığınız sualları yenidən işləyə bilərsiniz.
- “Oxu və hazırlaş” səhifəsində sualları axtarıb, mövzu və aralığa görə süzüb, açar sözləri və cavabları ayrıca görə bilərsiniz.
- Açıq və qaranlıq görünüş arasında keçid edə bilərsiniz.

Hazırkı sual bankında 315 sual var. Buna görə 300–330 aralığı seçildikdə yalnız mövcud olan 300–315-ci suallar quizə daxil edilir. Seçimdən əvvəl neçə sualın tapıldığı göstərilir.

## Suallar və cavablar

Əvvəlki PDF-in sualları `questions.js`, “son cavabsiz.pdf” sualları isə `questions-marked.js` faylındadır. PDF-lərin surətləri `sources/` qovluğunda saxlanılır. Məlumatlar `sources/` qovluğundakı bu fayllardan hazırlanıb:

- `Document from Ravan.xlsx` — suallar və yanlış cavab variantları.
- `Suallar_ehtimal_olunan_cavablarla.pdf` — əvvəlki cavab variantları.
- `Bulud_texnologiyalari_imtahan_suallari_cavablarla.pdf` — A variantındakı ehtimal olunan cavablar və hər sualın açar sözləri.
- `son cavabsiz.pdf` — ayrıca sual bankı; doğru cavab PDF-də ✓ ilə göstərilib.

Excel-də düzgün cavab xanaları boş olduğuna görə PDF-dəki cavablar ehtimal xarakteri daşıyır. Tətbiq seçilmiş variantı sualın ehtimal olunan cavabı ilə müqayisə edir; cavabın doğruluğunu ayrıca araşdırmır. Nəticələri rəsmi cavab açarı kimi qəbul etməzdən əvvəl mühazirə materialı ilə tutuşdurun.


Hər iki PDF-də sual sayı eynidir, amma sual və cavab variantlarının mətnləri fərqlənə bilər. Mənbə seçimi quiz başlamazdan əvvəl və “Oxu və hazırlaş” səhifəsində edilir.

## Məlumatların saxlanması

Quizin gedişi, nəticələr, tarixçə, yoxlama rejimi və yadda saxlanmış suallar brauzerin `localStorage` yaddaşında JSON formatında saxlanır. `Başlat.bat` ilə açdıqda bu məlumatlar `http://127.0.0.1:8765` ünvanına bağlı olur. Başqa brauzer və ya ünvan ayrı yaddaş istifadə edir. Brauzerin sayt məlumatlarını silsəniz, quiz tarixçəsi də silinir.


