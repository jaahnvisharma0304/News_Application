# 📰 News Mania - A Dynamic News Aggregator Built with React

## Overview
**News Mania** is a basic React application that allows users to browse the latest news articles in various categories such as General, Technology, Business, Entertainment, Health, Science, and Sports. The app fetches data from the NewsAPI and dynamically updates the content based on the selected category.

## Features
- Browse top headlines in multiple categories.
- Dynamic content fetching using NewsAPI.
- Responsive design using Bootstrap 5.
- Card-based UI layout for news articles.

## Technologies Used
- **React.js**: For building the user interface.
- **Bootstrap 5**: To style components and create a responsive layout.
- **NewsAPI**: To fetch real-time news data from various categories.
- **CSS**: For custom styling and layout adjustments.

## Project Structure
- **`App.js`**: The main entry point that integrates the `Navbar` and `Newsboard` components.
- **`components/Navbar.js`**: A responsive and fixed-top navbar that allows users to select news categories.
- **`components/Newsboard.js`**: Handles fetching news articles based on the selected category and passes data to the `NewsItem` component.
- **`components/NewsItem.js`**: A card-based UI component that displays individual news articles with a title, description, image, and a link to the full article.
