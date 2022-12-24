import Logo from "@components/Icons/Logo"
import Image from "next/image"
import Link from "next/link"

import React from "react"
import { AiFillGithub } from "react-icons/ai"
import { FaCodepen } from "react-icons/fa"
import { RxTwitterLogo } from "react-icons/rx"

import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import type { NextPage } from "next"

const Home: NextPage = () => {
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: () => {
      setMessage(`You're almost in! Check your inbox for a confirmation email`)
      setSubmitted(true)
    },
    validationSchema: yup.object({
      email: yup.string().trim().email('Must be a valid email').required('Email is required'),
    }),
  })

  return (
    <div className="bg-secondary-lighter dark:bg-primary-darker relative z-1 flex flex-col min-h-screen lg:flex-row">
      <div className="grow p-5 lg:p-8 flex flex-col lg:w-2/4">
        <div className="mb-5 lg:mb-8">
          <Logo width={200} height={30} />
        </div>

        <div className="grow flex justify-center items-center">
          <div className="max-w-lg">
            <div className="text-component dark:text-secondary-light mb-5 lg:mb-8">
              <div className="text-contrast-medium dark:text-contrast-lower text-sm lg:text-base mb-2 lg:mb-3">Coming soon</div>
              <h1 className="dark:text-secondary">New year, new look.</h1>
              <p>Get updated at launch and sign up for the monthly-ish newsletter.</p>
            </div>

            <div>
              <form className="news-form js-news-form" onSubmit={formik.handleSubmit}>
                <label className="sr-only" htmlFor="news-input-name">Email</label>
                <div className="news-form__wrapper">
                  <input 
                    className="news-form__input js-news-form__input" 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    id="news-input-email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <button className="news-form__btn js-news-form__btn js-tab-focus border-transparent border-2 hover:border-primary hover:border-2 hover:border-collapse" type="submit">
                    <span>Notify me</span>

                    <span>
                      <svg className="news-form__icon" viewBox="0 0 24 24">
                        <path className="news-form__icon-circle" d="M2,12a10,10,0,0,0,20,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path className="news-form__icon-check" d="M2,12l6,6L22,4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <line className="news-form__icon-excl-line" x1="12" y1="2" x2="12" y2="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <circle className="news-form__icon-excl-dot" cx="12" cy="21.5" r="1.5" fill="currentColor" />
                      </svg>
                    </span>
                  </button>

                  {formik.errors.email && (
                    <div 
                      role="alert" 
                      className="news-form__msg news-form__msg--error"
                    >
                      <p>{formik.errors.email}</p>
                    </div>
                  )}

                  <div hidden={!submitted} role="alert" className="news-form__msg news-form__msg--success p-2 lg:p-3 rounded text-sm lg:text-base">
                    <p>{message}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <footer className="flex items-center justify-between mt-5 lg:mt-8">
          <div>
            <ul className="flex flex-wrap gap-0.5 lg:gap-1 items-center justify-end">
              <li key={`twitter-button`}>
                <Link className="coming-soon__social-btn" href="https://twitter.com/meaganewaller">
                  <RxTwitterLogo width={32} height={32} className="icon w-5 h-auto" />
                </Link>
              </li>

              <li key={`github-button`}>
                <Link className="coming-soon__social-btn" href="https://github.com/meaganewaller">
                  <AiFillGithub width={32} height={32} className="icon w-5 h-auto" />
                </Link>
              </li>

              <li key={`codepen-button`}>
                <Link className="coming-soon__social-btn" href="#">
                  <FaCodepen width={32} height={32} className="icon w-5 h-auto" />
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>

      <figure className="coming-soon__figure lg:w-2/4">
        <Image src={`/static/images/seeyasoon.svg`} alt="Coming soon!" width={1200} height={1800} />
      </figure>
    </div>
  )
}

export default Home
