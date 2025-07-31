'use client';

import Form from 'next/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useActionState } from 'react';
import { submitContactForm } from '@/lib/actions';
import clsx from 'clsx';
import Spinner from './Spinner';

const LABLE_CLASS = `after:content-['*'] after:ml-0.5 after:text-red-800`;

const initialFormState = {
  state: '',
  message: '',
  field: '',
};

const ContactForm = () => {
  const [state, actionFunction, isPending] = useActionState(
    submitContactForm,
    initialFormState,
  );
  return (
    <Form
      action={actionFunction}
      className="flex flex-col gap-y-5 text-fs-100"
      noValidate
    >
      <div className="flex flex-col gap-y-2">
        <label htmlFor="name" className={LABLE_CLASS}>
          Full Name
        </label>
        <Input name="name" id="name" autoComplete="name" required />
        {state.state === 'error' && state.field === 'fullName' ? (
          <p className="text-red-500 text-[0.6rem] italic">{state.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="email" className={LABLE_CLASS}>
          Email
        </label>
        <Input name="email" id="email" autoComplete="email" required />
        {state.state === 'error' && state.field === 'email' ? (
          <p className="text-red-500 text-[0.6rem] italic">{state.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="message" className={LABLE_CLASS}>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          autoComplete="first-name"
          rows={10}
          className="border-2 rounded-sm indent-2 py-2 outline-none focus-visible:ring focus-visible:ring-primary-200"
          required
        ></textarea>
        {state.state === 'error' && state.field === 'message' ? (
          <p className="text-red-500 text-[0.6rem] italic">{state.message}</p>
        ) : null}
      </div>

      <Button type="submit" className={clsx(isPending && 'bg-primary-100/60')}>
        {isPending ? <Spinner /> : <span>Submit</span>}
      </Button>
    </Form>
  );
};

export default ContactForm;
