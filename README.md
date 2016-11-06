Path Extender

I created this Node.js program as a way to have a custom executable folder on my hard drive, one where I put all the programs that I wrote to boost my productivity and add their shorcuts to the terminal. 

-It has only been tested in debian based OS.

-Creates or detects the existance of a bin folder inside the directory where it was executed(example: ~/Douments/custom_programs/bin).

-Adds the '/bin' folder to the PATH environment variable via the '~/.profile' file so it is added to the scope where executables are looked for on debian.

List of TO DO's:

-Detect the current scripts/programs and their extensions.

-Auto generate each program's text files for execution inside the custom '/bin' directory to enable automatic terminal shortcuts.
 Example:
 
 #! /bin/sh
 node /path/to/program/path_extender.js
 
 
