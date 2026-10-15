import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

function Sidebar({
  isCollapsed,
  setIsCollapsed,
  isMobileOpen,
  setIsMobileOpen,
}) {
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "Analytics", icon: BarChart3, active: false },
    { name: "Users", icon: Users, active: false },
    { name: "Settings", icon: Settings, active: false },
  ];

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-40
        bg-white dark:bg-gray-800
        border-r border-gray-200 dark:border-gray-700
        flex flex-col
        transition-all duration-300 ease-in-out
        ${isCollapsed ? "lg:w-[72px]" : "lg:w-60"}
        w-60
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      {/* Logo */}
      <div className="h-16 px-5 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="w-9 h-9 shrink-0 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
            A
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isCollapsed ? "lg:w-0 lg:ml-0" : "lg:w-auto lg:ml-3"
            }`}
          >
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">
              Analytics
            </span>
          </div>
        </div>

        {/* Mobile Close */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => {
                if (item.name === "Dashboard") {
                  window.location.href = "/";
                }
              }}
              className={`
                w-full flex items-center rounded-lg
                transition-colors
                ${isCollapsed ? "lg:justify-center lg:px-3" : "gap-3 px-3"}
                py-3
                ${
                  item.active
                    ? "bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-gray-100"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                }
              `}
            >
              <Icon size={20} className="shrink-0" />

              <span
                className={`
                  overflow-hidden whitespace-nowrap
                  transition-all duration-300
                  ${
                    isCollapsed
                      ? "lg:w-0 lg:opacity-0"
                      : "lg:w-auto lg:opacity-100"
                  }
                  text-sm font-medium
                `}
              >
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* User */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div
          className={`
            flex items-center
            ${isCollapsed ? "lg:justify-center" : "gap-3"}
          `}
        >
          <div className="w-9 h-9 shrink-0 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-semibold text-gray-700 dark:text-gray-200">
            MM
          </div>

          <div
            className={`
              overflow-hidden transition-all duration-300
              ${
                isCollapsed ? "lg:w-0 lg:opacity-0" : "lg:w-auto lg:opacity-100"
              }
            `}
          >
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">
              User
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
              Admin
            </p>
          </div>
        </div>
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-20 -right-3 z-10 w-7 h-7 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hidden lg:flex"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </aside>
  );
}

export default Sidebar;
