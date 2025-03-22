
import BlogPost from '@/components/BlogPost';
import { FileText, Code, CheckCircle, AlertCircle, BookOpen, ListChecks } from 'lucide-react';

const TypeScriptGuide = () => {
  return (
    <BlogPost
      title="Getting Started with TypeScript"
      author="Lee Jones"
      date="February 22, 2023"
      readTime="9 min read"
      coverImage="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      content={
        <>
          <p className="lead">
            TypeScript has become an essential tool in modern JavaScript development. This comprehensive guide will help you get started with TypeScript and integrate it into your existing JavaScript projects for better type safety, improved developer experience, and fewer runtime errors.
          </p>
          
          <div className="flex items-center my-8 p-6 bg-blue-50 rounded-lg">
            <Code className="w-12 h-12 text-highlands-primary mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">TypeScript Fundamentals</h3>
              <p className="m-0">
                TypeScript is a superset of JavaScript that adds static typing to the language, catching errors during development rather than at runtime.
              </p>
            </div>
          </div>
          
          <h2>1. Setting Up TypeScript</h2>
          <p>
            To get started with TypeScript, you'll need to install it and set up a basic configuration file. Here's how:
          </p>
          
          <pre><code>{`
# Install TypeScript globally
npm install -g typescript

# Or install as a dev dependency in your project
npm install --save-dev typescript

# Create a basic tsconfig.json file
npx tsc --init
          `}</code></pre>
          
          <p>
            The generated <code>tsconfig.json</code> file includes many options with helpful comments. Here's a simplified version with common settings:
          </p>
          
          <pre><code>{`
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
          `}</code></pre>
          
          <div className="flex items-center justify-center my-10">
            <CheckCircle className="w-16 h-16 text-highlands-primary" />
          </div>
          
          <h2>2. Basic TypeScript Types</h2>
          <p>
            TypeScript provides several built-in types that help you describe the shape of your data:
          </p>
          
          <pre><code>{`
// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Object type
let person: { name: string; age: number } = {
  name: "John",
  age: 30
};

// Function types
function add(a: number, b: number): number {
  return a + b;
}

// Function type expression
let myAdd: (x: number, y: number) => number = function(
  x: number, 
  y: number
): number {
  return x + y;
};
          `}</code></pre>
          
          <div className="flex items-center my-8 p-6 bg-blue-50 rounded-lg">
            <AlertCircle className="w-12 h-12 text-highlands-primary mr-4" />
            <p className="m-0">
              <strong>Type Inference:</strong> TypeScript can often infer types automatically. Only add explicit type annotations when necessary or when they improve readability.
            </p>
          </div>
          
          <h2>3. Interfaces and Type Aliases</h2>
          <p>
            Interfaces and type aliases help you define custom types for objects, improving code readability and reusability:
          </p>
          
          <pre><code>{`
// Interface
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
  readonly createdAt: Date; // Can't be modified after creation
}

// Using the interface
const newUser: User = {
  id: 1,
  name: "Jane",
  email: "jane@example.com",
  createdAt: new Date()
};

// Type alias
type Point = {
  x: number;
  y: number;
};

// Union types
type Status = "pending" | "approved" | "rejected";
let currentStatus: Status = "pending";

// currentStatus = "in progress"; // Error: Type '"in progress"' is not assignable to type 'Status'
          `}</code></pre>
          
          <h2>4. Functions in TypeScript</h2>
          <p>
            TypeScript provides several ways to type functions, including parameter types, return types, and optional parameters:
          </p>
          
          <pre><code>{`
// Basic function with types
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// Optional parameters
function createUser(name: string, age?: number): User {
  return {
    id: Math.random(),
    name,
    email: \`\${name.toLowerCase()}@example.com\`,
    ...(age && { age }),
    createdAt: new Date()
  };
}

// Default parameters
function buildUrl(path: string, domain: string = "example.com"): string {
  return \`https://\${domain}/\${path}\`;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
          `}</code></pre>
          
          <div className="flex items-center justify-center my-10">
            <BookOpen className="w-16 h-16 text-highlands-primary" />
          </div>
          
          <h2>5. Generics</h2>
          <p>
            Generics allow you to create reusable components that work with a variety of types rather than a single one:
          </p>
          
          <pre><code>{`
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
// or let output = identity("myString"); // Type inference works here too

// Generic interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "hello" };

// Generic constraints
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property
  return arg;
}
          `}</code></pre>
          
          <h2>6. Adding TypeScript to Existing Projects</h2>
          <p>
            You can gradually add TypeScript to existing JavaScript projects by following these steps:
          </p>
          
          <ol>
            <li>Install TypeScript and create a basic tsconfig.json</li>
            <li>Rename .js files to .ts (or .jsx to .tsx for React)</li>
            <li>Fix type errors incrementally (you can use // @ts-ignore for temporary fixes)</li>
            <li>Add type definitions for libraries using @types packages</li>
          </ol>
          
          <pre><code>{`
// Install type definitions for React
npm install --save-dev @types/react @types/react-dom
          `}</code></pre>
          
          <div className="flex items-center my-8 p-6 bg-blue-50 rounded-lg">
            <ListChecks className="w-12 h-12 text-highlands-primary mr-4" />
            <p className="m-0">
              <strong>Migration Tip:</strong> Set <code>"allowJs": true</code> in your tsconfig.json to allow mixing JavaScript and TypeScript files during gradual migration.
            </p>
          </div>
          
          <h2>7. Advanced TypeScript Features</h2>
          <p>
            As you become more comfortable with TypeScript, explore these advanced features:
          </p>
          
          <ul>
            <li><strong>Utility Types:</strong> Partial, Required, Pick, Omit, Exclude, etc.</li>
            <li><strong>Mapped Types:</strong> Transform existing types into new ones</li>
            <li><strong>Conditional Types:</strong> Types that depend on type conditions</li>
            <li><strong>Declaration Merging:</strong> Combine declarations with the same name</li>
            <li><strong>Type Guards:</strong> Runtime checks that guarantee type information</li>
          </ul>
          
          <pre><code>{`
// Example of utility types
interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Pick only some properties
type UserCredentials = Pick<User, 'email' | 'id'>;

// Type guards
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
          `}</code></pre>
          
          <h2>Conclusion</h2>
          <p>
            TypeScript offers significant benefits for JavaScript projects of all sizes. By providing static type checking, it helps catch errors early, improves code quality, and enhances developer productivity through better tooling support.
          </p>
          <p>
            Start with the basics and gradually introduce more advanced TypeScript features as you and your team become more comfortable. Remember that TypeScript is designed to be pragmatic—you can control how strict you want the type checking to be.
          </p>
        </>
      }
    />
  );
};

export default TypeScriptGuide;
