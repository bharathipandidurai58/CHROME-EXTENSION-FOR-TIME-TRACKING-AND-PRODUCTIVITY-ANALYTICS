# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: SHOBANA.P

*INTERN ID*: CT04DR2911

*DOMAIN*: FULL STACK WEB DEVELPOMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

## DESCRIPTION OF CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

This project focuses on developing a Chrome Extension that helps users track the amount of time they spend on various websites and provides insights into their online productivity. The extension automatically monitors browser activity, records how long each website remains active, and presents the collected data in a clear, easy-to-read dashboard. The primary objective of this tool is to increase users’ awareness of their digital habits, distinguish between productive and unproductive websites, and encourage effective time management while working or studying online.

The Simple Productivity Tracker extension is built using standard web technologies, including HTML, CSS, and JavaScript, and follows the Chrome Extension Manifest V3 framework. Its system architecture comprises three main components — a background script, a popup interface, and the Chrome storage API for local data handling. The background script (background.js) runs silently while the user browses, tracking which website tab is currently active and measuring the time spent on each site. Each time the user switches tabs, minimizes the browser, or changes windows, the time data is updated and stored locally using Chrome’s chrome.storage.local API.

The popup interface (popup.html and popup.js) functions as a mini-dashboard, displaying a summary of the user’s browsing activity. When the user clicks on the extension icon, the popup lists all visited websites along with the total minutes spent on each. For better productivity insights, websites are classified into two categories: productive and unproductive. For instance, platforms like GitHub, Stack Overflow, and educational websites are labeled as productive, while social media platforms such as YouTube and Facebook are marked as unproductive. This color-coded visualization allows users to quickly understand where their time is going.

This project emphasizes simplicity and efficiency. By storing all information locally within the browser, it ensures privacy and fast access without requiring a server or external database. The extension can later be expanded to include features such as cloud synchronization, weekly activity reports, and a full web-based dashboard for deeper analytics. Even in its current form, the tool offers users a practical overview of their online habits without any manual input.

Technically, this extension highlights the capabilities of the Chrome Extensions API, particularly the background, storage, and tabs modules. It demonstrates event-driven programming, as the script dynamically responds to tab activations and window focus changes. This approach ensures that only active browsing time is recorded, providing accurate insights into productivity.

The benefits of this project include increased digital awareness, improved focus management, and effective personal productivity tracking. In today’s online-driven world, it is easy to lose track of time on distracting websites. This tool helps users analyze their browsing behavior, identify distractions, and adjust their habits for a more balanced and productive routine. It is ideal for students, professionals, and anyone aiming to improve their online time management.

In Conclusion, the Chrome Extension for Time Tracking and Productivity Analytics offers a lightweight, privacy-friendly, and efficient solution to monitor browsing behavior. It encourages mindful internet usage, helps identify distractions, and promotes better productivity through self-awareness, combining web development, browser APIs, and human-centered design principles into a practical tool that can be enhanced further with analytics and reporting features.

### OUTPUT

<img width="1909" height="874" alt="Image" src="https://github.com/user-attachments/assets/8f2136b5-b67a-4179-855b-19fba92b6818" />

<img width="1873" height="909" alt="Image" src="https://github.com/user-attachments/assets/751d45e4-1e1d-4940-9ed9-e864d5ad5b7e" />


