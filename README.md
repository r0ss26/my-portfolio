# Portfolio Website



General project documentation is to be compiled as a single markdown file named `README.md`. This file should contain,

- A link (URL) to your published portfolio website
- A link to your GitHub repository (repo)
  - Ensure the repo is accessible by your Educators
- Description of your portfolio website, including,
  - Purpose
  - Functionality / features
  - Sitemap
  - Screenshots
  - Target audience
  - Tech stack (e.g. html, css, deployment platform, etc)

## Site URL



## Github Repository

https://github.com/r0ss26/portfolio

## Purpose

The purpose of my portfolio is to showcase my skills. This is done in two ways. Firstly the website itself shows my skills in design, HTML5 and CSS3. Secondly, the linked projects showcase my skills in other languages. 

This site will also bring attention to my bog posts which are published on the site. The site will drive traffic to my social media platforms to increase my professional network.

## Functionality / Features

### Component 1: Neumorphic Card

I was inspired by the design style "Neumorphism". This style is similar to material design in that it draws inspiration from physical characteristics of materials. The defining feature of neumorphism is that the material components (buttons, text inputs, cards etc.) are styled in such a way that they visually appear to be extruding or carved out of the same material as the background. 

![neumorphism-material](/home/ross/Documents/Assignments/Portfolio_Site/docs/neumorphism-material.jpeg)

https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6

This style is accomplished by creating contrasting light and dark borders on opposing sides of an HTML component. This creates the illusion of a light source being shone on the component - altering which sides of the component are contrasting modifies the angle of this light source.

I have implemented a neumorphic card component which I have used throughout the site to contain an array of content, including blog posts, example projects, and various text content.

### Component 2: Navigation Menus

I have created various navigation menus for different contexts. Firstly the home page navigation menu is split into a call to action to view my work, and then a side bar linking to the remaining pages. This is to control the user flow from my site, as my main goal is to get visitors to view my work before moving on to the other pages and hopefully contacting me.

All other pages share a common navigation menu which is displayed along the top of the site.

This menu is changed to a hamburger style menu when viewed at mobile screen widths.

The various navigation menus implement a similar aesthetic style - when hovered over they move up slightly and change color. The current page the user is visiting is styled the same way as when hovering over the link.

### Component 3: Social Icons

I have implemented links to my social media profiles using a neumorphic design which is consistent with the rest of my site. This component consists of a series of icons which display an animation and a tooltip describing which website it links to. 

### Component 4: Blog Post

I have reused the neumorphic card component to represent a series of blog posts. Each card containts a blog post title, date of publication and the body text. Body text is split up into a 100 word preview, with the option to continue reading the post. This can then be minimised back to the preview size. The card expands and shrinks to accommodate the amount of text displayed.

### Component 5: Contact Form

My contact form is designed in a "flat" style as there are some accessibility concerns around user input in a neurmiphic style, mainly around the lack of contrast for visually impaired users. I wanted the form to stand out and have styled with a secondary purple color.

### Component 6: Tech Stack Icons

On my about me page I have visualised some of the technologies I am familiar with and enjoy using while maintaining a "language agnostic" profile. I have implemented this similarly to the social icons with some visual changes. I have made them a different shape and the cursor does not change on hover, as they are not links. 

### Component 7: Typewriter Effect

I have used a typewriter effect to emphasise the purpose of my portfolio (being a developer). This consists of two separate CSS animations which run on a delay after the home page has loaded. I have simulated a cursor effect by having the right hand border of the HTML span animate between coloured and transparent on an infinite loop. The typing effect is achieved by transitioning the span from 0% width to 100% with the overflow being hidden.

### Feature 1:  Mobile Responsiveness

All pages on my site are responsive. This has been achieved using a combination of CSS grid and flexbox. Page content is laid out on between a 3x3 grid and 3x1 grid depending on the complexity of each page. For example, the home page is 3x3, as it is more complex, while the blog page utilises only a single column as the content is repetitive in nature. Grid items with more than a single component are displayed with flexbox in order to wrap their content as the screen width gets smaller. I have explicitly implemented various layouts for mobile and tablet widths by specifying each components position on the grid. 



## Sitemap

![Portfolio_Sitemap](/home/ross/Documents/Assignments/Portfolio_Site/docs/Portfolio_Sitemap.png)

## Screenshots



## Target Audience

- Other developers

- Potential Employers/Recruiters

## Tech Stack

- HTML5
- CSS3
- JavaScript

### Source Control

- Git

