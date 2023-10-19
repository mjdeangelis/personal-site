"use client";
import React, { useState, useEffect } from "react";
import { AwsRum, AwsRumConfig } from "aws-rum-web";

import { Navbar } from "./components/navbar";
import { inconsolata, montserrat } from "./fonts";
import "/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    try {
      const config: AwsRumConfig = {
        sessionSampleRate: 1,
        guestRoleArn:
          "arn:aws:iam::825742188465:role/RUM-Monitor-us-east-1-825742188465-2395165767961-Unauth",
        identityPoolId: "us-east-1:a38464f4-cdb4-4f5e-becc-951bf121cf99",
        endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
        telemetries: ["performance", "errors", "http"],
        allowCookies: true,
        enableXRay: false,
      };

      const APPLICATION_ID: string = "f6f239a7-d8c8-40d7-8933-b81b19ada031";
      const APPLICATION_VERSION: string = "1.0.0";
      const APPLICATION_REGION: string = "us-east-1";

      const awsRum: AwsRum = new AwsRum(
        APPLICATION_ID,
        APPLICATION_VERSION,
        APPLICATION_REGION,
        config
      );
    } catch (error) {
      // Ignore errors thrown during CloudWatch RUM web client initialization
      console.log("Error initializing CloudWatch RUM.", error);
    }
  }, []);
  return (
    <html
      lang='en'
      className={`${inconsolata.variable} ${montserrat.variable}`}
    >
      <head />
      <body>
        <div className='appContainer'>
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
