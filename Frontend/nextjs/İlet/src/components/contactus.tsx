'use client'
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CircleCheckBigIcon } from "lucide-react";
import { TextAnimate } from "./text-animate";

const careerSchema = z.object({
  field: z.enum(["Frontend Developer", "Software Developer", "Project Manager"]),
  name: z.string().min(2, "Ad soyad zorunludur"),
  email: z.string().email("Geçerli bir e-posta giriniz"),
  phone: z.string().min(10, "Telefon numarası zorunludur"),
  cv: z.any(),
  additional: z.string().optional()
});

type CareerFormValues = z.infer<typeof careerSchema>;

const contactSchema = z.object({
  name: z.string().min(2, "Ad soyad zorunludur"),
  email: z.string().email("Geçerli bir e-posta giriniz"),
  subject: z.string().min(2, "Konu zorunludur"),
  message: z.string().min(5, "Mesaj zorunludur")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [open, setOpen] = useState<boolean>(false);
  const [formType, setFormType] = useState<"career" | "contact" | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const careerForm = useForm<CareerFormValues>({ resolver: zodResolver(careerSchema) });
  const contactForm = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const handleSubmit = (data: CareerFormValues | ContactFormValues) => {
    setIsSubmitting(true);
    setSuccessMessage(null);

    setTimeout(() => {
      console.log("Form Gönderildi:", data);
      setSuccessMessage("Form başarıyla gönderildi!");
      setIsSubmitting(false);

      // Formu temizle
      if (formType === "career") {
        careerForm.reset();
      } else {
        contactForm.reset();
      }
      
      // Dialog'u 3 saniye sonra kapat
      setTimeout(() => {
        setOpen(false);
        setSuccessMessage(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="text-center py-10 container mx-auto" id="contact">
      <h2 className="text-5xl md:text-7xl font-extrabold">
      <TextAnimate animation="blurInUp" by="character" duration={0.5} delay={0.5}>
      Bize Ulaşın
    </TextAnimate>
      </h2>
      <hr className="w-[50%] mx-auto my-8"/>

      {/* Butonlar */}
      <div className="flex flex-wrap justify-center gap-6 mt-8" id="contacts">
        <Button className="flex flex-col items-center mx-4 py-6 px-6 md:py-12 md:px-8 text-lg border-2 border-[#6020A0] hover:bg-[#6020A0] dark:border-[#AE7EDE] rounded-2xl dark:hover:bg-[#AE7EDE] text-[#481878] dark:text-[#C9A9E9] hover:text-white dark:hover:text-white transition w-full md:w-auto"
          variant="outline"
          onClick={() => { setOpen(true); setFormType("career"); }}>
          <div className='flex gap-4 items-center'>
            <CircleCheckBigIcon className='hidden md:block w-8 h-8'/>
            <div className='flex flex-col items-start'>
              <span className="font-bold">İlet Kariyer Başvuru Formu</span>
              <span className="font-light text-sm md:text-base">Başvurunuz en kısa sürede değerlendirilecektir.</span>
            </div>
          </div>
        </Button>

        <Button className="flex flex-col items-center mx-4 py-6 px-6 md:py-12 md:px-8 text-lg border-2 border-[#6020A0] hover:bg-[#6020A0] dark:border-[#AE7EDE] rounded-2xl dark:hover:bg-[#AE7EDE] text-[#481878] dark:text-[#C9A9E9] hover:text-white dark:hover:text-white transition w-full md:w-auto"
          variant="outline"
          onClick={() => { setOpen(true); setFormType("contact"); }}>
          <div className='flex gap-4 items-center'>
            <CircleCheckBigIcon className='hidden md:block w-8 h-8'/>
            <div className='flex flex-col items-start'>
              <span className="font-bold">İletişim Formu</span>
              <span className="font-light text-sm md:text-base">Sizinle tanışmaya hazırız. Bi' Kahveye Bekleriz...</span>
            </div>
          </div>
        </Button>
      </div>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{formType === "career" ? "Kariyer Başvuru Formu" : "İletişim Formu"}</DialogTitle>
          </DialogHeader>

          {/* Form Alanı */}
          <form onSubmit={formType === "career" ? careerForm.handleSubmit(handleSubmit) : contactForm.handleSubmit(handleSubmit)}
                className="space-y-5 w-[80%] mt-4 mx-auto">
            
            {formType === "career" ? (
              <>
                <select {...careerForm.register("field")} className="w-full p-2 border rounded">
                  <option value="">Çalışmak İstediğiniz Alan</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Software Developer">Software Developer</option>
                  <option value="Project Manager">Project Manager</option>
                </select>
                <Input {...careerForm.register("name")} placeholder="Ad Soyad" />
                <Input {...careerForm.register("email")} type="email" placeholder="E-Posta" />
                <Input {...careerForm.register("phone")} placeholder="Telefon Numarası" />
                <input type="file" {...careerForm.register("cv")} className="w-full border p-2 rounded" />
                <Textarea {...careerForm.register("additional")} placeholder="Eklemek İstedikleriniz" />
              </>
            ) : (
              <>
                <Input {...contactForm.register("name")} placeholder="Ad Soyad"  className="w-full"/>
                <Input {...contactForm.register("email")} type="email" placeholder="E-Posta" />
                <Input {...contactForm.register("subject")} placeholder="Konu" />
                <Textarea {...contactForm.register("message")} placeholder="Mesajınız" />
              </>
            )}

            {/* Gönder Butonu */}
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Gönderiliyor..." : "Gönder"}
            </Button>

            {/* Başarı Mesajı */}
            {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
