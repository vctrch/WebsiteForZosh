# Zosh

Zosh is a one-page website. These steps run that website on your own computer so you can see it in a browser and change the words.

You will type commands in an app called **Terminal**. A command is a line of text. Type it, then press the **Return** key. The Terminal answers underneath your command.

## 1. Install Node.js

Node.js is the program that installs this project's tools and starts the website. npm is included with Node.js. npm is the command that downloads those tools.

1. Open [https://nodejs.org/](https://nodejs.org/).
2. Download the installer labeled **LTS**.
3. Open the downloaded file and finish the installer. The default choices are fine.
4. Quit Terminal if it is already open, then open it again. A Terminal that was open during installation can miss the new program.

Check that the install worked:

```bash
node -v
npm -v
```

`node -v` should print a version such as `v22.22.2`, `v24.15.0`, or `v26.0.0`. `npm -v` should print a number of its own, such as `10.9.2`.

Use one of these Node.js versions:

- `22.22.2` or later, while the version still starts with `22`
- `24.15.0` or later, while the version still starts with `24`
- `26` or later

If the Terminal says `command not found`, the installer did not finish or Terminal was left open during installation. Quit Terminal fully, open a new window, and run `node -v` again.

## 2. Open this folder in Terminal

The commands below only work when Terminal is inside the project folder. The folder is named `WebsiteForZosh`.

On a Mac:

1. Press **Command-Space** to open Spotlight search.
2. Type `Terminal` and press **Return**.
3. Type `cd ` and include the space after `cd`. Do not press Return yet.
4. Drag the `WebsiteForZosh` folder from Finder onto the Terminal window. The folder's path appears after `cd `.
5. Press **Return**.
6. Run:

```bash
pwd
```

The last part of the line should be `WebsiteForZosh`. If it is a different folder, repeat the `cd` step. Commands run in the wrong folder will fail or create files in the wrong place.

On Windows, open the `WebsiteForZosh` folder in File Explorer, click the address bar, type `cmd`, and press **Enter**. Then run `cd` to confirm the path ends in `WebsiteForZosh`.

## 3. Install this project's files

Run this once, from the `WebsiteForZosh` folder:

```bash
npm install
```

What is happening: npm reads `package.json` and downloads the libraries this site needs. They go into a new folder named `node_modules`. The first run can take a minute.

You should see a short summary that ends with the number of packages added. A new `node_modules` folder appears next to `package.json`. Leave `node_modules` as it is. You edit the files in `src` instead.

Run `npm install` again later only after `package.json` changes.

## 4. Start the website

In the same Terminal window, run:

```bash
npm run dev
```

Leave this window open. A running site keeps the Terminal busy, and that is expected. Near the top of the output, look for a line like:

```text
Local:   http://127.0.0.1:5173/
```

Open that address:

1. Select the address in the Terminal.
2. Copy it.
3. Paste it into Chrome, Safari, or Firefox and press **Return**.

You should see the Zosh page, with the heading "A calmer kind of website."

Use the address printed in your Terminal if it is different from `http://127.0.0.1:5173/`. Vite picks another port when `5173` is already taken.

To stop the site, click the Terminal window and press **Control-C**. That is the Control key, not the Command key. Command-C copies text, so it leaves the site running.

## 5. Change the words and see the result

Keep `npm run dev` running.

1. Open `src/content.ts` in your editor.
2. Change the text inside the quotes. The page heading is `hero.title`. The menu labels are `navItems`.
3. Save the file.

The browser refreshes the page on its own. You do not need to run `npm run dev` again.

Other files you may want later:

| File | What it controls |
| --- | --- |
| `src/content.ts` | The words on the page |
| `src/index.css` | Colors, type, and spacing |
| `src/components/Contact.tsx` | The contact form |
| `src/App.tsx` | The order of the sections |
| `index.html` | The browser-tab title |

## 6. Run the tests

A test is an automatic check. These tests confirm the page shows its sections and the contact form asks for a name, a real email address, and a message of at least 10 characters.

`npm run dev` keeps its Terminal busy. Open a second Terminal window, move into `WebsiteForZosh` again with the `cd` steps above, and run:

```bash
npm test
```

A passing run ends with a line like `Tests  9 passed`. When a test fails, the output names the file and the check that failed.

To re-run tests every time you save a file:

```bash
npm run test:watch
```

Stop watch mode with **Control-C**.

## 7. Build a finished copy

The development site in step 4 is for editing. A build is the finished copy of the site.

Stop the development server with **Control-C** first, or use a second Terminal window. From `WebsiteForZosh`, run:

```bash
npm run lint
```

Lint checks the code for common mistakes. A clean run prints nothing after the command and returns you to a fresh prompt.

Then run:

```bash
npm run build
```

This checks the code and writes the finished site into a `dist` folder. You should see `built in` near the end.

To view that finished copy in a browser:

```bash
npm run preview
```

Open the address this command prints, the same way you opened the development site. Stop the preview with **Control-C**.

## If a command fails

- **`command not found` for `node` or `npm`:** go back to step 1. Quit Terminal and open a new window before trying again.
- **`cd` says no such file:** the folder path is wrong. Drag the `WebsiteForZosh` folder onto Terminal again.
- **`npm install` or `npm run dev` cannot find `package.json`:** Terminal is in the wrong folder. Run `pwd` and confirm the path ends in `WebsiteForZosh`.
- **The browser says it cannot connect:** the site is stopped, or the address does not match the `Local:` line. Start it again with `npm run dev` and use the address from that run.
- **The page does not show your edit:** save `src/content.ts`, and confirm the Terminal running `npm run dev` is still open.

## GitHub

This folder is a Git project on the branch `main`. Its remote, named `origin`, is [https://github.com/vctrch/WebsiteForZosh](https://github.com/vctrch/WebsiteForZosh).

No commit has been created on this computer yet. The GitHub project already contains one commit, and that commit adds the MIT license.
