'use client';

import { mockJobs } from '@/lib/mockData';
import { ArrowLeft, MapPin, DollarSign, Users, FileText } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function JobDetailPage() {
  const params = useParams();
  const id = parseInt(params.id);
  
  const job = mockJobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="p-8">
        <Link href="/Jobs" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-5 w-5" />
          Back to Jobs
        </Link>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Job not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <Link href="/Jobs" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
        <ArrowLeft className="h-5 w-5" />
        Back to Jobs
      </Link>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
            <p className="text-gray-600 mt-2">{job.department}</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
            job.status === 'Open' ? 'bg-green-100 text-green-700' :
            job.status === 'Closed' ? 'bg-gray-100 text-gray-700' :
            'bg-yellow-100 text-yellow-700'
          }`}>
            {job.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Job Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="text-gray-900">{job.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Salary Range</p>
                <p className="text-gray-900">{job.salary}</p>
              </div>
            </div>
          </div>

          {/* Application Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Applications</p>
                <p className="text-gray-900">{job.applications} received</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Posted Date</p>
                <p className="text-gray-900">{job.postedDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Job Description</h3>
          <p className="text-gray-600 leading-relaxed">
            {job.description || 'We are looking for talented professionals to join our team. This is an exciting opportunity to work on innovative projects and grow your career with us.'}
          </p>
        </div>

        {/* Required Skills */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['Communication', 'Problem Solving', 'Teamwork', 'Leadership', 'Technical Skills'].map((skill, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Edit Job
          </button>
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            View Applications
          </button>
        </div>
      </div>
    </div>
  );
}
