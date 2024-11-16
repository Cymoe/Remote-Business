"use client";
 
import React from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
 
export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Build, Buy, and Operate Multiple Businesses from a Distance
        </h2>
        <div className="text-gray-300 text-lg space-y-4">
          <p>
            Liberate yourself from the shackles of wage slavery, focusing instead on high-value tasks rather than the mundane busywork of day-to-day operations.
          </p>
          <p>
            Use technology, people, and systems to work smarter, not harder, and build businesses that generate steady income on their own.
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <div className="bg-teal-600/30 p-4 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">Wealth Trifecta</h3>
              <ul className="text-gray-300 space-y-2">
                <li>💰 Money Wealth</li>
                <li>⏳ Time Wealth</li>
                <li>✈️ Location Wealth</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 italic text-gray-400">
            Think of this as a game. Prioritize cash flow goals over net worth goals.
          </p>
        </div>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
 
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
