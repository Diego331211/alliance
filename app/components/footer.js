// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-gray-700">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {/* Contacto */}
        <div>
          <h3 className="font-semibold text-lg text-blue-700">Contáctenos</h3>
          <p>Domicilio Bogotá</p>
          <p>(601) 111 11 11</p>
          <p>WhatsApp: +57 222 222 22 22</p>
          Horarios de atención <p>7:00 am - 5:00 pm de lunes a viernes</p>
          <p>Escríbenos a: gerencia@alliancemedicalsup.com</p>
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
                Tienda Bogotá
              </a>
            </li>

            <li>
              <a href="/about" className="hover:underline">
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
          <form
            className="mt-4"
            action="https://formsubmit.co/gerencia@alliancemedicalsup.com" // Cambia "your-email@example.com" por tu correo real
            method="POST"
          >
            {/* Agregar campos ocultos de seguridad */}
            <input
              type="hidden"
              name="_next"
              value="https://tu-sitio.com/thanks"
            />{" "}
            {/* Página de agradecimiento */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Campo de email */}
            <input
              type="email"
              name="email"
              placeholder="Su dirección de correo electrónico"
              required
              className="w-full p-2 border border-gray-300 rounded-lg mb-2"
            />
            {/* Botón de enviar */}
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-800"
            >
              Suscribirse
            </button>
          </form>

          {/* Mensaje de privacidad */}
          <p className="text-sm mt-2">
            <input type="checkbox" className="mr-2" required />
            ¿Aceptas nuestras políticas de privacidad?
          </p>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500 flex flex-col items-center">
        <p>2025 - Alliance Group - www.alliancemedical.com</p>
        <a
          href="/credits"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors mt-1"
        >
          Powered by Botopia Technology S.A.S &reg;
        </a>
      </div>
    </footer>
  );
};

export default Footer;
