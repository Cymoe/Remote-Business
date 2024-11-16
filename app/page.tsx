'use client';

import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

interface Arc {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

const GlobeDemo: React.FC = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs: Arc[] = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    // ... rest of the arcs remain the same
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link className="flex items-center space-x-2" href="/">
              <Image src="/logo.png" alt="Remote Business Logo" width={24} height={24} />
              <span className="font-bold text-xl">Remote Business</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link className="hover:text-primary transition-colors" href="#">
                Features
              </Link>
              <Link className="hover:text-primary transition-colors" href="#">
                About
              </Link>
              <Link className="hover:text-primary transition-colors" href="#">
                Contact
              </Link>
              <Button variant="outline" size="default" className="border-white/20 hover:bg-white/10">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Globe Section */}
      <div className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative z-20 pt-24 text-center"
          >
            <h2 className="text-center text-xl md:text-4xl font-bold text-white">
              We sell soap worldwide
            </h2>
            <p className="text-center text-base md:text-lg font-normal text-neutral-200 max-w-md mt-2 mx-auto">
              This globe is interactive and customizable. Have fun with it, and
              don&apos;t forget to share it. :)
            </p>
          </motion.div>
          <div className="absolute inset-0 z-10">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center relative">
          <div className="animated-shape absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="animated-shape absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl" />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Build and Scale Remote Business to Unlock
            <span className="text-purple-400 block mt-2">Location Independence</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Build, buy, and operate multiple businesses from a distance.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="default" size="lg" className="bg-primary border-2 border-white hover:bg-primary/90 w-36">
              View Businesses
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 bg-white/10 hover:bg-white/10 w-36 flex items-center justify-center">
              Get Access
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>

      {/* Testimonials */}
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Remote Business. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link className="text-gray-400 hover:text-white transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="text-gray-400 hover:text-white transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-gray-400 hover:text-white transition-colors" href="#">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GlobeDemo;

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export const testimonials = [
  {
    quote:
      "This platform has transformed how we operate our remote business. The tools and insights are invaluable.",
    name: "Sarah Chen",
    title: "CEO of RemoteFirst",
  },
  {
    quote:
      "The global reach and seamless integration have helped us scale beyond our expectations.",
    name: "Michael Rodriguez",
    title: "Founder of DigitalNomads",
  },
  {
    quote:
      "Outstanding support and innovative features. It's been a game-changer for our distributed team.",
    name: "Emma Thompson",
    title: "COO of CloudWorks",
  },
];
