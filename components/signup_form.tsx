"use client";

import { useState } from "react";
import LoadingDots from "@/components/loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Form({ type }: { type: "player" | "gym" }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const inputs = [
    {
      id: "email",
      name: "Email",
      placeholder: "panic@thedis.co",
      autoComplete: "email",
      type: "email"
    },
    {
      id: "password",
      name: "Senha",
      type: "password"
    },
    {
      id: "name",
      name: "Nome",
      placeholder: "John Doe"
    },
    {
      id: "city_id",
      name: "ID da Cidade"
    },
    ...(type === "player" ? [] : [
      {
        id: "address",
        name: "Endereço",
        placeholder: "Rua exemplo, n 400"
      },
      {
        id: "phone",
        name: "Telefone",
        placeholder: "(99) 99999-9999"
      },
    ])
  ]

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            ...Object.fromEntries(inputs.map(i => [i.id, e.currentTarget[i.id].value]))
          }),
        }).then(async (res) => {
          setLoading(false);
          if (res.status === 200) {
            toast.success("Conta criada! Redirecionando para login...");
            setTimeout(() => {
              router.push("/login");
            }, 2000);
          } else {
            const { error } = await res.json();
            toast.error(error);
          }
        });
      }}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      {inputs.map(({ id, name, type, placeholder, autoComplete }) => (
        <div>
          <label
            htmlFor={name}
            className="block text-xs text-gray-600 uppercase"
          >
            {name}
          </label>
          <input
            id={id}
            name={name}
            type={type || "text"}
            placeholder={placeholder || ""}
            autoComplete={autoComplete || "none"}
            required
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
      ))}
      <button
        disabled={loading}
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border-black bg-black text-white hover:bg-white hover:text-black"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <LoadingDots color="#808080" />
        ) : (
          <p>Cadastrar</p>
        )}
      </button>
      <p className="text-center text-sm text-gray-600">
        Já possui uma conta?{" "}
        <Link href="/login" className="font-semibold text-gray-800">
          Entrar
        </Link>
      </p>
    </form>
  );
}
