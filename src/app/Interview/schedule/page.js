'use client';

import { ArrowLeft, Calendar, Clock, MapPin, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ScheduleInterviewPage() {
  const [formData, setFormData] = useState({
    candidateName: '',
    position: '',
    date: '',
    time: '',
    interviewer: '',
    location: '',
    type: 'Technical Round',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Schedule Interview:', formData);
    // Handle form submission
    alert('Interview scheduled successfully!');
  };

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <Link href="/Interview" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
        <ArrowLeft className="h-5 w-5" />
        Back to Interviews
      </Link>

      <div>
        <h1 className="text-3xl font-bold text-gray-900">Schedule Interview</h1>
        <p className="mt-2 text-gray-600">Schedule a new interview with a candidate</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Candidate Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              <User className="inline h-4 w-4 mr-2" />
              Candidate Name
            </label>
            <input
              type="text"
              name="candidateName"
              value={formData.candidateName}
              onChange={handleChange}
              placeholder="Enter candidate name"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Position</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Select position</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
            </select>
          </div>

          {/* Interview Type */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Interview Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="Technical Round">Technical Round</option>
              <option value="HR Round">HR Round</option>
              <option value="Manager Round">Manager Round</option>
              <option value="Final Round">Final Round</option>
            </select>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                <Calendar className="inline h-4 w-4 mr-2" />
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                <Clock className="inline h-4 w-4 mr-2" />
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Interviewer */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Interviewer</label>
            <select
              name="interviewer"
              value={formData.interviewer}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Select interviewer</option>
              <option value="John Smith">John Smith</option>
              <option value="Sarah Johnson">Sarah Johnson</option>
              <option value="Mike Davis">Mike Davis</option>
              <option value="Emily Brown">Emily Brown</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              <MapPin className="inline h-4 w-4 mr-2" />
              Location
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Select location</option>
              <option value="Video Call">Video Call</option>
              <option value="Conference Room A">Conference Room A</option>
              <option value="Conference Room B">Conference Room B</option>
              <option value="Office">Office</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Schedule Interview
            </button>
            <Link
              href="/Interview"
              className="flex-1 px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
