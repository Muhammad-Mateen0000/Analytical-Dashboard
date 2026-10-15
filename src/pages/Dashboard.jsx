import { useMemo, useState } from "react";
import { DollarSign, Users, Activity } from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import DashboardLayout from "../components/layout/DashboardLayout";
import KPICard from "../components/dashboard/KPICard";
import FilterSection from "../components/dashboard/FilterSection";
import ChartCard from "../components/dashboard/ChartCard";
import UsersTable from "../components/dashboard/UsersTable";

import { userGrowthData, regionData, deviceData } from "../data/dummyData";

function Dashboard() {
  const [filters, setFilters] = useState({
    timeframe: "30",
    industry: "All Industries",
    region: "All Regions",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      timeframe: "30",
      industry: "All Industries",
      region: "All Regions",
    });
  };

  const filteredRegionData = useMemo(() => {
    if (filters.region === "All Regions") {
      return regionData;
    }

    return regionData.filter((item) => item.region === filters.region);
  }, [filters.region]);

  const filteredGrowthData = useMemo(() => {
    if (filters.timeframe === "7") {
      return userGrowthData.slice(-2);
    }

    if (filters.timeframe === "90") {
      return [
        ...userGrowthData,
        { date: "Oct 5", users: 8750 },
        { date: "Oct 10", users: 9100 },
        { date: "Oct 15", users: 9580 },
      ];
    }

    return userGrowthData;
  }, [filters.timeframe]);

  const totalUsers = useMemo(() => {
    const regionUsers = filteredRegionData.reduce(
      (total, item) => total + item.users,
      0,
    );

    if (filters.industry === "All Industries") {
      return regionUsers;
    }

    return Math.round(regionUsers * 0.82);
  }, [filteredRegionData, filters.industry]);

  const userSignups = useMemo(() => {
    if (filters.timeframe === "7") {
      return Math.round(totalUsers * 0.08);
    }

    if (filters.timeframe === "90") {
      return Math.round(totalUsers * 0.2);
    }

    return Math.round(totalUsers * 0.15);
  }, [filters.timeframe, totalUsers]);

  const activeSessions = useMemo(() => {
    return Math.round(totalUsers * 0.14);
  }, [totalUsers]);

  const revenue = useMemo(() => {
    const baseRevenue = totalUsers * 2.91;

    return Math.round(baseRevenue).toLocaleString();
  }, [totalUsers]);

  return (
    <DashboardLayout>
      <div>
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Analytics Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Overview of your analytics and performance.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <KPICard
            title="Revenue"
            value={`$${revenue}`}
            change="+12.5%"
            trend="up"
            icon={DollarSign}
          />

          <KPICard
            title="User Signups"
            value={userSignups.toLocaleString()}
            progress={78}
          />

          <KPICard
            title="Total Users"
            value={totalUsers.toLocaleString()}
            icon={Users}
          />

          <KPICard
            title="Active Sessions"
            value={activeSessions.toLocaleString()}
            icon={Activity}
          />
        </div>

        {/* Filters */}
        <FilterSection
          filters={filters}
          onChange={handleFilterChange}
          onClear={clearFilters}
        />

        {/* Charts */}
        <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* User Growth */}
          <div className="xl:col-span-2">
            <ChartCard title="User Growth Over Time" action="Report">
              <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={filteredGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />

                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />

                    <YAxis tick={{ fontSize: 12 }} />

                    <Tooltip />

                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke="#2563eb"
                      fill="#dbeafe"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </div>

          {/* Top Regions */}
          <ChartCard title="Top Regions" action="Download">
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredRegionData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />

                  <XAxis dataKey="region" tick={{ fontSize: 12 }} />

                  <YAxis tick={{ fontSize: 12 }} />

                  <Tooltip />

                  <Bar dataKey="users" fill="#2563eb" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          {/* Device Types */}
          <ChartCard title="User Device Types" action="Report">
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    <Cell fill="#2563eb" />
                    <Cell fill="#60a5fa" />
                    <Cell fill="#93c5fd" />
                  </Pie>

                  <Tooltip />

                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>

        {/* Users Table */}
        <UsersTable />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
