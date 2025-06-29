// Game State Management
class HTMLLearningGame {
  constructor() {
    this.gameState = {
      exp: 0,
      completedTasks: new Set(),
      unlockedSolutions: new Set(),
      failedAttempts: {},
      theme: 'light',
      editorContent: {}
    };
    
    this.tasks = {
      // BEGINNER TASKS (10 tasks)
      'beginner-1': {
        title: 'Basic HTML Structure',
        level: 'beginner',
        exp: 10,
        instructions: `
          <h4>Task: Create Basic HTML Structure</h4>
          <p><strong>Instructions:</strong> Create a basic HTML document with the following elements:</p>
          <ul>
            <li>An <code>h1</code> heading with the text "Welcome to HTML"</li>
            <li>A paragraph with the text "This is my first HTML page"</li>
            <li>Another paragraph with the text "I'm learning HTML step by step"</li>
          </ul>
          <p><strong>Reward:</strong> 10 EXP</p>
        `,
        solution: `<h1>Welcome to HTML</h1>
<p>This is my first HTML page</p>
<p>I'm learning HTML step by step</p>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<h1>welcome to html</h1> <p>this is my first html page</p> <p>i'm learning html step by step</p>`;
          return normalized === expected;
        }
      },

      'beginner-2': {
        title: 'HTML Text Elements',
        level: 'beginner',
        exp: 10,
        instructions: `
          <h4>Task: HTML Text Elements</h4>
          <p><strong>Instructions:</strong> Create the following text formatting:</p>
          <ul>
            <li>An <code>h2</code> heading with "Text Formatting"</li>
            <li>A paragraph with <code>bold</code> text saying "This is bold"</li>
            <li>A paragraph with <code>italic</code> text saying "This is italic"</li>
          </ul>
          <p><strong>Reward:</strong> 10 EXP</p>
        `,
        solution: `<h2>Text Formatting</h2>
<p><b>This is bold</b></p>
<p><i>This is italic</i></p>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<h2>text formatting</h2> <p><b>this is bold</b></p> <p><i>this is italic</i></p>`;
          return normalized === expected;
        }
      },

      'beginner-3': {
        title: 'HTML Attributes',
        level: 'beginner',
        exp: 10,
        instructions: `
          <h4>Task: HTML Attributes</h4>
          <p><strong>Instructions:</strong> Create elements with attributes:</p>
          <ul>
            <li>A <code>div</code> with id="container"</li>
            <li>A <code>p</code> with class="highlight" and text "Highlighted paragraph"</li>
          </ul>
          <p><strong>Reward:</strong> 10 EXP</p>
        `,
        solution: `<div id="container">
<p class="highlight">Highlighted paragraph</p>
</div>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<div id="container"> <p class="highlight">highlighted paragraph</p> </div>`;
          return normalized === expected;
        }
      },

      'beginner-4': {
        title: 'HTML Comments',
        level: 'beginner',
        exp: 10,
        instructions: `
          <h4>Task: HTML Comments</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>An HTML comment saying "This is a comment"</li>
            <li>A paragraph with text "This is visible content"</li>
          </ul>
          <p><strong>Reward:</strong> 10 EXP</p>
        `,
        solution: `<!-- This is a comment -->
<p>This is visible content</p>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<!-- this is a comment --> <p>this is visible content</p>`;
          return normalized === expected;
        }
      },

      'beginner-5': {
        title: 'HTML Line Breaks',
        level: 'beginner',
        exp: 10,
        instructions: `
          <h4>Task: HTML Line Breaks</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A paragraph with "First line", then a <code>br</code> tag, then "Second line"</li>
            <li>A horizontal rule using <code>hr</code> tag</li>
          </ul>
          <p><strong>Reward:</strong> 10 EXP</p>
        `,
        solution: `<p>First line<br>Second line</p>
<hr>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<p>first line<br>second line</p> <hr>`;
          return normalized === expected;
        }
      },

      'beginner-6': {
        title: 'HTML Div Elements',
        level: 'beginner',
        exp: 10,
        instructions: `
          <h4>Task: HTML Div Elements</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A <code>div</code> with class="container"</li>
            <li>Inside it, another <code>div</code> with class="content" and text "Content inside div"</li>
          </ul>
          <p><strong>Reward:</strong> 10 EXP</p>
        `,
        solution: `<div class="container">
<div class="content">Content inside div</div>
</div>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<div class="container"> <div class="content">content inside div</div> </div>`;
          return normalized === expected;
        }
      },

      'beginner-7': {
        title: 'HTML Span Elements',
        level: 'beginner',
        exp: 10,
        instructions: `
          <h4>Task: HTML Span Elements</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A paragraph with text "This is " followed by a <code>span</code> with class="highlight" and text "highlighted text"</li>
          </ul>
          <p><strong>Reward:</strong> 10 EXP</p>
        `,
        solution: `<p>This is <span class="highlight">highlighted text</span></p>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<p>this is <span class="highlight">highlighted text</span></p>`;
          return normalized === expected;
        }
      },

      'beginner-8': {
        title: 'HTML Emphasis Elements',
        level: 'beginner',
        exp: 10,
        instructions: `
          <h4>Task: HTML Emphasis Elements</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A paragraph with <code>em</code> tag containing "emphasized text"</li>
            <li>A paragraph with <code>strong</code> tag containing "important text"</li>
          </ul>
          <p><strong>Reward:</strong> 10 EXP</p>
        `,
        solution: `<p><em>emphasized text</em></p>
<p><strong>important text</strong></p>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<p><em>emphasized text</em></p> <p><strong>important text</strong></p>`;
          return normalized === expected;
        }
      },

      'beginner-9': {
        title: 'HTML Preformatted Text',
        level: 'beginner',
        exp: 10,
        instructions: `
          <h4>Task: HTML Preformatted Text</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A <code>pre</code> tag with the text "Line 1\nLine 2\nLine 3"</li>
          </ul>
          <p><strong>Reward:</strong> 10 EXP</p>
        `,
        solution: `<pre>Line 1
Line 2
Line 3</pre>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<pre>line 1 line 2 line 3</pre>`;
          return normalized === expected;
        }
      },

      'beginner-10': {
        title: 'HTML Blockquote',
        level: 'beginner',
        exp: 10,
        instructions: `
          <h4>Task: HTML Blockquote</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A <code>blockquote</code> with text "This is a quote from someone famous"</li>
            <li>A <code>cite</code> tag with text "Famous Person"</li>
          </ul>
          <p><strong>Reward:</strong> 10 EXP</p>
        `,
        solution: `<blockquote>This is a quote from someone famous</blockquote>
<cite>Famous Person</cite>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<blockquote>this is a quote from someone famous</blockquote> <cite>famous person</cite>`;
          return normalized === expected;
        }
      },

      // INTERMEDIATE TASKS (10 tasks)
      'intermediate-1': {
        title: 'Lists and Links',
        level: 'intermediate',
        exp: 15,
        instructions: `
          <h4>Task: Create Lists and Links</h4>
          <p><strong>Instructions:</strong> Create the following HTML structure:</p>
          <ul>
            <li>An <code>h2</code> heading with the text "My Favorite Websites"</li>
            <li>An unordered list with three list items, each containing a link:
              <ul>
                <li>Link to "https://www.google.com" with text "Google"</li>
                <li>Link to "https://www.github.com" with text "GitHub"</li>
                <li>Link to "https://www.stackoverflow.com" with text "Stack Overflow"</li>
              </ul>
            </li>
          </ul>
          <p><strong>Reward:</strong> 15 EXP</p>
        `,
        solution: `<h2>My Favorite Websites</h2>
<ul>
  <li><a href="https://www.google.com">Google</a></li>
  <li><a href="https://www.github.com">GitHub</a></li>
  <li><a href="https://www.stackoverflow.com">Stack Overflow</a></li>
</ul>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<h2>my favorite websites</h2> <ul> <li><a href="https://www.google.com">google</a></li> <li><a href="https://www.github.com">github</a></li> <li><a href="https://www.stackoverflow.com">stack overflow</a></li> </ul>`;
          return normalized === expected;
        }
      },

      'intermediate-2': {
        title: 'HTML Images',
        level: 'intermediate',
        exp: 15,
        instructions: `
          <h4>Task: HTML Images</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>An <code>img</code> tag with src="image.jpg", alt="Sample Image", and width="300"</li>
            <li>A paragraph with text "This is an image example"</li>
          </ul>
          <p><strong>Reward:</strong> 15 EXP</p>
        `,
        solution: `<img src="image.jpg" alt="Sample Image" width="300">
<p>This is an image example</p>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<img src="image.jpg" alt="sample image" width="300"> <p>this is an image example</p>`;
          return normalized === expected;
        }
      },

      'intermediate-3': {
        title: 'HTML Tables',
        level: 'intermediate',
        exp: 15,
        instructions: `
          <h4>Task: HTML Tables</h4>
          <p><strong>Instructions:</strong> Create a table with:</p>
          <ul>
            <li>Header row with "Name" and "Age"</li>
            <li>Data row with "John" and "25"</li>
            <li>Data row with "Jane" and "30"</li>
          </ul>
          <p><strong>Reward:</strong> 15 EXP</p>
        `,
        solution: `<table>
<tr>
<th>Name</th>
<th>Age</th>
</tr>
<tr>
<td>John</td>
<td>25</td>
</tr>
<tr>
<td>Jane</td>
<td>30</td>
</tr>
</table>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<table> <tr> <th>name</th> <th>age</th> </tr> <tr> <td>john</td> <td>25</td> </tr> <tr> <td>jane</td> <td>30</td> </tr> </table>`;
          return normalized === expected;
        }
      },

      'intermediate-4': {
        title: 'HTML Semantic Elements',
        level: 'intermediate',
        exp: 15,
        instructions: `
          <h4>Task: HTML Semantic Elements</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A <code>header</code> with an h1 "Website Header"</li>
            <li>A <code>nav</code> with text "Navigation"</li>
            <li>A <code>main</code> with text "Main Content"</li>
            <li>A <code>footer</code> with text "Website Footer"</li>
          </ul>
          <p><strong>Reward:</strong> 15 EXP</p>
        `,
        solution: `<header>
<h1>Website Header</h1>
</header>
<nav>Navigation</nav>
<main>Main Content</main>
<footer>Website Footer</footer>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<header> <h1>website header</h1> </header> <nav>navigation</nav> <main>main content</main> <footer>website footer</footer>`;
          return normalized === expected;
        }
      },

      'intermediate-5': {
        title: 'HTML Audio Elements',
        level: 'intermediate',
        exp: 15,
        instructions: `
          <h4>Task: HTML Audio Elements</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>An <code>audio</code> tag with controls, src="audio.mp3"</li>
            <li>A paragraph with text "Audio Player Example"</li>
          </ul>
          <p><strong>Reward:</strong> 15 EXP</p>
        `,
        solution: `<audio controls src="audio.mp3"></audio>
<p>Audio Player Example</p>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<audio controls src="audio.mp3"></audio> <p>audio player example</p>`;
          return normalized === expected;
        }
      },

      'intermediate-6': {
        title: 'HTML Video Elements',
        level: 'intermediate',
        exp: 15,
        instructions: `
          <h4>Task: HTML Video Elements</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A <code>video</code> tag with controls, src="video.mp4", width="400"</li>
            <li>A paragraph with text "Video Player Example"</li>
          </ul>
          <p><strong>Reward:</strong> 15 EXP</p>
        `,
        solution: `<video controls src="video.mp4" width="400"></video>
<p>Video Player Example</p>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<video controls src="video.mp4" width="400"></video> <p>video player example</p>`;
          return normalized === expected;
        }
      },

      'intermediate-7': {
        title: 'HTML Iframe',
        level: 'intermediate',
        exp: 15,
        instructions: `
          <h4>Task: HTML Iframe</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>An <code>iframe</code> with src="https://www.example.com", width="400", height="300"</li>
            <li>A paragraph with text "Embedded Content"</li>
          </ul>
          <p><strong>Reward:</strong> 15 EXP</p>
        `,
        solution: `<iframe src="https://www.example.com" width="400" height="300"></iframe>
<p>Embedded Content</p>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<iframe src="https://www.example.com" width="400" height="300"></iframe> <p>embedded content</p>`;
          return normalized === expected;
        }
      },

      'intermediate-8': {
        title: 'HTML Meta Tags',
        level: 'intermediate',
        exp: 15,
        instructions: `
          <h4>Task: HTML Meta Tags</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A <code>meta</code> tag with charset="UTF-8"</li>
            <li>A <code>meta</code> tag with name="description" content="Sample page"</li>
            <li>A <code>title</code> tag with "My Page"</li>
          </ul>
          <p><strong>Reward:</strong> 15 EXP</p>
        `,
        solution: `<meta charset="UTF-8">
<meta name="description" content="Sample page">
<title>My Page</title>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<meta charset="utf-8"> <meta name="description" content="sample page"> <title>my page</title>`;
          return normalized === expected;
        }
      },

      'intermediate-9': {
        title: 'HTML Details and Summary',
        level: 'intermediate',
        exp: 15,
        instructions: `
          <h4>Task: HTML Details and Summary</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A <code>details</code> element</li>
            <li>Inside it, a <code>summary</code> with text "Click to expand"</li>
            <li>A paragraph with text "Hidden content here"</li>
          </ul>
          <p><strong>Reward:</strong> 15 EXP</p>
        `,
        solution: `<details>
<summary>Click to expand</summary>
<p>Hidden content here</p>
</details>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<details> <summary>click to expand</summary> <p>hidden content here</p> </details>`;
          return normalized === expected;
        }
      },

      'intermediate-10': {
        title: 'HTML Progress and Meter',
        level: 'intermediate',
        exp: 15,
        instructions: `
          <h4>Task: HTML Progress and Meter</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A <code>progress</code> tag with value="70" max="100"</li>
            <li>A <code>meter</code> tag with value="0.8"</li>
          </ul>
          <p><strong>Reward:</strong> 15 EXP</p>
        `,
        solution: `<progress value="70" max="100"></progress>
<meter value="0.8"></meter>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<progress value="70" max="100"></progress> <meter value="0.8"></meter>`;
          return normalized === expected;
        }
      },

      // ADVANCED TASKS (10 tasks)
      'advanced-1': {
        title: 'Contact Form',
        level: 'advanced',
        exp: 20,
        instructions: `
          <h4>Task: Create a Contact Form</h4>
          <p><strong>Instructions:</strong> Create a complete contact form with the following elements:</p>
          <ul>
            <li>An <code>h3</code> heading with the text "Contact Us"</li>
            <li>A form with the following inputs:
              <ul>
                <li>Text input for "Name" with placeholder "Your full name"</li>
                <li>Email input for "Email" with placeholder "your@email.com"</li>
                <li>Textarea for "Message" with placeholder "Your message here..."</li>
                <li>Submit button with text "Send Message"</li>
              </ul>
            </li>
          </ul>
          <p><strong>Reward:</strong> 20 EXP</p>
        `,
        solution: `<h3>Contact Us</h3>
<form>
  <input type="text" placeholder="Your full name">
  <input type="email" placeholder="your@email.com">
  <textarea placeholder="Your message here..."></textarea>
  <button type="submit">Send Message</button>
</form>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<h3>contact us</h3> <form> <input type="text" placeholder="your full name"> <input type="email" placeholder="your@email.com"> <textarea placeholder="your message here..."></textarea> <button type="submit">send message</button> </form>`;
          return normalized === expected;
        }
      },

      'advanced-2': {
        title: 'Advanced Form Inputs',
        level: 'advanced',
        exp: 20,
        instructions: `
          <h4>Task: Advanced Form Inputs</h4>
          <p><strong>Instructions:</strong> Create a form with HTML5 input types:</p>
          <ul>
            <li>Date input with type="date"</li>
            <li>Number input with type="number" min="1" max="100"</li>
            <li>Range input with type="range" min="0" max="10"</li>
            <li>Color input with type="color"</li>
          </ul>
          <p><strong>Reward:</strong> 20 EXP</p>
        `,
        solution: `<form>
<input type="date">
<input type="number" min="1" max="100">
<input type="range" min="0" max="10">
<input type="color">
</form>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<form> <input type="date"> <input type="number" min="1" max="100"> <input type="range" min="0" max="10"> <input type="color"> </form>`;
          return normalized === expected;
        }
      },

      'advanced-3': {
        title: 'Form Validation',
        level: 'advanced',
        exp: 20,
        instructions: `
          <h4>Task: Form Validation</h4>
          <p><strong>Instructions:</strong> Create a form with validation:</p>
          <ul>
            <li>Required text input with placeholder "Required field"</li>
            <li>Email input with required attribute</li>
            <li>Password input with minlength="8"</li>
            <li>Submit button</li>
          </ul>
          <p><strong>Reward:</strong> 20 EXP</p>
        `,
        solution: `<form>
<input type="text" placeholder="Required field" required>
<input type="email" required>
<input type="password" minlength="8">
<button type="submit">Submit</button>
</form>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<form> <input type="text" placeholder="required field" required> <input type="email" required> <input type="password" minlength="8"> <button type="submit">submit</button> </form>`;
          return normalized === expected;
        }
      },

      'advanced-4': {
        title: 'Custom Data Attributes',
        level: 'advanced',
        exp: 20,
        instructions: `
          <h4>Task: Custom Data Attributes</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A div with data-user-id="123" and data-role="admin"</li>
            <li>A paragraph with data-info="sample" and text "Data attributes example"</li>
          </ul>
          <p><strong>Reward:</strong> 20 EXP</p>
        `,
        solution: `<div data-user-id="123" data-role="admin"></div>
<p data-info="sample">Data attributes example</p>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<div data-user-id="123" data-role="admin"></div> <p data-info="sample">data attributes example</p>`;
          return normalized === expected;
        }
      },

      'advanced-5': {
        title: 'Accessibility Features',
        level: 'advanced',
        exp: 20,
        instructions: `
          <h4>Task: Accessibility Features</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A button with aria-label="Close dialog"</li>
            <li>An input with aria-describedby="help-text"</li>
            <li>A span with id="help-text" and text "Help information"</li>
          </ul>
          <p><strong>Reward:</strong> 20 EXP</p>
        `,
        solution: `<button aria-label="Close dialog">X</button>
<input aria-describedby="help-text">
<span id="help-text">Help information</span>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<button aria-label="close dialog">x</button> <input aria-describedby="help-text"> <span id="help-text">help information</span>`;
          return normalized === expected;
        }
      },

      'advanced-6': {
        title: 'Microdata and Schema',
        level: 'advanced',
        exp: 20,
        instructions: `
          <h4>Task: Microdata and Schema</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A div with itemscope itemtype="http://schema.org/Person"</li>
            <li>Inside it, a span with itemprop="name" and text "John Doe"</li>
            <li>A span with itemprop="jobTitle" and text "Developer"</li>
          </ul>
          <p><strong>Reward:</strong> 20 EXP</p>
        `,
        solution: `<div itemscope itemtype="http://schema.org/Person">
<span itemprop="name">John Doe</span>
<span itemprop="jobTitle">Developer</span>
</div>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<div itemscope itemtype="http://schema.org/person"> <span itemprop="name">john doe</span> <span itemprop="jobtitle">developer</span> </div>`;
          return normalized === expected;
        }
      },

      'advanced-7': {
        title: 'Canvas Element',
        level: 'advanced',
        exp: 20,
        instructions: `
          <h4>Task: Canvas Element</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A <code>canvas</code> element with width="400" height="300" id="myCanvas"</li>
            <li>A paragraph with text "Canvas graphics area"</li>
          </ul>
          <p><strong>Reward:</strong> 20 EXP</p>
        `,
        solution: `<canvas width="400" height="300" id="myCanvas"></canvas>
<p>Canvas graphics area</p>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<canvas width="400" height="300" id="mycanvas"></canvas> <p>canvas graphics area</p>`;
          return normalized === expected;
        }
      },

      'advanced-8': {
        title: 'SVG Graphics',
        level: 'advanced',
        exp: 20,
        instructions: `
          <h4>Task: SVG Graphics</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>An <code>svg</code> element with width="100" height="100"</li>
            <li>Inside it, a <code>circle</code> with cx="50" cy="50" r="40" fill="blue"</li>
          </ul>
          <p><strong>Reward:</strong> 20 EXP</p>
        `,
        solution: `<svg width="100" height="100">
<circle cx="50" cy="50" r="40" fill="blue"></circle>
</svg>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<svg width="100" height="100"> <circle cx="50" cy="50" r="40" fill="blue"></circle> </svg>`;
          return normalized === expected;
        }
      },

      'advanced-9': {
        title: 'Web Components',
        level: 'advanced',
        exp: 20,
        instructions: `
          <h4>Task: Web Components</h4>
          <p><strong>Instructions:</strong> Create:</p>
          <ul>
            <li>A <code>template</code> element with id="my-template"</li>
            <li>Inside it, a div with text "Template content"</li>
            <li>A <code>slot</code> element with name="content"</li>
          </ul>
          <p><strong>Reward:</strong> 20 EXP</p>
        `,
        solution: `<template id="my-template">
<div>Template content</div>
<slot name="content"></slot>
</template>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<template id="my-template"> <div>template content</div> <slot name="content"></slot> </template>`;
          return normalized === expected;
        }
      },

      'advanced-10': {
        title: 'Complete Website',
        level: 'advanced',
        exp: 20,
        instructions: `
          <h4>Task: Complete Website Structure</h4>
          <p><strong>Instructions:</strong> Create a complete website structure:</p>
          <ul>
            <li>A <code>header</code> with h1 "My Website"</li>
            <li>A <code>nav</code> with ul containing three li elements with links</li>
            <li>A <code>main</code> with h2 "Welcome" and a paragraph</li>
            <li>A <code>footer</code> with text "© 2024 My Website"</li>
          </ul>
          <p><strong>Reward:</strong> 20 EXP</p>
        `,
        solution: `<header>
<h1>My Website</h1>
</header>
<nav>
<ul>
<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>
<main>
<h2>Welcome</h2>
<p>Welcome to my website</p>
</main>
<footer>© 2024 My Website</footer>`,
        validate: (code) => {
          const normalized = code.toLowerCase().replace(/\s+/g, ' ').trim();
          const expected = `<header> <h1>my website</h1> </header> <nav> <ul> <li><a href="#home">home</a></li> <li><a href="#about">about</a></li> <li><a href="#contact">contact</a></li> </ul> </nav> <main> <h2>welcome</h2> <p>welcome to my website</p> </main> <footer>© 2024 my website</footer>`;
          return normalized === expected;
        }
      }
    };
    
    this.currentTask = null;
    this.init();
  }
  
  init() {
    this.loadGameState();
    this.setupEventListeners();
    this.updateUI();
    this.updateTheme();
  }
  
  // Local Storage Management
  saveGameState() {
    const stateToSave = {
      ...this.gameState,
      completedTasks: Array.from(this.gameState.completedTasks),
      unlockedSolutions: Array.from(this.gameState.unlockedSolutions)
    };
    localStorage.setItem('htmlLearningGame', JSON.stringify(stateToSave));
  }
  
  loadGameState() {
    const saved = localStorage.getItem('htmlLearningGame');
    if (saved) {
      const parsedState = JSON.parse(saved);
      this.gameState = {
        ...parsedState,
        completedTasks: new Set(parsedState.completedTasks || []),
        unlockedSolutions: new Set(parsedState.unlockedSolutions || [])
      };
    }
  }
  
  // Event Listeners
  setupEventListeners() {
    // Back button
    document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'index.html';
    });
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
      this.toggleTheme();
    });
    
    // Task start buttons
    document.querySelectorAll('.task-start-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const taskCard = e.target.closest('.task-card');
        const taskId = taskCard.dataset.taskId;
        if (!this.gameState.completedTasks.has(taskId)) {
          this.openTaskModal(taskId);
        }
      });
    });
    
    // Modal close
    document.getElementById('closeModal').addEventListener('click', () => {
      this.closeTaskModal();
    });
    
    // Modal overlay click
    document.getElementById('taskModal').addEventListener('click', (e) => {
      if (e.target.id === 'taskModal') {
        this.closeTaskModal();
      }
    });
    
    // Code editor
    document.getElementById('codeEditor').addEventListener('input', (e) => {
      if (this.currentTask) {
        this.gameState.editorContent[this.currentTask] = e.target.value;
        this.saveGameState();
        this.updateLivePreview();
      }
    });
    
    // Validation and submission
    document.getElementById('validateCode').addEventListener('click', () => {
      this.validateCode();
    });
    
    document.getElementById('submitCode').addEventListener('click', () => {
      this.submitTask();
    });
    
    document.getElementById('showSolution').addEventListener('click', () => {
      this.showSolution();
    });
    
    // Certificate download
    document.getElementById('downloadCertificate').addEventListener('click', () => {
      this.downloadCertificate();
    });
    
    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeTaskModal();
      }
    });
  }
  
  // Theme Management
  toggleTheme() {
    this.gameState.theme = this.gameState.theme === 'light' ? 'dark' : 'light';
    this.updateTheme();
    this.saveGameState();
  }
  
  updateTheme() {
    document.documentElement.setAttribute('data-theme', this.gameState.theme);
  }
  
  // UI Updates
  updateUI() {
    this.updateExpCounter();
    this.updateProgressBars();
    this.updateTaskCards();
    this.updateCertificateSection();
  }
  
  updateExpCounter() {
    document.getElementById('expCount').textContent = this.gameState.exp;
  }
  
  updateProgressBars() {
    const levels = ['beginner', 'intermediate', 'advanced'];
    
    levels.forEach(level => {
      const levelTasks = Object.keys(this.tasks).filter(taskId => 
        this.tasks[taskId].level === level
      );
      const completedCount = levelTasks.filter(taskId => 
        this.gameState.completedTasks.has(taskId)
      ).length;
      const totalCount = levelTasks.length;
      const percentage = (completedCount / totalCount) * 100;
      
      const progressText = document.getElementById(`${level}Progress`);
      const progressBar = document.getElementById(`${level}ProgressBar`);
      
      if (progressText) {
        progressText.textContent = `${completedCount}/${totalCount} Completed`;
      }
      if (progressBar) {
        progressBar.style.width = `${percentage}%`;
      }
    });
  }
  
  updateTaskCards() {
    Object.keys(this.tasks).forEach(taskId => {
      const taskCard = document.querySelector(`[data-task-id="${taskId}"]`);
      if (taskCard) {
        const isCompleted = this.gameState.completedTasks.has(taskId);
        const startBtn = taskCard.querySelector('.task-start-btn');
        
        if (isCompleted) {
          taskCard.classList.add('completed');
          startBtn.textContent = 'Completed';
          startBtn.disabled = true;
        } else {
          taskCard.classList.remove('completed');
          startBtn.textContent = 'Start Task';
          startBtn.disabled = false;
        }
      }
    });
  }
  
  updateCertificateSection() {
    const totalTasks = Object.keys(this.tasks).length;
    const completedCount = this.gameState.completedTasks.size;
    const isUnlocked = completedCount === totalTasks;
    
    const certificateStatus = document.getElementById('certificateStatus');
    const certificateOverlay = document.getElementById('certificateOverlay');
    const certificateActions = document.getElementById('certificateActions');
    
    if (isUnlocked) {
      certificateStatus.innerHTML = `
        <svg class="icon check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        All Tasks Completed!
      `;
      certificateOverlay.classList.add('hidden');
      certificateActions.classList.add('enabled');
    } else {
      certificateStatus.innerHTML = `
        <svg class="icon lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <circle cx="12" cy="16" r="1"></circle>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        ${completedCount}/${totalTasks} Tasks Completed
      `;
      certificateOverlay.classList.remove('hidden');
      certificateActions.classList.remove('enabled');
    }
  }
  
  // Task Modal Management
  openTaskModal(taskId) {
    this.currentTask = taskId;
    const task = this.tasks[taskId];
    
    // Update modal content
    document.getElementById('modalTitle').textContent = task.title;
    document.getElementById('taskInstructions').innerHTML = task.instructions;
    
    // Load saved editor content or set default
    const savedContent = this.gameState.editorContent[taskId] || '';
    document.getElementById('codeEditor').value = savedContent;
    
    // Reset validation state
    this.resetValidationState();
    
    // Update solution button state
    this.updateSolutionButton();
    
    // Show modal
    document.getElementById('taskModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update live preview
    this.updateLivePreview();
  }
  
  closeTaskModal() {
    document.getElementById('taskModal').classList.remove('active');
    document.body.style.overflow = '';
    this.currentTask = null;
  }
  
  resetValidationState() {
    const submitBtn = document.getElementById('submitCode');
    const feedback = document.getElementById('validationFeedback');
    
    submitBtn.disabled = true;
    feedback.style.display = 'none';
    feedback.className = 'validation-feedback';
  }
  
  updateSolutionButton() {
    const showSolutionBtn = document.getElementById('showSolution');
    const taskId = this.currentTask;
    const failedAttempts = this.gameState.failedAttempts[taskId] || 0;
    const isUnlocked = this.gameState.unlockedSolutions.has(taskId);
    
    if (isUnlocked) {
      showSolutionBtn.disabled = false;
      showSolutionBtn.textContent = 'Show Solution';
    } else if (failedAttempts >= 2) {
      showSolutionBtn.disabled = false;
      showSolutionBtn.textContent = 'Show Solution (-5 EXP)';
    } else {
      showSolutionBtn.disabled = true;
      showSolutionBtn.textContent = `Show Solution (${2 - failedAttempts} attempts left)`;
    }
  }
  
  // Code Validation and Submission
  validateCode() {
    const code = document.getElementById('codeEditor').value.trim();
    const task = this.tasks[this.currentTask];
    const feedback = document.getElementById('validationFeedback');
    const submitBtn = document.getElementById('submitCode');
    
    if (!code) {
      this.showValidationFeedback('Please write some HTML code first.', 'error');
      return;
    }
    
    const isValid = task.validate(code);
    
    if (isValid) {
      this.showValidationFeedback('Perfect! Your HTML code is correct. Click Submit to earn EXP!', 'success');
      submitBtn.disabled = false;
    } else {
      // Track failed attempts
      const taskId = this.currentTask;
      this.gameState.failedAttempts[taskId] = (this.gameState.failedAttempts[taskId] || 0) + 1;
      this.saveGameState();
      
      this.showValidationFeedback('Your HTML doesn\'t match the expected output. Check the instructions and try again.', 'error');
      submitBtn.disabled = true;
      
      // Update solution button
      this.updateSolutionButton();
    }
  }
  
  showValidationFeedback(message, type) {
    const feedback = document.getElementById('validationFeedback');
    feedback.textContent = message;
    feedback.className = `validation-feedback ${type}`;
    feedback.style.display = 'block';
  }
  
  submitTask() {
    const taskId = this.currentTask;
    const task = this.tasks[taskId];
    
    // Add to completed tasks
    this.gameState.completedTasks.add(taskId);
    
    // Award EXP
    this.gameState.exp += task.exp;
    
    // Clear editor content for this task
    delete this.gameState.editorContent[taskId];
    
    // Save state
    this.saveGameState();
    
    // Update UI
    this.updateUI();
    
    // Show the answer after successful completion
    this.showTaskAnswer();
  }
  
  // Show the answer after task completion
  showTaskAnswer() {
    const task = this.tasks[this.currentTask];
    
    // Update the instructions to show the answer
    const instructionsDiv = document.getElementById('taskInstructions');
    instructionsDiv.innerHTML = `
      <h4>🎉 Task Completed Successfully!</h4>
      <p><strong>Congratulations!</strong> You earned ${task.exp} EXP!</p>
      <p><strong>Here's the correct answer:</strong></p>
      <pre><code>${task.solution.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
      <p><strong>Great job!</strong> You can now move on to the next task.</p>
    `;
    
    // Disable all buttons since task is completed
    document.getElementById('validateCode').disabled = true;
    document.getElementById('submitCode').disabled = true;
    document.getElementById('showSolution').disabled = true;
    
    // Show completion message in feedback
    this.showValidationFeedback(`Congratulations! You earned ${task.exp} EXP!`, 'success');
    
    // Close modal after delay
    setTimeout(() => {
      this.closeTaskModal();
    }, 3000);
  }
  
  showSolution() {
    const taskId = this.currentTask;
    const task = this.tasks[taskId];
    const isAlreadyUnlocked = this.gameState.unlockedSolutions.has(taskId);
    
    if (!isAlreadyUnlocked) {
      // Deduct EXP
      this.gameState.exp = Math.max(0, this.gameState.exp - 5);
      this.gameState.unlockedSolutions.add(taskId);
      this.updateExpCounter();
    }
    
    // Show solution in editor
    document.getElementById('codeEditor').value = task.solution;
    this.gameState.editorContent[taskId] = task.solution;
    this.saveGameState();
    
    // Update live preview
    this.updateLivePreview();
    
    // Update button
    this.updateSolutionButton();
    
    // Show feedback
    if (!isAlreadyUnlocked) {
      this.showValidationFeedback('Solution revealed! 5 EXP deducted. Study the code and try to understand it.', 'error');
    } else {
      this.showValidationFeedback('Here\'s the solution again. Study it carefully!', 'success');
    }
  }
  
  updateLivePreview() {
    const code = document.getElementById('codeEditor').value;
    const preview = document.getElementById('livePreview');
    
    const previewContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1, h2, h3 { color: #e34c26; }
          a { color: #f16529; text-decoration: none; }
          a:hover { text-decoration: underline; }
          ul { padding-left: 20px; }
          form { max-width: 400px; }
          input, textarea, button {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-family: inherit;
          }
          button {
            background: #e34c26;
            color: white;
            border: none;
            cursor: pointer;
            font-weight: bold;
          }
          button:hover { background: #d63916; }
        </style>
      </head>
      <body>
        ${code}
      </body>
      </html>
    `;
    
    preview.srcdoc = previewContent;
  }
  
  // Certificate Generation
  async downloadCertificate() {
    const userName = document.getElementById('userName').value.trim();
    
    if (!userName) {
      alert('Please enter your name to generate the certificate.');
      return;
    }
    
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        try {
          // Set canvas size to match your certificate image
          canvas.width = img.width;
          canvas.height = img.height;
          
          // Draw the certificate background image
          ctx.drawImage(img, 0, 0);
          
          // Calculate positions based on your certificate layout
          const centerX = canvas.width / 2;
          
          // USER NAME POSITIONING
          ctx.fillStyle = '#2d3748';
          ctx.font = 'bold 48px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          const nameY = canvas.height * 0.45;
          ctx.fillText(userName, centerX, nameY);
          
          // CURRENT DATE POSITIONING
          ctx.fillStyle = '#4a5568';
          ctx.font = '28px Arial, sans-serif';
          
          const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
          
          const dateY = canvas.height * 0.85;
          ctx.fillText(currentDate, centerX, dateY);
          
          // Convert to blob and download
          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `HTML_Certificate_${userName.replace(/\s+/g, '_')}.png`;
              
              document.body.appendChild(a);
              a.click();
              
              setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }, 100);
              
              alert('🎉 Certificate downloaded successfully!');
            } else {
              throw new Error('Failed to create certificate blob');
            }
          }, 'image/png', 1.0);
          
        } catch (error) {
          console.error('Error processing certificate:', error);
          alert('Error generating certificate. Please try again.');
        }
      };
      
      img.onerror = () => {
        console.error('Could not load certificate image (4.png)');
        alert('Certificate template not found. Please ensure 4.png is in the same directory.');
      };
      
      img.crossOrigin = 'anonymous';
      img.src = '4.png';
      
    } catch (error) {
      console.error('Error in downloadCertificate:', error);
      alert('Error generating certificate. Please try again.');
    }
  }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new HTMLLearningGame();
});

// Disable right-click and certain key combinations
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  alert("You are really talented!");
});

document.addEventListener("keydown", (event) => {
  const forbiddenKeys = [
    { ctrl: true, key: "u" },
    { ctrl: true, shift: true, key: "i" },
    { ctrl: true, shift: true, key: "j" },
    { ctrl: true, key: "s" },
    { ctrl: true, key: "h" },
    { ctrl: true, key: "a" },
    { ctrl: true, key: "p" },
  ];

  if (forbiddenKeys.some(k => 
      event.ctrlKey === k.ctrl && 
      event.shiftKey === (k.shift || false) &&
      event.key.toLowerCase() === k.key
  )) {
    event.preventDefault();
    alert("You are really talented!");
  }
});
