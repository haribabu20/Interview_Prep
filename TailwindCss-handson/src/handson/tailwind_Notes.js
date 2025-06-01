/*

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. Here are some key concepts and features:


Handson questions:

🟢 Low-Level Hands-On (Beginner)

1. Create a button with a blue background, white text, and hover effect.
2. Build a centered heading with large font size and gray text.
3. Create a card with padding, rounded corners, and shadow.
4. Design a vertical list of 3 items with spacing between them.
5. Make a responsive image with rounded corners and border.
6. Create a form input with padding, border, and focus outline.
7. Build a two-column layout using Flexbox with equal-width boxes.
8. Create a badge component with a colored background and small text.
9. Design a text block with different font weights and text sizes.
10. Create a div with background color, padding, and fixed height/width.




🟡 Medium-Level Hands-On (Intermediate)

11. Build a responsive navbar with logo on the left and nav links on the right.
12. Create a pricing card with a title, price, features list, and CTA button.
13. Design a responsive 3-column grid of cards that stack on mobile.
14. Make a login form with labels, inputs, and a submit button styled with Tailwind.
15. Create a modal dialog box with overlay and centered content.
16. Build a hover-animated profile card with shadow transition.
17. Make a notification alert with icons, colored border, and dismiss button.
18. Create a responsive image gallery with hover effects on images.
19. Design a sticky header that changes background on scroll (use Tailwind classes).
20. Implement dark mode styles for a simple UI component.





🔴 High-Level Hands-On (Advanced)

21. Build a complete blog post layout with responsive typography and sidebar.
22. Create a dashboard layout using grid and flex utilities for sidebar and main content.
23. Make a multi-step progress bar component using Tailwind utility classes.
24. Build a dropdown menu with hover and focus states using only Tailwind.
25. Create a responsive table with hover states and zebra striping.
26. Design a tab component with active/inactive styles and transitions.
27. Build a responsive footer with multiple sections and social icons.
28. Create a testimonial slider layout using Tailwind and transitions.
29. Implement a toggle switch UI using Tailwind and pseudo-classes.
30. Build a complete landing page (hero, features, CTA) using only Tailwind.








Tailwind CSS Notes:

1. h-screen [Easy Question 1]
2. text-9xl [Easy Question 2] --> largest text size in Tailwind
3. max-w-sm [Easy Question 3] --> sets maximum width to small size
4. space-x-6 [Easy Question 4] --> adds horizontal spacing between elements
   space-y-6 [Easy Question 4] --> adds vertical spacing between elements
5. hover:bg-blue-500 [Easy Question 1] --> changes background color on hover
   hover:scale-105 [Easy Question 5] --> scales image on hover
   w-full [Easy Question 5] --> sets width to 100% of parent container
   max-w-xs [Easy Question 5] --> sets maximum width to extra small size
6. focus:outline-none [Easy Question 6] --> removes default focus outline
   focus:ring-2 [Easy Question 6] --> adds a ring around the input on focus
   border border-gray-400 [Easy Question 6] --> adds a gray border to the input
7. w-lg [Easy Question 7] --> sets width to large size
   w-3/4 [Easy Question 7] --> sets width to 75% of parent container
   min-w-200 [Easy Question 7] --> sets minimum width to 200px
8. flex flex-col [Easy Question 10] --> creates a flex container with column direction





  


Important Styling Concepts:




1.FlexBox :

    Utilize Flexbox for layout and alignment:

    Container: flex


    Direction:
        Row: flex-row
        Column: flex-col


    flex-row:
        Flex by default will be flex flex-row.
        items-center will center items vertically.[down]
        justify-center will center items horizontally.[across]


    flex-col:
        Flex in column direction with flex-col.
        items-center will center items horizontally.[across]
        justify-center will center items vertically.[down]


    Justify Content:
        Start: justify-start
        Center: justify-center
        End: justify-end
        Between: justify-between
        Around: justify-around
        Evenly: justify-evenly

    Align Items:
        Start: items-start
        Center: items-center
        End: items-end
        Stretch: items-stretch
        Baseline: items-baseline


2.Grid:

    Implement grid layouts with these utilities:

  Container: grid
  Columns: grid-cols-{n} (e.g., grid-cols-3)
  Rows: grid-rows-{n}   (e.g., grid-rows-2)
  Gap: gap-{size}       (e.g., gap-4)
  Column Span: col-span-{n}
  Row Span: row-span-{n}


3. Font Weight
  Set the thickness of text:

    font-thin
    font-extralight
    font-light
    font-normal
    font-medium
    font-semibold
    font-bold
    font-extrabold
    font-black




4. Text Alignment:
  Align text within elements:

    Left: text-left
    Center: text-center
    Right: text-right
    Justify: text-justify





Tailwind CSS Summary:

// Tailwind Base + Utility Class Notes

// 1. border-*
//    - Requires: border
//    - Example: border border-red-500

// 2. ring-*
//    - Requires: focus state
//    - Example: focus:ring-2 focus:ring-blue-500

// 3. shadow-*
//    - No base required
//    - Example: shadow-lg

// 4. outline-*
//    - Requires: focus or manual trigger
//    - Example: focus:outline-none outline-blue-500

// 5. divide-*
//    - Requires: divide-x or divide-y on flex parent
//    - Example: divide-x divide-gray-300

// 6. space-x/y-*
//    - Requires: flex or grid with multiple children
//    - Example: space-y-4 flex flex-col

// 7. text-*
//    - No base required
//    - Example: text-red-500, text-lg

// 8. bg-*
//    - No base required
//    - Example: bg-blue-100


// 9. w-* h-*, max-w-*, min-w-*, min-h-*
//    - Requires: no specific base, can be used anywhere
//    - No base required
//    - Example: w-64, h-screen

// 10. max-w-* max-h-*
//     - No base required
//     - Example: max-w-sm, max-h-80

// 11. min-w-* min-h-*
//     - No base required
//     - Example: min-w-[200px]

// 12. inset-*
//     - Requires: absolute/relative positioning
//     - Example: absolute inset-0

// 13. top/right/bottom/left-*
//     - Requires: absolute/relative
//     - Example: absolute top-0 left-4

// 14. z-*
//     - Often useful with layered positioning
//     - Example: z-50

// 15. flex-*
//     - Requires: flex
//     - Example: flex justify-between

// 16. grid-*
//     - Requires: grid
//     - Example: grid grid-cols-3

// 17. col-span-*
//     - Requires: grid layout
//     - Example: col-span-2

// 18. gap-*
//     - Requires: flex/grid container
//     - Example: grid gap-4

// 19. overflow-*
//     - No base required
//     - Example: overflow-hidden

// 20. scroll-*
//     - Requires: overflow-scroll
//     - Example: overflow-x-scroll scroll-smooth

// 21. transition-*, duration-*, ease-*
//     - Requires: transition
//     - Example: transition duration-300 ease-in-out

// 22. cursor-*
//     - No base required
//     - Example: cursor-pointer

// 23. pointer-events-*
//     - No base required
//     - Example: pointer-events-none

// 24. opacity-*
//     - No base required
//     - Example: opacity-75

// 25. transform, scale-*, rotate-*, translate-*
//     - Requires: transform
//     - Example: transform scale-105 rotate-45 translate-x-2

// 26. hover:*, focus:*, active:*, group-hover:*, group-focus:*
//     - Requires: hover/focus state
//     - Example: hover:bg-blue-500 focus:ring-2 active:scale-95 group-hover:text-red-500

// 27. dark:*
//     - Requires: dark mode enabled
//     - Example: dark:bg-gray-800 dark:text-white

// 28. responsive prefixes (sm:, md:, lg:, xl:)
//     - Requires: responsive design
//     - Example: sm:text-lg md:bg-blue-200 lg:p-6 xl:w-1/2

// 29. custom utilities (e.g., @apply)
//     - Requires: custom CSS
//     - Example: @apply bg-red-500 text-white p-4 rounded














*/