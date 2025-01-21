// pages/index.js
import Header from "../components/header.js";
import Catalogo from "../components/catalogo.js";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <div>
      <Header />
      <Catalogo />
      <Footer />
    </div>
  );
}
