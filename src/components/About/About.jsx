import { Bars3BottomLeftIcon, BookOpenIcon, CameraIcon } from '@heroicons/react/24/solid';
import React from 'react';

function About() {
  return (
    <div className="bg-slate-300 py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            About Us
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We are a team of passionate photographers who love to capture the beauty of the world through our lenses.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <dt className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <CameraIcon className="h-6 w-6" />
                </div>
              </dt>
              <dd className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  High-Quality Photos
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We use the latest camera equipment to ensure that our photos are of the highest quality.
                </p>
              </dd>
            </div>

            <div className="flex">
              <dt className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <BookOpenIcon className="h-6 w-6" />
                </div>
              </dt>
              <dd className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Expertise and Experience
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Our team has years of experience in photography and we are always learning new techniques to improve our skills.
                </p>
              </dd>
            </div>

            <div className="flex">
              <dt className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Bars3BottomLeftIcon className="h-6 w-6" />
                </div>
              </dt>
              <dd className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Passion and Dedication
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We are passionate about photography and we are dedicated to providing our clients with the best possible service.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default About;