import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    

<footer className=" rounded-lg shadow bg-orange-200 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image src="/logo.webp" width={150} height={150} className="h-8" alt="Flowbite Logo" />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0 ">
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-800 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-800 sm:text-center ">© 2024 <a href="" className="hover:underline">Hi-Tours™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer
