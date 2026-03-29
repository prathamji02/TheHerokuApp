#  UI Automation Framework | The Internet (HerokuApp)

![Node.js](https://img.shields.io/badge/Node.js-v18+-green?logo=node.js)
![Selenium](https://img.shields.io/badge/Selenium-WebDriver-blue?logo=selenium)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-brightgreen?logo=cucumber)
![Chai](https://img.shields.io/badge/Chai-Assertions-red)

A robust, scalable, and professional UI Automation Framework built from scratch to test all 44 complex web interactions on **[The Internet (HerokuApp)](http://the-internet.herokuapp.com/)**. 

This project demonstrates proficiency in **Test Automation**, **Behavior Driven Development (BDD)**, and **JavaScript/Node.js**, designed with industry best practices in mind.

##  Architecture & Tech Stack

- **Language:** JavaScript (Node.js)
- **Browser Automation:** Selenium WebDriver (Microsoft Edge)
- **Test Runner & BDD:** Cucumber.js
- **Assertions:** Chai (`expect`)
- **Reporting:** Multiple-Cucumber-HTML-Reporter
- **Design Pattern:** Feature-driven step definitions with modular hooks

##  Key Features

-  **BDD Implementation:** Human-readable Gherkin syntax (`.feature` files) bridging the gap between technical and non-technical stakeholders.
-  **Complex DOM Interactions:** Handled Shadow DOM, iFrames, Drag & Drop (HTML5 via injected JS), Infinite Scrolling, and dynamic async elements.
-  **State Management:** Centralized `hooks.js` for clean browser initialization and teardown.

## 📂 Project Structure

```text
TheHerokuApp/
├── features/                 # Cucumber BDD (.feature) files
├── step_definitions/         # JavaScript step implementations bridging UI & BDD
├── support/                  # WebDriver hooks and custom HTML reporter
├── reports/                  # Auto-generated HTML/JSON test results (Git ignored)
├── package.json              # Project dependencies and npm execution scripts
└── .gitignore
```

## 💻 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Microsoft Edge Browser installed locally

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/prathamji02/TheHerokuApp.git
cd TheHerokuApp
npm install
```

### Execution

Run the entire test suite and automatically generate the HTML report:
```bash
npm test
```

Run an individual feature test (e.g., Drag and Drop):
```bash
npm run test:drag-and-drop
```


---

**Author:** Pratham Garg  
*Feel free to reach out if you have any questions or want to discuss automation strategies!*