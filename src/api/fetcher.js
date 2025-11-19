import { rows, getTimeSeries } from "./mockData";

// emulate network delay
const delay = (ms) => new Promise(res => setTimeout(res, ms));

export async function fetchData({ queryKey }) {
  // queryKey: ["data", { q, from, to, page }]
  const [, params] = queryKey;
  await delay(250 + Math.random() * 300);
  // simple filter by search q
  const q = (params?.q || "").toLowerCase();
  const filtered = rows.filter(r => 
    r.name.toLowerCase().includes(q) ||
    r.org.toLowerCase().includes(q)
  );
  const page = params?.page || 1;
  const pageSize = params?.pageSize || 10;
  const start = (page - 1) * pageSize;
  return {
    total: filtered.length,
    rows: filtered.slice(start, start + pageSize)
  };
}

export async function fetchMetrics({ queryKey }) {
  // queryKey: ["metrics", id]
  const [, id] = queryKey;
  await delay(200 + Math.random() * 300);
  return getTimeSeries(id);
}
