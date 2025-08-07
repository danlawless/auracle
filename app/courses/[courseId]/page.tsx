'use client'

import { useParams } from 'next/navigation'

export default function CoursePage() {
  const params = useParams()
  const courseId = params.courseId as string

  // Simple test page to verify routing works
  return (
    <div className="min-h-screen bg-gradient-sacred py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">
            Course Page Test
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Course ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{courseId}</span>
          </p>
          
          {courseId === 'rose-meditation-1' ? (
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800">✅ This is the Rose Meditation course - lesson data available!</p>
              <button 
                onClick={() => window.location.href = '/courses/rose-meditation-1/dashboard'}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Go to Dashboard
              </button>
            </div>
          ) : (
            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="text-yellow-800">⚠️ This course doesn't have lesson data yet - coming soon!</p>
            </div>
          )}

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h2 className="font-semibold text-gray-800 mb-2">Debug Info:</h2>
            <p className="text-sm text-gray-600">URL: /courses/{courseId}</p>
            <p className="text-sm text-gray-600">Route working: ✅</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Metadata is not allowed in client components