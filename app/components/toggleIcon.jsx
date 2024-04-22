import { useState } from 'react';
import { TbLanguage } from 'react-icons/tb'

export function ToggleIcon({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" className="inline-flex justify-center w-full rounded-lg p-2 text-purple-500 dark:text-violet-300 hover:bg-gray-100 dark:hover:bg-gray-950" id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={() => setIsOpen(!isOpen)}>
          <TbLanguage className='text-2xl cursor-pointer'/>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-12 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <a key={option.value} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => handleClick(option.value)}>
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}