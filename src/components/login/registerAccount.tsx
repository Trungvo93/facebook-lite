import InputShowPassword from '@/helpers/inputShowPassword';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
  Input,
} from '@nextui-org/react';

export default () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const callbackFunction = (childData: string) => {
    console.log('childData: ', childData);
  };
  return (
    <>
      <Button
        onPress={onOpen}
        radius='sm'
        size='lg'
        className='font-medium text-xl text-white bg-green-600'>
        Create new account
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                <div>
                  <h1 className='text-3xl'>Sign Up</h1>
                  <p className='font-light text-gray-500'>
                    It's quick and easy.
                  </p>
                </div>
                <Divider />
              </ModalHeader>
              <ModalBody>
                <form className='gap-4 flex flex-col'>
                  <div className='flex justify-between gap-3'>
                    <Input
                      isRequired
                      radius='sm'
                      autoComplete='new-password'
                      type='text'
                      placeholder='First name'
                      variant='bordered'
                      onClear={() => console.log('input cleared firstname')}
                    />
                    <Input
                      isRequired
                      radius='sm'
                      autoComplete='new-password'
                      type='text'
                      placeholder='Last name'
                      variant='bordered'
                      onClear={() => console.log('input cleared lastname')}
                    />
                  </div>
                  <Input
                    isRequired
                    radius='sm'
                    autoComplete='new-password'
                    type='email'
                    placeholder='Email address'
                    variant='bordered'
                    onClear={() => console.log('input cleared email')}
                  />
                  <InputShowPassword
                    valueCallback={callbackFunction}
                    showLabel={false}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <div className='flex justify-center w-full'>
                  <Button
                    radius='sm'
                    onPress={onClose}
                    className='font-medium text-xl text-white bg-green-600 px-12 '>
                    Sign Up
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
