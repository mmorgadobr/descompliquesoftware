import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Technologies } from "@/components/landing/technologies"
import { Products } from "@/components/landing/products"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Technologies />
      <Products />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
