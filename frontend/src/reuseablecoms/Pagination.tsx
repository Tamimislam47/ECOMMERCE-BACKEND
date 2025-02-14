import React from "react";

type Props = {};

const Pagination = (props: Props) => {
  return (
    <div className="flex justify-center space-x-1 dark:text-gray-800">
      <button
        title="previous"
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded-md border py-0 shadow-md dark:border-gray-100 dark:bg-gray-50"
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        type="button"
        title="Page 1"
        className="inline-flex h-8 w-8 items-center justify-center rounded border text-sm font-semibold shadow-md dark:border-violet-600 dark:bg-gray-50 dark:text-violet-600"
      >
        1
      </button>
      <button
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded border text-sm shadow-md dark:border-gray-100 dark:bg-gray-50"
        title="Page 2"
      >
        2
      </button>
      <button
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded border text-sm shadow-md dark:border-gray-100 dark:bg-gray-50"
        title="Page 3"
      >
        3
      </button>
      <button
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded border text-sm shadow-md dark:border-gray-100 dark:bg-gray-50"
        title="Page 4"
      >
        4
      </button>
      <button
        title="next"
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded-md border py-0 shadow-md dark:border-gray-100 dark:bg-gray-50"
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
