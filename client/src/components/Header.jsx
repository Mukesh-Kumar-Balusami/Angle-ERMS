import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

export default function Header() {

    const path = useLocation().pathname;

  return (
    <Navbar className='navbar border-b-2'>
        <div>
            <Link to='/' className='self-center whitespace-nowrap text-sm sm:test-xl font-bold dark:text-white'>
                <span className='anglelogo px-2 py-1 bg-gradient-to-r from-green-300 via-green-400 to-green-600 rounded-lg text-white'>ERMS</span>
            </Link>
            <p className='font-bold text-red-600 text-xs'>
                An Angle's Product
            </p>
        </div>
        <form>
            <TextInput
                type='text'
                placeholder='Search here...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <button className='w-12 h-10 lg:hidden' color='black' >
            <AiOutlineSearch/>
        </button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 sm:inline' color='grey' >
                <FaMoon/>
            </Button>
            <Link to='/signin'>
                <Button gradientDuoTone="purpleToBlue" outline>
                    Sign in
                </Button>
            </Link>
            <Navbar.Toggle></Navbar.Toggle>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as={'div'}>
                <Link to='/'>
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'} as={'div'}>
                <Link to='/about'>
                    About
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/projects'} as={'div'}>
                <Link to='/projects'>
                    Projects
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
