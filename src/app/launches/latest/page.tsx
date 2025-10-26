import React from 'react';

const page: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Skwad
          </div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black">
            SK
          </div>
          <p className="mt-2 text-gray-600">
            Skwad is a privacy-first money management tool designed to assist users in
            understanding and tracking their spending. The unique proposition of Skwad is that it
            helps users maintain financial clarity without the need to link or share their bank
            login details with a third-party application. Instead, users receive a dedicated Skwad
            email address where they can direct spending alerts from their banks or credit card
            providers which are then quickly converted into categorized transactions. Skwad
            facilitates the uploading of old transactions for a comprehensive financial overview.
            Notably, Skwad alerts users about out-of-place transactions or changes in spending
            patterns, helping in the early identification and mitigation of financial risks. Another
            feature is the tracking of bills and subscriptions, with provided notifications for
            upcoming payments and fee changes. The Skwad app allows the sharing of specific
            transactions with a trusted group (Skwad) and offers functionalities such as spend
            calendar, transaction enhancement with receipts, synchronization to Google Sheets, and
            transaction splitting. In terms of security and privacy, only transaction information
            is accessed by Skwad, with no requirement or exposure of sensitive bank details.
          </p>
          <div className="mt-4 flex space-x-4">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
              Coming Soon
            </button>
            <button className="text-indigo-500 border border-indigo-500 px-4 py-2 rounded hover:bg-gray-100">
              Get Notified
            </button>
          </div>
          <div className="mt-4 text-gray-500 text-sm">
            Design & Creative <span className="text-gray-400">0 subscribers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;