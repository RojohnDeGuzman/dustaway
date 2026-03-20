import {
  Html,
  Head,
  Body,
  Heading,
  Text,
  Section,
  Hr,
} from "@react-email/components";
import * as React from "react";

type ConfirmationProps = {
  fullName: string;
  phoneNumber: string;
  email: string;
  message: string;
};

export default function Confirmation({
  fullName,
  phoneNumber,
  email,
  message,
}: ConfirmationProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "sans-serif", padding: "20px" }}>
        <Heading>Thanks for reaching out, {fullName}! 🎉</Heading>
        <Text>
          We've received your inquiry and will get back to you shortly.
        </Text>
        <Hr />
        <Section>
          <Text>
            <strong>Full Name:</strong> {fullName}
          </Text>
          <Text>
            <strong>Phone Number:</strong> {phoneNumber}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Message:</strong> {message}
          </Text>
        </Section>
        <Hr />
        <Text style={{ color: "#888", fontSize: "12px" }}>
          — The Dustaway Team
        </Text>
      </Body>
    </Html>
  );
}
