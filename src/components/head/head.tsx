import React from 'react'

import NextHead from 'next/head'

type HeadProps = {
  title?: string
  description?: string
  children?: React.ReactNode
}

const defaultTitle = 'Votaki'

export const Head = ({ title = '', description = '', children }: HeadProps) => {
  return (
    <NextHead>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>

      <meta name="description" content={description} />

      {children}
    </NextHead>
  )
}
