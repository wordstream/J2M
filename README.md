# jira2md

## JIRA to MarkDown text format converter
Convert from JIRA text formatting to GitHub Flavored MarkDown and back again. Also allows for both to be converted to HTML.

## Credits
This module was heavily inspired by the J2M project by Fokke Zandbergen (http://j2m.fokkezb.nl/). Major credit to Fokke (and other contributors) for establishing a lot of the fundamental RexExp patterns for this module to work.

## Installation
```
npm install jira2md
```

## Supported Conversions
NOTE: All conversion work bi-directionally (from jira to markdown and back again).

* Headers (H1-H6)
* Bold
* Italic
* Bold + Italic
* Un-ordered lists
* Ordered lists
* Programming Language-specific code blocks (with help from herbert-venancio)
* Inline preformatted text spans
* Un-named links
* Named links
* Monospaced Text
* ~~Citations~~ (Removed in 2.0.0)
* Strikethroughs
* Inserts
* Superscripts
* Subscripts
* Single-paragraph blockquotes
* Tables (thanks to erykwarren)
* Panels (thanks to erykwarren)


## How to Use

### Markdown String

We'll refer to this as the `md` variable in the examples below.

```
**Some bold things**
*Some italic stuff*
## H2
<http://google.com>
```

### Atlassian Wiki Syntax

We'll refer to this as the `jira` variable in the examples below.

```
*Some bold things**
_Some italic stuff_
h2. H2
[http://google.com]
```

### Examples

```javascript
// Include the module
var j2m = require('jira2md');

// If converting from Mardown to Jira Wiki Syntax:
var jira = j2m.to_jira(md);

// If converting from Jira Wiki Syntax to Markdown:
var md = j2m.to_markdown(jira);

// If converting from Markdown to HTML:
var html = j2m.md_to_html(md);

// If converting from JIRA Wiki Syntax to HTML:
var html = j2m.jira_to_html(jira);
```

## CLI
J2M is also available as a command line utility.

### Usage
```
$ j2m [--toM|--toJ] [--stdin] $filename

Options:
--toM, -m:    Treat input as jira text and convert it to Markdown
--toJ, -j:    Treat input as markdown text and convert it to Jira
--stdin:      Read input from stdin. In this case the give filename is ignored
```

#### Usage Example
```bash
# convert notes to jira markup and copy it to the clipboard (mac)
j2m --toJ notes.md | pbcopy

# retrieve some file in jira markup and save it as markdown
curl http://someserver.com/jira.txt | j2m --toM --stdin > notee.md
```

