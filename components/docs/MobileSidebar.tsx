"use client";

import React from "react";
import {
  X,
  Home,
  FileText,
  Users,
  HeartHandshake,
  LifeBuoy,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function MobileSidebar({
  open,
  selected,
  onSelect,
  onClose,
}) {
  const items = [
    { label: "Overview", icon: Home },
    { label: "Introduction", icon: FileText },
    { label: "For Fundraisers", icon: Users },
    { label: "For Donors", icon: HeartHandshake },
    { label: "Support", icon: LifeBuoy },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* dark overlay */}
      <div
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={onClose}
      />

      {/* slide-in panel */}
      <aside
        className={`absolute left-0 top-0 h-full w-72 max-w-[80%] bg-white p-6 border-r shadow-xl
        transition-transform duration-300 ease-out overflow-y-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-[17px] font-semibold text-gray-900">
            Menu
          </span>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <ul className="space-y-2">
          {items.map(({ label, icon }) => (
            <SidebarItem
              key={label}
              label={label}
              icon={icon}
              selected={selected}
              onSelect={(l) => {
                onSelect(l);
                onClose();
              }}
            />
          ))}
        </ul>
      </aside>
    </div>
  );
}
