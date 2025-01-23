```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
function About() {
  // Simulate an error by trying to access a non-existent property
  console.log(user.name); 

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export default About;
```