// small mock dataset and metrics
export const rows = Array.from({ length: 24 }).map((_, i) => ({
  id: `ds-${i+1}`,
  name: `Datasource ${i+1}`,
  org: i % 3 === 0 ? "Acme" : i % 3 === 1 ? "Nimbus" : "Supra",
  users: Math.floor(50 + Math.random() * 450),
  revenue: Number((Math.random() * 2000 + 200).toFixed(2)),
  conversionRate: Number((Math.random() * 5 + 0.5).toFixed(2)),
  updatedAt: new Date(Date.now() - i * 86400000).toISOString().slice(0,10)
}));

export function getTimeSeries(id) {
  // generate last 14 days
  const now = new Date();
  return Array.from({ length: 14 }).map((_, i) => {
    const ts = new Date(now.getTime() - (13 - i) * 24 * 3600 * 1000);
    return {
      ts: ts.toISOString().slice(0,10),
      value: Math.floor(50 + Math.random() * 300) + (id ? id.length * 2 : 0)
    };
  });
}
