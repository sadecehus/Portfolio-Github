
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { BrainCircuit, Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";

import LogoGroup from "./ui/logogroup";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Yenilikçi Teknolojiler */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className=" dark:bg-[#5db87371] bg-[#ff6b9f54] p-2 rounded-2xl">
            <BrainCircuit width={35} height={35} strokeWidth={1} />
          </div>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Yenilikçi Teknolojiler</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="text-primary/80">Yapay zeka ve ileri teknoloji çözümleriyle yanınızdayız!</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 ">
        <CardHeader className=" flex justify-center items-center pb-2">
          <LogoGroup
            logos={["murdochuni.svg", "yok.png", "itu.png"]}
            extraCount={20}
          />
          <CardTitle className="text-center">
            Alanında Lider Müşteriler
          </CardTitle>
          <CardDescription className="font-normal opacity-80 text-center">
            İTÜ, YÖK, Murdoch Üniversitesi ve dahası.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center text-md text-primary/80 pb-2">
          <p>
          Öncü Üniversiteler , Lider Teknoloji kurumları ve daha bir çok müşteriye hizmet vermekteyiz.
          </p>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>

      {/* 26 Yıllık Deneyim */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl mt-4 shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between mb-2">
            26 Yıllık Deneyim
          
          </CardTitle>
     

          <CardDescription className="text-primary/80 ">
          26 yıllık tecrübemizle bir çok alanda müşteri odaklı ve katma değeri yüksek teknoloji ve dijital hizmetler sunuyoruz
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">İletişime Geçin</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["25 + Sektörde Lider Ortak", "Genç ve Dinamik Ekip", "İhtiyaçlarınıza Yönelik Yazılım"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 dark:bg-[#5db87371] bg-[#ff6b9f54] p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Müşteri Odaklı</CardTitle>
            <CardDescription className="text-md text-primary/80 mt-2">
              Çözümlerimiz müşterilerimizin ihtiyaçlarına göre tasarlanır ve
              geliştirilir.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
