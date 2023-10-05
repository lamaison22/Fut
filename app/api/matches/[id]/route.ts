import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number.parseInt(params.id)

  if (Number.isNaN(id)) {
    return Response.json({ error: "Not found." }, { status: 404 })
  }

  const match = await prisma.match.findUnique({ where: { id } })
  return Response.json(match)
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number.parseInt(params.id)

  if (Number.isNaN(id)) {
    return Response.json({ error: "Not found." }, { status: 404 })
  }

  const data = await request.json()
  const match = await prisma.match.update({ where: { id }, data })

  return Response.json(match)
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number.parseInt(params.id)

  if (Number.isNaN(id)) {
    return Response.json({ error: "Not found." }, { status: 404 })
  }

  const match = await prisma.match.delete({ where: { id } })
  return Response.json(match)
}