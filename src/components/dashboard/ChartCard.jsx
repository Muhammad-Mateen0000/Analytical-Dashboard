function ChartCard({ title, children, action }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
        <h2 className="text-base font-semibold text-gray-900">
          {title}
        </h2>

        {action && (
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            {action}
          </button>
        )}
      </div>

      <div className="p-5">
        {children}
      </div>
    </div>
  );
}

export default ChartCard;