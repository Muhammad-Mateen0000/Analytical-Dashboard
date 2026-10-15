import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;

      localStorage.setItem("theme", newValue ? "dark" : "light");

      return newValue;
    });
  };

  return (
    <div
      className={`
        min-h-screen transition-colors duration-300
        ${isDarkMode ? "dark bg-gray-950" : "bg-gray-50"}
      `}
    >
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {isMobileOpen && (
        <button
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          aria-label="Close sidebar"
        />
      )}

      <div
        className={`
          min-h-screen
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "lg:ml-[72px]" : "lg:ml-60"}
        `}
      >
        <Navbar
          setIsMobileOpen={setIsMobileOpen}
          isDarkMode={isDarkMode}
          setIsDarkMode={handleThemeToggle}
        />

        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
