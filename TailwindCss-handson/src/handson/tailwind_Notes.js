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






  


Important Styling Concepts:




1.FlexBox :

    Utilize Flexbox for layout and alignment:

    Container: flex

    Direction:
        Row: flex-row
        Column: flex-col

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



*/