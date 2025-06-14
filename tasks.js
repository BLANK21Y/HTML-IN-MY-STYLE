class HTMLLearningPlatform {
    constructor() {
        // Task definitions with validation patterns
        this.tasks = {
            // Beginner Tasks
            'beginner-1': {
                title: 'Basic HTML Structure',
                instructions: 'Create an h1 tag with any heading text and a p tag with any paragraph text.',
                expectedPattern: /<h1[^>]*>.*?<\/h1>.*?<p[^>]*>.*?<\/p>/s,
                level: 'beginner'
            },
            'beginner-2': {
                title: 'HTML Headings',
                instructions: 'Create three different heading levels: h1, h2, and h3 with any text content.',
                expectedPattern: /<h1[^>]*>.*?<\/h1>.*?<h2[^>]*>.*?<\/h2>.*?<h3[^>]*>.*?<\/h3>/s,
                level: 'beginner'
            },
            'beginner-3': {
                title: 'Text Formatting',
                instructions: 'Create a paragraph with bold text using <strong>, italic text using <em>, and underlined text using <u>.',
                expectedPattern: /<p[^>]*>.*?<strong[^>]*>.*?<\/strong>.*?<em[^>]*>.*?<\/em>.*?<u[^>]*>.*?<\/u>.*?<\/p>/s,
                level: 'beginner'
            },
            'beginner-4': {
                title: 'HTML Lists',
                instructions: 'Create an unordered list (ul) with 3 list items (li) and an ordered list (ol) with 3 list items.',
                expectedPattern: /<ul[^>]*>.*?<li[^>]*>.*?<\/li>.*?<li[^>]*>.*?<\/li>.*?<li[^>]*>.*?<\/li>.*?<\/ul>.*?<ol[^>]*>.*?<li[^>]*>.*?<\/li>.*?<li[^>]*>.*?<\/li>.*?<li[^>]*>.*?<\/li>.*?<\/ol>/s,
                level: 'beginner'
            },
            'beginner-5': {
                title: 'HTML Links',
                instructions: 'Create an anchor tag (a) with href attribute linking to "https://www.example.com" and any link text.',
                expectedPattern: /<a[^>]*href\s*=\s*["']https:\/\/www\.example\.com["'][^>]*>.*?<\/a>/s,
                level: 'beginner'
            },
            'beginner-6': {
                title: 'HTML Images',
                instructions: 'Create an img tag with src="image.jpg" and alt="Sample Image".',
                expectedPattern: /<img[^>]*src\s*=\s*["']image\.jpg["'][^>]*alt\s*=\s*["']Sample Image["'][^>]*>/s,
                level: 'beginner'
            },
            'beginner-7': {
                title: 'HTML Line Breaks',
                instructions: 'Create a paragraph with text, add a line break using <br> tag, and add a horizontal rule using <hr> tag.',
                expectedPattern: /<p[^>]*>.*?<br[^>]*\/?>.*?<\/p>.*?<hr[^>]*\/?>/s,
                level: 'beginner'
            },
            'beginner-8': {
                title: 'HTML Comments',
                instructions: 'Add an HTML comment with the text "This is a comment" and create a heading below it.',
                expectedPattern: /<!--\s*This is a comment\s*-->.*?<h[1-6][^>]*>.*?<\/h[1-6]>/s,
                level: 'beginner'
            },
            'beginner-9': {
                title: 'HTML Attributes',
                instructions: 'Create a div with id="main" and class="container", and a paragraph with class="text".',
                expectedPattern: /<div[^>]*id\s*=\s*["']main["'][^>]*class\s*=\s*["']container["'][^>]*>.*?<\/div>.*?<p[^>]*class\s*=\s*["']text["'][^>]*>.*?<\/p>/s,
                level: 'beginner'
            },
            'beginner-10': {
                title: 'HTML Div Elements',
                instructions: 'Create a div element containing a heading and a paragraph inside it.',
                expectedPattern: /<div[^>]*>.*?<h[1-6][^>]*>.*?<\/h[1-6]>.*?<p[^>]*>.*?<\/p>.*?<\/div>/s,
                level: 'beginner'
            },

            // Intermediate Tasks
            'intermediate-1': {
                title: 'HTML Forms',
                instructions: 'Create a form with an input field (type="text"), an input field (type="email"), and a submit button.',
                expectedPattern: /<form[^>]*>.*?<input[^>]*type\s*=\s*["']text["'][^>]*>.*?<input[^>]*type\s*=\s*["']email["'][^>]*>.*?<input[^>]*type\s*=\s*["']submit["'][^>]*>.*?<\/form>/s,
                level: 'intermediate'
            },
            'intermediate-2': {
                title: 'HTML Tables',
                instructions: 'Create a table with thead, tbody, and at least 2 rows with 3 columns each.',
                expectedPattern: /<table[^>]*>.*?<thead[^>]*>.*?<tr[^>]*>.*?<th[^>]*>.*?<\/th>.*?<th[^>]*>.*?<\/th>.*?<th[^>]*>.*?<\/th>.*?<\/tr>.*?<\/thead>.*?<tbody[^>]*>.*?<tr[^>]*>.*?<td[^>]*>.*?<\/td>.*?<td[^>]*>.*?<\/td>.*?<td[^>]*>.*?<\/td>.*?<\/tr>.*?<tr[^>]*>.*?<td[^>]*>.*?<\/td>.*?<td[^>]*>.*?<\/td>.*?<td[^>]*>.*?<\/td>.*?<\/tr>.*?<\/tbody>.*?<\/table>/s,
                level: 'intermediate'
            },
            'intermediate-3': {
                title: 'Form Validation',
                instructions: 'Create a form with a required text input, an email input with required attribute, and a submit button.',
                expectedPattern: /<form[^>]*>.*?<input[^>]*type\s*=\s*["']text["'][^>]*required[^>]*>.*?<input[^>]*type\s*=\s*["']email["'][^>]*required[^>]*>.*?<input[^>]*type\s*=\s*["']submit["'][^>]*>.*?<\/form>/s,
                level: 'intermediate'
            },
            'intermediate-4': {
                title: 'HTML Multimedia',
                instructions: 'Create an audio element with controls and a video element with controls.',
                expectedPattern: /<audio[^>]*controls[^>]*>.*?<\/audio>.*?<video[^>]*controls[^>]*>.*?<\/video>/s,
                level: 'intermediate'
            },
            'intermediate-5': {
                title: 'HTML Iframe',
                instructions: 'Create an iframe element with src="https://www.example.com" and set width and height attributes.',
                expectedPattern: /<iframe[^>]*src\s*=\s*["']https:\/\/www\.example\.com["'][^>]*width\s*=\s*["'][^"']*["'][^>]*height\s*=\s*["'][^"']*["'][^>]*>.*?<\/iframe>/s,
                level: 'intermediate'
            },
            'intermediate-6': {
                title: 'HTML Meta Tags',
                instructions: 'Create meta tags for charset="UTF-8", viewport, and description in the head section.',
                expectedPattern: /<head[^>]*>.*?<meta[^>]*charset\s*=\s*["']UTF-8["'][^>]*>.*?<meta[^>]*name\s*=\s*["']viewport["'][^>]*>.*?<meta[^>]*name\s*=\s*["']description["'][^>]*>.*?<\/head>/s,
                level: 'intermediate'
            },
            'intermediate-7': {
                title: 'HTML Canvas',
                instructions: 'Create a canvas element with id="myCanvas", width="400", and height="300".',
                expectedPattern: /<canvas[^>]*id\s*=\s*["']myCanvas["'][^>]*width\s*=\s*["']400["'][^>]*height\s*=\s*["']300["'][^>]*>.*?<\/canvas>/s,
                level: 'intermediate'
            },
            'intermediate-8': {
                title: 'HTML Progress Bar',
                instructions: 'Create a progress element with value="50" and max="100", and a meter element with value="0.8".',
                expectedPattern: /<progress[^>]*value\s*=\s*["']50["'][^>]*max\s*=\s*["']100["'][^>]*>.*?<\/progress>.*?<meter[^>]*value\s*=\s*["']0\.8["'][^>]*>.*?<\/meter>/s,
                level: 'intermediate'
            },
            'intermediate-9': {
                title: 'HTML Details/Summary',
                instructions: 'Create a details element with a summary element inside, and some content that can be toggled.',
                expectedPattern: /<details[^>]*>.*?<summary[^>]*>.*?<\/summary>.*?<\/details>/s,
                level: 'intermediate'
            },
            'intermediate-10': {
                title: 'HTML Datalist',
                instructions: 'Create an input with list attribute and a datalist with id matching the list value, containing at least 3 options.',
                expectedPattern: /<input[^>]*list\s*=\s*["']([^"']+)["'][^>]*>.*?<datalist[^>]*id\s*=\s*["']\1["'][^>]*>.*?<option[^>]*>.*?<option[^>]*>.*?<option[^>]*>.*?<\/datalist>/s,
                level: 'intermediate'
            },

            // Advanced Tasks
            'advanced-1': {
                title: 'Semantic HTML',
                instructions: 'Create a semantic webpage structure with header, nav, main, section, and footer elements.',
                expectedPattern: /<header[^>]*>.*?<\/header>.*?<nav[^>]*>.*?<\/nav>.*?<main[^>]*>.*?<\/main>.*?<section[^>]*>.*?<\/section>.*?<footer[^>]*>.*?<\/footer>/s,
                level: 'advanced'
            },
            'advanced-2': {
                title: 'HTML Accessibility',
                instructions: 'Create a form with proper labels, an image with alt text, and a button with aria-label attribute.',
                expectedPattern: /<form[^>]*>.*?<label[^>]*for\s*=\s*["']([^"']+)["'][^>]*>.*?<\/label>.*?<input[^>]*id\s*=\s*["']\1["'][^>]*>.*?<\/form>.*?<img[^>]*alt\s*=\s*["'][^"']*["'][^>]*>.*?<button[^>]*aria-label\s*=\s*["'][^"']*["'][^>]*>.*?<\/button>/s,
                level: 'advanced'
            },
            'advanced-3': {
                title: 'HTML Microdata',
                instructions: 'Create a div with itemscope and itemtype attributes, and include at least two elements with itemprop attributes.',
                expectedPattern: /<div[^>]*itemscope[^>]*itemtype\s*=\s*["'][^"']*["'][^>]*>.*?<[^>]*itemprop\s*=\s*["'][^"']*["'][^>]*>.*?<[^>]*itemprop\s*=\s*["'][^"']*["'][^>]*>.*?<\/div>/s,
                level: 'advanced'
            },
            'advanced-4': {
                title: 'HTML Web Components',
                instructions: 'Create a template element with id="myTemplate" containing some HTML content.',
                expectedPattern: /<template[^>]*id\s*=\s*["']myTemplate["'][^>]*>.*?<\/template>/s,
                level: 'advanced'
            },
            'advanced-5': {
                title: 'HTML5 Storage',
                instructions: 'Create a script tag that uses localStorage.setItem() to store data.',
                expectedPattern: /<script[^>]*>.*?localStorage\.setItem\s*\(.*?\).*?<\/script>/s,
                level: 'advanced'
            },
            'advanced-6': {
                title: 'HTML Geolocation',
                instructions: 'Create a script tag that uses navigator.geolocation.getCurrentPosition() method.',
                expectedPattern: /<script[^>]*>.*?navigator\.geolocation\.getCurrentPosition\s*\(.*?\).*?<\/script>/s,
                level: 'advanced'
            },
            'advanced-7': {
                title: 'HTML Drag and Drop',
                instructions: 'Create two div elements, one with draggable="true" and another with ondrop and ondragover attributes.',
                expectedPattern: /<div[^>]*draggable\s*=\s*["']true["'][^>]*>.*?<\/div>.*?<div[^>]*ondrop\s*=\s*["'][^"']*["'][^>]*ondragover\s*=\s*["'][^"']*["'][^>]*>.*?<\/div>/s,
                level: 'advanced'
            },
            'advanced-8': {
                title: 'HTML Web Workers',
                instructions: 'Create a script tag that creates a new Worker with new Worker() constructor.',
                expectedPattern: /<script[^>]*>.*?new\s+Worker\s*\(.*?\).*?<\/script>/s,
                level: 'advanced'
            },
            'advanced-9': {
                title: 'HTML Service Workers',
                instructions: 'Create a script tag that registers a service worker using navigator.serviceWorker.register().',
                expectedPattern: /<script[^>]*>.*?navigator\.serviceWorker\.register\s*\(.*?\).*?<\/script>/s,
                level: 'advanced'
            },
            'advanced-10': {
                title: 'HTML Performance Optimization',
                instructions: 'Create a link tag with rel="preload", an img tag with loading="lazy", and a script tag with defer attribute.',
                expectedPattern: /<link[^>]*rel\s*=\s*["']preload["'][^>]*>.*?<img[^>]*loading\s*=\s*["']lazy["'][^>]*>.*?<script[^>]*defer[^>]*>.*?<\/script>/s,
                level: 'advanced'
            }
        };
        
        // Initialize completed tasks set and current task
        this.completedTasks = new Set();
        this.currentTask = null;
        
        // Initialize the platform
        this.init();
    }
    
    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupPlatform();
            });
        } else {
            this.setupPlatform();
        }
    }
    
    setupPlatform() {
        console.log('Setting up HTML Learning Platform...');
        this.setupEventListeners();
        this.loadProgress();
        this.updateProgress();
        this.setupTheme();
        console.log('Platform setup complete');
    }
    
    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', this.toggleTheme.bind(this));
            console.log('Theme toggle listener added');
        }
        
        // Start task buttons - Use event delegation for better reliability
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('start-task-btn')) {
                const taskId = e.target.getAttribute('data-task');
                console.log('Start task button clicked:', taskId);
                if (taskId) {
                    this.startTask(taskId);
                } else {
                    console.error('No task ID found on button');
                }
            }
        });
        
        // Editor controls
        const backBtn = document.getElementById('backToTasks');
        const runBtn = document.getElementById('runCode');
        const validateBtn = document.getElementById('validateCode');
        const generateBtn = document.getElementById('generateCertificate');
        
        if (backBtn) {
            backBtn.addEventListener('click', this.backToTasks.bind(this));
            console.log('Back button listener added');
        }
        if (runBtn) {
            runBtn.addEventListener('click', this.runCode.bind(this));
            console.log('Run button listener added');
        }
        if (validateBtn) {
            validateBtn.addEventListener('click', this.validateCode.bind(this));
            console.log('Validate button listener added');
        }
        if (generateBtn) {
            generateBtn.addEventListener('click', this.generateCertificate.bind(this));
            console.log('Generate certificate button listener added');
        }
        
        // Auto-run code when typing (with debounce)
        const codeEditor = document.getElementById('codeEditor');
        if (codeEditor) {
            let timeout;
            codeEditor.addEventListener('input', () => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    this.runCode();
                }, 1000);
            });
            console.log('Code editor listener added');
        }
        
        console.log('All event listeners set up');
    }
    
    setupTheme() {
        // Load saved theme
        const savedTheme = localStorage.getItem('htmlLearningTheme');
        if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.textContent = '☀️';
            }
        }
    }
    
    toggleTheme() {
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');
        
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            if (themeToggle) themeToggle.textContent = '🌙';
            localStorage.setItem('htmlLearningTheme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            if (themeToggle) themeToggle.textContent = '☀️';
            localStorage.setItem('htmlLearningTheme', 'dark');
        }
    }
    
    startTask(taskId) {
        console.log('Starting task:', taskId);
        this.currentTask = taskId;
        const task = this.tasks[taskId];
        
        if (!task) {
            console.error('Task not found:', taskId);
            alert('Task not found: ' + taskId);
            return;
        }
        
        console.log('Task found:', task);
        
        // Update task editor content
        const titleElement = document.getElementById('currentTaskTitle');
        const instructionsElement = document.getElementById('taskInstructions');
        const codeEditor = document.getElementById('codeEditor');
        const previewFrame = document.getElementById('previewFrame');
        const validationResult = document.getElementById('validationResult');
        
        if (titleElement) {
            titleElement.textContent = task.title;
            console.log('Title updated');
        }
        if (instructionsElement) {
            instructionsElement.textContent = task.instructions;
            console.log('Instructions updated');
        }
        if (codeEditor) {
            codeEditor.value = '';
            console.log('Code editor cleared');
        }
        if (previewFrame) {
            previewFrame.src = 'about:blank';
            console.log('Preview frame cleared');
        }
        if (validationResult) {
            validationResult.classList.add('hidden');
            console.log('Validation result hidden');
        }
        
        // Show task editor and hide main platform
        this.showTaskEditor();
        
        // Focus on code editor
        if (codeEditor) {
            setTimeout(() => {
                codeEditor.focus();
                console.log('Code editor focused');
            }, 100);
        }
    }
    
    showTaskEditor() {
        console.log('Showing task editor...');
        const mainPlatform = document.getElementById('mainPlatform');
        const taskEditor = document.getElementById('taskEditor');
        
        if (mainPlatform) {
            mainPlatform.classList.add('hidden');
            console.log('Main platform hidden');
        } else {
            console.error('Main platform element not found');
        }
        
        if (taskEditor) {
            taskEditor.classList.remove('hidden');
            console.log('Task editor shown');
        } else {
            console.error('Task editor element not found');
        }
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    backToTasks() {
        console.log('Going back to tasks...');
        const taskEditor = document.getElementById('taskEditor');
        const mainPlatform = document.getElementById('mainPlatform');
        
        if (taskEditor) {
            taskEditor.classList.add('hidden');
            console.log('Task editor hidden');
        }
        if (mainPlatform) {
            mainPlatform.classList.remove('hidden');
            console.log('Main platform shown');
        }
        
        // Restore body scroll
        document.body.style.overflow = 'auto';
        
        this.currentTask = null;
    }
    
    runCode() {
        const codeEditor = document.getElementById('codeEditor');
        const previewFrame = document.getElementById('previewFrame');
        
        if (!codeEditor || !previewFrame) {
            console.error('Code editor or preview frame not found');
            return;
        }
        
        const code = codeEditor.value;
        
        // Create a complete HTML document for preview
        const fullHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Preview</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        padding: 20px; 
                        line-height: 1.6;
                        color: #333;
                    }
                    h1, h2, h3, h4, h5, h6 {
                        color: #e34c26;
                        margin-bottom: 10px;
                    }
                    form {
                        background: #f8f9fa;
                        padding: 20px;
                        border-radius: 8px;
                        border: 1px solid #dee2e6;
                    }
                    input, select, textarea {
                        margin: 5px 0;
                        padding: 8px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        font-size: 14px;
                    }
                    input[type="submit"] {
                        background: #e34c26;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        cursor: pointer;
                        border-radius: 4px;
                    }
                    input[type="submit"]:hover {
                        background: #c63d1f;
                    }
                    header, nav, main, section, footer {
                        margin: 10px 0;
                        padding: 15px;
                        border: 2px dashed #e34c26;
                        border-radius: 4px;
                    }
                    header { background: #fff5f5; }
                    nav { background: #f0f8ff; }
                    main { background: #f5fff5; }
                    section { background: #fffaf0; }
                    footer { background: #f8f8ff; }
                    table { border-collapse: collapse; width: 100%; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                ${code}
            </body>
            </html>
        `;
        
        // Create blob and set as iframe source
        const blob = new Blob([fullHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        previewFrame.src = url;
        
        // Clean up the blob URL after loading
        previewFrame.onload = () => {
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        };
    }
    
    validateCode() {
        if (!this.currentTask) {
            console.error('No current task to validate');
            return;
        }
        
        const codeEditor = document.getElementById('codeEditor');
        const resultDiv = document.getElementById('validationResult');
        
        if (!codeEditor || !resultDiv) return;
        
        const code = codeEditor.value.trim();
        const task = this.tasks[this.currentTask];
        
        if (!code) {
            this.showValidationResult(false, 'Please write some code first!');
            return;
        }
        
        // Normalize the code for validation
        const normalizedCode = code.replace(/\s+/g, ' ').toLowerCase();
        
        // Test against the expected pattern
        if (task.expectedPattern.test(normalizedCode)) {
            // Task completed successfully
            this.completeTask(this.currentTask);
            this.showValidationResult(true, '✅ Excellent! Task completed successfully!');
            
            // Auto-return to main platform after 3 seconds
            setTimeout(() => {
                this.backToTasks();
            }, 3000);
            
        } else {
            this.showValidationResult(false, '❌ Not quite right. Please check the instructions and try again.');
            this.provideHint(this.currentTask);
        }
    }
    
    completeTask(taskId) {
        this.completedTasks.add(taskId);
        this.saveProgress();
        this.updateTaskStatus(taskId, true);
        this.updateProgress();
        
        // Add celebration effect
        this.celebrateCompletion();
    }
    
    celebrateCompletion() {
        // Create celebration particles
        const colors = ['#e34c26', '#f16529', '#28a745', '#ffc107'];
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createParticle(colors[Math.floor(Math.random() * colors.length)]);
            }, i * 100);
        }
    }
    
    createParticle(color) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            top: 50%;
            left: 50%;
            animation: particle 2s ease-out forwards;
        `;
        
        // Add particle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particle {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                100% {
                    transform: translate(${(Math.random() - 0.5) * 400}px, ${(Math.random() - 0.5) * 400}px) scale(1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
            style.remove();
        }, 2000);
    }
    
    provideHint(taskId) {
        const hints = {
            'beginner-1': 'Hint: Make sure you have both <h1> and <p> tags with some content inside them.',
            'beginner-2': 'Hint: You need three different heading levels: <h1>, <h2>, and <h3>.',
            'beginner-3': 'Hint: Use <strong> for bold, <em> for italic, and <u> for underline inside a <p> tag.',
            'beginner-4': 'Hint: Create both <ul> and <ol> lists, each with 3 <li> items.',
            'beginner-5': 'Hint: Use <a href="https://www.example.com">Link Text</a>.',
            'beginner-6': 'Hint: Use <img src="image.jpg" alt="Sample Image">.',
            'beginner-7': 'Hint: Use <br> for line break and <hr> for horizontal rule.',
            'beginner-8': 'Hint: Use <!-- This is a comment --> followed by any heading.',
            'beginner-9': 'Hint: Use <div id="main" class="container"> and <p class="text">.',
            'beginner-10': 'Hint: Put a heading and paragraph inside a <div> element.',
            'intermediate-1': 'Hint: Your form should contain <input type="text">, <input type="email">, and <input type="submit"> elements.',
            'intermediate-2': 'Hint: Use <table>, <thead>, <tbody>, <tr>, <th>, and <td> elements.',
            'intermediate-3': 'Hint: Add required attribute to both text and email inputs.',
            'intermediate-4': 'Hint: Use <audio controls> and <video controls> elements.',
            'intermediate-5': 'Hint: Use <iframe src="https://www.example.com" width="400" height="300">.',
            'intermediate-6': 'Hint: Include <meta charset="UTF-8">, viewport meta, and description meta in <head>.',
            'intermediate-7': 'Hint: Use <canvas id="myCanvas" width="400" height="300">.',
            'intermediate-8': 'Hint: Use <progress value="50" max="100"> and <meter value="0.8">.',
            'intermediate-9': 'Hint: Use <details><summary>Title</summary>Content</details>.',
            'intermediate-10': 'Hint: Use <input list="options"> and <datalist id="options"> with <option> elements.',
            'advanced-1': 'Hint: Include all five semantic elements: <header>, <nav>, <main>, <section>, and <footer>.',
            'advanced-2': 'Hint: Use proper <label for="id"> with matching <input id="id">, <img alt="text">, and <button aria-label="text">.',
            'advanced-3': 'Hint: Use <div itemscope itemtype="..."> with elements having itemprop attributes.',
            'advanced-4': 'Hint: Use <template id="myTemplate"> with content inside.',
            'advanced-5': 'Hint: Use <script>localStorage.setItem("key", "value");</script>.',
            'advanced-6': 'Hint: Use <script>navigator.geolocation.getCurrentPosition(function(){});</script>.',
            'advanced-7': 'Hint: One div with draggable="true", another with ondrop and ondragover attributes.',
            'advanced-8': 'Hint: Use <script>var worker = new Worker("worker.js");</script>.',
            'advanced-9': 'Hint: Use <script>navigator.serviceWorker.register("sw.js");</script>.',
            'advanced-10': 'Hint: Use <link rel="preload">, <img loading="lazy">, and <script defer>.'
        };
        
        const hint = hints[taskId];
        if (hint) {
            setTimeout(() => {
                const resultDiv = document.getElementById('validationResult');
                if (resultDiv && !resultDiv.classList.contains('hidden')) {
                    resultDiv.innerHTML += `<br><br><small><strong>${hint}</strong></small>`;
                }
            }, 2000);
        }
    }
    
    showValidationResult(success, message) {
        const resultDiv = document.getElementById('validationResult');
        if (!resultDiv) return;
        
        resultDiv.className = `validation-result ${success ? 'success' : 'error'}`;
        resultDiv.textContent = message;
        resultDiv.classList.remove('hidden');
        
        // Auto-hide error messages after 5 seconds
        if (!success) {
            setTimeout(() => {
                resultDiv.classList.add('hidden');
            }, 5000);
        }
    }
    
    updateTaskStatus(taskId, completed) {
        const statusDiv = document.getElementById(`${taskId}-status`);
        const startBtn = document.querySelector(`[data-task="${taskId}"]`);
        
        if (completed && statusDiv) {
            statusDiv.className = 'task-status completed';
            statusDiv.textContent = '✅ Completed';
        }
        
        if (completed && startBtn) {
            startBtn.textContent = '✅ Completed';
            startBtn.disabled = true;
        }
    }
    
    updateProgress() {
        const totalTasks = Object.keys(this.tasks).length;
        const completedCount = this.completedTasks.size;
        
        // Update overall progress
        const overallProgress = (completedCount / totalTasks) * 100;
        const overallFill = document.getElementById('overallProgressFill');
        const overallText = document.getElementById('overallProgressText');
        
        if (overallFill) overallFill.style.width = `${overallProgress}%`;
        if (overallText) overallText.textContent = `${completedCount}/${totalTasks} Tasks Completed`;
        
        // Update section progress
        const levels = ['beginner', 'intermediate', 'advanced'];
        levels.forEach(level => {
            const levelTasks = Object.keys(this.tasks).filter(taskId => this.tasks[taskId].level === level);
            const levelCompleted = levelTasks.filter(taskId => this.completedTasks.has(taskId)).length;
            const levelProgress = levelTasks.length > 0 ? (levelCompleted / levelTasks.length) * 100 : 0;
            
            const progressFill = document.getElementById(`${level}Progress`);
            const progressText = document.getElementById(`${level}ProgressText`);
            
            if (progressFill) progressFill.style.width = `${levelProgress}%`;
            if (progressText) progressText.textContent = `${levelCompleted}/${levelTasks.length} Tasks`;
        });
        
        // Update certificate status
        this.updateCertificateStatus(completedCount, totalTasks);
    }
    
    updateCertificateStatus(completed, total) {
        const tracker = document.getElementById('certificateTracker');
        const generator = document.getElementById('certificateGenerator');
        
        if (!tracker) return;
        
        if (completed === total) {
            // All tasks completed - unlock certificate
            tracker.classList.remove('locked');
            tracker.classList.add('unlocked');
            tracker.innerHTML = `
                <h3>🎉 Certificate Unlocked!</h3>
                <p>Congratulations! You've completed all tasks!</p>
                <div class="completion-status">${completed}/${total} Tasks Completed</div>
            `;
            
            if (generator) {
                generator.classList.remove('hidden');
            }
            
            // Trigger celebration
            this.celebrateCompletion();
            
        } else {
            // Update progress
            const statusElement = tracker.querySelector('.completion-status');
            if (statusElement) {
                statusElement.textContent = `${completed}/${total} Tasks Completed`;
            }
        }
    }
    
    generateCertificate() {
        const nameInput = document.getElementById('certificateName');
        const formatSelect = document.getElementById('downloadFormat');
        
        if (!nameInput || !formatSelect) return;
        
        const name = nameInput.value.trim() || 'John Doe';
        const format = formatSelect.value;
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Load the original certificate template and overlay text
        this.loadCertificateTemplate(name, currentDate, format);
    }
    
    loadCertificateTemplate(name, date, format) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
            // Create canvas with the same dimensions as the template
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.width = img.width;
            canvas.height = img.height;
            
            // Draw the original template
            ctx.drawImage(img, 0, 0);
            
            // Overlay the user's name and current date
            this.overlayTextOnCertificate(ctx, name, date, canvas.width, canvas.height);
            
            // Download the certificate
            this.downloadCertificate(canvas, format, name);
        };
        
        img.onerror = () => {
            console.error('Failed to load certificate template');
            alert('Could not load certificate template. Please ensure the image file exists at 4.png');
        };
        
        // Load the original 4.png template
        img.src = '4.png';
    }
    
    overlayTextOnCertificate(ctx, name, date, canvasWidth, canvasHeight) {
        // Set text properties
        ctx.textAlign = 'center';
        ctx.fillStyle = '#000000';
        
        // Name position (where "RAMA KRISHNA" appears in the template)
        const nameX = canvasWidth / 2;
        const nameY = canvasHeight * 0.485;
        
        // Date position - moved slightly higher from bottom center
        const dateX = canvasWidth / 2; // Centered horizontally
        const dateY = canvasHeight * 0.88; // Moved up from 0.92 to 0.88
        
        // Draw name
        ctx.font = `bold ${Math.floor(canvasWidth * 0.045)}px Arial`;
        ctx.fillText(name.toUpperCase(), nameX, nameY);
        
        // Draw date in center position, slightly higher
        ctx.font = `${Math.floor(canvasWidth * 0.022)}px Arial`; // Slightly larger font for better visibility
        ctx.fillStyle = '#333333'; // Slightly darker for better contrast
        ctx.fillText(date, dateX, dateY);
    }
    
    downloadCertificate(canvas, format, name) {
        const fileName = `${name.replace(/\s+/g, '_')}_HTML_Certificate`;
        
        try {
            if (format === 'pdf') {
                // For PDF, we'll download as PNG with a note
                const imgData = canvas.toDataURL('image/png', 1.0);
                this.triggerDownload(imgData, `${fileName}.png`);
                
                // Show info about PDF
                setTimeout(() => {
                    alert('Certificate downloaded as PNG. For PDF conversion, you can use online tools or print to PDF.');
                }, 500);
                
            } else {
                const mimeType = format === 'jpg' || format === 'jpeg' ? 'image/jpeg' : 'image/png';
                const quality = format === 'jpg' || format === 'jpeg' ? 0.95 : 1.0;
                const imgData = canvas.toDataURL(mimeType, quality);
                
                this.triggerDownload(imgData, `${fileName}.${format}`);
            }
            
            // Show success message
            this.showCertificateSuccess(name);
            
        } catch (error) {
            console.error('Error generating certificate:', error);
            alert('Error generating certificate. Please try again.');
        }
    }
    
    triggerDownload(dataUrl, filename) {
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    showCertificateSuccess(name) {
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #28a745;
            color: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            z-index: 10001;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            animation: successPop 0.5s ease;
        `;
        
        successMessage.innerHTML = `
            <h3 style="margin: 0 0 15px 0; font-size: 1.5rem;">🎉 Certificate Generated!</h3>
            <p style="margin: 0; font-size: 1.1rem;">Congratulations ${name}!<br>Your certificate has been downloaded.</p>
        `;
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes successPop {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(successMessage);
        
        // Remove after 3 seconds
        setTimeout(() => {
            successMessage.remove();
            style.remove();
        }, 3000);
    }
    
    saveProgress() {
        try {
            localStorage.setItem('htmlLearningProgress', JSON.stringify([...this.completedTasks]));
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    }
    
    loadProgress() {
        try {
            const saved = localStorage.getItem('htmlLearningProgress');
            if (saved) {
                const completedArray = JSON.parse(saved);
                this.completedTasks = new Set(completedArray);
                
                // Update UI for completed tasks
                this.completedTasks.forEach(taskId => {
                    this.updateTaskStatus(taskId, true);
                });
            }
        } catch (error) {
            console.error('Error loading progress:', error);
            this.completedTasks = new Set();
        }
    }
}

// Initialize the platform when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.htmlLearningPlatform = new HTMLLearningPlatform();
        console.log('HTML Learning Platform initialized successfully');
    } catch (error) {
        console.error('Error initializing HTML Learning Platform:', error);
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Page became visible, refresh progress
        const platform = window.htmlLearningPlatform;
        if (platform) {
            platform.updateProgress();
        }
    }
});

// Export for debugging
if (typeof window !== 'undefined') {
    window.HTMLLearningPlatform = HTMLLearningPlatform;
}
