"use client"
// components/SendCrypto.js
import React, { useState, useEffect } from 'react';

const securityTips = [
  "Always double-check the recipient's address before sending",
  "Never share your private keys or seed phrase with anyone",
  "Use hardware wallets for storing large amounts",
  "Enable 2FA on all your crypto accounts",
  "Be cautious of phishing attempts and fake websites",
  "Start with small test transactions for new addresses",
  "Keep your software and wallets up to date",
  "Use strong, unique passwords for each platform",
  "Backup your wallet information securely offline",
  "Be wary of unsolicited investment opportunities"
];

const SendCrypto = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('Bitcoin');
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [currentTip, setCurrentTip] = useState(0);

  // Rotate tips every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % securityTips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {/* Send Crypto Card */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Send Crypto</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Select Asset</label>
            <select
              value={selectedCrypto}
              onChange={(e) => setSelectedCrypto(e.target.value)}
              className="w-full bg-gray-700 rounded-lg p-3 text-white border-none focus:ring-2 focus:ring-orange-500"
            >
              <option>Bitcoin</option>
              <option>Ethereum</option>
              <option>Binance Coin</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-gray-700 rounded-lg p-3 text-white border-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2">Recipient Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter wallet address"
              className="w-full bg-gray-700 rounded-lg p-3 text-white border-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Send {selectedCrypto}
          </button>
        </form>
      </div>

      {/* Security Tips Card */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Security Tips</h2>
        <div className="h-[calc(100%-theme(space.6)-theme(space.6)-2rem)] flex items-center">
          <div className="bg-gray-700 rounded-lg p-6 w-full min-h-[200px] flex items-center">
            <p className="text-lg text-gray-300 transition-opacity duration-500 text-center">
              {securityTips[currentTip]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendCrypto;