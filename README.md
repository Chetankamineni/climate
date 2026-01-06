# Climate

Climate is a high-performance, modern weather dashboard built with **React 19**, **Vite**, and **Tailwind CSS 4**. It provides users with real-time weather data, detailed forecasts, and air quality monitoring through a clean, responsive interface.

## Core Features

* **Real-time Local Weather**: Automatic geolocation detection to provide immediate weather updates for the user's current position.
* **Comprehensive Forecasts**: Includes an interactive hourly temperature chart using Recharts and a detailed 5-day forecast.
* **Air Quality Monitoring**: Integrated Air Quality Index (AQI) reporting to track local pollution levels.
* **City Search & Management**: Search for cities globally and maintain a list of favorite locations for quick access.
* **Dynamic Theming**: Full support for light and dark modes with persistent user preferences.
* **Responsive Design**: A mobile-first layout optimized for all screen sizes using Tailwind CSS 4 and Radix UI primitives.

## Tech Stack

* **Framework**: [React 19](https://react.dev/)
* **Build Tool**: [Vite 6](https://vitejs.dev/)
* **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
* **State Management**: [TanStack Query v5](https://tanstack.com/query/latest) 
* **Routing**: [React Router 7](https://reactrouter.com/)
* **UI Components**: [Radix UI](https://www.radix-ui.com/) and [Lucide React](https://lucide.dev/) icons
* **Charts**: [Recharts](https://recharts.org/)
* **Date Handling**: [date-fns](https://date-fns.org/)

## Project Structure

```text
src/
├── api/          # OpenWeatherMap API integration and TypeScript definitions
├── components/   # Reusable UI components (Dashboard widgets, UI primitives)
├── context/      # Theme and global state providers
├── hooks/        # Custom hooks for geolocation, weather queries, and local storage
├── pages/        # Main route components (Dashboard and City views)
└── lib/          # Utility functions

```

## Getting Started

### Prerequisites

* Node.js (Latest LTS recommended)
* An API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app

```


2. Install dependencies:
```bash
npm install

```


3. Set up environment variables:
Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```env
VITE_OPENWEATHER_API_KEY=your_api_key_here

```


4. Start the development server:
```bash
npm run dev

```



## Scripts

* `npm run dev`: Starts the Vite development server.
* `npm run build`: Compiles TypeScript and builds the production application.
* `npm run lint`: Runs ESLint to check for code quality and style issues.
* `npm run preview`: Locally previews the production build.

## License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.
