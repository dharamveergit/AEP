#!/usr/bin/env node

/*
The script will generate a list of all the proposals with the relevant information in a json file.
*/ 

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Function to read the preamble from a readme.md file
function readPreamble(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const preambleMatch = content.match(/---\n([\s\S]*?)\n---/);
    if (preambleMatch) {
        return preambleMatch[1];
    }
    return null;
}

// Function to parse the preamble using js-yaml and handle comma-separated values
function parsePreamble(preamble) {
    try {
        const data = yaml.load(preamble);
        for (const key in data) {
            if (typeof data[key] === 'string' && data[key].includes(',')) {
                data[key] = data[key].split(',').map(item => item.trim());
            }
        }
        return data;
    } catch (e) {
        console.error('Error parsing YAML:', e);
        return null;
    }
}
const formatAepLink = (aep) => {
    return aep ? `[${aep}](spec/aep-${aep})` : '';
};
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        return date instanceof Date && !isNaN(date) 
            ? date.toISOString().split('T')[0]
            : '';
    };

// Function to update roadmap markdown
function updateIndex(indexData) {
    const roadmapPath = path.join(__dirname, '..', 'INDEX.md');

    const formatTypeCategory = (type, category) => {
        if (category) {
            return `${type || ''}/${category}`;
        }
        return type || '';
    };

    const headers = ['AEP', 'Title', 'Status', 'Type', 'Created', 'Completed', 'Estimated'];
    
    // Sort indexData by AEP number
    const sortedData = [...indexData].sort((a, b) => {
        const aepA = parseInt(a.aep);
        const aepB = parseInt(b.aep);
        return aepA - aepB;
    });

    const tableContent = [
        `| ${headers.join(' | ')} |`,
        `| ${headers.map(() => '---').join(' | ')} |`,
        ...sortedData.map(item => 
            `| ${formatAepLink(item.aep)} | ${item.title || ''} | ${item.status || ''} | ${formatTypeCategory(item.type, item.category)} | ${formatDate(item.created)} | ${formatDate(item.completed)} | ${formatDate(item['estimated-completion'])} |`
        )
    ].join('\n');

    fs.writeFileSync(roadmapPath, tableContent);
}

// Add new function to update roadmap markdown
function updateRoadmap(indexData) {
    const roadmapPath = path.join(__dirname, '..', 'ROADMAP.md');
    
    // Filter items with roadmap field (major/minor) and required dates
    const roadmapItems = indexData.filter(item => 
        (item.roadmap === 'major' || item.roadmap === 'minor') &&
        (item.completed || item['estimated-completion'])
    );

    // Sort by completed date first, then by estimated completion
    const sortedItems = roadmapItems.sort((a, b) => {
        const dateA = a.completed || a['estimated-completion'];
        const dateB = b.completed || b['estimated-completion'];
        return new Date(dateA) - new Date(dateB);
    });

    const headers = ['AEP Number', 'Title', 'Date', 'Priority'];
    
    const tableContent = [
        `| ${headers.join(' | ')} |`,
        `| ${headers.map(() => '---').join(' | ')} |`,
        ...sortedItems.map(item => {
            const date = item.completed || item['estimated-completion'];
            const formattedDate = date ? new Date(date).toISOString().split('T')[0] : '';
            const priority = item.roadmap.charAt(0).toUpperCase() + item.roadmap.slice(1);
            return `| ${formatAepLink(item.aep)} | ${item.title || ''} | ${formattedDate} | ${priority} |`;
        })
    ].join('\n');

    fs.writeFileSync(roadmapPath, tableContent);
}

// Main function to generate index.json
function generateIndexJson() {
    const specDir = path.join(__dirname, '..', 'spec');
    const indexData = [];

    // Check if directory exists
    if (!fs.existsSync(specDir)) {
        console.error('Error: spec directory not found!');
        process.exit(1);
    }

    // Read directory contents
    const files = fs.readdirSync(specDir);
    if (files.length === 0) {
        console.error('Error: No files found in spec directory!');
        process.exit(1);
    }

    files.forEach(dir => {
        const readmePath = path.join(specDir, dir, 'readme.md');
        if (fs.existsSync(readmePath)) {
            const preamble = readPreamble(readmePath);
            if (preamble) {
                const preambleData = parsePreamble(preamble);
                if (preambleData) {
                    indexData.push(preambleData);
                }
            }
        }
    });

    // Check if we found any valid data
    if (indexData.length === 0) {
        console.error('Error: No valid data found in spec files!');
        process.exit(1);
    }

    fs.writeFileSync(path.join(__dirname, '..', 'index.json'), JSON.stringify(indexData, null, 2));
    updateIndex(indexData);
    updateRoadmap(indexData);
}

generateIndexJson();