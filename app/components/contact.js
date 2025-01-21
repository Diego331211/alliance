"use client";

const Contact = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-6 mt-10">
      <form
        action="https://formsubmit.co/est.juan.gama@unimilitar.edu.co" // Reemplaza con tu correo
        method="POST"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Nombre */}
        <div className="col-span-2 md:col-span-1">
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
        <div className="col-span-2 md:col-span-1">
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Categoría de Interés */}
        <div className="col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Categoría de Interés
          </label>
          <select
            name="category"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="dispositivos_medicos">Dispositivos Médicos</option>
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
          >
            Enviar
          </button>
        </div>

        {/* Campos ocultos para FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://tusitio.com/thanks" />
      </form>
    </div>
  );
};

export default Contact;
