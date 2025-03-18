"use client";
import { useState } from "react";
// Importing Switch from @headlessui/react
import { Switch } from "@headlessui/react"; // Assuming you are using Headless UI for Switch
import { Button } from "@/components/ui/button"; // Your custom Button component

export default function SettingsSupport() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    app: true,
  });

  const handleSupportSubmit = () => {
    // Add support request API call
    console.log("Support request sent");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Settings & Support</h1>

      {/* Notification Settings */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-medium mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Email Notifications</span>
            <Switch
              checked={notifications.email}
              onChange={(val) => setNotifications({ ...notifications, email: val })}
              className={`${
                notifications.email ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  notifications.email ? "translate-x-5" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
              />
            </Switch>
          </div>
          <div className="flex justify-between items-center">
            <span>SMS Notifications</span>
            <Switch
              checked={notifications.sms}
              onChange={(val) => setNotifications({ ...notifications, sms: val })}
              className={`${
                notifications.sms ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  notifications.sms ? "translate-x-5" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
              />
            </Switch>
          </div>
          <div className="flex justify-between items-center">
            <span>In-App Notifications</span>
            <Switch
              checked={notifications.app}
              onChange={(val) => setNotifications({ ...notifications, app: val })}
              className={`${
                notifications.app ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  notifications.app ? "translate-x-5" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
              />
            </Switch>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-medium mb-4">Contact Support</h3>
        <Button onClick={handleSupportSubmit}>Open Support Ticket</Button>
      </div>
    </div>
  );
}
