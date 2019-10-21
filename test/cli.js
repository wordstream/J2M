var should = require('chai').should();
var path = require('path');
var execSync = require('child_process').execSync;

describe('j2m_command_line_implementation', function() {
    it('should be able to handle a complicated multi-line jira-wiki string and convert it to markdown', function() {
        var jira_path = path.resolve(__dirname, 'test.jira');
        var md_path = path.resolve(__dirname, 'test.md');
        var command = 'j2m --toM ' + jira_path + ' | awk \'/^$/ {nlstack=nlstack "\\n";next;} {printf "%s",nlstack; nlstack=""; print;}\' | cmp ' + md_path;
        (function () { execSync(command); }).should.not.throw(Error);
    });
    it('should be able to handle a complicated multi-line markdown string and convert it to jira-wiki', function() {
        var jira_path = path.resolve(__dirname, 'test.md');
        var md_path = path.resolve(__dirname, 'test.jira');
        var command = 'j2m --toJ ' + jira_path + ' | awk \'/^$/ {nlstack=nlstack "\\n";next;} {printf "%s",nlstack; nlstack=""; print;}\' | cmp ' + md_path;
        (function () { execSync(command); }).should.not.throw(Error);
    });
});

