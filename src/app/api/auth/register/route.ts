import type { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export const POST = async (request: NextRequest) => {
  const body: User = await request.json();
  console.log(body);
  
  const createUser = await prisma.user.create({
    data: {
        name: body.name,
        email: body.email,
        nohp: body.nohp,
        password: body.password,
        role: body.role,
    },
  });
  return NextResponse.json(createUser, { status: 201 });
};
