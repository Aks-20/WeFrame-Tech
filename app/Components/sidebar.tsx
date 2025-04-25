import { Home, CheckSquare, Users, Settings, Package, Target, FileText,LogOutIcon } from "lucide-react";
import { cn } from "../../lib/utils";

const menuItems = [
  { icon: Home, label: "Home", active: true },
  { icon: CheckSquare, label: "Progress & Checklist" },
  { icon: Package, label: "Upload Material" },
  { icon: Users, label: "Preferred Vendors" },
  { icon: FileText, label: "New Stack" },
  { icon: Target, label: "Target" },
  { icon: Settings, label: "Settings" },
];

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#1A1F2C] text-white p-4 fixed left-0 top-0">
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

      


  {/* Logout footer at bottom */}
  <footer className="p-4 border-t border-gray-700 mt-40 ">
    <div className="flex items-center space-x-2 cursor-pointer hover:text-red-400">
      <LogOutIcon />
      <span>Logout</span>
    </div>
  </footer>
</div>


  
  );
};

export default Sidebar;
