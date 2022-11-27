// import Loading from 'components/IDE/Loading'
// import { lazy, memo, Suspense, useState } from 'react'

// function Environment(props) {
//   const [src] = useState(props.src)
//   const [env] = useState(props.env)

//   const Template = {
//     IDE: lazy(() => import(`editor/${env}`)),
//   }

//   return (
//     <Suspense fallback={<Loading color={`black`} />}>
//       <Template.IDE src={src} width={props.width} />
//     </Suspense>
//   )
// }

// export default memo(Environment)

import React from 'react'

function IDE() {
  return <div>IDE</div>
}

export default IDE
