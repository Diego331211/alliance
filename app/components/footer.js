// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-gray-700">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {/* Contacto */}
        <div>
          <h3 className="font-semibold text-lg text-blue-700">Contáctenos</h3>
          <p>Domicilios Cali / Pereira</p>
          <p>(602) 485 68 50</p>
          <p>WhatsApp: +57 318 548 44 44</p>
          <p>
            Horarios de atención{" "}
            <a href="#" className="text-blue-700 hover:underline">
              aquí
            </a>
          </p>
          <p>Escríbenos a: contacto@alliancemedical.com</p>
        </div>

        {/* Guía de compra */}
        <div>
          <h3 className="font-semibold text-lg text-blue-700">
            Guía de compra
          </h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Contáctenos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Envíos y tiempos de entrega
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tiendas
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Seguimiento de tu pedido
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Medios de pago
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Garantía y devoluciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Política de privacidad
              </a>
            </li>
          </ul>
        </div>

        {/* Ubicaciones */}
        <div>
          <h3 className="font-semibold text-lg text-blue-700">Ubicaciones</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Tiendas Cali
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tienda Pereira
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ¿Quiénes somos?
              </a>
            </li>
          </ul>
        </div>

        {/* Suscripción */}
        <div>
          <h3 className="font-semibold text-lg text-blue-700">
            Suscríbete a nuestro boletín
          </h3>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Su dirección de correo electrónico"
              className="w-full p-2 border border-gray-300 rounded-lg mb-2"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-800"
            >
              Suscribirse
            </button>
          </form>
          <p className="text-sm mt-2">
            <input type="checkbox" className="mr-2" />
            ¿Aceptas nuestras políticas de privacidad?
          </p>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        <p>2025 - Alliance Group - www.alliancemedical.com</p>
      </div>
    </footer>
  );
};

export default Footer;
