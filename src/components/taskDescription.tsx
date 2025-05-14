import React from "react";

const TaskDescription = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {"Here is Codnity Home Assignment: ReactJS Website"}
        </h2>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          {
            " Your task is to create a simple, responsive website using ReactJS based on the following requirements: "
          }
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
          <li>
            <strong className="text-gray-900 dark:text-white">
              {"Header Section: "}
            </strong>
            {"Include a header with 2-3 navigation menu items."}
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">
              {" Footer Section:"}
            </strong>{" "}
            {
              "Include a footer with icons and links to your chosen social media platforms."
            }
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">
              {"Content Pages (2-3):"}
            </strong>{" "}
            {
              "Each page should display an image and text. Preferably, load content from a publicly available API."
            }
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">
              {"Bonus (Optional): "}
            </strong>{" "}
            {"Using Redux and TypeScript is considered a plus."}
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">
              {" Responsiveness:"}
            </strong>{" "}
            {" The site must function well on both desktop and mobile devices."}
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">
              {" Code Repository:"}
            </strong>{" "}
            {"Upload the code to GitHub and provide the repository link."}
          </li>
        </ul>

        <p className="mt-6 text-gray-700 dark:text-gray-300">
          {
            "Feel free to reach out if you have any questions or comments about the task!"
          }
        </p>
      </div>
    </section>
  );
};

export default TaskDescription;
