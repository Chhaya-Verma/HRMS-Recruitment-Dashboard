'use client';

import { ArrowLeft, Upload, FileUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function UploadCandidatePage() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <Link href="/Candidate" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
        <ArrowLeft className="h-5 w-5" />
        Back to Candidates
      </Link>

      <div>
        <h1 className="text-3xl font-bold text-gray-900">Upload Candidates</h1>
        <p className="mt-2 text-gray-600">Import candidates from CSV or Excel file</p>
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
            dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
          }`}
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {file ? file.name : 'Drag and drop your file here'}
          </h3>
          <p className="text-gray-600 mb-4">
            {file ? 'File selected. Ready to upload!' : 'or click to select file'}
          </p>
          
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleChange}
            accept=".csv,.xlsx,.xls"
          />
          <label
            htmlFor="file-upload"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Choose File
          </label>
          
          <p className="text-sm text-gray-500 mt-4">
            Supported formats: CSV, XLSX, XLS (Max 10MB)
          </p>
        </div>

        {/* File Info */}
        {file && (
          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-3">
              <FileUp className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-900">{file.name}</p>
                <p className="text-xs text-green-700">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
            </div>
          </div>
        )}

        {/* Upload Button */}
        <div className="mt-8 flex gap-4">
          <button
            disabled={!file}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              file
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Upload Candidates
          </button>
          <button
            onClick={() => setFile(null)}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Clear
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">File Format Requirements</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Your CSV/Excel file should include these columns:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Name (Full name of candidate)</li>
              <li>Email (Email address)</li>
              <li>Phone (Phone number)</li>
              <li>Position (Applied position)</li>
              <li>Experience (Years of experience)</li>
              <li>Status (Current status)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
