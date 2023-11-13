import Link from "next/link";
import { useRouter } from "next/router";

import { SIDEBAR_ITEMS } from "src/constants";

interface sidebarItem {
  name: string;
  url: string;
}
export const Sidebar = () => {
  const router = useRouter();

  return (
    <aside
      id="paradise-sidebar"
      className="w-64 border-r border-[#cbd5e11a] py-4"
    >
      <ul>
        {SIDEBAR_ITEMS.map((item: sidebarItem) => (
          <li
            key={item.name}
            className={`font-medium mb-2 px-6 py-1 border-l-4 hover:border-indigo-dark hover:text-indigo-light
            ${
              router.pathname === item.url
                ? "border-indigo-dark text-indigo-light"
                : "border-transparent"
            }`}
          >
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
