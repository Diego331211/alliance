"use client";

import ContactInfo from "./contactInfo";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-blue-100 rounded-lg shadow-lg max-w-6xl mx-auto p-6 mt-10 mb-10">
      {/* Contenedor principal de dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Columna del formulario */}
        <div>
          <form
            action="https://formsubmit.co/est.juan.gama@unimilitar.edu.co"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Nombre */}
            <div className="col-span-2 md:col-span-1 dark:text-blue-900">
              <label className="block text-gray-700 font-medium mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div className="col-span-2 md:col-span-1 dark:text-blue-900">
              <label className="block text-gray-700 font-medium mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Teléfono */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Número de Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="(123) 456-7890"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-blue-900"
              />
            </div>

            {/* Categoría de Interés */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Categoría de Interés
              </label>
              <select
                name="category"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-blue-900"
                required
              >
                <option value="">Selecciona una categoría</option>
                <option value="dispositivos_medicos">
                  Dispositivos Médicos
                </option>
                <option value="equipos_medicos">Equipos Médicos</option>
                <option value="materiales_descartables">
                  Materiales Descartables
                </option>
                <option value="otros_insumos">Otros Insumos Médicos</option>
              </select>
            </div>

            {/* Consulta */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Consulta o Especificaciones
              </label>
              <textarea
                name="message"
                placeholder="Escribe aquí tu consulta o detalles específicos"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-blue-900"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Preferencia de Contacto */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Preferencia de Contacto
              </label>
              <select
                name="contact_preference"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-blue-900"
              >
                <option value="correo">Correo Electrónico</option>
                <option value="telefono">Teléfono</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            {/* Botón de Enviar */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-600 transition"
              >
                Enviar
              </button>
            </div>

            {/* Campos ocultos para FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://tusitio.com/thanks"
            />
          </form>
        </div>

        {/* Columna del mapa */}
        <div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
