# Portfolio Site

This site was designed in Figma, programmed using React and TailwindCSS, it is hosted on Netlify and has used Python packages to create animated SVGs.
The website is meant to be a mini-portfolio showing mainly my front-end skill on a website. It was done in roughly 5 days, most of that being the design itself.
Over the course of building this website I learned a lot of things regarding SVGs and site Layouts. It made me love CSS even more than I previously did. :)

# Features

1. Dark Mode
2. Animated SVGs and Background
3. Custom Animations
4. Play/pause state for animations
5. Playful Material inspired theme
6. SPA layout and feel with smooth scrolling
7. 99% Performance score in Lighthouse

# Animated Terminal

Terminal was created using a few different tools, Python, SVGs and React.

1. Installed `termtosvg` a Python package via PIP.
2. Fix the initial PATH export to handle WSL2.
3. Change the window_frame template to use ligature nerd fonts and fix UI colors for out theme.
4. We take the exported SVG and convert it to a React component using `react-svgr`
5. Add it to our project and fix positioning, size, font render, etc.

Overall it was quite fun trying to add a terminal to the site. I didn't want to use a GIf or anything image based so SVGs were really cool to work with.
In general the entire site is built only using SVGs.

# Animations

All the animations on the website are done using CSS or native SVG(like the terminal). I tried to keep them to a minimum but I quite enjoy a few flashy things here and there.

# Planned Things

1. Make a fully functioning terminal
2. Remake the Projects section
3. Make the site mobile friendly
