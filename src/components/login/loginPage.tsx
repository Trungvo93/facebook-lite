'use client';
import { Image } from '@nextui-org/image';
import { Input } from '@nextui-org/input';
import { EyeFilledIcon } from '../eyefilledIcon/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../eyefilledIcon/eyeSlashFilledIcon ';
import { useState } from 'react';
export default () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div>
      <main className='pt-20 pb-32'>
        <div className='max-w-[980px] h-[536px] mx-auto my-0 flex justify-between gap-8'>
          <div>
            <Image
              alt='logo facebook'
              src='/logo.svg'
              width={'320'}
              className='-ml-7 pt-28'
            />
            <div>
              <p className='text-[28px] pb-5 w-[500px] leading-8	'>
                Facebook helps you connect and share with the people in your
                life.
              </p>
            </div>
          </div>
          <div className='w-96 shrink-0 '>
            <div className='drop-shadow-lg p-3 bg-white rounded-lg gap-3 flex-col flex'>
              {/* Email - Phone number input */}
              <Input
                isRequired
                radius='sm'
                autoComplete='new-password'
                label='Email'
                type='email'
                placeholder='Email address'
                variant='bordered'
                onClear={() => console.log('input cleared')}
              />

              <Input
                isRequired
                label='Password'
                autoComplete='new-password'
                radius='sm'
                variant='bordered'
                placeholder='Enter your password'
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
