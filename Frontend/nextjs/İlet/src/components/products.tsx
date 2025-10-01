'use client'
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import { JSX, useEffect, useState } from "react";
import PerformanceProgress from "./ui/performancebar";
import { useTheme } from "next-themes";
import ScrollProgressLines from "./ui/scrollprogresslines";
import { LineShadowTextDemo } from "./ui/demotext";


interface ProductProps {
    title: string;
    description: string;
    icon: JSX.Element;
}

const productList: ProductProps[] = [
    {
        title: "Performans Sistemi",
        description: "Akademik performans, yayın teşvik, araştırma teşvik sistemlerinin senato kriterlerine göre dijital hesaplamasını yapar.",
        icon: <ChartIcon />,
    },
    {
        title: "Büyük Veri Raporlama Sistemi",
        description: "Verinin toplandığı, işlendiği, analiz edildiği ve anlamlı bilgilere dönüştürüldüğü bir sistemdir.",
        icon: <MagnifierIcon />,
    },
    {
        title: "Performans Hedef İzleme Sistemi",
        description: "Akademisyenlerin belirlenen hedeflere yönelik ilerlemelerini izleyen ve analiz eden sistem.",
        icon: <WalletIcon />,
    },
    {
        title: "Derecelendirme Sistemleri Simülasyon Aracı",
        description: "Belirli bir sistem, süreç veya yapı için derecelendirme kriterlerini simüle etmek, analiz etmek ve optimize etmek amacıyla kullanılan bir araçtır.",
        icon: <ChartIcon />,
    },
    {
        title: "Form Oluşturma ve Veri Toplama Sistemi",
        description: "Bu sistem, dağınık veri yapısını ortadan kaldırarak verilerin bütünlük ve erişilebilirliğini artırırken, gerektiğinde hızlı ve kolay bir şekilde erişim imkânı sunar.",
        icon: <MagnifierIcon />,
    },
    {
        title: "Proje Yönetim Sistemi",
        description: "Projelerin tüm aşamalarını kapsayarak kaynakların verimli kullanımı, zaman yönetimi ve süreç takibini kolaylaştırmaktadır.",
        icon: <WalletIcon />,
    },
    {
        title: "IntraNET",
        description: "Kurumsal bilgi paylaşımı, güvenli erişim ve iş birliğini sağlayan intranet platformu.",
        icon: <ChartIcon />,
    },
    {
        title: "CMS",
        description: "İçerik yönetim sistemleri için kurumsal çözümler sunar.",
        icon: <MagnifierIcon />,
    },
    {
        title: "LMS",
        description: "Öğrenme yönetim sistemi, eğitim içeriklerini yönetmeyi ve sunmayı sağlar.",
        icon: <WalletIcon />,
    }
];

const Products = () => {
    const { theme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState("dark");
    useEffect(() => {
        if (theme) {
            setCurrentTheme(theme);
        }
    }, [theme]);

    return (
        <section className="container mx-auto px-20 py-24 sm:py-32 " id="products">
            <div className="grid  lg:grid-cols-[1fr,1fr] gap-8 place-items-center p-4 ">
                <div>
                        <LineShadowTextDemo/>
                        
                    <p className="text-muted-foreground text-xl mt-2 mb-8">
                        Ürünlerimiz hakkında detaylı bilgi alabilirsiniz.
                    </p>
                    <div className="flex flex-col gap-8">
                        {productList.slice(0,3).map(({ icon, title, description }) => (
                            <Card key={title} className="dark:bg-[#1C1917] bg-[#f3f3f3]">
                                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                                    <div className="mt-1 bg-blue-500/20 dark:bg-green-500/20 p-1 rounded-2xl dark:text-green-500 text-blue-500">
                                        {icon}
                                    </div>
                                    <div>
                                        <CardTitle>{title}</CardTitle>
                                        <CardDescription className="text-md mt-2">
                                            {description}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className='p-8 hidden lg:flex'>
                <img
                    src={currentTheme === "dark" ? "/darkbg.gif" : "/whitebg.gif"}
                    className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
                    alt="About products"
                />
                </div>
            </div>

            <div className="grid  lg:grid-cols-[1fr,1fr] gap-8 place-items-center mt-8 p-4 ">
            <div className='p-8 hidden lg:flex'>
                  <PerformanceProgress/>
                </div>
                <div>
                    <div className="flex flex-col gap-8">
                        {productList.slice(3,6).map(({ icon, title, description }) => (
                            <Card key={title} className="dark:bg-[#1C1917] bg-[#f3f3f3]">
                                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                                    <div className="mt-1 bg-blue-500/20 dark:bg-green-500/20 p-1 rounded-2xl dark:text-green-500 text-blue-500">
                                        {icon}
                                    </div>
                                    <div>
                                        <CardTitle>{title}</CardTitle>
                                        <CardDescription className="text-md mt-2">
                                            {description}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid  lg:grid-cols-[1fr,1fr] gap-8 place-items-center mt-8 p-4">
                <div>
                    <div className="flex flex-col gap-8">
                        {productList.slice(6,9).map(({ icon, title, description }) => (
                            <Card key={title} className="dark:bg-[#1C1917] bg-[#f3f3f3]">
                                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                                    <div className="mt-1 bg-blue-500/20 dark:bg-green-500/20 p-1 rounded-2xl dark:text-green-500 text-blue-500">
                                        {icon}
                                    </div>
                                    <div>
                                        <CardTitle>{title}</CardTitle>
                                        <CardDescription className="text-md mt-2">
                                            {description}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className='p-8 hidden lg:flex'>
                 <ScrollProgressLines/>
                </div>
            </div>
        </section>
    );
};

export default Products;
