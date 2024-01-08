"use client"
import Image from 'next/image'
import './globals.scss'
import ToggleSwitch from './_components/toggleSwitch'
import { RootState } from './_redux/store';
import { useSelector } from 'react-redux';

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <body className={`${mode === 'dark' ? 'dark' : 'light'} mx-auto max-w-2xl px-5 py-12`}>
      <header className='mb-14 block w-full'>
        <div className="flex flex-row place-content-between">
          <a className="overreacted inline-block text-2xl font-black  scale-100 active:scale-100"><span>overreacted</span></a>
          <span className="relative top-[4px] italic">
            by
            <a target="_blank" className="abramov scale-100 active:scale-100" href="https://danabra.mov">
              <Image
                className="relative -top-1 mx-1 inline h-8 w-8 rounded-full"
                src="https://github.com/gaearon.png"
                alt="Dan Abramov"
                width={180}
                height={37}
                priority
              />
            </a>
          </span>
        </div>
        <ToggleSwitch />
      </header>
      {children}
    </body>
  )
}
