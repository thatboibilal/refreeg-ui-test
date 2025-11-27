"use client";

export default function SidebarItem({
  label,
  icon: Icon,
  selected,
  onSelect,
}: {
  label: string;
  icon: any;
  selected: string;
  onSelect: (label: string) => void;
}) {
  const active = selected === label;

  return (
    <li
      onClick={() => onSelect(label)}
      className={`flex items-center gap-3 cursor-pointer pl-3 pr-3 py-2 rounded-lg
        ${active ? "bg-[#0A2A5C] text-white" : "text-gray-700 hover:bg-slate-100"}
      `}
    >
      <Icon size={18} />
      <span className="text-[15px]">{label}</span>
    </li>
  );
}
