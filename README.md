<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3>Express.js Quote API</h3>

  <p align="center">
    web app using Express.js that allows users to create, read, update, and delete (CRUD) quotes about computers, coding, and technology.
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
[![Product Name Screen Shot][product-screenshot]]()

This is my solution to the **Codecademy** challenge project entitled *Quote API*, wherein I had to design 
a small web app using **Express.js** that allows users to **c**reate, **r**ead, **u**pdate, and **d**elete 
(CRUD) quotes about computers, coding, and technology.

The project had to satisfy the following requirements:

- the server should listen on port 4001
- the api should have a GET **/api/quotes/random** route that sends back a random quote
- the api should have a GET **/api/quotes** route - if the request has no query params, this 
  route should return all available quotes; if there is a query string with a *person* 
  attribute, this route should return all the quotes attributed to the specified person; if 
  there are no quotes for the requested person, an empty array should be returned 
- the spi should have a POST **/api/quotes** route for adding new quotes to the data; if the 
  request query string contains the correct parameters, this route handler adds the new quote 
  object to the data array and sends back an appropriate 'success' response; if the query 
  string does not contain the requisite parameters, a 400 'bad request' response is returned
- optionally: 
- [x] include a **PUT** route for updating quotes 
- [x] include a **DELETE** route for deleting quotes 
- [x] include the year of each quote 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

[![Express][Express.js]][Express-url]
[![Node][Node.js]][Node-url]
[![JavaScript][JavaScript]][JavaScript-url]
[![CSS][CSS]][CSS-url]
[![HTML][HTML]][HTML-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
* node.js
* express.js

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Patchalv/quote-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Navigate to the project root via command line
4. Run 
   ```sh
   node server.js
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Patrick Alvarez Eades - p.alvarezeades@gmail.com

Project Link: [https://github.com/Patchalv/quote-api](https://github.com/Patchalv/quote-api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

A big shout out to [Codecademy](https://www.codecademy.com/) who I'm currently doing the Full-Stack Engeineer career path with.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Patchalv/quote-api.svg?style=for-the-badge
[contributors-url]: https://github.com/Patchalv/quote-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Patchalv/quote-api.svg?style=for-the-badge
[forks-url]: https://github.com/Patchalv/quote-api/network/members
[stars-shield]: https://img.shields.io/github/stars/Patchalv/quote-api.svg?style=for-the-badge
[stars-url]: https://github.com/Patchalv/quote-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/Patchalv/quote-api.svg?style=for-the-badge
[issues-url]: https://github.com/Patchalv/quote-api/issues
[license-shield]: https://img.shields.io/github/license/Patchalv/quote-api?label=license&style=for-the-badge
[license-url]: https://github.com/Patchalv/quote-api/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/patrickalvarezeades/
[product-screenshot]: ./images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux.js]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://react-bootstrap.netlify.app/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: #
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: #
[JavaScript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[JavaScript-url]: #






