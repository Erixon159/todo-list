import Image from 'next/image'
import NotFoundImage from '@/public/404.gif'

export default async function NotFound() {
  return (
    <div className="flex h-full justify-center items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center">
      <div className="flex flex-col">
        <h1 className="text-9xl tracking-tight text-slate-700">404</h1>
        <p>Not found...</p>
      </div>

      <Image src={NotFoundImage} alt="not-found" className="h-5/6 w-auto" />
    </div>
  )
}
