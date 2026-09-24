# Zosh

Zosh is a one-page website. These steps run that website on your computer so you can see it in a browser and change the words.

Follow only the section for your computer. Each section is a full set of steps.

- [Chromebook](#chromebook)
- [Windows](#windows)
- [Mac](#mac)
- [Linux](#linux)

A Chromebook uses the Chromebook section, including after Linux is turned on inside ChromeOS. A Linux computer such as Ubuntu uses the Linux section.

You type commands in a terminal. A command is a line of text. Type it, then press **Enter**. On a Mac, that key is **Return**. The terminal answers underneath your command.

## Chromebook

These steps run the website on a **Chromebook**.

The website tools run inside Linux on the Chromebook. Linux is a small computer ChromeOS keeps separate from your downloads and Google Drive. You type commands in the **Terminal** app that belongs to Linux.

Use the Terminal app from the launcher. The Crosh window opened with **Ctrl+Alt+T** is a different app, and it cannot run this site.

In the Linux Terminal:

- **Ctrl+C** stops a command that is still running.
- **Ctrl+Shift+C** copies selected text.
- **Ctrl+Shift+V** pastes.

**Ctrl+C** does not copy in this Terminal. If a command is running, **Ctrl+C** stops it.

### Turn on Linux

Linux is off until you turn it on. If you already see a Terminal app and a **Linux files** folder in the Files app, skip to step 2.

- At the bottom right, select the time.
- Select **Settings**.
- Select **About ChromeOS**.
- Select **Developers**.
- Next to **Linux development environment**, select **Set up**.
- Follow the screens. Setup can take 10 minutes or more.
- A Terminal window opens when setup finishes. You can close it and open it again later.

The setup screens ask for a username and a disk size. They do not ask you to create a password.

When a command starts with `sudo`, it usually runs immediately. If the Terminal shows `[sudo] password for`, press **Ctrl+C**. That prompt is not your Google password, and Linux setup did not create a password for it.

A work or school Chromebook can hide **Linux development environment**. If that row is missing, Linux is turned off by the administrator and these steps cannot continue on that device.

### Open Terminal

- Select the launcher, the circle on the shelf.
- Type `Terminal`.
- Open **Terminal**. The icon is a black rectangle with a small prompt.
- To keep it easy to find, right-click the Terminal icon on the shelf and select **Pin**.

Each new Terminal window starts in your Linux home folder. Check that with:

```bash
pwd
```

The line looks like `/home/yourname`. `yourname` is the username you chose when Linux was set up.

### Install Node.js

Node.js is the program that installs this project's tools and starts the website. npm comes with Node.js. npm is the command that downloads those tools.

The download button on [https://nodejs.org/](https://nodejs.org/) installs Node.js for Windows or Mac. It does not install Node.js inside the Chromebook's Linux. Use the Terminal commands below.

In Terminal, run these two commands. Wait for each one to finish before you type the next.

```bash
sudo apt update
sudo apt install -y curl ca-certificates git
```

`apt` downloads Linux programs. The first command refreshes the list. The second installs curl, the certificates curl needs, and git. git is the program that downloads this project in the next step.

Then install nvm, a helper that installs a current Node.js:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
```

Close the Terminal window completely. Open Terminal again from the launcher. nvm is available in the new window.

Install Node.js 24:

```bash
nvm install 24
```

Check the install:

```bash
node -v
npm -v
```

`node -v` should print `v24.21.0`, or a higher number that still starts with `v24`. This project needs `v24.15.0` or newer on the 24 line. These other versions also work:

- `v22.22.2` or later, while the version still starts with `v22`
- `v26.0.0` or later

`npm -v` should print a version number such as `11.19.0`. Any number here means npm is installed. Node.js 24 does not use npm 10.

If the Terminal says `nvm: command not found`, close every Terminal window, open one new window, and run `nvm install 24` again.

If the Terminal says `node: command not found`, run `nvm install 24` again in that same new window.

### Put the project in Linux

The Terminal only sees files inside **Linux files**. A copy in Downloads or Google Drive is outside Linux, so `npm` cannot see it from there.

Download the project into your Linux home folder:

```bash
git clone https://github.com/vctrch/WebsiteForZosh.git
cd WebsiteForZosh
pwd
```

What each line does:

- `cd` with nothing after it returns to your home folder.
- `git clone` copies the project from GitHub into a new folder named `WebsiteForZosh`.
- `cd WebsiteForZosh` moves into that folder. The capital letters matter. `websiteforzosh` is a different name inside Linux.
- `pwd` prints the folder you are in.

The end of the `pwd` line should be `WebsiteForZosh`. An example is `/home/yourname/WebsiteForZosh`.

If `git clone` says the destination already exists, the folder is already there. Run `cd WebsiteForZosh` and then `pwd`.

You can also see the folder in the Files app under **Linux files**.

### Install this project's files

Run this once, from the `WebsiteForZosh` folder:

```bash
npm install
```

npm reads `package.json` and downloads the libraries this site needs. They go into a new folder named `node_modules`. The first run can take a few minutes on a Chromebook.

You should see a short summary that ends with the number of packages added. Leave `node_modules` as it is. You edit the files in `src` instead.

Run `npm install` again later only after `package.json` changes.

### Start the website

In the same Terminal window, run:

```bash
npm run dev
```

Leave this window open. A running site keeps the Terminal busy, and that is expected. Near the top of the output, look for a line like:

```text
Local:   http://localhost:5173/
```

The printed address may say `localhost` or `127.0.0.1`. Those are the same computer. Use the address from your Terminal.

Open that address in the Chromebook's Chrome browser:

- In Terminal, select the address with the touchpad or mouse.
- Press **Ctrl+Shift+C** to copy it.
- Open Chrome.
- Click the address bar, press **Ctrl+V**, and press **Enter**.

You should see the Zosh page, with the heading "A calmer kind of website."

Use the address printed in your Terminal when the port is not `5173`. Vite picks another port when `5173` is already taken.

Chrome on the Chromebook can open that address while the Linux Terminal is running the site. Keep the Terminal window open. Closing it stops the site.

To stop the site, click the Terminal window and press **Ctrl+C**.

### Change the words and see the result

Keep `npm run dev` running.

- Open the Files app.
- Open **Linux files**, then **WebsiteForZosh**, then **src**.
- Right-click `content.ts`, choose **Open with**, then **Text**. The Files app shows that choice. Chrome does not.
- Change the text inside the quotes. The page heading is `hero.title`. The menu labels are `navItems`.
- Save with **Ctrl+S**.

The browser refreshes the page on its own. You do not need to run `npm run dev` again.

Other files you may want later:

| File | What it controls |
| --- | --- |
| `src/content.ts` | The words on the page |
| `src/index.css` | Colors, type, and spacing |
| `src/components/Contact.tsx` | The contact form |
| `src/App.tsx` | The order of the sections |
| `index.html` | The browser-tab title |

### Run the tests

A test is an automatic check. These tests confirm the page shows its sections and the contact form asks for a name, a real email address, and a message of at least 10 characters.

`npm run dev` keeps its Terminal window busy. Open Terminal again from the launcher. **Ctrl+Shift+T** reopens a closed Chrome tab. It does not open a second Linux Terminal. In the new Terminal window, run:

```bash
cd WebsiteForZosh
npm test
```

A passing run ends with a line like `Tests  9 passed`. When a test fails, the output names the file and the check that failed.

To re-run tests every time you save a file:

```bash
npm run test:watch
```

Stop watch mode with **Ctrl+C**.

### Build a finished copy

The development site in step 6 is for editing. A build is the finished copy of the site.

Stop the development server with **Ctrl+C** first, or use the second Terminal window from step 8. From `WebsiteForZosh`, run:

```bash
npm run lint
```

Lint checks the code for common mistakes. npm prints the name of the command. When the check passes, no error lines follow, and the Terminal shows a fresh prompt.

Then run:

```bash
npm run build
```

This checks the code and writes the finished site into a `dist` folder. You should see `built in` near the end.

To view that finished copy in Chrome:

```bash
npm run preview
```

Copy the address this command prints with **Ctrl+Shift+C**, and paste it into Chrome with **Ctrl+V**. Stop the preview with **Ctrl+C**.

### If a command fails on a Chromebook

- **`command not found` for `node`, `npm`, or `nvm`:** close every Terminal window, open one new window, and run `nvm install 24` again. Then run `node -v`.
- **`sudo` asks for a password:** press **Ctrl+C**. Linux setup does not create that password, and it is not your Google password. `sudo apt update` normally starts without asking.
- **`cd` says no such file:** you are not in the home folder, or the capital letters do not match. Run `cd`, then `cd WebsiteForZosh`, then `pwd`.
- **`git clone` cannot find the folder later:** the clone went somewhere else. Run `cd`, then `ls`, and look for `WebsiteForZosh`.
- **`npm install` or `npm run dev` cannot find `package.json`:** Terminal is in the wrong folder. Run `pwd` and confirm the line ends in `WebsiteForZosh`.
- **The project is in Downloads or Drive and Terminal cannot see it:** clone it again with the commands in step 4 so the copy lives in Linux files.
- **Chrome says it cannot connect:** the site is stopped, or the address does not match the `Local:` line. Start it again with `npm run dev` and paste the address from that run.
- **The page does not show your edit:** save `content.ts` with **Ctrl+S**, and confirm the Terminal running `npm run dev` is still open.

## Windows

These steps run the website on **Windows**. Press **Enter** after each command.

In Command Prompt:

- **Ctrl+C** stops a command that is still running.
- To copy an address while the site is running, select the address, then right-click it and choose **Copy**.
- **Ctrl+V** pastes into the browser address bar.

### Open Command Prompt

- Select **Start**.
- Type `Command Prompt`.
- Open **Command Prompt**.

This window starts in your user folder. Check that with:

```bat
cd
```

The line looks like `C:\Users\yourname`. `yourname` is your Windows user name.

### Install Node.js

Node.js is the program that installs this project's tools and starts the website. npm comes with Node.js. npm is the command that downloads those tools.

- Open [https://nodejs.org/](https://nodejs.org/).
- Download the Windows installer labeled **LTS**.
- Open the downloaded file and finish the installer. The default choices are fine.
- Close Command Prompt, then open it again from the Start menu. A window that was open during installation can miss the new program.

Check the install:

```bat
node -v
npm -v
```

`node -v` should print `v24.21.0`, or a higher number that still starts with `v24`. This project needs `v24.15.0` or newer on the 24 line. These other versions also work:

- `v22.22.2` or later, while the version still starts with `v22`
- `v26.0.0` or later

`npm -v` should print a version number such as `11.19.0`. Any number here means npm is installed. Node.js 24 does not use npm 10.

If Command Prompt says `node` is not recognized, close it, open a new Command Prompt, and run `node -v` again.

### Install Git

Git is the program that downloads this project.

- Open [https://git-scm.com/download/win](https://git-scm.com/download/win).
- Run the installer. The default choices are fine.
- Close Command Prompt and open it again from the Start menu.

Check the install:

```bat
git --version
```

A version number means git is ready.

### Put the project on this computer

In Command Prompt, run:

```bat
cd %USERPROFILE%
git clone https://github.com/vctrch/WebsiteForZosh.git
cd WebsiteForZosh
```

What each line does:

- `cd %USERPROFILE%` returns to your user folder, such as `C:\Users\yourname`.
- `git clone` copies the project from GitHub into a new folder named `WebsiteForZosh`.
- `cd WebsiteForZosh` moves into that folder.
- `cd` with nothing after it prints the folder you are in.

The end of that last line should be `WebsiteForZosh`. An example is `C:\Users\yourname\WebsiteForZosh`.

If `git clone` says the destination already exists, the folder is already there. Run `cd %USERPROFILE%`, then `cd WebsiteForZosh`, then `cd`.

You can also see the folder in File Explorer under your user folder.

### Install this project's files

Run this once, from the `WebsiteForZosh` folder:

```bat
npm install
```

npm reads `package.json` and downloads the libraries this site needs. They go into a new folder named `node_modules`. The first run can take a minute.

You should see a short summary that ends with the number of packages added. Leave `node_modules` as it is. You edit the files in `src` instead.

Run `npm install` again later only after `package.json` changes.

### Start the website

In the same Command Prompt window, run:

```bat
npm run dev
```

Leave this window open. A running site keeps Command Prompt busy, and that is expected. Near the top of the output, look for a line like:

```text
Local:   http://localhost:5173/
```

The printed address may say `localhost` or `127.0.0.1`. Those are the same computer. Use the address from Command Prompt.

Open that address in Edge or Chrome:

- In Command Prompt, select the address.
- Right-click the selection and choose **Copy**.
- Open Edge or Chrome.
- Click the address bar, press **Ctrl+V**, and press **Enter**.

You should see the Zosh page, with the heading "A calmer kind of website."

Use the address printed in Command Prompt when the port is not `5173`. Vite picks another port when `5173` is already taken.

Keep the Command Prompt window open. Closing it stops the site.

To stop the site, click the Command Prompt window and press **Ctrl+C**.

### Change the words and see the result

Keep `npm run dev` running.

- Open File Explorer.
- Open your user folder, then **WebsiteForZosh**, then **src**.
- Right-click `content.ts`, choose **Open with**, then **Notepad**.
- Change the text inside the quotes. The page heading is `hero.title`. The menu labels are `navItems`.
- Save with **Ctrl+S**.

The browser refreshes the page on its own. You do not need to run `npm run dev` again.

Other files you may want later:

| File | What it controls |
| --- | --- |
| `src/content.ts` | The words on the page |
| `src/index.css` | Colors, type, and spacing |
| `src/components/Contact.tsx` | The contact form |
| `src/App.tsx` | The order of the sections |
| `index.html` | The browser-tab title |

### Run the tests

A test is an automatic check. These tests confirm the page shows its sections and the contact form asks for a name, a real email address, and a message of at least 10 characters.

`npm run dev` keeps its Command Prompt window busy. Open Command Prompt again from the Start menu. In the new window, run:

```bat
cd %USERPROFILE%
cd WebsiteForZosh
npm test
```

A passing run ends with a line like `Tests  9 passed`. When a test fails, the output names the file and the check that failed.

To re-run tests every time you save a file:

```bat
npm run test:watch
```

Stop watch mode with **Ctrl+C**.

### Build a finished copy

The development site in step 6 is for editing. A build is the finished copy of the site.

Stop the development server with **Ctrl+C** first, or use the second Command Prompt window from step 8. From `WebsiteForZosh`, run:

```bat
npm run lint
```

Lint checks the code for common mistakes. npm prints the name of the command. When the check passes, no error lines follow, and Command Prompt shows a fresh prompt.

Then run:

```bat
npm run build
```

This checks the code and writes the finished site into a `dist` folder. You should see `built in` near the end.

To view that finished copy in Edge or Chrome:

```bat
npm run preview
```

Copy the address this command prints by selecting it, then right-click and choose **Copy**. Paste it into the browser with **Ctrl+V**. Stop the preview with **Ctrl+C**.

### If a command fails on Windows

- **`node` or `npm` is not recognized:** close Command Prompt, open a new one, and run `node -v` again. If it still fails, repeat the installer in step 2.
- **`git` is not recognized:** close Command Prompt, open a new one, and run `git --version`. If it still fails, repeat the installer in step 3.
- **`cd` says the path does not exist:** run `cd %USERPROFILE%`, then `cd WebsiteForZosh`, then `cd`. The last line should end in `WebsiteForZosh`.
- **`git clone` cannot find the folder later:** the clone went somewhere else. Run `cd %USERPROFILE%`, then `dir`, and look for `WebsiteForZosh`.
- **`npm install` or `npm run dev` cannot find `package.json`:** Command Prompt is in the wrong folder. Run `cd` and confirm the line ends in `WebsiteForZosh`.
- **The browser says it cannot connect:** the site is stopped, or the address does not match the `Local:` line. Start it again with `npm run dev` and paste the address from that run.
- **The page does not show your edit:** save `content.ts` with **Ctrl+S**, and confirm the Command Prompt running `npm run dev` is still open.

## Mac

These steps run the website on a **Mac**. Press **Return** after each command.

In Terminal:

- **Control-C** stops a command that is still running.
- **Command-C** copies selected text.
- **Command-V** pastes.

**Command-C** leaves a running site alone. **Control-C** stops it.

### Open Terminal

- Press **Command-Space** to open Spotlight search.
- Type `Terminal`.
- Press **Return**.

This window starts in your home folder. Check that with:

```bash
pwd
```

The line looks like `/Users/yourname`. `yourname` is your Mac user name.

### Install Node.js

Node.js is the program that installs this project's tools and starts the website. npm comes with Node.js. npm is the command that downloads those tools.

- Open [https://nodejs.org/](https://nodejs.org/).
- Download the macOS installer labeled **LTS**.
- Open the downloaded file and finish the installer. The default choices are fine.
- Quit Terminal with **Command-Q**, then open it again from Spotlight. A window that was open during installation can miss the new program.

Check the install:

```bash
node -v
npm -v
```

`node -v` should print `v24.21.0`, or a higher number that still starts with `v24`. This project needs `v24.15.0` or newer on the 24 line. These other versions also work:

- `v22.22.2` or later, while the version still starts with `v22`
- `v26.0.0` or later

`npm -v` should print a version number such as `11.19.0`. Any number here means npm is installed. Node.js 24 does not use npm 10.

If Terminal says `command not found` for `node` or `npm`, quit Terminal with **Command-Q**, open a new window, and run `node -v` again.

### Install Git

Git is the program that downloads this project. In Terminal, run:

```bash
git --version
```

If macOS asks to install developer tools, choose **Install** and wait until it finishes. Then run `git --version` again. A version number means git is ready.

### Put the project on this computer

In Terminal, run:

```bash
git clone https://github.com/vctrch/WebsiteForZosh.git
cd WebsiteForZosh
pwd
```

What each line does:

- `cd` with nothing after it returns to your home folder.
- `git clone` copies the project from GitHub into a new folder named `WebsiteForZosh`.
- `cd WebsiteForZosh` moves into that folder.
- `pwd` prints the folder you are in.

The end of the `pwd` line should be `WebsiteForZosh`. An example is `/Users/yourname/WebsiteForZosh`.

If `git clone` says the destination already exists, the folder is already there. Run `cd WebsiteForZosh` and then `pwd`.

You can also see the folder in Finder, in your home folder.

### Install this project's files

Run this once, from the `WebsiteForZosh` folder:

```bash
npm install
```

npm reads `package.json` and downloads the libraries this site needs. They go into a new folder named `node_modules`. The first run can take a minute.

You should see a short summary that ends with the number of packages added. Leave `node_modules` as it is. You edit the files in `src` instead.

Run `npm install` again later only after `package.json` changes.

### Start the website

In the same Terminal window, run:

```bash
npm run dev
```

Leave this window open. A running site keeps Terminal busy, and that is expected. Near the top of the output, look for a line like:

```text
Local:   http://localhost:5173/
```

The printed address may say `localhost` or `127.0.0.1`. Those are the same computer. Use the address from Terminal.

Open that address in Safari or Chrome:

- In Terminal, select the address.
- Press **Command-C** to copy it.
- Open Safari or Chrome.
- Click the address bar, press **Command-V**, and press **Return**.

You should see the Zosh page, with the heading "A calmer kind of website."

Use the address printed in Terminal when the port is not `5173`. Vite picks another port when `5173` is already taken.

Keep the Terminal window open. Closing it stops the site.

To stop the site, click the Terminal window and press **Control-C**.

### Change the words and see the result

Keep `npm run dev` running.

- Open Finder.
- Open your home folder, then **WebsiteForZosh**, then **src**.
- Right-click `content.ts`, choose **Open With**, then **TextEdit**.
- Choose **Format**, then **Make Plain Text**, before you change anything. Plain text keeps the file as code.
- Change the text inside the quotes. The page heading is `hero.title`. The menu labels are `navItems`.
- Save with **Command-S**.

The browser refreshes the page on its own. You do not need to run `npm run dev` again.

Other files you may want later:

| File | What it controls |
| --- | --- |
| `src/content.ts` | The words on the page |
| `src/index.css` | Colors, type, and spacing |
| `src/components/Contact.tsx` | The contact form |
| `src/App.tsx` | The order of the sections |
| `index.html` | The browser-tab title |

### Run the tests

A test is an automatic check. These tests confirm the page shows its sections and the contact form asks for a name, a real email address, and a message of at least 10 characters.

`npm run dev` keeps its Terminal window busy. Press **Command-N** to open a second Terminal window. In that window, run:

```bash
cd WebsiteForZosh
npm test
```

A passing run ends with a line like `Tests  9 passed`. When a test fails, the output names the file and the check that failed.

To re-run tests every time you save a file:

```bash
npm run test:watch
```

Stop watch mode with **Control-C**.

### Build a finished copy

The development site in step 6 is for editing. A build is the finished copy of the site.

Stop the development server with **Control-C** first, or use the second Terminal window from step 8. From `WebsiteForZosh`, run:

```bash
npm run lint
```

Lint checks the code for common mistakes. npm prints the name of the command. When the check passes, no error lines follow, and Terminal shows a fresh prompt.

Then run:

```bash
npm run build
```

This checks the code and writes the finished site into a `dist` folder. You should see `built in` near the end.

To view that finished copy in Safari or Chrome:

```bash
npm run preview
```

Copy the address this command prints with **Command-C**, and paste it into the browser with **Command-V**. Stop the preview with **Control-C**.

### If a command fails on a Mac

- **`command not found` for `node` or `npm`:** quit Terminal with **Command-Q**, open a new window, and run `node -v` again. If it still fails, repeat the installer in step 2.
- **`git` asks to install developer tools:** choose **Install**, wait until it finishes, then run `git --version` again.
- **`cd` says no such file:** run `cd`, then `cd WebsiteForZosh`, then `pwd`. The last line should end in `WebsiteForZosh`.
- **`git clone` cannot find the folder later:** the clone went somewhere else. Run `cd`, then `ls`, and look for `WebsiteForZosh`.
- **`npm install` or `npm run dev` cannot find `package.json`:** Terminal is in the wrong folder. Run `pwd` and confirm the line ends in `WebsiteForZosh`.
- **The browser says it cannot connect:** the site is stopped, or the address does not match the `Local:` line. Start it again with `npm run dev` and paste the address from that run.
- **The page does not show your edit:** save `content.ts` with **Command-S**, and confirm the Terminal running `npm run dev` is still open.

## Linux

These steps run the website on a **Linux** computer, such as Ubuntu or Fedora. A Chromebook uses the [Chromebook](#chromebook) section.

Press **Enter** after each command.

In Terminal:

- **Ctrl+C** stops a command that is still running.
- **Ctrl+Shift+C** copies selected text.
- **Ctrl+Shift+V** pastes.

**Ctrl+C** copies in some other apps. In this Terminal, **Ctrl+C** stops a running command. **Ctrl+Shift+C** copies.

### Open Terminal

- Open the app menu.
- Type `Terminal`.
- Open **Terminal**.

This window starts in your home folder. Check that with:

```bash
pwd
```

The line looks like `/home/yourname`. `yourname` is your Linux user name.

### Install Node.js

Node.js is the program that installs this project's tools and starts the website. npm comes with Node.js. npm is the command that downloads those tools.

The download button on [https://nodejs.org/](https://nodejs.org/) installs Node.js for Windows or Mac. On Linux, install Node.js with the commands below.

When a command starts with `sudo`, type the password you use to sign in to this computer and press **Enter**. The cursor stays still while you type.

On Ubuntu, Debian, or Linux Mint, run these two commands. Wait for each one to finish before you type the next.

```bash
sudo apt update
sudo apt install -y curl ca-certificates git
```

On Fedora, run this command instead of the two `apt` commands:

```bash
sudo dnf install -y curl ca-certificates git
```

`apt` and `dnf` download Linux programs. The install line adds curl, the certificates curl needs, and git. git is the program that downloads this project in step 4.

Then install nvm, a helper that installs a current Node.js. This command is the same on Ubuntu and Fedora:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
```

Close the Terminal window completely and open Terminal again from the app menu. nvm is available in the new window.

Install Node.js 24:

```bash
nvm install 24
```

Check the install:

```bash
node -v
npm -v
```

`node -v` should print `v24.21.0`, or a higher number that still starts with `v24`. This project needs `v24.15.0` or newer on the 24 line. These other versions also work:

- `v22.22.2` or later, while the version still starts with `v22`
- `v26.0.0` or later

`npm -v` should print a version number such as `11.19.0`. Any number here means npm is installed. Node.js 24 does not use npm 10.

If Terminal says `nvm: command not found`, close every Terminal window, open one new window, and run `nvm install 24` again.

If Terminal says `node: command not found`, run `nvm install 24` again in that same new window.

### Check Git

Git is the program that downloads this project. Step 2 installed it. Check it with:

```bash
git --version
```

A version number means git is ready.

### Put the project on this computer

In Terminal, run:

```bash
git clone https://github.com/vctrch/WebsiteForZosh.git
cd WebsiteForZosh
pwd
```

What each line does:

- `cd` with nothing after it returns to your home folder.
- `git clone` copies the project from GitHub into a new folder named `WebsiteForZosh`.
- `cd WebsiteForZosh` moves into that folder. The capital letters matter. `websiteforzosh` is a different name.
- `pwd` prints the folder you are in.

The end of the `pwd` line should be `WebsiteForZosh`. An example is `/home/yourname/WebsiteForZosh`.

If `git clone` says the destination already exists, the folder is already there. Run `cd WebsiteForZosh` and then `pwd`.

You can also see the folder in the file manager, in your home folder.

### Install this project's files

Run this once, from the `WebsiteForZosh` folder:

```bash
npm install
```

npm reads `package.json` and downloads the libraries this site needs. They go into a new folder named `node_modules`. The first run can take a minute.

You should see a short summary that ends with the number of packages added. Leave `node_modules` as it is. You edit the files in `src` instead.

Run `npm install` again later only after `package.json` changes.

### Start the website

In the same Terminal window, run:

```bash
npm run dev
```

Leave this window open. A running site keeps Terminal busy, and that is expected. Near the top of the output, look for a line like:

```text
Local:   http://localhost:5173/
```

The printed address may say `localhost` or `127.0.0.1`. Those are the same computer. Use the address from Terminal.

Open that address in Firefox or Chrome:

- In Terminal, select the address.
- Press **Ctrl+Shift+C** to copy it.
- Open Firefox or Chrome.
- Click the address bar, press **Ctrl+V**, and press **Enter**.

You should see the Zosh page, with the heading "A calmer kind of website."

Use the address printed in Terminal when the port is not `5173`. Vite picks another port when `5173` is already taken.

Keep the Terminal window open. Closing it stops the site.

To stop the site, click the Terminal window and press **Ctrl+C**.

### Change the words and see the result

Keep `npm run dev` running.

- Open the file manager.
- Open your home folder, then **WebsiteForZosh**, then **src**.
- Right-click `content.ts` and open it with **Text Editor**.
- Change the text inside the quotes. The page heading is `hero.title`. The menu labels are `navItems`.
- Save with **Ctrl+S**.

The browser refreshes the page on its own. You do not need to run `npm run dev` again.

Other files you may want later:

| File | What it controls |
| --- | --- |
| `src/content.ts` | The words on the page |
| `src/index.css` | Colors, type, and spacing |
| `src/components/Contact.tsx` | The contact form |
| `src/App.tsx` | The order of the sections |
| `index.html` | The browser-tab title |

### Run the tests

A test is an automatic check. These tests confirm the page shows its sections and the contact form asks for a name, a real email address, and a message of at least 10 characters.

`npm run dev` keeps its Terminal window busy. Open Terminal again from the app menu. In the new window, run:

```bash
cd WebsiteForZosh
npm test
```

A passing run ends with a line like `Tests  9 passed`. When a test fails, the output names the file and the check that failed.

To re-run tests every time you save a file:

```bash
npm run test:watch
```

Stop watch mode with **Ctrl+C**.

### Build a finished copy

The development site in step 6 is for editing. A build is the finished copy of the site.

Stop the development server with **Ctrl+C** first, or use the second Terminal window from step 8. From `WebsiteForZosh`, run:

```bash
npm run lint
```

Lint checks the code for common mistakes. npm prints the name of the command. When the check passes, no error lines follow, and Terminal shows a fresh prompt.

Then run:

```bash
npm run build
```

This checks the code and writes the finished site into a `dist` folder. You should see `built in` near the end.

To view that finished copy in Firefox or Chrome:

```bash
npm run preview
```

Copy the address this command prints with **Ctrl+Shift+C**, and paste it into the browser with **Ctrl+V**. Stop the preview with **Ctrl+C**.

### If a command fails on Linux

- **`command not found` for `node`, `npm`, or `nvm`:** close every Terminal window, open one new window, and run `nvm install 24` again. Then run `node -v`.
- **`sudo` asks for a password:** type the password you use to sign in to this computer. The cursor stays still while you type. Press **Enter**.
- **`apt` or `dnf` is not found:** use the install command that matches this computer. Ubuntu, Debian, and Linux Mint use the `apt` commands in step 2. Fedora uses the `dnf` command in step 2.
- **`cd` says no such file:** the capital letters do not match, or you are outside your home folder. Run `cd`, then `cd WebsiteForZosh`, then `pwd`.
- **`git clone` cannot find the folder later:** the clone went somewhere else. Run `cd`, then `ls`, and look for `WebsiteForZosh`.
- **`npm install` or `npm run dev` cannot find `package.json`:** Terminal is in the wrong folder. Run `pwd` and confirm the line ends in `WebsiteForZosh`.
- **The browser says it cannot connect:** the site is stopped, or the address does not match the `Local:` line. Start it again with `npm run dev` and paste the address from that run.
- **The page does not show your edit:** save `content.ts` with **Ctrl+S**, and confirm the Terminal running `npm run dev` is still open.

## GitHub

The site on GitHub is the `main` branch: [https://github.com/vctrch/WebsiteForZosh](https://github.com/vctrch/WebsiteForZosh).

`git clone` downloads that branch into a folder named `WebsiteForZosh` on your computer.
