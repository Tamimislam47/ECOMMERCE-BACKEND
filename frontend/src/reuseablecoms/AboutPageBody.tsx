import React, { useState } from "react";
import { tabs } from "../ObjDatas.ts";
type Props = {};

const AboutPageBody = (props: Props) => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="place-content-centerl grid w-full gap-5 p-5 lg:w-[80%] lg:grid-cols-2">
      <div className="overflow-x-hidden">
        <img
          src="./homeImgs/about-us.jpeg"
          alt="About Us"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-4xl font-semibold">
          Modave – Offering rare and beautiful items worldwide
        </h1>
        <p></p>
        <div className="mt-10">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-4" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm font-medium ${
                    activeTab === tab.id
                      ? "font- border-b-2 border-blue-600 text-blue-600"
                      : "font-semibold text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="mt-6">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`${
                  activeTab === tab.id ? "block" : "hidden"
                } font-sofadi`}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageBody;
