import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">TraceHound</h1>
      <p className="text-muted-foreground">
        AI 智能故障定位平台 —{' '}
        <Link href="/docs" className="font-medium underline">
          查看文档
        </Link>
      </p>
    </div>
  );
}
