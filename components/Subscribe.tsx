import { FormEvent, useState } from "react";

import useSWR from 'swr'
import Link from "next/link";

import fetcher from "@lib/utils/fetcher";
import { Subscribers } from "@localTypes/subscribers";
import { Form, FormState } from '@localTypes/form'

type Props = {
  formId: string
}

const SubscribeForm = ({ formId }: Props) => {
  const [form, setForm] = useState<FormState>({ state: Form.Initial })
  const { data } = useSWR<Subscribers>(
    `/api/convertkit/subscribers/${formId}`,
    fetcher
  )

  const subscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setForm({ state: Form.Loading })

    const res = await fetch(`/api/convertkit/subscribe/${formId}`, {
      body: JSON.stringify({
        email: e.currentTarget.elements['email'].value,
        first_name: (e.currentTarget.elements.namedItem('first_name') as HTMLInputElement).value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error, message } = await res.json()
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      })
      return
    }

    setForm({
      state: Form.Success,
      message,
    })
  }

  return (
    <div className="flex flex-col font-extra">
      {form.state !== Form.Success && (
        <>
          <h3 className="font-medium text-3xl mb-3.5 lg:text-4xl text-center text-primary-darker dark:text-secondary-light font-mono">
            {`A newsletter you'll`}{' '}
            <em>actually</em> open
          </h3>
          <p className="leading-6 text-center">
            A monthly-ish newsletter with updates from the blog, my life, and things I find around the web.
          </p>
        </>
      )}

      {form.state !== Form.Success && form.state !== Form.Error && (
        <>
          <form
            name="subscribe-form"
            className="flex flex-col items-center w-full space-y-3 mb-8 mt-8"
            onSubmit={subscribe}
            target="_blank"
          >
            <div className="flex flex-col space-y-4 w-full font-light">
              <input
                disabled={form.state === Form.Loading}
                type="text"
                aria-label="First Name"
                name="first_name"
                placeholder="First name"
                className="transition-colors w-full bg-white px-5 py-3 rounded-full border-[3px] border-contrast-higher/8 focus:outline-none focus:border-secondary-darker text-black"
              />
              <input
                disabled={form.state === Form.Loading}
                type="email"
                placeholder="Email"
                className="transition-colors w-full bg-white px-5 py-3 rounded-full border-[3px] border-contrast-higher/8 focus:outline-none focus:border-secondary-darker text-black"
                name="email"
                aria-label="Email"
              />
            </div>
            <button
              type="submit"
              aria-label="Subscribe"
              name="subscribe"
              className="transition-all flex items-center bg-primary text-white justify-center space-x-1 px-5 py-3 rounded-full w-full hover:bg-primary-darker"
            >
              Subscribe
            </button>
            <small>No spam - unsubscribe at anytime!</small>
            {data?.count > 99 && (
              <p className="text-lg text-primary-darker dark:text-primary-lighter">
                Join {data?.count}+ subscribers
              </p>
            )}
          </form>
        </>
      )}
      {form.state === Form.Success && (
        <p>{form.message}</p>
      )}
      {form.state === Form.Error && (
        <p>{form.message}  😕 Reach out to me on{' '}
          <Link href="https://twitter.com/meaganewaller" target="_blank">
            Twitter
          </Link>{' '}
          about this.
        </p>
      )}
    </div>
  )
}

export default SubscribeForm
