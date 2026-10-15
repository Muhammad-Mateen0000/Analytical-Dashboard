import { RotateCcw } from "lucide-react";

function FilterSection({ filters, onChange, onClear }) {
  return (
    <section className="mt-6 lg:sticky lg:top-0 z-20 bg-transparent py-3">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
          {/* Timeframe */}
          <div className="w-full lg:w-48">
            <label
              htmlFor="timeframe"
              className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Timeframe
            </label>

            <select
              id="timeframe"
              name="timeframe"
              value={filters.timeframe}
              onChange={onChange}
              className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-950"
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
            </select>
          </div>

          {/* Industry */}
          <div className="w-full lg:w-52">
            <label
              htmlFor="industry"
              className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Industry
            </label>

            <select
              id="industry"
              name="industry"
              value={filters.industry}
              onChange={onChange}
              className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-950"
            >
              <option>All Industries</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Retail</option>
            </select>
          </div>

          {/* Region */}
          <div className="w-full lg:w-52">
            <label
              htmlFor="region"
              className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Region
            </label>

            <select
              id="region"
              name="region"
              value={filters.region}
              onChange={onChange}
              className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-950"
            >
              <option>All Regions</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia</option>
              <option>Middle East</option>
            </select>
          </div>

          {/* Clear Filters */}
          <button
            type="button"
            onClick={onClear}
            className="h-10 px-4 rounded-lg border border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw size={16} />
            Clear Filters
          </button>
        </div>
      </div>
    </section>
  );
}

export default FilterSection;