import * as React from 'react';
import Tour from '../Tour';
const steps = [
  {
    title: 'Upload File',
    description: 'Put your files here.',
    cover: (
      <img
        alt="tour.png"
        src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
      />
    )
  },
  {
    title: 'Save',
    description: 'Save your changes.'
  },
  {
    title: 'Other Actions',
    description: 'Click to see other actions.'
  },
];

export default (
  <Tour uxpId="tour-1" steps={steps} />
);