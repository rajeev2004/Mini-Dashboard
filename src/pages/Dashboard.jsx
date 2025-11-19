import React, { useState } from "react";
import FiltersBar from "../components/FiltersBar";
import DataTable from "../components/DataTable";
import TrendChart from "../components/TrendChart";
import DetailDrawer from "../components/DetailDrawer";
import { useQuery } from "@tanstack/react-query";
import { fetchData, fetchMetrics } from "../api/fetcher";

export default function Dashboard() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  // MAIN DATA FETCH — matches your fetchData({ queryKey })
  const { data, isLoading, error } = useQuery({
    queryKey: ["data", { q, page, pageSize: 10 }],
    queryFn: fetchData,
  });

  // METRICS FETCH — matches fetchMetrics({queryKey})
  const metricsQuery = useQuery({
    queryKey: ["metrics", selected?.id],
    queryFn: fetchMetrics,
    enabled: !!selected,
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mini Dashboard — Analytics</h1>
        <div className="text-sm text-muted">Demo · React + Tailwind</div>
      </div>

      <div className="mt-6">
        <FiltersBar q={q} setQ={setQ} />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2">
          <DataTable
            data={isLoading ? [] : data?.rows || []}
            onRowSelect={setSelected}
          />

          <div className="flex justify-between items-center mt-3">
            <div className="text-sm text-muted">
              Showing {data?.rows?.length || 0} of {data?.total || 0}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1 rounded border"
              >
                Prev
              </button>
              <button
                onClick={() => setPage((p) => p + 1)}
                className="px-3 py-1 rounded bg-primary text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div>
          <TrendChart
            series={metricsQuery.data || []}
            title={selected ? `${selected.name} · Users` : "Global Trend"}
          />
        </div>
      </div>

      <DetailDrawer item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
