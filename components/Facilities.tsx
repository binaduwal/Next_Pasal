import React from "react";
import { FaShippingFast, FaUndo, FaLock, FaHeadset } from "react-icons/fa";
import { facilities } from "@/constants";

type IconKey = "FaShippingFast" | "FaUndo" | "FaLock" | "FaHeadset";

const iconMap: Record<IconKey, React.ComponentType> = {
  FaShippingFast,
  FaUndo,
  FaLock,
  FaHeadset,
};

const Facilities = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map((item) => {
          const iconKey = item.icon as IconKey;
          const IconComponent = iconMap[iconKey];
          return (
            <div key={item.id} className="flex items-start p-4 gap-4 rounded-lg shadow-sm bg-white">
              <div className="rounded-full bg-orange-100 p-3">
                {IconComponent && (
                  <IconComponent className="text-2xl text-orange-600/80" />
                )}
              </div>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Facilities;
