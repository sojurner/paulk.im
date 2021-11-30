import React from 'react';
import { µIcon } from './types';

export const SearchIcon: React.FC<µIcon.Props> = ({ isActive, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      x="0"
      y="0"
      enableBackground="new 0 0 512.001 512.001"
      version="1.1"
      viewBox="0 0 512.001 512.001"
      xmlSpace="preserve"
      {...props}
    >
      <circle
        cx="175.579"
        cy="175.589"
        r="165.38"
        fill={isActive ? '#95DEED' : 'var(--chakra-colors-gray-200)'}
      ></circle>
      <path
        fill={isActive ? '#FF9839' : 'var(--chakra-colors-gray-200)'}
        d="M449.195 492.785L306.797 350.387l43.579-43.579 142.398 142.398c12.034 12.034 12.034 31.545 0 43.579-12.033 12.034-31.545 12.034-43.579 0z"
      ></path>
      <g fill="#4C1D1D">
        <path d="M499.987 441.994l-142.399-142.4c-3.984-3.983-10.44-3.983-14.425 0l-14.578 14.578-21.924-21.924c27.654-31.039 44.488-71.92 44.488-116.664C351.149 78.772 272.386.009 175.574.009S0 78.773 0 175.585 78.763 351.16 175.575 351.16c44.744 0 85.624-16.833 116.664-44.487l21.924 21.924-14.578 14.578c-3.983 3.983-3.983 10.441 0 14.425l142.398 142.398h.001c7.996 7.995 18.498 11.993 29.001 11.993s21.006-3.998 29.001-11.993c7.748-7.746 12.014-18.046 12.014-29.001 0-10.958-4.266-21.257-12.013-29.003zM20.398 175.585c0-85.565 69.612-155.177 155.177-155.177S330.752 90.02 330.752 175.585 261.14 330.761 175.575 330.761 20.398 261.15 20.398 175.585zm465.165 309.988c-8.037 8.038-21.115 8.039-29.156 0h.001L321.221 350.387l29.155-29.155 135.187 135.186a20.485 20.485 0 016.038 14.578 20.476 20.476 0 01-6.038 14.577z"></path>
        <path d="M58.309 182.024a120 120 0 01-.173-6.44c0-5.633-4.566-10.199-10.199-10.199s-10.199 4.566-10.199 10.199c0 2.508.068 5.046.203 7.54.294 5.437 4.795 9.649 10.176 9.649.186 0 .372-.005.559-.015 5.624-.302 9.937-5.108 9.633-10.734zM175.575 293.024c-44.357 0-84.459-24.559-104.654-64.091a10.199 10.199 0 00-13.723-4.443c-5.016 2.563-7.006 8.706-4.443 13.723 23.699 46.391 70.761 75.21 122.819 75.21 5.633 0 10.199-4.566 10.199-10.199s-4.565-10.2-10.198-10.2z"></path>
      </g>
    </svg>
  );
};