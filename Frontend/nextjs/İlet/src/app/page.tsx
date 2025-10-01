import { About } from "@/components/aboutus";
import ContactSection from "@/components/contactus";
import FocusSection from "@/components/focus";
import Footer from "@/components/footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/products";



export default function Home() {
  return (
    
 <div className='overflow-x-hidden'>
<Navbar/>
<Hero/>
<About/>
<FocusSection/>
<Products/>
<ContactSection/>
<Footer/>

   
 </div>
  );
}
