import React from 'react'

interface SectionComponentProps {
    children: React.ReactNode
  }

const SectionComponent = ({children}: SectionComponentProps) => {
  return (
    <section className="pt-4 pb-10 mx-auto container flex flex-col justify-center p-6 sm:py-12 lg:px-20 lg:pt-8 lg:pb-14 lg:justify-between z-4">
      {children}
    </section>
  )
}

export default SectionComponent