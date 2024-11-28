// components/RecentTransactions.js
import React from 'react';

const RecentTransactions = () => {
  // Fetch the user's 5 most recent transactions from an API or state management
  const recentTransactions = [
    {
      date: '2023-05-12',
      asset: 'BTC',
      amount: 0.5,
      status: 'completed',
    },
    {
      date: '2023-05-10',
      asset: 'ETH',
      amount: 2.1,
      status: 'completed',
    },
    {
      date: '2023-05-08',
      asset: 'BNB',
      amount: 10,
      status: 'pending',
    },
    {
      date: '2023-05-05',
      asset: 'XRP',
      amount: 50,
      status: 'completed',
    },
    {
      date: '2023-05-03',
      asset: 'BTC',
      amount: 0.25,
      status: 'completed',
    },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700 text-gray-400">
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Asset</th>
              <th className="px-4 py-2 text-right">Amount</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx, index) => (
              <tr
                key={index}
                className={`border-b border-gray-700 ${
                  tx.status === 'completed'
                    ? 'text-green-400'
                    : 'text-yellow-400'
                }`}
              >
                <td className="px-4 py-2 text-left">{tx.date}</td>
                <td className="px-4 py-2 text-left">{tx.asset}</td>
                <td className="px-4 py-2 text-right">
                  {tx.amount.toFixed(2)} {tx.asset}
                </td>
                <td className="px-4 py-2 text-left">{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;