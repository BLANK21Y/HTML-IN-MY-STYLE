// Task definitions with 10 tasks each
const tasks = {
    beginner: [
        {
            title: "Basic HTML Structure",
            instructions: "Create a basic HTML document with DOCTYPE, html, head, and body tags.",
            expectedAnswer: "<!DOCTYPE html>.*<html>.*<head>.*</head>.*<body>.*</body>.*</html>",
            hint: "Use <!DOCTYPE html>, <html>, <head>, and <body> tags"
        },
        {
            title: "Headings and Paragraphs",
            instructions: "Create an h1 heading and a paragraph with any content.",
            expectedAnswer: "<h1>.*</h1>.*<p>.*</p>",
            hint: "Use <h1> for heading and <p> for paragraph"
        },
        {
            title: "Text Formatting",
            instructions: "Create text with bold, italic, and underline formatting.",
            expectedAnswer: "<b>.*</b>.*<i>.*</i>.*<u>.*</u>",
            hint: "Use <b>, <i>, and <u> tags for formatting"
        },
        {
            title: "Lists",
            instructions: "Create an unordered list with 3 items and an ordered list with 3 items.",
            expectedAnswer: "<ul>.*<li>.*</li>.*<li>.*</li>.*<li>.*</li>.*</ul>.*<ol>.*<li>.*</li>.*<li>.*</li>.*<li>.*</li>.*</ol>",
            hint: "Use <ul> for unordered list and <ol> for ordered list with <li> items"
        },
        {
            title: "Links",
            instructions: "Create a link to an external website and an internal anchor link.",
            expectedAnswer: "<a href=.*>.*</a>.*<a href=[\"']#.*[\"']>.*</a>",
            hint: "Use <a href='url'> for external links and <a href='#anchor'> for internal links"
        },
        {
            title: "Images",
            instructions: "Add an image with src, alt, and title attributes.",
            expectedAnswer: "<img.*src=.*alt=.*title=.*>",
            hint: "Use <img src='path' alt='description' title='tooltip'>"
        },
        {
            title: "Line Breaks and Horizontal Rules",
            instructions: "Use a line break tag and a horizontal rule tag.",
            expectedAnswer: "<br>.*<hr>",
            hint: "Use <br> for line breaks and <hr> for horizontal rules"
        },
        {
            title: "Comments",
            instructions: "Add an HTML comment in your code.",
            expectedAnswer: "<!--.*-->",
            hint: "Use <!-- comment text --> for HTML comments"
        },
        {
            title: "Div and Span Elements",
            instructions: "Create a div element containing a span element with text.",
            expectedAnswer: "<div>.*<span>.*</span>.*</div>",
            hint: "Use <div> for block-level grouping and <span> for inline grouping"
        },
        {
            title: "Blockquotes and Citations",
            instructions: "Create a blockquote element with cite attribute and a cite element for citation.",
            expectedAnswer: "<blockquote.*cite=.*>.*</blockquote>.*<cite>.*</cite>",
            hint: "Use <blockquote cite='source'> and <cite> elements"
        }
    ],
    intermediate: [
        {
            title: "Basic Forms",
            instructions: "Create a form with text input, email input, and submit button.",
            expectedAnswer: "<form>.*<input.*type=[\"']text[\"'].*>.*<input.*type=[\"']email[\"'].*>.*<input.*type=[\"']submit[\"'].*>.*</form>",
            hint: "Use <form>, <input type='text'>, <input type='email'>, and <input type='submit'>"
        },
        {
            title: "Advanced Form Elements",
            instructions: "Create a form with textarea, select dropdown, radio button, and checkbox.",
            expectedAnswer: "<form>.*<textarea.*</textarea>.*<select.*<option.*</option>.*</select>.*<input.*type=[\"']radio[\"'].*>.*<input.*type=[\"']checkbox[\"'].*>.*</form>",
            hint: "Use <textarea>, <select> with <option>, radio buttons, and checkboxes"
        },
        {
            title: "Tables",
            instructions: "Create a table with thead, tbody, th, and td elements.",
            expectedAnswer: "<table>.*<thead>.*<th>.*</th>.*</thead>.*<tbody>.*<tr>.*<td>.*</td>.*</tr>.*</tbody>.*</table>",
            hint: "Use <table>, <thead>, <tbody>, <th> for headers, and <td> for data"
        },
        {
            title: "Audio and Video",
            instructions: "Add audio and video elements with controls attribute.",
            expectedAnswer: "<audio.*controls.*>.*</audio>.*<video.*controls.*>.*</video>",
            hint: "Use <audio controls> and <video controls> elements"
        },
        {
            title: "Iframes",
            instructions: "Embed content using an iframe element with src attribute.",
            expectedAnswer: "<iframe.*src=.*>.*</iframe>",
            hint: "Use <iframe src='url'></iframe> to embed external content"
        },
        {
            title: "Meta Tags",
            instructions: "Add meta tags for description, keywords, and viewport in the head section.",
            expectedAnswer: "<head>.*<meta.*name=[\"']description[\"'].*content=.*>.*<meta.*name=[\"']keywords[\"'].*content=.*>.*<meta.*name=[\"']viewport[\"'].*content=.*>.*</head>",
            hint: "Use <meta name='description'>, <meta name='keywords'>, and <meta name='viewport'>"
        },
        {
            title: "CSS Integration",
            instructions: "Link an external CSS file and add internal CSS styles.",
            expectedAnswer: "<head>.*<link.*rel=[\"']stylesheet[\"'].*href=.*>.*<style>.*</style>.*</head>",
            hint: "Use <link rel='stylesheet' href='style.css'> and <style> tags"
        },
        {
            title: "JavaScript Integration",
            instructions: "Include external JavaScript file and add inline script.",
            expectedAnswer: "<script.*src=.*></script>.*<script>.*</script>",
            hint: "Use <script src='script.js'></script> and <script> tags"
        },
        {
            title: "Form Validation",
            instructions: "Create a form with required attribute and pattern validation.",
            expectedAnswer: "<form>.*<input.*required.*>.*<input.*pattern=.*>.*</form>",
            hint: "Use required attribute and pattern attribute for validation"
        },
        {
            title: "Figure and Figcaption",
            instructions: "Create a figure element containing an image and figcaption.",
            expectedAnswer: "<figure>.*<img.*>.*<figcaption>.*</figcaption>.*</figure>",
            hint: "Use <figure> to wrap <img> and <figcaption> elements"
        }
    ],
    advanced: [
        {
            title: "Semantic HTML Structure",
            instructions: "Create a semantic structure with header, nav, main, section, and footer elements.",
            expectedAnswer: "<header>.*</header>.*<nav>.*</nav>.*<main>.*<section>.*</section>.*</main>.*<footer>.*</footer>",
            hint: "Use semantic elements: <header>, <nav>, <main>, <section>, <footer>"
        },
        {
            title: "Article and Aside Elements",
            instructions: "Create an article element containing aside element.",
            expectedAnswer: "<article>.*<aside>.*</aside>.*</article>",
            hint: "Use <article> for main content and <aside> for sidebar content"
        },
        {
            title: "Microdata and Schema",
            instructions: "Add microdata with itemscope, itemtype, and itemprop attributes.",
            expectedAnswer: ".*itemscope.*itemtype=.*itemprop=.*",
            hint: "Use itemscope, itemtype='http://schema.org/...', and itemprop attributes"
        },
        {
            title: "Custom Data Attributes",
            instructions: "Create elements with custom data-* attributes.",
            expectedAnswer: ".*data-.*=.*",
            hint: "Use data-* attributes like data-id, data-value, etc."
        },
        {
            title: "Canvas Element",
            instructions: "Create a canvas element with width and height attributes.",
            expectedAnswer: "<canvas.*width=.*height=.*>.*</canvas>",
            hint: "Use <canvas width='400' height='300'></canvas>"
        },
        {
            title: "SVG Integration",
            instructions: "Create an inline SVG with a circle element.",
            expectedAnswer: "<svg.*>.*<circle.*cx=.*cy=.*r=.*>.*</svg>",
            hint: "Use <svg> element with <circle cx='50' cy='50' r='40'>"
        },
        {
            title: "Web Components",
            instructions: "Create a custom element definition using is attribute.",
            expectedAnswer: ".*is=[\"'].*[\"'].*",
            hint: "Use is='custom-element' attribute to extend existing elements"
        },
        {
            title: "Progressive Web App Manifest",
            instructions: "Link a web app manifest file in the head section.",
            expectedAnswer: "<head>.*<link.*rel=[\"']manifest[\"'].*href=.*>.*</head>",
            hint: "Use <link rel='manifest' href='manifest.json'>"
        },
        {
            title: "Accessibility Features",
            instructions: "Add ARIA attributes including role, aria-label, and aria-describedby.",
            expectedAnswer: ".*role=.*aria-label=.*aria-describedby=.*",
            hint: "Use role='button', aria-label='description', aria-describedby='id'"
        },
        {
            title: "Details and Summary Elements",
            instructions: "Create a details element with summary and collapsible content.",
            expectedAnswer: "<details>.*<summary>.*</summary>.*</details>",
            hint: "Use <details> with <summary> for collapsible content sections"
        }
    ]
};

// Progress tracking
let progress = {
    beginner: 0,
    intermediate: 0,
    advanced: 0
};

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Progress management
function updateProgress() {
    const levels = ['beginner', 'intermediate', 'advanced'];
    let totalCompleted = 0;
    
    levels.forEach(level => {
        const progressBar = document.getElementById(`${level}Progress`);
        const progressText = progressBar.parentElement.nextElementSibling;
        const completed = progress[level];
        const total = tasks[level].length;
        
        progressBar.style.width = `${(completed / total) * 100}%`;
        progressBar.setAttribute('data-progress', (completed / total) * 100);
        progressText.textContent = `${completed}/${total} completed`;
        
        totalCompleted += completed;
    });
    
    // Update certificate status
    updateCertificateStatus(totalCompleted);
}

function updateCertificateStatus(completed) {
    const certificateStatus = document.getElementById('certificateStatus');
    const certificateGenerator = document.getElementById('certificateGenerator');
    
    if (completed === 30) {
        certificateStatus.innerHTML = '<div class="lock-icon">🏆</div><span>30/30 Tasks Completed - Certificate Available!</span>';
        certificateGenerator.style.display = 'block';
    } else {
        certificateStatus.innerHTML = `<div class="lock-icon">🔒</div><span>${completed}/30 Tasks Completed</span>`;
        certificateGenerator.style.display = 'none';
    }
}

// Task management
function startTask(level, taskIndex) {
    const task = tasks[level][taskIndex];
    const mainContent = document.getElementById('mainContent');
    const editorInterface = document.getElementById('editorInterface');
    const taskInstructions = document.getElementById('taskInstructions');
    const codeEditor = document.getElementById('codeEditor');
    const backToMain = document.getElementById('backToMain');
    const previewPanel = document.getElementById('previewPanel');
    
    console.log('Starting task:', level, taskIndex, task);
    
    // Show editor interface
    mainContent.style.display = 'none';
    editorInterface.style.display = 'block';
    backToMain.style.display = 'block';
    
    // Always show preview panel
    previewPanel.style.display = 'flex';
    
    // Set task instructions
    taskInstructions.innerHTML = `
        <h3>${task.title}</h3>
        <p><strong>Instructions:</strong> ${task.instructions}</p>
        <p><strong>Hint:</strong> ${task.hint}</p>
    `;
    
    // Clear editor
    codeEditor.value = '';
    
    // Store current task info
    window.currentTask = { level, taskIndex };
    
    // Update task status
    updateTaskStatus(level, taskIndex, 'in-progress');
    
    // Set up live preview - update preview as user types
    setupLivePreview();
}

function setupLivePreview() {
    const codeEditor = document.getElementById('codeEditor');
    
    // Remove existing event listeners
    codeEditor.removeEventListener('input', updatePreview);
    
    // Add new event listener
    codeEditor.addEventListener('input', updatePreview);
    
    // Initial preview update
    updatePreview();
}

function updatePreview() {
    const code = document.getElementById('codeEditor').value;
    const previewFrame = document.getElementById('previewFrame');
    
    // Create HTML document for preview
    const htmlDocument = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Live Preview</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    margin: 20px; 
                    background: white;
                    color: #333;
                }
                h1, h2, h3, h4, h5, h6 {
                    color: #e34c26;
                    margin-bottom: 10px;
                }
                p {
                    margin-bottom: 15px;
                    line-height: 1.6;
                }
                form {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 8px;
                    border: 1px solid #e2e8f0;
                }
                input, textarea, select {
                    display: block;
                    margin: 10px 0;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    width: 200px;
                }
                input[type="submit"], input[type="button"] {
                    background: #e34c26;
                    color: white;
                    cursor: pointer;
                    width: auto;
                    padding: 10px 20px;
                }
                input[type="radio"], input[type="checkbox"] {
                    width: auto;
                    display: inline-block;
                }
                table {
                    border-collapse: collapse;
                    width: 100%;
                    margin: 20px 0;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 12px;
                    text-align: left;
                }
                th {
                    background: #e34c26;
                    color: white;
                }
                header, nav, main, section, footer, article, aside {
                    margin: 10px 0;
                    padding: 15px;
                    border: 2px dashed #e34c26;
                    background: #fff5f5;
                }
                header { background: #fed7d7; }
                nav { background: #feebc8; }
                main { background: #f0fff4; }
                section { background: #e6fffa; }
                footer { background: #faf5ff; }
                article { background: #f7fafc; }
                aside { background: #edf2f7; }
                canvas {
                    border: 1px solid #ccc;
                    margin: 10px 0;
                }
                svg {
                    border: 1px solid #ccc;
                    margin: 10px 0;
                }
                blockquote {
                    background: #f9f9f9;
                    border-left: 4px solid #e34c26;
                    margin: 20px 0;
                    padding: 15px;
                    font-style: italic;
                }
                cite {
                    font-style: italic;
                    color: #666;
                }
                figure {
                    margin: 20px 0;
                    text-align: center;
                }
                figcaption {
                    font-style: italic;
                    color: #666;
                    margin-top: 10px;
                }
                details {
                    background: #f8f9fa;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    margin: 20px 0;
                    padding: 15px;
                }
                summary {
                    cursor: pointer;
                    font-weight: bold;
                    color: #e34c26;
                    margin-bottom: 10px;
                }
            </style>
        </head>
        <body>
            ${code || '<p style="color: #999; font-style: italic;">Start typing your HTML code to see the live preview...</p>'}
        </body>
        </html>
    `;
    
    // Update preview
    previewFrame.srcdoc = htmlDocument;
}

function updateTaskStatus(level, taskIndex, status) {
    const statusElement = document.getElementById(`${level}-${taskIndex}-status`);
    if (statusElement) {
        statusElement.textContent = status === 'completed' ? 'Completed' : 
                                   status === 'in-progress' ? 'In Progress' : 'Not Started';
        statusElement.className = `task-status ${status}`;
    }
}

function runCode() {
    // The preview is already live, but we can add a visual indication that code was run
    const runBtn = document.getElementById('runCode');
    const originalText = runBtn.textContent;
    
    runBtn.textContent = '✓ Running...';
    runBtn.style.background = '#38a169';
    
    setTimeout(() => {
        runBtn.textContent = originalText;
        runBtn.style.background = '';
    }, 1000);
    
    // Update preview (though it's already updating live)
    updatePreview();
}

function validateCode() {
    const code = document.getElementById('codeEditor').value.trim();
    const validationResult = document.getElementById('validationResult');
    const currentTask = window.currentTask;
    
    console.log('Validating code:', code, 'Current task:', currentTask);
    
    if (!currentTask) {
        console.log('No current task found');
        return;
    }
    
    const task = tasks[currentTask.level][currentTask.taskIndex];
    const expectedRegex = new RegExp(task.expectedAnswer, 'is');
    
    // Remove extra whitespace and normalize code for comparison
    const normalizedCode = code.replace(/\s+/g, ' ').trim();
    
    console.log('Expected regex:', task.expectedAnswer);
    console.log('Normalized code:', normalizedCode);
    console.log('Regex test result:', expectedRegex.test(normalizedCode));
    
    if (expectedRegex.test(normalizedCode)) {
        // Task completed successfully
        validationResult.innerHTML = '✅ Great job! Your code matches the requirements.';
        validationResult.className = 'validation-result success';
        validationResult.style.display = 'block';
        
        // Update progress
        progress[currentTask.level] = Math.max(progress[currentTask.level], currentTask.taskIndex + 1);
        updateTaskStatus(currentTask.level, currentTask.taskIndex, 'completed');
        updateProgress();
        
        // Save progress
        saveProgress();
        
        // Auto-hide validation result after 3 seconds
        setTimeout(() => {
            validationResult.style.display = 'none';
        }, 3000);
        
    } else {
        // Task not completed
        validationResult.innerHTML = '❌ Your code doesn\'t match the requirements. Please try again!';
        validationResult.className = 'validation-result error';
        validationResult.style.display = 'block';
        
        // Auto-hide validation result after 5 seconds
        setTimeout(() => {
            validationResult.style.display = 'none';
        }, 5000);
    }
}

function backToTasks() {
    const mainContent = document.getElementById('mainContent');
    const editorInterface = document.getElementById('editorInterface');
    const validationResult = document.getElementById('validationResult');
    const backToMain = document.getElementById('backToMain');
    const codeEditor = document.getElementById('codeEditor');
    
    // Hide editor interface
    editorInterface.style.display = 'none';
    mainContent.style.display = 'block';
    backToMain.style.display = 'none';
    
    // Hide validation result
    validationResult.style.display = 'none';
    
    // Remove live preview event listener
    codeEditor.removeEventListener('input', updatePreview);
    
    // Clear current task
    window.currentTask = null;
}

// Certificate generation with high quality
function generateCertificate() {
    const userName = document.getElementById('userName').value || 'John Doe';
    const generatedCertificate = document.getElementById('generatedCertificate');
    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');
    
    console.log('Generating certificate for:', userName);
    
    // Set high-resolution canvas for crisp output
    const scale = window.devicePixelRatio || 2; // Use device pixel ratio for retina displays
    const width = 1200; // Increased from 800
    const height = 900;  // Increased from 600
    
    // Set actual canvas size
    canvas.width = width * scale;
    canvas.height = height * scale;
    
    // Scale the canvas back down using CSS
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    
    // Scale the drawing context so everything draws at the higher resolution
    ctx.scale(scale, scale);
    
    // Enable anti-aliasing for smoother text
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.textRenderingOptimization = 'optimizeQuality';
    
    // Show the certificate section
    generatedCertificate.style.display = 'block';
    
    // Load the certificate template
    const img = new Image();
    img.crossOrigin = "anonymous"; // Enable cross-origin for better compatibility
    
    img.onload = function() {
        console.log('Certificate template loaded');
        // Clear canvas and draw template
        ctx.clearRect(0, 0, width, height);
        
        // Draw image with high quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);
        
        // Add user name with high-quality text rendering
        ctx.font = 'bold 48px "Inter", Arial, sans-serif'; // Increased font size and better font
        ctx.fillStyle = '#2d3748';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Add text shadow for better visibility
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;
        
        ctx.fillText(userName, width / 2, 450); // Adjusted position for larger canvas
        
        // Reset shadow
        ctx.shadowColor = 'transparent';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        
        // Add current date with high quality
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        ctx.font = '24px "Inter", Arial, sans-serif'; // Increased font size
        ctx.fillStyle = '#666';
        ctx.fillText(`Completed on ${currentDate}`, width / 2, 720); // Adjusted position
    };
    
    img.onerror = function() {
        console.error('Failed to load certificate template');
        // Create a high-quality fallback certificate
        ctx.clearRect(0, 0, width, height);
        
        // Background with gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#f8f9fa');
        gradient.addColorStop(1, '#e9ecef');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Decorative border
        ctx.strokeStyle = '#e34c26';
        ctx.lineWidth = 8;
        ctx.strokeRect(40, 40, width - 80, height - 80);
        
        // Inner border
        ctx.strokeStyle = '#f16529';
        ctx.lineWidth = 4;
        ctx.strokeRect(60, 60, width - 120, height - 120);
        
        // Title with shadow
        ctx.fillStyle = '#e34c26';
        ctx.font = 'bold 72px "Inter", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowBlur = 6;
        
        ctx.fillText('Certificate of Completion', width / 2, 180);
        
        // Subtitle
        ctx.font = '36px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#f16529';
        ctx.fillText('HTML Learning Platform', width / 2, 240);
        
        // Reset shadow for user name
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;
        
        // User name
        ctx.font = 'bold 48px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#2d3748';
        ctx.fillText(userName, width / 2, 450);
        
        // Description
        ctx.shadowColor = 'transparent';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        
        ctx.font = '28px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#4a5568';
        ctx.fillText('has successfully completed all 30 HTML learning tasks', width / 2, 510);
        
        // Achievement badge
        ctx.font = '24px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#48bb78';
        ctx.fillText('★ Outstanding Achievement ★', width / 2, 570);
        
        // Date
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        ctx.font = '24px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText(`Completed on ${currentDate}`, width / 2, 720);
        
        // Signatures placeholder
        ctx.font = '20px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#888';
        ctx.fillText('HTML Learning Platform', width / 2, 780);
        
        // Decorative elements
        ctx.fillStyle = '#e34c26';
        ctx.beginPath();
        ctx.arc(150, 150, 30, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(width - 150, 150, 30, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(150, height - 150, 30, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(width - 150, height - 150, 30, 0, 2 * Math.PI);
        ctx.fill();
    };
    
    // Try to load the certificate template (4.png or 4.jpg)
    img.src = '4.png';
    
    // If 4.png fails, try 4.jpg
    img.addEventListener('error', function() {
        img.src = '4.jpg';
    });
}

function downloadCertificate(format) {
    const canvas = document.getElementById('certificateCanvas');
    const userName = document.getElementById('userName').value || 'John Doe';
    
    console.log('Downloading certificate as:', format);
    
    if (format === 'pdf') {
        // For PDF, use high-quality PNG conversion
        const imgData = canvas.toDataURL('image/png', 1.0); // Maximum quality
        
        // Create a new window with the image for printing as PDF
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Certificate - ${userName}</title>
                    <style>
                        @media print {
                            body { margin: 0; }
                            img { max-width: 100%; height: auto; page-break-inside: avoid; }
                        }
                    </style>
                </head>
                <body style="margin:0; display:flex; justify-content:center; align-items:center; min-height:100vh;">
                    <img src="${imgData}" style="max-width:100%; height:auto;">
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
        return;
    }
    
    // For image formats, use maximum quality
    let mimeType, quality;
    if (format === 'png') {
        mimeType = 'image/png';
        quality = 1.0; // PNG doesn't use quality parameter, but set for consistency
    } else {
        mimeType = 'image/jpeg';
        quality = 0.95; // High quality for JPEG
    }
    
    const link = document.createElement('a');
    link.download = `certificate-${userName.replace(/\s+/g, '-').toLowerCase()}.${format}`;
    link.href = canvas.toDataURL(mimeType, quality);
    link.click();
}

// Save progress to localStorage
function saveProgress() {
    const progressData = {
        progress: progress,
        timestamp: new Date().toISOString(),
        version: '1.0'
    };
    localStorage.setItem('htmlLearningProgress', JSON.stringify(progressData));
    console.log('Progress saved:', progressData);
}

// Load progress from localStorage
function loadProgress() {
    const savedData = localStorage.getItem('htmlLearningProgress');
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            
            // Handle both old and new data formats
            if (parsedData.progress) {
                progress = parsedData.progress;
                console.log('Progress loaded (new format):', parsedData);
            } else {
                // Old format compatibility
                progress = parsedData;
                console.log('Progress loaded (old format):', parsedData);
            }
            
            // Update task statuses
            Object.keys(progress).forEach(level => {
                for (let i = 0; i < progress[level]; i++) {
                    updateTaskStatus(level, i, 'completed');
                }
            });
        } catch (error) {
            console.error('Error loading progress:', error);
            // Reset progress if data is corrupted
            progress = { beginner: 0, intermediate: 0, advanced: 0 };
        }
    }
}

// Reset progress function (for debugging/admin purposes)
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        progress = { beginner: 0, intermediate: 0, advanced: 0 };
        localStorage.removeItem('htmlLearningProgress');
        
        // Reset all task statuses
        Object.keys(tasks).forEach(level => {
            tasks[level].forEach((task, index) => {
                updateTaskStatus(level, index, 'not-started');
            });
        });
        
        updateProgress();
        console.log('Progress reset');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // Initialize theme
    initializeTheme();
    
    // Load saved progress
    loadProgress();
    
    // Initialize progress display
    updateProgress();
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        console.log('Theme toggle listener added');
    }
    
    // Back to home button - FIXED TO REDIRECT TO INDEX.HTML
    const backToHomeBtn = document.getElementById('backToHome');
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
        console.log('Back to home button listener added');
    }
    
    // Task start buttons
    document.querySelectorAll('.start-task-btn').forEach(button => {
        button.addEventListener('click', function() {
            const taskCard = this.closest('.task-card');
            const level = taskCard.getAttribute('data-level');
            const taskIndex = parseInt(taskCard.getAttribute('data-task'));
            startTask(level, taskIndex);
        });
    });
    
    // Editor actions
    const runCodeBtn = document.getElementById('runCode');
    const validateCodeBtn = document.getElementById('validateCode');
    const backToTasksBtn = document.getElementById('backToTasks');
    const backToMainBtn = document.getElementById('backToMain');
    
    if (runCodeBtn) {
        runCodeBtn.addEventListener('click', runCode);
        console.log('Run code button listener added');
    }
    
    if (validateCodeBtn) {
        validateCodeBtn.addEventListener('click', validateCode);
        console.log('Validate code button listener added');
    }
    
    if (backToTasksBtn) {
        backToTasksBtn.addEventListener('click', backToTasks);
        console.log('Back to tasks button listener added');
    }
    
    if (backToMainBtn) {
        backToMainBtn.addEventListener('click', backToTasks);
        console.log('Back to main button listener added');
    }
    
    // Certificate generation
    const generateCertBtn = document.getElementById('generateCertificate');
    if (generateCertBtn) {
        generateCertBtn.addEventListener('click', generateCertificate);
        console.log('Generate certificate button listener added');
    }
    
    console.log('All event listeners initialized');
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to validate code
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (window.currentTask) {
            validateCode();
        }
    }
    
    // Escape to go back to tasks
    if (e.key === 'Escape') {
        if (window.currentTask) {
            backToTasks();
        }
    }
});
