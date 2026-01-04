'use client';

import { mockInterviews } from '@/lib/mockData';
import { ArrowLeft, Calendar, Clock, User, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function InterviewDetailPage() {
  const params = useParams();
  const id = parseInt(params.id);
  
  const interview = mockInterviews.find(i => i.id === id);

  if (!interview) {
    return (
      <div className="p-8">
        <Link href="/Interview" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-5 w-5" />
          Back to Interviews
        </Link>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Interview not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <Link href="/Interview" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
        <ArrowLeft className="h-5 w-5" />
        Back to Interviews
      </Link>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{interview.candidateName}</h1>
            <p className="text-gray-600 mt-2">{interview.position}</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
            interview.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
            interview.status === 'Completed' ? 'bg-green-100 text-green-700' :
            interview.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {interview.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Interview Schedule */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="text-gray-900">{interview.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Time</p>
                <p className="text-gray-900">{interview.time}</p>
              </div>
            </div>
          </div>

          {/* Interview Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Interviewer</p>
                <p className="text-gray-900">{interview.interviewer}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="text-gray-900">{interview.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interview Type */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Interview Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Interview Type</p>
              <p className="text-gray-900 font-medium mt-1">{interview.type || 'Technical Round'}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Duration</p>
              <p className="text-gray-900 font-medium mt-1">60 minutes</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Phone className="h-5 w-5" />
            Join Meeting
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Reschedule
          </button>
          <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
