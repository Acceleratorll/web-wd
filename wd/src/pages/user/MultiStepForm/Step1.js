import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
      <div className="text-center">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
          FORM
        </p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          My <span className="text-indigo-600">Wedding</span>
        </h3>
        <p className="mx-auto max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 lg:leading-9">Cantumkan informasi yang benar dan terbaru.</p>
      </div>
      <FormGroup className='text-left grid max-w-screen-md px-4 pb-8 mx-auto'>
        <div className="mb-6">
          <Label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</Label>
          <Input
            id="email"
            name="email"
            value={props.email} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into the state
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <Label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</Label>
            <Input
              id="email"
              name="email"
              value={props.email} // Prop: The email input data
              onChange={props.handleChange} // Prop: Puts data into the state
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</Label>
            <Input
              id="email"
              name="email"
              value={props.email} // Prop: The email input data
              onChange={props.handleChange} // Prop: Puts data into the state
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <Label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</Label>
            <Input
              id="email"
              name="email"
              value={props.email} // Prop: The email input data
              onChange={props.handleChange} // Prop: Puts data into the state
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</Label>
            <Input
              id="email"
              name="email"
              value={props.email} // Prop: The email input data
              onChange={props.handleChange} // Prop: Puts data into the state
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </FormGroup>
    </>
  );
};

export default Step1;
