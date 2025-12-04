# User List Management System

A modern Angular application for managing and filtering user data with real-time search capabilities and professional UI design.

## 🚀 Features

- **User List Display**: View users in a clean, responsive table format showing Full Name (LastName, FirstName), Email, and Status
- **Real-time Filtering**: 
  - Filter by email with instant search
  - Filter by status (Active/Inactive) using dropdown
  - Clear all filters with one click
- **State Management**: Built with NgRx for predictable state management
- **HTTP Simulation**: Mock API calls with 2-second delay to simulate real server responses
- **Authentication**: HTTP interceptor automatically adds Bearer token to all requests
- **Modern Angular**: Uses latest Angular features including:
  - Standalone components
  - New control flow syntax (`@if`, `@for`, `@defer`)
  - Zoneless change detection
  - Custom pipes for data transformation
- **Responsive Design**: Mobile-friendly interface with professional styling
- **Loading States**: Shows loading indicators during data fetch
- **Error Handling**: Comprehensive error handling with user-friendly messages

## 🛠 Tech Stack

- **Angular 20.1.0** - Frontend framework
- **NgRx** - State management (Store, Effects, Selectors)
- **RxJS** - Reactive programming
- **TypeScript** - Type-safe development
- **Standalone Components** - Modern Angular architecture
- **CSS3** - Custom styling with responsive design

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd user-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open the application**
   Navigate to `http://localhost:4200/` in your browser

## 🎯 How to Use

1. **View Users**: The application loads user data automatically with a 2-second delay
2. **Filter by Email**: Type in the email filter box to search users by email address
3. **Filter by Status**: Use the dropdown to show only Active or Inactive users
4. **Clear Filters**: Click "Clear Filters" to reset all filters and show all users
5. **Responsive**: The table adapts to different screen sizes for optimal mobile experience

## 📁 Project Structure

```
src/
├── app/
│   ├── features/
│   │   └── user-list/          # Lazy-loaded user list component
│   ├── models/                 # TypeScript interfaces
│   ├── services/               # HTTP services
│   ├── store/                  # NgRx store (actions, effects, reducers, selectors)
│   ├── interceptors/           # HTTP interceptors
│   └── pipes/                  # Custom pipes
├── assets/                     # Static assets
└── public/
    └── mock-users.json         # Mock user data
```

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Run linting
npm run lint
```

## 🏗 Architecture

- **Lazy Loading**: User list component is lazy-loaded for better performance
- **NgRx Pattern**: Complete state management with actions, effects, reducers, and selectors
- **HTTP Interceptor**: Automatic Bearer token injection for all HTTP requests
- **Modern Control Flow**: Uses Angular's new `@if`, `@for`, and `@defer` syntax
- **Standalone Components**: No need for NgModules, cleaner architecture

## 🎨 UI/UX Features

- Clean, professional design with hover effects
- Color-coded status indicators (green for active, red for inactive)
- Responsive table that works on all screen sizes
- Loading states with smooth transitions
- Intuitive filter controls with instant feedback

Built with ❤️ using Angular and modern web technologies.
