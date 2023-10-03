import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { type, email, password, name, city_id, address, phone } = await req.json();
  const exists = await prisma.player.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  } else {
    const user = type === "player" ?
      await prisma.player.create({
        data: {
          name,
          city_id: Number(city_id),
          email,
          password: await hash(password, 10),
        },
      }) :
      await prisma.sports_Gym.create({
        data: {
          name,
          city_id: Number(city_id),
          email,
          address,
          phone: Number(phone),
          password: await hash(password, 10),
        },
      })
    
    return NextResponse.json(user);
  }
}
