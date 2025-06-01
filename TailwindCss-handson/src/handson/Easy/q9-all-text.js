// 9. Design a text block with different font weights and text sizes.

import React from 'react'

const Question9 = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-3xl font-extrabold mb-4">Welcome to Tailwind</h1>
        <h2 className="text-xl font-semibold mb-2">Master utility-first styling</h2>
        <p className="text-base font-normal mb-2">
          Tailwind CSS allows you to build modern UIs with speed and consistency.
        </p>
        <p className="text-sm font-light text-gray-600">
          Learn by building projects and practicing regularly.
        </p>
      </div>
    </div>
  )
}

export default Question9



/*

| Tailwind Class   | Effect                        |
| ---------------- | ----------------------------- |
| `text-3xl`       | Large text (used for heading) |
| `font-extrabold` | Very bold text                |
| `text-xl`        | Slightly smaller heading      |
| `font-semibold`  | Semi-bold                     |
| `text-base`      | Normal paragraph text         |
| `font-normal`    | Regular weight                |
| `text-sm`        | Small text                    |
| `font-light`     | Lighter text                  |



*/