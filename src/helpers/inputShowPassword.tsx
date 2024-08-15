import { Input } from '@nextui-org/react';
import { useState } from 'react';
import { EyeSlashFilledIcon } from './eyefilledIcon/eyeSlashFilledIcon ';
import { EyeFilledIcon } from './eyefilledIcon/eyeFilledIcon';

export default (props: {
  valueCallback(value: string): void;
  showLabel: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      isRequired
      label={props.showLabel === true ? 'Password' : ''}
      autoComplete='new-password'
      radius='sm'
      variant='bordered'
      placeholder='Enter your password'
      onValueChange={(value) => {
        props.valueCallback(value);
      }}
      endContent={
        <button
          className='focus:outline-none'
          type='button'
          onClick={toggleVisibility}
          aria-label='toggle password visibility'>
          {isVisible ? (
            <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
          ) : (
            <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
      className=''
    />
  );
};
