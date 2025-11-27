"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

import Sidebar from "@/components/docs/SideBar";
import MobileSidebar from "@/components/docs/MobileSidebar";
import FeatureCard from "@/components/docs/FeatureCard";
import { Menu } from "lucide-react";

export default function GetStartedPage() {
  const [selected, setSelected] = useState("Overview");
  const [activeTop, setActiveTop] = useState("Get Started");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full bg-slate-50 min-h-screen">

      {/* ---------------- MOBILE SIDEBAR ---------------- */}
      <MobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        selected={selected}
        onSelect={setSelected}
      />

      {/* ---------------- DESKTOP LAYOUT ---------------- */}
      <div className="mx-auto flex flex-col md:flex-row max-w-[1500px] gap-4 px-4 sm:px-6 md:px-8 pt-6 pb-12">

        {/* SIDEBAR */}
        <Sidebar selected={selected} onSelect={setSelected} />

        {/* ---------------- MAIN CONTENT ---------------- */}
        <main className="flex-1 max-w-5xl py-2 md:py-4">

          {/* SEARCH BAR (slightly lifted) */}
          <section className="mb-6">
            {/* Mobile: menu + search inline to prevent overlap */}
            <div className="md:hidden flex items-center gap-3">
              <button
                className="p-2 rounded-lg bg-white border shadow-sm"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search RefreeG..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-8 w-full rounded-full border border-gray-200 bg-white pl-8 pr-3 text-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A2A5C]/10"
                />
              </div>
            </div>

            {/* Desktop: centered search control */}
            <div className="hidden md:flex justify-center w-full mt-1">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search RefreeG..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-9 w-full rounded-full border border-gray-200 bg-white pl-9 pr-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A2A5C]/10"
                />
              </div>
            </div>
          </section>

          {/* ---------------- TOP TABS ---------------- */}
          <nav className="mb-3 border-b border-gray-200 -mx-4 md:mx-0 px-4 md:px-0">
            <ul className="flex gap-6 md:gap-16 text-[15px] md:text-[18px] font-medium overflow-x-auto pb-1 whitespace-nowrap">
              {["Get Started", "Policy Centre", "Platform Fees", "Revenue"].map(
                (tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => setActiveTop(tab)}
                      className={`pb-1 md:pb-2 px-1 transition-colors ${
                        activeTop === tab
                          ? "border-b-2 border-[#0A2A5C] text-[#0A2A5C] font-semibold"
                          : "text-gray-700 hover:text-[#0A2A5C]"
                      }`}
                    >
                      {tab}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* ---------------- PAGE HEADER ---------------- */}
          <h1 className="text-[26px] font-semibold text-gray-900">Introduction</h1>
          <p className="text-[15px] sm:text-[16px] mt-2 text-gray-600">
            Get familiar with crowdfunding and its countless applications
          </p>

          {/* ---------------- SECTION DIVIDER ---------------- */}
          <h2 className="mt-8 text-[18px] font-semibold text-gray-900">
            Welcome to RefreeG
          </h2>
          <hr className="my-4 border-gray-200" />

          {/* ---------------- BODY TEXT ---------------- */}
          <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-gray-700">
            RefreeG is Africa's people-powered crowdfunding platform built to help individuals, creators, and communities raise funds for causes that matter, transparently and securely.
Whether you're an NGO driving social impact, a student raising funds for a project, or a creator looking to build community support, RefreeG gives you the tools to make it happen.
Our platform combines blockchain-powered transparency, real-time impact tracking, and onchain yielding so you and your supporters can see exactly how every donation makes a difference.
          </p>

          {/* ---------------- BULLET LIST ---------------- */}
          <p className="mt-5 text-[15px] text-gray-700">
            This guide will walk you through everything you need to get started:
          </p>
          <ul className="mt-2 pl-5 list-disc text-[15px] text-gray-700 space-y-2">
            <li>How to create an account and verify your identity</li>
            <li>How to start your first cause or campaign</li>
            <li>How to receive and manage donations</li>
            <li>How to track performance and earnings</li>
            <li>How to build trust and grow your community</li>
          </ul>

          {/* ---------------- WHY BOX ---------------- */}
          <section className="mt-8 bg-white border shadow-sm rounded-xl p-6">
            <h3 className="text-[16px] font-semibold text-gray-900">
              Why RefreeG?
            </h3>

            <p className="mt-3 text-[15px] text-gray-700 leading-relaxed">
              We believe crowdfunding should build trust, empower change,
              and create sustainable impact.
            </p>

            {/* CTA BUTTON WITH ANIMATION */}
            <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-600 group">
              <span className="transition-all group-hover:translate-x-1">
                Start your campaign
              </span>
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h11m-4-4 4 4-4 4"
                />
              </svg>
            </button>
          </section>

          {/* ---------------- FEATURE CARDS ---------------- */}
          <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <FeatureCard
              img="/images/earn.png"
              text="Earn on-chain yields on your received donations."
            />
            <FeatureCard
              img="/images/verify.png"
              text="Show transparency through blockchain-verified transactions."
            />
            <FeatureCard
              img="/images/bell.png"
              text="Launch verified causes that inspire supporters to act."
            />
          </section>

        </main>
      </div>
    </div>
  );
}
