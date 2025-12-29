import { Briefcase, Users, Calendar, FileText } from 'lucide-react';
import { dashboardStats, mockJobs, mockCandidates, mockInterviews } from '@/lib/mockData';

export default function Dashboard() {
  const getIconForStat = (iconName) => {
    const icons = {
      briefcase: <Briefcase className="h-6 w-6" />,
      users: <Users className="h-6 w-6" />,
      calendar: <Calendar className="h-6 w-6" />,
      'file-text': <FileText className="h-6 w-6" />,
    };
    return icons[iconName];
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200',
    };
    return colors[color];
  };

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome back! Here's your recruitment overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-lg border-2 p-6 ${getColorClasses(stat.color)}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium opacity-80">{stat.title}</p>
                <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                <p className="mt-2 text-xs opacity-70">{stat.trend}</p>
              </div>
              <div className="rounded-lg bg-white/50 p-3 backdrop-blur">
                {getIconForStat(stat.icon)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Recent Jobs */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Jobs</h2>
            <a href="/Jobs" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              View All →
            </a>
          </div>
          <div className="space-y-4">
            {mockJobs.slice(0, 3).map((job) => (
              <div
                key={job.id}
                className="flex items-start justify-between border-b border-gray-100 pb-4 last:border-b-0"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.department} • {job.location}</p>
                  <p className="mt-1 text-xs text-gray-500">{job.applicants} applicants</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ml-4 ${
                  job.status === 'Open'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Candidates */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Candidates</h2>
            <a href="/Candidate" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              View All →
            </a>
          </div>
          <div className="space-y-4">
            {mockCandidates.slice(0, 3).map((candidate) => (
              <div
                key={candidate.id}
                className="flex items-start justify-between border-b border-gray-100 pb-4 last:border-b-0"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                  <p className="text-sm text-gray-600">{candidate.position}</p>
                  <p className="mt-1 text-xs text-gray-500">{candidate.email}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap ml-4 ${
                  candidate.status === 'Offer Extended'
                    ? 'bg-blue-100 text-blue-700'
                    : candidate.status === 'Interview Scheduled'
                    ? 'bg-yellow-100 text-yellow-700'
                    : candidate.status === 'Rejected'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {candidate.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Interviews */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Interviews</h2>
          <a href="/Interview" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            View All →
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 font-semibold text-gray-900">Candidate</th>
                <th className="pb-3 font-semibold text-gray-900">Position</th>
                <th className="pb-3 font-semibold text-gray-900">Date & Time</th>
                <th className="pb-3 font-semibold text-gray-900">Interviewer</th>
                <th className="pb-3 font-semibold text-gray-900">Type</th>
              </tr>
            </thead>
            <tbody>
              {mockInterviews.slice(0, 3).map((interview) => (
                <tr key={interview.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4">{interview.candidateName}</td>
                  <td className="py-4 text-gray-600">{interview.position}</td>
                  <td className="py-4 text-gray-600">
                    {interview.interviewDate} • {interview.interviewTime}
                  </td>
                  <td className="py-4 text-gray-600">{interview.interviewer}</td>
                  <td className="py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      interview.type === 'Technical'
                        ? 'bg-blue-100 text-blue-700'
                        : interview.type === 'HR Round'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {interview.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
