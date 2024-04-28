import { useState } from 'react';
import { TbLanguage } from 'react-icons/tb'

export function ToggleIcon({ onChange, options }) {
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
        <div className="origin-top-right absolute right-0 mt-2 w-14 text-center rounded-md shadow-lg bg-purple-100 dark:bg-white">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <a 
                key={option.value} 
                tabIndex={0} 
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleClick(option.value);
                  }
                }} 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-200 hover:text-gray-900" 
                role="menuitem" 
                onClick={() => handleClick(option.value)}>
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}