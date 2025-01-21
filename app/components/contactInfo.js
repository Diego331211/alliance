"use client";

const ContactInfo = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Título */}
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
        Encuentranos aquí
      </h2>

      {/* Información de Contacto */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-blue-900 font-bold text-xl">Phone</h3>
          <p className="text-gray-600">(123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-blue-900 font-bold text-xl">Email</h3>
          <p className="text-gray-600">hello@prohealth.com</p>
        </div>
        <div>
          <h3 className="text-blue-900 font-bold text-xl">Location</h3>
          <p className="text-gray-600">xxx Bogotá - Colombia</p>
        </div>
      </div>

      {/* Mapa */}
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.660856747369!2d-74.08175428596186!3d4.609710243032711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a72e9d6f37%3A0x93c22b89ef5d44e4!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1673000000000!5m2!1ses!2sco"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
