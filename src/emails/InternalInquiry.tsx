import {
  Html,
  Head,
  Body,
  Heading,
  Text,
  Section,
  Hr,
  Button,
} from "@react-email/components";
import * as React from "react";

type InternalInquiryProps = {
  fullName: string;
  phoneNumber: string;
  email: string;
  message: string;
};

export default function InternalInquiry({
  fullName,
  phoneNumber,
  email,
  message,
}: InternalInquiryProps) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: "sans-serif",
          padding: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Section
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "24px",
          }}
        >
          <Heading style={{ color: "#2d6a4f", fontSize: "20px" }}>
            📋 New Customer Inquiry
          </Heading>
          <Text style={{ color: "#555" }}>
            A new inquiry has been submitted through the Dustaway website.
            Details below:
          </Text>

          <Hr />

          <Heading
            as="h2"
            style={{
              fontSize: "14px",
              color: "#888",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Customer Details
          </Heading>
          <Text>
            <strong>Full Name:</strong> {fullName}
          </Text>
          <Text>
            <strong>Phone Number:</strong> {phoneNumber}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>

          <Hr />

          <Heading
            as="h2"
            style={{
              fontSize: "14px",
              color: "#888",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Message
          </Heading>
          <Section
            style={{
              backgroundColor: "#f0f4f0",
              borderLeft: "4px solid #2d6a4f",
              padding: "12px 16px",
              borderRadius: "4px",
            }}
          >
            <Text style={{ margin: 0, color: "#333" }}>{message}</Text>
          </Section>

          <Hr />

          <Button
            href={`mailto:${email}?subject=Re: Your Dustaway Inquiry&body=Hi ${fullName},%0D%0A%0D%0AThank you for reaching out!`}
            style={{
              backgroundColor: "#2d6a4f",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Reply to {fullName}
          </Button>

          <Hr />
          <Text style={{ color: "#aaa", fontSize: "11px" }}>
            This is an internal notification from Dustaway. Do not forward this
            email.
          </Text>
        </Section>
      </Body>
    </Html>
  );
}
