import React from 'react';
import noProjectImg from '../assets/no-projects.png';
import Button from './Button';

function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img src={noProjectImg} alt="An Empty Task List" className="object-contain w-16 h-16 mx-auto" />
      <h2 className="my-4 text-xl font-bold text-stone-500">No Project Selected</h2>
      <p className="mb-4 text-stone-400">Select a project or get started with a new one</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject} id="1234H">
          Create New Project
        </Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
