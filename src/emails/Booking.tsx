import {
  Html,
  Head,
  Body,
  Heading,
  Text,
  Section,
  Hr,
  Button,
  Img,
  Container,
} from "@react-email/components";
import * as React from "react";

type BookingProps = {
  bookingId: string;
  serviceTitle: string;
  date: string;
  time: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  baseUrl?: string;
};

export default function Booking({
  bookingId,
  serviceTitle,
  date,
  time,
  fullName,
  phoneNumber,
  email,
  address,
  baseUrl,
}: BookingProps) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "#FFDBDB",
          fontFamily: "'DM Sans', sans-serif",
          margin: 0,
          padding: "40px 0",
        }}
      >
        <Container style={{ maxWidth: "560px", margin: "0 auto" }}>
          {/* Header */}
          <Section
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px 20px 0 0",
              padding: "32px 40px 24px",
              borderBottom: "1px solid #FFDBDB",
              textAlign: "center",
            }}
          >
            <Img
              src="https://res.cloudinary.com/dkuzqeafz/image/upload/f_auto,q_auto/dustaway-logo_cj5nth"
              alt="Dustaway feather logo"
              width="42"
              height="42"
              style={{ margin: "0 auto 10px", display: "block" }}
            />
            <Heading
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "26px",
                color: "#2c2c2a",
                margin: "0 0 4px",
              }}
            >
              Dustaway
            </Heading>
            <Text style={{ fontSize: "13px", color: "#a89890", margin: 0 }}>
              Professional Cleaning Services
            </Text>
          </Section>

          {/* Hero */}
          <Section style={{ backgroundColor: "#fff", padding: "32px 40px 0" }}>
            <Heading
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "22px",
                color: "#2c2c2a",
                margin: "0 0 8px",
              }}
            >
              Your booking is confirmed, {fullName}! ✨
            </Heading>
            <Text
              style={{
                fontSize: "15px",
                color: "#5a5854",
                lineHeight: "1.7",
                margin: "0 0 24px",
              }}
            >
              We're looking forward to serving you. Here's a summary of your
              upcoming appointment.
            </Text>

            <Hr style={{ borderColor: "#FFDBDB", margin: "0 0 24px" }} />

            {/* Booking Details */}
            <Text
              style={{
                fontSize: "11px",
                fontWeight: "600",
                color: "#a89890",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                margin: "0 0 14px",
              }}
            >
              Booking Details
            </Text>
            <Section
              style={{
                backgroundColor: "#FFF4F4",
                borderRadius: "12px",
                padding: "20px 24px",
                borderLeft: "4px solid #c5dfc2",
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  color: "#5a5854",
                  margin: "0 0 8px",
                }}
              >
                <strong style={{ color: "#2c2c2a" }}>Booking ID:</strong>{" "}
                {bookingId}
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  color: "#5a5854",
                  margin: "0 0 8px",
                }}
              >
                <strong style={{ color: "#2c2c2a" }}>Service:</strong>{" "}
                {serviceTitle}
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  color: "#5a5854",
                  margin: "0 0 8px",
                }}
              >
                <strong style={{ color: "#2c2c2a" }}>Date:</strong> {date}
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  color: "#5a5854",
                  margin: "0 0 8px",
                }}
              >
                <strong style={{ color: "#2c2c2a" }}>Time:</strong> {time}
              </Text>
              <Text style={{ fontSize: "14px", color: "#5a5854", margin: 0 }}>
                <strong style={{ color: "#2c2c2a" }}>Address:</strong> {address}
              </Text>
            </Section>

            <Hr style={{ borderColor: "#FFDBDB", margin: "24px 0" }} />

            {/* Customer Details */}
            <Text
              style={{
                fontSize: "11px",
                fontWeight: "600",
                color: "#a89890",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                margin: "0 0 14px",
              }}
            >
              Your Details
            </Text>
            <Section
              style={{
                backgroundColor: "#FFF4F4",
                borderRadius: "12px",
                padding: "20px 24px",
                borderLeft: "4px solid #FFDBDB",
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  color: "#5a5854",
                  margin: "0 0 8px",
                }}
              >
                <strong style={{ color: "#2c2c2a" }}>Name:</strong> {fullName}
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  color: "#5a5854",
                  margin: "0 0 8px",
                }}
              >
                <strong style={{ color: "#2c2c2a" }}>Phone:</strong>{" "}
                {phoneNumber}
              </Text>
              <Text style={{ fontSize: "14px", color: "#5a5854", margin: 0 }}>
                <strong style={{ color: "#2c2c2a" }}>Email:</strong> {email}
              </Text>
            </Section>
          </Section>
          <Section style={{ backgroundColor: "#fff", padding: "16px 40px 0" }}>
            <Text
              style={{
                fontSize: "14px",
                color: "#5a5854",
                lineHeight: "1.7",
                margin: 0,
                textAlign: "center",
                backgroundColor: "#FFF4F4",
                borderRadius: "12px",
                padding: "16px 20px",
              }}
            >
              We will confirm your appointment via email or WhatsApp!
            </Text>
          </Section>
          {/* CTA */}
          <Section
            style={{
              backgroundColor: "#fff",
              padding: "28px 40px 32px",
              textAlign: "center",
            }}
          >
            <Text
              style={{ fontSize: "14px", color: "#5a5854", margin: "0 0 20px" }}
            >
              Need to make changes or have questions? We're here to help.
            </Text>
            <Button
              href="https://dustaway.com"
              style={{
                backgroundColor: "#7cb87a",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Visit our website
            </Button>
          </Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: "#FFDBDB",
              borderRadius: "0 0 20px 20px",
              padding: "20px 40px",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                fontSize: "12px",
                color: "#a89890",
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              You're receiving this because you made a booking on our website.
              <br />© 2025 Dustaway. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
