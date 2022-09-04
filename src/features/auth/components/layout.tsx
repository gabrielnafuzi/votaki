import React from 'react'

import { tw } from 'twind'

import { Head } from '@/components/head'

type LayoutProps = {
  children: React.ReactNode
  title: string
  subtitle: string
}

export const Layout = ({ children, title, subtitle }: LayoutProps) => {
  return (
    <>
      <Head title={title} />

      <main className={tw`bg-gray-50`}>
        <section
          className={tw`flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0`}
        >
          <div
            className={tw`w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0`}
          >
            <div className={tw`p-6 space-y-4 md:space-y-6 sm:p-8`}>
              <div>
                <h1
                  className={tw`text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl`}
                >
                  {title}
                </h1>

                <p className={tw`text-sm text-gray-400 mt-1`}>{subtitle}</p>
              </div>

              {children}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
