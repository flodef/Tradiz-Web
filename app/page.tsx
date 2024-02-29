import LayoutA from './layoutA';
import LayoutB from './layoutB';
import LayoutC from './layoutC';

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <LayoutA />
      <LayoutB />
      <LayoutC />
    </main>
  );
}
