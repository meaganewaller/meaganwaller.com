import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

interface InputProps {
  label: string,
  htmlType: string
}

function TextInput({ label, htmlType }:InputProps) {
  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="form-control w-full h-full rounded-full"
        aria-label={label}
      />
      <label
        className={clsx(value && 'filled')}
        aria-label={label}
        htmlFor={htmlType}
      >
        {label}
      </label>
    </div>
  )
}

export default function Newsletter() {
  return (
    <section className="newsletter mt-52 py-12 lg:py-20 text-center" id="newsletter">
      <div className="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-xl">
        <div className="text-component mb-5 lg:mb-8 font-mono dark:text-secondary-light">
          <h2 className="text-secondary font-mono">{`A newsletter you'll`}<span className="italic">actually</span> open</h2>
          <p>Get the monthly recap with the latest updates, posts, and resources.</p>
        </div>

        <form className="grid grid-cols-12 gap-1.5 lg:gap-2">
          <div className="col-span-12 sm:col-span-6 min-w-0">
            <TextInput label="First name" htmlType="name" />
          </div>

          <div className="col-span-12 sm:col-span-6 min-w-0">
            <TextInput label="Email" htmlType="email" />
          </div>

          <div className="col-span-12">
            <button className="btn btn--primary w-full h-full font-mono uppercase tracking-wide">Subscribe</button>
          </div>
        </form>

        <p role="alert" className="bg-success/80 text-sm lg:text-base p-2 lg:p-3 rounded-full mt-2 lg:mt-3">
          <strong>Success!</strong> Please check your inbox for a confirmation email.
        </p>

        <div className="mt-2 lg:mt-3">
          <small className="text-xs text-contrast-medium dark:text-secondary-darker">By subscribing you agree to our <Link className="text-contrast-high dark:text-secondary-dark" href="#">privacy policy</Link>.</small>
        </div>
      </div>
    </section>
  )

}
