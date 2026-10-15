import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  MessageSquare,
  Moon,
  Sun,
  User,
  Menu,
  Check,
  LogOut,
  Settings,
} from "lucide-react";

function Navbar({ setIsMobileOpen, isDarkMode, setIsDarkMode }) {
  const navigate = useNavigate();

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 flex items-center justify-between transition-colors duration-300">
      {/* Mobile Menu */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Search */}
      <div className="hidden sm:flex items-center w-full max-w-md">
        <div className="relative w-full">
          <Search
            size={19}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-950"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="relative p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Bell size={20} />

            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
          </button>

          {isNotificationOpen && (
            <div className="absolute right-0 top-12 z-50 w-80 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Notifications
                </h3>

                <span className="text-xs text-blue-600 font-medium">3 new</span>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                <div className="p-4 flex gap-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center shrink-0">
                    <User size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      New user signup
                    </p>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      A new user has joined the platform.
                    </p>

                    <p className="mt-1 text-[11px] text-gray-400">
                      5 minutes ago
                    </p>
                  </div>
                </div>

                <div className="p-4 flex gap-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="w-9 h-9 rounded-full bg-green-50 dark:bg-green-950/40 text-green-600 flex items-center justify-center shrink-0">
                    <Check size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Report generated
                    </p>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Your analytics report is ready.
                    </p>

                    <p className="mt-1 text-[11px] text-gray-400">
                      20 minutes ago
                    </p>
                  </div>
                </div>

                <div className="p-4 flex gap-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center shrink-0">
                    <Settings size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      System update
                    </p>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Dashboard data has been updated.
                    </p>

                    <p className="mt-1 text-[11px] text-gray-400">1 hour ago</p>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 text-sm font-medium text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700 border-t border-gray-200 dark:border-gray-700">
                View all notifications
              </button>
            </div>
          )}
        </div>

        {/* Messages */}
        <button
          onClick={() => navigate("/chat")}
          className="relative p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Open messages"
        >
          <MessageSquare size={20} />

          <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">
            3
          </span>
        </button>

        {/* Dark Mode */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* User */}
        <div className="relative">
          <button
            onClick={() => setIsUserOpen(!isUserOpen)}
            className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
              <User size={17} className="text-gray-600 dark:text-gray-200" />
            </div>

            <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-200">
              User
            </span>
          </button>

          {isUserOpen && (
            <div className="absolute right-0 top-12 z-50 w-52 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  User
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  admin@example.com
                </p>
              </div>

              <div className="p-2">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <User size={17} />
                  Profile
                </button>

                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <Settings size={17} />
                  Settings
                </button>

                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30">
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
