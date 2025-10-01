import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { DotPattern } from "./ui/dot-pattern";
import { cn } from "@/lib/utils";


const services = [
  {
    title: "Üniversite Performans Analiz",
    description:
      "Performans Ölçümü:\n- Akademik personelin yayın, proje ve diğer akademik faaliyet performanslarının ölçülmesi.\n- Öğrenci başarı oranları ve mezuniyet sürelerinin analiz edilmesi.\n\nVeri Yönetimi:\n- Öğrenci, personel ve kurum verilerinin merkezi bir sistemde toplanması ve saklanması.\n- Yüksek güvenlikli veri yönetimi altyapısı.\n\nStratejik Karar Desteği:\n- Üniversitenin belirlediği hedeflere ulaşma durumunun izlenmesi.\n- Hedeflere yönelik stratejik planların oluşturulmasına destek sağlanması.\n\nRaporlama ve Şeffaflık:\n- Üniversite içi ve dışı paydaşlarla paylaşılabilir kapsamlı raporlar oluşturulması.\n- YÖK, TÜBİTAK ve diğer kurumlarla uyumlu veri sunumu.",
    image: "/itu.png",
  },
  {
    title: "Yapay Zekâ Uygulamaları",
    description:
      "Makine Öğrenimi:\n- Makine öğrenimi algoritmaları kullanarak veri analizi yapabilir, tahmin modelleri oluşturabilir veya karar destek sistemleri geliştirebilir.\n\nDoğal Dil İşleme:\n- Dil anlama, metin analizi, metin tabanlı etkileşimler ve dil tabanlı veri madenciliği uygulamaları.\n\nEğitim Teknolojileri:\n- Öğrenci performans analizi, öğrenme içeriği özelleştirmesi ve öğrenciye uygun önerilerde bulunma.",
    image: "/beyazLogo.svg",
  },
  {
    title: "Büyük Veri",
    description:
      "Veri Toplama ve Depolama:\n- Çeşitli kaynaklardan büyük miktarda veri toplanır (web servisleri, sosyal medya, mobil uygulamalar vb.).\n- Büyük veri depolama çözümleri kullanarak veriler etkili şekilde saklanır.\n\nVeri Analitiği:\n- Toplanan veriler analiz edilerek desenler belirlenir, trendler tahmin edilir ve iş süreçleri iyileştirilir.\n\nMakine Öğrenimi ve Veri Madenciliği:\n- Büyük veri, makine öğrenimi algoritmaları ve veri madenciliği teknikleri ile işlenerek anlamlı sonuçlar üretilir.",
    image: "/yok.png",
  },
  {
    title: "İş Analitiği & Zekası",
    description:
      "Veri Analitiği ve Raporlama:\n- İş süreçlerinden elde edilen verileri analiz eder ve performans değerlendirmesi, trend analizi gibi raporlar üretir.\n\nİş Zekası Uygulamaları:\n- Kurumun farklı departmanlarından gelen verileri bir araya getirerek anlamlı görüntüler sunar.\n\nTahmin ve Makine Öğrenimi:\n- Gelecekteki eğilimleri tahmin etme ve öngörü analizleri yapma yetenekleri sağlar.\n\nKişiselleştirilmiş Müşteri Deneyimi:\n- Müşteri davranışlarını analiz ederek özel teklifler ve öneriler sunar.",
    image: "/itu.png",
  },
  {
    title: "Veri Madenciliği",
    description:
      "Veri Keşfi ve Temizleme:\n- Büyük veri setlerini analiz ederek eksik veya hatalı verileri temizler.\n\nMakine Öğrenimi Modelleri:\n- Sınıflandırma, regresyon, kümeleme gibi algoritmalar ile veri setlerinden öğrenme ve tahmin yapma.\n\nİlişki Analizi ve Desen Tanıma:\n- Veri setlerindeki ilişkileri belirleyerek iş süreçlerinde optimizasyon fırsatları sunar.\n\nAnomalilerin Tespiti:\n- Güvenlik tehditleri ve operasyonel süreçlerdeki anormallikleri belirler.",
    image: "/beyazLogo.svg",
  },
  {
    title: "RPA - Yazılım Robotları",
    description:
      "- İş süreçlerini otomatikleştirme ve verimlilik artırma çözümleri.\n- Tekrarlayan görevleri otomatikleştirmek için yazılım robotlarının kullanımı.\n- Veri giriş, süreç otomasyonu ve müşteri hizmetleri operasyonlarında yapay zeka destekli çözümler sunar.",
    image: "/yok.png",
  },
];

export default function FocusSection() {
  return (

    <div className="container mx-auto flex flex-col items-center justify-center py-16 mt-16" id="services">
      <h2 className="text-4xl md:text-6xl font-bold text-center  drop-shadow-md">
      Odak Noktamız
      </h2>
      <p className="text-primary/80 mt-4 font-semibold text-center drop-shadow-md">
      Alanında uzmanlıkla çalıştığımız hizmetler
      </p>

      <div className="w-full max-w-7xl px-6 mt-16">
      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true, duration: 30 }}
      >
        <CarouselContent className="-ml-1">
        {services.map((service, i) => (
          <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="relative overflow-hidden rounded-xl shadow-lg bg-cover bg-center transition-all duration-300 hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
              {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex w-72 h-72 p-4 mx-auto justify-center items-center">
              <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={500}
              className="object-contain h-60 w-60 max-w-full max-h-full"
              />
            </CardContent>
            <CardFooter>
              <Dialog>
              <DialogTrigger className="w-full mt-2 px-4 py-3 text-center font-medium rounded-xl transition-all duration-300 border-2 dark:border-green-500 border-blue-500 text-primary dark:hover:bg-green-500 hover:bg-blue-500 hover:text-white dark:hover:text-black">
                Detay
              </DialogTrigger>
              <DialogContent className="p-6 max-w-2xl backdrop-blur-2xl">
                <DialogTitle>{service.title}</DialogTitle>
                <p className="mt-4 whitespace-pre-line leading-relaxed">
                {service.description}
                </p>
              </DialogContent>
              </Dialog>
            </CardFooter>
            </Card>
          </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
     
      <DotPattern
      width={24}
      height={24}
      cx={1.2}
      cy={1.2}
      cr={1.2}
      className={cn(
        "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)] container my-auto rounded-[10%]",
      )}
      
      />
    </div>

  );
}
