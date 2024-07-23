import { Button, ButtonGroup, Navbar, NavbarCollapse, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

export default function Header() {

    const path = useLocation().pathname;

  return (
    <Navbar className='navbar border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:test-xl font-bold dark:text-white'>
            <span className='anglelogo px-2 py-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 rounded-lg text-white'>Angle's ERMS</span>
        </Link>
        <form>
            <TextInput
                type='text'
                placeholder='Search here...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <button className='w-12 h-10 lg:hidden' color='black' pill>
            <AiOutlineSearch/>
        </button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 sm:inline' color='grey' pill>
                <FaMoon/>
            </Button>
            <Link to='/signin'>
                <Button gradientDuoTone="purpleToBlue">
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
