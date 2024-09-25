import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Pagnation({ totalPostCount }: { totalPostCount: number }) {
  let router = useRouter()

  /*
   pages give number,base on number we create a array. base on array we map a list elements
   totalPostCount = 3
   conver into array [0,1,2]
   base on array create list in array
   
  */

  let pageIntoArray = Array.from(Array(totalPostCount).keys())

  return (
    <nav aria-label=" my-6">
      <ul className="pagination justify-content-center">
        {pageIntoArray.map((page) => {
          return (
            <li key={page} className="page-item p-2">
              <Link
                href={page === 0 ? '/' : `/page/${page + 1}`}
                className="page-link"
              >
                {page + 1}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagnation
