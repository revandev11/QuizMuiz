window.QUIZ_QUESTIONS = [
  {
    "id": 1,
    "question": "Capex hansı xərc növünü ifadə edir?",
    "answer": "İlkin kapital yatırımı tələb edən, əvvəlcədən ödənilən xərc (server, avadanlıq alışı)",
    "options": [
      "İlkin kapital yatırımı tələb edən, əvvəlcədən ödənilən xərc (server, avadanlıq alışı)",
      "İstifadə olunduqca ödənilən cari xərc",
      "Aylıq trafik həcminə görə xidmət haqqı",
      "Sorğu sayına uyğun hesablanan ödəniş",
      "İcarə olunan CPU-saat üçün cari ödəniş"
    ],
    "keywords": "əvvəlcədən, kapital, avadanlıq alışı",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 1.2 İqtisadi kök: capex və opex; s. 3"
  },
  {
    "id": 2,
    "question": "Opex hansı ödəniş yanaşmasını bildirir?",
    "answer": "İstifadəyə görə cari ödəniş (icarə/pay-as-you-go)",
    "options": [
      "İstifadəyə görə cari ödəniş (icarə/pay-as-you-go)",
      "Server binasına əvvəlcədən kapital yatırımı",
      "Uzunmüddətli fiziki avadanlığın alınması",
      "Data mərkəzi üçün torpağın alınması",
      "Şirkətə məxsus server parkının ilkin alınması"
    ],
    "keywords": "cari xərc, istifadəyə görə",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 1.2 İqtisadi kök: capex və opex; s. 3"
  },
  {
    "id": 3,
    "question": "Virtuallaşdırmanın əsas funksiyası hansıdır?",
    "answer": "Fiziki resursları (CPU, yaddaş, disk) bir neçə izolə edilmiş virtual maşın arasında bölüşdürmək",
    "options": [
      "Fiziki resursları (CPU, yaddaş, disk) bir neçə izolə edilmiş virtual maşın arasında bölüşdürmək",
      "Sorğunu domen adına əsasən ünvanlandırmaq",
      "Gələn trafiki tətbiq serverləri arasında bölmək",
      "İstifadə göstəricilərindən faktura hazırlamaq",
      "İstifadəçinin giriş icazəsini yoxlamaq"
    ],
    "keywords": "bir fiziki server → çox VM, bölüşdürmə",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 1.3 Səbəb-nəticə zənciri: virtuallaşdırmadan pay-as-you-go-ya; s. 3"
  },
  {
    "id": 4,
    "question": "Çox-kirayəçilik (multi-tenancy) nə deməkdir?",
    "answer": "Bir fiziki infrastrukturun bir neçə müştəri (tenant) tərəfindən məntiqi təcridlə paylaşılması",
    "options": [
      "Bir fiziki infrastrukturun bir neçə müştəri (tenant) tərəfindən məntiqi təcridlə paylaşılması",
      "Bir müştərinin müxtəlif provayderlərdən ayrıca xidmət alması",
      "Bir tətbiqin sorğularının yalnız bir serverdə işlənməsi",
      "Hər istifadəçi üçün ayrıca fiziki data mərkəzinin qurulması",
      "Müştərilərin eyni tətbiq hesabı və giriş icazəsini paylaşması"
    ],
    "keywords": "paylaşılan infrastruktur + təcrid",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 1.3 Səbəb-nəticə zənciri: virtuallaşdırmadan pay-as-you-go-ya; s. 3"
  },
  {
    "id": 5,
    "question": "NIST xüsusiyyətlərindən hansı insan vasitəçisi olmadan API və ya konsolla resurs almağı bildirir?",
    "answer": "Tələb üzrə özünəxidmət (on-demand self-service)",
    "options": [
      "Tələb üzrə özünəxidmət (on-demand self-service)",
      "Geniş şəbəkə çıxışı",
      "Resurs hovuzlaşdırması",
      "Sürətli elastiklik",
      "Ölçülən xidmət"
    ],
    "keywords": "insan vasitəçisi yoxdur, API/konsol",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 1.4 Rəsmi tərif: NIST-in beş xüsusiyyəti; s. 4"
  },
  {
    "id": 6,
    "question": "Resurslara standart şəbəkə mexanizmləri ilə müxtəlif cihazlardan çıxış hansı xüsusiyyətdir?",
    "answer": "Geniş şəbəkə çıxışı (broad network access)",
    "options": [
      "Geniş şəbəkə çıxışı (broad network access)",
      "Tələb üzrə özünəxidmət",
      "Sürətli elastiklik",
      "Ölçülən xidmət",
      "Resurs hovuzlaşdırması"
    ],
    "keywords": "standart mexanizmlər, müxtəlif cihaz",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 1.4 Rəsmi tərif: NIST-in beş xüsusiyyəti; s. 4"
  },
  {
    "id": 7,
    "question": "Pay-as-you-go modelinin texniki əsasını hansı NIST xüsusiyyəti təşkil edir?",
    "answer": "Ölçülən xidmət (measured service)",
    "options": [
      "Ölçülən xidmət (measured service)",
      "Resurs hovuzlaşdırması",
      "Geniş şəbəkə çıxışı",
      "Sürətli elastiklik",
      "Tələb üzrə özünəxidmət"
    ],
    "keywords": "ölçmə → faktura",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 1.4 Rəsmi tərif: NIST-in beş xüsusiyyəti; s. 4"
  },
  {
    "id": 8,
    "question": "NIST tərifinə görə resurs hovuzlaşdırması hansı təsvirə uyğundur?",
    "answer": "Provayderin resursları çox-kirayəçili modellə hovuzda birləşdirib müştərilərə dinamik bölüşdürməsi",
    "options": [
      "Provayderin resursları çox-kirayəçili modellə hovuzda birləşdirib müştərilərə dinamik bölüşdürməsi",
      "İstifadənin avtomatik ölçülüb şəffaf hesablaşdırılması",
      "Tutumun tələbata görə avtomatik artırılıb azaldılması",
      "Resurslara standart şəbəkə mexanizmləri ilə çıxış",
      "İnsan vasitəçisi olmadan API ilə resurs təmin edilməsi"
    ],
    "keywords": "hovuz, multi-tenant, dinamik bölgü",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 1.4 Rəsmi tərif: NIST-in beş xüsusiyyəti; s. 4"
  },
  {
    "id": 9,
    "question": "Bulud infrastrukturunda region nədir?",
    "answer": "Bir-birindən coğrafi olaraq ayrı yerləşən data mərkəzləri qrupunun yerləşdiyi coğrafi ərazi",
    "options": [
      "Bir-birindən coğrafi olaraq ayrı yerləşən data mərkəzləri qrupunun yerləşdiyi coğrafi ərazi",
      "Bir serverdəki qonaq əməliyyat sistemi",
      "Virtual maşınlara resurs ayıran proqram qatı",
      "İstifadəni ölçən hesablaşdırma komponenti",
      "Bir tətbiqin avtomatik miqyaslanma həddi"
    ],
    "keywords": "coğrafi ərazi, AZ-lar qrupu",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 1.6 Əlaqəli əsas terminlər; s. 5"
  },
  {
    "id": 10,
    "question": "Availability Zone-un (AZ) əsas təyinatı nədir?",
    "answer": "Bir regionda ayrıca nasazlıq sərhədi yaratmaq (müstəqil enerji/şəbəkə ilə data mərkəzi) – nasazlığa dözümlülük",
    "options": [
      "Bir regionda ayrıca nasazlıq sərhədi yaratmaq (müstəqil enerji/şəbəkə ilə data mərkəzi) – nasazlığa dözümlülük",
      "Resurs istifadəsini fakturaya çevirmək",
      "Tətbiqin sorğu sayını ölçmək",
      "İstifadəçi icazələrini yoxlamaq",
      "Virtual maşın şablonlarını seçmək"
    ],
    "keywords": "nasazlıq təcridi, əlçatanlıq",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 1.6 Əlaqəli əsas terminlər; s. 5"
  },
  {
    "id": 11,
    "question": "Type 1 hipervizor harada işləyir?",
    "answer": "Birbaşa fiziki avadanlığın üzərində (bare-metal), host OS olmadan",
    "options": [
      "Birbaşa fiziki avadanlığın üzərində (bare-metal), host OS olmadan",
      "Qonaq əməliyyat sisteminin tətbiq qatında",
      "Adi host əməliyyat sisteminin üzərində",
      "Brauzerin icra mühitinin daxilində",
      "Hesablaşdırma mühərrikinin əlavəsi kimi"
    ],
    "keywords": "birbaşa hardware, host OS yoxdur",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 2.1 Abstraksiya zənciri: fiziki serverdən tətbiqə; s. 6"
  },
  {
    "id": 12,
    "question": "Konteyner təcrid üçün hansı nüvədən istifadə edir?",
    "answer": "Host əməliyyat sisteminin ortaq nüvəsindən (kernel)",
    "options": [
      "Host əməliyyat sisteminin ortaq nüvəsindən (kernel)",
      "Hər konteynerə ayrılmış ayrıca OS nüvəsindən",
      "Yük balanslayıcısının əməliyyat sistemi nüvəsindən",
      "Hər sorğu üçün yüklənən yeni qonaq nüvəsindən",
      "İstifadəçi brauzerinin əməliyyat sistemi nüvəsindən"
    ],
    "keywords": "ortaq/host nüvəsi",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 2.1 Abstraksiya zənciri: fiziki serverdən tətbiqə; s. 6"
  },
  {
    "id": 13,
    "question": "Özünəxidmət axınında scheduler-in vəzifəsi nədir?",
    "answer": "Sorğu üçün resurs çatan uyğun fiziki hostu (serveri) seçmək",
    "options": [
      "Sorğu üçün resurs çatan uyğun fiziki hostu (serveri) seçmək",
      "İstifadə fakturasını formalaşdırmaq",
      "Tətbiqin giriş icazələrini müəyyən etmək",
      "Domen adını şəbəkə ünvanına yönləndirmək",
      "Sorğuları oxuma replikasına ötürmək"
    ],
    "keywords": "host seçimi, yerləşdirmə",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 2.2 Özünəxidmət axını: sorğudan resursa; s. 7"
  },
  {
    "id": 14,
    "question": "Ölçmə axınında toplanmış resurs istifadəsi hansı komponentə ötürülür?",
    "answer": "Hesablaşdırma (billing) sisteminə",
    "options": [
      "Hesablaşdırma (billing) sisteminə",
      "Domen adları xidmətinə",
      "Qonaq əməliyyat sistemi yükləyicisinə",
      "Tətbiq sorğularının yük balanslayıcısına",
      "Virtual maşınların şablon anbarına"
    ],
    "keywords": "ölçmə → billing",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 2.3 Ölçmə (metering) axını; s. 7"
  },
  {
    "id": 15,
    "question": "Yük balanslayıcısının əsas işi hansıdır?",
    "answer": "Gələn trafiki tətbiq instansiyaları arasında bölüşdürmək",
    "options": [
      "Gələn trafiki tətbiq instansiyaları arasında bölüşdürmək",
      "Yeni fiziki serverlərin satın alınmasını təsdiqləmək",
      "CPU-saat istifadəsini fakturada qiymətləndirmək",
      "Tətbiqin mənbə kodunu avtomatik yeniləmək",
      "Verilənlər bazası üçün hüquqi region seçmək"
    ],
    "keywords": "trafik bölgüsü, instansiyalar arası",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 3. Tam arxitektura nümunəsi: elastik e-ticarət sistemi; s. 7"
  },
  {
    "id": 16,
    "question": "Əsas baza və oxuma replikası olan elastik tətbiq arxitekturasında yazma əməliyyatları hara yönləndirilir?",
    "answer": "Əsas (primary) bazaya",
    "options": [
      "Əsas (primary) bazaya",
      "Oxuma replikasına",
      "Domen adları serverinə",
      "Resursların hesablaşdırma mühərrikinə",
      "İnfrastrukturun host planlaşdırıcısına"
    ],
    "keywords": "yazma → primary",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 3. Tam arxitektura nümunəsi: elastik e-ticarət sistemi; s. 8"
  },
  {
    "id": 17,
    "question": "Paylaşılan Məsuliyyət Modelində fiziki data mərkəzinin təhlükəsizliyi kimə aiddir?",
    "answer": "Bulud provayderinə",
    "options": [
      "Bulud provayderinə",
      "Müştərinin tətbiq proqramçısına",
      "Müştərinin giriş icazələri administratoruna",
      "Tətbiqin son istifadəçisinə",
      "Müştərinin qonaq OS administratoruna"
    ],
    "keywords": "fiziki təhlükəsizlik = provayder",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 6.1 Paylaşılan Məsuliyyət Modeli (Shared Responsibility Model); s. 10"
  },
  {
    "id": 18,
    "question": "Serverless yanaşmasında serverlə bağlı nə dəyişir?",
    "answer": "Müştəri serveri idarə etmir – tətbiq kodunu verir, serveri provayder idarə edir (serverlər yenə mövcuddur, amma idarəsi gizlidir)",
    "options": [
      "Müştəri serveri idarə etmir – tətbiq kodunu verir, serveri provayder idarə edir (serverlər yenə mövcuddur, amma idarəsi gizlidir)",
      "Tətbiq fiziki server olmadan işləyir",
      "Əməliyyat sistemi yeniləmələri ləğv edilir",
      "Hesablama işi yalnız istifadəçi cihazına keçir",
      "Miqyaslanma müştərinin əl əməyinə keçir"
    ],
    "keywords": "server idarəsi provayderdə",
    "topic": 1,
    "difficulty": 1,
    "reference": "Mövzu 1; 8. Tipik yanlış anlaşılmalar və düzgün izahlar; s. 12"
  },
  {
    "id": 19,
    "question": "Şirkət nadir trafik zirvəsinə görə server alıb. Bu seçim niyə tutum uyğunsuzluğu yarada bilər?",
    "answer": "Tutum əvvəlcədən sifariş edilir, zirvədən sonra artıq/boş qalır (aşağı istifadə) və ya zirvəni qarşılaya bilmir",
    "options": [
      "Tutum əvvəlcədən sifariş edilir, zirvədən sonra artıq/boş qalır (aşağı istifadə) və ya zirvəni qarşılaya bilmir",
      "Serverin quraşdırılması sifarişdən sonra uzun çəkir",
      "Müştəri tətbiqin giriş icazələrini özü idarə edir",
      "İdarə olunan xidmət provayderə asılılığı artırır",
      "Region seçimi məlumatın saxlanma yerinə bağlıdır"
    ],
    "keywords": "əvvəlcədən tutum, boş qalma",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 1.2 İqtisadi kök: capex və opex; s. 3"
  },
  {
    "id": 20,
    "question": "Müştərilərin yük zirvələrinin müxtəlif vaxtlara düşməsi provayderə necə kömək edir?",
    "answer": "Müxtəlif vaxt zirvələri hovuzda tutumu birgə istifadə etməyə imkan verir – ümumi tutum azalır, istifadə səmərəliliyi artır",
    "options": [
      "Müxtəlif vaxt zirvələri hovuzda tutumu birgə istifadə etməyə imkan verir – ümumi tutum azalır, istifadə səmərəliliyi artır",
      "Hər müştəri üçün ayrıca fiziki server almağı tələb edir",
      "Resurs istifadəsini ölçməyə ehtiyacı aradan qaldırır",
      "Bütün müştərilərin tutumunu sabit saxlamağı tələb edir",
      "Paylaşılan infrastrukturu təcridsiz işlətməyə imkan verir"
    ],
    "keywords": "zirvələr fərqli vaxt, birgə istifadə",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 1.3 Səbəb-nəticə zənciri: virtuallaşdırmadan pay-as-you-go-ya; s. 3"
  },
  {
    "id": 21,
    "question": "Buludun elektrik şəbəkəsinə bənzədilməsinin hansı məhdudiyyəti var?",
    "answer": "CPU və GPU kimi hesablama resursları fərqlidir (elektrik vahiddir, hesablama isə deyil) – qiymət/xüsusiyyət növündən asılıdır",
    "options": [
      "CPU və GPU kimi hesablama resursları fərqlidir (elektrik vahiddir, hesablama isə deyil) – qiymət/xüsusiyyət növündən asılıdır",
      "CPU və GPU instansiyaları eyni hesablama vahididir",
      "Hesablama resurslarının qiyməti növündən asılı deyil",
      "Bulud resurslarının istifadəsini ölçmək mümkün deyil",
      "Buludda resurs icarəsi üçün fiziki avadanlıq almaq şərtdir"
    ],
    "keywords": "elektrik = vahid, bulud = müxtəlif növlər",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 1.5 Analogiya və onun limiti; s. 4"
  },
  {
    "id": 22,
    "question": "Miqyaslanmanı elastiklikdən ayıran düzgün fikir hansıdır?",
    "answer": "Miqyaslanma – yükə cavab vermək üçün tutumu artırmaq bacarığı; elastiklik – tutumun avtomatik həm artması, həm azalması",
    "options": [
      "Miqyaslanma – yükə cavab vermək üçün tutumu artırmaq bacarığı; elastiklik – tutumun avtomatik həm artması, həm azalması",
      "Miqyaslanma tutumun yalnız azalmasını ifadə edir",
      "Elastiklik avtomatlaşdırma tələb etməyən genişlənmədir",
      "Elastiklikdə tutum yalnız yuxarı istiqamətdə dəyişir",
      "Miqyaslanan sistem artan yükə cavab verə bilməz"
    ],
    "keywords": "elastiklik = avtomatik + iki istiqamət",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 1.6 Əlaqəli əsas terminlər; s. 5"
  },
  {
    "id": 23,
    "question": "Konteynerin VM-dən daha sürətli başlaması nə ilə izah olunur?",
    "answer": "Hər konteynerin ayrıca OS nüvəsi yaratmaması, host nüvəsindən istifadə etməsi ilə",
    "options": [
      "Hər konteynerin ayrıca OS nüvəsi yaratmaması, host nüvəsindən istifadə etməsi ilə",
      "Hər konteynerin ayrıca fiziki server tələb etməsi ilə",
      "Host nüvəsindən istifadəni dayandırması ilə",
      "Hər konteyner üçün yeni OS nüvəsi yaratması ilə",
      "İşə düşmək üçün bütün şəbəkə qatını əvəz etməsi ilə"
    ],
    "keywords": "nüvə paylaşılır, OS yüklənmir",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 2.1 Abstraksiya zənciri: fiziki serverdən tətbiqə; s. 6"
  },
  {
    "id": 24,
    "question": "İctimai buludda Type 1 hipervizora üstünlük verilməsinin səbəbi hansıdır?",
    "answer": "Hər VM-i və fiziki resursları birbaşa hardware üzərində ayırıb güclü təcrid və performans təmin etmək (host OS-dən asılı olmamaq)",
    "options": [
      "Hər VM-i və fiziki resursları birbaşa hardware üzərində ayırıb güclü təcrid və performans təmin etmək (host OS-dən asılı olmamaq)",
      "Hər VM-i host nüvəsini paylaşan konteynerə çevirmək",
      "Hipervizoru adi host əməliyyat sistemindən asılı etmək",
      "Hər tətbiqə fiziki maşını birbaşa idarə etmək imkanı vermək",
      "Fiziki resursların VM-lər arasında ayrılmasını dayandırmaq"
    ],
    "keywords": "host OS-dən asılı deyil, güclü təcrid",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 2.1 Abstraksiya zənciri: fiziki serverdən tətbiqə; s. 6"
  },
  {
    "id": 25,
    "question": "Control plane ilə data plane-in ayrılmasının əsas faydası nədir?",
    "answer": "İdarəetmə əməliyyatları (VM yaratmaq) tətbiq trafikindən ayrılır; biri digərinə mane olmur",
    "options": [
      "İdarəetmə əməliyyatları (VM yaratmaq) tətbiq trafikindən ayrılır; biri digərinə mane olmur",
      "İdarəetmə sorğuları ilə tətbiq trafiki eyni sorğuya çevrilir",
      "Tətbiq trafikinin ölçülməsinə ehtiyac aradan qalxır",
      "Mövcud iş yükləri hər API gecikməsində yenidən yaradılır",
      "Resursların ayrılması üçün IAM yoxlaması ləğv edilir"
    ],
    "keywords": "ayrı sorğu yolları, bir-birinə mane olmur",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 2.2 Özünəxidmət axını: sorğudan resursa; s. 7"
  },
  {
    "id": 26,
    "question": "Resurs yaratma axınında IAM yoxlaması hansı məqsədə xidmət edir?",
    "answer": "Sorğunu göndərənin həmin əməliyyata icazəsi olub-olmadığını yoxlamaq",
    "options": [
      "Sorğunu göndərənin həmin əməliyyata icazəsi olub-olmadığını yoxlamaq",
      "Sorğu üçün uyğun fiziki host seçməyə",
      "VM üçün CPU və yaddaş ayırmağa",
      "İstifadəyə görə faktura hesablamağa",
      "İşə düşən instansiyanın sağlamlığını yoxlamağa"
    ],
    "keywords": "icazə, autentifikasiya/avtorizasiya",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 2.2 Özünəxidmət axını: sorğudan resursa; s. 7"
  },
  {
    "id": 27,
    "question": "Ölçmə axınında məlumat ötürmə xərcinin görünməməsi hansı problemi yarada bilər?",
    "answer": "Şəffaf olmayan xərc – gözlənilməz yüksək faktura (ötürmə xərci fakturaya düşür, istifadəçi görmür)",
    "options": [
      "Şəffaf olmayan xərc – gözlənilməz yüksək faktura (ötürmə xərci fakturaya düşür, istifadəçi görmür)",
      "Ötürmə haqqının fakturadan avtomatik silinməsini",
      "İstifadəyə görə ödənişin sabit abunəliyə çevrilməsini",
      "İstifadə həcminin avtomatik məhdudlaşdırılmasını",
      "Fakturanın yalnız CPU xərcindən ibarət olmasını"
    ],
    "keywords": "gizli xərc, gözlənilməz faktura",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 2.3 Ölçmə (metering) axını; s. 7"
  },
  {
    "id": 28,
    "question": "Oxuma replikasının əsas bazaya faydası nədir?",
    "answer": "Oxuma yükünü əsas bazadan götürür (oxuma sorğularını qəbul edir)",
    "options": [
      "Oxuma yükünü əsas bazadan götürür (oxuma sorğularını qəbul edir)",
      "Yazma əməliyyatları üçün əsas bazanı əvəz edir",
      "İstifadəçinin DNS sorğusunu həll edir",
      "Tətbiq instansiyaları üçün CPU ayırır",
      "İstifadəyə görə bulud fakturasını yaradır"
    ],
    "keywords": "oxuma yükü, əsas bazaya yük azalır",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 3. Tam arxitektura nümunəsi: elastik e-ticarət sistemi; s. 8"
  },
  {
    "id": 29,
    "question": "Çoxsaylı instansiyaya keçdikdə monitorinqə ehtiyacın artmasının əsas səbəbi nədir?",
    "answer": "Çox instansiyada hansının nasaz, yüklənmiş olduğunu görmək, idarə etmək çətinləşir – görünürlük lazımdır",
    "options": [
      "Çox instansiyada hansının nasaz, yüklənmiş olduğunu görmək, idarə etmək çətinləşir – görünürlük lazımdır",
      "Yeni instansiyalar üçün hüquqi region seçimi dəyişir",
      "Tətbiqin giriş icazələrinin məsuliyyəti provayderə keçir",
      "Oxuma replikası bütün yazma əməliyyatlarını qəbul edir",
      "Trafik bölgüsünü monitorinq sistemi özü həyata keçirir"
    ],
    "keywords": "çox komponent, görünürlük",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 3. Tam arxitektura nümunəsi: elastik e-ticarət sistemi; s. 8"
  },
  {
    "id": 30,
    "question": "Kiçik trafikə malik prototip üçün prioritetlər hansı cütdə düzgün verilib?",
    "answer": "Sürətli başlanğıc və minimal xərc/sadəlik (ilkin yatırım və mürəkkəb əməliyyat yükü olmadan)",
    "options": [
      "Sürətli başlanğıc və minimal xərc/sadəlik (ilkin yatırım və mürəkkəb əməliyyat yükü olmadan)",
      "Qlobal yayılma və çoxregionlu mürəkkəblik",
      "Maksimum fiziki ehtiyat və yüksək ilkin yatırım",
      "Çoxsaylı AZ və mürəkkəb insident idarəetməsi",
      "Böyük server parkı və əl ilə tutum planlaşdırması"
    ],
    "keywords": "sadəlik, aşağı xərc, sürətli başlanğıc",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 4. Kiçik, orta və yüksək miqyaslı sistem nümunələri; s. 8"
  },
  {
    "id": 31,
    "question": "Qlobal yüksək trafikli sistemdə nasazlığa münasibət necə olmalıdır?",
    "answer": "Nasazlıq qaçılmazdır deyə nəzərə alınmalıdır – çoxlu AZ/region, monitorinq və insident idarəetməsi ilə dizayn olunmalıdır",
    "options": [
      "Nasazlıq qaçılmazdır deyə nəzərə alınmalıdır – çoxlu AZ/region, monitorinq və insident idarəetməsi ilə dizayn olunmalıdır",
      "Nasazlıq ehtimalını bulud seçimi ilə yox saymaq",
      "Bütün xidmətləri tək AZ-da cəmləyib monitorinqi azaltmaq",
      "Xərc nəzarətini yalnız fiziki server alışına aid etmək",
      "İnsident idarəetməsini son istifadəçilərə ötürmək"
    ],
    "keywords": "nasazlıq qaçılmazdır, çox AZ",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 4. Kiçik, orta və yüksək miqyaslı sistem nümunələri; s. 9"
  },
  {
    "id": 32,
    "question": "İdarə olunan xidmətlərin vendor lock-in baxımından əsas trade-off-u nədir?",
    "answer": "Daha sürətli inkişaf, lakin provayderdən asılılıq (lock-in) və miqrasiya xərci artır",
    "options": [
      "Daha sürətli inkişaf, lakin provayderdən asılılıq (lock-in) və miqrasiya xərci artır",
      "İnkişaf ləngiyir, provayder dəyişmə xərci yüksəlir",
      "İnkişaf sürətlənir, miqrasiya xərci avtomatik yox olur",
      "Portativlik artır, provayderə asılılıq avtomatik azalır",
      "Əməliyyat yükü artır, provayderə asılılıq yox olur"
    ],
    "keywords": "sürət ↑, asılılıq ↑",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 5. Alternativlər, seçim meyarları və trade-off-lar; s. 9"
  },
  {
    "id": 33,
    "question": "Open-source əsaslı özünüidarə portativlik verir. Bunun müqabilində müştəri hansı yükü qəbul edir?",
    "answer": "Əməliyyat yükünü (quraşdırma, yeniləmə, idarəetmə) özü daşıyır",
    "options": [
      "Əməliyyat yükünü (quraşdırma, yeniləmə, idarəetmə) özü daşıyır",
      "Fiziki data mərkəzinin provayderə aid təhlükəsizliyini",
      "Bütün konfiqurasiya işlərini provayderə ötürməyi",
      "İstifadəyə görə ölçmə və ödənişdən imtina etməyi",
      "Tətbiqi yalnız bir provayderdə işlətmək öhdəliyini"
    ],
    "keywords": "özü idarə edir, əməliyyat yükü",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 5. Alternativlər, seçim meyarları və trade-off-lar; s. 9"
  },
  {
    "id": 34,
    "question": "IaaS ilə SaaS arasında müştərinin təhlükəsizlik məsuliyyəti necə fərqlənir?",
    "answer": "IaaS-də müştərinin məsuliyyəti daha geniş (OS, tətbiq, data), SaaS-də daha dardır (data və giriş)",
    "options": [
      "IaaS-də müştərinin məsuliyyəti daha geniş (OS, tətbiq, data), SaaS-də daha dardır (data və giriş)",
      "IaaS-də daha dar, SaaS-də daha genişdir",
      "Hər ikisində fiziki data mərkəzi müştəriyə aiddir",
      "Hər ikisində tətbiq konfiqurasiyası provayderə aiddir",
      "Hər ikisində məsuliyyət sərhədi eyni qalır"
    ],
    "keywords": "IaaS geniş, SaaS dar",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 6.1 Paylaşılan Məsuliyyət Modeli (Shared Responsibility Model); s. 10"
  },
  {
    "id": 35,
    "question": "Auto-scaling qurulmuş sistemdə xərcin həmişə optimal olacağı iddiası niyə düzgün deyil?",
    "answer": "Auto-scaling düzgün qurulmayıbsa (səhv hədd, aşırı miqyas) və ya baza/ötürmə kimi xərcləri aradan qaldırmır; optimal olması qarantiya deyil",
    "options": [
      "Auto-scaling düzgün qurulmayıbsa (səhv hədd, aşırı miqyas) və ya baza/ötürmə kimi xərcləri aradan qaldırmır; optimal olması qarantiya deyil",
      "Auto-scaling bütün instansiyaları sabit sayda saxlayır",
      "Auto-scaling istifadə ölçmələrini hesabdan çıxarır",
      "Auto-scaling provayder dəyişmə xərcini aradan qaldırır",
      "Auto-scaling region seçimini yalnız gecikməyə bağlayır"
    ],
    "keywords": "auto-scaling xərci avtomatik optimallaşdırmır",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 8. Tipik yanlış anlaşılmalar və düzgün izahlar; s. 12"
  },
  {
    "id": 36,
    "question": "Yüksək əlçatanlıq SLA-sı niyə sıfır-kəsinti zəmanəti deyil?",
    "answer": "SLA ehtimalı və kompensasiyanı müəyyən edir (məs. 99.99%), sıfır kəsinti vəd etmir",
    "options": [
      "SLA ehtimalı və kompensasiyanı müəyyən edir (məs. 99.99%), sıfır kəsinti vəd etmir",
      "Nasazlıq ehtimalının sıfır olduğunu ifadə edir",
      "Hər müştəri üçün çoxregionlu dizaynı avtomatik təmin edir",
      "Dayanma müddətini hesablamağı lazımsız edir",
      "Hər planlı və plansız kəsintini əvvəlcədən aradan qaldırır"
    ],
    "keywords": "SLA ≠ sıfır kəsinti, icazə verilən dayanma",
    "topic": 1,
    "difficulty": 2,
    "reference": "Mövzu 1; 8. Tipik yanlış anlaşılmalar və düzgün izahlar; s. 12"
  },
  {
    "id": 37,
    "question": "Bir xidmət yük artdıqda instansiya sayını avtomatik artırır, yük azaldıqda isə avtomatik azaldır. Bu davranışı ən dəqiq hansı xüsusiyyət ifadə edir?",
    "answer": "Sürətli elastiklik (rapid elasticity)",
    "options": [
      "Sürətli elastiklik (rapid elasticity)",
      "Ölçülən xidmət",
      "Resurs hovuzlaşdırması",
      "Geniş şəbəkə çıxışı",
      "Tələb üzrə özünəxidmət"
    ],
    "keywords": "avtomatik artır/azalır = elastiklik",
    "topic": 1,
    "difficulty": 3,
    "reference": "Mövzu 1; 1.4 Rəsmi tərif: NIST-in beş xüsusiyyəti; s. 4"
  },
  {
    "id": 38,
    "question": "Gecikməsi uyğun olan iki regiondan yalnız biri verilənlərin saxlanmasına dair hüquqi tələbi ödəyir. Region seçimində hansı meyar həlledici olmalıdır?",
    "answer": "Verilənlərin saxlanması/data residency tələbinə uyğunluq (hüquqi uyğunluq)",
    "options": [
      "Verilənlərin saxlanması/data residency tələbinə uyğunluq (hüquqi uyğunluq)",
      "CPU istifadə faizi",
      "Konteynerin başlama sürəti",
      "İnstansiyaların cari sayı",
      "Hipervizorun tipi"
    ],
    "keywords": "hüquqi uyğunluq, data residency",
    "topic": 1,
    "difficulty": 3,
    "reference": "Mövzu 1; 8. Tipik yanlış anlaşılmalar və düzgün izahlar; s. 12"
  },
  {
    "id": 39,
    "question": "Çox-kirayəçili mühitdə əsas prioritet sıxlıq deyil, daha güclü təcriddir. VM və konteyner arasında hansı seçim mühazirədəki trade-off-a uyğundur?",
    "answer": "VM: ayrıca qonaq nüvəsi işlətdiyi üçün daha güclü təcrid verir",
    "options": [
      "VM: ayrıca qonaq nüvəsi işlətdiyi üçün daha güclü təcrid verir",
      "Konteyner: host nüvəsini paylaşdığı üçün",
      "Konteyner: tam qonaq OS yüklədiyi üçün",
      "VM: host nüvəsini paylaşdığı üçün",
      "Konteyner: ayrıca nüvə işlətdiyi üçün"
    ],
    "keywords": "VM = ayrıca nüvə = güclü təcrid",
    "topic": 1,
    "difficulty": 3,
    "reference": "Mövzu 1; 2.1 Abstraksiya zənciri: fiziki serverdən tətbiqə; s. 6"
  },
  {
    "id": 40,
    "question": "Auto-scaling qrupu CPU göstəricisinin təyin edilmiş həddi keçdiyini aşkarlayır. Tutumu artırmaq üçün hansı hərəkət gözlənilir?",
    "answer": "Auto-scaling qrupu yeni instansiya əlavə edir (scale out) və onu balanslayıcıya qoşur",
    "options": [
      "Auto-scaling qrupu yeni instansiya əlavə edir (scale out) və onu balanslayıcıya qoşur",
      "Yalnız mövcud instansiyaların domen adlarını dəyişmək",
      "Metrikanı dəyişmədən xəbərdarlıq həddini yüksəltmək",
      "Mövcud instansiyalardan birini balanslayıcıdan çıxarmaq",
      "İnstansiya sayını saxlayaraq faktura dövrünü dəyişmək"
    ],
    "keywords": "yeni instansiya əlavə et",
    "topic": 1,
    "difficulty": 3,
    "reference": "Mövzu 1; 3. Tam arxitektura nümunəsi: elastik e-ticarət sistemi; s. 8"
  },
  {
    "id": 41,
    "question": "Yeni SaaS layihəsində tələbat naməlumdur, ilkin avadanlıq yatırımı və saxlanılmalı lokal infrastruktur yoxdur. Mühazirədə belə başlanğıc üçün hansı deployment modeli uyğun göstərilir?",
    "answer": "Public cloud (pay-as-you-go, ilkin investisiya yoxdur)",
    "options": [
      "Public cloud (pay-as-you-go, ilkin investisiya yoxdur)",
      "On-premises",
      "Private cloud",
      "Lokal və public mühitli hybrid cloud",
      "Əvvəlcədən alınmış tək fiziki server"
    ],
    "keywords": "public, naməlum tələbat, ilkin xərc yox",
    "topic": 1,
    "difficulty": 3,
    "reference": "Mövzu 1; 5. Alternativlər, seçim meyarları və trade-off-lar; s. 9"
  },
  {
    "id": 42,
    "question": "IaaS istifadəçisi tətbiqin giriş icazələrini səhv qurub. Paylaşılan Məsuliyyət Modelinə görə bu konfiqurasiyanın düzəldilməsi kimə aiddir?",
    "answer": "Müştərinin özünə (IaaS-də identity/giriş konfiqurasiyası müştəri məsuliyyətidir)",
    "options": [
      "Müştərinin özünə (IaaS-də identity/giriş konfiqurasiyası müştəri məsuliyyətidir)",
      "Fiziki data mərkəzi operatoruna",
      "Provayderin hipervizor komandasına",
      "Provayderin enerji təchizatı komandasına",
      "Provayderin fiziki şəbəkə komandasına"
    ],
    "keywords": "giriş konfiqurasiyası = müştəri",
    "topic": 1,
    "difficulty": 3,
    "reference": "Mövzu 1; 6.1 Paylaşılan Məsuliyyət Modeli (Shared Responsibility Model); s. 10"
  },
  {
    "id": 43,
    "question": "Mövsümi zirvələri olan orta trafikli sistemin bütün instansiyaları tək AZ-dadır. AZ nasazlığına bağlı riski azaltmaq üçün hansı dəyişiklik uyğundur?",
    "answer": "İnstansiyaları bir neçə AZ-ə yaymaq (multi-AZ)",
    "options": [
      "İnstansiyaları bir neçə AZ-ə yaymaq (multi-AZ)",
      "Eyni AZ-da daha güclü bir instansiyaya keçmək",
      "Eyni AZ-dakı instansiyaların sayını artırmaq",
      "Eyni AZ-da əlavə oxuma replikası yaratmaq",
      "Eyni AZ-da yük balanslayıcısının tutumunu artırmaq"
    ],
    "keywords": "bir neçə AZ-ə yay",
    "topic": 1,
    "difficulty": 3,
    "reference": "Mövzu 1; 4. Kiçik, orta və yüksək miqyaslı sistem nümunələri; s. 9"
  },
  {
    "id": 44,
    "question": "Tətbiq instansiyalarının sayı artırılıb, amma tək verilənlər bazası artıq darboğazdır. Niyə tətbiq qatının elastikliyi kifayət etmir?",
    "answer": "Verilənlər bazası ayrıca darboğaz qala bilər – tətbiq qatını artırmaq bazanın tutumunu avtomatik artırmır",
    "options": [
      "Verilənlər bazası ayrıca darboğaz qala bilər – tətbiq qatını artırmaq bazanın tutumunu avtomatik artırmır",
      "Yeni tətbiq instansiyası bazanı avtomatik bölür",
      "Yük balanslayıcısı bazanın tutumunu avtomatik artırır",
      "Tətbiq elastikliyi oxuma və yazmaları dayandırır",
      "İnstansiya artımı əsas bazaya ehtiyacı aradan qaldırır"
    ],
    "keywords": "baza ayrıca miqyaslanır",
    "topic": 1,
    "difficulty": 3,
    "reference": "Mövzu 1; 6.3 Nasazlıq ssenariləri; s. 11"
  },
  {
    "id": 45,
    "question": "Sabit, proqnozlaşdırılan və yüksək həcmli yük üçün uzunmüddətli xərc müqayisəsində hansı nəticə mümkündür?",
    "answer": "Sabit və yüksək həcmli yükdə on-premises/rezerv tutum uzunmüddətdə public cloud pay-as-you-go-dan ucuz ola bilər",
    "options": [
      "Sabit və yüksək həcmli yükdə on-premises/rezerv tutum uzunmüddətdə public cloud pay-as-you-go-dan ucuz ola bilər",
      "Pay-as-you-go public cloud iş yükündən asılı olmayaraq ucuzdur",
      "Yüksək istifadə xərc müqayisəsini mənasız edir",
      "On-premises modelində uzunmüddətli xərc hesablana bilməz",
      "Sabit yükdə ilkin kapital xərci avtomatik yox olur"
    ],
    "keywords": "sabit yük → uzunmüddətli ucuz ola bilər",
    "topic": 1,
    "difficulty": 3,
    "reference": "Mövzu 1; 8. Tipik yanlış anlaşılmalar və düzgün izahlar; s. 12"
  },
  {
    "id": 46,
    "question": "Bulud xidmət modeli əsasən nəyi təsvir edir?",
    "answer": "Müştəri ilə provayder arasında məsuliyyətin və abstraksiya səviyyəsinin necə bölündüyünü (hansı qatları kim idarə edir)",
    "options": [
      "Müştəri ilə provayder arasında məsuliyyətin və abstraksiya səviyyəsinin necə bölündüyünü (hansı qatları kim idarə edir)",
      "İnfrastrukturun yerləşdiyi ölkələrin siyahısını",
      "Tətbiqin yazıldığı proqramlaşdırma dilini",
      "Məhsulun kommersiya adını və versiyasını",
      "İstifadəçilərin qoşulduğu şəbəkə protokolunu"
    ],
    "keywords": "məsuliyyət bölgüsü, abstraksiya səviyyəsi",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 2 Əsas anlayışlar: dörd fərqli sual; s. 4"
  },
  {
    "id": 47,
    "question": "IaaS modelində müştəriyə əsasən hansı imkan verilir?",
    "answer": "Öz əməliyyat sistemini seçib quraşdırmaq və ona tam nəzarət etmək (VM üzərində OS, tətbiq, data idarəsi)",
    "options": [
      "Öz əməliyyat sistemini seçib quraşdırmaq və ona tam nəzarət etmək (VM üzərində OS, tətbiq, data idarəsi)",
      "Yalnız hazır tətbiqdə istifadəçi parametrlərini dəyişmək",
      "Provayderin data mərkəzində fiziki serverləri təmir etmək",
      "Yalnız provayderin yazdığı tətbiq kodundan istifadə etmək",
      "Öz kodunu əməliyyat sisteminə nəzarət etmədən yerləşdirmək"
    ],
    "keywords": "OS nəzarəti müştərinin əlindədir",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 1.2 Niyə üç model ortaya çıxıb?; s. 3"
  },
  {
    "id": 48,
    "question": "PaaS modelində müştəri hansı işi görür?",
    "answer": "Öz tətbiq kodunu və konfiqurasiyasını yerləşdirir; OS və icra mühitini provayder idarə edir",
    "options": [
      "Öz tətbiq kodunu və konfiqurasiyasını yerləşdirir; OS və icra mühitini provayder idarə edir",
      "Provayderin fiziki şəbəkə avadanlığını idarə edir",
      "Data mərkəzinin elektrik təminatını təşkil edir",
      "Hazır tətbiqdən yalnız son istifadəçi kimi istifadə edir",
      "Hipervizoru quraşdıraraq fiziki serverləri bölür"
    ],
    "keywords": "kod + konfiqurasiya, OS provayderdə",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 1.2 Niyə üç model ortaya çıxıb?; s. 3"
  },
  {
    "id": 49,
    "question": "SaaS modelinin əsas xüsusiyyəti hansıdır?",
    "answer": "Tətbiq hazır halda təqdim olunur, müştəri yalnız istifadə edir və öz məlumatı/girişini idarə edir",
    "options": [
      "Tətbiq hazır halda təqdim olunur, müştəri yalnız istifadə edir və öz məlumatı/girişini idarə edir",
      "Müştərinin guest OS-i özü yamaqlaması",
      "Fiziki infrastrukturu müştərinin idarə etməsi",
      "Müştərinin icra mühitini özü quraşdırması",
      "Müştərinin bütün tətbiq kodunu özü hazırlaması"
    ],
    "keywords": "hazır tətbiq, brauzerlə istifadə",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 1.2 Niyə üç model ortaya çıxıb?; s. 3"
  },
  {
    "id": 50,
    "question": "Docker və Kubernetes mühazirədə hansı anlayışa nümunədir?",
    "answer": "Xidmət modeli deyil, yerləşdirmə modeli də deyil – onlar konkret texnologiya (konteyner/orkestrasiya) nümunəsidir; bunlar self-hosted və ya idarə olunan xidmət kimi işlədilə bilər",
    "options": [
      "Xidmət modeli deyil, yerləşdirmə modeli də deyil – onlar konkret texnologiya (konteyner/orkestrasiya) nümunəsidir; bunlar self-hosted və ya idarə olunan xidmət kimi işlədilə bilər",
      "Xidmət modeli",
      "Yerləşdirmə modeli",
      "Ödəniş modeli",
      "Ortaq məsuliyyət çərçivəsi"
    ],
    "keywords": "texnologiya nümunəsi, model deyil",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 2 Əsas anlayışlar: dörd fərqli sual; s. 4"
  },
  {
    "id": 51,
    "question": "Yerləşdirmə modeli hansı suala cavab verir?",
    "answer": "Bulud mühiti kimə məxsusdur və kim istifadə edə bilər (public, private, hybrid) – infrastruktur harada və kimin üçündür",
    "options": [
      "Bulud mühiti kimə məxsusdur və kim istifadə edə bilər (public, private, hybrid) – infrastruktur harada və kimin üçündür",
      "Tətbiq kodunu hansı tərəf yamaqlayır?",
      "Proqram hansı dil ilə yazılıb?",
      "Müştəri hansı hazır məhsulu satın alır?",
      "Tətbiqin hansı sorğusu daha sürətlidir?"
    ],
    "keywords": "kim istifadə edir, harada yerləşir",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 2 Əsas anlayışlar: dörd fərqli sual; s. 4"
  },
  {
    "id": 52,
    "question": "İdarə olunan xidmət anlayışı nəyi bildirir?",
    "answer": "Provayderin infrastrukturu və/və ya proqramı özünün idarə etməsi, müştərinin yalnız istifadə etməsi (operasiya yükü provayderdə)",
    "options": [
      "Provayderin infrastrukturu və/və ya proqramı özünün idarə etməsi, müştərinin yalnız istifadə etməsi (operasiya yükü provayderdə)",
      "NIST-in dördüncü xidmət modelini",
      "Yalnız müştərinin idarə etdiyi fiziki serveri",
      "Public və private cloud arasındakı yerləşdirmə seçimini",
      "Bütün proqramlar üçün vahid təhlükəsizlik protokolunu"
    ],
    "keywords": "provayder idarə edir",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 2 Əsas anlayışlar: dörd fərqli sual; s. 4"
  },
  {
    "id": 53,
    "question": "Self-hosted ifadəsi proqram haqqında nəyi göstərir?",
    "answer": "Proqramı istifadəçinin/təşkilatın özü quraşdırıb idarə etməsi (provayder idarə etmir)",
    "options": [
      "Proqramı istifadəçinin/təşkilatın özü quraşdırıb idarə etməsi (provayder idarə etmir)",
      "Proqramın yalnız öz data mərkəzində işlədiyini",
      "Proqramın ayrıca NIST xidmət modeli olduğunu",
      "Əməliyyat sistemini həmişə provayderin idarə etdiyini",
      "Proqramın yalnız private cloud-da işləyə bildiyini"
    ],
    "keywords": "özü quraşdırır və idarə edir",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 2 Əsas anlayışlar: dörd fərqli sual; s. 5"
  },
  {
    "id": 54,
    "question": "Doqquz qatlı bölgüdə hipervizorun əsas işi nədir?",
    "answer": "Fiziki serverin resurslarını bir neçə VM arasında bölüb təcrid etmək (virtuallaşdırma qatı)",
    "options": [
      "Fiziki serverin resurslarını bir neçə VM arasında bölüb təcrid etmək (virtuallaşdırma qatı)",
      "Tətbiqin paylaşma icazələrini müəyyən etmək",
      "İstifadəçilər üçün MFA siyasəti yaratmaq",
      "Verilənlər bazası sorğularını optimallaşdırmaq",
      "Tətbiqin biznes məntiqini icra etmək"
    ],
    "keywords": "resursları VM-lər arasında bölmək",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 3 Qatlar və məsuliyyət sərhədi; s. 5"
  },
  {
    "id": 55,
    "question": "Veb server və ya Java/Python mühiti kimi tətbiqin işləməsi üçün lazım olan komponent doqquz qatlı bölgünün hansı qatına aiddir?",
    "answer": "Tətbiq icra mühiti / runtime qatı (virtuallaşdırma/OS-dən yuxarı, tətbiq kodundan aşağı)",
    "options": [
      "Tətbiq icra mühiti / runtime qatı (virtuallaşdırma/OS-dən yuxarı, tətbiq kodundan aşağı)",
      "Fiziki şəbəkə və serverlər",
      "İstifadəçi kimlikləri və giriş",
      "Tətbiq konfiqurasiyası",
      "Virtuallaşdırma"
    ],
    "keywords": "runtime, icra mühiti",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 3 Qatlar və məsuliyyət sərhədi; s. 5"
  },
  {
    "id": 56,
    "question": "Sadələşdirilmiş məsuliyyət bölgüsündə IaaS provayderi hansı qatlar qrupunu idarə edir?",
    "answer": "Fiziki şəbəkə, serverlər və virtuallaşdırma (hipervizor) qatları",
    "options": [
      "Fiziki şəbəkə, serverlər və virtuallaşdırma (hipervizor) qatları",
      "Əməliyyat sistemi, icra mühiti və tətbiq kodu",
      "Tətbiq kodu, məlumat və istifadəçi kimlikləri",
      "Tətbiq konfiqurasiyası, giriş və paylaşma qərarları",
      "İcra mühiti, məlumat və tətbiqin biznes məntiqi"
    ],
    "keywords": "fiziki qatlar + virtuallaşdırma",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 3 Qatlar və məsuliyyət sərhədi; s. 6"
  },
  {
    "id": 57,
    "question": "Sadələşdirilmiş qat bölgüsündə tətbiq kodu da hansı modeldə provayderə keçir?",
    "answer": "SaaS",
    "options": [
      "SaaS",
      "IaaS",
      "PaaS",
      "On-premises idarəetmə",
      "IaaS VM-də self-hosted idarəetmə"
    ],
    "keywords": "kod da provayderdə = SaaS",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 3 Qatlar və məsuliyyət sərhədi; s. 6"
  },
  {
    "id": 58,
    "question": "IaaS VM işə düşdükdən sonra guest OS yamaqlarına kim cavabdehdir?",
    "answer": "Müştəri (IaaS-də guest OS yamağı müştərinin işidir)",
    "options": [
      "Müştəri (IaaS-də guest OS yamağı müştərinin işidir)",
      "Fiziki serverin istehsalçısı",
      "Bulud provayderi",
      "Şəbəkə bağlantısı verən operator",
      "Tətbiqin son istifadəçiləri"
    ],
    "keywords": "guest OS = müştəri",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 4.1 IaaS: müştəri VM istəyir; s. 7"
  },
  {
    "id": 59,
    "question": "SaaS-ın sadələşdirilmiş axınında istifadəçi hazır tətbiqə hansı protokolla daxil olur?",
    "answer": "HTTPS / veb brauzer vasitəsilə (HTTP)",
    "options": [
      "HTTPS / veb brauzer vasitəsilə (HTTP)",
      "SSH",
      "RDP",
      "FTP",
      "SMTP"
    ],
    "keywords": "brauzer, HTTP(S)",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 4.3 SaaS: istifadəçi hazır tətbiqə daxil olur; s. 7"
  },
  {
    "id": 60,
    "question": "Ortaq məsuliyyət modeli hansı bölgünü izah edir?",
    "answer": "Bulud provayderi ilə müştəri arasında təhlükəsizlik və əməliyyat vəzifələrinin bölgüsünü",
    "options": [
      "Bulud provayderi ilə müştəri arasında təhlükəsizlik və əməliyyat vəzifələrinin bölgüsünü",
      "Müştərilərin istifadəçi sayına görə qruplaşdırılmasını",
      "Public cloud regionlarının coğrafi bölgüsünü",
      "Proqramlaşdırma dillərinin icra sürətinə görə sıralanmasını",
      "Bulud provayderlərinin bazar paylarının müqayisəsini"
    ],
    "keywords": "provayder ↔ müştəri vəzifə bölgüsü",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 5 Ortaq məsuliyyət modeli; s. 8"
  },
  {
    "id": 61,
    "question": "Ortaq məsuliyyət bölgüsündə bulud xidmətlərini işlədən bina, fiziki şəbəkə, serverlər və virtuallaşdırmanın qorunması kimə aiddir?",
    "answer": "Bulud provayderinə",
    "options": [
      "Bulud provayderinə",
      "VM daxilindəki tətbiqi hazırlayan müştəriyə",
      "Tətbiqin son istifadəçilərinə",
      "Müştərinin internet operatoruna",
      "Müştərinin proqram lisenziyasını verən tərəfə"
    ],
    "keywords": "fiziki + virtuallaşdırma = provayder",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 5.1; s. 8"
  },
  {
    "id": 62,
    "question": "Lock-in (bağlılıq) anlayışı nə deməkdir?",
    "answer": "Müştərinin müəyyən provayderdən/xidmətdən asılı qalması, başqasına keçməsinin çətin və bahalı olması",
    "options": [
      "Müştərinin müəyyən provayderdən/xidmətdən asılı qalması, başqasına keçməsinin çətin və bahalı olması",
      "İstifadəçi hesabının müvəqqəti bloklanması",
      "VM-in dayandırılıb yenidən başladılması",
      "Məlumatın yalnız şifrələnmiş saxlanması",
      "Tətbiqin eyni vaxtda çox müştəriyə xidmət etməsi"
    ],
    "keywords": "asılılıq, keçmək çətin",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; Terminlər lüğəti; s. 16"
  },
  {
    "id": 63,
    "question": "Bulud komponenti üçün üç əsas seçim meyarı hansı variantda düzgün verilib?",
    "answer": "Daşınabilirlik, uyğunluq, xərc profili",
    "options": [
      "Daşınabilirlik, uyğunluq, xərc profili",
      "Daşınabilirlik, uyğunluq, xərc profili",
      "İstifadəçi sayı, region sayı, tətbiqin ölçüsü",
      "Proqramlaşdırma dili, lisenziya növü, backup tezliyi",
      "Ödəniş vahidi, instansiya sayı, icra mühitinin versiyası"
    ],
    "keywords": "portativlik, uyğunluq, xərc",
    "topic": 2,
    "difficulty": 1,
    "reference": "Mövzu 2; 13 Əsas nəticələr; s. 16"
  },
  {
    "id": 64,
    "question": "Yeni bulud xidmətinə IaaS, PaaS və ya SaaS etiketi verməzdən əvvəl hansı addım daha düzgündür?",
    "answer": "Xidmətin kim nəyi idarə etdiyini (müştəri hansı qatları idarə edir) təhlil etmək",
    "options": [
      "Xidmətin kim nəyi idarə etdiyini (müştəri hansı qatları idarə edir) təhlil etmək",
      "Məhsul adında “cloud” sözünün olub-olmadığını yoxlamaq",
      "Xidməti istifadəçi sayına görə modelə aid etmək",
      "Yalnız reklam mətnindəki model adını əsas götürmək",
      "Proqramlaşdırma dilinə əsasən xidmət modelini seçmək"
    ],
    "keywords": "qat-qat təhlil, kim idarə edir",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 2.1 Xidməti əvvəlcə etiketləmə qaydası; s. 5"
  },
  {
    "id": 65,
    "question": "Bir bulud sistemi eyni zamanda “private” və “IaaS” kimi təsvir olunursa, bu necə izah edilir?",
    "answer": "Private bulud yerləşdirmə modelidir, IaaS xidmət modelidir – iki fərqli ölçü, bir-birini istisna etmir (private IaaS mümkündür)",
    "options": [
      "Private bulud yerləşdirmə modelidir, IaaS xidmət modelidir – iki fərqli ölçü, bir-birini istisna etmir (private IaaS mümkündür)",
      "Private cloud-da IaaS mümkün olmadığı üçün təsvir ziddiyyətlidir",
      "Private sözü yalnız proqramlaşdırma texnologiyasını göstərir",
      "IaaS etiketi yalnız public cloud infrastrukturu üçün istifadə olunur",
      "Bu iki ifadə eyni xidmət modelinin fərqli kommersiya adlarıdır"
    ],
    "keywords": "iki fərqli ölçü: yerləşdirmə + xidmət",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 2 Əsas anlayışlar: dörd fərqli sual; s. 4"
  },
  {
    "id": 66,
    "question": "Məsuliyyət cədvəlində M* işarəsinin düzgün izahı hansıdır?",
    "answer": "Provayderin verdiyi alətlərə baxmayaraq müştəri həmin qatda öz məsuliyyətini saxlayır (müştəri provayder alətlərini düzgün istifadə etməlidir)",
    "options": [
      "Provayderin verdiyi alətlərə baxmayaraq müştəri həmin qatda öz məsuliyyətini saxlayır (müştəri provayder alətlərini düzgün istifadə etməlidir)",
      "Müştərinin həmin qat üzrə məsuliyyəti provayderə tam keçir",
      "Provayderin verdiyi alətlər müştərinin düzgün istifadə öhdəliyini aradan qaldırır",
      "Həmin qat yalnız IaaS-da mövcuddur və digər modellərdə silinir",
      "Müştəri və provayder hər bir əməliyyatı mütləq eyni vaxtda yerinə yetirir"
    ],
    "keywords": "alət verilsə də müştəri cavabdehdir",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 3 Qatlar və məsuliyyət sərhədi; s. 6"
  },
  {
    "id": 67,
    "question": "IaaS-dan PaaS-a keçiddə sadələşdirilmiş bölgüyə görə hansı əlavə qatlar provayderə keçir?",
    "answer": "Əməliyyat sistemi və icra mühiti (runtime) qatları",
    "options": [
      "Əməliyyat sistemi və icra mühiti (runtime) qatları",
      "Tətbiq kodu və istifadəçi kimlikləri",
      "Məlumat və paylaşma konfiqurasiyası",
      "Fiziki bina və elektrik təminatı",
      "Fiziki serverlər və virtuallaşdırma"
    ],
    "keywords": "OS + runtime provayderə keçir",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 3 Qatlar və məsuliyyət sərhədi; s. 6"
  },
  {
    "id": 68,
    "question": "PaaS-da provayder instansiyaları idarə etsə də, hansı iş müştəridə qalır?",
    "answer": "Tətbiq kodu, konfiqurasiya və məlumat səviyyəsindəki iş (müştərinin öz tətbiqi və datası)",
    "options": [
      "Tətbiq kodu, konfiqurasiya və məlumat səviyyəsindəki iş (müştərinin öz tətbiqi və datası)",
      "Data mərkəzində soyutma sisteminin idarəsi",
      "Fiziki serverin sıradan çıxmış hissəsinin dəyişdirilməsi",
      "Hipervizorun təhlükəsizlik yamaqlarının quraşdırılması",
      "Platformanın əməliyyat sistemi yamaqlarının tətbiqi"
    ],
    "keywords": "tətbiq + data müştəridə",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 4.2 PaaS: müştəri kod və konfiqurasiya verir; s. 7"
  },
  {
    "id": 69,
    "question": "Niyə doqquz qatlı konseptual cədvəl real xidmətin bütün məsuliyyətlərini dəqiq müəyyən etmək üçün kifayət deyil?",
    "answer": "Real xidmətlərdə məsuliyyət bölgüsü xidmətin konkret sənədlərindən asılıdır, cədvəl sadələşdirilmiş konseptual modeldir",
    "options": [
      "Real xidmətlərdə məsuliyyət bölgüsü xidmətin konkret sənədlərindən asılıdır, cədvəl sadələşdirilmiş konseptual modeldir",
      "Bütün real xidmətlər yalnız SaaS modelinə uyğun gəlir",
      "Qat bölgüsü yalnız fiziki serverlərin ölçüsünü göstərir",
      "Real xidmətlərdə müştərinin heç bir məsuliyyəti qalmır",
      "Cədvəldəki model adları yalnız qiymət səviyyələrini bildirir"
    ],
    "keywords": "sadələşdirilmiş, real xidmət fərqli ola bilər",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 3 Qatlar və məsuliyyət sərhədi; s. 6"
  },
  {
    "id": 70,
    "question": "Bir xidmət müştəriyə guest OS-i müştərinin özünün idarə etdiyi VM verir; digəri isə OS-i müştəriyə idarə etdirməyən abstrakt idarə olunan xidmətdir. Məsuliyyət bölgüsü barədə hansı fikir düzgündür?",
    "answer": "VM-də guest OS müştəridədir, abstrakt idarə olunan xidmətdə OS provayderdədir; hər iki halda data və giriş məsuliyyəti müştəridə qalır",
    "options": [
      "VM-də guest OS müştəridədir, abstrakt idarə olunan xidmətdə OS provayderdədir; hər iki halda data və giriş məsuliyyəti müştəridə qalır",
      "VM-də guest OS yamağı provayderdədir; abstrakt xidmətdə müştəri hipervizoru yamaqlayır",
      "Hər iki xidmətdə müştəri provayderin fiziki serverlərini yamaqlayır",
      "Abstrakt xidmətdə provayder OS-i idarə etdiyinə görə müştərinin məlumat məsuliyyəti də bitir",
      "VM müştərisi OS-i idarə etdiyinə görə həmin VM-in fiziki infrastrukturu da onun məsuliyyətindədir"
    ],
    "keywords": "hər ikisində data müştəridə, OS fərqlidir",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 5.1; s. 8"
  },
  {
    "id": 71,
    "question": "Ortaq məsuliyyət cədvəlində bir sahənin “Paylaşılan” göstərilməsi nə deməkdir?",
    "answer": "Məsuliyyət həm provayder, həm müştəri arasında bölünür (hər iki tərəf üzərinə düşür)",
    "options": [
      "Məsuliyyət həm provayder, həm müştəri arasında bölünür (hər iki tərəf üzərinə düşür)",
      "Həmin sahədə heç bir tərəf cavabdeh deyil",
      "Həmin sahədə bütün iş yalnız provayderin üzərindədir",
      "Həmin sahədə bütün iş yalnız müştərinin üzərindədir",
      "Həmin sahədə məsuliyyət yalnız proqramın istehsalçısına aiddir"
    ],
    "keywords": "hər iki tərəf",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 5.2; s. 9"
  },
  {
    "id": 72,
    "question": "Mühazirədəki “shared fate” yanaşması məsuliyyət bölgüsünə hansı dəstəyi əlavə edir?",
    "answer": "Provayderin müştərinin uğurunda maraqlı olması və təhlükəsiz konfiqurasiya, şablon, bələdçi kimi dəstək verməsi",
    "options": [
      "Provayderin müştərinin uğurunda maraqlı olması və təhlükəsiz konfiqurasiya, şablon, bələdçi kimi dəstək verməsi",
      "Müştərinin giriş siyasətlərinin tamamilə ləğvini",
      "Bütün bulud provayderləri üçün məcburi sənaye standartını",
      "İdarə olunan xidmətlərdə məlumat məsuliyyətinin yox olmasını",
      "Müştərinin provayderin fiziki infrastrukturu üzərində nəzarətini"
    ],
    "keywords": "provayder dəstək verir, əməkdaşlıq",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 5.3; s. 9"
  },
  {
    "id": 73,
    "question": "İdarə olunan verilənlər bazası xidmətində ehtiyat nüsxə və proqram yamaqlarını provayder edir. Hansı iş yenə müştəridə qalır?",
    "answer": "Məlumatın özü, giriş icazələri və konfiqurasiya (müştəri öz datasına görə cavabdehdir)",
    "options": [
      "Məlumatın özü, giriş icazələri və konfiqurasiya (müştəri öz datasına görə cavabdehdir)",
      "Xidmətin fiziki hostlarının yamaqlanması",
      "Xidmətin hipervizorunun yenilənməsi",
      "Provayderin data mərkəzinin elektrik təminatı",
      "Provayderin fiziki şəbəkəsinin qorunması"
    ],
    "keywords": "data, giriş, konfiqurasiya",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 6; s. 9"
  },
  {
    "id": 74,
    "question": "Provayder daha çox qat idarə etdikdə əsas trade-off necə dəyişir?",
    "answer": "Əməliyyat yükü azalır, nəzarət azalır",
    "options": [
      "Əməliyyat yükü azalır, nəzarət azalır",
      "Əməliyyat yükü azalır, OS nəzarəti artır",
      "Əməliyyat yükü artır, nəzarət azalır",
      "Əməliyyat yükü və nəzarət artır",
      "Əməliyyat yükü azalır, nəzarət dəyişmir"
    ],
    "keywords": "yük ↓, nəzarət ↓",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 9.1 Hər modelin üstünlükləri və çatışmazlıqları; s. 13"
  },
  {
    "id": 75,
    "question": "Provayderə bağlılıq riskini azaltmağa hansı yanaşma kömək edə bilər?",
    "answer": "Daşınabilirliyi nəzərə almaq (standart interfeyslər, məlumatın çıxarılması planı)",
    "options": [
      "Daşınabilirliyi nəzərə almaq (standart interfeyslər, məlumatın çıxarılması planı)",
      "Yalnız provayderə xas interfeyslərdən istifadə",
      "Məlumatın başqa sistemə çıxarılmasını planlaşdırmamaq",
      "Xidmət seçərkən daşınabilirliyi nəzərə almamaq",
      "Bütün tətbiqi provayderin xüsusi imkanlarına bağlamaq"
    ],
    "keywords": "standartlar, çıxış planı",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 9.1 Hər modelin üstünlükləri və çatışmazlıqları; s. 13"
  },
  {
    "id": 76,
    "question": "SaaS seçiminin xüsusi tələblərə uyğunlaşdırma baxımından əsas məhdudiyyəti nədir?",
    "answer": "Tətbiq xüsusiyyətləri provayderin təqdim etdiyi ilə məhdudlaşır, dərin uyğunlaşdırma çətindir",
    "options": [
      "Tətbiq xüsusiyyətləri provayderin təqdim etdiyi ilə məhdudlaşır, dərin uyğunlaşdırma çətindir",
      "Müştəri fiziki serverləri özü qurmalıdır",
      "Müştəri OS yamaqlarını özü tətbiq etməlidir",
      "Müştəri bütün icra mühitini özü yaratmalıdır",
      "Hazır tətbiqə brauzerdən giriş mümkün deyil"
    ],
    "keywords": "az uyğunlaşdırma",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 9.1 Hər modelin üstünlükləri və çatışmazlıqları; s. 13"
  },
  {
    "id": 77,
    "question": "Komandanın yamaq, backup və növbətçilik yükünü daşımağa insan və vaxtının çatması hansı meyarı qiymətləndirir?",
    "answer": "Komandanın əməliyyat gücü/imkanı (operational capacity)",
    "options": [
      "Komandanın əməliyyat gücü/imkanı (operational capacity)",
      "Fərqləndirici dəyəri",
      "Məlumatın yerləşdiyi regionu",
      "Proqramın lisenziya növünü",
      "Texnologiyanın xidmət modelini"
    ],
    "keywords": "komandanın əməliyyat imkanı",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 9.2 Seçim meyarları; s. 13"
  },
  {
    "id": 78,
    "question": "Vendor uyğunluq xəritəsində eyni sətirdə göstərilən xidmətləri necə oxumaq lazımdır?",
    "answer": "Eyni ehtiyacı ödəyən analoji xidmətlər kimi, lakin detalları (məsuliyyət, limitlər, qiymət) fərqli ola bilər",
    "options": [
      "Eyni ehtiyacı ödəyən analoji xidmətlər kimi, lakin detalları (məsuliyyət, limitlər, qiymət) fərqli ola bilər",
      "Tam eyni məsuliyyət bölgüsü olan məhsullar kimi",
      "Eyni qiymət və limitləri olan xidmətlər kimi",
      "Bir-birinə dəyişikliksiz köçürülən tətbiqlər kimi",
      "Hamısı eyni yerləşdirmə modelinə aid sistemlər kimi"
    ],
    "keywords": "oxşar məqsəd, fərqli detallar",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 11 Fundamental anlayış → AWS → Azure → GCP → açıq mənbə; s. 15"
  },
  {
    "id": 79,
    "question": "“Bulud avtomatik ucuzdur” iddiasına qarşı düzgün izah hansıdır?",
    "answer": "Xərc istifadə və planlaşdırmadan asılıdır: SaaS-da istifadə edilməyən lisenziyalar da ödənilir (digər variantlar səhvdir)",
    "options": [
      "Xərc istifadə və planlaşdırmadan asılıdır: SaaS-da istifadə edilməyən lisenziyalar da ödənilir (digər variantlar səhvdir)",
      "Bütün bulud xidmətləri yalnız sabit aylıq ödənişlə verilir",
      "SaaS-da istifadə edilməyən lisenziyalar xərc yaratmır",
      "PaaS planının ölçüsü xərcə təsir etmir",
      "IaaS-da unudulmuş VM üçün ödəniş yaranmır"
    ],
    "keywords": "xərc istifadədən asılıdır, lisenziya hələ də ödənilir",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 10 Təhlükəsizlik, xərc, performans və etibarlılıq: əsas nəticələr; s. 14"
  },
  {
    "id": 80,
    "question": "İdarə olunan xidmətdə tətbiqin avtomatik sürətli olmamasının əsas səbəbi nədir?",
    "answer": "Provayderin yamaq və backup işləri tətbiq performansını avtomatik artırmır – performans arxitekturadan, kod və sorğulardan asılıdır",
    "options": [
      "Provayderin yamaq və backup işləri tətbiq performansını avtomatik artırmır – performans arxitekturadan, kod və sorğulardan asılıdır",
      "İdarə olunan xidmətlər tətbiq kodunu işlətmir",
      "Provayderin yamaq tətbiqi bütün sorğuları avtomatik optimallaşdırır",
      "Backup mexanizmi tətbiqin bütün gecikmələrini aradan qaldırır",
      "Əməliyyat yükünün azalması performansı mütləq zəiflədir"
    ],
    "keywords": "performans avtomatik deyil",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 10 Təhlükəsizlik, xərc, performans və etibarlılıq: əsas nəticələr; s. 14"
  },
  {
    "id": 81,
    "question": "“Kiçik sistem üçün SaaS, böyük sistem üçün IaaS” qaydası niyə düzgün deyil?",
    "answer": "Model seçimi sistemin ölçüsünə görə deyil, hər komponentin nəzarət/əməliyyat ehtiyacına görə olur",
    "options": [
      "Model seçimi sistemin ölçüsünə görə deyil, hər komponentin nəzarət/əməliyyat ehtiyacına görə olur",
      "Böyük sistemlərdə idarə olunan xidmət işlətmək mümkün deyil",
      "Kiçik sistemlərdə OS səviyyəsində nəzarət tələb oluna bilməz",
      "İstifadəçi sayı məsuliyyət sərhədini birbaşa müəyyən edir",
      "Bütün komponentlərə eyni xidmət modeli tətbiq olunmalıdır"
    ],
    "keywords": "ölçü deyil, komponent ehtiyacı",
    "topic": 2,
    "difficulty": 2,
    "reference": "Mövzu 2; 8 Miqyas nümunələri; s. 13"
  },
  {
    "id": 82,
    "question": "Tətbiq xüsusi lisenziyalı proqram və OS səviyyəsində tənzimləmə tələb edir. Bu tələb baxımından hansı seçim daha uyğundur?",
    "answer": "IaaS (OS və proqram səviyyəsində tam nəzarət)",
    "options": [
      "IaaS (OS və proqram səviyyəsində tam nəzarət)",
      "Məhdud ayarlı hazır SaaS tətbiqi",
      "OS nəzarəti verməyən PaaS platforması",
      "Yalnız hazır onlayn forma xidməti",
      "Yalnız xarici e-poçt göndərmə xidməti"
    ],
    "keywords": "OS nəzarəti = IaaS",
    "topic": 2,
    "difficulty": 3,
    "reference": "Mövzu 2; 8 Miqyas nümunələri; s. 12"
  },
  {
    "id": 83,
    "question": "OS səviyyəsində nəzarət tələb etməyən tətbiq üçün komandanın yamaq və backup işlərinə vaxtı yoxdur. Öz kodunu işlətmək şərti ilə hansı seçim əsas əməliyyat yükünü azaldar?",
    "answer": "PaaS (öz kodunu işlət, OS və platforma provayderdə)",
    "options": [
      "PaaS (öz kodunu işlət, OS və platforma provayderdə)",
      "Özünün idarə etdiyi tək IaaS VM",
      "Öz data mərkəzində fiziki server",
      "IaaS VM-də özünün qurduğu platforma",
      "Öz serverində idarə etdiyi konteyner klasteri"
    ],
    "keywords": "öz kod + OS provayderdə = PaaS",
    "topic": 2,
    "difficulty": 3,
    "reference": "Mövzu 2; 9.1 Hər modelin üstünlükləri və çatışmazlıqları; s. 13"
  },
  {
    "id": 84,
    "question": "PaaS-da işləyən tətbiqin OS yamaqlarını provayder edir, lakin tətbiqin API açarı sızdırılıb. Müştərinin əsas tədbiri hansı olmalıdır?",
    "answer": "API açarını dəyişdirmək (rotate), giriş siyasətlərini və tətbiq təhlükəsizliyini yoxlamaq – müştərinin işidir",
    "options": [
      "API açarını dəyişdirmək (rotate), giriş siyasətlərini və tətbiq təhlükəsizliyini yoxlamaq – müştərinin işidir",
      "Provayderin fiziki serverini özü yamaqlamaq",
      "Data mərkəzinin soyutma sistemini yeniləmək",
      "Provayderin hipervizorunu yenidən quraşdırmaq",
      "Təhlükəsizliyi yalnız OS yamaqlarına həvalə etmək"
    ],
    "keywords": "açarı dəyiş, giriş idarəsi müştəridə",
    "topic": 2,
    "difficulty": 3,
    "reference": "Mövzu 2; 10 Təhlükəsizlik, xərc, performans və etibarlılıq: əsas nəticələr; s. 14"
  },
  {
    "id": 85,
    "question": "SaaS-da məxfi sənəd “linki olan hər kəs baxa bilər” rejimində paylaşılır. Məsuliyyət bölgüsünə uyğun tədbir hansıdır?",
    "answer": "Sənədin paylaşma icazələrini yoxlayıb məhdudlaşdırmaq (müştərinin konfiqurasiyası)",
    "options": [
      "Sənədin paylaşma icazələrini yoxlayıb məhdudlaşdırmaq (müştərinin konfiqurasiyası)",
      "Provayderin guest OS-inə yamaq tətbiq etmək",
      "Müştəri tərəfində hipervizoru dəyişmək",
      "Provayderin fiziki şəbəkəsini yenidən qurmaq",
      "Sənədin icazələrinə baxmadan yalnız xidmət planını artırmaq"
    ],
    "keywords": "paylaşma icazəsi müştəridə",
    "topic": 2,
    "difficulty": 3,
    "reference": "Mövzu 2; 4.3 SaaS: istifadəçi hazır tətbiqə daxil olur; s. 7"
  },
  {
    "id": 86,
    "question": "Komponent üçün OS nəzarəti lazım deyil, amma məlumat yalnız müəyyən regionda saxlanmalıdır. Seçimdə nə edilməlidir?",
    "answer": "SaaS-da belə data yerləşməsi tələbini ayrıca yoxlamaq (region/uyğunluq) – əməliyyat yükü azlığı tələbi ödəmir",
    "options": [
      "SaaS-da belə data yerləşməsi tələbini ayrıca yoxlamaq (region/uyğunluq) – əməliyyat yükü azlığı tələbi ödəmir",
      "Nəzarət ehtiyacı olmadığı üçün region tələbini nəzərə almamaq",
      "Yalnız istifadəçi sayına əsasən xidmət modelini seçmək",
      "SaaS seçildikdə region məhdudiyyətini avtomatik ödənmiş saymaq",
      "Əməliyyat yükü az olan bütün xidmətləri uyğun hesab etmək"
    ],
    "keywords": "region/uyğunluq ayrıca yoxlanır",
    "topic": 2,
    "difficulty": 3,
    "reference": "Mövzu 2; 9.2 Seçim meyarları; s. 14"
  },
  {
    "id": 87,
    "question": "Cloud Foundry və ya Dokku kimi PaaS proqramı IaaS VM-də özün quraşdırılıb idarə olunur. Bu halda hansı nəticə düzgündür?",
    "answer": "Self-hosted olduğuna görə IaaS VM-in OS, platforma və tətbiq idarəsi müştəridə qalır; provayder yalnız altyapıya cavabdehdir",
    "options": [
      "Self-hosted olduğuna görə IaaS VM-in OS, platforma və tətbiq idarəsi müştəridə qalır; provayder yalnız altyapıya cavabdehdir",
      "Proqram PaaS adlandığı üçün OS avtomatik provayderə keçir",
      "IaaS provayderi yerləşdirilən tətbiqin bütün koduna cavabdeh olur",
      "Açıq mənbə proqram istifadəçi girişlərinin idarəsini ləğv edir",
      "Self-hosted seçim məlumat üzrə məsuliyyəti provayderə keçirir"
    ],
    "keywords": "self-hosted = müştəri idarə edir",
    "topic": 2,
    "difficulty": 3,
    "reference": "Mövzu 2; 11 Fundamental anlayış → AWS → Azure → GCP → açıq mənbə; s. 15"
  },
  {
    "id": 88,
    "question": "Tətbiq və verilənlər bazası tək bulud VM-də işləyir. VM dayandıqda hər ikisi dayanır. Hansı nəticə düzgündür?",
    "answer": "Tək VM tək nasazlıq nöqtəsidir – əlavə instansiya/ayrı baza və ya çoxlu AZ ehtiyacı var",
    "options": [
      "Tək VM tək nasazlıq nöqtəsidir – əlavə instansiya/ayrı baza və ya çoxlu AZ ehtiyacı var",
      "IaaS tətbiqləri həmişə provayder tərəfindən başqa VM-ə keçirilir",
      "Tək VM istifadəsi nasazlıq nöqtəsinin olmadığını göstərir",
      "İstifadəyə görə ödəniş bütün dayanma risklərini aradan qaldırır",
      "Eyni VM-də baza yerləşdirmək avtomatik yüksək əlçatanlıq yaradır"
    ],
    "keywords": "tək VM = tək nasazlıq nöqtəsi",
    "topic": 2,
    "difficulty": 3,
    "reference": "Mövzu 2; 10 Təhlükəsizlik, xərc, performans və etibarlılıq: əsas nəticələr; s. 14"
  },
  {
    "id": 89,
    "question": "Bir komponent müştərinin xüsusi OS tənzimləməsini tələb edir; digər komponentdə isə provayderin hazır sənəd paylaşma tətbiqindən istifadə olunur. Bu iki komponentə uyğun xidmət modeli bölgüsü hansıdır?",
    "answer": "OS nəzarəti tələb edən komponent IaaS, hazır sənəd paylaşımı SaaS",
    "options": [
      "OS nəzarəti tələb edən komponent IaaS, hazır sənəd paylaşımı SaaS",
      "OS nəzarəti tələb edən komponent SaaS, hazır sənəd paylaşımı IaaS",
      "Hər iki komponent SaaS, çünki hər ikisi buludda işləyir",
      "Hər iki komponent PaaS, çünki biri xüsusi OS tənzimləməsi tələb edir",
      "Hər iki komponent IaaS, çünki bir komponent üçün OS nəzarəti lazımdır"
    ],
    "keywords": "komponent-komponent: IaaS + SaaS",
    "topic": 2,
    "difficulty": 3,
    "reference": "Mövzu 2; 1.2; s. 3"
  },
  {
    "id": 90,
    "question": "IaaS-da unudulmuş VM, PaaS-da lazımsız yüksək plan və SaaS-da istifadə edilməyən lisenziyalar aşkarlanıb. Xərci qiymətləndirərkən hansı yanaşma düzgündür?",
    "answer": "Hər modeldə ayrıca xərc itkisini izləmək (IaaS-da VM, PaaS-da plan, SaaS-da lisenziya) – model dəyişsə də xərc nəzarəti lazımdır",
    "options": [
      "Hər modeldə ayrıca xərc itkisini izləmək (IaaS-da VM, PaaS-da plan, SaaS-da lisenziya) – model dəyişsə də xərc nəzarəti lazımdır",
      "Bütün modellərdə yalnız istifadəçi lisenziyalarını yoxlamaq",
      "Bütün modellərdə yalnız VM sayını azaltmaq",
      "İdarə olunan xidmətlərdə xərc izləməsini dayandırmaq",
      "Xidmət modeli dəyişəndə bütün xərc səhvlərinin yox olduğunu qəbul etmək"
    ],
    "keywords": "hər modeldə xərc izlənməlidir",
    "topic": 2,
    "difficulty": 3,
    "reference": "Mövzu 2; 10 Təhlükəsizlik, xərc, performans və etibarlılıq: əsas nəticələr; s. 14"
  },
  {
    "id": 91,
    "question": "Buludun beş əsas xüsusiyyəti yerləşdirmə təsnifatından əvvəl nəyi müəyyən etməyə xidmət edir?",
    "answer": "Bir mühitin ümumiyyətlə bulud sayılması üçün tələb olunan əsas xüsusiyyətləri",
    "options": [
      "Bir mühitin ümumiyyətlə bulud sayılması üçün tələb olunan əsas xüsusiyyətləri",
      "Provayderin bazar payının nə qədər olduğunu",
      "Serverlərin hansı şirkətə məxsus olduğunu",
      "Tətbiqin hansı proqramlaşdırma dilində yazıldığını",
      "Məlumatın neçə il saxlanmalı olduğunu"
    ],
    "keywords": "bulud nədir – meyar, yerləşdirmədən əvvəl",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 2.1 İki ayrı təsnifat və bir meyar; s. 4"
  },
  {
    "id": 92,
    "question": "Xidmət modeli ilə yerləşdirmə modelinin təsnifatı arasında hansı əlaqə var?",
    "answer": "Bunlar iki ayrı, bir-birini tamamlayan təsnifatdır (xidmət modeli – nə təqdim olunur; yerləşdirmə modeli – kim üçün/harada)",
    "options": [
      "Bunlar iki ayrı, bir-birini tamamlayan təsnifatdır (xidmət modeli – nə təqdim olunur; yerləşdirmə modeli – kim üçün/harada)",
      "Yerləşdirmə modeli xidmət modelinin digər adıdır",
      "Yalnız IaaS xidmətlərinin yerləşdirmə modeli olur",
      "PaaS həmişə private cloud deməkdir",
      "SaaS istifadə edildikdə yerləşdirmə təsnifatı ləğv olunur"
    ],
    "keywords": "iki müstəqil təsnifat",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 2.1 İki ayrı təsnifat və bir meyar; s. 4"
  },
  {
    "id": 93,
    "question": "NIST SP 800-145-də hansı yerləşdirmə modelləri müəyyən edilib?",
    "answer": "Public, private, community və hybrid cloud",
    "options": [
      "Public, private, community və hybrid cloud",
      "IaaS, PaaS, SaaS və multi-cloud",
      "Public, private, self-hosted və serverless",
      "Community, hybrid, region və zona",
      "Private, multi-cloud, konteyner və virtual maşın"
    ],
    "keywords": "4 model: public, private, community, hybrid",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 2.1 İki ayrı təsnifat və bir meyar; s. 4"
  },
  {
    "id": 94,
    "question": "Public cloud infrastrukturunun istifadəsi kimə təklif olunur?",
    "answer": "Ümumi ictimaiyyətə (hər kəsə) açıq istifadə üçün",
    "options": [
      "Ümumi ictimaiyyətə (hər kəsə) açıq istifadə üçün",
      "Yalnız bir təşkilatın iş bölmələrinə",
      "Yalnız ortaq missiyalı təşkilatların qapalı icmasına",
      "Yalnız provayderin öz əməkdaşlarına",
      "Yalnız infrastruktura sahib olan dövlət qurumuna"
    ],
    "keywords": "hər kəs, açıq",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 2.3 Public, private və community cloud; s. 5"
  },
  {
    "id": 95,
    "question": "Private cloud infrastrukturunun əsas ayrılma meyarı hansıdır?",
    "answer": "Tək bir təşkilatın (və onun müxtəlif istifadəçilərinin) müstəsna istifadəsi",
    "options": [
      "Tək bir təşkilatın (və onun müxtəlif istifadəçilərinin) müstəsna istifadəsi",
      "İstənilən şəxsin açıq istifadəsi",
      "Ayrı təşkilatlardan ibarət icmanın ortaq istifadəsi",
      "Ən azı iki provayderin xidmətlərinin istifadəsi",
      "Yalnız fiziki server sahibinin şəxsi istifadəsi"
    ],
    "keywords": "bir təşkilat, müstəsna istifadə",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 2.3 Public, private və community cloud; s. 5"
  },
  {
    "id": 96,
    "question": "Community cloud istifadəçilərini birləşdirən əsas xüsusiyyət nədir?",
    "answer": "Ortaq missiya, təhlükəsizlik və uyğunluq tələbləri olan təşkilatlar icması",
    "options": [
      "Ortaq missiya, təhlükəsizlik və uyğunluq tələbləri olan təşkilatlar icması",
      "Eyni təşkilatın fərqli vəzifəli əməkdaşları olması",
      "Hamının eyni proqramlaşdırma dilindən istifadə etməsi",
      "Bütün serverlərin bir istifadəçiyə məxsus olması",
      "İstifadəçilərin eyni provayderin açıq müştəriləri olması"
    ],
    "keywords": "ortaq maraq/tələb, icma",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 2.3 Public, private və community cloud; s. 5"
  },
  {
    "id": 97,
    "question": "Cloud bursting nəyi ifadə edir?",
    "answer": "İş yükünün zirvə zamanı özəl mühitdən public buluda genişlənməsi (artıq yükün public buluda keçməsi)",
    "options": [
      "İş yükünün zirvə zamanı özəl mühitdən public buluda genişlənməsi (artıq yükün public buluda keçməsi)",
      "Bir buluddakı bütün məlumatın silinməsini",
      "Bir zonanın adının başqa zona adı ilə əvəz edilməsini",
      "Buludun internet bağlantısının şifrələnməsini",
      "İki provayderin qiymətlərinin avtomatik bərabərləşməsini"
    ],
    "keywords": "pik zamanı public-ə genişlənmə",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 2.4 Hybrid cloud: iki şərt; s. 7"
  },
  {
    "id": 98,
    "question": "Multi-cloud anlayışı hansı meyarı əsas götürür?",
    "answer": "Birdən çox bulud provayderinin istifadəsi",
    "options": [
      "Birdən çox bulud provayderinin istifadəsi",
      "Virtual maşınların sayını",
      "Bir regiondakı zonaların sayını",
      "Tətbiqin istifadəçi sayını",
      "Təşkilatın şöbələrinin sayını"
    ],
    "keywords": "provayder sayı ≥ 2",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 2.5 Multi-cloud və onun hybrid ilə əlaqəsi; s. 8"
  },
  {
    "id": 99,
    "question": "Self-hosted anlayışının bulud yerləşdirmə modellərinə münasibəti necədir?",
    "answer": "Self-hosted NIST-in yerləşdirmə modeli deyil – proqramı kimin quraşdırıb idarə etdiyini bildirən anlayışdır",
    "options": [
      "Self-hosted NIST-in yerləşdirmə modeli deyil – proqramı kimin quraşdırıb idarə etdiyini bildirən anlayışdır",
      "NIST-in beşinci yerləşdirmə modelidir",
      "Yalnız community cloud üçün işlədilən addır",
      "Hər zaman hybrid cloud deməkdir",
      "Yalnız serverless xidmətlərin yerləşdirmə modelidir"
    ],
    "keywords": "yerləşdirmə modeli deyil, idarə üsulu",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 2.3 Public, private və community cloud; s. 5"
  },
  {
    "id": 100,
    "question": "Buludda məlumatın yerləşməsi (data residency) anlayışı nəyi bildirir?",
    "answer": "Məlumatın fiziki olaraq harada (hansı ölkədə/yurisdiksiyada) saxlandığını",
    "options": [
      "Məlumatın fiziki olaraq harada (hansı ölkədə/yurisdiksiyada) saxlandığını",
      "Məlumatın yalnız fayl formatını və ölçüsünü",
      "Tətbiqin yenilənmə vaxtını və versiyasını",
      "Müştərinin hesab adını və giriş parolunu",
      "Serverin prosessor növünü və yaddaş tutumunu"
    ],
    "keywords": "harada saxlanır, yurisdiksiya",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; Terminlər lüğəti; s. 20"
  },
  {
    "id": 101,
    "question": "Bulud regionu daxilində zona hansı əsas rola malikdir?",
    "answer": "Region daxilində ayrıca nasazlıq sərhədi yaratmaq (yüksək əlçatanlıq üçün bir-birindən müstəqil yerləşmə)",
    "options": [
      "Region daxilində ayrıca nasazlıq sərhədi yaratmaq (yüksək əlçatanlıq üçün bir-birindən müstəqil yerləşmə)",
      "Ayrıca xidmət modeli roluna",
      "Ayrıca provayder şirkəti roluna",
      "Bütün regionları birləşdirən idarəetmə paneli roluna",
      "Yalnız məlumatın hüquqi sahibini müəyyən edən roluna"
    ],
    "keywords": "nasazlıq sərhədi, əlçatanlıq",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 7 Təhlükəsizlik, xərc, performans, etibarlılıq və nasazlıq ssenariləri; s. 14"
  },
  {
    "id": 102,
    "question": "Hybrid inteqrasiyada telemetriyanın əsas funksiyası hansıdır?",
    "answer": "Mühitlərdən metrik və log-ları toplayıb izləməyi və vahid görünürlüyü təmin etmək",
    "options": [
      "Mühitlərdən metrik və log-ları toplayıb izləməyi və vahid görünürlüyü təmin etmək",
      "İş yükünü digər buluda köçürmək",
      "İstifadəçilərə giriş tokeni vermək",
      "Mühitlər arasında fiziki xətt çəkmək",
      "Məlumatın yurisdiksiyasını dəyişmək"
    ],
    "keywords": "metrik, log, görünürlük",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 3.2 Hybrid inteqrasiyanın tərkib hissələri; s. 9"
  },
  {
    "id": 103,
    "question": "Hybrid sistemdə idarəetmə (control plane) axını əsasən nə üçün istifadə edilir?",
    "answer": "Resursların idarə edilməsi və konfiqurasiyası (yaratmaq, dəyişmək, silmək əməliyyatları)",
    "options": [
      "Resursların idarə edilməsi və konfiqurasiyası (yaratmaq, dəyişmək, silmək əməliyyatları)",
      "Brauzerin tətbiq sorğusunu emal etmək üçün",
      "Müştərinin bütün fayllarını ictimai paylaşmaq üçün",
      "İş yükünün daşınmasını təkbaşına təmin etmək üçün",
      "Regionun fiziki yerini dəyişmək üçün"
    ],
    "keywords": "resurs idarəsi, API əmrləri",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 3.4 Dörd ayrı axın; s. 10"
  },
  {
    "id": 104,
    "question": "VPN hybrid inteqrasiyada hansı əsas bağlantını yaradır?",
    "answer": "Mühitlər arasında internet üzərindən şifrələnmiş şəbəkə bağlantısı (tunel)",
    "options": [
      "Mühitlər arasında internet üzərindən şifrələnmiş şəbəkə bağlantısı (tunel)",
      "Mütləq ayrıca fiziki xətt",
      "Avtomatik məlumat replikası xidməti",
      "Resurs yaratmaq üçün self-service portalı",
      "Provayderdən asılılığı ləğv edən universal API"
    ],
    "keywords": "şifrələnmiş tunel, internet üzərindən",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 3.2 Hybrid inteqrasiyanın tərkib hissələri; s. 9"
  },
  {
    "id": 105,
    "question": "Bir alət mövcud server və klasterləri inventarlaşdırır, izləyir və nəzarət altına alır, lakin özü hesablama infrastrukturu vermir. Bu alətin əsas rolu hansıdır?",
    "answer": "Hibrid idarəetmə qatı: mövcud lokal serverləri vahid şəkildə inventarlaşdırmaq, izləmək və idarə etmək (özü hesablama vermir)",
    "options": [
      "Hibrid idarəetmə qatı: mövcud lokal serverləri vahid şəkildə inventarlaşdırmaq, izləmək və idarə etmək (özü hesablama vermir)",
      "Müştəriyə yeni fiziki hesablama avadanlığı təqdim etmək",
      "Bütün lokal serverləri avtomatik public cloud-a köçürmək",
      "Mövcud serverləri obyekt saxlama xidməti ilə əvəz etmək",
      "İş yükü və məlumatın mühitlərarası daşınmasını avtomatik təmin etmək"
    ],
    "keywords": "idarəetmə/izləmə qatı, hesablama yoxdur",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 8.4; s. 17"
  },
  {
    "id": 106,
    "question": "Hybrid inteqrasiyada ayrılmış özəl bağlantı VPN-dən əsasən nə ilə fərqlənir?",
    "answer": "Fiziki olaraq ayrılmış, internetdən keçməyən xüsusi şəbəkə xətti ilə (daha sabit gecikmə və ötürmə) bağlantı verməsi",
    "options": [
      "Fiziki olaraq ayrılmış, internetdən keçməyən xüsusi şəbəkə xətti ilə (daha sabit gecikmə və ötürmə) bağlantı verməsi",
      "İnternet üzərində şifrələnmiş tunel qurmaqla məhdudlaşır",
      "Şəbəkə bağlantısı əvəzinə məlumat replikasını yaradır",
      "Şəbəkə bağlantısı əvəzinə istifadəçi tokenini yoxlayır",
      "Fiziki bağlantı əvəzinə metrik və log-ları toplayır"
    ],
    "keywords": "fiziki xüsusi xətt",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 3.2; s. 9"
  },
  {
    "id": 107,
    "question": "Hybrid inteqrasiyada istifadəçilərin və xidmətlərin hər iki mühitdə tanınması hansı tərkib hissəsinə aiddir?",
    "answer": "Kimlik və giriş (identity) inteqrasiyası",
    "options": [
      "Kimlik və giriş (identity) inteqrasiyası",
      "Telemetriya",
      "Şəbəkə bağlantısı",
      "İş yükünün daşınması",
      "Məlumatın replikası"
    ],
    "keywords": "kimlik, giriş, SSO",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 3.2; s. 9"
  },
  {
    "id": 108,
    "question": "Provayder infrastrukturunu müştərinin data mərkəzinə genişləndirən həllin “air-gapped” variantı mühazirədə necə təsvir olunur?",
    "answer": "Heç bir xarici şəbəkəyə/internetə qoşulmayan, tam təcrid edilmiş (air-gapped) variant",
    "options": [
      "Heç bir xarici şəbəkəyə/internetə qoşulmayan, tam təcrid edilmiş (air-gapped) variant",
      "Provayderin regionuna qoşulmuş variant",
      "Yalnız VPN ilə qoşulmuş variant",
      "Ayrılmış özəl xətt ilə qoşulmuş variant",
      "Vahid giriş sistemi ilə qoşulmuş variant"
    ],
    "keywords": "tam təcrid, qoşulmur",
    "topic": 3,
    "difficulty": 1,
    "reference": "Mövzu 3; 8.4; s. 17"
  },
  {
    "id": 109,
    "question": "Public cloud-da tenant təcridi tətbiq edilməsi müştərinin giriş və paylaşım konfiqurasiyası üzrə məsuliyyətinə necə təsir edir?",
    "answer": "Təcrid provayderdədir, lakin giriş və paylaşım konfiqurasiyasına müştəri özü cavabdehdir (təcrid səhv konfiqurasiyanı aradan qaldırmır)",
    "options": [
      "Təcrid provayderdədir, lakin giriş və paylaşım konfiqurasiyasına müştəri özü cavabdehdir (təcrid səhv konfiqurasiyanı aradan qaldırmır)",
      "Konfiqurasiya məsuliyyəti yalnız provayderə keçir",
      "Müştəri yalnız fiziki avadanlıq təhlükəsizliyinə cavabdeh olur",
      "Giriş siyasəti yalnız məlumat sızdıqdan sonra tələb olunur",
      "Paylaşım rejimi yalnız community cloud-da müştərinin məsuliyyətidir"
    ],
    "keywords": "təcrid var, amma konfiqurasiya müştəridə",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 3.1 Çox-kirayəçilik və təcrid; s. 9"
  },
  {
    "id": 110,
    "question": "Private cloud-un üçüncü tərəfin data mərkəzində yerləşməsi onun təsnifatını niyə dəyişmir?",
    "answer": "Təsnifat fiziki yerə görə deyil, infrastrukturun yalnız bir təşkilat üçün ayrılmasına görə müəyyən olunur",
    "options": [
      "Təsnifat fiziki yerə görə deyil, infrastrukturun yalnız bir təşkilat üçün ayrılmasına görə müəyyən olunur",
      "Kənardakı bütün infrastruktur avtomatik private sayılır",
      "Üçüncü tərəf heç bir buludun idarəçisi ola bilməz",
      "Fiziki yer dəyişdikdə yerləşdirmə modeli tətbiq olunmur",
      "Yalnız avadanlığın istehsalçısı modeli müəyyən edir"
    ],
    "keywords": "yer deyil, kimin istifadəsi",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 2.3 Public, private və community cloud; s. 5"
  },
  {
    "id": 111,
    "question": "Community cloud-da üzvün icmadan çıxması üçün əvvəlcədən hansı məsələ razılaşdırılmalıdır?",
    "answer": "Çıxış zamanı məlumatın və resursların qaytarılması/silinməsi qaydası (çıxış şərtləri)",
    "options": [
      "Çıxış zamanı məlumatın və resursların qaytarılması/silinməsi qaydası (çıxış şərtləri)",
      "Bütün üzvlərin məlumatının ictimailəşdirilməsi",
      "Qalan üzvlərin private cloud adlandırılması",
      "Provayderdə bütün regionların bağlanması",
      "İcmanın hər dəfə multi-cloud-a çevrilməsi"
    ],
    "keywords": "çıxışda məlumatın taleyi",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 2.3 Public, private və community cloud; s. 6"
  },
  {
    "id": 112,
    "question": "Hybrid cloud tərifində buludların “müstəqilliyini saxlaması” nə deməkdir?",
    "answer": "Hər bulud ayrıca infrastruktur kimi qalır, standart/xüsusi texnologiya ilə bağlanır (məlumat və tətbiq daşınabilirliyi)",
    "options": [
      "Hər bulud ayrıca infrastruktur kimi qalır, standart/xüsusi texnologiya ilə bağlanır (məlumat və tətbiq daşınabilirliyi)",
      "Buludlar arasında məlumat ötürülməsi qadağandır",
      "Bütün buludlar eyni fiziki serverə çevrilir",
      "Hər bulud mütləq fərqli təşkilata məxsus olur",
      "Buludlardan yalnız biri əsas xüsusiyyətləri təmin edir"
    ],
    "keywords": "ayrı qalır, lakin bağlanır",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 2.4 Hybrid cloud: iki şərt; s. 7"
  },
  {
    "id": 113,
    "question": "Hybrid sistemdə iş yükünün daşına bilməsindən vahid təhlükəsizlik siyasəti və məlumat ardıcıllığı barədə hansı nəticə çıxır?",
    "answer": "Təhlükəsizlik siyasəti və məlumat ardıcıllığı avtomatik təmin olunmur – hər iki mühitdə ayrıca uyğunlaşdırılmalıdır",
    "options": [
      "Təhlükəsizlik siyasəti və məlumat ardıcıllığı avtomatik təmin olunmur – hər iki mühitdə ayrıca uyğunlaşdırılmalıdır",
      "İki mühitdə bütün icazələr avtomatik eyni olur",
      "Məlumat hər iki tərəfdə dərhal eyni vəziyyətdə olur",
      "Bağlantının şifrələnməsinə ehtiyac qalmır",
      "Bütün giriş siyasətlərini provayder avtomatik müəyyən edir"
    ],
    "keywords": "avtomatik deyil, ayrıca təmin edilməli",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 2.4 Hybrid cloud: iki şərt; s. 7"
  },
  {
    "id": 114,
    "question": "İki provayderin özünəməxsus xidmətlərindən istifadə vendor lock-in-i niyə avtomatik azaltmır?",
    "answer": "Xüsusi (proprietary) xidmətlər provayderə xas API və davranışa malikdir, köçürmə yenə çətin qalır",
    "options": [
      "Xüsusi (proprietary) xidmətlər provayderə xas API və davranışa malikdir, köçürmə yenə çətin qalır",
      "İki provayder eyni API-dən istifadə etməyə məcburdur",
      "Multi-cloud-da xidmətlərin xüsusi davranışı olmur",
      "Provayder sayı artdıqca köçürmə xərci sıfırlanır",
      "İki provayder olduqda məlumat formatları eyniləşir"
    ],
    "keywords": "xüsusi API, köçmək çətin",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 2.5 Multi-cloud və onun hybrid ilə əlaqəsi; s. 8"
  },
  {
    "id": 115,
    "question": "Düzgün region seçimi məlumatın yerləşməsi tələbini niyə həmişə tam təmin etmir?",
    "answer": "Bəzi xidmətlər (qlobal xidmətlər, replikasiya, backup) məlumatı başqa yerdə saxlaya və ya emal edə bilər – əlavə yoxlama lazımdır",
    "options": [
      "Bəzi xidmətlər (qlobal xidmətlər, replikasiya, backup) məlumatı başqa yerdə saxlaya və ya emal edə bilər – əlavə yoxlama lazımdır",
      "Region seçimi yalnız provayderin adını dəyişir",
      "Seçilən region bütün qlobal xidmətləri fiziki olaraq köçürür",
      "Region heç vaxt yurisdiksiyaya təsir etmir",
      "Region seçildikdə xidmətlərin saxlanma qaydaları ləğv olunur"
    ],
    "keywords": "replikasiya/qlobal xidmət başqa yerdə saxlaya bilər",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 3.3 Region seçimi və məlumatın yerləşməsi; s. 9"
  },
  {
    "id": 116,
    "question": "Hybrid sistemdə brauzerin DNS sorğusu ilə HTTPS sorğusu arasındakı fərq hansıdır?",
    "answer": "DNS adı IP ünvana çevirir (ad həlli), HTTPS isə tətbiqə təhlükəsiz sorğu göndərir",
    "options": [
      "DNS adı IP ünvana çevirir (ad həlli), HTTPS isə tətbiqə təhlükəsiz sorğu göndərir",
      "DNS tətbiq kodunu işlədir, HTTPS yalnız ad həllini edir",
      "DNS verilənlər bazasını dəyişir, HTTPS regionu seçir",
      "DNS resurs yaradır, HTTPS xərc hesabatı hazırlayır",
      "DNS giriş tokenini yoxlayır, HTTPS məlumat replikası yaradır"
    ],
    "keywords": "DNS = ad həlli, HTTPS = sorğu",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 3.4 Dörd ayrı axın; s. 10"
  },
  {
    "id": 117,
    "question": "Telemetriya axını kəsildikdə hansı nəticə daha düzgündür?",
    "answer": "İşləyən instansiyalar işləməyə davam edə bilər, lakin görünürlük və xəbərdarlıq itir",
    "options": [
      "İşləyən instansiyalar işləməyə davam edə bilər, lakin görünürlük və xəbərdarlıq itir",
      "Bütün işləyən instanslar mütləq dərhal dayanır",
      "İstifadəçi məlumatı avtomatik başqa regiona köçürülür",
      "Resursların yerləşdirmə modeli private-a dəyişir",
      "Bütün istifadəçilərə yeni giriş icazəsi verilir"
    ],
    "keywords": "işləyir, amma görünmür",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 3.4 Dörd ayrı axın; s. 10"
  },
  {
    "id": 118,
    "question": "İdarəetmə API-si əlçatmaz olduqda işləyən iş yükü barədə hansı fikir düzgündür?",
    "answer": "İşləyən iş yükü adətən işləməyə davam edir, lakin yeni resurs yaratmaq/dəyişdirmək mümkün olmur",
    "options": [
      "İşləyən iş yükü adətən işləməyə davam edir, lakin yeni resurs yaratmaq/dəyişdirmək mümkün olmur",
      "İşləyən bütün tətbiqlər mütləq silinir",
      "İstifadəçi trafiki həmişə idarəetmə API-sindən keçir",
      "İş yükü avtomatik digər provayderə daşınır",
      "Təsir bütün xidmətlərdə eyni və həmişə sıfırdır"
    ],
    "keywords": "işləyir, dəyişmək olmur",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 3.4 Dörd ayrı axın; s. 10"
  },
  {
    "id": 119,
    "question": "Standart interfeyslərin provayderdən asılılığa təsiri necə qiymətləndirilməlidir?",
    "answer": "Asılılığı azalda bilər, lakin tam aradan qaldırmır – hər xidmət üçün ayrıca qiymətləndirilməlidir",
    "options": [
      "Asılılığı azalda bilər, lakin tam aradan qaldırmır – hər xidmət üçün ayrıca qiymətləndirilməlidir",
      "Asılılığı bütün xidmətlərdə mütləq sıfırlayır",
      "İdarə olunan xidmətlərdən istifadəni qadağan edir",
      "Yalnız provayderlərin sayını azaltmağa xidmət edir",
      "Məlumatın yerləşməsi tələblərini əvəz edir"
    ],
    "keywords": "azaldır, sıfırlamır",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 3.5 Provayderdən asılılığın texniki kökləri; s. 10"
  },
  {
    "id": 120,
    "question": "Trafikin artması ilə yerləşdirmə modeli seçimi arasında hansı münasibət var?",
    "answer": "Trafik yalnız bir meyardır; seçim uyğunluq, xərc və nəzarət meyarları ilə birgə qiymətləndirilir",
    "options": [
      "Trafik yalnız bir meyardır; seçim uyğunluq, xərc və nəzarət meyarları ilə birgə qiymətləndirilir",
      "Trafik artımı həmişə public-dən hybrid-ə keçid tələb edir",
      "Yüksək trafik yalnız multi-cloud-da emal oluna bilər",
      "Kiçik trafik üçün uyğunluq meyarı nəzərə alınmır",
      "Trafik azaldıqda bütün private mühitlər public olur"
    ],
    "keywords": "trafik tək meyar deyil",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 5 Kiçik, orta və yüksək miqyaslı sistem nümunələri; s. 12"
  },
  {
    "id": 121,
    "question": "Yerləşdirmə qərarında büdcə və xərc strukturu meyarı hansı fərqi nəzərə alır?",
    "answer": "Ilkin kapital xərci (capex) ilə cari/istifadəyə görə xərc (opex) fərqini",
    "options": [
      "Ilkin kapital xərci (capex) ilə cari/istifadəyə görə xərc (opex) fərqini",
      "DNS ad həlli ilə HTTPS sorğusunun ardıcıllığını",
      "Autentifikasiya ilə avtorizasiyanın funksiyalarını",
      "Şəbəkə bağlantısı ilə telemetriyanın funksiyalarını",
      "Region adı ilə zona nömrəsinin yazılışını"
    ],
    "keywords": "capex ↔ opex",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 6.1 Altı seçim meyarı; s. 13"
  },
  {
    "id": 122,
    "question": "Cloud bursting istifadə olunan hybrid sistemdə public tərəfin xərci barədə hansı fikir düzgündür?",
    "answer": "Pik zamanı public tərəfdə hesablama xərci yaranır, bundan əlavə məlumat ötürülməsi və digər xərclər də ola bilər",
    "options": [
      "Pik zamanı public tərəfdə hesablama xərci yaranır, bundan əlavə məlumat ötürülməsi və digər xərclər də ola bilər",
      "Bütün xərclər yalnız pik saatlardakı hesablamadan ibarətdir",
      "Private cloud varsa public tərəfə ödəniş edilmir",
      "Məlumat ötürülməsi bütün müqavilələrdə pulsuzdur",
      "Pikdən sonra bütün public resurslar avtomatik silinir"
    ],
    "keywords": "hesablama + ötürmə xərci",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 7 Təhlükəsizlik, xərc, performans, etibarlılıq və nasazlıq ssenariləri; s. 14"
  },
  {
    "id": 123,
    "question": "AWS, Azure və Google Cloud xidmətlərini eyni məqsədə görə uyğunlaşdırmaq niyə tam dizayn ekvivalentliyi demək deyil?",
    "answer": "Eyni məqsədə xidmət etsələr də, API, şəbəkə modeli, limitlər və davranışları fərqli ola bilər",
    "options": [
      "Eyni məqsədə xidmət etsələr də, API, şəbəkə modeli, limitlər və davranışları fərqli ola bilər",
      "Eyni kateqoriyadakı bütün xidmətlər eyni API-ni işlətməlidir",
      "Provayder dəyişəndə şəbəkə dizaynı həmişə dəyişməz qalır",
      "Xidmət adları eynidirsə məlumat modeli də eyni olur",
      "Uyğunluq xəritəsi bütün köçürmə işlərini avtomatlaşdırır"
    ],
    "keywords": "məqsəd eyni, dizayn fərqli",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 8.2 Oxşar məqsəd eyni dizayn demək deyil; s. 16"
  },
  {
    "id": 124,
    "question": "Region seçərkən həm istifadəçilərə fiziki məsafə, həm də məlumatın hansı ölkənin qanunları altında saxlanması qiymətləndirilir. Bu iki amil hansı qərarlara uyğundur?",
    "answer": "Region seçimi və məlumatın yerləşməsi (data residency) qərarları",
    "options": [
      "Region seçimi və məlumatın yerləşməsi (data residency) qərarları",
      "Xidmət modeli və tətbiqin proqramlaşdırma dili",
      "Tenant sayı və giriş tokeninin formatı",
      "İdarəetmə paneli və telemetriya formatı",
      "OS yamağı və tətbiqin lisenziyası"
    ],
    "keywords": "region + data residency",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 3.3; s. 9"
  },
  {
    "id": 125,
    "question": "Provayderləri müqayisə etmək üçün hansı yanaşma mühazirənin prinsipinə uyğundur?",
    "answer": "Müqayisəni konkret meyarlar (xidmət xüsusiyyəti, region, tarixli qiymət, məsuliyyət bölgüsü) üzrə, tarixli və mənbəli aparmaq",
    "options": [
      "Müqayisəni konkret meyarlar (xidmət xüsusiyyəti, region, tarixli qiymət, məsuliyyət bölgüsü) üzrə, tarixli və mənbəli aparmaq",
      "Ən çox reklam olunan provayderi bütün layihələrə seçmək",
      "Yalnız xidmət adlarının oxşarlığına əsaslanmaq",
      "Tarixsiz qiymət iddiasını bütün regionlara tətbiq etmək",
      "Provayder sayını artırmağı əsas keyfiyyət göstəricisi saymaq"
    ],
    "keywords": "konkret meyar, tarixli qiymət",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 8.2 Oxşar məqsəd eyni dizayn demək deyil; s. 16"
  },
  {
    "id": 126,
    "question": "Açıq mənbəli alternativi öz infrastrukturunda quraşdırıb idarə edən istifadəçinin əməliyyat məsuliyyəti necə olur?",
    "answer": "Quraşdıran və idarə edən istifadəçi özü əməliyyat məsuliyyətini (OS, yamaq, backup, təhlükəsizlik) daşıyır",
    "options": [
      "Quraşdıran və idarə edən istifadəçi özü əməliyyat məsuliyyətini (OS, yamaq, backup, təhlükəsizlik) daşıyır",
      "Məsuliyyət avtomatik AWS-ə ötürülür",
      "Məsuliyyət yalnız proqram müəllifində qalır",
      "Açıq mənbəli lisenziya əməliyyat məsuliyyətini ləğv edir",
      "Məsuliyyət yalnız internet bağlantısını təmin etməklə bitir"
    ],
    "keywords": "özü idarə edir = özü cavabdeh",
    "topic": 3,
    "difficulty": 2,
    "reference": "Mövzu 3; 8.1 Eyni ehtiyac, fərqli ad; s. 15"
  },
  {
    "id": 127,
    "question": "Buludun beş əsas xüsusiyyətini təmin edən mühit yalnız bir təşkilatın müxtəlif fakültələri üçün ayrılıb. Bu mühit hansı yerləşdirmə modelinə uyğundur?",
    "answer": "Private cloud",
    "options": [
      "Private cloud",
      "Community cloud",
      "Public cloud",
      "Hybrid cloud",
      "Bulud olmayan ənənəvi infrastruktur"
    ],
    "keywords": "bir təşkilat = private",
    "topic": 3,
    "difficulty": 3,
    "reference": "Mövzu 3; 2.3 Public, private və community cloud; s. 5"
  },
  {
    "id": 128,
    "question": "Self-service, elastiklik və ölçülən xidmət olmayan lokal server otağı public cloud-a VPN ilə qoşulub. Bu təsvir üçün ən dəqiq ad hansıdır?",
    "answer": "Bulud xüsusiyyətləri olmayan ənənəvi lokal infrastruktur + public cloud – NIST mənasında hybrid cloud deyil",
    "options": [
      "Bulud xüsusiyyətləri olmayan ənənəvi lokal infrastruktur + public cloud – NIST mənasında hybrid cloud deyil",
      "NIST mənasında hybrid cloud",
      "İki public provayderli multi-cloud",
      "Community cloud",
      "Yalnız private cloud"
    ],
    "keywords": "lokal tərəf bulud deyil → hybrid deyil",
    "topic": 3,
    "difficulty": 3,
    "reference": "Mövzu 3; 2.4 Hybrid cloud: iki şərt; s. 7"
  },
  {
    "id": 129,
    "question": "İki ayrı bulud infrastrukturu vahid paneldən izlənir, lakin iş yükü və məlumat aralarında daşına bilmir. Hybrid təsnifatı üçün hansı çatışmazlıq var?",
    "answer": "İş yükü və məlumat daşınabilirliyinin olmaması (vahid paneldən izləmə hybrid üçün kifayət deyil)",
    "options": [
      "İş yükü və məlumat daşınabilirliyinin olmaması (vahid paneldən izləmə hybrid üçün kifayət deyil)",
      "İki tərəfin də bulud olması hybrid-ə mane olur",
      "Vahid paneldən istifadə bulud xüsusiyyətlərini ləğv edir",
      "Private tərəfin olmaması bütün hybrid halları istisna edir",
      "İdarəetmə paneli yalnız community cloud-da işləyə bilər"
    ],
    "keywords": "daşınabilirlik yoxdur",
    "topic": 3,
    "difficulty": 3,
    "reference": "Mövzu 3; 2.4 Hybrid cloud: iki şərt; s. 7"
  },
  {
    "id": 130,
    "question": "İki müxtəlif public provayderdəki müstəqil bulud infrastrukturları arasında iş yükü və məlumatın daşınması qurulub. Bu sistem necə təsnif edilə bilər?",
    "answer": "Həm multi-cloud, həm də hybrid ola bilər (iki fərqli provayder və daşınabilirlik var)",
    "options": [
      "Həm multi-cloud, həm də hybrid ola bilər (iki fərqli provayder və daşınabilirlik var)",
      "Yalnız private cloud",
      "Yalnız community cloud",
      "Multi-cloud, lakin heç bir halda hybrid deyil",
      "Hybrid, lakin heç bir halda multi-cloud deyil"
    ],
    "keywords": "multi-cloud və hybrid birlikdə mümkün",
    "topic": 3,
    "difficulty": 3,
    "reference": "Mövzu 3; 2.5 Multi-cloud və onun hybrid ilə əlaqəsi; s. 8"
  },
  {
    "id": 131,
    "question": "Hybrid sistemdə tətbiq public cloud-da, verilənlər bazası private cloud-da işləyir və hər sorğu bazaya müraciət edir. Bu yerləşdirmənin sorğu performansına birbaşa riski hansıdır?",
    "answer": "Hər sorğu mühitlərarası bağlantıdan keçdiyi üçün gecikmə artır və bağlantı sorğu vaxtına təsir edir",
    "options": [
      "Hər sorğu mühitlərarası bağlantıdan keçdiyi üçün gecikmə artır və bağlantı sorğu vaxtına təsir edir",
      "Baza private cloud-da olduğuna görə mühitlərarası bağlantının sürəti sorğu vaxtına təsir etmir",
      "Vahid giriş sistemi qurulduqda mühitlərarası baza çağırışının gecikməsi aradan qalxır",
      "Metrik və log-lar bir yerdə toplandıqda baza çağırışları bağlantıdan keçmir",
      "İki mühit arasında iş yükü daşına bildikdə sorğuların baza cavabını gözləməsinə ehtiyac qalmır"
    ],
    "keywords": "bağlantı gecikməsi artır",
    "topic": 3,
    "difficulty": 3,
    "reference": "Mövzu 3; 7; s. 14"
  },
  {
    "id": 132,
    "question": "Tətbiq instansları, şəbəkə bağlantısı, telemetriya və resurs idarəetməsi işləyir, lakin istifadəçi girişini təsdiqləyən kimlik provayderi əlçatmazdır. Bu vəziyyətdə hansı nasazlıq gözlənilə bilər?",
    "answer": "Yeni istifadəçi girişləri uğursuz ola bilər (mövcud sessiyalar işləsə də)",
    "options": [
      "Yeni istifadəçi girişləri uğursuz ola bilər (mövcud sessiyalar işləsə də)",
      "Kimlik kəsilməsi yalnız log toplanmasını pozar, yeni girişlər təsirlənməz",
      "Kimlik kəsilməsi yalnız yeni resurs yaratmağı pozar, yeni girişlər təsirlənməz",
      "Kimlik kəsilməsi yalnız mühitlərarası baza bağlantısını pozar, yeni girişlər təsirlənməz",
      "Tətbiq instansları işlədiyinə görə yeni girişlər kimlik provayderi olmadan da mütləq uğurlu olar"
    ],
    "keywords": "kimlik yoxdursa yeni giriş olmaz",
    "topic": 3,
    "difficulty": 3,
    "reference": "Mövzu 3; 7; s. 14"
  },
  {
    "id": 133,
    "question": "İctimai veb qat elastiklik, həssas məlumat qatı isə daha sərt nəzarət tələb edir. Yerləşdirmə qərarı üçün hansı yanaşma əsaslıdır?",
    "answer": "Komponent-komponent qiymətləndirmə: hər qat üçün ayrı model seçilə bilər (məs. veb qat public, həssas məlumat private) – hybrid",
    "options": [
      "Komponent-komponent qiymətləndirmə: hər qat üçün ayrı model seçilə bilər (məs. veb qat public, həssas məlumat private) – hybrid",
      "Bütün komponentlərə eyni modeli məcburi tətbiq etmək",
      "Yalnız veb trafikinin həcminə görə qərar vermək",
      "Həssas məlumat üçün uyğunluq yoxlamasını buraxmaq",
      "Əlavə nəzarət əvəzinə yalnız provayder sayını artırmaq"
    ],
    "keywords": "hər komponentə ayrıca qərar",
    "topic": 3,
    "difficulty": 3,
    "reference": "Mövzu 3; 6.2 Trade-off-lar şərtlidir; s. 14"
  },
  {
    "id": 134,
    "question": "Yüksək trafikli sistemi idarə edən kiçik komanda yalnız bir provayderdə təcrübəlidir. Multi-cloud-a keçidi qiymətləndirərkən hansı risk əsas götürülməlidir?",
    "answer": "Kiçik komanda üçün əməliyyat mürəkkəbliyi və təcrübə çatışmazlığı (iki provayderin idarəsi, səhv konfiqurasiya riski)",
    "options": [
      "Kiçik komanda üçün əməliyyat mürəkkəbliyi və təcrübə çatışmazlığı (iki provayderin idarəsi, səhv konfiqurasiya riski)",
      "Yüksək trafikin tək provayderdə işləməsinin tərifcə mümkünsüz olması",
      "İkinci provayderin bütün təhlükəsizlik konfiqurasiyasını ləğv etməsi",
      "Multi-cloud-un yalnız kiçik trafik üçün nəzərdə tutulması",
      "Bir provayderdə çox zonalı arxitekturanın mümkün olmaması"
    ],
    "keywords": "komanda imkanı, mürəkkəblik",
    "topic": 3,
    "difficulty": 3,
    "reference": "Mövzu 3; 5 Kiçik, orta və yüksək miqyaslı sistem nümunələri; s. 13"
  },
  {
    "id": 135,
    "question": "Lokal serverlər uzaq idarəetmə aləti ilə inventarlaşdırılır və izlənir. Mühitin bulud xüsusiyyətləri və başqa buludla iş yükü/məlumat daşınması barədə məlumat yoxdur. Yalnız verilənlər əsasında hansı nəticə düzgündür?",
    "answer": "Verilənlər hələ lokal mühitin bulud və ya hybrid olduğunu təsdiqləmir – bulud xüsusiyyətləri və daşınabilirlik yoxlanmalıdır",
    "options": [
      "Verilənlər hələ lokal mühitin bulud və ya hybrid olduğunu təsdiqləmir – bulud xüsusiyyətləri və daşınabilirlik yoxlanmalıdır",
      "Uzaqdan idarəetmə qurulduğuna görə lokal mühit artıq public cloud-dur",
      "İzləmə aləti qoşulduğuna görə lokal mühit avtomatik private cloud-dur",
      "Serverlər vahid alətlə izlənirsə, iş yükü və məlumat daşınması artıq təmin olunub",
      "İdarəetmə aləti başqa mühitdədirsə, lokal serverlərin bulud olub-olmaması hybrid üçün əhəmiyyətsizdir"
    ],
    "keywords": "idarəetmə aləti ≠ bulud/hybrid",
    "topic": 3,
    "difficulty": 3,
    "reference": "Mövzu 3; 8.4; s. 18"
  },
  {
    "id": 136,
    "question": "Niyə yalnız hipervizor quraşdırılmış server otağı hələ private cloud sayılmır?",
    "answer": "Yalnız virtuallaşdırma kifayət deyil – self-service, elastiklik, ölçmə kimi bulud xüsusiyyətləri də olmalıdır",
    "options": [
      "Yalnız virtuallaşdırma kifayət deyil – self-service, elastiklik, ölçmə kimi bulud xüsusiyyətləri də olmalıdır",
      "Hər VM üçün fərqli əməliyyat sistemi də lazımdır",
      "Hipervizorun yalnız Type 2 olması da lazımdır",
      "VM-lərin bir-birinin yaddaşını görməsi də lazımdır",
      "Fiziki serverlərin mütləq başqa təşkilata aid olması lazımdır"
    ],
    "keywords": "hipervizor ≠ bulud, xüsusiyyətlər lazımdır",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 1.3 Virtuallaşdırma ilə bulud arasındakı sərhəd; s. 4"
  },
  {
    "id": 137,
    "question": "Guest OS hansı əməliyyat sistemidir?",
    "answer": "VM daxilində işləyən qonaq əməliyyat sistemi",
    "options": [
      "VM daxilində işləyən qonaq əməliyyat sistemi",
      "Type 2 hipervizorun üzərində işlədiyi OS",
      "Bütün hostları idarə edən OS",
      "Image kataloqunu saxlayan OS",
      "Fiziki şəbəkə cihazının OS-i"
    ],
    "keywords": "VM-in içindəki OS",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 1.2 Virtuallaşdırmanın cavabı; s. 3"
  },
  {
    "id": 138,
    "question": "Virtuallaşdırmada host nədir?",
    "answer": "Virtuallaşdırmanı işlədən fiziki server (hipervizorun işlədiyi maşın)",
    "options": [
      "Virtuallaşdırmanı işlədən fiziki server (hipervizorun işlədiyi maşın)",
      "VM-in virtual şəbəkə kartı",
      "VM-in daxilindəki tətbiq",
      "İlkin konfiqurasiya skripti",
      "Diskin anlıq vəziyyətinin qeydi"
    ],
    "keywords": "fiziki server",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 1.2 Virtuallaşdırmanın cavabı; s. 3"
  },
  {
    "id": 139,
    "question": "VM-lər arasında resurs bölgüsünü və təcridi hansı qat idarə edir?",
    "answer": "Hipervizor",
    "options": [
      "Hipervizor",
      "Bootloader",
      "cloud-init",
      "Image kataloqu",
      "Monitorinq agenti"
    ],
    "keywords": "bölgü və təcrid = hipervizor",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 1.2 Virtuallaşdırmanın cavabı; s. 3"
  },
  {
    "id": 140,
    "question": "Type 1 hipervizor mühazirədə hansı mühit üçün tipik seçim kimi göstərilir?",
    "answer": "Data mərkəzi/istehsal mühiti (birbaşa aparat üzərində işləyir)",
    "options": [
      "Data mərkəzi/istehsal mühiti (birbaşa aparat üzərində işləyir)",
      "Şəxsi noutbukda tədris və test",
      "Host OS üzərində gündəlik ofis tətbiqləri",
      "Şəxsi kompüterdə proqram inkişafı təcrübələri",
      "Noutbukda müvəqqəti guest OS sınaqları"
    ],
    "keywords": "data mərkəzi, istehsal",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 2.2 Type 1 və Type 2 hipervizor; s. 6"
  },
  {
    "id": 141,
    "question": "Type 2 hipervizor hansı qatın üzərində işləyir?",
    "answer": "Host əməliyyat sisteminin",
    "options": [
      "Host əməliyyat sisteminin",
      "Guest tətbiqinin",
      "Virtual şəbəkə interfeysinin",
      "Disk snapshot-unun",
      "Virtual firmware-in"
    ],
    "keywords": "host OS-in üzərində",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 2.2 Type 1 və Type 2 hipervizor; s. 6"
  },
  {
    "id": 142,
    "question": "vCPU VM-ə nə kimi təqdim olunur?",
    "answer": "Hostun fiziki prosessor axınında icra üçün planlaşdırılan virtual prosessor",
    "options": [
      "Hostun fiziki prosessor axınında icra üçün planlaşdırılan virtual prosessor",
      "Fiziki RAM səhifəsi",
      "Ayrılmış disk bloku",
      "Şəbəkə buferi",
      "OS disk şablonu"
    ],
    "keywords": "virtual nüvə, planlaşdırılır",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 3.1 Prosessor: vCPU, planlaşdırma və overcommit; s. 7"
  },
  {
    "id": 143,
    "question": "CPU overcommit nə deməkdir?",
    "answer": "Ayrılmış vCPU sayı hostun fiziki axın sayından çox ola bilər (vCPU-lar bölüşdürülür)",
    "options": [
      "Ayrılmış vCPU sayı hostun fiziki axın sayından çox ola bilər (vCPU-lar bölüşdürülür)",
      "Hər VM ayrıca fiziki nüvə alır",
      "Hostun fiziki axın sayı avtomatik artır",
      "VM yalnız baza CPU səviyyəsində işləyir",
      "Guest OS fiziki axınları idarə edir"
    ],
    "keywords": "vCPU > fiziki axın",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 3.1 Prosessor: vCPU, planlaşdırma və overcommit; s. 7"
  },
  {
    "id": 144,
    "question": "Tam emulyasiyada virtual cihaz necə təqdim olunur?",
    "answer": "Hipervizor cihazı proqramla təqlid edir, guest adi cihaz kimi görür",
    "options": [
      "Hipervizor cihazı proqramla təqlid edir, guest adi cihaz kimi görür",
      "Fiziki cihaz VM-ə birbaşa ayrılır",
      "Guest sürücüsü cihazı məlumat yolundan çıxarır",
      "Şəbəkə kartı image şablonuna çevrilir",
      "Cihaz yalnız metadata vasitəsilə işləyir"
    ],
    "keywords": "proqramla təqlid",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 3.3 Giriş-çıxış: üç yol; s. 9"
  },
  {
    "id": 145,
    "question": "Paravirtual I/O üçün guest-də nə olmalıdır?",
    "answer": "Hipervizorla əməkdaşlıq edən paravirtual sürücü",
    "options": [
      "Hipervizorla əməkdaşlıq edən paravirtual sürücü",
      "Ayrıca fiziki host",
      "RAM vəziyyətinin snapshot-u",
      "Hipervizorsuz açılış rejimi",
      "Bütün disklərin tam nüsxəsi"
    ],
    "keywords": "guest-də xüsusi sürücü",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 3.3 Giriş-çıxış: üç yol; s. 9"
  },
  {
    "id": 146,
    "question": "IOMMU-nun əsas funksiyası nədir?",
    "answer": "Cihazın yaddaş çıxışını (DMA) VM-in ünvan fəzası ilə məhdudlaşdırmaq",
    "options": [
      "Cihazın yaddaş çıxışını (DMA) VM-in ünvan fəzası ilə məhdudlaşdırmaq",
      "VM üçün host seçmək",
      "CPU kreditlərini toplamaq",
      "Image versiyalarını paylaşmaq",
      "Guest OS paketlərini quraşdırmaq"
    ],
    "keywords": "cihaz yaddaşa çıxışı məhdudlaşdırır",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 3.3 Giriş-çıxış: üç yol; s. 9"
  },
  {
    "id": 147,
    "question": "Image-in əsas rolu hansıdır?",
    "answer": "VM-in diskini yaratmaq üçün təkrar istifadə olunan şablon (OS və lazımi proqramlar)",
    "options": [
      "VM-in diskini yaratmaq üçün təkrar istifadə olunan şablon (OS və lazımi proqramlar)",
      "Diskin hər yazı əməliyyatını ölçmək",
      "VM-in CPU gözləməsini hesablamaq",
      "Hostun fiziki nüvələrini ayırmaq",
      "Bərpa sınaqlarının cədvəlini idarə etmək"
    ],
    "keywords": "VM şablonu, disk yaratmaq",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 3.4 Image, snapshot və backup; s. 10"
  },
  {
    "id": 148,
    "question": "Disk snapshot-u əsasən nəyi qeyd edir?",
    "answer": "Diskin müəyyən andakı vəziyyətini",
    "options": [
      "Diskin müəyyən andakı vəziyyətini",
      "Guest OS-in bütün gələcək dəyişikliklərini",
      "Hostun illik resurs istifadə tarixçəsini",
      "Hesabın VM yaratma kvotasını",
      "VM-in bütün şəbəkə əlaqələrinin tarixçəsini"
    ],
    "keywords": "müəyyən an, disk vəziyyəti",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 3.4 Image, snapshot və backup; s. 10"
  },
  {
    "id": 149,
    "question": "Qızıl image hansı baza image-idir?",
    "answer": "Hazır, yoxlanmış və standartlaşdırılmış baza image (yeni VM-lər ondan yaradılır)",
    "options": [
      "Hazır, yoxlanmış və standartlaşdırılmış baza image (yeni VM-lər ondan yaradılır)",
      "Yalnız RAM vəziyyətini saxlayan",
      "Hər açılışda parol yaradan",
      "Fiziki hostun firmware-ini əvəz edən",
      "Yalnız CPU kreditlərini saxlayan"
    ],
    "keywords": "standart baza şablon",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 3.4 Image, snapshot və backup; s. 10"
  },
  {
    "id": 150,
    "question": "VM provisioning hansı prosesi əhatə edir?",
    "answer": "VM-in yaradılmasının bütün mərhələləri: kvota, host seçimi, disk/image, şəbəkə və ilkin konfiqurasiya",
    "options": [
      "VM-in yaradılmasının bütün mərhələləri: kvota, host seçimi, disk/image, şəbəkə və ilkin konfiqurasiya",
      "Yalnız vCPU-ların icra növbəsini",
      "Yalnız diskin snapshot-unun alınmasını",
      "Yalnız hostun firmware yeniləməsini",
      "Yalnız tətbiqin sorğu emalını"
    ],
    "keywords": "bütün yaratma mərhələləri",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 3.5 VM provisioning: idarəetmə qatı və hipervizor; s. 11"
  },
  {
    "id": 151,
    "question": "VM yaratma sorğusunda kvota yoxlaması hansı suala cavab verir?",
    "answer": "Hesabın yeni VM yaratmağa kifayət qədər kvotası/icazəsi varmı?",
    "options": [
      "Hesabın yeni VM yaratmağa kifayət qədər kvotası/icazəsi varmı?",
      "Guest OS hansı paketləri ilk açılışda quraşdırmalıdır?",
      "VM-in virtual diski hansı image-dən hazırlanmalıdır?",
      "Tətbiqin hansı portu istifadəçilərə açılmalıdır?",
      "VM-in firmware-i hansı bootloader-i işə salmalıdır?"
    ],
    "keywords": "hesab limiti, icazə",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 3.5 VM provisioning: idarəetmə qatı və hipervizor; s. 12"
  },
  {
    "id": 152,
    "question": "cloud-init əsasən nə üçün istifadə olunur?",
    "answer": "Guest OS-in ilk açılışda ilkin konfiqurasiyası (istifadəçi, paket, SSH açarı və s.)",
    "options": [
      "Guest OS-in ilk açılışda ilkin konfiqurasiyası (istifadəçi, paket, SSH açarı və s.)",
      "Hipervizorun fiziki nüvələri planlaşdırması üçün",
      "Fiziki cihazın yaddaşa çıxışını məhdudlaşdırmaq üçün",
      "Snapshot-un ayrı saxlamaya köçürülməsi üçün",
      "VM-lərin hostdan təcrid edilməsi üçün"
    ],
    "keywords": "ilkin konfiqurasiya, ilk açılış",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 3.5 VM provisioning: idarəetmə qatı və hipervizor; s. 12"
  },
  {
    "id": 153,
    "question": "IaaS-da guest OS və onun üzərindəki proqramlar kimin məsuliyyətində qalır?",
    "answer": "Müştərinin",
    "options": [
      "Müştərinin",
      "Hipervizor istehsalçısının",
      "Fiziki şəbəkə operatorunun",
      "Bulud provayderinin",
      "Aparat prosessorunun istehsalçısının"
    ],
    "keywords": "guest OS = müştəri",
    "topic": 4,
    "difficulty": 1,
    "reference": "Mövzu 4; 1.3 Virtuallaşdırma ilə bulud arasındakı sərhəd; s. 4"
  },
  {
    "id": 154,
    "question": "Niyə yalnız Type 1 etiketi hipervizorun həmişə daha sürətli və təhlükəsiz olduğunu sübut etmir?",
    "answer": "Performans və təhlükəsizlik tək tipdən deyil, konfiqurasiyadan, yamaqdan və iş yükündən də asılıdır",
    "options": [
      "Performans və təhlükəsizlik tək tipdən deyil, konfiqurasiyadan, yamaqdan və iş yükündən də asılıdır",
      "Type 1 hipervizor hər halda host OS-in proqramı kimi işləyir",
      "Type 1 hipervizor bütün guest OS-ləri bir nüvəyə birləşdirir",
      "Type 1 hipervizor disk və şəbəkə cihazlarını idarə edə bilmir",
      "Type 1 hipervizor yamaq ehtiyacını avtomatik aradan qaldırır"
    ],
    "keywords": "etiket kifayət deyil, konfiqurasiya",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 2.2 Type 1 və Type 2 hipervizor; s. 6"
  },
  {
    "id": 155,
    "question": "Eyni vCPU sayına malik iki platformadakı VM-lərin hesablama gücü necə müqayisə edilməlidir?",
    "answer": "Real performans testi (benchmark) ilə – vCPU sayından başqa CPU modeli, overcommit və host yükü də nəzərə alınır",
    "options": [
      "Real performans testi (benchmark) ilə – vCPU sayından başqa CPU modeli, overcommit və host yükü də nəzərə alınır",
      "Yalnız hər VM-in vCPU sayına əsasən",
      "Yalnız image faylının ölçüsünə əsasən",
      "Yalnız snapshot-ların sayına əsasən",
      "Yalnız guest OS-in versiya nömrəsinə əsasən"
    ],
    "keywords": "benchmark, yalnız vCPU kifayət deyil",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 3.1 Prosessor: vCPU, planlaşdırma və overcommit; s. 7"
  },
  {
    "id": 156,
    "question": "Paylaşılan hostda başqa iş yükünün sizin VM-in performansına təsiri necə adlanır?",
    "answer": "Noisy neighbor (səs-küylü qonşu)",
    "options": [
      "Noisy neighbor (səs-küylü qonşu)",
      "VM-dən çıxış",
      "Canlı köçürmə",
      "Qəza ardıcıllığı",
      "İlkin konfiqurasiya"
    ],
    "keywords": "noisy neighbor",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 3.1 Prosessor: vCPU, planlaşdırma və overcommit; s. 7"
  },
  {
    "id": 157,
    "question": "CPU overcommit-in xərc və performans baxımından əsas trade-off-u hansıdır?",
    "answer": "Xərc azalır (daha çox VM bir hostda), lakin performans dəyişkən olur (CPU gözləməsi)",
    "options": [
      "Xərc azalır (daha çox VM bir hostda), lakin performans dəyişkən olur (CPU gözləməsi)",
      "Xərc azalır və hər VM-in fiziki nüvəsi zəmanətli olur",
      "Xərc artır, amma image-lərin saxlanmasına ehtiyac qalmır",
      "Başlanğıc sürəti azalır, lakin guest yamaqları avtomatlaşır",
      "Disk uyğunluğu artır, lakin CPU kreditləri ləğv edilir"
    ],
    "keywords": "ucuz, amma performans zəmanətsiz",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 3.1 Prosessor: vCPU, planlaşdırma və overcommit; s. 7"
  },
  {
    "id": 158,
    "question": "Yaddaş overcommit-i tətbiq edilən hostda yaddaş çatmayanda əsas risk nədir?",
    "answer": "Swap/balloon və ya OOM nəticəsində performans kəskin düşür, VM-lər dayana bilər",
    "options": [
      "Swap/balloon və ya OOM nəticəsində performans kəskin düşür, VM-lər dayana bilər",
      "VM-in fiziki RAM-ının avtomatik artması",
      "Guest OS yamaqlarının avtomatik quraşdırılması",
      "Image-in başqa arxitekturaya çevrilməsi",
      "Bütün VM-lərin metadata-sının silinməsi"
    ],
    "keywords": "yaddaş çatmır → yavaşlama/dayanma",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 3.2 Yaddaş: təcrid və ayırma siyasəti; s. 8"
  },
  {
    "id": 159,
    "question": "VM-də yaddaş təcridi hansı təsvirə uyğundur?",
    "answer": "Hər guest yalnız ona ayrılmış yaddaş ünvan fəzasını görür; hipervizor digər VM yaddaşına çıxışı bloklayır",
    "options": [
      "Hər guest yalnız ona ayrılmış yaddaş ünvan fəzasını görür; hipervizor digər VM yaddaşına çıxışı bloklayır",
      "Guest bütün VM-lərin yaddaş ünvanlarını sərbəst istifadə edir",
      "Guest ünvanları yalnız image kataloqundakı fayllara çevrilir",
      "Guest yaddaşını yalnız tətbiqin giriş parolu məhdudlaşdırır",
      "Guest hər sorğuda digər VM-lərin səhifə cədvəlini dəyişir"
    ],
    "keywords": "hər VM öz yaddaşı",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 3.2 Yaddaş: təcrid və ayırma siyasəti; s. 8"
  },
  {
    "id": 160,
    "question": "Birbaşa cihaz təyinatının paravirtual I/O ilə müqayisədə əsas çeviklik məhdudiyyəti nədir?",
    "answer": "Cihaz konkret VM-ə bağlanır, buna görə köçürmə və paylaşım çevikliyi azalır",
    "options": [
      "Cihaz konkret VM-ə bağlanır, buna görə köçürmə və paylaşım çevikliyi azalır",
      "Guest-in hər əməliyyatda real cihazı proqramla təqlid etməsi",
      "VM-in yalnız host OS-in adi proqramı kimi işləməsi",
      "CPU-nun yalnız toplanmış kreditlərlə işləməsi",
      "Image-in hər açılışda tam kopyalanmasının məcburi olması"
    ],
    "keywords": "cihaz bağlıdır, köçürmək çətin",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 3.3 Giriş-çıxış: üç yol; s. 9"
  },
  {
    "id": 161,
    "question": "Tətbiqin və asılılıqların image-ə əvvəlcədən yerləşdirilməsinin əsas nəticəsi hansıdır?",
    "answer": "Açılış sürətlənir və nəticə təkrarlanır, lakin image versiyalamaq və yeniləmək lazım gəlir",
    "options": [
      "Açılış sürətlənir və nəticə təkrarlanır, lakin image versiyalamaq və yeniləmək lazım gəlir",
      "Açılış yavaşlayır, image versiyalarına ehtiyac qalmır",
      "Guest OS yamaqları tamamilə provayderə keçir",
      "Disk snapshot-u avtomatik tətbiq ardıcıllıqlı olur",
      "VM hədəf platformanın sürücülərinə ehtiyac duymur"
    ],
    "keywords": "sürətli açılış, versiya idarəsi",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 3.4 Image, snapshot və backup; s. 10"
  },
  {
    "id": 162,
    "question": "Minimal image-dən açılışda konfiqurasiya yanaşmasının əsas riski hansıdır?",
    "answer": "Açılış yavaşlayır və xarici asılılıqlardan (paket deposu, şəbəkə) asılı olub nəticə təkrarlanmaya bilər",
    "options": [
      "Açılış yavaşlayır və xarici asılılıqlardan (paket deposu, şəbəkə) asılı olub nəticə təkrarlanmaya bilər",
      "Image-ə hər dəyişiklik üçün bütün tətbiqin yerləşdirilməsi zəruridir",
      "Bütün VM-lər eyni fiziki diskə birbaşa bağlanır",
      "Guest-də paket quraşdırılması texniki olaraq mümkün deyil",
      "Açılış zamanı metadata xidməti avtomatik hipervizora çevrilir"
    ],
    "keywords": "yavaş açılış, xarici asılılıq",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 3.4 Image, snapshot və backup; s. 10"
  },
  {
    "id": 163,
    "question": "İşləyən verilənlər bazasının disk snapshot-u niyə tətbiq ardıcıllığına avtomatik zəmanət vermir?",
    "answer": "Snapshot crash-consistent ola bilər – bazanın yaddaşdakı yazılmamış məlumatı üçün tətbiq səviyyəsində flush/quiesce lazımdır",
    "options": [
      "Snapshot crash-consistent ola bilər – bazanın yaddaşdakı yazılmamış məlumatı üçün tətbiq səviyyəsində flush/quiesce lazımdır",
      "Snapshot yalnız verilənlər bazasının istifadəçi parollarını saxlayır",
      "Snapshot alınarkən guest OS həmişə tam silinir",
      "Disk snapshot-u hər halda RAM-ın tam nüsxəsini saxlayır",
      "Snapshot verilənlər bazası sorğularını yenidən icra edir"
    ],
    "keywords": "disk ≠ tətbiq ardıcıllığı",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 3.4 Image, snapshot və backup; s. 10"
  },
  {
    "id": 164,
    "question": "Backup nüsxələrinin giriş icazəsinin mənbənin icazəsindən ayrılmasının məqsədi nədir?",
    "answer": "Mənbə hesabı ələ keçsə və ya səhvən silinsə belə nüsxələrin qorunması",
    "options": [
      "Mənbə hesabı ələ keçsə və ya səhvən silinsə belə nüsxələrin qorunması",
      "Guest-in virtual disk sürücüsünü əvəz etmək",
      "Snapshot-ların fiziki host seçimini avtomatlaşdırmaq",
      "Image-in prosessor arxitekturasını dəyişmək",
      "CPU overcommit-dən yaranan gözləməni azaltmaq"
    ],
    "keywords": "nüsxəni mənbədən təcrid etmək",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 3.4 Image, snapshot və backup; s. 11"
  },
  {
    "id": 165,
    "question": "Provisioning-də copy-on-write üsulu ilə yeni disk necə hazırlanır?",
    "answer": "Baza image yalnız oxunur, VM-in yazıları ayrıca delta qatına yazılır",
    "options": [
      "Baza image yalnız oxunur, VM-in yazıları ayrıca delta qatına yazılır",
      "Hər açılışda bütün image-i RAM-a köçürür",
      "VM-dəki yazıları birbaşa baza image-ə əlavə edir",
      "Hər dəyişiklik üçün ayrıca fiziki host yaradır",
      "Image metadata-sını guest nüvəsi ilə əvəz edir"
    ],
    "keywords": "baza oxunur, yazı delta-ya",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 3.5 VM provisioning: idarəetmə qatı və hipervizor; s. 12"
  },
  {
    "id": 166,
    "question": "İlkin konfiqurasiya zamanı user data-ya parol yazılması niyə təhlükəlidir?",
    "answer": "Metadata xidməti vasitəsilə oxuna bilər və image/log-larda qala bilər – sirrin sızması riski",
    "options": [
      "Metadata xidməti vasitəsilə oxuna bilər və image/log-larda qala bilər – sirrin sızması riski",
      "User data yalnız fiziki şəbəkə kartında saxlanılır",
      "User data hipervizorun aparat təcridini avtomatik söndürür",
      "User data hər halda snapshot-ları ictimai paylaşır",
      "User data prosessorun SMT axınlarını başqa müştəriyə ayırır"
    ],
    "keywords": "metadata ilə oxunur, sızır",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 3.5 VM provisioning: idarəetmə qatı və hipervizor; s. 13"
  },
  {
    "id": 167,
    "question": "Ayrılmış host paylaşılan hostdakı VM-dən əsasən nə ilə fərqlənir?",
    "answer": "Fiziki host yalnız bir müştəriyə ayrılır (paylaşılan deyil)",
    "options": [
      "Fiziki host yalnız bir müştəriyə ayrılır (paylaşılan deyil)",
      "Hər VM hipervizor olmadan birbaşa aparatda işləyir",
      "Guest OS-lər bir paylaşılan nüvə ilə əvəz olunur",
      "Snapshot-lar ayrıca uğursuzluq domenində saxlanılır",
      "VM-lərin disk formatı avtomatik bütün platformalara uyğunlaşır"
    ],
    "keywords": "host yalnız bir müştəriyə",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 6.1 İcra mühitləri; s. 18"
  },
  {
    "id": 168,
    "question": "Gecəlik snapshot-lar üçün saxlama müddəti təyin edilməməsi hansı idarəetmə problemi yaradır?",
    "answer": "Snapshot-lar toplanır, saxlama xərci artır və idarəolunmaz olur",
    "options": [
      "Snapshot-lar toplanır, saxlama xərci artır və idarəolunmaz olur",
      "Snapshot-lar avtomatik silinərək bərpa imkanını itirir",
      "Guest OS yamaqları yalnız snapshot daxilində quraşdırılır",
      "CPU kreditləri snapshot sayına görə azalır",
      "Image versiyaları avtomatik vahid versiyada birləşir"
    ],
    "keywords": "toplanır, xərc artır",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 4.4 Yeni mürəkkəblik; s. 15"
  },
  {
    "id": 169,
    "question": "Paylaşılan prosessor keşi üzərindən dolayı məlumat sızması hansı riskdir?",
    "answer": "Yan kanal (side-channel) hücumu riski",
    "options": [
      "Yan kanal (side-channel) hücumu riski",
      "VM-in adi yenidən başlaması",
      "Kvota çatışmazlığı",
      "Image versiyasının köhnəlməsi",
      "Tətbiq ardıcıllığının pozulması"
    ],
    "keywords": "side-channel",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 7.1 Təhlükəsizlik: təcridin sərhədləri; s. 19"
  },
  {
    "id": 170,
    "question": "Virtuallaşdırmada VM escape anlayışı nəyi ifadə edir?",
    "answer": "Guest-in hipervizorun təcrid sərhədini aşıb hosta və ya digər VM-lərə çıxması",
    "options": [
      "Guest-in hipervizorun təcrid sərhədini aşıb hosta və ya digər VM-lərə çıxması",
      "VM-in testdən istehsal şəbəkəsinə köçürülməsini",
      "Guest-in öz daxilində adi tətbiqi yenidən başlatmasını",
      "Snapshot-dan yeni virtual disk yaradılmasını",
      "Planlı texniki xidmət zamanı VM-in başqa hosta köçürülməsini"
    ],
    "keywords": "təcrid sərhədini aşmaq",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 7.1 Təhlükəsizlik: təcridin sərhədləri; s. 19"
  },
  {
    "id": 171,
    "question": "Planlı texniki xidmət zamanı canlı köçürmə barədə hansı fikir düzgündür?",
    "answer": "Planlı texniki xidmət zamanı kəsintini azaldır, lakin ani host qəzasına qarşı zəmanət vermir",
    "options": [
      "Planlı texniki xidmət zamanı kəsintini azaldır, lakin ani host qəzasına qarşı zəmanət vermir",
      "Host qəzasına qarşı yüksək əlçatanlığa zəmanət verir",
      "Zona nasazlığına qarşı yüksək əlçatanlığa zəmanət verir",
      "Bütün konfiqurasiyaların canlı köçürülməsinə zəmanət verir",
      "Tətbiq xətalarının xidmətə təsir etməyəcəyinə zəmanət verir"
    ],
    "keywords": "planlı ≠ qəza",
    "topic": 4,
    "difficulty": 2,
    "reference": "Mövzu 4; 7.4 Etibarlılıq; s. 20"
  },
  {
    "id": 172,
    "question": "Noutbukda host OS-in proqramı kimi işləyən hipervizorda iki VM açıqdır. Host OS yeniləmə üçün yenidən başladıqda nə baş verər?",
    "answer": "Host OS-ə bağlı olduğu üçün VM-lər də dayanır",
    "options": [
      "Host OS-ə bağlı olduğu üçün VM-lər də dayanır",
      "Yalnız çox CPU istifadə edən VM dayanır",
      "VM-lər host OS-dən asılı olmadan işləməyə davam edir",
      "VM-lər avtomatik başqa fiziki hosta köçürülür",
      "Yalnız snapshot-u olmayan VM dayanır"
    ],
    "keywords": "host OS-lə birgə dayanır",
    "topic": 4,
    "difficulty": 3,
    "reference": "Mövzu 4; 2.2 Type 1 və Type 2 hipervizor; s. 6"
  },
  {
    "id": 173,
    "question": "Yalnız buludun idarəetmə API-si əlçatmazdır; işləyən VM-lərin məlumat yolu sağlamdır. Hansı nəticə gözlənilir?",
    "answer": "Mövcud VM-lər işləməyə davam edir, lakin yeni VM yaratmaq/idarə etmək mümkün olmur",
    "options": [
      "Mövcud VM-lər işləməyə davam edir, lakin yeni VM yaratmaq/idarə etmək mümkün olmur",
      "Bütün guest OS-lər dərhal yenidən başlayar",
      "Mövcud VM-lər dayanır, yeni VM yaradılması davam edir",
      "Hipervizor API əvəzinə istifadəçi icazəsini özü yoxlayar",
      "VM-lər avtomatik bare-metal rejiminə keçər"
    ],
    "keywords": "işləyir, idarə yoxdur",
    "topic": 4,
    "difficulty": 3,
    "reference": "Mövzu 4; 4.3 Yeni həll; s. 14"
  },
  {
    "id": 174,
    "question": "Bir fiziki serverdə tətbiqlər ayrı VM-lərə bölünüb. Pik yükdə həmin serverin ümumi tutumu yenə çatmır. Niyə virtuallaşdırma bunu təkbaşına həll etməyib?",
    "answer": "Virtuallaşdırma tutum yaratmır, yalnız mövcud fiziki tutumu bölüşdürür",
    "options": [
      "Virtuallaşdırma tutum yaratmır, yalnız mövcud fiziki tutumu bölüşdürür",
      "Hər yeni VM hosta yeni fiziki prosessor əlavə edir",
      "Ayrı guest OS-lər mövcud prosessoru istifadə edə bilmir",
      "Hipervizor yalnız snapshot yaradıldıqdan sonra resurs bölür",
      "VM-lərə bölünmə mütləq bütün tətbiqləri eyni OS-də saxlayır"
    ],
    "keywords": "tutum artmır, bölünür",
    "topic": 4,
    "difficulty": 3,
    "reference": "Mövzu 4; 4.3 Yeni həll; s. 13"
  },
  {
    "id": 175,
    "question": "VM üçün ehtiyat nüsxə planı hazırlanır. Nüsxənin bərpa üçün işlək olduğunu yoxlamaq üçün hansı addım lazımdır?",
    "answer": "Nüsxəni ayrı mühitdə bərpa edib tətbiqin işlədiyini yoxlamaq (bərpa sınağı) və nüsxəni ayrı yerdə saxlamaq",
    "options": [
      "Nüsxəni ayrı mühitdə bərpa edib tətbiqin işlədiyini yoxlamaq (bərpa sınağı) və nüsxəni ayrı yerdə saxlamaq",
      "VM-in vCPU sayını müntəzəm artırmaq",
      "Image-in adını müntəzəm dəyişdirmək",
      "Guest-in portlarını müntəzəm açmaq",
      "Snapshot-u mənbə disklə eyni yerdə saxlamaq"
    ],
    "keywords": "bərpa sınağı",
    "topic": 4,
    "difficulty": 3,
    "reference": "Mövzu 4; 3.4 Image, snapshot və backup; s. 11"
  },
  {
    "id": 176,
    "question": "Lokal hipervizorda VM və onun snapshot delta faylı eyni diskdədir. Disk sıradan çıxarsa, hansı nəticə gözlənilir?",
    "answer": "VM və snapshot eyni diskdə olduğundan hər ikisi itir – snapshot backup deyil",
    "options": [
      "VM və snapshot eyni diskdə olduğundan hər ikisi itir – snapshot backup deyil",
      "Snapshot VM-i avtomatik başqa diskdə yenidən yaradar",
      "Snapshot fiziki diskdən asılı olmadığı üçün mütləq qalır",
      "Yalnız VM-in vCPU konfiqurasiyası itər",
      "Hipervizor image kataloqundan itmiş məlumatları mütləq bərpa edər"
    ],
    "keywords": "eyni disk = hər ikisi itir",
    "topic": 4,
    "difficulty": 3,
    "reference": "Mövzu 4; 3.4 Image, snapshot və backup; s. 10"
  },
  {
    "id": 177,
    "question": "x86_64 image-in ARM64 hostda native işləməməsi daşınmanın hansı uyğunluq şərtinə aiddir?",
    "answer": "Prosessor arxitekturasına",
    "options": [
      "Prosessor arxitekturasına",
      "Disk formatına",
      "Virtual cihaz sürücülərinə",
      "UEFI və BIOS açılış rejiminə",
      "Metadata xidmətinə"
    ],
    "keywords": "x86 ≠ ARM, CPU arxitekturası",
    "topic": 4,
    "difficulty": 3,
    "reference": "Mövzu 4; 4.5 Daşına bilmə: niyə “diski kopyalamaq” kifayət deyil; s. 15"
  },
  {
    "id": 178,
    "question": "Tətbiqin darboğazı disk I/O-sudur. Yalnız VM-in vCPU sayını artırmaq barədə hansı fikir düzgündür?",
    "answer": "vCPU artırmaq I/O darboğazını həll etməyə bilər – problem diskdədir",
    "options": [
      "vCPU artırmaq I/O darboğazını həll etməyə bilər – problem diskdədir",
      "Disk gecikməsini mütləq aradan qaldırır",
      "Blok diski avtomatik yerli RAM-a çevirir",
      "Paravirtual sürücünü avtomatik birbaşa təyinatla əvəz edir",
      "Guest OS-in diskə çıxışını dayandıraraq performansı artırır"
    ],
    "keywords": "CPU ≠ disk darboğazı",
    "topic": 4,
    "difficulty": 3,
    "reference": "Mövzu 4; 7.3 Performans; s. 20"
  },
  {
    "id": 179,
    "question": "İş yükü provayder hipervizoru olmadan birbaşa host aparatında işləməlidir. Hansı icra mühiti uyğundur?",
    "answer": "Bare-metal (ayrılmış fiziki server, provayder hipervizoru olmadan)",
    "options": [
      "Bare-metal (ayrılmış fiziki server, provayder hipervizoru olmadan)",
      "Provayder hipervizorlu ayrılmış host",
      "Paylaşılan hostda Type 1 VM",
      "Host OS üzərində Type 2 VM",
      "Type 1 VM daxilində konteyner"
    ],
    "keywords": "bare-metal",
    "topic": 4,
    "difficulty": 3,
    "reference": "Mövzu 4; 6.1 İcra mühitləri; s. 18"
  },
  {
    "id": 180,
    "question": "Eyni VM daxilində iki etibarsız iş ayrı konteynerlərdə işləyir. Bu iki işin bir-birindən təcridi əsasən hansı sərhədə söykənir?",
    "answer": "Ortaq OS nüvəsi üzərindəki namespace və cgroups sərhədinə (nüvə paylaşılır, təcrid daha zəifdir)",
    "options": [
      "Ortaq OS nüvəsi üzərindəki namespace və cgroups sərhədinə (nüvə paylaşılır, təcrid daha zəifdir)",
      "Hər iş üçün ayrıca hipervizor sərhədinə",
      "Hər iş üçün ayrıca fiziki hosta",
      "Disk snapshot-larının saxlama müddətinə",
      "Image kataloqunun versiya nömrələrinə"
    ],
    "keywords": "ortaq nüvə, namespace/cgroups",
    "topic": 4,
    "difficulty": 3,
    "reference": "Mövzu 4; 5 Kiçik, orta və yüksək miqyaslı sistem nümunələri; s. 17"
  },
  {
    "id": 181,
    "question": "Konteyner image-i tətbiqlə birlikdə asılılıqları paketləməklə əsasən hansı problemi azaltmağa kömək edir?",
    "answer": "Mühitlər arasında asılılıq və konfiqurasiya fərqi problemini («məndə işləyir, sizdə işləmir»)",
    "options": [
      "Mühitlər arasında asılılıq və konfiqurasiya fərqi problemini («məndə işləyir, sizdə işləmir»)",
      "Host diskinin fiziki nasazlığını",
      "Bir hostun ümumi CPU tutumunu",
      "Tətbiqin giriş icazələrinin səhv seçilməsini",
      "Verilənlər bazasının sxem uyğunsuzluğunu"
    ],
    "keywords": "asılılıq, mühit fərqi",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 1.3 Konteyner ideyası; s. 4"
  },
  {
    "id": 182,
    "question": "Konteyner image-i nədir?",
    "answer": "Tətbiq və asılılıqlarını özündə saxlayan dəyişməz, qatlı, yalnız oxunan paket (konteyner yaratmaq üçün şablon)",
    "options": [
      "Tətbiq və asılılıqlarını özündə saxlayan dəyişməz, qatlı, yalnız oxunan paket (konteyner yaratmaq üçün şablon)",
      "Tətbiqin işləyərkən yazdığı müvəqqəti qat",
      "Hostun tam disk ehtiyat nüsxəsi",
      "Konteynerləri birləşdirən virtual şəbəkə",
      "CPU istifadəsini məhdudlaşdıran nüvə mexanizmi"
    ],
    "keywords": "dəyişməz şablon",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 2.2 Əsas terminlər; s. 6"
  },
  {
    "id": 183,
    "question": "Dockerfile-ın əsas rolu nədir?",
    "answer": "Image-in necə qurulacağını təsvir edən təlimatlar faylı",
    "options": [
      "Image-in necə qurulacağını təsvir edən təlimatlar faylı",
      "Konteynerlər arasında DNS sorğularını həll etmək",
      "Hostun yaddaş istifadəsini ölçmək",
      "Verilənlər bazasının ehtiyat nüsxəsini saxlamaq",
      "İşləyən konteynerin IP ünvanını dəyişmək"
    ],
    "keywords": "image qurma təlimatları",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.6 Dockerfile və build keşi; s. 9"
  },
  {
    "id": 184,
    "question": "Registry hansı funksiyanı yerinə yetirir?",
    "answer": "Image-ləri saxlayır və paylayır (push və pull)",
    "options": [
      "Image-ləri saxlayır və paylayır (push və pull)",
      "Proseslərin CPU kvotasını təyin edir",
      "Konteynerin əsas prosesini seçir",
      "Host qovluğunu konteynerə qoşur",
      "Guest əməliyyat sisteminin nüvəsini işə salır"
    ],
    "keywords": "image anbarı",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.4 Docker arxitekturası: klient, daemon və registry; s. 9"
  },
  {
    "id": 185,
    "question": "Konteynerdə proses nömrələrini hansı namespace ayırır?",
    "answer": "PID namespace",
    "options": [
      "PID namespace",
      "Mount namespace",
      "Network namespace",
      "UTS namespace",
      "User namespace"
    ],
    "keywords": "proses nömrəsi = PID",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.1 Namespaces: proses nəyi görür; s. 6"
  },
  {
    "id": 186,
    "question": "Mount namespace hansı resursu ayırır?",
    "answer": "Fayl sisteminin qoşulma nöqtələrini (mount points)",
    "options": [
      "Fayl sisteminin qoşulma nöqtələrini (mount points)",
      "CPU kvotasını",
      "Hostname-i",
      "Proses nömrələrini",
      "Şəbəkə interfeyslərini"
    ],
    "keywords": "fayl sistemi görünüşü",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.1 Namespaces: proses nəyi görür; s. 6"
  },
  {
    "id": 187,
    "question": "Cgroups-un əsas vəzifəsi hansıdır?",
    "answer": "Konteynerin CPU, yaddaş və digər resurs istifadəsini məhdudlaşdırmaq və hesablamaq",
    "options": [
      "Konteynerin CPU, yaddaş və digər resurs istifadəsini məhdudlaşdırmaq və hesablamaq",
      "Image versiyasına insan üçün ad vermək",
      "Konteynerin kök qovluğunu image-dən qurmaq",
      "Registry-də image qatlarını saxlamaq",
      "Servislərin adlarını IP ünvanlarına çevirmək"
    ],
    "keywords": "resurs limiti",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.2 Cgroups: proses nə qədər istifadə edir; s. 7"
  },
  {
    "id": 188,
    "question": "Docker-in klient–server arxitekturasında docker CLI hansı rolu oynayır?",
    "answer": "Daemon-a əmr göndərən istifadəçi klienti",
    "options": [
      "Daemon-a əmr göndərən istifadəçi klienti",
      "Konteynerləri yaradan daemon",
      "Image-ləri paylayan registry",
      "Tətbiqi işlədən guest nüvəsi",
      "Davamlı məlumat saxlayan volume"
    ],
    "keywords": "klient/interfeys",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.4 Docker arxitekturası: klient, daemon və registry; s. 8"
  },
  {
    "id": 189,
    "question": "Dockerfile-da FROM təlimatı nəyi seçir?",
    "answer": "Baza image-i",
    "options": [
      "Baza image-i",
      "İş qovluğunu",
      "Hostun yayımlanmış portunu",
      "Konteynerin yaddaş limitini",
      "Əsas prosesin restart siyasətini"
    ],
    "keywords": "baza image",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.6 Dockerfile və build keşi; s. 10"
  },
  {
    "id": 190,
    "question": "Dockerfile-da WORKDIR təlimatının vəzifəsi nədir?",
    "answer": "Sonrakı təlimatlar üçün iş qovluğunu təyin etmək",
    "options": [
      "Sonrakı təlimatlar üçün iş qovluğunu təyin etmək",
      "Baza image-i seçmək",
      "Əsas prosesi işə salmaq",
      "Image-i registry-yə göndərmək",
      "Hostun portunu yayımlamaq"
    ],
    "keywords": "iş qovluğu",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.6 Dockerfile və build keşi; s. 10"
  },
  {
    "id": 191,
    "question": "Dockerfile-da CMD nəyi təyin edir?",
    "answer": "Konteyner başlayanda icra olunacaq default əmri (əsas prosesi)",
    "options": [
      "Konteyner başlayanda icra olunacaq default əmri (əsas prosesi)",
      "Build zamanı istifadə olunacaq host nüvəsini",
      "Registry-nin saxlama müddətini",
      "Konteynerlərarası şəbəkənin IP aralığını",
      "Volume-un ehtiyat nüsxəsinin yerini"
    ],
    "keywords": "default əmr",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.6 Dockerfile və build keşi; s. 10"
  },
  {
    "id": 192,
    "question": "docker push əməliyyatının nəticəsi nədir?",
    "answer": "Lokal image registry-yə göndərilir",
    "options": [
      "Lokal image registry-yə göndərilir",
      "Registry-dən image lokal hosta çəkilir",
      "Image-dən işləyən konteyner yaradılır",
      "Konteynerin yazıla bilən qatı silinir",
      "Dockerfile-dan yeni image qurulur"
    ],
    "keywords": "göndərmək = registry-yə",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.7 Registry, tag, digest və platforma; s. 11"
  },
  {
    "id": 193,
    "question": "Image digest-i nəyi ifadə edir?",
    "answer": "Image məzmununun dəyişməz kriptoqrafik hash identifikatoru",
    "options": [
      "Image məzmununun dəyişməz kriptoqrafik hash identifikatoru",
      "Image-in insan üçün dəyişkən adını",
      "Konteynerin proses nömrəsini",
      "Hostun şəbəkə interfeysinin adını",
      "Volume-un lokal diskdəki qovluğunu"
    ],
    "keywords": "dəyişməz hash",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.7 Registry, tag, digest və platforma; s. 11"
  },
  {
    "id": 194,
    "question": "Docker volume-u hansı xüsusiyyətə malikdir?",
    "answer": "Konteynerdən asılı olmayaraq davamlıdır (konteyner silinsə də qalır), Docker tərəfindən idarə olunur",
    "options": [
      "Konteynerdən asılı olmayaraq davamlıdır (konteyner silinsə də qalır), Docker tərəfindən idarə olunur",
      "Konteyner dayanan kimi avtomatik silinir",
      "Yalnız image-in metadata-sını saxlayır",
      "Hər konteyner üçün ayrıca nüvə yaradır",
      "Image qatlarına dəyişiklikləri birbaşa yazır"
    ],
    "keywords": "davamlı saxlama",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.8 Məlumatın saxlanması: yazıla bilən qat, volume, bind mount, tmpfs; s. 12"
  },
  {
    "id": 195,
    "question": "Bind mount nə edir?",
    "answer": "Host qovluğunu və ya faylını konteynerə qoşur",
    "options": [
      "Host qovluğunu və ya faylını konteynerə qoşur",
      "Image-i dəyişməz digest-ə bağlayır",
      "Konteynerin CPU istifadəsinə kvota qoyur",
      "Registry-dən baza image-i çəkir",
      "Konteyner portunu host portuna bağlayır"
    ],
    "keywords": "host qovluğu → konteyner",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.8 Məlumatın saxlanması: yazıla bilən qat, volume, bind mount, tmpfs; s. 12"
  },
  {
    "id": 196,
    "question": "tmpfs-də saxlanan məlumat konteyner dayananda necə dəyişir?",
    "answer": "Yalnız RAM-da saxlanır və konteyner dayananda itir",
    "options": [
      "Yalnız RAM-da saxlanır və konteyner dayananda itir",
      "Image-in aşağı qatına köçürülür",
      "Registry-də avtomatik saxlanır",
      "Adlandırılmış volume-a çevrilir",
      "Hostun bütün konteynerlərinə paylanır"
    ],
    "keywords": "müvəqqəti, RAM",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.8 Məlumatın saxlanması: yazıla bilən qat, volume, bind mount, tmpfs; s. 12"
  },
  {
    "id": 197,
    "question": "Compose faylında tətbiqin servisləri hansı bölmədə təsvir edilir?",
    "answer": "services",
    "options": [
      "services",
      "networks",
      "volumes",
      "configs",
      "secrets"
    ],
    "keywords": "services bölməsi",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.10 Docker Compose: çoxkonteynerli tətbiqi bir faylda təsvir etmək; s. 15"
  },
  {
    "id": 198,
    "question": "Docker-in default seccomp profili nəyi məhdudlaşdırır?",
    "answer": "Konteynerin təhlükəli sistem çağırışlarını (syscall) məhdudlaşdırır",
    "options": [
      "Konteynerin təhlükəli sistem çağırışlarını (syscall) məhdudlaşdırır",
      "Registry-dəki tag adlarının sayını",
      "Image-in prosessor arxitekturasını",
      "Volume-un saxlanma müddətini",
      "Compose faylındakı servis adlarını"
    ],
    "keywords": "syscall filtri",
    "topic": 5,
    "difficulty": 1,
    "reference": "Mövzu 5; 3.3 Təcridin qatları və sərhədi; s. 7"
  },
  {
    "id": 199,
    "question": "macOS-da Docker Desktop ilə işləyən Linux konteyneri hansı nüvədən istifadə edir?",
    "answer": "Docker Desktop-un daxilində işlədiyi yüngül Linux VM-in nüvəsindən",
    "options": [
      "Docker Desktop-un daxilində işlədiyi yüngül Linux VM-in nüvəsindən",
      "macOS nüvəsinin birbaşa Linux çağırışlarından",
      "Image-in daxilində saxlanan ayrıca guest nüvəsindən",
      "Registry serverinin nüvəsindən",
      "Hər konteyner üçün yaradılan ayrıca macOS nüvəsindən"
    ],
    "keywords": "Linux VM nüvəsi",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 1.4 Əhatə: Linux konteynerləri və “Docker ≠ konteyner”; s. 4"
  },
  {
    "id": 200,
    "question": "Docker ilə qurulmuş image-in Podman kimi başqa alətlərdə işlədilməsini hansı amil dəstəkləyir?",
    "answer": "Açıq image standartı (OCI)",
    "options": [
      "Açıq image standartı (OCI)",
      "Hər image-in ayrıca hipervizor daşıması",
      "Registry-nin host nüvəsini image-ə əlavə etməsi",
      "Volume-un image-i yeni formata çevirməsi",
      "Docker CLI-nin bütün hostlarda root kimi işləməsi"
    ],
    "keywords": "OCI standartı",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 1.4 Əhatə: Linux konteynerləri və “Docker ≠ konteyner”; s. 4"
  },
  {
    "id": 201,
    "question": "Bir hostdakı bir neçə konteynerin daxildə eyni 80-ci portda dinləməsi necə mümkün olur?",
    "answer": "Hər konteynerin öz network namespace-i (ayrı şəbəkə yığını və IP) olur",
    "options": [
      "Hər konteynerin öz network namespace-i (ayrı şəbəkə yığını və IP) olur",
      "Cgroups hər konteynerə ayrıca IP ünvanı verir",
      "Registry port nömrələrini image qatlarına paylayır",
      "Mount namespace şəbəkə paketlərini çeşidləyir",
      "Bütün konteynerlər eyni prosesi və eyni soketi paylaşır"
    ],
    "keywords": "network namespace",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.1 Namespaces: proses nəyi görür; s. 6"
  },
  {
    "id": 202,
    "question": "Bir hostda konteynerlər bir-birinin proseslərini görmür. Bu, onların CPU və yaddaş istifadəsinin də məhdud olduğu deməkdirmi?",
    "answer": "Xeyr – namespace yalnız görünürlüyü ayırır; resurs limiti cgroups ilə təyin olunur",
    "options": [
      "Xeyr – namespace yalnız görünürlüyü ayırır; resurs limiti cgroups ilə təyin olunur",
      "Bəli, PID namespace CPU kvotasını özü təyin edir",
      "Bəli, mount namespace yaddaş həcmini özü bölür",
      "Bəli, hər image ayrıca fiziki prosessor təmin edir",
      "Xeyr, amma port yayımlama resurs limitini əvəz edir"
    ],
    "keywords": "namespace ≠ resurs limiti",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.2 Cgroups: proses nə qədər istifadə edir; s. 7"
  },
  {
    "id": 203,
    "question": "Docker-in standart restart siyasəti no olduqda dayanmış konteyner üçün nə gözlənilir?",
    "answer": "Dayandıqdan sonra avtomatik yenidən başlamır, dayanmış qalır",
    "options": [
      "Dayandıqdan sonra avtomatik yenidən başlamır, dayanmış qalır",
      "Avtomatik başqa hosta köçürülür",
      "Hər beş saniyədə yenidən başladılır",
      "Registry-dəki latest image-dən yenilənir",
      "Dayanan kimi onun volume-u silinir"
    ],
    "keywords": "no = yenidən başlamır",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.2 Cgroups: proses nə qədər istifadə edir; s. 7"
  },
  {
    "id": 204,
    "question": "docker run -d ilə başladılmış konteyner terminal bağlananda niyə dayanmağa məcbur deyil?",
    "answer": "Əsas proses arxa fonda (detached) işləyir, terminaldan asılı deyil",
    "options": [
      "Əsas proses arxa fonda (detached) işləyir, terminaldan asılı deyil",
      "-d konteyneri virtual maşına çevirir",
      "Registry terminalın yerinə əsas prosesi icra edir",
      "Volume tətbiqin prosesini işlək saxlayır",
      "CLI bağlananda konteyner yeni nüvə yaradır"
    ],
    "keywords": "arxa fonda",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.4 Docker arxitekturası: klient, daemon və registry; s. 8"
  },
  {
    "id": 205,
    "question": "Dockerfile təlimatlarının image qatlarına təsiri hansı variantda düzgün göstərilib?",
    "answer": "RUN, COPY və ADD fayl sistemi qatı yaradır; CMD və LABEL yalnız metadata dəyişir",
    "options": [
      "RUN, COPY və ADD fayl sistemi qatı yaradır; CMD və LABEL yalnız metadata dəyişir",
      "CMD fayl sistemi qatı yaradır, RUN yalnız metadata-nı dəyişir",
      "LABEL fayl sistemi qatı yaradır, COPY yalnız metadata-nı dəyişir",
      "RUN və CMD yalnız metadata-nı dəyişir",
      "COPY və ADD image məzmununa təsir etmir"
    ],
    "keywords": "RUN/COPY/ADD = qat",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.5 Image: qatlar və yazıla bilən qat; s. 9"
  },
  {
    "id": 206,
    "question": "Konteynerdə image-in aşağı qatındakı fayl dəyişdiriləndə copy-on-write necə işləyir?",
    "answer": "Fayl yazıla bilən qata kopyalanır və orada dəyişdirilir; aşağı qat dəyişməz qalır",
    "options": [
      "Fayl yazıla bilən qata kopyalanır və orada dəyişdirilir; aşağı qat dəyişməz qalır",
      "Fayl birbaşa yalnız oxunan aşağı qatda dəyişdirilir",
      "Dəyişiklik registry-dəki image-ə dərhal göndərilir",
      "Fayl avtomatik adlandırılmış volume-a köçürülür",
      "Image-dən yaradılmış bütün konteynerlərdə fayl dəyişir"
    ],
    "keywords": "yazıla bilən qata kopyala",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.5 Image: qatlar və yazıla bilən qat; s. 9"
  },
  {
    "id": 207,
    "question": ".dockerignore faylı image qurularkən hansı məqsədə xidmət edir?",
    "answer": "Build kontekstindən lazımsız faylları xaric edir",
    "options": [
      "Build kontekstindən lazımsız faylları xaric edir",
      "İşləyən konteynerin portlarını bağlayır",
      "Konteynerin resurs limitlərini avtomatik seçir",
      "Registry-də köhnə tag-ləri silir",
      "Verilənlər bazasının başlanmasını gözləyir"
    ],
    "keywords": "build-dən kənarlaşdır",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.6 Dockerfile və build keşi; s. 10"
  },
  {
    "id": 208,
    "question": "Çoxmərhələli build son image-i kiçiltməyə necə kömək edir?",
    "answer": "Build alətləri ilk mərhələdə qalır, son image yalnız lazımi nəticəni (artefaktı) götürür",
    "options": [
      "Build alətləri ilk mərhələdə qalır, son image yalnız lazımi nəticəni (artefaktı) götürür",
      "Bütün build alətləri son image-də saxlanır",
      "Host nüvəsi son image-dən registry-yə köçürülür",
      "Hər FROM ayrıca işləyən konteyneri istehsalda saxlayır",
      "Image qatları tamamilə volume-larla əvəz edilir"
    ],
    "keywords": "alətlər son image-də olmur",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.6 Dockerfile və build keşi; s. 11"
  },
  {
    "id": 209,
    "question": "Registry-də tag yeni image-ə yönəldildikdə həmin tag-dən əvvəl yaradılmış işləyən konteynerlə nə baş verir?",
    "answer": "Heç nə – işləyən konteyner köhnə image ilə qalır, yenisi üçün yenidən yaradılmalıdır",
    "options": [
      "Heç nə – işləyən konteyner köhnə image ilə qalır, yenisi üçün yenidən yaradılmalıdır",
      "Konteynerin qatları dərhal yeni image-lə əvəz olunur",
      "Konteyner avtomatik dayandırılıb yenidən yaradılır",
      "Konteynerin volume-u yeni image-ə daxil edilir",
      "Konteyner avtomatik yeni hosta köçürülür"
    ],
    "keywords": "tag dəyişir, konteyner dəyişmir",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.7 Registry, tag, digest və platforma; s. 11"
  },
  {
    "id": 210,
    "question": "Çoxplatformalı image-də amd64 və arm64 hostları üçün uyğunluq necə təmin edilir?",
    "answer": "Registry hər arxitektura üçün ayrıca image variantı saxlayır, host öz arxitekturasına uyğununu çəkir",
    "options": [
      "Registry hər arxitektura üçün ayrıca image variantı saxlayır, host öz arxitekturasına uyğununu çəkir",
      "Eyni maşın kodu bütün prosessorlarda dəyişmədən icra olunur",
      "Registry hər host üçün ayrıca Linux nüvəsi açır",
      "Volume prosessor təlimatlarını digər arxitekturaya çevirir",
      "Hostun prosessor arxitekturası image-ə uyğun dəyişdirilir"
    ],
    "keywords": "hər arxitektura üçün variant",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.7 Registry, tag, digest və platforma; s. 11"
  },
  {
    "id": 211,
    "question": "Docker-də -p 8080:80 yazısı hansı port əlaqəsini təsvir edir?",
    "answer": "Hostun 8080 portundan konteynerin 80 portuna yönləndirmə",
    "options": [
      "Hostun 8080 portundan konteynerin 80 portuna yönləndirmə",
      "Hostun 80 portundan konteynerin 8080 portuna yönləndirməni",
      "İki konteynerin 8080 portlarını bir-birinə bağlamağı",
      "Konteynerin 80 portunu yalnız registry-yə açmağı",
      "Hostun bütün portlarını konteynerin 8080 portuna bağlamağı"
    ],
    "keywords": "host:konteyner = 8080:80",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.9 Şəbəkə: port yayımlama və konteynerlərarası əlaqə; s. 13"
  },
  {
    "id": 212,
    "question": "Dockerfile-da EXPOSE təlimatı portun əlçatanlığına necə təsir edir?",
    "answer": "Yalnız sənədləşdirmədir (portu yayımlamır); hosta açmaq üçün -p lazımdır",
    "options": [
      "Yalnız sənədləşdirmədir (portu yayımlamır); hosta açmaq üçün -p lazımdır",
      "Portu hostun bütün ünvanlarında yayımlayır",
      "Portu yalnız 127.0.0.1 ünvanında yayımlayır",
      "Portu avtomatik verilənlər bazasına bağlayır",
      "Host firewall-unda port üçün giriş qaydası yaradır"
    ],
    "keywords": "EXPOSE yayımlamır",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.9 Şəbəkə: port yayımlama və konteynerlərarası əlaqə; s. 13"
  },
  {
    "id": 213,
    "question": "Default bridge ilə istifadəçinin yaratdığı bridge şəbəkəsində konteynerlərin bir-birini tapması necə fərqlənir?",
    "answer": "Default bridge-də yalnız IP ilə, istifadəçi bridge-də isə konteyner adı ilə avtomatik DNS həlli",
    "options": [
      "Default bridge-də yalnız IP ilə, istifadəçi bridge-də isə konteyner adı ilə avtomatik DNS həlli",
      "Default bridge-də avtomatik DNS, istifadəçi şəbəkəsində yalnız IP işləyir",
      "Hər iki şəbəkədə adların həlli registry vasitəsilə aparılır",
      "Hər iki şəbəkədə əlaqə yalnız hostda yayımlanmış portdan keçir",
      "İstifadəçi şəbəkəsində əlaqə üçün konteynerlər host rejiminə keçir"
    ],
    "keywords": "istifadəçi bridge = ad ilə DNS",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.9 Şəbəkə: port yayımlama və konteynerlərarası əlaqə; s. 13"
  },
  {
    "id": 214,
    "question": "Əlavə silmə bayrağı olmadan docker compose down nə edir?",
    "answer": "Konteynerləri və şəbəkəni silir, adlandırılmış volume-ları saxlayır",
    "options": [
      "Konteynerləri və şəbəkəni silir, adlandırılmış volume-ları saxlayır",
      "Konteynerləri saxlayır, bütün volume-ları silir",
      "Yalnız registry-dəki image-ləri silir",
      "Konteynerləri başqa hostda yenidən yaradır",
      "Yalnız servislərin portlarını dəyişir, konteynerləri saxlayır"
    ],
    "keywords": "konteyner sil, volume qalır",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.10 Docker Compose: çoxkonteynerli tətbiqi bir faylda təsvir etmək; s. 16"
  },
  {
    "id": 215,
    "question": "Podman-ın Docker-in standart daemon əsaslı quruluşundan fərqi hansı variantda verilib?",
    "answer": "Daemon-suz (daemonless) və rootless işləyə bilir, eyni Linux nüvə mexanizmlərindən istifadə edir",
    "options": [
      "Daemon-suz (daemonless) və rootless işləyə bilir, eyni Linux nüvə mexanizmlərindən istifadə edir",
      "Hər konteyner üçün tam guest OS tələb edir",
      "Yalnız image saxlayır, konteyner işlətmir",
      "Linux nüvəsinin təcrid mexanizmlərindən istifadə etmir",
      "Bütün konteynerlərin ayrıca hipervizor daşımasını tələb edir"
    ],
    "keywords": "daemonless",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 3.4 Docker arxitekturası: klient, daemon və registry; s. 8"
  },
  {
    "id": 216,
    "question": "Konteyner sıxlığı artsa da xərc qiymətləndirməsində hansı əlavə amillər nəzərə alınmalıdır?",
    "answer": "CPU vaxtından başqa yaddaş, saxlama, şəbəkə, əməliyyat və monitorinq xərcləri də nəzərə alınmalıdır",
    "options": [
      "CPU vaxtından başqa yaddaş, saxlama, şəbəkə, əməliyyat və monitorinq xərcləri də nəzərə alınmalıdır",
      "Yalnız işləyən konteynerlərin istifadə etdiyi CPU vaxtı",
      "Yalnız konteynerlərin məlumat yazdığı volume-lar",
      "Yalnız image-in bir dəfə qurulması üçün tələb olunan vaxt",
      "Yalnız veb servisə gələn istifadəçi sorğularının sayı"
    ],
    "keywords": "CPU-dan başqa xərclər",
    "topic": 5,
    "difficulty": 2,
    "reference": "Mövzu 5; 7.2 Xərc; s. 22"
  },
  {
    "id": 217,
    "question": "Bir konteynerin yaddaş limiti daxilində tələbatı ödənmir, digərinin CPU kvotası tükənir. Nəticələr hansı variantda düzgün müqayisə edilir?",
    "answer": "Yaddaş limitini aşan konteynerdə proses OOM ilə öldürülə bilər, CPU kvotası tükənən isə yalnız ləngiyir (throttle)",
    "options": [
      "Yaddaş limitini aşan konteynerdə proses OOM ilə öldürülə bilər, CPU kvotası tükənən isə yalnız ləngiyir (throttle)",
      "Hər ikisində proses mütləq dərhal öldürülür",
      "Birincidə yalnız icra ləngiyir, ikincidə proses mütləq öldürülür",
      "Hər iki konteynerə avtomatik əlavə resurs verilir",
      "Hər iki konteyner avtomatik başqa hosta köçürülür"
    ],
    "keywords": "yaddaş → öldürülür, CPU → ləngiyir",
    "topic": 5,
    "difficulty": 3,
    "reference": "Mövzu 5; 3.2 Cgroups: proses nə qədər istifadə edir; s. 7"
  },
  {
    "id": 218,
    "question": "Image qurularkən bir qatda parol faylı yaradılıb, sonrakı qatda silinib. Parolun məxfiliyi haqqında hansı fikir doğrudur?",
    "answer": "Parol əvvəlki qatda qalır və image-i alan şəxs onu qatlardan oxuya bilər",
    "options": [
      "Parol əvvəlki qatda qalır və image-i alan şəxs onu qatlardan oxuya bilər",
      "Sonrakı qatda silinmə parolu image-dən tam çıxarır",
      "Parol yalnız build maşınında qalır, image qatlarına düşmür",
      "Image-i alan şəxs yalnız son qatdakı faylları oxuya bilər",
      "Parol yalnız konteynerin yazıla bilən qatında saxlanır"
    ],
    "keywords": "silmək qatdan çıxarmır",
    "topic": 5,
    "difficulty": 3,
    "reference": "Mövzu 5; 3.5 Image: qatlar və yazıla bilən qat; s. 9"
  },
  {
    "id": 219,
    "question": "Dockerfile-da COPY . . addımı RUN pip install -r requirements.txt-dən əvvəldir. Asılılıqlar siyahısı dəyişmədən yalnız kod dəyişəndə asılılıqların keşdən gəlməsi üçün hansı sıra uyğundur?",
    "answer": "Əvvəl requirements.txt-ni kopyalayıb asılılıqları quraşdırmaq, sonra qalan kodu kopyalamaq",
    "options": [
      "Əvvəl requirements.txt-ni kopyalayıb asılılıqları quraşdırmaq, sonra qalan kodu kopyalamaq",
      "Kodun kopyalanmasını əvvəldə saxlayıb asılılıqları hər dəfə yenidən qurmaq",
      "COPY . . addımını iki dəfə, həm əvvəldə, həm sonda yazmaq",
      "Asılılıqları quraşdıran RUN addımını Dockerfile-dan tam çıxarmaq",
      "Hər kod dəyişikliyində baza image-in tag-ini dəyişdirmək"
    ],
    "keywords": "asılılıq əvvəl, kod sonra",
    "topic": 5,
    "difficulty": 3,
    "reference": "Mövzu 5; 3.6 Dockerfile və build keşi; s. 10"
  },
  {
    "id": 220,
    "question": "Bazanın məlumatı hostun lokal volume-unda saxlanır. Hostun diski sıradan çıxarsa, volume niyə ayrıca backup-ı əvəz etmir?",
    "answer": "Volume eyni hostun diskində olduğundan host nasazlığında itir – ayrı yerdə backup lazımdır",
    "options": [
      "Volume eyni hostun diskində olduğundan host nasazlığında itir – ayrı yerdə backup lazımdır",
      "Volume yalnız konteynerin yaddaşında saxlanır",
      "Volume konteyner yenilənəndə həmişə silinir",
      "Volume host nasazlığında avtomatik registry-yə köçürülür",
      "Volume yalnız image-in metadata-sını saxlayır"
    ],
    "keywords": "eyni host = backup deyil",
    "topic": 5,
    "difficulty": 3,
    "reference": "Mövzu 5; 3.8 Məlumatın saxlanması: yazıla bilən qat, volume, bind mount, tmpfs; s. 13"
  },
  {
    "id": 221,
    "question": "web və db eyni istifadəçi bridge şəbəkəsindədir. Bazanı xaricə açmadan web-in ona qoşulması üçün hansı üsul uyğundur?",
    "answer": "Baza portunu hostda yayımlamamaq; web servis db-yə şəbəkə daxilində servis adı ilə qoşulur",
    "options": [
      "Baza portunu hostda yayımlamamaq; web servis db-yə şəbəkə daxilində servis adı ilə qoşulur",
      "Baza portunun IP göstərilmədən hostda yayımlanması",
      "Baza portunun yalnız internet ünvanında yayımlanması",
      "db-nin none şəbəkə rejiminə keçirilməsi",
      "web-in bazaya registry ünvanı vasitəsilə qoşulması"
    ],
    "keywords": "port açma, ad ilə qoşul",
    "topic": 5,
    "difficulty": 3,
    "reference": "Mövzu 5; 3.9 Şəbəkə: port yayımlama və konteynerlərarası əlaqə; s. 13"
  },
  {
    "id": 222,
    "question": "Compose-da baza prosesi başlayıb, amma hələ qoşulma qəbul etmir. Veb servisin başlamazdan əvvəl bazanın hazırlığını gözləməsi üçün nə lazımdır?",
    "answer": "Healthcheck (sağlamlıq yoxlaması) və depends_on-da həmin servisin sağlam olmasını gözləmə şərti",
    "options": [
      "Healthcheck (sağlamlıq yoxlaması) və depends_on-da həmin servisin sağlam olmasını gözləmə şərti",
      "Yalnız şərtsiz depends_on",
      "Bazanın portunu bütün host ünvanlarında yayımlamaq",
      "Baza image-inə latest tag-i vermək",
      "Verilənlər qovluğunu tmpfs-ə köçürmək"
    ],
    "keywords": "healthcheck + depends_on",
    "topic": 5,
    "difficulty": 3,
    "reference": "Mövzu 5; 3.10 Docker Compose: çoxkonteynerli tətbiqi bir faylda təsvir etmək; s. 16"
  },
  {
    "id": 223,
    "question": "Bütün servislər bir hostda Compose ilə işləyir və host sıradan çıxır. Compose-un hansı məhdudiyyəti burada üzə çıxır?",
    "answer": "Tək host – host sıradan çıxanda bütün servislər dayanır (çox hostlu yüksək əlçatanlıq yoxdur)",
    "options": [
      "Tək host – host sıradan çıxanda bütün servislər dayanır (çox hostlu yüksək əlçatanlıq yoxdur)",
      "Eyni hostda birdən çox konteyner işlədə bilmir",
      "Konteynerlərə volume qoşmağa icazə vermir",
      "Registry-dən image çəkilməsini qadağan edir",
      "İstifadəçi şəbəkəsi yaratmağı dəstəkləmir"
    ],
    "keywords": "tək host = tək nasazlıq nöqtəsi",
    "topic": 5,
    "difficulty": 3,
    "reference": "Mövzu 5; 3.10 Docker Compose: çoxkonteynerli tətbiqi bir faylda təsvir etmək; s. 16"
  },
  {
    "id": 224,
    "question": "Tətbiqin mövcud hostdan fərqli əməliyyat sistemi nüvəsinə ehtiyacı var. Mühazirədəki seçim meyarına görə hansı yanaşma uyğundur?",
    "answer": "Ayrıca VM (öz nüvəsi ilə) – konteynerlər host nüvəsini paylaşır",
    "options": [
      "Ayrıca VM (öz nüvəsi ilə) – konteynerlər host nüvəsini paylaşır",
      "Eyni hostda adi Linux konteyneri",
      "Yalnız fərqli image tag-i",
      "Yalnız yeni Docker volume-u",
      "Yalnız istifadəçi bridge şəbəkəsi"
    ],
    "keywords": "nüvə fərqi → VM",
    "topic": 5,
    "difficulty": 3,
    "reference": "Mövzu 5; 6.2 Seçim meyarları; s. 20"
  },
  {
    "id": 225,
    "question": "Əvvəlki image versiyasına qayıdış zamanı hansı yoxlama ayrıca vacibdir?",
    "answer": "Məlumat sxeminin və konfiqurasiyanın əvvəlki image versiyası ilə uyğunluğu",
    "options": [
      "Məlumat sxeminin və konfiqurasiyanın əvvəlki image versiyası ilə uyğunluğu",
      "Yalnız image-in registry-də yüklənmə vaxtı",
      "Yalnız əvvəlki image-in qatlarının ümumi sayı",
      "Yalnız konteynerin cari daxili IP ünvanı",
      "Yalnız Compose faylındakı servis adlarının sırası"
    ],
    "keywords": "məlumat/sxem uyğunluğu",
    "topic": 5,
    "difficulty": 3,
    "reference": "Mövzu 5; 7.4 Etibarlılıq; s. 22"
  },
  {
    "id": 226,
    "question": "Deployment obyektində spec sahəsi nəyi göstərir?",
    "answer": "Arzu olunan (istənilən) vəziyyəti",
    "options": [
      "Arzu olunan (istənilən) vəziyyəti",
      "Sistemin müşahidə etdiyi faktiki vəziyyəti",
      "Konteynerin çıxış loglarını",
      "Registry-dəki image siyahısını",
      "Node-un şəbəkə hadisələrini"
    ],
    "keywords": "spec = arzu olunan, status = faktiki",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 1.2 İmperativ və deklarativ yanaşma; s. 4"
  },
  {
    "id": 227,
    "question": "Node-da konteyneri faktiki işə salan hansı hissədir?",
    "answer": "Konteyner runtime-ı (məs. containerd), kubelet-in idarəsi ilə",
    "options": [
      "Konteyner runtime-ı (məs. containerd), kubelet-in idarəsi ilə",
      "Kubernetes DNS xidməti",
      "Deployment controller",
      "Etiket seçicisi",
      "etcd məlumat anbarı"
    ],
    "keywords": "runtime işə salır",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 1.3 Kubernetes nədir; s. 4"
  },
  {
    "id": 228,
    "question": "Uyğunlaşdırma dövrünün əsas işi nədir?",
    "answer": "Faktiki vəziyyəti arzu olunan vəziyyətlə davamlı müqayisə edib fərqi aradan qaldırmaq",
    "options": [
      "Faktiki vəziyyəti arzu olunan vəziyyətlə davamlı müqayisə edib fərqi aradan qaldırmaq",
      "Faktiki vəziyyəti arzu olunan kimi yadda saxlamaq",
      "Arzu olunan vəziyyəti yalnız ilk yaradılmada yoxlamaq",
      "Hər fərq aşkar ediləndə arzu olunan vəziyyəti silmək",
      "Faktiki vəziyyətin dəyişməsini izləmədən əmr vermək"
    ],
    "keywords": "davamlı müqayisə, fərqi düzəlt",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 2.1 Uyğunlaşdırma dövrü; s. 5"
  },
  {
    "id": 229,
    "question": "Kubernetes klasterinin iki əsas hissəsi hansılardır?",
    "answer": "Control plane və worker node-lar",
    "options": [
      "Control plane və worker node-lar",
      "Registry və image tag-ları",
      "ConfigMap və Secret anbarları",
      "DNS və klient brauzerləri",
      "Volume və konteyner logları"
    ],
    "keywords": "control plane + node",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.1 Klasterin arxitekturası; s. 7"
  },
  {
    "id": 230,
    "question": "Klasterdə API server məlumatını saxlayan açar–dəyər anbarı hansıdır?",
    "answer": "etcd",
    "options": [
      "etcd",
      "kubelet",
      "kube-proxy",
      "containerd",
      "kube-scheduler"
    ],
    "keywords": "açar-dəyər anbarı = etcd",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.1 Klasterin arxitekturası; s. 7"
  },
  {
    "id": 231,
    "question": "Hələ node-a təyin olunmamış Pod üçün node-u hansı komponent seçir?",
    "answer": "kube-scheduler",
    "options": [
      "kube-scheduler",
      "kubelet",
      "kube-proxy",
      "etcd",
      "Konteyner runtime-ı"
    ],
    "keywords": "node seçən = scheduler",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.1 Klasterin arxitekturası; s. 7"
  },
  {
    "id": 232,
    "question": "Node-un agenti kimi Pod-ları işə salan və statusunu bildirən komponent hansıdır?",
    "answer": "kubelet",
    "options": [
      "kubelet",
      "etcd",
      "Deployment controller",
      "Klaster DNS-i",
      "cloud-controller-manager"
    ],
    "keywords": "node agenti = kubelet",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.1 Klasterin arxitekturası; s. 7"
  },
  {
    "id": 233,
    "question": "Kubernetes-də yaradılıb idarə oluna bilən ən kiçik yerləşdirmə vahidi hansıdır?",
    "answer": "Pod",
    "options": [
      "Pod",
      "Deployment",
      "ReplicaSet",
      "Service",
      "Worker node"
    ],
    "keywords": "ən kiçik vahid = Pod",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.3 Pod; s. 9"
  },
  {
    "id": 234,
    "question": "ReplicaSet-in əsas vəzifəsi nədir?",
    "answer": "Pod replikalarının arzu olunan sayını saxlamaq",
    "options": [
      "Pod replikalarının arzu olunan sayını saxlamaq",
      "Xarici yük balanslaşdırıcısı yaratmaq",
      "Konteyner image-ini registry-yə yükləmək",
      "Secret dəyərlərini şifrələmək",
      "Node-da konteyner prosesini başlatmaq"
    ],
    "keywords": "replika sayı",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.4 Deployment, ReplicaSet və etiketlər; s. 10"
  },
  {
    "id": 235,
    "question": "Deployment, ReplicaSet və Pod arasında idarəetmə zənciri hansı ardıcıllıqdadır?",
    "answer": "Deployment → ReplicaSet → Pod",
    "options": [
      "Deployment → ReplicaSet → Pod",
      "Pod → ReplicaSet → Deployment",
      "ReplicaSet → Deployment → Pod",
      "Deployment → Pod → ReplicaSet",
      "Pod → Deployment → ReplicaSet"
    ],
    "keywords": "yuxarıdan aşağı",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.4 Deployment, ReplicaSet və etiketlər; s. 10"
  },
  {
    "id": 236,
    "question": "Kubernetes etiketi (label) nədir?",
    "answer": "Obyektlərə qoşulan açar–dəyər etiketi (qruplaşdırmaq və seçmək üçün)",
    "options": [
      "Obyektlərə qoşulan açar–dəyər etiketi (qruplaşdırmaq və seçmək üçün)",
      "Pod üçün ayrılan CPU həddi",
      "Konteynerin dəyişməz IP ünvanı",
      "etcd-nin ehtiyat nüsxəsi",
      "Registry-yə giriş üçün məxfi açar"
    ],
    "keywords": "açar–dəyər, seçmək",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.4 Deployment, ReplicaSet və etiketlər; s. 10"
  },
  {
    "id": 237,
    "question": "Service Pod qrupuna hansı sabit giriş vasitələrini verir?",
    "answer": "Sabit virtual IP/DNS adı və port",
    "options": [
      "Sabit virtual IP/DNS adı və port",
      "Image tag-ı və digest",
      "CPU request-i və yaddaş limiti",
      "Pod adı və fiziki host adı",
      "Secret açarı və registry token-i"
    ],
    "keywords": "sabit IP/DNS + port",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.8 Service: dəyişən Pod-lar üçün sabit giriş; s. 13"
  },
  {
    "id": 238,
    "question": "Hər node-un IP-sində sabit port açan Service növü hansıdır?",
    "answer": "NodePort",
    "options": [
      "NodePort",
      "ClusterIP",
      "LoadBalancer",
      "ReplicaSet",
      "Deployment"
    ],
    "keywords": "node-un IP-sində port = NodePort",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.8 Service: dəyişən Pod-lar üçün sabit giriş; s. 14"
  },
  {
    "id": 239,
    "question": "Gizli olmayan konfiqurasiyanı saxlamaq üçün hansı obyekt nəzərdə tutulub?",
    "answer": "ConfigMap",
    "options": [
      "ConfigMap",
      "Secret",
      "ReplicaSet",
      "EndpointSlice",
      "Service"
    ],
    "keywords": "gizli olmayan = ConfigMap",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.9 ConfigMap və Secret; s. 15"
  },
  {
    "id": 240,
    "question": "Parol, token və açar kimi kiçik həssas məlumat üçün hansı obyekt nəzərdə tutulub?",
    "answer": "Secret",
    "options": [
      "Secret",
      "ConfigMap",
      "Deployment",
      "Service",
      "EndpointSlice"
    ],
    "keywords": "həssas = Secret",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.9 ConfigMap və Secret; s. 15"
  },
  {
    "id": 241,
    "question": "Secret-in data dəyərlərində base64 istifadəsi nə deməkdir?",
    "answer": "Yalnız kodlaşdırmadır, şifrələmə deyil",
    "options": [
      "Yalnız kodlaşdırmadır, şifrələmə deyil",
      "Açarla şifrələmə",
      "İcazə yoxlaması",
      "Pod-ların təcridi",
      "Məlumatın ehtiyat nüsxəsi"
    ],
    "keywords": "base64 ≠ şifrələmə",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.9 ConfigMap və Secret; s. 15"
  },
  {
    "id": 242,
    "question": "CPU limiti işləmə vaxtında necə tətbiq olunur?",
    "answer": "Prosesi ləngitməklə (throttling) – CPU limiti aşılanda proses öldürülmür, ləngidilir",
    "options": [
      "Prosesi ləngitməklə (throttling) – CPU limiti aşılanda proses öldürülmür, ləngidilir",
      "Prosesi hər dəfə dərhal öldürməklə",
      "Pod-u başqa node-a köçürməklə",
      "Yeni ReplicaSet yaratmaqla",
      "Service IP-sini dəyişməklə"
    ],
    "keywords": "CPU limiti → ləngitmə",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.11 Requests və limits; s. 16"
  },
  {
    "id": 243,
    "question": "kind alətində Kubernetes node-ları necə işlədilir?",
    "answer": "Hər node ayrıca Docker konteyneri kimi",
    "options": [
      "Hər node ayrıca Docker konteyneri kimi",
      "Hər biri ayrıca fiziki server kimi",
      "Yalnız brauzer prosesləri kimi",
      "etcd daxilində məlumat qeydi kimi",
      "Xarici yük balanslaşdırıcıları kimi"
    ],
    "keywords": "node = konteyner",
    "topic": 6,
    "difficulty": 1,
    "reference": "Mövzu 6; 3.7 Node itəndə nə baş verir; s. 13"
  },
  {
    "id": 244,
    "question": "Bir hostda Compose ilə işləyən sistemdə host sönəndə restart siyasəti niyə konteynerləri başqa hostda bərpa etmir?",
    "answer": "Restart siyasəti yalnız həmin hostun Docker daemon-u tərəfindən işləyir – host itəndə daemon da yoxdur",
    "options": [
      "Restart siyasəti yalnız həmin hostun Docker daemon-u tərəfindən işləyir – host itəndə daemon da yoxdur",
      "Restart siyasəti konteyneri yalnız əl ilə başladır",
      "Restart siyasəti yalnız düzgün dayanan prosesi bərpa edir",
      "Başqa hosta bərpa yalnız eyni image tag-ını tələb edir",
      "Compose-da host itkisi konteynerin dayanması sayılmır"
    ],
    "keywords": "tək host daemon-u",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 1.1 Compose-un sərhədi; s. 3"
  },
  {
    "id": 245,
    "question": "Kubernetes namespace-i ilə Linux namespace-i arasındakı fərq hansı variantda düzgün göstərilib?",
    "answer": "Kubernetes namespace-i obyektlərin məntiqi ad sahəsidir, Linux namespace-i isə nüvənin təcrid mexanizmidir",
    "options": [
      "Kubernetes namespace-i obyektlərin məntiqi ad sahəsidir, Linux namespace-i isə nüvənin təcrid mexanizmidir",
      "Birincisi nüvənin təcrid mexanizmidir, ikincisi resursların ad sahəsidir",
      "Hər ikisi yalnız konteynerin CPU limitini müəyyən edir",
      "Hər ikisi ayrıca fiziki host yaradaraq təcrid təmin edir",
      "Birincisi image registry-sidir, ikincisi Pod üçün DNS adıdır"
    ],
    "keywords": "K8s = ad sahəsi, Linux = nüvə təcridi",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 2.3 Əsas terminlər; s. 7"
  },
  {
    "id": 246,
    "question": "Requests və limits parametrlərinin rolları hansı variantda düzgün müqayisə olunur?",
    "answer": "Requests yerləşdirmə (scheduling) üçün zəmanətli minimumdur, limits işləmə vaxtındakı yuxarı haddir",
    "options": [
      "Requests yerləşdirmə (scheduling) üçün zəmanətli minimumdur, limits işləmə vaxtındakı yuxarı haddir",
      "Requests işləmə vaxtındakı hədd, limits yerləşdirmə üçündür",
      "Requests yalnız yaddaşa, limits yalnız CPU-ya tətbiq olunur",
      "Requests image ölçüsünü, limits replika sayını müəyyən edir",
      "Requests DNS seçimini, limits Service növünü müəyyən edir"
    ],
    "keywords": "requests → scheduling, limits → icra",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 3.11 Requests və limits; s. 17"
  },
  {
    "id": 247,
    "question": "Readiness probe uğursuz olduqda konteynerə və Service trafikinə nə olur?",
    "answer": "Pod Service trafikindən çıxarılır, konteyner yenidən başladılmır",
    "options": [
      "Pod Service trafikindən çıxarılır, konteyner yenidən başladılmır",
      "Pod trafikdən çıxarılır, konteyner mütləq yenidən başladılır",
      "Pod trafik alır, yalnız onun CPU limiti azaldılır",
      "Pod başqa node-a köçürülür və trafik almağa davam edir",
      "Service silinir, onun seçdiyi bütün konteynerlər dayandırılır"
    ],
    "keywords": "trafikdən çıx, restart yox",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 3.10 Probe-lar: işləyir, hazırdır, başlayıb; s. 16"
  },
  {
    "id": 248,
    "question": "Uzun başlanğıclı tətbiq üçün startup probe seçilir. Liveness intervalını çox artırmaqla müqayisədə bu seçimin faydası nədir?",
    "answer": "Başlanğıca vaxt verir, başlanğıcdan sonra liveness normal intervalla işləyir (gec aşkarlama yaranmır)",
    "options": [
      "Başlanğıca vaxt verir, başlanğıcdan sonra liveness normal intervalla işləyir (gec aşkarlama yaranmır)",
      "Başlanğıca vaxt verir, iş zamanı liveness artıq işləmir",
      "Başlanğıca vaxt verir, readiness yoxlaması ləğv olunur",
      "Başlanğıc bitəndə konteyneri məcburi yenidən başladır",
      "Başlanğıc bitəndə bütün sağlamlıq yoxlamalarını dayandırır"
    ],
    "keywords": "başlanğıc vaxtı + normal liveness",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 3.10 Probe-lar: işləyir, hazırdır, başlayıb; s. 16"
  },
  {
    "id": 249,
    "question": "Kubelet konteyneri eyni Pod daxilində yenidən başladanda hansı məlumat eyni qalır?",
    "answer": "Pod-un volume-larındakı məlumat və Pod-un özü (IP, ad) qalır; konteynerin yazıla bilən qatı və proses yaddaşı itir",
    "options": [
      "Pod-un volume-larındakı məlumat və Pod-un özü (IP, ad) qalır; konteynerin yazıla bilən qatı və proses yaddaşı itir",
      "Konteynerin yazıla bilən qatının məzmunu",
      "Konteyner prosesinin yaddaşdakı vəziyyəti",
      "Əvvəlki prosesin tamamlanmamış hesablamaları",
      "Konteynerin əvvəlki proses identifikatoru"
    ],
    "keywords": "volume qalır, qat/yaddaş itir",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 3.6 Konteynerin yenidən başladılması və Pod-un əvəz olunması; s. 12"
  },
  {
    "id": 250,
    "question": "Pod-un həyatı boyu node-a təyin olunması haqqında hansı fikir düzgündür?",
    "answer": "Pod bir dəfə node-a təyin olunur və köçürülmür; node itəndə yeni Pod yaradılır",
    "options": [
      "Pod bir dəfə node-a təyin olunur və köçürülmür; node itəndə yeni Pod yaradılır",
      "Hər konteyner restartında eyni Pod yenidən təyin olunur",
      "Replika sayı dəyişəndə eyni Pod başqa node-a köçürülür",
      "Node itəndə eyni Pod yeni node-da yaddaşı ilə davam edir",
      "Service IP-si dəyişəndə eyni Pod başqa node-a təyin olunur"
    ],
    "keywords": "Pod köçmür, yenisi yaranır",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 3.3 Pod; s. 10"
  },
  {
    "id": 251,
    "question": "Veb tətbiqi ilə verilənlər bazasını ayrı Pod-larda yerləşdirmək niyə daha uyğundur?",
    "answer": "Fərqli yenilənmə və miqyaslama tələbləri var; baza davamlı saxlama ayrıca tələb edir",
    "options": [
      "Fərqli yenilənmə və miqyaslama tələbləri var; baza davamlı saxlama ayrıca tələb edir",
      "Veb və baza həmişə eyni sayda replika ilə işləməlidir",
      "Veb və baza həmişə eyni vaxtda yenilənməlidir",
      "Fərqli Pod-lar avtomatik eyni saxlama tələbini yaradır",
      "Ayrı Pod seçimi bazanın davamlı saxlanmasını əvəz edir"
    ],
    "keywords": "müstəqil idarə və miqyas",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 3.3 Pod; s. 10"
  },
  {
    "id": 252,
    "question": "Deployment üçün kubectl rollout undo əmri nəyi əvvəlki vəziyyətə qaytarır?",
    "answer": "Deployment-in Pod şablonunu əvvəlki versiyaya (revision)",
    "options": [
      "Deployment-in Pod şablonunu əvvəlki versiyaya (revision)",
      "Verilənlər bazasının sxemini",
      "etcd-nin bütün ehtiyat nüsxəsini",
      "Registry-dəki image məzmununu",
      "Worker node-ların əməliyyat sistemini"
    ],
    "keywords": "şablon geri, data yox",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 3.5 Rolling update və geri qaytarma; s. 11"
  },
  {
    "id": 253,
    "question": "Rolling update zamanı yeni və köhnə versiyaların uyğunluğu niyə vacibdir?",
    "answer": "Yeniləmə zamanı köhnə və yeni versiya Pod-ları eyni anda işləyir və trafik alır, ona görə də uyğun olmalıdırlar",
    "options": [
      "Yeniləmə zamanı köhnə və yeni versiya Pod-ları eyni anda işləyir və trafik alır, ona görə də uyğun olmalıdırlar",
      "Yeniləmə zamanı trafik yalnız yeni versiyaya gedir",
      "Kubernetes bazanın sxemini hər yeni Pod üçün ayrıca dəyişir",
      "Köhnə versiyanın konteynerləri yeni image-dən işə salınır",
      "Service yeniləmə bitənədək bütün sorğuları bazada saxlayır"
    ],
    "keywords": "iki versiya eyni anda",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 3.5 Rolling update və geri qaytarma; s. 11"
  },
  {
    "id": 254,
    "question": "ImagePullBackOff ilə CrashLoopBackOff arasındakı fərq hansı variantda düzgündür?",
    "answer": "ImagePullBackOff-da image çəkilə bilmir, CrashLoopBackOff-da konteyner təkrar çökür",
    "options": [
      "ImagePullBackOff-da image çəkilə bilmir, CrashLoopBackOff-da konteyner təkrar çökür",
      "Birincidə konteyner təkrar çökür, ikincidə image çəkilə bilmir",
      "Birincidə Service IP-si dəyişir, ikincidə DNS adı silinir",
      "Birincidə replika sayı artır, ikincidə yaddaş request-i azalır",
      "Birincidə rollout tamamlanır, ikincidə əvvəlki şablona qayıdılır"
    ],
    "keywords": "pull = image, crash = proses",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 3.2 kubectl apply-dan işləyən Pod-a: məlumat axını; s. 9"
  },
  {
    "id": 255,
    "question": "Requests dəyərlərinin ehtiyacdan çox yüksək yazılması xərcə necə təsir edə bilər?",
    "answer": "Scheduler yüksək request-ə görə az Pod yerləşdirir, daha çox node lazım olur, xərc artır",
    "options": [
      "Scheduler yüksək request-ə görə az Pod yerləşdirir, daha çox node lazım olur, xərc artır",
      "Faktiki istifadə azdırsa yerləşdirməyə təsir etmir",
      "Yüksək request həmişə daha az node tələb edir",
      "Request dəyəri yalnız işləmə vaxtındakı həddi dəyişir",
      "Yüksək request ehtiyat tutuma ehtiyacı aradan qaldırır"
    ],
    "keywords": "çox request → çox node → xərc",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 7.2 Xərc; s. 23"
  },
  {
    "id": 256,
    "question": "API klaster daxilindəki veb Pod-larından çağırılacaq və xaricə açılmamalıdır. Xarici balanslaşdırıcı və node portu açmadan hansı Service növü uyğundur?",
    "answer": "ClusterIP",
    "options": [
      "ClusterIP",
      "NodePort",
      "LoadBalancer",
      "ReplicaSet",
      "Deployment"
    ],
    "keywords": "yalnız klaster daxili = ClusterIP",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 3.8 Service: dəyişən Pod-lar üçün sabit giriş; s. 14"
  },
  {
    "id": 257,
    "question": "ConfigMap mühit dəyişəni kimi Pod-a verilib. ConfigMap-də dəyər dəyişəndə mövcud Pod-da nə baş verir?",
    "answer": "Mövcud Pod-da mühit dəyişəni yenilənmir – dəyər Pod yenidən yaradılanadək köhnə qalır",
    "options": [
      "Mövcud Pod-da mühit dəyişəni yenilənmir – dəyər Pod yenidən yaradılanadək köhnə qalır",
      "Deployment dərhal yeni ReplicaSet yaradır",
      "Service yeni dəyəri konteynerin yaddaşına yazır",
      "Scheduler yeni dəyər üçün Pod-u başqa node-a köçürür",
      "Runtime image-i yeni dəyərlə avtomatik yenidən qurur"
    ],
    "keywords": "env yenilənmir",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 3.9 ConfigMap və Secret; s. 15"
  },
  {
    "id": 258,
    "question": "Namespace-də Pod yaratmaq icazəsi Secret-in məzmununa necə dolayı çıxış verə bilər?",
    "answer": "Pod yaradan şəxs Secret-i Pod-a (env/volume) qoşub məzmununu oxuya bilər",
    "options": [
      "Pod yaradan şəxs Secret-i Pod-a (env/volume) qoşub məzmununu oxuya bilər",
      "Pod yaratmaq icazəsini birbaşa Secret oxuma icazəsi saymaqla",
      "Pod-un adını Secret-in adı ilə eyniləşdirməklə",
      "Secret başqa namespace-də olsa da onu sərbəst qoşmaqla",
      "Secret-in yalnız data sahəsinin adlarını görməklə"
    ],
    "keywords": "Pod ilə Secret oxunur",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 3.9 ConfigMap və Secret; s. 15"
  },
  {
    "id": 259,
    "question": "İdarə olunan Kubernetes-də control plane-i provayder işlədirsə, hansı iş müştərinin məsuliyyətində qalır?",
    "answer": "Öz iş yüklərinin konfiqurasiyası (manifest, request/limits, probe, giriş icazələri) və tətbiq təhlükəsizliyi",
    "options": [
      "Öz iş yüklərinin konfiqurasiyası (manifest, request/limits, probe, giriş icazələri) və tətbiq təhlükəsizliyi",
      "İdarə olunan API server-in proqram yeniləmələri",
      "İdarə olunan control plane-in iş yükü kimi sazlanması",
      "Provayderin idarə etdiyi etcd xidmətinin işlədilməsi",
      "İdarə olunan control plane-in avadanlığının dəyişdirilməsi"
    ],
    "keywords": "iş yükü müştəridə",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 6.2 Seçim meyarları; s. 23"
  },
  {
    "id": 260,
    "question": "Kubernetes API-sinin provayderlər arasında oxşar olması niyə tam daşına bilmə zəmanəti deyil?",
    "answer": "API oxşar olsa da asılılıqlar (yük balanslaşdırıcı, saxlama, IAM, şəbəkə) provayderə xasdır",
    "options": [
      "API oxşar olsa da asılılıqlar (yük balanslaşdırıcı, saxlama, IAM, şəbəkə) provayderə xasdır",
      "Eyni manifest hər provayderdə eyni xərcə zəmanət verir",
      "Standart API tətbiqin bütün asılılıqlarını da köçürür",
      "Control plane-in provayderdə olması inteqrasiyaları eyniləşdirir",
      "OCI image uyğunluğu bütün icazə sazlamalarını daşıyır"
    ],
    "keywords": "API oxşar, inteqrasiyalar fərqli",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 6.2 Seçim meyarları; s. 22"
  },
  {
    "id": 261,
    "question": "Image ölçüsünün böyüməsi yeni Pod-un hazırlanmasına necə təsir edə bilər?",
    "answer": "Böyük image uzun çəkilir, yeni Pod-un hazırlanması və bərpa yavaşlayır",
    "options": [
      "Böyük image uzun çəkilir, yeni Pod-un hazırlanması və bərpa yavaşlayır",
      "Image-in çəkilməsini və bərpanı həmişə sürətləndirir",
      "Image ölçüsü yalnız hazır Pod-un DNS adına təsir edir",
      "Image ölçüsü yalnız Pod-un replika sayını dəyişir",
      "Image ölçüsü çəkmə vaxtına və bərpaya təsir etmir"
    ],
    "keywords": "böyük image → yavaş başlama",
    "topic": 6,
    "difficulty": 2,
    "reference": "Mövzu 6; 7.3 Performans; s. 23"
  },
  {
    "id": 262,
    "question": "Deployment-də yalnız replika sayı artırılır, Pod şablonu dəyişmir. Hansı nəticə gözlənilir?",
    "answer": "Mövcud ReplicaSet miqyaslanır, yalnız yeni Pod-lar əlavə olunur; yeni rollout başlamır",
    "options": [
      "Mövcud ReplicaSet miqyaslanır, yalnız yeni Pod-lar əlavə olunur; yeni rollout başlamır",
      "Yeni ReplicaSet yaranır və rollout başlayır",
      "Köhnə ReplicaSet silinir, eyni Pod-lar ona yenidən bağlanır",
      "Pod şablonu əvvəlki versiyaya avtomatik qaytarılır",
      "Replika sayı yalnız Service-in endpoint sayına təsir edir"
    ],
    "keywords": "şablon eyni → yeni ReplicaSet yox",
    "topic": 6,
    "difficulty": 3,
    "reference": "Mövzu 6; 3.5 Rolling update və geri qaytarma; s. 11"
  },
  {
    "id": 263,
    "question": "Control plane əlçatmazdır, amma node və kubelet işləyir. Restart siyasəti Always olan mövcud Pod-da konteyner çökür. Nə mümkündür?",
    "answer": "Kubelet restart siyasətinə əsasən konteyneri node-da yenidən başlada bilər (control plane lazım deyil)",
    "options": [
      "Kubelet restart siyasətinə əsasən konteyneri node-da yenidən başlada bilər (control plane lazım deyil)",
      "Scheduler həmin Pod-u başqa node-a köçürə bilər",
      "ReplicaSet controller dərhal yeni Pod yarada bilər",
      "Kubelet yalnız control plane qayıtdıqdan sonra restart edə bilər",
      "Konteyner restartı mütləq yeni ReplicaSet yaranmasını tələb edir"
    ],
    "keywords": "kubelet yerli restart edir",
    "topic": 6,
    "difficulty": 3,
    "reference": "Mövzu 6; 3.6 Konteynerin yenidən başladılması və Pod-un əvəz olunması; s. 12"
  },
  {
    "id": 264,
    "question": "Tətbiqin üç replikası eyni worker node-da işləyir. Yalnız replikaların sayına əsaslanaraq bir node itkisinə davamlılıq barədə nə demək olar?",
    "answer": "Üç replika tək node-da olduğu üçün node itkisinə davamlılıq yoxdur, hamısı itir",
    "options": [
      "Üç replika tək node-da olduğu üçün node itkisinə davamlılıq yoxdur, hamısı itir",
      "Üç replika həmişə üç ayrı fiziki host deməkdir",
      "Service replikaların yaddaşını başqa node-da saxlayır",
      "ReplicaSet Pod-ları node itkisi anında eyni IP ilə köçürür",
      "Replika sayı control plane-in davamlılığına zəmanət verir"
    ],
    "keywords": "eyni node = zəmanət yox",
    "topic": 6,
    "difficulty": 3,
    "reference": "Mövzu 6; 3.7 Node itəndə nə baş verir; s. 13"
  },
  {
    "id": 265,
    "question": "API-nin liveness probe-u ortaq verilənlər bazasını yoxlayır. Baza yavaşlayanda hansı risk yaranır?",
    "answer": "Ortaq baza yavaşlayanda liveness uğursuz olur, bütün API Pod-ları restart edilir və vəziyyət pisləşir (kaskad nasazlıq)",
    "options": [
      "Ortaq baza yavaşlayanda liveness uğursuz olur, bütün API Pod-ları restart edilir və vəziyyət pisləşir (kaskad nasazlıq)",
      "Liveness yalnız trafiki kəsir, konteynerləri restart etmir",
      "Bütün API Pod-larının CPU requests-i avtomatik artır",
      "Kubelet verilənlər bazasını başqa node-a köçürür",
      "Secret yenilənərək verilənlər bazasının yükünü azaldır"
    ],
    "keywords": "liveness ortaq asılılığı yoxlamamalı",
    "topic": 6,
    "difficulty": 3,
    "reference": "Mövzu 6; 3.10 Probe-lar: işləyir, hazırdır, başlayıb; s. 16"
  },
  {
    "id": 266,
    "question": "ConfigMap adi volume faylı kimi qoşulub, subPath istifadə olunmur. Fayl yenilənib, amma tətbiq onu yalnız başlanğıcda oxuyur. Tətbiq niyə köhnə dəyəri istifadə edir?",
    "answer": "Tətbiq yalnız başlanğıcda oxuyur – fayl yenilənsə də proses yeni dəyəri yenidən oxumur (restart/yenidən oxuma lazımdır)",
    "options": [
      "Tətbiq yalnız başlanğıcda oxuyur – fayl yenilənsə də proses yeni dəyəri yenidən oxumur (restart/yenidən oxuma lazımdır)",
      "Adi volume faylı da subPath kimi heç yenilənmir",
      "Hər fayl dəyişikliyi tətbiq prosesini avtomatik başladır",
      "ConfigMap-in dəyişməsi həmişə yeni rollout yaradır",
      "Fayl yenilənməsi prosesin yaddaşını avtomatik yeniləyir"
    ],
    "keywords": "proses yalnız başlanğıcda oxuyur",
    "topic": 6,
    "difficulty": 3,
    "reference": "Mövzu 6; 3.9 ConfigMap və Secret; s. 15"
  },
  {
    "id": 267,
    "question": "Komanda requests və limits dəyərlərini təsadüfi seçib. Real yükə uyğun dəyərlər müəyyən etmək üçün hansı yanaşma daha əsaslıdır?",
    "answer": "Real yük altında ölçmə (monitorinq/profilləmə) əsasında dəyər seçmək",
    "options": [
      "Real yük altında ölçmə (monitorinq/profilləmə) əsasında dəyər seçmək",
      "Bütün tətbiqlərə eyni dəyərləri verib onları dəyişməz saxlamaq",
      "Yalnız image ölçüsünə baxıb CPU və yaddaş dəyərlərini seçmək",
      "Yalnız replika sayına baxıb hər konteynerin həddini seçmək",
      "Yalnız hazır Pod sayına baxıb hər request-i sıfırlaşdırmaq"
    ],
    "keywords": "ölçməyə əsaslanmaq",
    "topic": 6,
    "difficulty": 3,
    "reference": "Mövzu 6; 3.11 Requests və limits; s. 17"
  },
  {
    "id": 268,
    "question": "Node-larda faktiki CPU istifadəsi azdır, amma yeni Pod-un yazılmış requests-i qalan ayrılabilən tutuma sığmır. Resurs baxımından hansı nəticə gözlənilir?",
    "answer": "Scheduler yalnız requests-ə baxır; yer yoxdursa Pod Pending qalır",
    "options": [
      "Scheduler yalnız requests-ə baxır; yer yoxdursa Pod Pending qalır",
      "Az faktiki istifadə requests-in nəzərə alınmamasına səbəb olur",
      "Scheduler yerləşdirmə üçün yalnız CPU limitinə baxır",
      "Kubelet Pod-un requests-ini avtomatik azaldaraq yer açır",
      "Service Pod-u öz IP-sində konteyner kimi işə salır"
    ],
    "keywords": "requests → Pending",
    "topic": 6,
    "difficulty": 3,
    "reference": "Mövzu 6; 3.11 Requests və limits; s. 16"
  },
  {
    "id": 269,
    "question": "Klasterdə LoadBalancer Service yaradılıb, amma xarici balanslaşdırıcı üçün provayder inteqrasiyası və ayrıca komponent yoxdur. Hansı nəticə gözlənilir?",
    "answer": "Provayder inteqrasiyası olmadan xarici IP verilmir, Service xarici IP gözləyir (pending)",
    "options": [
      "Provayder inteqrasiyası olmadan xarici IP verilmir, Service xarici IP gözləyir (pending)",
      "Xarici IP hazır endpoint-lərin IP-sindən avtomatik seçilər",
      "Xarici IP provayder inteqrasiyası olmadan da zəmanətlidir",
      "Service-in ClusterIP-si avtomatik xarici IP-yə çevrilər",
      "Hazır Pod sayı artdıqda xarici IP mütləq ayrılar"
    ],
    "keywords": "inteqrasiya yox → pending",
    "topic": 6,
    "difficulty": 3,
    "reference": "Mövzu 6; 3.8 Service: dəyişən Pod-lar üçün sabit giriş; s. 14"
  },
  {
    "id": 270,
    "question": "Bir neçə servis bir hostda rahat işləyir və komandanın Kubernetes bacarığı yoxdur. Kubernetes-ə keçid barədə hansı yanaşma daha əsaslıdır?",
    "answer": "Keçid iş yükü tələbi və komanda imkanına görə qiymətləndirilməlidir; kiçik sistem və bacarıq yoxdursa Kubernetes məcburi deyil",
    "options": [
      "Keçid iş yükü tələbi və komanda imkanına görə qiymətləndirilməlidir; kiçik sistem və bacarıq yoxdursa Kubernetes məcburi deyil",
      "Servis sayı az olsa da, Kubernetes-i məcburi seçmək",
      "Host sayı az olduqda öz control plane-ini mütləq qurmaq",
      "Komanda bacarığını yalnız trafik yüksək olanda nəzərə almaq",
      "Kubernetes-in hər iş yükü üçün əməliyyat yükünü azaltdığını qəbul etmək"
    ],
    "keywords": "ehtiyac + bacarıq",
    "topic": 6,
    "difficulty": 3,
    "reference": "Mövzu 6; 6.2 Seçim meyarları; s. 22"
  },
  {
    "id": 271,
    "question": "Buludda virtual şəbəkə nədir?",
    "answer": "Provayderin fiziki şəbəkəsi üzərində müştəriyə ayrılmış, məntiqi təcrid edilmiş proqram təyinatlı şəbəkə",
    "options": [
      "Provayderin fiziki şəbəkəsi üzərində müştəriyə ayrılmış, məntiqi təcrid edilmiş proqram təyinatlı şəbəkə",
      "Yalnız fiziki kommutatorlardan ibarət müştəri avadanlığı",
      "Bütün müştərilərin eyni qaydalarla istifadə etdiyi açıq şəbəkə",
      "Təkcə domen adlarının saxlandığı xidmət",
      "Yalnız konteyner image-lərinin yerləşdiyi yaddaş"
    ],
    "keywords": "məntiqi, təcrid, müştəriyə ayrılmış",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 1.2 Fiziki şəbəkədən virtual şəbəkəyə; s. 4"
  },
  {
    "id": 272,
    "question": "Virtual şəbəkədə ünvan planının hazırlanması kimin məsuliyyətidir?",
    "answer": "Müştərinin",
    "options": [
      "Müştərinin",
      "Fiziki şəbəkə avadanlığını istehsal edənin",
      "Domen qeydiyyatçısının",
      "İnternet istifadəçisinin",
      "Yalnız bulud provayderinin"
    ],
    "keywords": "ünvan planı = müştəri",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 1.2 Fiziki şəbəkədən virtual şəbəkəyə; s. 4"
  },
  {
    "id": 273,
    "question": "Subnet virtual şəbəkəyə münasibətdə nədir?",
    "answer": "Virtual şəbəkənin ünvan aralığının bir hissəsi (alt şəbəkə/seqment)",
    "options": [
      "Virtual şəbəkənin ünvan aralığının bir hissəsi (alt şəbəkə/seqment)",
      "Virtual şəbəkənin internet çıxış şlüzü",
      "İki virtual şəbəkəni birləşdirən tunel",
      "Virtual şəbəkənin trafik süzgəci",
      "Virtual şəbəkədə adları həll edən xidmət"
    ],
    "keywords": "ünvan aralığının hissəsi",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 2.2 Anlayışlar zənciri və provayderlər arasında əhatə fərqi; s. 6"
  },
  {
    "id": 274,
    "question": "Marşrut cədvəlinin əsas vəzifəsi nədir?",
    "answer": "Paketlərin təyinat ünvanına görə hara yönəldiləcəyini təyin etmək",
    "options": [
      "Paketlərin təyinat ünvanına görə hara yönəldiləcəyini təyin etmək",
      "İstifadəçinin parolunu yoxlamaq",
      "HTTP sorğusunu şifrələmək",
      "Domen adını qeydiyyatdan keçirmək",
      "Tətbiqin sağlamlığını dövri yoxlamaq"
    ],
    "keywords": "paket hara getsin",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 2.2 Anlayışlar zənciri və provayderlər arasında əhatə fərqi; s. 6"
  },
  {
    "id": 275,
    "question": "Paketin L3 başlığında hansı məlumat yerləşir?",
    "answer": "Mənbə və təyinat IP ünvanları",
    "options": [
      "Mənbə və təyinat IP ünvanları",
      "Mənbə və təyinat TCP portları",
      "HTTP sorğusunun URL yolu",
      "HTTP host adı və başlıqlar",
      "HTTP sorğusunun metodu"
    ],
    "keywords": "L3 = IP",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 2.1 Paketin üç zərfi: L3, L4 və L7; s. 5"
  },
  {
    "id": 276,
    "question": "TCP başlığında mənbə və təyinat portları hansı qata aiddir?",
    "answer": "L4",
    "options": [
      "L4",
      "L3",
      "L7",
      "L2",
      "L1"
    ],
    "keywords": "port = L4",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 2.1 Paketin üç zərfi: L3, L4 və L7; s. 5"
  },
  {
    "id": 277,
    "question": "AWS-də bir subnet-in əlçatanlıq zonası ilə əlaqəsi necədir?",
    "answer": "Subnet yalnız bir əlçatanlıq zonasında yerləşir",
    "options": [
      "Subnet yalnız bir əlçatanlıq zonasında yerləşir",
      "Subnet bütün regionları əhatə edir",
      "Subnet mütləq iki regionda yerləşir",
      "Subnet-in əhatəsi həmişə qlobaldır",
      "Subnet regionun bütün zonalarını əhatə edir"
    ],
    "keywords": "subnet = bir AZ",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 2.2 Anlayışlar zənciri və provayderlər arasında əhatə fərqi; s. 6"
  },
  {
    "id": 278,
    "question": "Provayder subnet-də bəzi IP ünvanlarını nə üçün ehtiyatda saxlayır?",
    "answer": "Provayder xidmətləri üçün (şəbəkə ünvanı, şlüz, DNS və s.) bir neçə ünvanı ehtiyatda saxlayır",
    "options": [
      "Provayder xidmətləri üçün (şəbəkə ünvanı, şlüz, DNS və s.) bir neçə ünvanı ehtiyatda saxlayır",
      "Hər gələcək müştəri VM-i üçün əvvəlcədən",
      "Yalnız public IP-si olan hədəflər üçün",
      "Hər yeni TCP bağlantısına ayrıca ünvan vermək üçün",
      "Yalnız ofisin VPN istifadəçiləri üçün"
    ],
    "keywords": "şlüz, DNS, xidmət ünvanları",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 3.1 Ünvan planı: CIDR, xüsusi diapazonlar və ehtiyat ünvanlar; s. 7"
  },
  {
    "id": 279,
    "question": "AWS-də subnet-in public sayılması üçün marşrut cədvəlində nəyə marşrut olmalıdır?",
    "answer": "İnternet şlüzünə (internet gateway)",
    "options": [
      "İnternet şlüzünə (internet gateway)",
      "Yalnız NAT şlüzünə",
      "Yalnız private DNS zonasına",
      "Yalnız verilənlər bazasına",
      "Yalnız VPN şlüzünə"
    ],
    "keywords": "public = internet şlüzünə marşrut",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 3.3 Public və private: provayderə görə nə deməkdir; s. 8"
  },
  {
    "id": 280,
    "question": "NAT paketin hansı məlumatını dəyişir?",
    "answer": "Paketin mənbə (və ya təyinat) IP ünvanını və portunu",
    "options": [
      "Paketin mənbə (və ya təyinat) IP ünvanını və portunu",
      "HTTP sorğusunun URL yolunu",
      "TLS ilə şifrələnmiş sorğunun məzmununu",
      "Tətbiq istifadəçisinin giriş hüquqlarını",
      "DNS cavabının keş müddətini"
    ],
    "keywords": "IP/port dəyişir",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 3.4 NAT: yalnız çıxış, vəziyyət cədvəli və onun sərhədləri; s. 9"
  },
  {
    "id": 281,
    "question": "Stateful süzgəci fərqləndirən əsas xüsusiyyət nədir?",
    "answer": "Bağlantının vəziyyətini izləyir – cavab trafikinə avtomatik icazə verir",
    "options": [
      "Bağlantının vəziyyətini izləyir – cavab trafikinə avtomatik icazə verir",
      "Yalnız HTTP məzmununu yoxlaması",
      "Hər paketə yeni public IP verməsi",
      "Yalnız DNS adlarını saxlaması",
      "Bütün trafiki şifrələməsi"
    ],
    "keywords": "vəziyyət izləyir",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 3.5 Süzgəclər: stateful və stateless; s. 11"
  },
  {
    "id": 282,
    "question": "Stateless süzgəc paketləri necə yoxlayır?",
    "answer": "Hər paketi əvvəlki paketlərdən asılı olmayaraq qaydalara görə ayrıca yoxlayır",
    "options": [
      "Hər paketi əvvəlki paketlərdən asılı olmayaraq qaydalara görə ayrıca yoxlayır",
      "Yalnız ilk paketi yoxlayaraq",
      "Yalnız bağlantının sonunda",
      "Yalnız TLS sertifikatına görə",
      "Yalnız HTTP URL yoluna görə"
    ],
    "keywords": "hər paket ayrıca, yaddaş yoxdur",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 3.5 Süzgəclər: stateful və stateless; s. 11"
  },
  {
    "id": 283,
    "question": "DNS-in əsas funksiyası nədir?",
    "answer": "Domen adlarını IP ünvanlara çevirmək (ad həlli)",
    "options": [
      "Domen adlarını IP ünvanlara çevirmək (ad həlli)",
      "Paketin mənbə portunu dəyişmək",
      "HTTP hücumlarını süzmək",
      "VPN tunelini şifrələmək",
      "Trafiki sağlam hədəflər arasında bölmək"
    ],
    "keywords": "ad → IP",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 3.8 DNS: private zona, split-horizon və TTL; s. 13"
  },
  {
    "id": 284,
    "question": "Private DNS zonası haradan sorğulana bilər?",
    "answer": "Yalnız həmin virtual şəbəkədən (və ona qoşulmuş mühitlərdən)",
    "options": [
      "Yalnız həmin virtual şəbəkədən (və ona qoşulmuş mühitlərdən)",
      "İnternetdəki bütün hostlardan",
      "Yalnız domen qeydiyyatçısının serverindən",
      "Yalnız yük balanslaşdırıcının public ünvanından",
      "Yalnız fiziki kommutatorun idarəetmə portundan"
    ],
    "keywords": "yalnız daxildən",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 3.8 DNS: private zona, split-horizon və TTL; s. 13"
  },
  {
    "id": 285,
    "question": "DNS-də TTL nəyi müəyyən edir?",
    "answer": "DNS cavabının keşdə nə qədər saxlanacağını",
    "options": [
      "DNS cavabının keşdə nə qədər saxlanacağını",
      "TCP bağlantısının port nömrəsini",
      "Subnet-dəki ehtiyat ünvanların sayını",
      "VPN tunelinin şifrələmə alqoritmini",
      "HTTP sorğusunun hansı hədəfə çatacağını"
    ],
    "keywords": "keş müddəti",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 3.8 DNS: private zona, split-horizon və TTL; s. 13"
  },
  {
    "id": 286,
    "question": "Yük balanslaşdırıcı adi halda sorğuları hansı hədəflərə göndərir?",
    "answer": "Sağlam hədəflərə",
    "options": [
      "Sağlam hədəflərə",
      "Yalnız ən son yaradılan hədəfə",
      "Yalnız public IP-si olan hədəflərə",
      "Yalnız ən çox xəta qaytaran hədəfə",
      "Yalnız DNS TTL-i ən uzun olan hədəfə"
    ],
    "keywords": "yalnız sağlam",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 3.9 Yük balanslaşdırıcı: L4 və L7, sağlamlıq yoxlaması; s. 14"
  },
  {
    "id": 287,
    "question": "Mühazirədəki hibrid əlaqədə site-to-site VPN nəyi birləşdirir?",
    "answer": "Şirkətin lokal şəbəkəsini (ofis/data mərkəzi) bulud virtual şəbəkəsi ilə internet üzərindən şifrələnmiş tunellə birləşdirir",
    "options": [
      "Şirkətin lokal şəbəkəsini (ofis/data mərkəzi) bulud virtual şəbəkəsi ilə internet üzərindən şifrələnmiş tunellə birləşdirir",
      "Yalnız fərdi istifadəçinin brauzerini və veb səhifəni",
      "Yalnız eyni node-dakı iki Pod-u",
      "Yalnız DNS adını və IP ünvanını",
      "Yalnız balanslaşdırıcını və onun sağlamlıq yolunu"
    ],
    "keywords": "iki şəbəkə, tunel",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 3.10 Virtual şəbəkənin sərhədindəki qapılar: VPN, xüsusi bağlantı, peering, private endpoint; s. 16"
  },
  {
    "id": 288,
    "question": "Axın loglarında əsasən hansı məlumat qeydə alınır?",
    "answer": "Şəbəkə axınlarının metadata-sı (mənbə/təyinat IP, port, protokol, qəbul/rədd)",
    "options": [
      "Şəbəkə axınlarının metadata-sı (mənbə/təyinat IP, port, protokol, qəbul/rədd)",
      "HTTP sorğusunun tam məzmunu",
      "Verilənlər bazasına göndərilən SQL əmrləri",
      "İstifadəçinin tətbiqdə icra etdiyi əməliyyatlar",
      "Paketlərin şifrədən açılmış tam məzmunu"
    ],
    "keywords": "metadata, məzmun yox",
    "topic": 7,
    "difficulty": 1,
    "reference": "Mövzu 7; 3.11 Təhlükəsiz məlumat axını: qatlar birlikdə; s. 17"
  },
  {
    "id": 289,
    "question": "Eyni virtual şəbəkədə tətbiq və baza fərqli subnet-lərdə yerləşir. Onların ayrılmasını hansı vasitə təmin edir?",
    "answer": "Subnet-lər arasında trafiki məhdudlaşdıran süzgəc qaydaları (security group, NACL) və marşrut qaydaları",
    "options": [
      "Subnet-lər arasında trafiki məhdudlaşdıran süzgəc qaydaları (security group, NACL) və marşrut qaydaları",
      "Subnet-lərə fərqli adların verilməsi",
      "Yalnız yerli marşrutun mövcudluğu",
      "DNS cavabında uzun TTL seçilməsi",
      "Yalnız subnet-lərin ayrı ünvan hissələrində olması"
    ],
    "keywords": "süzgəc qaydaları",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 1.3 Analogiya və onun sərhədi; s. 4"
  },
  {
    "id": 290,
    "question": "Fərqli bulud müştəriləri niyə eyni RFC 1918 xüsusi ünvan blokunu seçə bilər?",
    "answer": "Hər müştərinin virtual şəbəkəsi təcrid olunub, xüsusi ünvanlar yalnız öz şəbəkəsində mənalıdır (qlobal unikal deyil)",
    "options": [
      "Hər müştərinin virtual şəbəkəsi təcrid olunub, xüsusi ünvanlar yalnız öz şəbəkəsində mənalıdır (qlobal unikal deyil)",
      "Bu blokdakı ünvanlar bütün internetdə unikaldır",
      "Hər xüsusi ünvan avtomatik public ünvana çevrilir",
      "DNS bu müştəriləri avtomatik peering ilə birləşdirir",
      "Bu bloklar yalnız bir bulud provayderində istifadə olunur"
    ],
    "keywords": "təcrid, qlobal unikal deyil",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 3.1 Ünvan planı: CIDR, xüsusi diapazonlar və ehtiyat ünvanlar; s. 6"
  },
  {
    "id": 291,
    "question": "Subnet ölçüsü planlaşdırılarkən yalnız mövcud VM-lərin sayını nəzərə almaq niyə kifayət etməyə bilər?",
    "answer": "Autoscaling və yeni instansiyalar/endpoint-lər əlavə ünvan tələb edir – gələcək artım üçün ehtiyat lazımdır",
    "options": [
      "Autoscaling və yeni instansiyalar/endpoint-lər əlavə ünvan tələb edir – gələcək artım üçün ehtiyat lazımdır",
      "Subnet-də yalnız hazırda işləyən VM-lər ünvan alır",
      "Autoscaling yeni node yaratsa da ünvan tələb etmir",
      "Endpoint-lər subnet-in ünvan sahəsindən heç istifadə etmir",
      "Gələcək artım yalnız public IP sayı artanda nəzərə alınır"
    ],
    "keywords": "gələcək artım, endpoint ünvan alır",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 3.1 Ünvan planı: CIDR, xüsusi diapazonlar və ehtiyat ünvanlar; s. 7"
  },
  {
    "id": 292,
    "question": "Azure-da subnet-in defaultOutboundAccess xassəsinin false olması nə deməkdir?",
    "answer": "Subnet-dəki resurslara avtomatik (default) internet çıxışı verilmir – çıxış açıq şəkildə qurulmalıdır",
    "options": [
      "Subnet-dəki resurslara avtomatik (default) internet çıxışı verilmir – çıxış açıq şəkildə qurulmalıdır",
      "Qurulmuş NAT Gateway də işləyə bilməz",
      "Subnet-ə daxil olan bütün trafik rədd edilir",
      "Subnet-də private IP istifadəsi qadağan edilir",
      "Subnet avtomatik olaraq WAF ilə qorunur"
    ],
    "keywords": "default çıxış yoxdur",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 3.3 Public və private: provayderə görə nə deməkdir; s. 9"
  },
  {
    "id": 293,
    "question": "İdarə olunan çıxış NAT-ı internetdən başlanan yeni bağlantını niyə daxili resursa ötürmür?",
    "answer": "NAT yalnız daxildən başlamış bağlantının vəziyyət cədvəlinə baxır, xaricdən gələn yeni bağlantı cədvəldə yoxdur",
    "options": [
      "NAT yalnız daxildən başlamış bağlantının vəziyyət cədvəlinə baxır, xaricdən gələn yeni bağlantı cədvəldə yoxdur",
      "NAT yeni bağlantıya həmişə ayrıca daxili ünvan ayırır",
      "NAT public ünvanı olan hər göndərəni daxilə buraxır",
      "NAT xaricdən gələn hər sorğunu əvvəlki cavab sayır",
      "NAT yalnız HTTP bağlantılarında vəziyyət qeydi saxlayır"
    ],
    "keywords": "yalnız daxildən başlanan",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 3.4 NAT: yalnız çıxış, vəziyyət cədvəli və onun sərhədləri; s. 9"
  },
  {
    "id": 294,
    "question": "Autoscaling istifadə olunan sistemdə süzgəc qaydasını konkret node IP-si əvəzinə rol qrupuna bağlamaq niyə faydalıdır?",
    "answer": "Rol qrupuna qoşulan hər yeni node qaydanı avtomatik alır, IP dəyişsə də qayda qüvvədə qalır",
    "options": [
      "Rol qrupuna qoşulan hər yeni node qaydanı avtomatik alır, IP dəyişsə də qayda qüvvədə qalır",
      "Hər yeni node-da konkret IP əvvəlki kimi qalır",
      "Rol qrupuna qoşulmaq hər porta giriş verməlidir",
      "Rol əsaslı qayda təyinat portunu seçməyi əvəz edir",
      "Autoscaling olduqda şəbəkə qaydaları lazım deyil"
    ],
    "keywords": "rol qrupu, IP dəyişsə də işləyir",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 3.6 Rol əsaslı qaydalar, ən az imtiyaz və çıxış nəzarəti; s. 11"
  },
  {
    "id": 295,
    "question": "Kubernetes NetworkPolicy qaydalarının tətbiq olunması üçün hansı şərt lazımdır?",
    "answer": "Klasterin şəbəkə plagininin (CNI) NetworkPolicy-ni dəstəkləməsi",
    "options": [
      "Klasterin şəbəkə plagininin (CNI) NetworkPolicy-ni dəstəkləməsi",
      "Yalnız NetworkPolicy manifestinin yazılması kifayətdir",
      "Yalnız Pod-ların ayrı namespace-də olması kifayətdir",
      "Yalnız node səviyyəsində bulud süzgəci kifayətdir",
      "Yalnız Service seçicisinin düzgün olması kifayətdir"
    ],
    "keywords": "CNI dəstəyi",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 3.6 Rol əsaslı qaydalar, ən az imtiyaz və çıxış nəzarəti; s. 12"
  },
  {
    "id": 296,
    "question": "Mühazirədə AWS NAT gateway üçün ödənişin hansı iki amildən asılı olduğu göstərilir?",
    "answer": "İşləmə vaxtı (saat) və emal olunan məlumat həcmi",
    "options": [
      "İşləmə vaxtı (saat) və emal olunan məlumat həcmi",
      "Yalnız emal olunan məlumat həcmi, işləmə vaxtı yox",
      "Yalnız işləmə vaxtı, məlumat həcmi yox",
      "Yalnız yaradılma zamanı birdəfəlik haqq",
      "Yalnız internetdən başlanan bağlantıların sayı"
    ],
    "keywords": "vaxt + məlumat həcmi",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 7.2 Xərc; s. 23"
  },
  {
    "id": 297,
    "question": "WAF ilə şəbəkə süzgəci arasındakı fərqi hansı fikir düzgün göstərir?",
    "answer": "WAF HTTP səviyyəsində tətbiq hücumlarını görür, şəbəkə süzgəci isə IP/port səviyyəsində işləyir – biri digərini əvəz etmir",
    "options": [
      "WAF HTTP səviyyəsində tətbiq hücumlarını görür, şəbəkə süzgəci isə IP/port səviyyəsində işləyir – biri digərini əvəz etmir",
      "WAF HTTP hücumlarını görür, bütün L3/L4 qaydalarını əvəz edir",
      "Şəbəkə süzgəci HTTP məzmununu WAF ilə eyni dərinlikdə oxuyur",
      "WAF tətbiq hücumlarını yalnız mənbə IP-si üzrə tanıyır",
      "WAF olduqda HTTP olmayan axınlar üçün də süzgəc lazım deyil"
    ],
    "keywords": "WAF = L7, süzgəc = L3/L4, tamamlayıcı",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 3.7 Firewall qatları; s. 13"
  },
  {
    "id": 298,
    "question": "Mühazirədə split-horizon DNS eyni xidmət adı üçün necə cavab verir?",
    "answer": "Daxildən private, xaricdən public ünvan",
    "options": [
      "Daxildən private, xaricdən public ünvan",
      "Hər yerdən yalnız eyni public ünvan",
      "Hər yerdən yalnız eyni private ünvan",
      "Daxildən public, xaricdən private ünvan",
      "Hər cavabda public və private ünvanı məcburi birlikdə"
    ],
    "keywords": "daxil = private, xarici = public",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 3.8 DNS: private zona, split-horizon və TTL; s. 13"
  },
  {
    "id": 299,
    "question": "L7 yük balanslaşdırıcı HTTPS sorğusunun URL yolunu oxumaq üçün TLS bağlantısını niyə çox vaxt özündə bitirir?",
    "answer": "URL yolu TLS ilə şifrələnmiş HTTP məzmunundadır, açıq TCP başlığında deyil – oxumaq üçün TLS açılmalıdır",
    "options": [
      "URL yolu TLS ilə şifrələnmiş HTTP məzmunundadır, açıq TCP başlığında deyil – oxumaq üçün TLS açılmalıdır",
      "URL yolu həmişə açıq TCP başlığında ötürülür",
      "HTTPS olduqda URL yolu ümumiyyətlə ötürülmür",
      "Şifrəli HTTP məzmununu açarsız oxumaq mümkündür",
      "TLS istifadə ediləndə yalnız cavab şifrələnir"
    ],
    "keywords": "URL şifrəlidir",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 2.1 Paketin üç zərfi: L3, L4 və L7; s. 5"
  },
  {
    "id": 300,
    "question": "Daxili (internal) yük balanslaşdırıcı əsasən necə istifadə olunur?",
    "answer": "Daxili servislər arasında private ünvanla trafiki bölmək üçün",
    "options": [
      "Daxili servislər arasında private ünvanla trafiki bölmək üçün",
      "Yalnız internetdən birbaşa gələn sorğular üçün",
      "Yalnız public ünvanlı hədəflər arasında trafik üçün",
      "Yalnız xarici istifadəçilərin giriş ünvanı kimi",
      "Daxili servis adlarının DNS qeydlərini saxlamaq üçün"
    ],
    "keywords": "daxili trafik, private",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 3.9 Yük balanslaşdırıcı: L4 və L7, sağlamlıq yoxlaması; s. 14"
  },
  {
    "id": 301,
    "question": "A ilə B və B ilə C virtual şəbəkələri arasında peering var. A-nın B vasitəsilə C-yə çata bilməməsi hansı xüsusiyyətlə izah olunur?",
    "answer": "Peering tranzit deyil (non-transitive) – A–B və B–C avtomatik A–C əlaqəsi yaratmır",
    "options": [
      "Peering tranzit deyil (non-transitive) – A–B və B–C avtomatik A–C əlaqəsi yaratmır",
      "Peering hər iki əlaqəni avtomatik A–C əlaqəsinə çevirir",
      "B ilə peering olan şəbəkələr həmişə bir şəbəkə sayılır",
      "A və C eyni private ünvanları seçsə, əlaqə avtomatik açılır",
      "Peering qurulanda bütün tərəflərin süzgəcləri ləğv olunur"
    ],
    "keywords": "peering tranzit deyil",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 3.10 Virtual şəbəkənin sərhədindəki qapılar: VPN, xüsusi bağlantı, peering, private endpoint; s. 16"
  },
  {
    "id": 302,
    "question": "Private endpoint yaradılması idarə olunan xidmətin yerləşməsini necə dəyişir?",
    "answer": "Xidmətə şəbəkə daxilindən private IP ilə çıxış verir; ad həlli üçün DNS sazlaması lazımdır",
    "options": [
      "Xidmətə şəbəkə daxilindən private IP ilə çıxış verir; ad həlli üçün DNS sazlaması lazımdır",
      "Xidmətin özünü tamamilə müştərinin subnet-inə köçürür",
      "Private endpoint yaradıldıqda DNS sazlaması lazım deyil",
      "Private endpoint xidmətin public girişini mütləq açıq saxlayır",
      "Private endpoint müştərinin bütün virtual şəbəkələrini birləşdirir"
    ],
    "keywords": "private IP + DNS sazlaması",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 3.10 Virtual şəbəkənin sərhədindəki qapılar: VPN, xüsusi bağlantı, peering, private endpoint; s. 17"
  },
  {
    "id": 303,
    "question": "Sıfır etibar prinsipinə görə private subnet-də yerləşən resurs barədə hansı fikir doğrudur?",
    "answer": "Private subnet avtomatik etibarlı sayılmır – identifikasiya, şifrələmə və loglama yenə lazımdır",
    "options": [
      "Private subnet avtomatik etibarlı sayılmır – identifikasiya, şifrələmə və loglama yenə lazımdır",
      "Private subnet-də olduğu üçün identifikasiya tələb olunmur",
      "Private subnet bağlantının şifrələnməsini əvəz edir",
      "Private subnet-dəki resurs avtomatik etibarlı sayılır",
      "Private subnet-dəki axınları qeydə almaq lazım deyil"
    ],
    "keywords": "private ≠ etibarlı",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 3.11 Təhlükəsiz məlumat axını: qatlar birlikdə; s. 17"
  },
  {
    "id": 304,
    "question": "İdarə olunan şəbəkə xidmətini VM üzərində özünüz qurduqda hansı işlər sizin məsuliyyətinizə keçir?",
    "answer": "Quraşdırma, yamaqlar, konfiqurasiya, tutum, monitorinq və yüksək əlçatanlıq – hamısı",
    "options": [
      "Quraşdırma, yamaqlar, konfiqurasiya, tutum, monitorinq və yüksək əlçatanlıq – hamısı",
      "Yalnız ilk quraşdırma, sonrakı yamaqlar yox",
      "Yalnız konfiqurasiya, tutum və monitorinq yox",
      "Yalnız haqqın ödənməsi, VM-in idarə edilməsi yox",
      "Yalnız monitorinq, yüksək əlçatanlıq və yamaqlar yox"
    ],
    "keywords": "hamısı müştəridə",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 8 Fundamental anlayış → AWS → Azure → Google Cloud → açıq mənbə; s. 25"
  },
  {
    "id": 305,
    "question": "Docker-in --internal şəbəkəsi hansı bulud seqmentinin modelinə daha yaxındır?",
    "answer": "İnternetə çıxışı olmayan tam daxili (təcrid olunmuş) private seqment (məs. baza subnet-i)",
    "options": [
      "İnternetə çıxışı olmayan tam daxili (təcrid olunmuş) private seqment (məs. baza subnet-i)",
      "NAT ilə internetə çıxan tətbiq subnet-inə",
      "İnternetə açıq yük balanslaşdırıcının giriş seqmentinə",
      "İki ofisi internet üzərindən birləşdirən VPN-ə",
      "Regionlar arasında xüsusi fiziki bağlantıya"
    ],
    "keywords": "çıxışsız daxili seqment",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 9 Lokal model: Docker şəbəkələri ilə seqmentlər; s. 26"
  },
  {
    "id": 306,
    "question": "Trafik yoluna mərkəzi firewall və ya tranzit hab əlavə etməyin performans baxımından mümkün nəticəsi nədir?",
    "answer": "Əlavə keçid gecikməni artıra və darboğaz yarada bilər",
    "options": [
      "Əlavə keçid gecikməni artıra və darboğaz yarada bilər",
      "Gecikmənin bütün hallarda azalması",
      "Hər yeni keçiddə tutumun avtomatik artması",
      "Əlavə keçidlərin gecikməyə təsir etməməsi",
      "Yalnız giriş gecikməsinin artması, çıxışa təsir etməməsi"
    ],
    "keywords": "gecikmə artır",
    "topic": 7,
    "difficulty": 2,
    "reference": "Mövzu 7; 7.3 Performans; s. 23"
  },
  {
    "id": 307,
    "question": "Xidmətin IP-si dəyişəndə DNS cavablarının daha tez yenilənməsi üçün TTL qısaldılır. Bu seçimin əsas bədəli nədir?",
    "answer": "DNS sorğularının sayı (və DNS yükü/xərci) artır",
    "options": [
      "DNS sorğularının sayı (və DNS yükü/xərci) artır",
      "DNS sorğularının sayı azalır",
      "DNS cavablarının keşdə saxlanması tam dayanır",
      "Köhnə cavabın keşdə qalma müddəti uzanır",
      "IP dəyişdikdə xidmətin DNS adını da dəyişmək tələb olunur"
    ],
    "keywords": "çox sorğu, az keş",
    "topic": 7,
    "difficulty": 3,
    "reference": "Mövzu 7; 3.8 DNS: private zona, split-horizon və TTL; s. 13"
  },
  {
    "id": 308,
    "question": "Private resursların internetə çıxışı NAT ilə təmin olunur. Çıxışı yalnız icazəli təyinatlarla məhdudlaşdırmaq üçün əlavə hansı vasitə lazımdır?",
    "answer": "Çıxış süzgəci (egress filtering) – firewall/proxy ilə yalnız icazəli təyinatlara icazə",
    "options": [
      "Çıxış süzgəci (egress filtering) – firewall/proxy ilə yalnız icazəli təyinatlara icazə",
      "Yalnız çıxış NAT-ının public ünvanını sabit saxlamaq",
      "Yalnız internetdən gələn yeni bağlantıları bloklamaq",
      "Yalnız resursları private subnet-də yerləşdirmək",
      "Yalnız bütün resursları eyni NAT-a yönəltmək"
    ],
    "keywords": "egress süzgəci",
    "topic": 7,
    "difficulty": 3,
    "reference": "Mövzu 7; 3.4 NAT: yalnız çıxış, vəziyyət cədvəli və onun sərhədləri; s. 10"
  },
  {
    "id": 309,
    "question": "HTTP sorğularını URL yoluna görə iki ayrı servisə yönəltmək lazımdır. Hansı seçim uyğundur?",
    "answer": "L7 yük balanslaşdırıcı",
    "options": [
      "L7 yük balanslaşdırıcı",
      "Yalnız L4 yük balanslaşdırıcı",
      "Çıxış NAT şlüzü",
      "Subnet səviyyəli stateless NACL",
      "Site-to-site VPN şlüzü"
    ],
    "keywords": "URL yolu = L7",
    "topic": 7,
    "difficulty": 3,
    "reference": "Mövzu 7; 3.9 Yük balanslaşdırıcı: L4 və L7, sağlamlıq yoxlaması; s. 14"
  },
  {
    "id": 310,
    "question": "Ofislə bulud arasında böyük həcmli trafik və sabit gecikmə tələb olunur. Hansı bağlantı növü bu tələbə daha uyğundur?",
    "answer": "Xüsusi (ayrılmış) bağlantı – Direct Connect / ExpressRoute",
    "options": [
      "Xüsusi (ayrılmış) bağlantı – Direct Connect / ExpressRoute",
      "İnternetdən keçən adi site-to-site VPN",
      "Yalnız fərdi istifadəçi üçün point-to-site VPN",
      "Şirkət şəbəkəsi əvəzinə iki bulud şəbəkəsinin peering-i",
      "İnternetdə public endpoint-ə birbaşa müraciət"
    ],
    "keywords": "xüsusi xətt, sabit gecikmə",
    "topic": 7,
    "difficulty": 3,
    "reference": "Mövzu 7; 3.10 Virtual şəbəkənin sərhədindəki qapılar: VPN, xüsusi bağlantı, peering, private endpoint; s. 16"
  },
  {
    "id": 311,
    "question": "Private endpoint yaradılıb, amma xidmətin adı virtual şəbəkə daxilində hələ public ünvana açılır. Hansı sazlama birbaşa bu problemi həll etməyə yönəlir?",
    "answer": "Private DNS zonası (private endpoint üçün) – adı private IP-yə yönləndirmək",
    "options": [
      "Private DNS zonası (private endpoint üçün) – adı private IP-yə yönləndirmək",
      "Yalnız public DNS cavabının TTL-ini artırmaq",
      "Xidmətin public IP-sini daxili konfiqurasiyaya yazmaq",
      "Private endpoint-i silib public DNS qeydini saxlamaq",
      "Ad həllini dəyişmədən yalnız public girişi bağlamaq"
    ],
    "keywords": "private DNS zonası",
    "topic": 7,
    "difficulty": 3,
    "reference": "Mövzu 7; 3.8 DNS: private zona, split-horizon və TTL; s. 13"
  },
  {
    "id": 312,
    "question": "İki zonanın private subnet-ləri birinci zonadakı tək zonal NAT-dan istifadə edir. Birinci zona itərsə, ikinci zonadakı sağlam node-lara nə olar?",
    "answer": "İkinci zonanın sağlam node-ları da çıxışı itirər (NAT birinci zonada olduğu üçün)",
    "options": [
      "İkinci zonanın sağlam node-ları da çıxışı itirər (NAT birinci zonada olduğu üçün)",
      "Sağlam node-lar olduqda çıxış həmişə davam edər",
      "NAT ehtiyat qurulmadan ikinci zonada avtomatik yaranar",
      "Yalnız birinci zonanın node-ları çıxışı itirər",
      "İkinci zona NAT-dan asılı olmadan çıxışı saxlayar"
    ],
    "keywords": "tək zonal NAT = tək nasazlıq nöqtəsi",
    "topic": 7,
    "difficulty": 3,
    "reference": "Mövzu 7; 7.4 Etibarlılıq; s. 23"
  },
  {
    "id": 313,
    "question": "Bazaya yalnız tətbiq rolundakı resurslar müəyyən portla qoşulmalıdır. Ən az imtiyaz prinsipinə hansı qayda uyğundur?",
    "answer": "Tətbiq qrupundan bazanın yalnız lazımi portuna icazə",
    "options": [
      "Tətbiq qrupundan bazanın yalnız lazımi portuna icazə",
      "Bütün mənbələrdən tələb olunan baza portuna icazə",
      "Tətbiq qrupundan bazanın bütün portlarına icazə",
      "Virtual şəbəkədəki bütün qruplardan bütün portlara icazə",
      "Yalnız public IP-si olan resurslardan bütün portlara icazə"
    ],
    "keywords": "yalnız tətbiq qrupu + lazımi port",
    "topic": 7,
    "difficulty": 3,
    "reference": "Mövzu 7; 3.6 Rol əsaslı qaydalar, ən az imtiyaz və çıxış nəzarəti; s. 11"
  },
  {
    "id": 314,
    "question": "Bütün tətbiq hədəflərinin /health yoxlaması bazaya da müraciət edir. Baza yavaşlayanda bu dizayn hansı risk yaradır?",
    "answer": "Baza yavaşlayanda bütün hədəflər qeyri-sağlam sayılıb balanslaşdırıcıdan çıxarıla bilər – tam kəsinti",
    "options": [
      "Baza yavaşlayanda bütün hədəflər qeyri-sağlam sayılıb balanslaşdırıcıdan çıxarıla bilər – tam kəsinti",
      "Yalnız bazanın IP ünvanı balanslaşdırıcıdan çıxarılar",
      "Yalnız ən yeni tətbiq hədəfi çıxarılar",
      "Yalnız bazanın özü qeyri-sağlam sayılar, tətbiq hədəfləri təsirlənməz",
      "Tətbiq işlədiyi üçün bütün hədəflər mütləq sağlam qalar"
    ],
    "keywords": "bütün hədəflər çıxarılır",
    "topic": 7,
    "difficulty": 3,
    "reference": "Mövzu 7; 3.9 Yük balanslaşdırıcı: L4 və L7, sağlamlıq yoxlaması; s. 15"
  },
  {
    "id": 315,
    "question": "AWS Direct Connect və ya Azure ExpressRoute ilə xüsusi bağlantı qurulub. Trafikin şifrələnməsi də tələb olunursa, nə etmək lazımdır?",
    "answer": "Şifrələməni ayrıca qurmaq (məs. IPsec VPN, MACsec) – xüsusi xətt avtomatik şifrələnmir",
    "options": [
      "Şifrələməni ayrıca qurmaq (məs. IPsec VPN, MACsec) – xüsusi xətt avtomatik şifrələnmir",
      "Xüsusi xətti avtomatik şifrələnmiş hesab etmək",
      "Private ünvanların şifrələməni əvəz etdiyini qəbul etmək",
      "Peering qurmaqla xəttin şifrələndiyini qəbul etmək",
      "Yalnız port icazəsini daraldıb şifrələməni qurulmuş saymaq"
    ],
    "keywords": "şifrələməni ayrıca qur",
    "topic": 7,
    "difficulty": 3,
    "reference": "Mövzu 7; 3.10 Virtual şəbəkənin sərhədindəki qapılar: VPN, xüsusi bağlantı, peering, private endpoint; s. 16"
  }
];
