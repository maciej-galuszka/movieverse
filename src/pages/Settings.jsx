import { useDispatch, useSelector } from "react-redux";
import { updateSettings, selectSettings } from "../features/auth/authSlice";

function Settings() {
  const dispatch = useDispatch();
  const settings = useSelector(selectSettings);

  const options = [
    { key: "notifications", label: "Notifications" },
    { key: "emailUpdates", label: "Email Updates" },
    { key: "locationAccess", label: "Location Access" },
    { key: "saveHistory", label: "Save Watch History" },
  ];

  const handleToggle = (key) => {
    dispatch(updateSettings({ key }));
  };

  return (
    <section className="mx-auto h-full max-w-4xl px-12 pb-6 pt-12 text-white">
      <h1 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-4xl">Settings</h1>

      <div className="flex flex-col gap-4 sm:gap-6">
        {options.map((option) => (
          <div
            key={option.key}
            className="relative cursor-pointer rounded-xl bg-lightGray px-4 py-3 shadow-lg transition-transform duration-200 hover:scale-[1.015] hover:shadow-2xl sm:px-6 sm:py-5"
            onClick={() => handleToggle(option.key)}
          >
            <h2 className="text-md mb-2 font-semibold sm:text-xl">{option.label}</h2>

            <p className="text-sm text-gray-300 sm:text-lg">
              {settings[option.key] ? "Enabled" : "Disabled"}
            </p>

            <div
              className={`absolute right-6 top-6 h-5 w-5 rounded-full border-2 ${
                settings[option.key]
                  ? "border-green-400 bg-green-400"
                  : "border-gray-500 bg-gray-700"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Settings;
