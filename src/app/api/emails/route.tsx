import Booking from "@/emails/Booking";
import Inquiry from "@/emails/Inquiry";
import InternalInquiry from "@/emails/InternalInquiry";
import InternalBooking from "@/emails/InternalBooking";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CS_EMAIL = "maariannalacbayo.va@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type = "inquiry" } = body;

    if (type === "booking") {
      const {
        bookingId,
        serviceTitle,
        date,
        time,
        fullName,
        email,
        phoneNumber,
        address,
      } = body;

      const { error: customerError } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Your booking is confirmed",
        react: (
          <Booking
            bookingId={bookingId}
            serviceTitle={serviceTitle}
            date={date}
            time={time}
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
          />
        ),
      });

      if (customerError) {
        console.error("Resend booking error:", customerError);
        return NextResponse.json({ error: customerError }, { status: 500 });
      }

      const { error: internalError } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: CS_EMAIL,
        subject: `New Booking from ${fullName}`,
        react: (
          <InternalBooking
            bookingId={bookingId}
            serviceTitle={serviceTitle}
            date={date}
            time={time}
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
          />
        ),
      });

      if (internalError) {
        console.error("Internal booking email error:", internalError);
        return NextResponse.json({ error: internalError }, { status: 500 });
      }

      return NextResponse.json({ success: true }, { status: 200 });
    }

    // --- INQUIRY ---
    const { fullName, phoneNumber, email, message } = body;

    const { error: customerError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "We've received your inquiry!",
      react: (
        <Inquiry
          fullName={fullName}
          phoneNumber={phoneNumber}
          email={email}
          message={message}
        />
      ),
    });

    if (customerError) {
      console.error("Resend inquiry error:", customerError);
      return NextResponse.json({ error: customerError }, { status: 500 });
    }

    const { error: internalError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: CS_EMAIL,
      subject: `New Inquiry from ${fullName}`,
      react: (
        <InternalInquiry
          fullName={fullName}
          phoneNumber={phoneNumber}
          email={email}
          message={message}
        />
      ),
    });

    if (internalError) {
      console.error("Internal inquiry email error:", internalError);
      return NextResponse.json({ error: internalError }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
