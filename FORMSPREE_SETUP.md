# Formspree.io Integration Setup Guide

## Overview
This guide will help you set up Formspree.io integration for the two contact forms on your India Front Magazine website.

## Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Forms

### Editorial Form (Guest Articles & Press Releases)
1. In your Formspree dashboard, click "New Form"
2. Set the form name: "Editorial Contributions"
3. Set the email destination: `editor@indiafront.co.in`
4. Copy the form endpoint (will look like: `https://formspree.io/f/abc123def`)

### Brand Partnership Form
1. Click "New Form" again
2. Set the form name: "Brand Partnerships"
3. Set the email destination: `sales@indiafront.co.in`
4. Copy the form endpoint (will look like: `https://formspree.io/f/xyz789ghi`)

## Step 3: Form Integration Complete ✓
The forms have been integrated with the following endpoints:

1. Editorial Form: `https://formspree.io/f/xldnazpb`
2. Brand Partnership Form: `https://formspree.io/f/xyzjlonj`

Both forms are now fully functional and ready for use.

## Step 4: Test Forms
1. Submit test data through both forms
2. Check that emails arrive at the correct addresses
3. Verify success/error messages appear correctly

## Form Fields Being Submitted
Both forms collect:
- Name (required)
- Email (required)
- Phone (optional)
- Company (optional)
- Hidden subject field (automatically set)

## Features Included
- Spam protection via hidden _gotcha field
- Real-time form validation
- Success/error message display
- Form reset on successful submission
- Proper error handling for network issues

## Notes
- Free Formspree accounts allow 50 submissions per month
- Upgrade to paid plan for higher limits and additional features
- All submissions are stored in your Formspree dashboard