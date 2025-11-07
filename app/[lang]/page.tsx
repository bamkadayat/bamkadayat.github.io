import { getDictionary } from './dictionaries'
import About from "@/components/about";
import Works from "@/components/works";
import Experience from "@/components/experience";
import Sidebar from "@/components/sidebar";
import MobileHeader from "@/components/mobile-header";
import ClientPage from './client-page';

export default async function Page({ params }: { params: { lang: 'en' | 'no' } }) {
  const dict = await getDictionary(params.lang);

  return <ClientPage dict={dict} lang={params.lang} />;
}
