import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
  className = '',
}) => {
  return (
    <div className={`mb-5 ${className}`}>
      {label && (
        <div className="mb-3 font-medium text-gray-700 text-left">
          {label}
          {required && <span className="text-primary-red ml-1">*</span>}
        </div>
      )}
      <div className="flex flex-wrap gap-6">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
            <div className="relative">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                className="sr-only"
              />
              <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center transition hover:border-primary-red">
                {value === option.value && (
                  <div className="w-3 h-3 rounded-full bg-primary-red"></div>
                )}
              </div>
            </div>
            <span className="text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup; 