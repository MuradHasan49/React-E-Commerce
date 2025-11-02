import React from 'react'

const SecondBTN = ({BTNtext}) => {
  return (
    <>
      <div className="container xl: mx-auto p-5">
        <button className=" rounded-b-sm bg-red-500 hover:bg-red-700 text-white font-medium py-4 px-12 rounded">{BTNtext}</button>
      </div>
    </>
  )
}

export default SecondBTN
