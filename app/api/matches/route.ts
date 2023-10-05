import prisma from "@/lib/prisma";

export async function GET() {
  const matches = await prisma.match.findMany()
  return Response.json(matches)
}

export async function POST(request: Request) {
  const data = await request.json()
  const match = await prisma.match.create({ data })
  console.log(match)

  return Response.json(match)
}