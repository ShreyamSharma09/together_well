import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import NavBar from "../components/NavBar";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("general");
  const { authUser } = useAuthContext();

  const TabButton = ({ id, children }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full text-left py-2 px-4 rounded-lg transition duration-200 ${
        activeTab === id
          ? "bg-white font-semibold text-gray-800 shadow"
          : "hover:bg-gray-100 text-gray-600"
      }`}
    >
      {children}
    </button>
  );

  const Section = ({ id, children }) =>
    activeTab === id ? (
      <div className="p-4 bg-white rounded-xl shadow-md mt-4">{children}</div>
    ) : null;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <NavBar />
      <div className="max-w-5xl mx-auto p-24">
        <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
        <div className="flex gap-6">
          <div className="w-1/4 space-y-2">
            <TabButton id="general">General</TabButton>
            <TabButton id="Create-Family">Create Family</TabButton>
            <TabButton id="Join-Family">Join Family</TabButton>
          </div>

          <div className="w-3/4">
            <Section id="general">
              <div className="flex items-center space-x-4">
                <img
                  src={authUser.pfp}
                  alt="Avatar"
                  className="w-20 h-20 rounded-full object-cover border"
                />
                <div>
                  <label className="block cursor-pointer text-blue-600">
                    Personal Information
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="input w-full"
                    defaultValue={authUser.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Gender</label>
                  <input
                    type="text"
                    className="input w-full"
                    defaultValue={authUser.gender}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="text"
                    className="input w-full"
                    defaultValue={authUser.email}
                  />
                </div>
              </div>
            </Section>
            <Section id="Create-Family">
              <div className="space-y-4">
                <form class="space-y-4">
                  <div>
                    <label for="familyName" class="block font-semibold mb-1">
                      Family Name
                    </label>
                    <input
                      type="text"
                      id="familyName"
                      name="familyName"
                      class="w-full border border-black rounded px-2 py-1"
                      placeholder="Enter family name"
                    />
                  </div>

                  <div>
                    <label for="role" class="block font-semibold mb-1">
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      class="w-full border border-black rounded px-2 py-1"
                    >
                      <option value="father">Father</option>
                      <option value="mother">Mother</option>
                      <option value="child">Child</option>
                      <option value="guardian">Guardian</option>
                      <option value="individual">Individual</option>
                    </select>
                  </div>
                  <div className="text-right mt-6">
                <button className="btn bg-pink-600 hover:bg-pink-700 text-white mr-3 p-2">
                  Save Changes
                </button>
                <button className="btn border text-gray-600 p-2">Cancel</button>
              </div>
                </form>
              </div>
              
            </Section>
            <Section id="Join-Family">
              <div className="space-y-4">
              <form class="space-y-4">
                  <div>
                    <label for="familyName" class="block font-semibold mb-1">
                      Family Code
                    </label>
                    <input
                      type="text"
                      id="familyName"
                      name="familyName"
                      class="w-full border border-black rounded px-2 py-1"
                      placeholder="Enter Family Code"
                    />
                  </div>
                  <div className="text-right mt-6">
                <button className="btn bg-pink-600 hover:bg-pink-700 text-white mr-3 p-2">
                  Save Changes
                </button>
                <button className="btn border text-gray-600 p-2">Cancel</button>
              </div>
                </form>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tailwind utility class shortcut
const inputClass = "input";

export const input = `w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-white text-sm text-gray-800`;
export const btn = `px-4 py-2 rounded-lg text-sm font-medium focus:outline-none transition`;
