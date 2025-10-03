# Ari Taylor Photography Portfolio

## Project Overview
A professional photography portfolio website built with Bootstrap 5 to showcase photography services and work samples.

## Live Website
**Live Site:** https://yourusername.github.io/photography-portfolio  
**Repository:** https://github.com/yourusername/photography-portfolio

## Bootstrap Components Used

### 1. Carousel (Image Slideshow)
**Location:** Top of homepage  
**Purpose:** Showcases featured photography work in rotating slideshow  
**Features:**
- Auto-plays through 3 featured photos
- Manual navigation with prev/next arrows
- Indicator dots showing current slide
- Responsive captions (hidden on mobile)
- Pause on hover functionality

### 2. Modal (Popup Windows)
**Location:** Two modals - Contact form and Photo viewer  
**Purpose:** 
- Contact modal: Book photography sessions with form validation
- Photo modal: View gallery images in full size with dynamic content loading
**Features:**
- Form validation with JavaScript
- Centered positioning
- Smooth fade-in animation
- Mobile-responsive
- Dynamic content updates for photo viewer

### 3. Accordion (Collapsible Sections)
**Location:** Services & Packages section  
**Purpose:** Display photography packages with expandable details  
**Features:**
- Only one section open at a time
- Smooth expand/collapse animation
- Clean, organized pricing information
- First section starts expanded

### 4. Dropdown Menu
**Location:** Navigation bar - "Gallery" menu  
**Purpose:** Organize gallery categories  
**Features:**
- Categorized photo galleries
- Mobile-friendly
- Divider between menu sections
- Hover and click functionality

### 5. Collapse
**Location:** "Explore My Work" section  
**Purpose:** Show/hide details about photography categories  
**Features:**
- Independent toggle buttons
- Card-based content display
- Responsive three-column layout
- Smooth animations

## Custom CSS Explanation

I used custom CSS only for the following elements that couldn't be achieved with Bootstrap utilities:

### 1. Color Scheme
```css
.bg-primary { background-color: #2d3748 !important; }