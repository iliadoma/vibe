'use client';

import { useState } from 'react';

interface SpaceFormData {
  name: string;
  description: string;
  photo_url: string;
  parent_id: string;
  type: 'simple' | 'composite';
  timezone: string;
  work_start_time: string;
  work_end_time: string;
  slot_duration: number;
  working_days: string[];
  max_bookings_per_slot: number;
  can_book_in_advance: boolean;
  max_days_in_advance: number;
  price_per_slot: number;
  currency: string;
  cancellation_rules: string;
  is_active: boolean;
}

const timezones = [
  'Europe/Moscow',
  'Europe/London',
  'America/New_York',
  'Asia/Tokyo',
  'Australia/Sydney',
  'Europe/Berlin',
  'Europe/Paris',
  'Asia/Dubai',
  'Asia/Shanghai',
  'America/Los_Angeles'
];

const currencies = [
  { code: 'RUB', name: 'Russian Ruble' },
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'UZS', name: 'Uzbekistani Som' },
  { code: 'KZT', name: 'Kazakhstani Tenge' }
];

const weekDays = [
  { value: 'Mon', label: 'Monday' },
  { value: 'Tue', label: 'Tuesday' },
  { value: 'Wed', label: 'Wednesday' },
  { value: 'Thu', label: 'Thursday' },
  { value: 'Fri', label: 'Friday' },
  { value: 'Sat', label: 'Saturday' },
  { value: 'Sun', label: 'Sunday' }
];

export default function CreateSpacePage() {
  const [formData, setFormData] = useState<SpaceFormData>({
    name: '',
    description: '',
    photo_url: '',
    parent_id: '',
    type: 'simple',
    timezone: 'Europe/Moscow',
    work_start_time: '09:00',
    work_end_time: '18:00',
    slot_duration: 60,
    working_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    max_bookings_per_slot: 1,
    can_book_in_advance: true,
    max_days_in_advance: 14,
    price_per_slot: 0,
    currency: 'RUB',
    cancellation_rules: '',
    is_active: true
  });

  const handleInputChange = (field: keyof SpaceFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleWeekDayToggle = (day: string) => {
    setFormData(prev => ({
      ...prev,
      working_days: prev.working_days.includes(day)
        ? prev.working_days.filter(d => d !== day)
        : [...prev.working_days, day]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here will be API request to create space
      console.log('Sending data:', formData);
      
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Space created successfully!');
      // Here you can add redirect to spaces list
    } catch (error) {
      console.error('Error creating space:', error);
      alert('An error occurred while creating the space');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-900">
              Create New Space
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Fill out the form to create a new space in the system
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
                Basic Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Sunbed 3 or Rooftop Gazebo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value as 'simple' | 'composite')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="simple">Simple</option>
                    <option value="composite">Composite</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Detailed description of the space..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Photo URL
                </label>
                <input
                  type="url"
                  value={formData.photo_url}
                  onChange={(e) => handleInputChange('photo_url', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent Object ID
                </label>
                <input
                  type="text"
                  value={formData.parent_id}
                  onChange={(e) => handleInputChange('parent_id', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Leave empty if this is a root object"
                />
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
                Working Schedule
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Timezone *
                  </label>
                  <select
                    value={formData.timezone}
                    onChange={(e) => handleInputChange('timezone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {timezones.map(tz => (
                      <option key={tz} value={tz}>{tz}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work Start Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.work_start_time}
                    onChange={(e) => handleInputChange('work_start_time', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work End Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.work_end_time}
                    onChange={(e) => handleInputChange('work_end_time', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Working Days *
                </label>
                <div className="flex flex-wrap gap-2">
                  {weekDays.map(day => (
                    <label key={day.value} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.working_days.includes(day.value)}
                        onChange={() => handleWeekDayToggle(day.value)}
                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{day.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Settings */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
                Booking Settings
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slot Duration (minutes) *
                  </label>
                  <input
                    type="number"
                    required
                    min="15"
                    step="15"
                    value={formData.slot_duration}
                    onChange={(e) => handleInputChange('slot_duration', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Max Bookings per Slot
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.max_bookings_per_slot}
                    onChange={(e) => handleInputChange('max_bookings_per_slot', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.can_book_in_advance}
                    onChange={(e) => handleInputChange('can_book_in_advance', e.target.checked)}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="text-sm font-medium text-gray-700">
                    Can Book in Advance *
                  </label>
                </div>

                {formData.can_book_in_advance && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Max Days in Advance
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.max_days_in_advance}
                      onChange={(e) => handleInputChange('max_days_in_advance', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
                Pricing
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price per Slot
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.price_per_slot}
                    onChange={(e) => handleInputChange('price_per_slot', parseFloat(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Currency
                  </label>
                  <select
                    value={formData.currency}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {currencies.map(currency => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cancellation Rules
                </label>
                <textarea
                  value={formData.cancellation_rules}
                  onChange={(e) => handleInputChange('cancellation_rules', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe the cancellation rules..."
                />
              </div>
            </div>

            {/* Status */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">
                Status
              </h2>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => handleInputChange('is_active', e.target.checked)}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-gray-700">
                  Active (visible in interface) *
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Space
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 