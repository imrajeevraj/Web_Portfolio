# 🚀 Rajeev Ranjan - Personal Portfolio

![Project Status](https://img.shields.io/badge/Status-Live-success)
![License](https://img.shields.io/badge/License-MIT-blue)

A high-performance, responsive personal portfolio website designed for AI/ML Developers and Data Scientists. Built with a focus on modern UI trends including **Glassmorphism**, **Aurora Gradients**, and **Scroll-Triggered Animations**.

## ✨ Key Features

* **🎨 Modern UI/UX:** Dark-themed aesthetic with "Aurora" background glows and glassmorphism cards.
* **📱 Fully Responsive:** Mobile-first design using Tailwind CSS; looks great on phones, tablets, and desktops.
* **⚡ High Performance:**
    * No heavy framework overhead (Vanilla JS).
    * Optimized scroll event listeners.
    * Intersection Observer API for "Reveal on Scroll" animations.
* **🛠 Technical Skills Grid:** Custom-designed grid showcasing AI/ML, C, Python, React, and Tailwind proficiency.
* **📬 Working Contact Form:** Integrated with **Web3Forms** for serverless email handling (no backend required).
* **✨ Interactive Elements:**
    * Typing text effect.
    * Hover glow effects on cards.
    * Dynamic Navbar transparency on scroll.

## 🛠️ Tech Stack

* **Structure:** HTML5 (Semantic)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN for rapid development)
* **Scripting:** Vanilla JavaScript (ES6+)
* **Icons:** [Font Awesome 6](https://fontawesome.com/)
* **Fonts:** [Google Fonts](https://fonts.google.com/) (Poppins)

## 🚀 Quick Start

Since this project uses the Tailwind CSS CDN, there is **no build step** or `npm install` required. You can run it instantly.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/imrajeevraj/portfolio.git](https://github.com/imrajeevraj/portfolio.git)
    cd portfolio
    ```

2.  **Run the project:**
    * Simply open `index.html` in your web browser.
    * **Recommended:** Use the "Live Server" extension in VS Code for real-time updates.

## ⚙️ Configuration & Customization

### 1. Setting up the Contact Form
The contact form uses [Web3Forms](https://web3forms.com/). To make it work for your email:

1.  Go to `index.html`.
2.  Find the `<form>` tag in the `#contact` section.
3.  Locate the hidden input:
    ```html
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    ```
4.  Replace the `value` with your own Access Key (Get one for free at [Web3Forms](https://web3forms.com/)).

### 2. Updating Resume
1.  Place your PDF resume in an `assets` folder.
2.  Update the download link in the About section:
    ```html
    <a href="assets/resume.pdf" download="My_Name_Resume">...</a>
    ```

### 3. Changing Images
* Profile images are currently hosted via direct links. For production, create an `assets/` folder and update the `src` attributes in `index.html` to point to your local files.

## 📂 Project Structure

```text
/
├── index.html      # Main markup and Tailwind configuration
├── script.js       # Logic for scroll reveal, typing effect, and form handling
├── assets/         # (Create this folder) for Resume and Images
└── README.md       # Documentation
```````
🎨 Design System

1. Primary Color: Slate 900 (#0f172a) - Background
2. Secondary Color: Slate 800 (#1e293b) - Cards/Sections
3. Accent Color: Sky 400 (#38bdf8) - Highlights, Links, Glows
4. Font Family: Poppins

🤝 Contributing

* **Contributions, issues, and feature requests are welcome!**
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

📄 License

* **Distributed under the MIT License. See LICENSE for more information.**

## Developed with ❤️ by Rajeev Ranjan
