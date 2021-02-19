import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useCurrentUser } from "../hooks/index.js";
import Navbar from "./Navbar.js";
import GoogleFonts from "next-google-fonts";




export default function Layout({ children }) {
  return (
    <>
      {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;1,700&display=swap"/> */}
      <Head>
        <title>House Of 12</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
        />
        <meta property="og:title" content="Next.js + MongoDB App" />
        <meta
          property="og:description"
          content="nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
        />
        <meta
          property="og:image"
          content="https://repository-images.githubusercontent.com/201392697/5d392300-eef3-11e9-8e20-53310193fbfd"
        />
      </Head>
      <header>{/* <Navbar /> */}</header>

      <main>{children}</main>

      <footer></footer>
    </>
  );
}
