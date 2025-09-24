import './styles/index.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CustomerSupport from './components/CustomerSupport.jsx';
import Features from './components/Features.jsx';
import RFQFlow from './components/RFQFlow.jsx';
import Showcase from './components/Showcase.jsx';
import SupplierCTA from './components/SupplierCTA.jsx';
import About from './components/About.jsx';
import FAQ from './components/FAQ.jsx';
import DownloadSection from './components/DownloadSection.jsx';
import Footer from './components/Footer.jsx';

import I18nProvider from './i18n/I18nProvider.jsx';
import { useI18n } from './i18n/useI18n.js';
import { useSEO } from './seo/useSEO.js';

function Page() {
  const { t, lang } = useI18n();
  useSEO({ title: t("seo.title"), description: t("seo.desc"), url: `https://ironasia.id/?lang=${lang}` });
  return (
    <main className="text-slate-800">
      <Header />
      <Hero />
      <About />
      <Features />
      <RFQFlow />
      {/* <Showcase /> */}
      <SupplierCTA />
      <FAQ />
      <DownloadSection />
      <Footer />
      <CustomerSupport />
    </main>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  );
}
