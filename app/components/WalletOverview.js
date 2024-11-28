// components/WalletOverview.js
import React from 'react';

const Sparkline = ({ data, color }) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;
  const width = 100;
  const height = 30;
  const points = data.map((value, i) => 
    `${(i * width) / (data.length - 1)},${height - ((value - min) / range) * height}`
  ).join(' ');

  return (
    <svg width="100" height="30" className="opacity-50">
      <path
        d={`M ${points}`}
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

const WalletOverview = () => {
  const totalBalance = 176676.72;
  const topAssets = [
    { 
      name: 'Bitcoin', 
      amount: 50156.01,
      priceData: [48000, 49200, 50100, 49800, 50156, 50200]
    },
    { 
      name: 'Ethereum', 
      amount: 38903.45,
      priceData: [37500, 38100, 38700, 38500, 38903, 39000]
    },
    { 
      name: 'Binance Coin', 
      amount: 26101.01,
      priceData: [25500, 25800, 26000, 25900, 26101, 26150]
    },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Wallet Overview</h2>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-400 mb-1">Total Balance</p>
          <p className="text-3xl font-bold">${totalBalance.toFixed(2)}</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Deposit
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {topAssets.map((asset, index) => (
          <div key={index} className="bg-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 mb-1">{asset.name}</p>
                <p className="text-2xl font-bold">${asset.amount.toFixed(2)}</p>
              </div>
              <Sparkline data={asset.priceData} color="#f97316" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletOverview;