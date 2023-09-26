import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          width={812}
          height={812}
          src="/Logotipo.jpg"
          alt="Logotipo Luiz no crack"
          className="w-48 h-48 m-5"
        />
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">
            Clube do Fut
          </h1>
        </div>
        
        <div>
          <Link href="/login">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-10">
            Entrar
            </button>
          </Link>

          <Link href="/register">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Registrar
            </button>
          </Link>
        </div>
      </div>

    </div>
    
  );
}
