import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { ip, userAgent, path } = await req.json();
    
    // Check if we already logged this IP in the last 10 minutes to avoid spam
    const recentLog = await prisma.visitorLog.findFirst({
      where: {
        ip,
        path,
        createdAt: {
          gte: new Date(Date.now() - 10 * 60 * 1000)
        }
      }
    });

    if (!recentLog) {
      await prisma.visitorLog.create({
        data: {
          ip: ip ?? "Unknown",
          userAgent: userAgent ?? "",
          path: path ?? "",
        }
      });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Tracking Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
