'use client'

import Image from "next/image";
import LoginForm from "@/components/login_form";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [opt, setOpt] = useState<'player' | 'gym'>('player')

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50 flex-col">
      <div className="flex mb-4">
        <button onClick={() => setOpt('gym')} className={`mr-5 text-gray-400 hover:text-black ${opt === 'gym' ? '!text-black' : ''}`}>Ginásio</button>
        <button onClick={() => setOpt('player')} className={`mr-5 text-gray-400 hover:text-black ${opt === 'player' ? '!text-black' : ''}`}>Jogador</button>
      </div>
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <Image
              src="/logo.png"
              priority
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </Link>
          <h3 className="text-xl font-semibold">Entrar</h3>   
          <p className="text-sm text-gray-500">
            Use seu email e senha para entrar
          </p>
        </div>
        <LoginForm type={opt} />
      </div>
    </div>
  );
}
