import LinkedinIcon from '../assets/contact/linkedin.png';
import GithubIcon from '../assets/contact/github.png';
import GmailIcon from '../assets/contact/gmail.png';

import ReactIcon from '../assets/skills/react-skill.png'
import BootstrapIcon from '../assets/skills/bootstrap-skill.png'
import DrupalIcon from '../assets/skills/drupal-skill.png'
import CssIcon from '../assets/skills/css-skill.png'
import GitIcon from '../assets/skills/git-skill.png'
import HtmlIcon from '../assets/skills/html-skill.png'
import JavaScriptIcon from '../assets/skills/js-skill.png'
import PythonIcon from '../assets/skills/python-skill.png'
import SassIcon from '../assets/skills/sass-skill.png'
import TailwindIcon from '../assets/skills/tailwind-skill.png'
import MariaDbIcon from '../assets/skills/mariadb-skill.png'
import FigmaIcon from '../assets/skills/figma-skill.png'

const frontend = [ReactIcon,JavaScriptIcon,TailwindIcon,SassIcon,CssIcon,BootstrapIcon,HtmlIcon]
const others = [PythonIcon,GitIcon,MariaDbIcon,FigmaIcon,DrupalIcon]

export const contacts = [
  {
    "icon":LinkedinIcon,
    "name":"Linkedin",
    "url":"https://www.linkedin.com/in/camilod17/"
  },
  {
    "icon":GmailIcon,
    "name":"Gmail",
    "url":"kdodino1999@gmail.com"
  },
  {
    "icon":GithubIcon,
    "name":"Github",
    "url":"https://github.com/CamiloD17/"
  }
]

export const webArea = [
  {
    "titleArea": "Frontend",
    "technology": frontend,
  },
  {
    "titleArea": "Otras",
    "technology": others
  },
]