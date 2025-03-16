# Setting Up EmailJS for Form Submissions

This guide will help you set up EmailJS to receive form submissions via email.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2. The free tier allows you to send 200 emails per month, which should be sufficient for a small to medium-sized application form.

## Step 2: Connect an Email Service

1. After signing in, go to the "Email Services" tab.
2. Click "Add New Service" and select your preferred email provider (Gmail, Outlook, etc.).
3. Follow the authentication steps to connect your email account.
4. Once connected, note down the **Service ID** for later use.

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab.
2. Click "Create New Template".
3. Use the template below, which includes all form fields exactly as they appear in the application:

```
Subject: New Fire Camp Application: {{firstName}} {{lastName}}

NEW FIRE CAMP APPLICATION

PERSONAL INFORMATION
------------------------------------------
Title: {{title}}
First Name: {{firstName}}
Last Name: {{lastName}}
Street + No.: {{street}}
Postal Code: {{postalCode}}
City: {{city}}
Country: {{country}}
Email: {{email}}
Phone No.: {{phone}}
Date of Birth: {{dateOfBirth}}

SOCIAL MEDIA
------------------------------------------
Allow WhatsApp Group: {{whatsappGroup}}
Has Instagram: {{instagram}}
Has Facebook: {{facebook}}

BACKGROUND INFORMATION
------------------------------------------
Profession: {{profession}}
Family Status: {{familyStatus}}

CHURCH INFORMATION
------------------------------------------
Church: {{church}}
Ministries: {{ministries}}
Pastor Info: {{pastorInfo}}
Pastor Contact Permission: {{pastorContact}}

FAITH JOURNEY
------------------------------------------
How long known Jesus: {{howLongKnownJesus}}
How came to Jesus: {{howCameToJesus}}

EVANGELISM EXPERIENCE
------------------------------------------
Last evangelism experience: {{lastEvangelism}}
Evangelism frequency: {{evangelismFrequency}}
Evangelism preference: {{evangelismPreference}}
Presentation evangelism calling: {{presentationCalling}}
Open-air gatherings calling: {{openAirCalling}}

FIRE CAMP INFORMATION
------------------------------------------
How heard about Fire Camp: {{hearAboutFireCamp}}
Main objective: {{objective}}
Preferred language: {{preferredLanguage}}

ADDITIONAL INFORMATION
------------------------------------------
Crime history: {{crimeHistory}}

------------------------------------------
This application was submitted on {{system_date}}
```

4. Save the template and note down the **Template ID**.

## Step 4: Get Your Public Key

1. Go to the "Account" tab.
2. Find your **Public Key** in the API Keys section.

## Step 5: Update Your Application Code

1. Open `src/components/ApplicationForm.tsx`.
2. Replace the placeholder values with your actual EmailJS credentials:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
   const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
   const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
   ```

## Step 6: Test Your Form

1. Run your application and fill out the form.
2. Submit the form and check if you receive the email.
3. If you encounter any issues, check the browser console for error messages.

## Additional Tips

- The form field names in your React component exactly match the variables in the email template (e.g., `firstName` in the form matches `{{firstName}}` in the template).
- EmailJS also provides some system variables like `{{system_date}}` that you can use in your template.
- Consider adding a honeypot field to prevent spam submissions.
- You can customize the success and error messages in the code.
- For production, consider upgrading to a paid plan if you expect more than 200 submissions per month.
- The form already includes HTML5 validation for required fields, which prevents submission if required fields are empty.
- You can implement additional custom validation logic in the `handleSubmit` function if needed.
- Consider adding a privacy policy link or checkbox to ensure GDPR compliance if collecting data from European users. 