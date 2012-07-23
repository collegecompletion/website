# College Completion Website
collegecompletion.chronicle.com

College Completion is a microsite produced by The Chronicle of Higher Education with support from the Bill & Melinda Gates Foundation. Its goal is to share data on completion rates in American higher education in a visually stimulating way.

The project was built using Wordpress and Disqus. Front-end components include Modernizr, jQuery, Raphael, and D3. 

This repository includes:

* / : PHP files for each of the site's templates.
* /data: A zipped CSV of the data used in the project and data documentation.
* /imgassets: Images used for the project.
* /interactive: HTML templates and Javascript files that power the website, including the interactive graphics.

# Notes on compatibility

This project will not work out of the box: 

* The data calls depend on The Chronicle's restful data server. Another data server, such as Google Fusion Tables, can be substituted; however, the syntax of data calls will need to be modified. For an example of these calls, see /interactive/institution.js:629.
* You will need to subsitute your own Disqus keys, defined as DISQUS_USER_API_KEY, DISQUS_FORUM_API_KEY, and DISQUS_FORUM_ID placed in a file named disqus_config.php as referenced from functions.php as well as installing the Disqus plugin for Wordpress.

# License

Copyright (C) 2012 The Chronicle of Higher Education

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.