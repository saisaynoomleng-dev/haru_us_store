'use server';

import { client } from '@/sanity/lib/client';
import { PrevFormStateProps } from './types';

export const submitContactForm = async (
  prevState: PrevFormStateProps,
  formData: FormData,
): Promise<{ state: string; message: string; field?: string }> => {
  const fullName = formData.get('name')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim() || '';
  const message = formData.get('message')?.toString().trim() || '';

  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (!fullName) {
    return {
      state: 'error',
      message: 'Name field cannot be empty.',
      field: 'name',
    };
  }

  if (!email) {
    return {
      state: 'error',
      message: 'Email field cannot be empty.',
      field: 'email',
    };
  }

  if (!reg_email.test(email)) {
    return {
      state: 'error',
      message: 'Must be a valid email address',
      field: 'email',
    };
  }

  if (!message) {
    return {
      state: 'error',
      message: 'Message field cannot be empty',
      field: 'message',
    };
  }

  try {
    await client.create({
      _type: 'contact',
      fullName,
      email,
      message,
    });

    return {
      state: 'success',
      message:
        "Thank you for contacting us! We'll be in touch with you shortly",
    };
  } catch (err) {
    console.error(err);
    return {
      state: 'error',
      message: 'Something went wrong! Try again later!',
    };
  }
};

export const handleSubscription = async (
  prevState: PrevFormStateProps,
  formData: FormData,
): Promise<{ state: string; message: string }> => {
  const email = formData.get('email')?.toString().trim() || '';
  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (!email) {
    return {
      state: 'error',
      message: 'Email field cannot be empty!',
    };
  }

  if (!reg_email.test(email)) {
    return {
      state: 'error',
      message: 'Must be a valid email address',
    };
  }

  try {
    await client.create({
      _type: 'subscription',
      email,
    });

    return {
      state: 'success',
      message: 'Thank you for your subscription!',
    };
  } catch (err) {
    console.error(err);
    return {
      state: 'error',
      message: 'Something went wrong! Try again later!',
    };
  }
};
