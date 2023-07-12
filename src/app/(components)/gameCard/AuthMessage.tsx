import { useEffect, useState } from 'react'
import CloseButton from '../CloseButton'
import Link from 'next/link'
import Button from '../Button'
import Image from 'next/image'

export default function AuthMessage() {

  const [modalVisible, setModalVisible] = useState(true)
  const [rendering, setRendering] = useState(true)

  useEffect(() => {
    setRendering(false)
  }, [])

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  if (modalVisible) return (

    (<div className='fixed top-0 right-0  w-full h-full flex items-center justify-center z-50'>

      <div className={`grid gap-4  text-black p-12  relative mx-4 text-center z-20
      border-theme-primary border-2 rounded-lg shadow-sm shadow-theme-secondary bg-white
      transition-opacity duration-500  ${rendering ? 'opacity-0' : 'opacity-100'}`}>

        <span onClick={handleCloseModal}>
          <CloseButton className=' text-black' />
        </span>
        <h2 className='text-32 font-bold mb-4'>Ola</h2>

        <span className='grid justify-center w-full'>
          <Image className='animate-bounce-slow' src={'/auth.png'} height={100} width={100} alt='Não encontramos nada que satisfaça seus filtros' />
        </span>

        <p className='mobile:text-14'>Para fazer isto voce precisa de uma conta</p>

        <Link href='auth/entrar' onClick={() => { setModalVisible(false) }} className='w-full' >
          <Button colorStyle='secondary'><span>Entrar</span></Button >
        </Link>

        <Link href='/auth/registrar' onClick={() => { setModalVisible(false) }} className='w-full'>
          <Button colorStyle='primary' ><span>Registrar</span></Button >
        </Link>

      </div>
    </div >)
  )

  return <></>
}
