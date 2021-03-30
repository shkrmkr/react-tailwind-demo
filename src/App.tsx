import React from "react";
import { DestinationCard } from "./components/DestinationCard";
import { popularDestinations } from "./data/popularDestinations";
import heroImage from "/img/beach-work.jpg";
import logo from "/img/logo.svg";

export const App: React.FC = () => {
  return (
    <>
      <div className="grid bg-gray-100 lg:grid-cols-2 2xl:grid-cols-5">
        <div className="max-w-md px-8 py-12 mx-auto 2xl:col-span-2 lg:max-w-full lg:px-12 lg:py-24 sm:max-w-xl xl:mr-0">
          <div className="xl:max-w-xl">
            <img src={logo} alt="Workcation logo" className="h-10" />
            <img
              src={heroImage}
              alt="Woman workcationing on the beach"
              className="object-center mt-6 rounded-lg shadow-xl lg:hidden sm:mt-8 sm:h-64 sm:w-full sm:object-cover"
            />
            <h1 className="mt-6 text-2xl font-semibold tracking-tight text-gray-900 font-headline sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br />
              <span className="text-brand">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather when you're not on
              vacation.
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                href="#"
                className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition bg-brand hover:bg-brand-light active:bg-brand-dark"
              >
                Book your escape
              </a>
              <a href="#" className="btn btn-secondary">
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 object-cover object-center w-full h-full"
            src={heroImage}
            alt="Woman workcationing on the beach"
          />
        </div>
      </div>

      <div className="max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>

        <div className="grid gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.city} />
          ))}
        </div>
      </div>
    </>
  );
};
