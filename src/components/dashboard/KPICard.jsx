import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function KPICard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  progress,
}) {
  const isPositive = trend === "up";

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            {value}
          </h2>
        </div>

        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Icon size={20} />
          </div>
        )}
      </div>

      {change && (
        <div className="mt-4 flex items-center gap-1">
          {isPositive ? (
            <ArrowUpRight size={16} className="text-green-600" />
          ) : (
            <ArrowDownRight size={16} className="text-red-600" />
          )}

          <span
            className={`text-sm font-semibold ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {change}
          </span>

          <span className="text-sm text-gray-500">
            from last period
          </span>
        </div>
      )}

      {progress !== undefined && (
        <div className="mt-4">
          <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-2 text-xs text-gray-500">
            {progress}% of target
          </p>
        </div>
      )}
    </div>
  );
}

export default KPICard;