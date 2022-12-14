import Logo from 'components/Logo'
import { toast } from 'react-hot-toast'

function Header(props) {
  return (
    <div className='container fcb | md:py-3 py-3 px-3'>
      <Logo className='h-7' />

      <nav>
        <ul className='hidden flex-col md:flex md:flex-row justify-center items-between w-full'>
          <li className='text-blue-700 | fc | mx-7 px-5 py-2 | text-base | cursor-pointer'>
            <span className='inline-block | mr-3 | w-2 h-2 | bg-blue-700'></span>
            Bosh sahifa
          </li>

          <li className='text-[#888888] | fc | mx-7 px-5 | text-base | cursor-pointer'>
            Blog
          </li>

          <li className='text-[#888888] | fc | mx-7 px-5 | text-base | cursor-pointer'>
            Biz haqimizda
          </li>
        </ul>
      </nav>

      <button onClick={() => toast.error('Platforma beta versiyada!')}>
        <div className='duration-100 rounded-full px-3 py-1 hover:bg-blue-100/20 | flex items-center justify-center | text-base md:font-bold text-blue-700'>
          <h3 className='text-base md:text-base'>Kirish</h3>

          <div className='svg | ml-3'>
            <svg
              viewBox='0 0 16 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-5'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.5 0.875C5.15482 0.875 4.875 1.15482 4.875 1.5C4.875 1.84518 5.15482 2.125 5.5 2.125H12.875V12.875H5.5C5.15482 12.875 4.875 13.1548 4.875 13.5C4.875 13.8452 5.15482 14.125 5.5 14.125H13C13.6213 14.125 14.125 13.6213 14.125 13V2C14.125 1.37868 13.6213 0.875 13 0.875H5.5ZM7.69194 4.80806C7.44786 4.56398 7.05214 4.56398 6.80806 4.80806C6.56398 5.05214 6.56398 5.44786 6.80806 5.69194L7.99112 6.875H1.5C1.15482 6.875 0.875 7.15482 0.875 7.5C0.875 7.84518 1.15482 8.125 1.5 8.125H7.99112L6.80806 9.30806C6.56398 9.55214 6.56398 9.94786 6.80806 10.1919C7.05214 10.436 7.44786 10.436 7.69194 10.1919L9.94194 7.94194C10.186 7.69786 10.186 7.30214 9.94194 7.05806L7.69194 4.80806Z'
                fill='#017AFF'
              />
            </svg>
          </div>
        </div>
      </button>
    </div>
  )
}

export default Header
