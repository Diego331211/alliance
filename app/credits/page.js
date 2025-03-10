// credits/page.js
import Image from "next/image";

export default function Credits() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-600 to-purple-200 justify-center items-center text-center p-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-4">
          Thanks for trusting Botopia Technology S.A.S!
        </h1>
        <p className="text-lg text-purple-50 mb-8">
          This site was developed with customized technology by our team at
          Botopia, connecting companies with innovative solutions. We create
          unique digital experiences that drive business growth like yours.
        </p>

        <div className="flex flex-col gap-4 w-full items-center">
          <a
            href="https://botopia.tech"
            target="_blank"
            className="w-full md:w-2/3 py-3 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-all duration-200"
          >
            Learn more about Botopia
          </a>

          <a
            href="http://localhost:3001/en/contactUs"
            className="w-full md:w-2/3 py-3 bg-white bg-opacity-10 text-white rounded-lg hover:bg-opacity-20 transition-all duration-200"
          >
            Contact us for your project
          </a>
        </div>

        {/* Espacio para el logo */}
        <div className="mt-12">
          <Image
            src="/logobotopia.svg" // Asegúrate de tener tu logo en la carpeta public
            alt="Botopia Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
