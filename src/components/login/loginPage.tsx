'use client';

import { Button, Input, Image, Link, Divider } from '@nextui-org/react';
import InputShowPassword from '@/helpers/inputShowPassword';
import RegisterAccount from './registerAccount';

export default () => {
  const callbackFunction = (childData: string) => {
    console.log('childData: ', childData);
  };
  return (
    <div>
      <main className='pt-24 pb-32 bg-gray-100'>
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
                <InputShowPassword
                  valueCallback={callbackFunction}
                  showLabel={true}
                />

                {/* Submit */}
                <Button
                  color='primary'
                  radius='sm'
                  size='lg'
                  className='my-3 font-medium text-xl'>
                  Log in
                </Button>
              </form>

              {/* Button login Google */}
              <div className='mb-3'>
                <Button
                  startContent={
                    <Image
                      src={'/google-logo.svg'}
                      alt='Google logo'
                      width={26}
                    />
                  }
                  radius='sm'
                  size='lg'
                  fullWidth
                  className='font-medium text-xl '>
                  Sign in with Google
                </Button>
              </div>

              {/* Forgot password */}
              <div className='text-center'>
                <Link
                  href='#'
                  className=''>
                  Forgotten password?
                </Link>
              </div>
              <Divider className='my-5' />
              <div className='text-center mb-4'>
                <RegisterAccount />
              </div>
            </div>
            <div className='text-center my-5 '>
              <p>
                <span className='font-semibold'>Create a Page</span> for a
                celebrity, brand or business.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className='flex justify-center my-8 text-gray-500'>
        <p>
          This website is designed and uses content based on Facebook. This is a
          demo website used solely for learning purposes.
        </p>
      </footer>
    </div>
  );
};
