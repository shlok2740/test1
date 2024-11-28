// pages/index.js
import WalletOverview from '../components/WalletOverview';
import SendCrypto from '../components/SendCrypto';
import RecentTransactions from '../components/RecentTransactions';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-fuchsia-600 to-slate-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Crypto Dashboard</h1>
        <WalletOverview />
        <SendCrypto />
        <RecentTransactions />
      </div>
    </div>
  );
}