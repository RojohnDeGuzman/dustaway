import {
  Body,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export type BookingEmailProps = {
  bookingId: string;
  serviceTitle: string;
  date: string;
  time: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  address?: string;
};

export default function Booking({
  bookingId,
  serviceTitle,
  date,
  time,
  fullName,
  email,
  phoneNumber,
  address,
}: BookingEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "sans-serif", padding: "20px" }}>
        <Heading>Booking confirmed for {fullName}</Heading>
        <Text>We've received your cleaning booking request.</Text>
        <Hr />
        <Section>
          <Text>
            <strong>Booking ID:</strong> {bookingId}
          </Text>
          <Text>
            <strong>Service:</strong> {serviceTitle}
          </Text>
          <Text>
            <strong>Date:</strong> {date}
          </Text>
          <Text>
            <strong>Time:</strong> {time}
          </Text>
          <Text>
            <strong>Full Name:</strong> {fullName}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Phone Number:</strong> {phoneNumber}
          </Text>
          {address ? (
            <Text>
              <strong>Address:</strong> {address}
            </Text>
          ) : null}
        </Section>
        <Hr />
        <Text style={{ color: "#888", fontSize: "12px" }}>
          Dustaway booking confirmation
        </Text>
      </Body>
    </Html>
  );
}
