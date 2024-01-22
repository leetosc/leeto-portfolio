---
layout: '@/templates/BasePost.astro'
title: Setting Up My New Macbook Pro
description: Steps taken to set up my new Macbook for development
pubDate: 2024-01-19T00:00:00Z
imgSrc: '/assets/images/posts/setting-up-new-macbook/macbook.png'
imgAlt: 'macbook'
---

# Setting Up My New Macbook Pro M3

My previous laptop, a 14" Macbook Pro M1 with 16GB RAM and 1TB storage, was the best machine I have ever owned.  It ran smoothly and the battery life was really good, especially compared to the previous Intel models. However, over time my development workflows have gotten more resource-intensive and I have been running into limits, especially with the RAM. 

When the M3 line of Macbooks was released, I purchased a beast machine with the help of my friend's employee discount. 

- M3 Max Macbook Pro 14"
   - 96GB RAM 
   - 2TB storage  

This will help me be more productive, and enable me to explore new areas such as AI (running local LLMs) and Mobile App development.

## Initial Steps

**1. Clean Slate:**
   Started with a clean install, skipping the Migration Assistant for a fresh beginning.

**2. Personalizing Keyboard and Trackpad:**
   Updated keyboard and trackpad settings to match preferred ergonomics.
   - normal scroll direction
   - tap to click

## Installing Essential Applications

The following applications were installed to create a productive environment:

1. **Web Browsers:**
   - Chrome
   - Firefox
   - Edge
   - Arc
   - Orion

2. **Terminal and Code Editors:**
   - Set up iTerm with Xcode developer tools, a customized color scheme, 
     - hostname configuration: `sudo scutil --set HostName dennym3`
   - Visual Studio Code (VS Code) and VS Code Insiders, added to PATH for easy terminal access.

3. **App Store Downloads:**
   - Messenger
   - Mattermost
   - XCode
   - Auth for Tesla

4. **Note-Taking and Productivity Tools:**
   - Notion
   - Obsidian with self-hosted livesync setup

5. **Communication**
  - Teams
  - Zoom
  - Beeper
  - Pulse SMS

6. **Customization**
  - BetterTouchTool
  - iStatMenus
  - TopNotch
  - Bartender 5

5. **Other Utilities:**
   - Homebrew
   - Postman
   - Warp Terminal
   - Spotify
   - Sublime Text
   - VLC
   - OneDrive
   - Anytype
   - DBeaver
   - Hyper
   - Handbrake
   - qbittorrent
   - Tabby
   - Parsec

   Microsoft Office 2021 downloaded from [here](https://account.microsoft.com/services#main-content-landing-react).

## Development Environment Setup

1. **NodeJS and Package Managers:**
   - NodeJS installed from its website.
   - nvm installed: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`.
   - yarn installed globally: `npm install --global yarn`.
   - pnpm installed via Homebrew:
     ```bash
     brew install pnpm
     ```

2. **ZSH and Themes:**
   - `oh-my-zsh` installed:
     ```bash
     sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
     ```
   - `p10k` set up and customized:
     ```bash
     git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
     ```

3. **NeoVim and LazyVim:**
   - NeoVim installed using Homebrew.
   - LazyVim setup:
     ```bash
     git clone https://github.com/LazyVim/starter ~/.config/nvim
     ```
   - LunarVim installed and configured.

4. **Fonts:**
   - Development fonts installed:
     ```bash
     brew tap homebrew/cask-fonts
     brew install font-meslo-lg-nerd-font
     ```

5. **ZSH Plugins:**
   - `zsh-syntax-highlighting`, `zsh-autosuggestions`, and `web-search` plugins installed.
   - Updated `plugins` in `~/.zshrc`.

6. **File Exploration:**
   - `exa` installed for enhanced file listing:
     ```bash
     brew install exa
     ```

7. **Enabling SSH:**
   - SSH enabled through System Settings > General > Sharing > Advanced > Remote Login.

## Cloning Repositories and Environment Setup

1. **Cloning Necessary Repositories:**
   - Necessary repositories cloned from the old computer.

2. **Transferring Environment Variables:**
   - Relevant environment variables transferred from the old setup.

3. **Setting Up SSH Keys on VMs:**
   - SSH keys added to various VMs.

## Personal Tweaks and Customizations

1. **Trackpad**
  - trackpad does not register 2-finger force click well.
    - set 2-finger force click in BetterTouchTool but triggering was hard because native 2-finger press overrode it
    - disabled native 2-finger press/tap to right-click
    - set 2-finger press/tap as right-click in BetterTouchTool

2. **Disabling Hold Key for Symbols:**
   - Hold key for symbols disabled - interferes with vim:
     ```bash
     defaults write -g ApplePressAndHoldEnabled -bool false
     ```
3. **Disable typing shortcuts**
   - Keyboard > Input Sources
   	 - disable
   		 - correct spelling automatically
   		 - capitalize words automatically
   		 - add period with double space
   		 - use smart quotes

## Setting Up for Expo/React Native

For Expo or React Native projects:
1. Watchman installed: `brew install watchman`.
2. Cocoapods installed: `sudo gem install cocoapods`.

