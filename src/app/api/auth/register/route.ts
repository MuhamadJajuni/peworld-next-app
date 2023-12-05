// Import the register function from the correct module or file
import { register } from "@/lib/service";

import { NextRequest, NextResponse } from "next/server";

// Make the surrounding function async
export async function POST(request: NextRequest) {
    try {
        const req = await request.json();
        const res = await register(req);
        return NextResponse.json(
            { status: res.status, message: res.message },
            { status: res.statusCode }
        );
    } catch (error) {
        console.error("Error during POST request:", error);
        return NextResponse.json(
            { status: "error", message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
