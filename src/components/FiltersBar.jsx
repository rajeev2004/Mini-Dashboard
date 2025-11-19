import React from "react";

export default function FiltersBar({ q, setQ }) {
  return (
    <div className="flex items-center gap-4 w-full">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search datasources or org..."
        className="flex-1 px-3 py-2 rounded-lg border shadow-sm focus:ring-2 focus:ring-primary"
      />
      <select className="px-3 py-2 rounded-lg border">
        <option value="">This 14 days</option>
      </select>
      <button
        onClick={() => setQ("")}
        className="px-3 py-2 bg-white border rounded-lg hover:bg-gray-50"
      >
        Reset
      </button>
    </div>
  );
}
