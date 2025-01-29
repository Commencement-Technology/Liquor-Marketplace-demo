import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to Our Platform
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose any Protected or Unprotected route.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/protected">
              <Button variant="default" size="lg">
                Protected Page
              </Button>
            </Link>
            <Link href="/unprotected">
              <Button variant="outline" size="lg">
                Unprotected Page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}