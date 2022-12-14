function Hero() {
  return (
    <>
      <div 
        data-component-name="GridPattern" 
        className="grid-background overflow-hidden p-0 m-0 align-baseline bg-white border-0 scroll-auto text-yellow-green-500 antialiased"
        style={{ 
          animationDuration: "0.01ms", 
          animationIterationCount: "1", 
          transitionDuration: "0.01ms"
        }}
      >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="rounded-3xl bg-yellow-green-500 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-emerald-900">Sign up for our newsletter</h2>
            <p className="mt-4 max-w-3xl text-lg text-black">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet
              fugiat.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-900 px-5 py-3 text-base font-medium text-yellow-green-500 hover:bg-emerald-800 hover:text-yellow-green-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Notify me
              </button>
            </form>
            <p className="mt-3 text-sm text-black">
              We care about the protection of your data. Read our{' '}
              <a href="#" className="font-medium text-emerald-800 underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
      </>
  )
}


export default Hero
