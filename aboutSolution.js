```javascript
//pages/aboutSolution.js
import { useState, useEffect } from 'react';

function AboutSolution() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching user data (replace with your actual API call)
    const fetchData = async () => {
      try {
        const response = await fetch('/api/user');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Hello, {user.name}!</p>
    </div>
  );
}

export default AboutSolution;
```