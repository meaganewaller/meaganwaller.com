export default function Stats() {
  return (
    <section className="py-12 leading-6 text-black border-0 border-solid lg:py-20 sm:py-16 border-zinc-200 bg-zinc-50" id="Metrics">
      <div className="px-4 mx-auto max-w-7xl text-black border-0 border-solid lg:px-8 sm:px-6 border-zinc-200">
        <div className="mx-auto max-w-2xl text-center border-0 border-solid xl:max-w-4xl border-zinc-200">
          <div className="inline-block justify-center items-center py-1 px-3 mb-4 text-xs font-semibold tracking-wider leading-4 uppercase bg-red-200 border border-black border-solid" style={{borderRadius: '44px'}}>
            <div className="tracking-wide uppercase">Stats</div>
          </div>

          <h2 className="mt-0 mb-4 font-sans text-5xl font-medium tracking-tight" style={{ lineHeight: '1.2'}}>
            These numbers don&apos;t lie
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            (& adding more on a regular basis!)
          </p>
        </div>
        <div className="relative mt-12 border-0 border-solid lg:mx-auto lg:mt-20 lg:max-w-5xl border-zinc-200">
          <div className="absolute border-0 border-solid border-zinc-200" style={{inset: '-0.5rem'}}>
            <div className="mx-auto w-full h-full border-0 border-solid opacity-30 border-zinc-200 rainbow-gradient" />
          </div>
          <div className="grid overflow-hidden relative grid-cols-1 gap-y-12 gap-x-20 py-12 px-16 text-center bg-white rounded-2xl border-0 border-solid lg:grid-cols-4 sm:grid-cols-2 border-zinc-200">
            <div className="flex flex-col items-center border-0 border-solid border-zinc-200">
              <p className="m-0 text-5xl font-bold leading-none border-0 border-solid lg:order-2 lg:mt-3 border-zinc-200 text-zinc-900">
                104
              </p>
              <h3 className="mx-0 mt-5 mb-0 text-sm font-bold tracking-widest leading-5 uppercase border-0 border-solid lg:order-1 lg:mt-0 border-zinc-200 text-zinc-600">
                Blog posts
              </h3>
            </div>
            <div className="flex flex-col items-center border-0 border-solid border-zinc-200">
              <p className="m-0 text-5xl font-bold leading-none border-0 border-solid lg:order-2 lg:mt-3 border-zinc-200 text-zinc-900">
                15
              </p>
              <h3 className="mx-0 mt-5 mb-0 text-sm font-bold tracking-widest leading-5 uppercase border-0 border-solid lg:order-1 lg:mt-0 border-zinc-200 text-zinc-600">
                Tutorials
              </h3>
            </div>
            <div className="flex flex-col items-center border-0 border-solid border-zinc-200">
              <p className="m-0 text-5xl font-bold leading-none border-0 border-solid lg:order-2 lg:mt-3 border-zinc-200 text-zinc-900">
                10
              </p>
              <h3 className="mx-0 mt-5 mb-0 text-sm font-bold tracking-widest leading-5 uppercase border-0 border-solid lg:order-1 lg:mt-0 border-zinc-200 text-zinc-600">
                Guides
              </h3>
            </div>
            <div className="flex flex-col items-center border-0 border-solid border-zinc-200">
              <p className="m-0 text-5xl font-bold leading-none border-0 border-solid lg:order-2 lg:mt-3 border-zinc-200 text-zinc-900">
                54
              </p>
              <h3 className="mx-0 mt-5 mb-0 text-sm font-bold tracking-widest leading-5 uppercase border-0 border-solid lg:order-1 lg:mt-0 border-zinc-200 text-zinc-600">
                Snippets
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
