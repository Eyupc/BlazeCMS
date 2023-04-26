# <img src="https://www.habborator.org/archive/icons/medium/v20_b2.gif"> BlazeCMS
## <img src="https://www.habborator.org/archive/icons/medium/toolbar_08.gif"> Table of contents
- [Introduction](#Introduction)
- [Why would I use BlazeCMS?](#why-would-I-use-BlazeCMS)
- [Requirements](#Requirements)
- [Installation](#Installation)
- [Configuration](#Configuration)
- [How to deploy this project on a webserver?](#how-to-deploy-this-project-on-a-webserver)
- [Images](#Images)
### Introduction
BlazeCMS is a CMS built for learning purposes. Blaze CMS was created using **[NextJS](https://nextjs.org "NextJS")**.
The intention of this project was a bit personal, to learn NextJS but also that the community can use a modern CMS. 
I tried to immerse myself in it well enough to make the most of it.
### Why would I use BlazeCMS?
BlazeCMS is a CMS that is easy to customize if you have a little knowledge of NextJS or React. The texts are easily editable, and anyone could easily do this.
This CMS also uses the latest technologies. It is also super fast, and also offers various options such as sending emails to reset a user's password.
### Requirements
- NodeJS (>=19.6.0)

### Installation
-  Open terminal and navigate to the folder where the CMS is located
-  Import the SQL file that is located in the 'SQL' directory into your database.
- Edit the <b>.env</b> file, this is the config file. This file contains settings such as for: 
	- Database connection
	- SMTP, imager links
	- Private variables (Token secret keys)
	- ReCaptcha settings
	- Register settings (credits,look,diamonds,..)
	- For more details:  [Configuration](#Configuration)
- The configuration needs to be done to follow the next steps. 
- If u want to translate the texts <b>cms-config.json</b> contains all the texts of the CMS and social media links.
- Run the following commands in terminal:
``npm run install``
	- For development:
		- ``npm run dev``
	- Production:
		- ``npm run build``
		- ``npm run start``

### Configuration
##### CMS Settings
| **KEY**                         | **VALUE**                   |
|:-------------------------------:|:---------------------------:|
| NEXT_PUBLIC_HOTEL_URL           | Hotel URL                   |
| NEXT_PUBLIC_NITRO_URL           | Nitro URL                   |
| NEXT_PUBLIC_IMAGER_URL          | Imager URL                  |
| CLOUDFLARE_ENABLED              | Boolean, using cloudflare?  |
|  NEXT_PUBLIC_RECAPTCHA_SITE_KEY | Google public recaptcha key |
| NEXT_SECRET_RECAPTCHA_SITE_KEY  | Google secret recaptcha key |
| CSRF_SECRET                     | Random string (needs to be good protected)            |
| NEXTAUTH_SECRET                 | Random string (needs to be good protected)              |
| NEXTAUTH_URL                    | http://localhost:{PORT}     |

#### Server settings (production)
| **KEY**     | **VALUE** |
|:-----------:|:---------:|
| SERVER_HOST | localhost (host) |
| SERVER_PORT | 3000  (port)    |

#### SMTP settings

| **KEY**                   | **VALUE**                                                  |
|:-------------------------:|:----------------------------------------------------------:|
| NEXT_PUBLIC_EMAIL_ENABLED | Boolean, true if u are using SMTP server. (Reset password) OR false (no reset page anymore) |
| EMAIL_SERVER_USER         | admin@eyupc.dev (SMTP user)                                            |
| EMAIL_SERVER_PASSWORD     | adminpassword (SMTP password)                                            |
| EMAIL_SERVER_HOST         | smtp-relay.sendinblue.com (SMTP host)                             |
| EMAIL_SERVER_PORT         | 465 (SMTP port)                                                       |
| EMAIL_FROM                | noreply@eyupc.dev (SMTP email FROM)                                          |

### How to deploy this project on a webserver?
If u want to use IIS / Nginx or maybe another webserver, u need to install nodejs on the host system and have server running on a port,
then use your webserver as a **reverse proxy** on top.

### Images
https://gyazo.com/68c990f0b5ac80e7bf89376dbf3f3658 <br/>
https://gyazo.com/ba3d44124053580928b649da5ef315db <br/>
https://gyazo.com/be90b4b8f3de328f340a23d7e87be356 <br/>
https://gyazo.com/559bf21716cdab007b4dea14384e3c5b <br>
https://gyazo.com/0e928bf2030bcb4f0660c7a8acaa2300

##### Pss: this project is still in development.
