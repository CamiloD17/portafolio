import React from 'react'
import { contacts } from '../data/information'

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-10 px-4 text-white'>
      <div className=' max-w-6xl mx-auto py-5'>
        <div className='flex flex-wrap gap-4 lg:flex-row lg:justify-between'>
          {contacts.map((contact,key) =>
            <div className='flex items-center gap-4' key={key}>
              <img className='shadow-xl w-8 h-9 cursor-pointer ' src={contact.icon}  onClick={() => window.open(contact.url)} alt={contact.name} />
              <div>
                <h1>{contact.name}</h1>
                {contact.name === "Gmail"
                  ? <h1>{contact.url}</h1>
                  : <h1 className='cursor-pointer' onClick={() => window.open(contact.url)}>{contact.url}</h1>
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer