import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// GET - Fetch all contact messages
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error("GET Contact Error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch contacts.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

// POST - Save a new contact message
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      subject,
      message,
    } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        company,
        subject,
        message,
      },
    });

    return NextResponse.json(
      {
        message: "Message submitted successfully.",
        contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Contact Error:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
// DELETE - Delete a contact by ID
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    await prisma.contact.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      message: "Deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to delete",
      },
      {
        status: 500,
      }
    );
  }
}