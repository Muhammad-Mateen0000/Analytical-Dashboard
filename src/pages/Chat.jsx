import { Send, User } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";

function Chat() {
  return (
    <DashboardLayout>
      <div>
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Messages
          </h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage your conversations and messages.
          </p>
        </div>

        {/* Chat Container */}
        <div className="mt-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
          {/* Chat Header */}
          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
              <User
                size={19}
                className="text-gray-600 dark:text-gray-200"
              />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Support Team
              </h2>

              <p className="text-xs text-green-600">
                Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[400px] p-5 space-y-4 overflow-y-auto">
            {/* Received Message */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center shrink-0">
                <User
                  size={15}
                  className="text-gray-600 dark:text-gray-200"
                />
              </div>

              <div className="max-w-[75%]">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-3">
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    Hello! How can we help you today?
                  </p>
                </div>

                <p className="mt-1 text-[11px] text-gray-400">
                  10:30 AM
                </p>
              </div>
            </div>

            {/* Sent Message */}
            <div className="flex items-start justify-end">
              <div className="max-w-[75%]">
                <div className="bg-blue-600 rounded-lg px-4 py-3">
                  <p className="text-sm text-white">
                    I would like to know more about my analytics report.
                  </p>
                </div>

                <p className="mt-1 text-[11px] text-gray-400 text-right">
                  10:32 AM
                </p>
              </div>
            </div>

            {/* Received Message */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center shrink-0">
                <User
                  size={15}
                  className="text-gray-600 dark:text-gray-200"
                />
              </div>

              <div className="max-w-[75%]">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-3">
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    Sure, we can help you with that.
                  </p>
                </div>

                <p className="mt-1 text-[11px] text-gray-400">
                  10:33 AM
                </p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 h-10 px-4 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-950"
              />

              <button
                className="h-10 px-4 rounded-lg bg-blue-600 text-white flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Send size={17} />
                <span className="hidden sm:inline">
                  Send
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Chat;