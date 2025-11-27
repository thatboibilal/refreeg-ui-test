"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import {
  Home,
  FileText,
  Users,
  HeartHandshake,
  LifeBuoy,
} from "lucide-react";

export default function Sidebar({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (label: string) => void;
}) {
  const items = [
    { label: "Overview", icon: Home },
    { label: "Introduction", icon: FileText },
    { label: "For Fundraisers", icon: Users },
    { label: "For Donors", icon: HeartHandshake },
    { label: "Support", icon: LifeBuoy },
  ];

  return (
    <aside className="hidden md:block w-64 min-h-screen border-r bg-white py-6">
      <ul className="space-y-2 px-3">
        {items.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            selected={selected}
            onSelect={onSelect}
            icon={item.icon}
          />
        ))}
      </ul>
    </aside>
  );
}
