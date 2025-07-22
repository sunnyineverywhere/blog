---
title: "Building Scalable React Applications: Architecture Patterns"
date: "2025-01-15"
excerpt: "Learn proven architectural patterns and strategies for building React applications that can scale with your team and user base."
tags: ["react", "architecture", "scalability", "patterns"]
category: "Architecture"
---

# Building Scalable React Applications

As React applications grow in complexity, maintaining clean architecture becomes crucial. This guide covers essential patterns and strategies for building scalable React applications.

## Component Architecture

### 1. Container vs Presentation Components

Separate your components into containers (logic) and presentational (UI) components:

```tsx
// Presentational Component
interface UserListProps {
  users: User[];
  onUserSelect: (user: User) => void;
}

function UserList({ users, onUserSelect }: UserListProps) {
  return (
    <div>
      {users.map(user => (
        <UserCard 
          key={user.id} 
          user={user} 
          onClick={() => onUserSelect(user)} 
        />
      ))}
    </div>
  );
}

// Container Component
function UserListContainer() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(setUsers).finally(() => setLoading(false));
  }, []);

  const handleUserSelect = (user: User) => {
    // Handle selection logic
  };

  if (loading) return <LoadingSpinner />;

  return <UserList users={users} onUserSelect={handleUserSelect} />;
}
```

### 2. Compound Components Pattern

Create flexible, reusable components using the compound pattern:

```tsx
interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

function Tabs({ children, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }: { children: React.ReactNode }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ value, children }: TabProps) {
  const context = useContext(TabsContext);
  const isActive = context?.activeTab === value;

  return (
    <button
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={() => context?.setActiveTab(value)}
    >
      {children}
    </button>
  );
}

// Usage
<Tabs defaultTab="profile">
  <TabList>
    <Tab value="profile">Profile</Tab>
    <Tab value="settings">Settings</Tab>
  </TabList>
  <TabPanels>
    <TabPanel value="profile">Profile content</TabPanel>
    <TabPanel value="settings">Settings content</TabPanel>
  </TabPanels>
</Tabs>
```

## State Management Strategies

### 1. Local vs Global State

Keep state as local as possible, lift up only when necessary:

```tsx
// ❌ Unnecessary global state
const globalState = {
  modalOpen: false,
  formData: {},
  // ... other unrelated state
};

// ✅ Local state for UI-specific concerns
function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  // Only lift to global state when shared across components
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {/* Form content */}
    </Modal>
  );
}
```

### 2. Custom Hooks for Logic Reuse

Extract complex logic into custom hooks:

```tsx
function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage in multiple components
function UserProfile({ userId }: { userId: string }) {
  const { data: user, loading, error } = useApi<User>(`/api/users/${userId}`);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!user) return <NotFound />;

  return <div>{user.name}</div>;
}
```

## File Organization

Structure your project for growth:

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── forms/        # Form-specific components
│   └── layout/       # Layout components
├── hooks/            # Custom hooks
├── services/         # API calls and external services
├── utils/            # Pure utility functions
├── types/            # TypeScript type definitions
└── pages/            # Page components
```

## Performance Optimization

### 1. Memoization Strategies

Use React.memo and useMemo strategically:

```tsx
// Memoize expensive calculations
function ExpensiveComponent({ items }: { items: Item[] }) {
  const sortedItems = useMemo(
    () => items.sort((a, b) => a.priority - b.priority),
    [items]
  );

  return (
    <div>
      {sortedItems.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

// Memoize components that receive stable props
const ItemCard = React.memo(({ item }: { item: Item }) => {
  return <div>{item.name}</div>;
});
```

### 2. Code Splitting

Implement route-based code splitting:

```tsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

## Conclusion

Building scalable React applications requires thoughtful architecture decisions from the start. Focus on component composition, smart state management, and performance optimization to create applications that can grow with your needs.