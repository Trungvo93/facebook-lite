'use client';

import { Button, Input, Image, Link, Divider } from '@nextui-org/react';
import InputShowPassword from '@/helpers/inputShowPassword';

export default () => {
  const callbackFunction = (childData: string) => {
    console.log('childData: ', childData);
  };
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
            <div className='drop-shadow-lg p-3 bg-white rounded-lg '>
              <form className='gap-3 flex-col flex'>
                {/* Email input */}
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

                {/* Password input */}
                <InputShowPassword valueCallback={callbackFunction} />

                {/* Submit */}
                <Button
                  color='primary'
                  radius='sm'
                  size='lg'
                  className='my-3 font-medium text-xl'>
                  Log in
                </Button>
              </form>
              <div className='text-center'>
                <Link
                  href='#'
                  className=''>
                  Forgotten password?
                </Link>
              </div>
              <Divider className='my-5' />
              <div className='text-center'>
                <Button
                  radius='sm'
                  size='lg'
                  className='font-medium text-xl text-white bg-green-600'>
                  Create new account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
