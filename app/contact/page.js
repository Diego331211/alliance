import Header from "../components/header.js";
import Contact from "../components/contact";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <div className="bg-blue-900">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
