import { Home, CheckSquare, Users, Settings, Package, Target, FileText, LogOut } from "lucide-react";
import { cn } from "../../lib/utils";

const menuItems = [
  { icon: Home, label: "Home", active: true },
  { icon: CheckSquare, label: "Stages & Checklist" },
  { icon: Package, label: "Upload Docs" },
  { icon: Users, label: "Preferred Vendors" },
  { icon: FileText, label: "Tech Stack" },
  { icon: Target, label: "Zee Sales Target" },
  { icon: Settings, label: "MAI Settings" },
  { icon: Settings, label: "Pending Questions" },

];

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#1A1F2C] text-white flex flex-col justify-between p-4 fixed left-0 top-0">
      
      {/* Top section */}
      <div>
        <div className="mb-8">
          <h2 className="text-xl font-bold px-4">Dashboard</h2>
        </div>
        <nav>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 cursor-pointer transition-colors",
                item.active
                  ? "bg-[#6E59A5] text-white"
                  : "hover:bg-[#2A2F3C] text-gray-300"
              )}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer logout section */}
      <footer className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-red-400 transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
