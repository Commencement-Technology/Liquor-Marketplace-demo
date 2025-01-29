'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const handleSignOut = () => {
    localStorage.clear();
    signOut({
      callbackUrl: '/login',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-white via-blue-50 to-blue-100 shadow-lg rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900">Protected Page</h1>
            <p className="mt-4 text-gray-600">
              Welcome, {session?.user?.name || session?.user?.email}! This page is only accessible to
              authenticated users.
            </p>
            <div className="mt-6">
              <Button
                onClick={handleSignOut}
                variant="destructive"
              >
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
