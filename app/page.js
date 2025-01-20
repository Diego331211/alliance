// pages/index.js
import Header from './components/header.js';
import Hero from "./components/hero";
import Footer from './components/footer.js';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
