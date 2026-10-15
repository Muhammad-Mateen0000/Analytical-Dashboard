import { useMemo, useState } from "react";
import {
  Search,
  Eye,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { usersData } from "../../data/dummyData";

function UsersTable() {
  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  // Search
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const search = searchTerm.toLowerCase();

      return (
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.country.toLowerCase().includes(search)
      );
    });
  }, [users, searchTerm]);

  // Sort
  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      const first = a[sortField].toLowerCase();
      const second = b[sortField].toLowerCase();

      if (first < second) {
        return sortOrder === "asc" ? -1 : 1;
      }

      if (first > second) {
        return sortOrder === "asc" ? 1 : -1;
      }

      return 0;
    });
  }, [filteredUsers, sortField, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(
    sortedUsers.length / usersPerPage
  );

  const startIndex = (currentPage - 1) * usersPerPage;

  const currentUsers = sortedUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }

    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== id)
    );

    setCurrentPage(1);
  };

  const handleView = (user) => {
    alert(
      `Name: ${user.name}\nEmail: ${user.email}\nCountry: ${user.country}\nStatus: ${user.status}`
    );
  };

  return (
    <section className="mt-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              Users
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage registered users.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search users..."
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-950"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <th
                onClick={() => handleSort("name")}
                className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase cursor-pointer hover:text-gray-900 dark:hover:text-white"
              >
                Name
              </th>

              <th
                onClick={() => handleSort("email")}
                className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase cursor-pointer hover:text-gray-900 dark:hover:text-white"
              >
                Email
              </th>

              <th
                onClick={() => handleSort("signupDate")}
                className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase cursor-pointer hover:text-gray-900 dark:hover:text-white"
              >
                Signup Date
              </th>

              <th
                onClick={() => handleSort("country")}
                className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase cursor-pointer hover:text-gray-900 dark:hover:text-white"
              >
                Country
              </th>

              <th
                onClick={() => handleSort("status")}
                className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase cursor-pointer hover:text-gray-900 dark:hover:text-white"
              >
                Status
              </th>

              <th className="px-5 py-3 text-right text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {user.name}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {user.email}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {user.signupDate}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {user.country}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleView(user)}
                        className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="View"
                      >
                        <Eye size={17} />
                      </button>

                      <button
                        onClick={() => handleDelete(user.id)}
                        className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-5 py-10 text-center text-sm text-gray-500 dark:text-gray-400"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-5 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Showing{" "}
          {sortedUsers.length === 0
            ? 0
            : startIndex + 1}{" "}
          to{" "}
          {Math.min(
            startIndex + usersPerPage,
            sortedUsers.length
          )}{" "}
          of {sortedUsers.length}
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.max(prev - 1, 1)
              )
            }
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={17} />
          </button>

          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {currentPage} / {Math.max(totalPages, 1)}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            disabled={
              currentPage === totalPages ||
              totalPages === 0
            }
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default UsersTable;