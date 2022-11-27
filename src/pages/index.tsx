import { App } from 'components/Layout/App'
import CourseCard from 'app/course/CourseCard'
import Header from 'components/Header'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Footer from 'components/Footer'

function Home() {
  const navigate = useNavigate()

  return (
    <App className='scroll-white'>
      <App.Header className='bg-glass-100'>
        <Header />
      </App.Header>

      <App.Container>
        <section className='h-full flex-col fc pt-24 pb-20 md:pt-20 | space-y-5 md:space-y-10 relative z-20'>
          <div
            className={`circle-animate md:w-72 w-36 h-32 md:h-64 absolute left-[-10rem] top-0 blur-[50px] opacity-50 md:opacity-30 duration-200 z-10`}
          ></div>

          <h1 className='uppercase text-4xl md:text-5xl font-bold | z-20 relative'>
            <span className='gradient-blue'>6 oyda</span>

            <span className='text-gray-700 absolute inset-0 | overlay-1'>
              6 oyda
            </span>
          </h1>

          <h1 className='uppercase text-4xl md:text-5xl font-bold | z-20 relative'>
            <span className='gradient-pink'>JUNIOR Frontend</span>
            <span className='text-gray-700 absolute inset-0 | overlay-2'>
              JUNIOR Frontend
            </span>
          </h1>

          <h1 className='uppercase text-4xl md:text-5xl font-bold | z-20 relative text-center'>
            <span className='gradient-yellow'>dasturchi bo'ling</span>
            <span className='text-gray-700 absolute inset-0 | overlay-3'>
              dasturchi bo'ling
            </span>
          </h1>
          <p className='py-5 md:py-0 text-sm md:text-base mt-6 max-w-2xl mx-auto text-center text-gray-700 leading-relaxed md:mt-8 lg:mt-10'>
            Codify ta'lim platofrmasida Junior Frontendchi bo'lish uchun kerakli
            kurslarni mutlaqo <b>BEPUL</b> o'rganishingiz mumkun!
          </p>
          <div className='absolute top-1/5 md:top-1/4 right-0 h-14 md:h-20 pointer-events-none | z-10'>
            <img
              src='https://i.ibb.co/Kj1DsJt/mouse-keyboard.png'
              alt='mouse'
              className='h-full object-contain'
            />
          </div>
          <div className='w-full flex-col md:flex-row flex items-center justify-center md:space-x-10 space-y-5 md:space-y-0 | md:pt-8'>
            <a
              href='#courses'
              className='relative py-2.5 md:py-3 w-3/4 md:w-1/5 font-bold text-black group outline-none focus:outline-none'
            >
              <span className='absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 md:-translate-x-2 -translate-y-1 md:-translate-y-2 bg-transparent border-2 border-gray-primary group-hover:translate-x-0 group-hover:translate-y-0'></span>
              <span className='absolute inset-0 w-full h-full bg-gray-primary active:bg-blue-700 hover:bg-blue-700 duration-200'></span>
              <span className='relative uppercase md:text-base text-white pointer-events-none | flex items-center justify-center'>
                <p>Boshlash</p>
                <svg
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 md:h-5 ml-5'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9.13841 5.13807L10.2051 4.07137C11.0645 3.21201 12.5718 2.61563 14.0696 2.40167C14.8078 2.29622 15.5058 2.28966 16.0755 2.37498C16.6653 2.4633 17.0268 2.63595 17.1956 2.80477C17.3644 2.97357 17.5371 3.335 17.6254 3.92476C17.7107 4.49447 17.7041 5.19252 17.5987 5.93068C17.3847 7.42851 16.7883 8.93583 15.9289 9.79527L10.0003 15.7239L8.47171 14.1953C8.21136 13.9349 7.78925 13.9349 7.5289 14.1953C7.26855 14.4556 7.26855 14.8777 7.5289 15.1381L9.52892 17.1381C9.78927 17.3984 10.2114 17.3984 10.4717 17.1381L11.2013 16.4085L12.762 19.0097C12.8676 19.1857 13.0484 19.3033 13.2522 19.3283C13.4559 19.3534 13.6599 19.2832 13.805 19.1381L16.4717 16.4714C16.6201 16.323 16.6899 16.1135 16.6603 15.9057L16.0408 11.569L16.8717 10.7381C18.0123 9.59744 18.6826 7.7714 18.9186 6.11924C19.0382 5.2824 19.0524 4.4513 18.944 3.72728C18.8386 3.02331 18.6029 2.32643 18.1384 1.86193C17.6739 1.39745 16.977 1.16178 16.273 1.05635C15.549 0.947926 14.7179 0.962193 13.881 1.08173C12.2289 1.31774 10.4028 1.988 9.26225 3.12856L8.43128 3.95957L4.09461 3.34005C3.88688 3.31037 3.6773 3.38023 3.52893 3.52861L0.86226 6.19527C0.717097 6.34044 0.646909 6.54438 0.671992 6.74813C0.697076 6.95189 0.814633 7.13272 0.990668 7.23834L3.59185 8.79904L2.86228 9.5286C2.73725 9.65363 2.66702 9.8232 2.66701 10C2.66701 10.1768 2.73725 10.3464 2.86228 10.4714L4.86228 12.4714C5.12263 12.7318 5.54474 12.7318 5.80509 12.4714C6.06544 12.2111 6.06544 11.789 5.80509 11.5286L4.27649 10L5.13842 9.13808L9.13841 5.13807ZM13.466 17.5915L12.1731 15.4367L14.8622 12.7476L15.2932 15.7643L13.466 17.5915ZM4.56367 7.82721L7.25279 5.13808L4.23603 4.70712L2.40883 6.53432L4.56367 7.82721ZM3.1384 13.8047C3.39875 13.5444 3.39875 13.1223 3.1384 12.8619C2.87805 12.6016 2.45594 12.6016 2.19559 12.8619L0.86226 14.1953C0.60191 14.4556 0.60191 14.8777 0.86226 15.1381C1.12261 15.3984 1.54472 15.3984 1.80507 15.1381L3.1384 13.8047ZM5.13843 15.8048C5.39878 15.5444 5.39879 15.1223 5.13844 14.862C4.8781 14.6016 4.45599 14.6016 4.19563 14.8619L1.52893 17.5286C1.26858 17.7889 1.26857 18.211 1.52892 18.4714C1.78927 18.7317 2.21138 18.7317 2.47173 18.4714L5.13843 15.8048ZM7.1384 17.8047C7.39875 17.5444 7.39875 17.1223 7.1384 16.8619C6.87805 16.6016 6.45594 16.6016 6.19559 16.8619L4.86226 18.1953C4.60191 18.4556 4.60191 18.8777 4.86226 19.1381C5.12261 19.3984 5.54472 19.3984 5.80507 19.1381L7.1384 17.8047ZM12.6667 8.99847C13.5863 8.99847 14.3318 8.25298 14.3318 7.33338C14.3318 6.41378 13.5863 5.66829 12.6667 5.66829C11.7471 5.66829 11.0016 6.41378 11.0016 7.33338C11.0016 8.25298 11.7471 8.99847 12.6667 8.99847Z'
                    fill='white'
                  />
                </svg>
              </span>
            </a>

            <button
              onClick={() => toast.error('Platforma beta versiyada!')}
              className='relative py-1.5 md:py-3 w-3/4 md:w-1/5  text-gray-400 group outline-none focus:outline-none'
            >
              <span className='absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 md:-translate-x-2 -translate-y-1 md:-translate-y-2 bg-transparent border-2 border-gray-400 group-hover:translate-x-0 group-hover:translate-y-0'></span>
              <span className='absolute inset-0 w-full h-full border bg-white border-gray-400 text-gray-primary duration-200'></span>
              <span className='relative pointer-events-none uppercase md:text-base'>
                Ro’yxattan o’tish
              </span>
            </button>
          </div>
        </section>
      </App.Container>

      <div id='courses'></div>

      <section className='bg-[#c6fe6c24]'>
        <div className='px-3 md:px-0 mt-10 md:mt-30 py-10'>
          <div className='available:courses'>
            <h1 className='md:text-3xl text-2xl font-bold md:px-28 | text-gray-primary'>
              Kurslar:
            </h1>
            <div className='courses | grid xl:grid-cols-2 grid-cols-1 md:gap-x-20 md:gap-y-20 gap-y-14 | xl:px-28 pt-5'>
              <div onClick={() => navigate('/course')} className='relative'>
                <CourseCard
                  image={'https://i.ibb.co/Tr8Nntq/htmll.png'}
                  progress={0}
                  language={`HTML`}
                  level={1}
                />
              </div>
            </div>
          </div>

          <div className='coming:courses | pt-12 md:pt-36'>
            <div className='available:courses'>
              <h1 className='md:text-3xl text-2xl font-bold md:px-28 | text-gray-primary'>
                Tez orada:
              </h1>

              <div className='courses | grid xl:grid-cols-2 grid-cols-1 md:gap-x-20 md:gap-y-20 gap-y-14 | xl:px-28 pt-5'>
                <div
                  onClick={() =>
                    toast('Tez orada!', {
                      icon: '⌛',
                    })
                  }
                >
                  <CourseCard
                    image={'https://i.ibb.co/9VrT1qB/Group.png'}
                    progress={0}
                    language={`Vue JS`}
                    level={3}
                    wait={true}
                  />
                </div>
                <div
                  onClick={() =>
                    toast('Tez orada!', {
                      icon: '⌛',
                    })
                  }
                  className='relative'
                >
                  <CourseCard
                    image={'https://i.ibb.co/pPCpKXK/css.png'}
                    progress={10}
                    language={`CSS`}
                    level={2}
                  />
                </div>

                <div
                  onClick={() =>
                    toast('Tez orada!', {
                      icon: '⌛',
                    })
                  }
                  className='relative'
                >
                  <CourseCard
                    image={'https://i.ibb.co/MDwS9Db/Group-230-2.png'}
                    progress={33}
                    language={`Javascript`}
                    level={2}
                  />
                </div>

                <div
                  onClick={() =>
                    toast('Tez orada!', {
                      icon: '⌛',
                    })
                  }
                  className='relative'
                >
                  <CourseCard
                    image={'https://i.ibb.co/JnR1qXW/Group-230-1.png'}
                    progress={45}
                    language={`React JS`}
                    level={3}
                    new={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='why:we w-full overflow-hidden | pt-28 px-3'>
        <h1 className='title | text-3xl font-extrabold | text-gray-primary | pt-5 pb-10 | text-center uppercase'>
          <span className='gradient-blue'>Codify</span> qanday ishlaydi?
        </h1>
        <div className='space-y-16 md:space-y-0'>
          <div className='start | flex-col md:flex-row flex items-center justify-between relative'>
            <div className='info | md:w-1/2'>
              <h1 className='title | text-2xl md:text-3xl font-extrabold | text-gray-primary | pb-5'>
                Teoriya.
              </h1>
              <p className='text-[#787878] text-sm w-3/4'>
                Sizning kelajagingiz uchun professionallar tomonidan
                tayyorlangan eng yaxshi maqolalarni o'qing
              </p>

              <ul className='pt-5'>
                <li className='| text-gray-primary | fc | mb-2'>
                  <span className='text-lg mr-3'>✔</span> Yoqimli interfeys
                </li>
                <li className='| text-gray-primary | fc | mb-2'>
                  <span className='text-lg mr-3'>✔</span> Qabul qilish oson
                </li>
                <li className='| text-gray-primary | fc | mb-2'>
                  <span className='text-lg mr-3'>✔</span> Interaktiv rejim
                </li>
              </ul>
            </div>

            <div className='hidden md:flex h-96 w-[1.1px] bg-gradient-to-b from-blue-300/50 to-blue-700 | relative flex-col items-center justify-center'>
              <div className='box | bg-gradient-blue w-8 h-8 flex items-center justify-center text-white rounded-full | '>
                1
              </div>
            </div>

            <div className='image | h-48 md:h-96 w-1/2 overflow-hidden md:relative absolute scale-150 md:scale-100 -right-1/4 top-10 md:top-0 md:right-0'>
              <img
                src='https://i.ibb.co/87D9wJ1/article.png'
                alt='codify.uz - Article'
                className='h-full object-contain mx-auto'
              />
            </div>
          </div>

          <div className='start | flex-col md:flex-row flex items-center justify-between relative'>
            <div className='info | md:w-1/2'>
              <h1 className='title | text-2xl md:text-3xl font-extrabold | text-gray-primary | pb-5'>
                Amaliyot.
              </h1>
              <p className='text-[#787878] text-sm w-3/4'>
                Sizning kelajagingiz uchun professionallar tomonidan
                tayyorlangan eng yaxshi maqolalarni o'qing
              </p>

              <ul className='pt-5'>
                <li className='| text-gray-primary | fc | mb-2'>
                  <span className='text-lg mr-3'>✔</span> Yoqimli interfeys
                </li>
                <li className='| text-gray-primary | fc | mb-2'>
                  <span className='text-lg mr-3'>✔</span> Qabul qilish oson
                </li>
                <li className='| text-gray-primary | fc | mb-2'>
                  <span className='text-lg mr-3'>✔</span> Interaktiv rejim
                </li>
              </ul>
            </div>

            <div className='hidden md:flex h-96 w-[1.1px] bg-blue-700 | relative flex-col items-center justify-center'>
              <div className='box | bg-gradient-blue w-8 h-8 flex items-center justify-center text-white rounded-full | '>
                2
              </div>
            </div>

            <div className='image | h-48 md:h-96 w-1/2 overflow-hidden md:relative absolute scale-150 md:scale-100 -right-1/4 top-10 md:top-0 md:right-0'>
              <img
                src='https://i.ibb.co/q7H8cm4/editor.png'
                alt='codify.uz - Article'
                className='h-full object-contain mx-auto'
              />
            </div>
          </div>

          <div className='start | flex-col md:flex-row flex items-center justify-between relative'>
            <div className='info | md:w-1/2'>
              <h1 className='title | text-2xl md:text-3xl font-extrabold | text-gray-primary | pb-5'>
                Testlar.
              </h1>
              <p className='text-[#787878] text-sm w-3/4'>
                Sizning kelajagingiz uchun professionallar tomonidan
                tayyorlangan eng yaxshi maqolalarni o'qing
              </p>

              <ul className='pt-5'>
                <li className='| text-gray-primary | fc | mb-2'>
                  <span className='text-lg mr-3'>✔</span> Yoqimli interfeys
                </li>
                <li className='| text-gray-primary | fc | mb-2'>
                  <span className='text-lg mr-3'>✔</span> Qabul qilish oson
                </li>
                <li className='| text-gray-primary | fc | mb-2'>
                  <span className='text-lg mr-3'>✔</span> Interaktiv rejim
                </li>
              </ul>
            </div>

            <div className='hidden md:flex h-96 w-[1.1px] bg-gradient-to-b from-blue-700 to-blue-300/50 | relative flex-col items-center justify-center'>
              <div className='box | bg-gradient-blue w-8 h-8 flex items-center justify-center text-white rounded-full | '>
                3
              </div>
            </div>

            <div className='image | h-48 md:h-96 w-1/2 overflow-hidden md:relative absolute scale-150 md:scale-100 -right-1/4 top-10 md:top-0 md:right-0'>
              <img
                src='https://i.ibb.co/HTJ3VTh/exersice.png'
                alt='codify.uz - Article'
                className='h-full object-contain mx-auto'
              />
            </div>
          </div>
        </div>
      </div>

      <App.Footer className='shadow-300 mt-10 py-7 px-3'>
        <Footer />
      </App.Footer>
    </App>
  )
}

export default Home
