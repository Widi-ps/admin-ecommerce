'use client';

import { useStoreModal } from '@/hooks/UseStoreModal';
import Modal from '../ui/modal';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const formSchema = z.object({
  name: z.string().min(1),
});

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  //TODO: Buat Toko
  console.log(values);
};

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });
  return (
    <Modal
      title='Buat Store'
      description='Tambahkan Store untuk membuat produk dan kategori'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className='py-2 pb-4 space-y-4'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Nama Toko' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='pt-6 flex item-center justify-end w-full space-x-2'>
                <Button variant='outline' onClick={storeModal.onClose}>
                  Cancel
                </Button>
                <Button type='submit'>Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
