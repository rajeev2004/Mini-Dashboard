import React from "react";

export default function DetailDrawer({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="fixed right-6 top-20 w-80 bg-white rounded-xl shadow-lg border p-4 z-50">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold">{item.name}</h4>
        <button onClick={onClose} className="text-muted">Close</button>
      </div>
      <p className="text-sm text-muted">{item.org} • updated {item.updatedAt}</p>
      <div className="mt-3">
        <p className="text-sm"><strong>Users:</strong> {item.users}</p>
        <p className="text-sm"><strong>Revenue:</strong> ${item.revenue}</p>
        <p className="text-sm"><strong>Conversion:</strong> {item.conversionRate}%</p>
      </div>
    </div>
  );
}
